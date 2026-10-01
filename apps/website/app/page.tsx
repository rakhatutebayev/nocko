import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import IndustriesDynamic from '@/components/sections/IndustriesDynamic';
import FeaturedArticles from '@/components/sections/FeaturedArticles';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'IT Company in Dubai | 24/7 IT Support & Managed IT',
  description:
    'NOCKO is an IT company in Dubai providing 24/7 IT support, network setup, cloud and cybersecurity for businesses across the UAE. Book a free consultation.',
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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    title: 'IT Company in Dubai | IT Support & Solutions UAE',
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
      'x-default': '/',
    },
  },
};

export default function HomePage() {
  return (
    <>
              <HeaderWrapper />
      <main className="main" role="main">
        <Hero />
        <Features />
        <Services />
        <Clients />
        <FeaturedArticles />
        <IndustriesDynamic />
      </main>
      <Footer />
    </>
  );
}
