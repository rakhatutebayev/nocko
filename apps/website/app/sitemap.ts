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
      url: `${baseUrl}/ru/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
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
      url: `${baseUrl}/ru/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ru/terms`,
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
    {
      url: `${baseUrl}/ru/locations/dubai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/locations/abu-dhabi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/locations/sharjah`,
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
    'network-segmentation',
    'emr-backup',
    'workspace-migration',
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static article pages — EN
  const staticArticlePages: MetadataRoute.Sitemap = [
    'centralized-helpdesk-ru',
    'data-backup-services-dubai',
    'cloud-cost-optimization',
    'cloud-data-management',
    'cloud-infrastructure',
    'cloud-infrastructure-guide',
    'cloud-migration',
    'cloud-multi-hybrid',
    'cloud-security-compliance',
    'cloud-zero-trust',
    'cybersecurity-antivirus-dead',
    'cybersecurity-compliance',
    'cybersecurity-data-protection',
    'cybersecurity-firewall',
    'cybersecurity-guide',
    'cybersecurity-incident-response',
    'cybersecurity-monitoring',
    'cybersecurity-protection',
    'it-amc-comprehensive',
    'it-amc-costs',
    'it-amc-hardware',
    'it-amc-hardware-lifecycle',
    'it-amc-maintenance-visits',
    'it-amc-priority',
    'it-amc-updates',
    'it-amc-vs-msp',
    'it-consulting-assessment',
    'it-consulting-digital-transformation',
    'it-consulting-guide',
    'it-consulting-infrastructure-design',
    'it-consulting-ransomware-survival',
    'it-consulting-roadmap',
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
    'managed-it-backup',
    'managed-it-co-managed',
    'managed-it-cost',
    'managed-it-infrastructure',
    'managed-it-monitoring',
    'managed-it-scalable',
    'managed-it-security',
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
  ].map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // RU article pages
  const ruArticlePages: MetadataRoute.Sitemap = [
    'centralized-helpdesk-ru',
    'data-backup-services-dubai',
    'cloud-cost-optimization',
    'cloud-data-management',
    'cloud-infrastructure',
    'cloud-infrastructure-guide',
    'cloud-migration',
    'cloud-multi-hybrid',
    'cloud-security-compliance',
    'cloud-zero-trust',
    'cybersecurity-antivirus-dead',
    'cybersecurity-compliance',
    'cybersecurity-data-protection',
    'cybersecurity-firewall',
    'cybersecurity-guide',
    'cybersecurity-incident-response',
    'cybersecurity-monitoring',
    'cybersecurity-protection',
    'it-amc-comprehensive',
    'it-amc-costs',
    'it-amc-hardware',
    'it-amc-hardware-lifecycle',
    'it-amc-maintenance-visits',
    'it-amc-priority',
    'it-amc-updates',
    'it-amc-vs-msp',
    'it-consulting-assessment',
    'it-consulting-digital-transformation',
    'it-consulting-guide',
    'it-consulting-infrastructure-design',
    'it-consulting-ransomware-survival',
    'it-consulting-roadmap',
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
    'managed-it-backup',
    'managed-it-co-managed',
    'managed-it-cost',
    'managed-it-infrastructure',
    'managed-it-monitoring',
    'managed-it-scalable',
    'managed-it-security',
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
  ].map((slug) => ({
    url: `${baseUrl}/ru/articles/${slug}`,
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
    ...ruArticlePages,
    ...staticIndustryPages,
    ...staticIndustryPages.map(p => ({ ...p, url: p.url.replace('/industries/', '/ru/industries/')})),
    ...dynamicPages,
  ];
}


