import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/static/media/', '/_next/static/chunks/', '/manifest.json', '/favicon.ico'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/static/media/', '/_next/static/chunks/', '/manifest.json', '/favicon.ico'],
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
      { userAgent: 'cohere-ai', disallow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}




