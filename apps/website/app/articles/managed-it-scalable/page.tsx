import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Scalable IT Solutions That Grow With Your Business | IT Scalability UAE | NOCKO',
  description:
    'Scalable IT solutions that grow with your business in UAE. Add capacity, expand infrastructure, and adapt to new requirements as your business grows. Seamless IT scaling for opening new offices or adding employees.',
  keywords:
    'scalable IT solutions UAE, IT infrastructure scaling Dubai, scalable IT services, IT growth management, business IT scaling UAE',
  openGraph: {
    title: 'Scalable IT Solutions That Grow With Your Business | IT Scalability UAE | NOCKO',
    description:
      'Scalable IT solutions that grow with your business in UAE. Add capacity, expand infrastructure, and adapt to new requirements as your business grows.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/managed-it-scalable',
  },
};

const articleData = {
  hero: {
    title: 'Scalable IT Solutions That Grow With Your Business',
    subtitle: 'IT Infrastructure That Adapts to Your Business Growth in UAE',
    description: '',
  },
  intro:
    'Business growth requires IT infrastructure that can scale with your needs. Whether you\'re opening new offices, adding employees, expanding operations, or entering new markets, your IT systems must support your growth seamlessly. Scalable IT solutions ensure your infrastructure adapts to your changing business requirements without disruption.',
  blocks: [
    {
      title: 'Why Scalable IT Solutions Matter',
      text: '<p>As your business grows, your IT needs change. You might need more network capacity, additional servers, more workstations, expanded storage, or new applications. Without scalable IT solutions, growth becomes challenging and expensive.</p><p>Scalable IT infrastructure means you can add capacity, expand systems, and adapt to new requirements without major disruptions or complete overhauls. Your IT systems grow with your business, supporting expansion rather than limiting it.</p>',
      list: [
        '<li>Support business growth without IT limitations</li>',
        '<li>Add capacity as needed without major overhauls</li>',
        '<li>Expand infrastructure for new offices or locations</li>',
        '<li>Scale up or down based on business needs</li>',
        '<li>Avoid over-provisioning and unnecessary costs</li>',
        '<li>Maintain performance as you grow</li>',
      ],
      image: '/images/services/managed-it-scalable.png',
      imageAlt: 'Scalable IT solutions for business growth',
    },
    {
      title: 'How Scalable IT Solutions Work',
      text: '<p>Scalable IT solutions are designed to grow with your business. We plan your IT infrastructure with scalability in mind, using flexible architectures and modular systems. When you need to expand, we add capacity incrementally without disrupting operations.</p><p>We also monitor your growth patterns and plan ahead. If we see you\'re adding employees, we prepare for more workstations. If you\'re opening new offices, we plan network expansion. If you\'re expanding operations, we scale infrastructure proactively.</p>',
      list: [
        '<li>Flexible IT architecture designed for growth</li>',
        '<li>Modular systems that expand incrementally</li>',
        '<li>Proactive capacity planning</li>',
        '<li>Seamless expansion without disruption</li>',
        '<li>Cloud-based solutions for easy scaling</li>',
        '<li>Cost-effective scaling strategies</li>',
      ],
    },
    {
      title: 'Scaling IT for Different Growth Scenarios',
      text: '<p>Business growth takes different forms, and scalable IT solutions adapt to each scenario. Whether you\'re adding employees, opening new locations, expanding operations, or entering new markets, we scale your IT infrastructure accordingly.</p><p>We handle everything from adding workstations and network capacity to expanding server infrastructure and implementing new applications. Your IT systems support your growth seamlessly, ensuring technology never limits your business expansion.</p>',
      list: [
        '<li>Scaling for new employees and workstations</li>',
        '<li>Expanding network for new office locations</li>',
        '<li>Scaling server infrastructure for increased operations</li>',
        '<li>Adding applications and services for new business areas</li>',
        '<li>Expanding storage and backup for growing data</li>',
        '<li>Scaling security for expanded operations</li>',
      ],
    },
  ],
};

export default function ManagedITScalablePage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


