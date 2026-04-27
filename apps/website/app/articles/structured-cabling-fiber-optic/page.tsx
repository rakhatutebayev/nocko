import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Certified Cat6A & Fiber Optic Engineering | NOCKO UAE',
  description: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
  alternates: {
    canonical: '/articles/structured-cabling-fiber-optic',
  },
};

const articleData = {
  hero: {
    title: 'Certified Cat6A & Fiber Optic Engineering',
    subtitle: 'Physical cabling is the absolute foundation of your corporate network',
    description: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
  },
  intro: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
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

export default function StructuredcablingfiberopticPage() {
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
