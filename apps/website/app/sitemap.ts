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
      url: `${baseUrl}/locations/dubai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Static service pages
  const staticServicePages: MetadataRoute.Sitemap = [
    'cloud',
    'cybersecurity',
    'it-amc',
    'it-consulting',
    'it-support',
    'managed-it',
    'structured-cabling',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Static case study pages
  const staticCaseStudyPages: MetadataRoute.Sitemap = [
    'projection',
    'solus',
    'fh',
    'scalini',
    'gss',
    'technohub',
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static article pages
  const staticArticlePages: MetadataRoute.Sitemap = [
    'cloud-cost-optimization',
    'cloud-data-management',
    'cloud-infrastructure',
    'cloud-migration',
    'cloud-multi-hybrid',
    'cloud-security-compliance',
    'cybersecurity-compliance',
    'cybersecurity-data-protection',
    'cybersecurity-firewall',
    'cybersecurity-incident-response',
    'cybersecurity-monitoring',
    'cybersecurity-protection',
    'deployment',
    'it-amc-comprehensive',
    'it-amc-costs',
    'it-amc-hardware',
    'it-amc-maintenance-visits',
    'it-amc-priority',
    'it-amc-updates',
    'it-consulting-assessment',
    'it-consulting-digital-transformation',
    'it-consulting-infrastructure-design',
    'it-consulting-roadmap',
    'it-consulting-roi',
    'it-consulting-strategy',
    'it-support-24-7',
    'it-support-helpdesk',
    'it-support-monitoring',
    'it-support-onsite',
    'it-support-optimization',
    'it-support-remote',
    'lifecycle',
    'managed-it-backup',
    'managed-it-cost',
    'managed-it-infrastructure',
    'managed-it-monitoring',
    'managed-it-scalable',
    'managed-it-security',
    'performance',
  ].map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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
    ...staticArticlePages,
    ...dynamicPages,
  ];
}


