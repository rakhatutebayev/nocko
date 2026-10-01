import { MetadataRoute } from 'next';
import { getPages } from '@/lib/api/strapi';
import { getLastmod } from '@/lib/seo/lastmod';

/**
 * lastmod values come from lib/seo/lastmod.json, generated from git history by
 * `node scripts/gen-lastmod.mjs` (wired as the "prebuild" npm script). Re-run
 * the script and commit the JSON before deploying.
 */

export const serviceSlugs = [
  'cloud',
  'cybersecurity',
  'it-amc',
  'it-consulting',
  'it-support',
  'managed-it',
  'structured-cabling',
];

export const caseStudySlugs = [
  'projection',
  'solus',
  'fh',
  'scalini',
  'gss',
  'technohub',
  'ransomware-recovery',
  'm365-audit',
  'it-consulting',
  'enterprise',
  'cybersecurity',
  'network-segmentation',
  'emr-backup',
  'workspace-migration',
];

// EN articles. 'centralized-helpdesk-ru' is RU-only (EN path 308s to /ru/).
export const articleSlugs = [
  'data-backup-services-dubai',
  'cloud-cost-optimization',
  'cloud-infrastructure-guide',
  'cloud-migration',
  'cloud-zero-trust',
  'cybersecurity-antivirus-dead',
  'cybersecurity-guide',
  'it-amc-guide',
  'it-amc-hardware-lifecycle',
  'it-amc-vs-msp',
  'it-consulting-digital-transformation',
  'it-consulting-guide',
  'it-consulting-infrastructure-design',
  'it-consulting-ransomware-survival',
  'it-consulting-roi',
  'it-consulting-strategy',
  'it-support-24-7',
  'it-support-guide',
  'it-support-helpdesk',
  'it-support-monitoring',
  'it-support-onboarding',
  'it-support-onsite',
  'it-support-optimization',
  'it-support-remote',
  'managed-it-co-managed',
  'managed-it-infrastructure',
  'managed-it-services-guide',
  'structured-cabling-fiber-optic',
  'structured-cabling-fiber-vs-cat6a',
  'structured-cabling-fluke-importance',
  'structured-cabling-fluke-testing',
  'structured-cabling-guide',
  'structured-cabling-industrial',
  'structured-cabling-physical-security',
  'structured-cabling-retrofitting',
  'structured-cabling-wifi-heatmapping',
  'cloud-banking-uae',
  'google-workspace-vs-microsoft-365',
  'healthcare-it-backup-uae',
];

export const industrySlugs = [
  'finance-banking',
  'real-estate',
  'healthcare',
  'education',
  'retail-hospitality',
  'government',
];

const locationSlugs = ['dubai', 'abu-dhabi', 'sharjah'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  /** EN route + its RU twin, each with hreflang alternates pointing at the pair. */
  const pair = (path: string): MetadataRoute.Sitemap => {
    const en = `${baseUrl}${path}`;
    const ru = `${baseUrl}/ru${path === '/' ? '' : path}`;
    const languages = { 'en-AE': en, 'ru-RU': ru, 'x-default': en };
    return [
      { url: en, lastModified: getLastmod(path), alternates: { languages } },
      { url: ru, lastModified: getLastmod(path === '/' ? '/ru' : `/ru${path}`), alternates: { languages } },
    ];
  };

  /** Single-language route, no alternates. */
  const single = (path: string): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${path}`,
    lastModified: getLastmod(path),
  });

  const pairedPaths = [
    '/',
    '/about',
    '/services',
    '/case-studies',
    '/articles',
    '/contact',
    '/privacy-policy',
    '/terms',
    ...locationSlugs.map((s) => `/locations/${s}`),
    ...serviceSlugs.map((s) => `/services/${s}`),
    ...caseStudySlugs.map((s) => `/case-studies/${s}`),
    ...articleSlugs.map((s) => `/articles/${s}`),
    ...industrySlugs.map((s) => `/industries/${s}`),
  ];

  const ruOnlyPaths = ['/services/it-support-ru', '/ru/articles/centralized-helpdesk-ru'];

  // Dynamic pages from Strapi (fallback to static if Strapi unavailable)
  let dynamicPages: MetadataRoute.Sitemap = [];
  try {
    const pages = await getPages();
    dynamicPages = pages.map((page) => ({
      url: `${baseUrl}/${page.attributes.slug}`,
      lastModified: page.attributes.updatedAt
        ? new Date(page.attributes.updatedAt)
        : getLastmod(`/${page.attributes.slug}`),
    }));
  } catch (error) {
    console.error('Error generating sitemap from Strapi:', error);
  }

  return [...pairedPaths.flatMap(pair), ...ruOnlyPaths.map(single), ...dynamicPages];
}
