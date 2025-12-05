import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import Industries from '@/components/sections/Industries';
import LayoutScripts from '@/app/layout-scripts';

export const metadata: Metadata = {
  title: 'IT Company in Dubai | IT Support & Solutions UAE | NOCKO',
  description:
    'Leading IT company in Dubai providing IT support, network infrastructure, cloud solutions, and cybersecurity services. Expert IT company in Dubai serving businesses across UAE with 24/7 support.',
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
              <HeaderWrapper />
      <main className="main" role="main">
        <Hero />
        <Features />
        <Services />
        <Clients />
        <Industries />
      </main>
      <Footer />
    </>
  );
}
