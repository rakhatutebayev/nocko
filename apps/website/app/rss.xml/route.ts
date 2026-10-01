import staticArticles from '@/lib/data/staticArticles.json';
import { articleSlugs } from '@/app/sitemap';
import { getLastmod } from '@/lib/seo/lastmod';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

type ArticleMeta = { slug: string; title: string; excerpt?: string };

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function GET() {
  const meta = new Map<string, ArticleMeta>(
    (staticArticles as ArticleMeta[]).map((a) => [a.slug, a])
  );

  const items = articleSlugs
    .map((slug) => {
      const path = `/articles/${slug}`;
      const a = meta.get(slug);
      return {
        slug,
        link: `${BASE_URL}${path}`,
        title: a?.title ?? slugToTitle(slug),
        description: a?.excerpt ?? '',
        date: getLastmod(path),
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const lastBuildDate = (items[0]?.date ?? new Date()).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NOCKO IT Articles</title>
    <link>${BASE_URL}/articles</link>
    <description>Guides on IT support, managed IT, cybersecurity, cloud, IT AMC and structured cabling for UAE businesses.</description>
    <language>en-AE</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (i) => `    <item>
      <title>${escapeXml(i.title)}</title>
      <link>${i.link}</link>
      <guid isPermaLink="true">${i.link}</guid>
      <description>${escapeXml(i.description)}</description>
      <pubDate>${i.date.toUTCString()}</pubDate>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
