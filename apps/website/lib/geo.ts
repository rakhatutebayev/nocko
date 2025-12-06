/**
 * Geo-location utilities for UAE cities
 */

export interface GeoLocation {
  city: string;
  emirate: string;
  country: string;
  coordinates: {
    lat: string;
    lng: string;
  };
}

export const UAE_CITIES: Record<string, GeoLocation> = {
  dubai: {
    city: 'Dubai',
    emirate: 'Dubai',
    country: 'United Arab Emirates',
    coordinates: {
      lat: '25.2048',
      lng: '55.2708',
    },
  },
  'abu-dhabi': {
    city: 'Abu Dhabi',
    emirate: 'Abu Dhabi',
    country: 'United Arab Emirates',
    coordinates: {
      lat: '24.4539',
      lng: '54.3773',
    },
  },
  sharjah: {
    city: 'Sharjah',
    emirate: 'Sharjah',
    country: 'United Arab Emirates',
    coordinates: {
      lat: '25.3573',
      lng: '55.4033',
    },
  },
  ajman: {
    city: 'Ajman',
    emirate: 'Ajman',
    country: 'United Arab Emirates',
    coordinates: {
      lat: '25.4052',
      lng: '55.5136',
    },
  },
  'ras-al-khaimah': {
    city: 'Ras Al Khaimah',
    emirate: 'Ras Al Khaimah',
    country: 'United Arab Emirates',
    coordinates: {
      lat: '25.7889',
      lng: '55.9597',
    },
  },
  'umm-al-quwain': {
    city: 'Umm Al Quwain',
    emirate: 'Umm Al Quwain',
    country: 'United Arab Emirates',
    coordinates: {
      lat: '25.5650',
      lng: '55.5552',
    },
  },
  fujairah: {
    city: 'Fujairah',
    emirate: 'Fujairah',
    country: 'United Arab Emirates',
    coordinates: {
      lat: '25.1288',
      lng: '56.3264',
    },
  },
};

/**
 * Get geo location by city slug
 */
export function getGeoLocation(citySlug: string): GeoLocation | null {
  return UAE_CITIES[citySlug.toLowerCase()] || null;
}

/**
 * Get all UAE cities
 */
export function getAllCities(): GeoLocation[] {
  return Object.values(UAE_CITIES);
}

/**
 * Format city name for display
 */
export function formatCityName(citySlug: string): string {
  const location = getGeoLocation(citySlug);
  return location ? location.city : citySlug;
}

/**
 * Generate geo-specific metadata
 */
export function generateGeoMetadata(citySlug?: string): {
  title: string;
  description: string;
  keywords: string[];
} {
  const location = citySlug ? getGeoLocation(citySlug) : null;
  const cityName = location ? location.city : 'UAE';

  return {
    title: `IT Support ${cityName} | Network & Cloud Solutions | NOCKO`,
    description: `Professional IT support and infrastructure services in ${cityName}, ${location?.emirate || 'UAE'}. Network setup, cloud migration, cybersecurity, and 24/7 technical support.`,
    keywords: [
      `IT support ${cityName}`,
      `network infrastructure ${cityName}`,
      `corporate IT ${cityName}`,
      `cloud solutions ${cityName}`,
      `cybersecurity ${cityName}`,
      'UAE IT services',
    ],
  };
}




