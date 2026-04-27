import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Guaranteed 2-Hour SLA Response | NOCKO UAE',
  description: 'We promise and deliver 15-minute remote diagnostic times and 2-hour physical dispatch SLA contracts.',
  alternates: {
    canonical: '/articles/it-amc-priority',
  },
};

const articleData = {
  hero: {
    title: 'Guaranteed 2-Hour SLA Response',
    subtitle: 'Lightning fast physical dispatch in Dubai',
    description: 'We promise and deliver 15-minute remote diagnostic times and 2-hour physical dispatch SLA contracts.',
  },
  intro: 'When your essential trading systems go offline during market hours in DIFC, every minute represents thousands in lost revenue. A professional AMC contract mathematically guarantees our arrival times, forcing strict penalties if we miss our SLAs.',
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

export default function ItamcpriorityPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT AMC' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
