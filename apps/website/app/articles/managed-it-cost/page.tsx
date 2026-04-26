import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Predictable IT Budgets and Costs | NOCKO UAE',
  description: 'Reduce TCO and ensure absolute pricing transparency with our Managed Service Provider (MSP) agreements.',
  alternates: {
    canonical: '/articles/managed-it-cost',
  },
};

const articleData = {
  hero: {
    title: 'Predictable IT Budgets and Costs',
    subtitle: 'Shifting entirely to an OPEX utility model',
    description: 'Reduce TCO and ensure absolute pricing transparency with our Managed Service Provider (MSP) agreements.',
  },
  intro: 'Managing IT independently comes with massive capital expenditure requirements. By leveraging a Managed Service Provider (MSP), you purchase IT strictly as a service. This OPEX model gives CFOs exact forecasting capabilities, knowing precisely what the IT infrastructure will cost per user.',
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

export default function ManageditcostPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Managed IT' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
