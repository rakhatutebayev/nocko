import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutStats from '@/components/sections/AboutStats';
import AboutVisionMission from '@/components/sections/AboutVisionMission';
import AboutStory from '@/components/sections/AboutStory';
import FAQAccordion from '@/components/sections/FAQAccordion';

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

const aboutFAQ = {
  title: 'Frequently Asked Questions About NOCKO',
  items: [
    {
      question: 'What services does NOCKO provide?',
      answer:
        'NOCKO provides comprehensive IT services including IT support, network infrastructure, cloud solutions, cybersecurity, managed IT services, and IT consulting. We offer 24/7 support and expert solutions for businesses across UAE.',
    },
    {
      question: 'Why choose NOCKO?',
      answer:
        'NOCKO is a trusted IT solutions provider with local expertise, 24/7 support, expert team with 10+ years of experience, proven track record serving 50+ clients, comprehensive solutions, and cost-effective pricing. We serve businesses across all Emirates.',
    },
    {
      question: 'Does NOCKO offer 24/7 support?',
      answer:
        'Yes, NOCKO provides 24/7 IT support with fast response times. Average 2 hours in Dubai and 4 hours across all Emirates. Remote support is available immediately, and on-site engineers are available 24/7 when needed.',
    },
    {
      question: 'What industries does NOCKO serve?',
      answer:
        'NOCKO serves multiple industries including healthcare, finance, retail, education, logistics, manufacturing, real estate, and corporate/enterprise businesses across Dubai, Abu Dhabi, Sharjah, and all Emirates.',
    },
    {
      question: 'How quickly can NOCKO respond to IT issues?',
      answer:
        'NOCKO provides fast response times with average 2 hours in Dubai and 4 hours across all Emirates. Remote support is available immediately, and on-site visits are scheduled based on urgency.',
    },
  ],
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
        <FAQAccordion title={aboutFAQ.title} items={aboutFAQ.items} />
      </main>
      <Footer />
    </>
  );
}

