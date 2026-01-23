import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Complete IT Infrastructure Management Services | Full IT Management UAE | NOCKO',
  description:
    'Complete IT infrastructure management services for businesses in UAE. Full responsibility for network monitoring, system maintenance, security updates, and performance optimization. Dedicated IT team managing your systems 24/7.',
  keywords:
    'IT infrastructure management UAE, complete IT management Dubai, IT infrastructure services, full IT management, IT systems management UAE',
  openGraph: {
    title: 'Complete IT Infrastructure Management Services | Full IT Management UAE | NOCKO',
    description:
      'Complete IT infrastructure management services for businesses in UAE. Full responsibility for network monitoring, system maintenance, security updates, and performance optimization.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/managed-it-infrastructure',
  },
};

const articleData = {
  hero: {
    title: 'Complete IT Infrastructure Management',
    subtitle: 'Full Responsibility for Your IT Infrastructure in UAE',
    description: '',
  },
  intro:
    'Managing IT infrastructure requires constant attention, expertise, and resources. From network monitoring to system maintenance, security updates to performance optimization, every aspect needs careful management. Complete IT infrastructure management means we take full responsibility for your IT systems, handling everything so you can focus on your business.',
  blocks: [
    {
      title: 'What Complete IT Infrastructure Management Includes',
      text: '<p>Complete IT infrastructure management covers every aspect of your IT systems. We handle network monitoring, server management, workstation maintenance, security updates, performance optimization, and technical support. Everything your IT infrastructure needs is managed by our dedicated team.</p><p>You get a comprehensive IT management solution that handles all the technical details, from daily monitoring to strategic planning. We ensure your systems run smoothly, securely, and efficiently without requiring your constant attention.</p>',
      list: [
        '<li>24/7 network monitoring and management</li>',
        '<li>Server and workstation maintenance</li>',
        '<li>Security updates and patch management</li>',
        '<li>Performance optimization and tuning</li>',
        '<li>Technical support and troubleshooting</li>',
        '<li>Strategic IT planning and consulting</li>',
      ],
      image: '/images/services/managed-it-infrastructure.png',
      imageAlt: 'Complete IT infrastructure management services',
    },
    {
      title: 'Benefits of Complete IT Infrastructure Management',
      text: '<p>When you have complete IT infrastructure management, you get peace of mind knowing your IT systems are in expert hands. You don\'t need to worry about technical issues, security threats, or system failures. Our team handles everything proactively.</p><p>You also get better IT performance, improved security, reduced downtime, and lower overall IT costs. With dedicated IT management, your systems run more efficiently, problems are prevented before they occur, and your IT infrastructure supports your business goals effectively.</p>',
      list: [
        '<li>Peace of mind with expert IT management</li>',
        '<li>Proactive problem prevention</li>',
        '<li>Better IT performance and reliability</li>',
        '<li>Improved security and compliance</li>',
        '<li>Reduced downtime and faster issue resolution</li>',
        '<li>Lower overall IT costs</li>',
      ],
    },
    {
      title: 'Why Businesses Choose Complete IT Infrastructure Management',
      text: '<p>Many businesses struggle with managing IT infrastructure internally. It requires hiring IT staff, training them, keeping up with technology changes, and managing IT projects. Complete IT infrastructure management eliminates these challenges.</p><p>You get enterprise-level IT management without the overhead of an in-house IT department. You benefit from our expertise, experience, and resources without the cost and complexity of building your own IT team. This allows you to focus on your core business while we handle all IT management.</p>',
      list: [
        '<li>No need to hire and manage IT staff</li>',
        '<li>Access to enterprise-level expertise</li>',
        '<li>Stay current with technology trends</li>',
        '<li>Focus on core business activities</li>',
        '<li>Scalable IT management as you grow</li>',
        '<li>Predictable IT management costs</li>',
      ],
    },
  ],
};

export default function ManagedITInfrastructurePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title || 'Complete IT Infrastructure Management Services | Full IT Management UAE | NOCKO',
          description: 'Complete IT infrastructure management services for businesses in UAE. Full responsibility for network monitoring, system maintenance, security updates',
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
              { label: 'Complete IT Infrastructure Management Services ' },
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





