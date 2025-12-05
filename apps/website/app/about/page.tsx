import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutStats from '@/components/sections/AboutStats';
import AboutVisionMission from '@/components/sections/AboutVisionMission';
import AboutStory from '@/components/sections/AboutStory';

export const metadata: Metadata = {
  title: 'About NOCKO | IT Solutions Provider in Dubai, UAE',
  description:
    'NOCKO Information Technology - Expert IT solutions provider in Dubai, UAE. Established in 2025, serving businesses across 8+ industries with 10+ years of team experience.',
  keywords: 'about NOCKO, IT company Dubai, IT services UAE, technology solutions Dubai',
  openGraph: {
    title: 'About NOCKO | IT Solutions Provider in Dubai, UAE',
    description:
      'NOCKO Information Technology - Expert IT solutions provider in Dubai, UAE.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <HeaderWrapper />
      <main role="main">
        <Hero
          variant="about"
          title="About us"
          description="We are present wherever your business operates — in every network, every office, every process. No matter where you are or how fast you grow. We make IT infrastructure predictable and secure. We simplify complex systems, restore order, and create the foundation on which companies can work faster, more stable, and more secure."
        />
        <AboutStats />
        <AboutVisionMission />
        <AboutStory />
      </main>
      <Footer />
    </>
  );
}

