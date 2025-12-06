// Shared utility functions

/**
 * Format date to readable string
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-AE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get image URL from Strapi image object
 */
export function getImageUrl(image?: any, format: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'original'): string | null {
  if (!image?.attributes) return null;
  
  if (format === 'original') {
    return image.attributes.url;
  }
  
  return image.attributes.formats?.[format]?.url || image.attributes.url;
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string, baseUrl: string = 'https://nocko.com'): string {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number = 150): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}





