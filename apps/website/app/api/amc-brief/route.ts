import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Same mail channels as /api/contact: Resend first, Gmail SMTP as fallback.
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const MAIL_FROM = process.env.MAIL_FROM || 'NOCKO Website <website@nocko.com>';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || 'Nocko.it@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;
const RECIPIENTS = (process.env.AMC_BRIEF_RECIPIENTS || process.env.CONTACT_RECIPIENTS || 'Nocko.it@gmail.com')
  .split(',')
  .map((e) => e.trim())
  .filter(Boolean);

const MAX_BODY = 60_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Section = { title: string; items: { label: string; value: string }[] };

function escapeHtml(v: string): string {
  return v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const str = (v: unknown, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

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
  let sections: Section[] = [];
  let contact = { company: '', name: '', email: '', phone: '' };
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) {
      return NextResponse.json({ success: false, message: 'Payload too large' }, { status: 413 });
    }
    const body = JSON.parse(raw);

    if (str(body.website)) {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }
    // A real person needs well over 30 seconds for this questionnaire.
    const startedAt = Number(body.formStartedAt);
    const elapsed = Date.now() - startedAt;
    if (!Number.isFinite(startedAt) || elapsed < 30_000 || elapsed > 30 * 24 * 3600_000) {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }

    const c = body.contact || {};
    contact = { company: str(c.company, 200), name: str(c.name, 200), email: str(c.email, 200), phone: str(c.phone, 50) };
    if (!contact.company || !contact.name || !contact.phone || !EMAIL_RE.test(contact.email)) {
      return NextResponse.json({ success: false, message: 'Company, name, email and phone are required' }, { status: 400 });
    }

    sections = (Array.isArray(body.sections) ? body.sections : []).slice(0, 20).map((sec: any) => ({
      title: str(sec?.title, 200),
      items: (Array.isArray(sec?.items) ? sec.items : []).slice(0, 60).map((it: any) => ({
        label: str(it?.label, 300),
        value: str(it?.value, 4000),
      })),
    }));
    const lang = body.lang === 'ru' ? 'RU' : 'EN';

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
    if (!rateLimit(ip)) {
      return NextResponse.json({ success: false, message: 'Too many requests' }, { status: 429 });
    }

    if (!RESEND_API_KEY && !SMTP_PASS) {
      console.error('[api/amc-brief] Neither RESEND_API_KEY nor SMTP_PASS is set');
      return NextResponse.json({ success: false, message: 'Mail service is not configured' }, { status: 503 });
    }

    const subject = `[nocko.com] AMC questionnaire — ${contact.company}`;
    const text = [
      `New AMC questionnaire (filled in ${lang})`,
      '',
      ...sections.flatMap((sec) => [`== ${sec.title} ==`, ...sec.items.map((it) => `${it.label}: ${it.value}`), '']),
      '---',
      'Sent from nocko.com/amc-brief',
    ].join('\n');
    const html = [
      '<div style="font-family:Arial,sans-serif;font-size:14px;color:#1f2937;max-width:760px">',
      `<h2 style="margin:0 0 4px">AMC questionnaire — ${escapeHtml(contact.company)}</h2>`,
      `<p style="margin:0 0 16px;color:#6b7280">Filled in ${lang}. Reply to this email to answer the client directly.</p>`,
      ...sections.map(
        (sec) =>
          `<h3 style="margin:20px 0 6px;color:#0066cc">${escapeHtml(sec.title)}</h3>` +
          '<table cellpadding="6" style="border-collapse:collapse;width:100%">' +
          sec.items
            .map(
              (it) =>
                `<tr><td style="border-bottom:1px solid #eee;color:#6b7280;width:42%;vertical-align:top">${escapeHtml(it.label)}</td>` +
                `<td style="border-bottom:1px solid #eee;vertical-align:top">${escapeHtml(it.value).replace(/\n/g, '<br>')}</td></tr>`,
            )
            .join('') +
          '</table>',
      ),
      '<p style="margin-top:24px;color:#9ca3af;font-size:12px">Sent from nocko.com/amc-brief</p>',
      '</div>',
    ].join('');

    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: MAIL_FROM, to: RECIPIENTS, reply_to: contact.email, subject, text, html }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`);
    } else {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await transporter.sendMail({ from: SMTP_FROM, to: RECIPIENTS.join(', '), replyTo: contact.email, subject, text, html });
    }

    console.log(`[api/amc-brief] Sent questionnaire from ${contact.company} to ${RECIPIENTS.join(', ')}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    // Full answers go to the log so the lead can be recovered from Vercel logs if mail fails.
    console.error('[api/amc-brief] SEND FAILED', {
      error: error instanceof Error ? error.message : String(error),
      lead: { contact, sections },
    });
    return NextResponse.json({ success: false, message: 'Failed to send' }, { status: 500 });
  }
}
