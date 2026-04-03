import StructuredData from '@/components/seo/StructuredData';

export default function LayoutScripts() {
  return (
    <>
      <StructuredData
        type="Organization"
        data={{
          name: 'NOCKO Information Technology',
          url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com',
          logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com'}/images/logo-white.svg`,
          telephone: '+971542448888',
          description: 'Leading IT company in Dubai providing 24/7 IT support, network infrastructure, cloud solutions, and cybersecurity services for businesses across UAE.',
          sameAs: [
            'https://www.linkedin.com/company/nocko-it',
            // Добавьте другие соцсети здесь
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          }
        }}
      />
      <StructuredData
        type="LocalBusiness"
        data={{
          name: 'NOCKO Information Technology - IT Company in Dubai',
          image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com'}/images/og-image.jpg`,
          streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.0945', // Более точные координаты для Wadi Al Safa 2 если возможно, или оставить эти
          longitude: '55.3781',
          telephone: '+971542448888',
          priceRange: '$$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
          ],
          areaServed: [
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Abu Dhabi' },
            { '@type': 'City', name: 'Sharjah' },
            { '@type': 'City', name: 'Ajman' },
            { '@type': 'City', name: 'Fujairah' },
            { '@type': 'City', name: 'Ras Al Khaimah' },
            { '@type': 'City', name: 'Umm Al Quwain' }
          ],
        }}
      />
    </>
  );
}



