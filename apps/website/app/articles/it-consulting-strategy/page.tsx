import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Strategy and Planning | IT Strategy Development UAE | NOCKO',
  description:
    'IT strategy and planning services for businesses in UAE. Develop comprehensive IT strategies aligned with business goals. IT infrastructure analysis, strategic planning, and technology adoption optimization.',
  keywords:
    'IT strategy UAE, IT planning Dubai, IT strategy development, technology strategy, IT strategic planning UAE',
  openGraph: {
    title: 'IT Strategy and Planning | IT Strategy Development UAE | NOCKO',
    description:
      'IT strategy and planning services for businesses in UAE. Develop comprehensive IT strategies aligned with business goals and technology adoption optimization.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/it-consulting-strategy',
  },
};

const articleData = {
  hero: {
    title: 'IT Strategy and Planning',
    subtitle: 'Comprehensive IT Strategy Development for Businesses in UAE',
    description: '',
  },
  intro:
    'A well-defined IT strategy is essential for business success. IT strategy and planning ensures your technology investments align with business goals and support growth. We analyze your current IT infrastructure, identify gaps, and create strategic plans for technology adoption and optimization.',
  blocks: [
    {
      title: 'What IT Strategy and Planning Includes',
      text: '<p>IT strategy and planning covers all aspects of developing a comprehensive technology strategy. We analyze your current IT infrastructure, assess business needs, identify technology gaps, and create strategic plans for technology adoption. Everything needed for effective IT strategy is handled.</p><p>We also develop technology roadmaps, prioritize IT initiatives, align IT with business objectives, and create implementation plans. Your IT strategy supports business growth and drives competitive advantage through effective technology use.</p>',
      list: [
        '<li>Current IT infrastructure analysis</li>',
        '<li>Business needs assessment</li>',
        '<li>Technology gap identification</li>',
        '<li>Strategic IT planning and roadmaps</li>',
        '<li>IT initiative prioritization</li>',
        '<li>Implementation planning and timelines</li>',
      ],
    },
    {
      title: 'Benefits of Comprehensive IT Strategy',
      text: '<p>Comprehensive IT strategy provides clear direction for technology investments and initiatives. You get strategic plans that align with business goals, prioritized initiatives that deliver value, and roadmaps that guide implementation. Your IT strategy supports business growth effectively.</p><p>You also benefit from better technology alignment, improved decision-making, reduced IT waste, and competitive advantage. With a clear IT strategy, you make informed technology decisions and maximize the value of your IT investments.</p>',
      list: [
        '<li>Clear direction for technology investments</li>',
        '<li>Alignment with business goals</li>',
        '<li>Prioritized IT initiatives</li>',
        '<li>Improved decision-making</li>',
        '<li>Reduced IT waste and inefficiency</li>',
        '<li>Competitive advantage through technology</li>',
      ],
    },
    {
      title: 'IT Strategy Development Process',
      text: '<p>IT strategy development follows a structured process to ensure success. We start with assessment to understand your current state, then analyze business needs and technology requirements. Based on this analysis, we develop strategic plans and roadmaps that guide your technology journey.</p><p>The process includes current state assessment, business needs analysis, technology gap identification, strategic planning, roadmap development, and implementation planning. Each phase builds on the previous to create a comprehensive IT strategy.</p>',
      list: [
        '<li>Current state assessment and analysis</li>',
        '<li>Business needs and requirements analysis</li>',
        '<li>Technology gap and opportunity identification</li>',
        '<li>Strategic IT planning and goal setting</li>',
        '<li>Technology roadmap development</li>',
        '<li>Implementation planning and execution</li>',
      ],
    },
  ],
};

export default function ITConsultingStrategyPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || 'IT Strategy and Planning | IT Strategy Development UAE | NOCKO',
          description: 'IT strategy and planning services for businesses in UAE. Develop comprehensive IT strategies aligned with business goals. IT infrastructure analysis, ',
          datePublished: '2026-01-20',
          dateModified: '2026-01-23',
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo-white.svg`,
            },
          },
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}        />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: 'IT Strategy and Planning ' },
            ]}
          />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}





