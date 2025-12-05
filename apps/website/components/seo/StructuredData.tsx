'use client';

interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'Article' | 'LocalBusiness' | 'BreadcrumbList';
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseSchema,
          name: data.name || 'NOCKO Information Technology',
          url: data.url || 'https://nocko.com',
          logo: data.logo || 'https://nocko.com/images/logo-white.svg',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.telephone || '+971-XX-XXX-XXXX',
            contactType: 'customer service',
            areaServed: 'AE',
            availableLanguage: 'en',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE',
          },
          sameAs: data.sameAs || [],
        };

      case 'LocalBusiness':
        return {
          ...baseSchema,
          name: data.name || 'NOCKO Information Technology',
          image: data.image || 'https://nocko.com/images/og-image.jpg',
          address: {
            '@type': 'PostalAddress',
            addressLocality: data.addressLocality || 'Dubai',
            addressRegion: data.addressRegion || 'Dubai',
            addressCountry: data.addressCountry || 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: data.latitude || '25.2048',
            longitude: data.longitude || '55.2708',
          },
          telephone: data.telephone || '+971-XX-XXX-XXXX',
          priceRange: '$$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
        };

      case 'Service':
        return {
          ...baseSchema,
          serviceType: data.serviceType || 'IT Support',
          areaServed: {
            '@type': 'Country',
            name: 'United Arab Emirates',
          },
          provider: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
        };

      case 'Article':
        return {
          ...baseSchema,
          headline: data.headline,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: 'https://nocko.com/images/logo-white.svg',
            },
          },
        };

      case 'BreadcrumbList':
        return {
          ...baseSchema,
          itemListElement: data.itemListElement || [],
        };

      default:
        return baseSchema;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema(), null, 2) }}
    />
  );
}



