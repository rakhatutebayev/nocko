import type { Service } from '@/lib/api/strapi';

export interface MappedServiceContent {
  hero: {
    title: string;
    subtitle: string;
    description?: string;
  };
  firstSection: { title: string; text: string; link?: string; linkText?: string; image?: string; imageAlt?: string }[];
  features: { icon: string; title: string }[];
  secondSection: { title: string; text: string; link?: string; linkText?: string; image?: string; imageAlt?: string }[];
  benefits: { icon: string; text: string }[];
  resources: { type: string; title: string; description: string; image?: string; url: string; ctaText?: string }[];
  cta?: { title: string; text: string; ctaText: string; ctaUrl: string };
  relatedServices: { title: string; description?: string; url: string }[];
  faq?: { question: string; answer: string }[];
  faqTitle?: string;
}

export function mapServiceData(service: Service): MappedServiceContent {
  const attrs = service.attributes;
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  return {
    hero: {
      title: attrs.hero?.heroTitle || attrs.title,
      subtitle: attrs.hero?.heroSubtitle || '',
      description: attrs.hero?.heroDescription,
    },
    firstSection: (attrs.firstSection || []).map((block) => ({
      title: block.title,
      text: block.text,
      link: block.link,
      linkText: block.linkText || 'Learn more',
      image: block.image?.attributes?.url ? `${strapiUrl}${block.image.attributes.url}` : undefined,
      imageAlt: block.imageAlt || block.image?.attributes?.alternativeText,
    })),
    features: (attrs.serviceFeatures || []).map((f) => ({
      icon: f.icon,
      title: f.title,
    })),
    secondSection: (attrs.secondSection || []).map((block) => ({
      title: block.title,
      text: block.text,
      link: block.link,
      linkText: block.linkText || 'Learn more',
      image: block.image?.attributes?.url ? `${strapiUrl}${block.image.attributes.url}` : undefined,
      imageAlt: block.imageAlt || block.image?.attributes?.alternativeText,
    })),
    benefits: (attrs.benefits || []).map((b) => ({
      icon: b.iconPath,
      text: b.text,
    })),
    resources: (attrs.resources || []).map((r) => ({
      type: r.type,
      title: r.title,
      description: r.description,
      image: r.imagePath,
      url: r.url,
      ctaText: r.ctaText,
    })),
    cta: attrs.cta
      ? {
          title: attrs.cta.title,
          text: attrs.cta.text,
          ctaText: attrs.cta.ctaText,
          ctaUrl: attrs.cta.ctaUrl,
        }
      : undefined,
    relatedServices: (attrs.relatedServices || []).map((r) => ({
      title: r.title,
      description: r.description,
      url: r.url,
    })),
    faq: (attrs.faq || []).map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    faqTitle: attrs.faqTitle,
  };
}
