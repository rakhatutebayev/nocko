import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import IndustriesDynamic from '@/components/sections/IndustriesDynamic';
import LayoutScripts from '@/app/layout-scripts';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'IT Company in Dubai — 24/7 IT Support & Managed Services | NOCKO',
  description:
    'NOCKO delivers 24/7 IT support, network setup, cloud & cybersecurity for Dubai businesses. UAE-wide coverage. Fast response. Get a free consultation.',
  keywords: [
    'it company in dubai',
    'IT company Dubai',
    'IT support Dubai',
    'IT services Dubai',
    'IT company in UAE',
    'network infrastructure Dubai',
    'cloud solutions Dubai',
    'cybersecurity Dubai',
    'IT consulting Dubai',
    'managed IT services Dubai',
    'corporate IT Abu Dhabi',
    'healthcare IT UAE',
    'technical support Dubai',
  ],
  openGraph: {
    title: 'IT Company in Dubai | IT Support & Solutions UAE | NOCKO',
    description:
      'Leading IT company in Dubai providing IT support, network infrastructure, cloud solutions, and cybersecurity services for businesses across UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <LayoutScripts />
      <StructuredData
        type="WebSite"
        data={{
          '@id': 'https://nocko.com/#website',
          name: 'NOCKO Information Technology',
          url: 'https://nocko.com',
        }}
      />
      <StructuredData
        type="LocalBusiness"
        data={{
          '@id': 'https://nocko.com/#localbusiness',
          name: 'NOCKO Information Technology',
          url: 'https://nocko.com',
          telephone: '+971542448888',
          email: 'info@nocko.com',
          image: 'https://nocko.com/og-image.jpg',
          streetAddress: 'Office R20-42, Wavez Residence, Wadi Al Safa 2',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
          latitude: '25.07850',
          longitude: '55.27080',
          priceRange: '$$',
          areaServed: [
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Abu Dhabi' },
            { '@type': 'City', name: 'Sharjah' },
          ],
          sameAs: [
            'https://www.linkedin.com/company/it-nocko/',
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
        }}
      />
              <HeaderWrapper />
      <main className="main" role="main">
        <Hero />
        <Features />
        <Services />
        <Clients />
        <IndustriesDynamic />
      </main>
      <Footer />
    </>
  );
}
