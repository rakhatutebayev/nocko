'use client';

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
          telephone: '+971-XX-XXX-XXXX',
          sameAs: [],
        }}
      />
      <StructuredData
        type="LocalBusiness"
        data={{
          name: 'NOCKO Information Technology',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.2048',
          longitude: '55.2708',
          telephone: '+971-XX-XXX-XXXX',
        }}
      />
    </>
  );
}



