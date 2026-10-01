const ORG_ID = 'https://nocko.com/#organization';

interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'Article' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage' | 'WebSite' | 'ContactPage' | 'ItemList' | 'WebPage' | 'CollectionPage';
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
          '@id': data['@id'] || ORG_ID,
          logo: data.logo || 'https://nocko.com/images/logo-512.png',
          telephone: data.telephone || '+971542448888',
          description: data.description || '',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.telephone || '+971542448888',
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
          ...(data['@id'] && { '@id': data['@id'] }),
          name: data.name || 'NOCKO Information Technology',
          image: data.image || 'https://nocko.com/og-image.jpg',
          parentOrganization: data.parentOrganization || { '@id': ORG_ID },
          description: data.description || '',
          url: data.url || 'https://nocko.com',
          telephone: data.telephone || '+971542448888',
          email: data.email || 'info@nocko.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.streetAddress || '',
            addressLocality: data.addressLocality || 'Dubai',
            addressRegion: data.addressRegion || 'Dubai',
            addressCountry: data.addressCountry || 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: Number(data.latitude) || 25.0785,
            longitude: Number(data.longitude) || 55.2708,
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
          ...(data['@id'] && { '@id': data['@id'] }),
          ...(data.url && { url: data.url }),
          serviceType: data.serviceType || 'IT Support',
          name: data.name || '',
          description: data.description || '',
          areaServed: data.areaServed || [
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Abu Dhabi' },
            { '@type': 'City', name: 'Sharjah' },
            { '@type': 'Country', name: 'United Arab Emirates' },
          ],
          provider: { '@id': ORG_ID },
          ...(data.offers && { offers: data.offers }),
        };

      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline || '',
          datePublished: data.datePublished || '',
          dateModified: data.dateModified || data.datePublished || '',
          image: data.image || {
            '@type': 'ImageObject',
            url: 'https://nocko.com/og-image.jpg',
            width: 1200,
            height: 630,
          },
          author: data.author || { '@type': 'Organization', '@id': ORG_ID, name: 'NOCKO Information Technology', url: 'https://nocko.com' },
          ...(data.description && { description: data.description }),
          ...(data.url && { url: data.url, mainEntityOfPage: data.url }),
          ...(data.inLanguage && { inLanguage: data.inLanguage }),
          publisher: {
            '@type': 'Organization',
            '@id': ORG_ID,
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: 'https://nocko.com/images/logo-512.png',
              width: 512,
              height: 512,
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



