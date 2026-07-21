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
            'https://www.linkedin.com/company/it-nocko/',
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
      {/* LocalBusiness schema lives on the homepage (app/page.tsx) only — do not duplicate here */}
    </>
  );
}



