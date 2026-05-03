import { MetadataRoute } from 'next';
import { getPages } from '@/lib/api/strapi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ru/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/locations/dubai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/abu-dhabi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/sharjah`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Static service pages
  const serviceSlugs = [
    'cloud',
    'cybersecurity',
    'it-amc',
    'it-consulting',
    'it-support',
    'managed-it',
    'structured-cabling',
  ];

  const staticServicePages: MetadataRoute.Sitemap = [
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/ru/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  // Static case study pages
  const staticCaseStudyPages: MetadataRoute.Sitemap = [
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
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static article pages
  const staticArticlePages: MetadataRoute.Sitemap = [
    'centralized-helpdesk-ru',
    'cloud-infrastructure-guide',
    'cybersecurity-guide',
    'it-consulting-guide',
    'it-support-guide',
    'managed-it-services-guide',
    'structured-cabling-guide',
    'it-consulting-assessment',
    'it-consulting-strategy',
    'it-consulting-roadmap',
    'it-consulting-infrastructure-design',
    'it-consulting-roi',
    'it-consulting-digital-transformation',
    'it-support-remote',
    'it-support-helpdesk',
    'it-support-onsite',
    'it-support-monitoring',
    'it-support-optimization',
    'it-support-24-7',
    'structured-cabling-fiber-optic',
    'structured-cabling-fluke-testing',
    'structured-cabling-retrofitting',
    'structured-cabling-industrial',
    'structured-cabling-wifi-heatmapping',
    'structured-cabling-physical-security',
    'it-amc-costs',
    'it-amc-priority',
    'it-amc-hardware',
    'it-amc-maintenance-visits',
    'it-amc-updates',
    'it-amc-comprehensive',
    'managed-it-cost',
    'managed-it-infrastructure',
    'managed-it-backup',
    'managed-it-monitoring',
    'managed-it-scalable',
    'managed-it-security',
    'cloud-migration',
    'cloud-cost-optimization',
    'cloud-data-management',
    'cloud-multi-hybrid',
    'cloud-security-compliance',
    'cloud-infrastructure',
    'cybersecurity-compliance',
    'cybersecurity-data-protection',
    'cybersecurity-firewall',
    'cybersecurity-incident-response',
    'cybersecurity-monitoring',
    'cybersecurity-protection',
    'managed-it-co-managed',
    'cloud-zero-trust',
    'cybersecurity-antivirus-dead',
    'it-support-onboarding',
    'it-amc-vs-msp',
    'it-amc-hardware-lifecycle',
    'it-consulting-ransomware-survival',
    'structured-cabling-fiber-vs-cat6a',
    'structured-cabling-fluke-importance',
  ].map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static industry pages
  const staticIndustryPages: MetadataRoute.Sitemap = [
    'finance-banking',
    'real-estate',
    'healthcare',
    'education',
    'retail-hospitality',
    'government',
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic pages from Strapi (fallback to static if Strapi unavailable)
  let dynamicPages: MetadataRoute.Sitemap = [];

  try {
    // Pages (only dynamic pages, not services/case-studies/articles)
    const pages = await getPages();
    const pagePages: MetadataRoute.Sitemap = pages.map((page) => ({
      url: `${baseUrl}/${page.attributes.slug}`,
      lastModified: page.attributes.updatedAt ? new Date(page.attributes.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    dynamicPages = [...pagePages];
  } catch (error) {
    console.error('Error generating sitemap from Strapi:', error);
  }

  return [
    ...staticPages,
    ...staticServicePages,
    ...staticCaseStudyPages,
    ...staticCaseStudyPages.map(p => ({ ...p, url: p.url.replace('/case-studies/', '/ru/case-studies/')})),
    ...staticArticlePages,
    ...staticIndustryPages,
    ...staticIndustryPages.map(p => ({ ...p, url: p.url.replace('/industries/', '/ru/industries/')})),
    ...dynamicPages,
  ];
}


