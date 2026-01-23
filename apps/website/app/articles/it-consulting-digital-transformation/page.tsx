import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Digital Transformation Consulting | Digital Transformation UAE | NOCKO',
  description:
    'Digital transformation consulting services for businesses in UAE. Navigate digital transformation with expert guidance. Modernize IT infrastructure, adopt new technologies, and transform business processes.',
  keywords:
    'digital transformation UAE, digital transformation consulting Dubai, IT modernization, business transformation, digital strategy UAE',
  openGraph: {
    title: 'Digital Transformation Consulting | Digital Transformation UAE | NOCKO',
    description:
      'Digital transformation consulting services for businesses in UAE. Navigate digital transformation with expert guidance. Modernize IT infrastructure and transform business processes.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/it-consulting-digital-transformation',
  },
};

const articleData = {
  hero: {
    title: 'Digital Transformation Consulting',
    subtitle: 'Expert Guidance for Digital Transformation in UAE',
    description: '',
  },
  intro:
    'Digital transformation is essential for business competitiveness in today\'s digital world. Digital transformation consulting helps you navigate this journey with expert guidance. We help you modernize your IT infrastructure, adopt new technologies, and transform your business processes to leverage technology effectively.',
  blocks: [
    {
      title: 'What Digital Transformation Consulting Includes',
      text: '<p>Digital transformation consulting covers all aspects of transforming your business through technology. We assess your current state, develop transformation strategies, plan technology adoption, and guide implementation. Everything needed for successful digital transformation is handled.</p><p>We also help modernize IT infrastructure, adopt cloud technologies, implement automation, and transform business processes. Your digital transformation journey is guided by experts who understand both technology and business.</p>',
      list: [
        '<li>Current state assessment</li>',
        '<li>Digital transformation strategy development</li>',
        '<li>Technology adoption planning</li>',
        '<li>IT infrastructure modernization</li>',
        '<li>Business process transformation</li>',
        '<li>Implementation guidance and support</li>',
      ],
    },
    {
      title: 'Benefits of Digital Transformation',
      text: '<p>Digital transformation provides competitive advantage through technology. You get modernized infrastructure that supports innovation, improved processes that increase efficiency, and new capabilities that drive growth. Your business becomes more agile and competitive.</p><p>You also benefit from improved customer experience, increased operational efficiency, better data insights, and enhanced innovation. With digital transformation, you leverage technology to achieve business objectives and stay competitive.</p>',
      list: [
        '<li>Competitive advantage through technology</li>',
        '<li>Improved operational efficiency</li>',
        '<li>Enhanced customer experience</li>',
        '<li>Better data insights and analytics</li>',
        '<li>Increased business agility</li>',
        '<li>Enhanced innovation capabilities</li>',
      ],
    },
    {
      title: 'Digital Transformation Process',
      text: '<p>Digital transformation follows a structured approach to ensure success. We start with assessment to understand your current state and goals, then develop transformation strategies and roadmaps. During implementation, we guide you through technology adoption and process transformation.</p><p>The process includes assessment, strategy development, roadmap creation, technology selection, implementation planning, and change management. Each phase is handled carefully to ensure successful digital transformation.</p>',
      list: [
        '<li>Current state and goal assessment</li>',
        '<li>Transformation strategy development</li>',
        '<li>Technology roadmap creation</li>',
        '<li>Technology selection and evaluation</li>',
        '<li>Implementation planning and execution</li>',
        '<li>Change management and adoption</li>',
      ],
    },
  ],
};

export default function ITConsultingDigitalTransformationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || 'Digital Transformation Consulting | Digital Transformation UAE | NOCKO',
          description: 'Digital transformation consulting services for businesses in UAE. Navigate digital transformation with expert guidance. Modernize IT infrastructure, a',
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
              { label: 'Digital Transformation Consulting ' },
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





