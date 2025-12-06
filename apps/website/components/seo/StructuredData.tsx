interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'Article' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage';
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getSchema = () => {
    const baseSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
    };

    // Добавляем данные из props, но с приоритетом для дефолтных значений
    Object.assign(baseSchema, data);

    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name || 'NOCKO Information Technology',
          url: data.url || 'https://nocko.com',
          logo: data.logo || 'https://nocko.com/images/logo-white.svg',
          telephone: data.telephone || '+971-XX-XXX-XXXX',
          description: data.description || '',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.telephone || '+971-XX-XXX-XXXX',
            contactType: 'customer service',
            areaServed: 'AE',
            availableLanguage: 'en',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: data.addressLocality || 'Dubai',
            addressCountry: data.addressCountry || 'AE',
            ...(data.streetAddress && { streetAddress: data.streetAddress }),
          },
          sameAs: data.sameAs || [],
        };

      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: data.name || 'NOCKO Information Technology',
          image: data.image || 'https://nocko.com/images/og-image.jpg',
          description: data.description || '',
          url: data.url || 'https://nocko.com',
          telephone: data.telephone || '+971-XX-XXX-XXXX',
          email: data.email || '',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.streetAddress || '',
            addressLocality: data.addressLocality || 'Dubai',
            addressRegion: data.addressRegion || 'Dubai',
            addressCountry: data.addressCountry || 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: data.latitude || '25.2048',
            longitude: data.longitude || '55.2708',
          },
          priceRange: data.priceRange || '$$',
          openingHoursSpecification: data.openingHoursSpecification || [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          ...(data.areaServed && { areaServed: data.areaServed }),
          ...(data.serviceArea && { serviceArea: data.serviceArea }),
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: data.serviceType || 'IT Support',
          name: data.name || '',
          description: data.description || '',
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
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline || '',
          datePublished: data.datePublished || '',
          dateModified: data.dateModified || data.datePublished || '',
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
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.itemListElement || [],
        };

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.mainEntity || [],
        };

      default:
        return {
          '@context': 'https://schema.org',
          '@type': type,
          ...data,
        };
    }
  };

  const schema = getSchema();
  // Используем JSON.stringify без форматирования для консистентности
  const jsonString = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
      suppressHydrationWarning
    />
  );
}



