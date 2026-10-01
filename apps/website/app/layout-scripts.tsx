const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';
const ORG_ID = `${SITE}/#organization`;

/**
 * Единый граф сущностей сайта. Рендерится в root layout на каждой странице.
 * Все остальные схемы (Service.provider, Article.publisher, LocalBusiness.parentOrganization)
 * ссылаются на `#organization` по @id, а не дублируют данные.
 */
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: 'NOCKO Information Technology',
      alternateName: 'NOCKO',
      url: SITE,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/images/logo-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE}/og-image.jpg`,
      description:
        'IT company in Dubai providing 24/7 IT support, managed IT services, network infrastructure, cloud solutions and cybersecurity for businesses across the UAE.',
      telephone: '+971542448888',
      email: 'info@nocko.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 25.0785, longitude: 55.2708 },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Abu Dhabi' },
        { '@type': 'City', name: 'Sharjah' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      // Офис: Пн–Пт 9–18; поддержка и NOC — круглосуточно
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+971542448888',
          contactType: 'customer support',
          areaServed: 'AE',
          availableLanguage: ['en', 'ru', 'ar'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/it-nocko/',
        // TODO: Google Business Profile, YouTube, Clutch — добавить после создания профилей
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'NOCKO Information Technology',
      publisher: { '@id': ORG_ID },
      inLanguage: ['en-AE', 'ru-RU'],
    },
  ],
};

export default function LayoutScripts() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      suppressHydrationWarning
    />
  );
}
