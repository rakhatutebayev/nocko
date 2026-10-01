import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for geo-location routing, headers, and blocking vercel.app domain indexing
 */
export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const response = NextResponse.next();

  // Блокировка индексации для vercel.app домена
  if (hostname.includes('vercel.app')) {
    // Добавляем заголовок X-Robots-Tag для блокировки индексации
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
  }

  // Add geo headers for SEO (if available)
  const geo = (request as any).geo || {};
  if (geo.country) {
    response.headers.set('X-Country-Code', geo.country);
  }
  if (geo.city) {
    response.headers.set('X-City', geo.city);
  }
  if (geo.region) {
    response.headers.set('X-Region', geo.region);
  }

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()'
  );
  // CSP в режиме Report-Only: ничего не блокирует, нарушения видны в DevTools.
  // После недели без нарушений переключить на Content-Security-Policy.
  response.headers.set(
    'Content-Security-Policy-Report-Only',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "frame-src https://www.google.com https://maps.google.com https://www.youtube.com https://www.youtube-nocookie.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; ')
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
