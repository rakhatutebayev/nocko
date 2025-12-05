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
  title: 'IT Support UAE | Network & Cloud Solutions Dubai | NOCKO',
  description:
    'IT support and infrastructure services in UAE. Network setup, cloud solutions, cybersecurity, and 24/7 support for businesses in Dubai, Abu Dhabi, Sharjah. Expert team with 10+ years individual experience serving healthcare, finance, retail, education.',
  keywords: [
    'IT support UAE',
    'network infrastructure Dubai',
    'corporate IT Abu Dhabi',
    'healthcare IT UAE',
    'retail technology',
    'education technology',
    'financial services IT',
    'logistics IT',
    'cloud solutions',
    'cybersecurity UAE',
    'technical support Dubai',
  ],
  openGraph: {
    title: 'IT Support UAE | Network & Cloud Solutions Dubai | NOCKO',
    description:
      'IT support and infrastructure services in UAE. Network setup, cloud solutions, cybersecurity, and 24/7 support.',
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
