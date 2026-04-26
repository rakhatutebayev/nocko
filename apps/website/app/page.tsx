import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import IndustriesDynamic from '@/components/sections/IndustriesDynamic';
import LayoutScripts from '@/app/layout-scripts';

export const metadata: Metadata = {
  title: '#1 IT Company in Dubai | Top IT Support & Solutions UAE | NOCKO',
  description:
    'Looking for the best IT company in Dubai? NOCKO provides top-rated IT support, network infrastructure, cloud solutions, and 24/7 technical services for businesses across the UAE including Abu Dhabi and Sharjah.',
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
    languages: {
      'en-AE': '/',
      'ru-RU': '/ru',
    },
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
        <IndustriesDynamic />
      </main>
      <Footer />
    </>
  );
}
