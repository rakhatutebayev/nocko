// Shared TypeScript types for Strapi content

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      large?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

export interface Page {
  id: number;
  attributes: {
    title: string;
    slug: string;
    metaTitle?: string;
    metaDescription?: string;
    content?: string;
    heroImage?: StrapiImage;
    seo?: Record<string, any>;
    geo?: {
      cities?: string[];
      regions?: string[];
      countries?: string[];
    };
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ServiceContentBlock {
  id: number;
  title: string;
  text: string;
  link?: string;
  linkText?: string;
  image?: StrapiImage;
  imageAlt?: string;
}

export interface ServiceFeature {
  id: number;
  title: string;
  icon: string;
}

export interface ServiceBenefit {
  id: number;
  icon: StrapiImage;
  text: string;
}

export interface ServiceResource {
  id: number;
  type: string;
  title: string;
  description: string;
  image?: StrapiImage;
  url: string;
  ctaText?: string;
}

export interface ServiceCTA {
  id: number;
  title: string;
  text: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface RelatedService {
  id: number;
  title: string;
  description?: string;
  url: string;
  service?: {
    data: Service;
  };
}

export interface ServiceHero {
  id: number;
  heroTitle: string;
  heroSubtitle?: string;
}

export interface ServiceArticleBlock {
  id: number;
  blockArticle?: {
    data: Article | null;
  };
  blockBorderColor: 'Синий (#3474ff)' | 'Голубой (#00aeff)' | 'Фиолетовый (#583bec)' | 'Зеленый (#11c979)' | 'Желтый (#ffcc2a)' | 'Красный (#ec5050)';
}

export interface ServiceArticleCard {
  id: number;
  cardArticle?: {
    data: Article | null;
  };
  cardColor: 'Синий (#3474ff)' | 'Голубой (#00aeff)' | 'Фиолетовый (#583bec)' | 'Зеленый (#11c979)' | 'Желтый (#ffcc2a)' | 'Красный (#ec5050)';
  cardIcon?: StrapiResponse<StrapiImage>;
}

export interface Service {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description?: string;
    icon?: StrapiImage;
    features?: any[];
    firstSection?: ServiceContentBlock[];
    serviceFeatures?: ServiceFeature[];
    secondSection?: ServiceContentBlock[];
    benefits?: ServiceBenefit[];
    resources?: ServiceResource[];
    cta?: ServiceCTA;
            relatedServices?: RelatedService[];
            hero?: ServiceHero;
            articleBlocks?: ServiceArticleBlock[];
            articleCards?: ServiceArticleCard[];
            caseStudies?: {
              data: CaseStudy[];
            };
            geo?: {
              cities?: string[];
              regions?: string[];
              countries?: string[];
            };
            publishedAt?: string;
            createdAt: string;
            updatedAt: string;
          };
        }

export interface CaseStudy {
  id: number;
  attributes: {
    title: string;
    slug: string;
    client: string;
    industry: string;
    service?: {
      data: Service;
    };
    challenge?: string;
    solution?: string;
    results?: Record<string, any>;
    testimonial?: string;
    images?: {
      data: StrapiImage[];
    };
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    author?: {
      data: any;
    };
    category?: string;
    tags?: string[];
    featuredImage?: StrapiImage;
    seo?: Record<string, any>;
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Industry {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description?: string;
    icon?: StrapiImage;
    services?: {
      data: Service[];
    };
    caseStudies?: {
      data: CaseStudy[];
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface MenuSubitem {
  id: number;
  label: string;
  url?: string;
  linkType?: 'custom' | 'page' | 'service' | 'case-study' | 'article' | 'industry';
  linkedContent?: any;
  order?: number;
}

export interface MenuItem {
  id: number;
  label: string;
  url?: string | null;
  isDropdown?: boolean;
  linkType?: 'custom' | 'page' | 'service' | 'case-study' | 'article' | 'industry';
  linkedContent?: any;
  submenu?: MenuSubitem[];
  order?: number;
}

export interface Menu {
  id: number;
  attributes: {
    items?: MenuItem[];
    ctaText?: string;
    ctaUrl?: string;
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
  };
}


