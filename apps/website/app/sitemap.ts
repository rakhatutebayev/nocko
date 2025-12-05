import { MetadataRoute } from 'next';
import { getServices, getCaseStudies, getPages } from '@/lib/api/strapi';

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
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic pages from Strapi
  let dynamicPages: MetadataRoute.Sitemap = [];

  try {
    // Services
    const services = await getServices();
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
      url: `${baseUrl}/services/${service.attributes.slug}`,
      lastModified: service.attributes.updatedAt ? new Date(service.attributes.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    // Case Studies
    const caseStudies = await getCaseStudies();
    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
      url: `${baseUrl}/case-studies/${caseStudy.attributes.slug}`,
      lastModified: caseStudy.attributes.updatedAt
        ? new Date(caseStudy.attributes.updatedAt)
        : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    // Pages
    const pages = await getPages();
    const pagePages: MetadataRoute.Sitemap = pages.map((page) => ({
      url: `${baseUrl}/${page.attributes.slug}`,
      lastModified: page.attributes.updatedAt ? new Date(page.attributes.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    dynamicPages = [...servicePages, ...caseStudyPages, ...pagePages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  return [...staticPages, ...dynamicPages];
}


