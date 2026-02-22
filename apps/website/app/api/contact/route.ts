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
  try {
    const body = await request.json();
    const { name, email, phone, message, website, recaptchaToken } = body.data || body;

    if (website?.trim()) {
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

    if (!SMTP_PASS) {
      console.error('[api/contact] SMTP_PASS is not set — cannot send email');
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

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_FROM,
      to: recipients.join(', '),
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
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
        `<p><strong>Name:</strong> ${name}</p>`,
        `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>`,
        phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : '',
        '<p><strong>Message:</strong></p>',
        `<p>${message.replace(/\n/g, '<br>')}</p>`,
        '<hr>',
        '<p><em>Sent from the NOCKO website contact form.</em></p>',
      ].join('\n'),
    });

    console.log(`[api/contact] Email sent to: ${recipients.join(', ')}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[api/contact]', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message',
      },
      { status: 500 }
    );
  }
}
