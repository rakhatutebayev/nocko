import { withCache, generateCacheKey } from '../cache';

// Types based on Strapi structure (copied from @nocko/shared to avoid dependency)
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
    formats?: any;
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

export interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    author?: any;
    category?: string;
    tags?: string[];
    featuredImage?: StrapiImage;
    seo?: Record<string, any>;
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Service {
  id: number;
  attributes: {
    title: string;
    slug: string;
    hero?: any;
    articleBlocks?: any[];
    articleCards?: any[];
    firstSection?: any[];
    serviceFeatures?: any[];
    secondSection?: any[];
    benefits?: any[];
    resources?: any[];
    cta?: any;
    relatedServices?: any[];
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
    service?: any;
    services?: any;
    challenge?: string;
    solution?: string;
    results?: Record<string, any>;
    testimonial?: string;
    images?: any;
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
    icon?: any;
    services?: any;
    caseStudies?: any;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Menu {
  id: number;
  attributes: {
    items?: any[];
    ctaText?: string;
    ctaUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
  };
}

// Use internal Docker URL for server-side, public URL for client-side
const STRAPI_URL = typeof window === 'undefined' 
  ? (process.env.STRAPI_INTERNAL_URL || 'http://cms:1337')
  : (process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337');
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Cache TTLs (in milliseconds)
const CACHE_TTL = {
  SERVICES: 60 * 60 * 1000, // 1 hour
  CASE_STUDIES: 60 * 60 * 1000, // 1 hour
  PAGES: 60 * 60 * 1000, // 1 hour
  ARTICLES: 30 * 60 * 1000, // 30 minutes
  INDUSTRIES: 2 * 60 * 60 * 1000, // 2 hours
  MENU: 24 * 60 * 60 * 1000, // 24 hours - меню меняется редко
};

/**
 * Base fetch function with error handling and caching
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {},
  cacheKey?: string,
  cacheTTL?: number
): Promise<StrapiResponse<T>> {
  // Определяем время revalidate на основе cacheTTL
  // Для меню (24 часа) используем более длительное кэширование
  const revalidateTime = cacheTTL 
    ? Math.floor(cacheTTL / 1000) // Конвертируем миллисекунды в секунды
    : 3600; // По умолчанию 1 час

  // Use cache if available (server-side only)
  if (cacheKey && typeof window === 'undefined') {
    const cached = await withCache<StrapiResponse<T>>(
      cacheKey,
      async () => {
        return fetchAPIInternal<T>(endpoint, options, revalidateTime);
      },
      cacheTTL
    );
    return cached;
  }

  return fetchAPIInternal<T>(endpoint, options, revalidateTime);
}

async function fetchAPIInternal<T>(
  endpoint: string,
  options: RequestInit = {},
  revalidateTime: number = 3600 // По умолчанию 1 час
): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (API_TOKEN) {
    headers['Authorization'] = `Bearer ${API_TOKEN}`;
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers,
      next: { revalidate: revalidateTime }, // ISR: revalidate based on content type
    });

    if (!res.ok) {
      // If 404, return empty data structure instead of throwing
      if (res.status === 404) {
        console.warn(`Strapi endpoint not found: ${endpoint}. This may be normal if content hasn't been created yet.`);
        return { data: null, meta: {} } as StrapiResponse<T>;
      }
      throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    // Handle network errors (connection refused, timeout, etc.)
    if (error instanceof TypeError && error.message.includes('fetch failed')) {
      console.error(`Network error connecting to Strapi at ${STRAPI_URL}. Is Strapi running?`);
      console.error(`Endpoint: ${endpoint}`);
      // Return empty data structure instead of crashing
      return { data: null, meta: {} } as StrapiResponse<T>;
    }
    // Re-throw other errors
    throw error;
  }
}

/**
 * Get single page by slug
 */
export async function getPage(slug: string): Promise<Page | null> {
  try {
    const cacheKey = generateCacheKey('page', { slug });
    const response = await fetchAPI<Page[]>(
      `/pages?filters[slug][$eq]=${slug}&populate=*`,
      {},
      cacheKey,
      CACHE_TTL.PAGES
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

/**
 * Get all pages
 */
export async function getPages(): Promise<Page[]> {
  try {
    const cacheKey = generateCacheKey('pages', {});
    const response = await fetchAPI<Page[]>(
      '/pages?populate=*&sort=createdAt:desc',
      {},
      cacheKey,
      CACHE_TTL.PAGES
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

/**
 * Get single service by slug
 */
export async function getService(slug: string): Promise<Service | null> {
  try {
    const cacheKey = generateCacheKey('service', { slug });
            const response = await fetchAPI<Service[]>(
              `/services?filters[slug][$eq]=${slug}&populate[firstSection][populate]=*&populate[serviceFeatures][populate]=*&populate[secondSection][populate]=*&populate[benefits][populate]=*&populate[resources][populate]=*&populate[cta][populate]=*&populate[relatedServices][populate]=*&populate[icon][populate]=*&populate[caseStudies][populate]=*&populate[hero][populate]=*&populate[articleBlocks][populate][blockArticle][populate]=*&populate[articleCards][populate][cardArticle][populate]=*&populate[articleCards][populate][cardIcon][populate]=*`,
              {},
              cacheKey,
              CACHE_TTL.SERVICES
            );
    
    // Handle case when Strapi is not available or returns null
    if (!response || !response.data) {
      console.warn(`Service "${slug}" not found or Strapi is unavailable. Using fallback content if available.`);
      return null;
    }
    
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

/**
 * Get all services
 */
export async function getServices(): Promise<Service[]> {
  try {
    const cacheKey = generateCacheKey('services', {});
    const response = await fetchAPI<Service[]>(
      '/services?populate=*&sort=createdAt:asc',
      {},
      cacheKey,
      CACHE_TTL.SERVICES
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

/**
 * Get single case study by slug
 */
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const cacheKey = generateCacheKey('case-study', { slug });
    const response = await fetchAPI<CaseStudy[]>(
      `/case-studies?filters[slug][$eq]=${slug}&populate=*`,
      {},
      cacheKey,
      CACHE_TTL.CASE_STUDIES
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}

/**
 * Get all case studies
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const cacheKey = generateCacheKey('case-studies', {});
    const response = await fetchAPI<CaseStudy[]>(
      '/case-studies?populate=*&sort=createdAt:desc',
      {},
      cacheKey,
      CACHE_TTL.CASE_STUDIES
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

/**
 * Get case studies by service
 */
export async function getCaseStudiesByService(serviceSlug: string): Promise<CaseStudy[]> {
  try {
    const cacheKey = generateCacheKey('case-studies-by-service', { serviceSlug });
    const response = await fetchAPI<CaseStudy[]>(
      `/case-studies?filters[service][slug][$eq]=${serviceSlug}&populate=*`,
      {},
      cacheKey,
      CACHE_TTL.CASE_STUDIES
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching case studies by service:', error);
    return [];
  }
}

/**
 * Get single article by slug
 */
export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const cacheKey = generateCacheKey('article', { slug });
    const response = await fetchAPI<Article[]>(
      `/articles?filters[slug][$eq]=${slug}&populate=*`,
      {},
      cacheKey,
      CACHE_TTL.ARTICLES
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

/**
 * Get all articles
 */
export async function getArticles(limit: number = 10): Promise<Article[]> {
  try {
    const cacheKey = generateCacheKey('articles', { limit });
    const response = await fetchAPI<Article[]>(
      `/articles?populate=*&sort=publishedAt:desc&pagination[limit]=${limit}`,
      {},
      cacheKey,
      CACHE_TTL.ARTICLES
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

/**
 * Get all industries
 */
export async function getIndustries(): Promise<Industry[]> {
  try {
    const cacheKey = generateCacheKey('industries', {});
    const response = await fetchAPI<Industry[]>(
      '/industries?populate=*&sort=name:asc',
      {},
      cacheKey,
      CACHE_TTL.INDUSTRIES
    );
    return response.data || [];
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}

/**
 * Get main menu (single type)
 */
export async function getMenu(): Promise<Menu | null> {
  try {
    const cacheKey = generateCacheKey('menu', {});
    // Try different populate strategies
    const populateQuery = 'populate[items][populate][submenu]=*';
    const response = await fetchAPI<Menu>(
      `/menu?${populateQuery}`,
      {},
      cacheKey,
      CACHE_TTL.MENU // Используем длительное кэширование для меню
    );
    
    // Debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log('[getMenu] API Response:', {
        hasResponse: !!response,
        hasData: !!response?.data,
        dataType: typeof response?.data,
        dataKeys: response?.data ? Object.keys(response.data) : [],
      });
    }
    
    // Handle case when Strapi is not available or returns null
    if (!response || !response.data) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[getMenu] Menu not found or Strapi is unavailable. Response:', response);
      }
      return null;
    }
    
    // Transform Strapi component structure to our MenuItem format
    // In Strapi 5.x, Single Type data structure: response.data contains items directly or in attributes
    let menu: any = response.data;
    
    // Handle Strapi 5.x structure where items might be directly in data (not in data.attributes)
    if (!menu.attributes) {
      // If items are directly in data, wrap them in attributes
      if (menu.items || menu.ctaText) {
        menu = { id: menu.id || 0, attributes: menu };
      } else {
        // Create empty attributes if structure is unexpected
        menu = { id: menu.id || 0, attributes: {} };
      }
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('[getMenu] Menu data structure:', {
        hasAttributes: !!menu.attributes,
        hasItems: !!menu.attributes?.items,
        itemsInData: !!menu.items,
        itemsInAttributes: !!menu.attributes?.items,
        itemsType: Array.isArray(menu.attributes?.items) ? 'array' : typeof menu.attributes?.items,
        itemsLength: Array.isArray(menu.attributes?.items) ? menu.attributes.items.length : 0,
        firstItem: menu.attributes?.items?.[0],
        menuKeys: Object.keys(menu),
        attributesKeys: menu.attributes ? Object.keys(menu.attributes) : [],
      });
    }
    
    // Ensure attributes object exists
    if (!menu.attributes) {
      menu.attributes = {};
    }
    
    // Check if items exist in attributes, if not, they might be in the root
    if (!menu.attributes.items && menu.items) {
      menu.attributes.items = menu.items;
    }
    
    if (menu.attributes?.items && Array.isArray(menu.attributes.items)) {
      menu.attributes.items = menu.attributes.items.map((item: any, index: number) => {
        // Strapi components can be in different formats
        const itemData = item || {};
        
        if (process.env.NODE_ENV === 'development' && index === 0) {
          console.log('[getMenu] Processing first item:', itemData);
        }
        
        // Handle submenu - can be array or component structure
        let submenu: any[] = [];
        if (itemData.submenu) {
          if (Array.isArray(itemData.submenu)) {
            submenu = itemData.submenu.map((sub: any, subIndex: number) => ({
              id: sub.id || `sub-${index}-${subIndex}`,
              label: sub.label || '',
              url: sub.url || null, // Keep null if not set, will be generated dynamically
              linkType: sub.linkType || 'custom',
              linkedContent: sub.linkedContent || null,
              order: sub.order !== undefined ? sub.order : subIndex,
            }));
          }
        }
        
        const transformedItem = {
          id: itemData.id || `item-${index}`,
          label: itemData.label || '',
          url: itemData.url || null, // Keep null if not set, will be generated dynamically
          isDropdown: itemData.isDropdown !== undefined ? itemData.isDropdown : (submenu.length > 0),
          linkType: itemData.linkType || 'custom',
          linkedContent: itemData.linkedContent || null,
          order: itemData.order !== undefined ? itemData.order : index,
          submenu: submenu,
        };
        
        if (process.env.NODE_ENV === 'development' && index === 0) {
          console.log('[getMenu] Transformed first item:', transformedItem);
        }
        
        return transformedItem;
      }).filter((item: any) => item.label && item.label.trim()); // Filter out empty items
      
      if (process.env.NODE_ENV === 'development') {
        console.log('[getMenu] Final items count:', menu.attributes.items.length);
      }
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[getMenu] Items is not an array or missing:', menu.attributes?.items);
      }
    }
    
    return menu;
  } catch (error) {
    console.error('[getMenu] Error fetching menu:', error);
    return null;
  }
}

/**
 * Submit contact form
 */
export async function submitContact(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<{ success: boolean; message?: string }> {
  try {
    const STRAPI_URL = typeof window === 'undefined' 
      ? (process.env.STRAPI_INTERNAL_URL || 'http://cms:1337')
      : (process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337');
    
    const url = `${STRAPI_URL}/api/contacts`;
    
    // Логирование для отладки
    if (typeof window !== 'undefined') {
      console.log('Submitting contact form:', data);
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Failed to submit contact form: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred while submitting the form',
    };
  }
}


