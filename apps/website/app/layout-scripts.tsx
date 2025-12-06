import StructuredData from '@/components/seo/StructuredData';

export default function LayoutScripts() {
  return (
    <>
      <StructuredData
        type="Organization"
        data={{
          name: 'NOCKO Information Technology - IT Company in Dubai',
          url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com',
          logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com'}/images/logo-white.svg`,
          telephone: '+971542448888',
          description: 'Leading IT company in Dubai providing IT support, network infrastructure, cloud solutions, and cybersecurity services for businesses across UAE.',
          sameAs: [],
        }}
      />
      <StructuredData
        type="LocalBusiness"
        data={{
          name: 'NOCKO Information Technology - IT Company in Dubai',
          streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.2048',
          longitude: '55.2708',
          telephone: '+971542448888',
          description: 'Leading IT company in Dubai providing IT support and solutions',
        }}
      />
    </>
  );
}



