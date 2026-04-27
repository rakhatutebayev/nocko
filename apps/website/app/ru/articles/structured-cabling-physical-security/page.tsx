import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Access Control and physical Security | NOCKO UAE',
  description: 'Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.',
  alternates: {
    canonical: '/articles/structured-cabling-physical-security',
  },
};

const articleData = {
  hero: {
    title: 'Access Control and physical Security',
    subtitle: 'Structured cabling extends beyond computers.',
    description: 'Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.',
  },
  intro: 'Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.',
  blocks: [
    {
      title: 'Expert Implementation and Strategy',
      text: '<p>Our dedicated architects in Dubai deploy this framework rigorously, ensuring that your enterprise operates with maximum efficiency, reduced risk, and strict adherence to UAE governmental regulations.</p>',
    },
    {
      title: 'Long-Term Impact',
      text: '<p>By addressing these critical bottlenecks preemptively, we shift your organization away from reactive disaster mitigation precisely toward proactive, strategic growth.</p>'
    }
  ],
};

export default function StructuredcablingphysicalsecurityPage() {
  const currDate = new Date().toISOString().split('T')[0];
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: currDate }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Structured Cabling', href: '/services/structured-cabling' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
