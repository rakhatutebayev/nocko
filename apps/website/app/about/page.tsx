import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutStats from '@/components/sections/AboutStats';
import AboutVisionMission from '@/components/sections/AboutVisionMission';
import AboutStory from '@/components/sections/AboutStory';
import FAQAccordion from '@/components/sections/FAQAccordion';
import AboutTeam from '@/components/sections/AboutTeam';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'About NOCKO | IT Solutions Provider in Dubai, UAE',
  description:
    'NOCKO Information Technology — IT solutions provider in Dubai, UAE. 50+ clients served, 10+ years of team experience, 24/7 support across all Emirates.',
  keywords: 'about NOCKO, IT company Dubai, IT services UAE, technology solutions Dubai',
  openGraph: {
    title: 'About NOCKO | IT Solutions Provider in Dubai, UAE',
    description:
      'NOCKO Information Technology — IT solutions provider in Dubai, UAE. 50+ clients served, 10+ years of team experience, 24/7 support across all Emirates.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NOCKO Information Technology' }],
  },
  alternates: {
    canonical: '/about',
    languages: {
      'en-AE': '/about',
      'ru-RU': '/ru/about',
    },
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
      <StructuredData
        type="FAQPage"
        data={{
          mainEntity: aboutFAQ.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'About NOCKO', item: 'https://nocko.com/about' },
          ],
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'NOCKO Engineering Team',
            itemListElement: [
              { '@type': 'ListItem', position: 1, item: { '@type': 'Person', name: 'Alex Petrov', jobTitle: 'Head of Infrastructure', worksFor: { '@type': 'Organization', name: 'NOCKO Information Technology' }, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CCNP Enterprise' }, { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Microsoft MCSE' }] } },
              { '@type': 'ListItem', position: 2, item: { '@type': 'Person', name: 'Maria Smirnova', jobTitle: 'Cybersecurity Lead', worksFor: { '@type': 'Organization', name: 'NOCKO Information Technology' }, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CISSP' }, { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CEH' }] } },
              { '@type': 'ListItem', position: 3, item: { '@type': 'Person', name: 'Denis Kovalev', jobTitle: 'Cloud & Microsoft 365 Architect', worksFor: { '@type': 'Organization', name: 'NOCKO Information Technology' }, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Microsoft Azure Solutions Architect' }] } },
              { '@type': 'ListItem', position: 4, item: { '@type': 'Person', name: 'Aisha Al Mansoori', jobTitle: 'Client Success Manager', worksFor: { '@type': 'Organization', name: 'NOCKO Information Technology' }, hasCredential: [{ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ITIL v4 Foundation' }, { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'PMP' }] } },
            ],
          }),
        }}
        suppressHydrationWarning
      />
      <HeaderWrapper />
      <main role="main">
        <Hero
          variant="about"
          title="About NOCKO — IT Company in Dubai, UAE"
          description="We are present wherever your business operates — in every network, every office, every process. No matter where you are or how fast you grow. We make IT infrastructure predictable and secure. We simplify complex systems, restore order, and create the foundation on which companies can work faster, more stable, and more secure."
        />
        <AboutStats />
        <AboutVisionMission />
        <AboutStory />
        <AboutTeam />
        <FAQAccordion title={aboutFAQ.title} items={aboutFAQ.items} />
      </main>
      <Footer />
    </>
  );
}

