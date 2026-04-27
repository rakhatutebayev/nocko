import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Logistics Warehouses to Corporate Hubs | NOCKO UAE',
  description: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
  alternates: {
    canonical: '/articles/structured-cabling-industrial',
  },
};

const articleData = {
  hero: {
    title: 'Logistics Warehouses to Corporate Hubs',
    subtitle: 'Tailored infrastructure environments across all industries.',
    description: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
  },
  intro: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
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

export default function StructuredcablingindustrialPage() {
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
