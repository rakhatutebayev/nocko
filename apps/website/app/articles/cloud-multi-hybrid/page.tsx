import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Hybrid Cloud Security | NOCKO UAE',
  description: 'Keep your databases locked locally while your web servers scale globally.',
  alternates: {
    canonical: '/articles/cloud-multi-hybrid',
  },
};

const articleData = {
  hero: {
    title: 'Hybrid Cloud Security',
    subtitle: 'The best of physical control combined with public cloud scaling',
    description: 'Keep your databases locked locally while your web servers scale globally.',
  },
  intro: 'Not all workloads should be public. A Hybrid Cloud architecture is the ultimate enterprise strategy. We secure your highly-critical proprietary databases inside a physically sovereign private datacenter in Dubai, while securely bursting your web traffic directly into auto-scaling AWS environments.',
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

export default function CloudmultihybridPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cloud' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
