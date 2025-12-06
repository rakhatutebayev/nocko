import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Cloud Migration Services | Safe Cloud Migration UAE | NOCKO',
  description:
    'Safe and efficient cloud migration services for businesses in UAE. Move to AWS, Azure, Google Cloud, or private cloud with zero downtime and zero data loss. Professional cloud migration planning and execution.',
  keywords:
    'cloud migration UAE, cloud migration services Dubai, AWS migration, Azure migration, Google Cloud migration, cloud migration planning UAE',
  openGraph: {
    title: 'Cloud Migration Services | Safe Cloud Migration UAE | NOCKO',
    description:
      'Safe and efficient cloud migration services for businesses in UAE. Move to AWS, Azure, Google Cloud, or private cloud with zero downtime and zero data loss.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/cloud-migration',
  },
};

const articleData = {
  hero: {
    title: 'Cloud Migration Services',
    subtitle: 'Safe and Efficient Cloud Migration for Businesses in UAE',
    description: '',
  },
  intro:
    'Moving your business to the cloud requires careful planning and execution. Cloud migration services ensure your transition is safe, efficient, and minimizes disruption. Whether you\'re moving to AWS, Azure, Google Cloud, or a private cloud, professional migration planning and execution protect your data and ensure business continuity.',
  blocks: [
    {
      title: 'What Cloud Migration Includes',
      text: '<p>Cloud migration covers all aspects of moving your business to the cloud. We assess your current infrastructure, plan the migration strategy, execute the migration carefully, and ensure everything works correctly in the cloud. The entire process is managed professionally to minimize risk.</p><p>We support migrations to major cloud providers like AWS, Azure, and Google Cloud, as well as private cloud solutions. Whether you\'re moving applications, data, or entire infrastructure, we handle the migration process smoothly and efficiently.</p>',
      list: [
        '<li>Current infrastructure assessment and analysis</li>',
        '<li>Cloud migration strategy and planning</li>',
        '<li>Application and data migration execution</li>',
        '<li>Infrastructure migration to cloud</li>',
        '<li>Testing and validation after migration</li>',
        '<li>Post-migration support and optimization</li>',
      ],
    },
    {
      title: 'Benefits of Professional Cloud Migration',
      text: '<p>Professional cloud migration provides safe and efficient transition to the cloud. You get expert planning that minimizes downtime, careful execution that prevents data loss, and comprehensive testing that ensures everything works correctly. The migration process is smooth and risk-free.</p><p>You also benefit from reduced migration time, lower risk of data loss, minimal business disruption, and faster time to value. With professional migration, you move to the cloud confidently and start benefiting from cloud advantages quickly.</p>',
      list: [
        '<li>Safe migration with zero data loss</li>',
        '<li>Minimal downtime during migration</li>',
        '<li>Expert planning and execution</li>',
        '<li>Comprehensive testing and validation</li>',
        '<li>Reduced migration risk</li>',
        '<li>Faster time to cloud benefits</li>',
      ],
    },
    {
      title: 'Cloud Migration Process',
      text: '<p>Cloud migration follows a structured process to ensure success. We start with assessment to understand your current infrastructure, then plan the migration strategy based on your needs. During execution, we migrate carefully with testing at each step. After migration, we validate everything and provide support.</p><p>The process includes assessment, planning, preparation, migration execution, testing, validation, and post-migration support. Each phase is handled carefully to ensure smooth transition and minimize risk. You get a complete migration service from start to finish.</p>',
      list: [
        '<li>Infrastructure assessment and analysis</li>',
        '<li>Migration strategy development</li>',
        '<li>Pre-migration preparation and planning</li>',
        '<li>Phased migration execution</li>',
        '<li>Continuous testing and validation</li>',
        '<li>Post-migration support and optimization</li>',
      ],
    },
  ],
};

export default function CloudMigrationPage() {
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



