import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Enterprise Wi-Fi Heatmapping Solutions | NOCKO UAE',
  description: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
  alternates: {
    canonical: '/articles/structured-cabling-wifi-heatmapping',
  },
};

const articleData = {
  hero: {
    title: 'Enterprise Wi-Fi Heatmapping Solutions',
    subtitle: 'Stop guessing where to place access points.',
    description: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
  },
  intro: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
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

export default function StructuredcablingwifiheatmappingPage() {
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
