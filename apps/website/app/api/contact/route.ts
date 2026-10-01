import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || 'Nocko.it@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;
const CONTACT_RECIPIENTS = (process.env.CONTACT_RECIPIENTS || 'Nocko.it@gmail.com')
  .split(',')
  .map((e) => e.trim())
  .filter(Boolean);

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || '';

// Основной канал: Resend (HTTP API, отправка с домена nocko.com).
// Запасной: SMTP (Gmail), если RESEND_API_KEY не задан.
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const MAIL_FROM = process.env.MAIL_FROM || 'NOCKO Website <website@nocko.com>';

function escapeHtml(v: string): string {
  return v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function sendViaResend(mail: { to: string[]; replyTo: string; subject: string; text: string; html: string }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: mail.to,
      reply_to: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
  return (await res.json()) as { id?: string };
}

const SPAM_KEYWORDS = [
  'viagra', 'cialis', 'casino', 'poker', 'lottery', 'winner',
  'click here', 'buy now', 'limited time', 'act now',
  'free money', 'get rich', 'work from home', 'make money fast',
  'bitcoin', 'crypto', 'investment opportunity', 'guaranteed',
];

function isSpam(text: string): boolean {
  const lower = text.toLowerCase();
  if (SPAM_KEYWORDS.some((kw) => lower.includes(kw))) return true;
  const urls = text.match(/https?:\/\/[^\s]+/g);
  if (urls && urls.length > 2) return true;
  if (/(.)\1{10,}/.test(text)) return true;
  return false;
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, max = 5, windowMs = 3600_000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  let name = '', email = '', phone = '', message = '';
  try {
    const body = await request.json();
    const data = body.data || body;
    ({ name, email, phone, message } = data);
    const { website, recaptchaToken, formStartedAt } = data;

    if (website?.trim()) {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }

    // Bots POST instantly; humans take at least a few seconds to fill the form.
    const startedAt = Number(formStartedAt);
    const elapsed = Date.now() - startedAt;
    if (!Number.isFinite(startedAt) || elapsed < 3000 || elapsed > 24 * 3600_000) {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });
    }

    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (!rateLimit(clientIp)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Try again later.' },
        { status: 429 }
      );
    }

    if (isSpam(`${name} ${email} ${message}`)) {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }

    // When reCAPTCHA is configured, a missing token is a hard failure — otherwise
    // bots could skip verification by simply omitting the token.
    if (RECAPTCHA_SECRET && !recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    if (recaptchaToken && RECAPTCHA_SECRET) {
      try {
        const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${encodeURIComponent(RECAPTCHA_SECRET)}&response=${encodeURIComponent(recaptchaToken)}&remoteip=${encodeURIComponent(clientIp)}`,
        });
        const data = await res.json();
        if (!data.success || (data.score !== undefined && data.score < 0.5)) {
          return NextResponse.json(
            { success: false, message: 'reCAPTCHA verification failed' },
            { status: 400 }
          );
        }
      } catch {
        console.warn('[api/contact] reCAPTCHA check failed, continuing');
      }
    }

    if (!RESEND_API_KEY && !SMTP_PASS) {
      console.error('[api/contact] Neither RESEND_API_KEY nor SMTP_PASS is set');
      return NextResponse.json(
        { success: false, message: 'Mail service is not configured' },
        { status: 503 }
      );
    }

    const recipients = CONTACT_RECIPIENTS.filter(
      (r) => r.toLowerCase() !== email.toLowerCase()
    );
    if (!recipients.length) {
      console.error('[api/contact] No recipients after filtering');
      return NextResponse.json(
        { success: false, message: 'No recipients configured' },
        { status: 500 }
      );
    }

    const safe = { name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone || ''), message: escapeHtml(message) };
    const mail = {
      to: recipients,
      replyTo: email,
      subject: `[nocko.com] New website enquiry - ${name}`,
      text: [
        'New contact form submission:',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        'Message:',
        message,
        '',
        '---',
        'Sent from the NOCKO website contact form.',
      ].join('\n'),
      html: [
        '<h2>New Contact Form Submission</h2>',
        `<p><strong>Name:</strong> ${safe.name}</p>`,
        `<p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>`,
        phone ? `<p><strong>Phone:</strong> <a href="tel:${safe.phone}">${safe.phone}</a></p>` : '',
        '<p><strong>Message:</strong></p>',
        `<p>${safe.message.replace(/\n/g, '<br>')}</p>`,
        '<hr>',
        '<p><em>Sent from the NOCKO website contact form.</em></p>',
      ].join(''),
    };

    if (RESEND_API_KEY) {
      const r = await sendViaResend(mail);
      console.log(`[api/contact] Sent via Resend id=${r.id ?? '?'} to: ${recipients.join(', ')}`);
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({ from: SMTP_FROM, to: recipients.join(', '), replyTo: mail.replyTo, subject: mail.subject, text: mail.text, html: mail.html });

    console.log(`[api/contact] Email sent to: ${recipients.join(', ')}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    // Полный текст заявки в лог: если почта не ушла, лид можно восстановить из логов Vercel.
    console.error('[api/contact] SEND FAILED', {
      error: error instanceof Error ? error.message : String(error),
      lead: { name, email, phone, message },
    });
    // Наружу только общий текст: детали SMTP (логин, коды Gmail) посетителю не показываем.
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
