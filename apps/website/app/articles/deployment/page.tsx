import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Rapid Network Deployment | Structured Cabling UAE | NOCKO',
  description:
    'Rapid network deployment for businesses in UAE. Prebuilt structured cabling plans, certified technicians, and compliant execution to deploy infrastructure across Dubai and the Emirates with minimal disruption.',
  keywords:
    'network deployment UAE, structured cabling deployment Dubai, rapid infrastructure rollout, cabling project planning UAE, network rollout services',
  openGraph: {
    title: 'Rapid Network Deployment | Structured Cabling UAE | NOCKO',
    description:
      'Rapid network deployment for businesses in UAE. Prebuilt structured cabling plans, certified technicians, and compliant execution with minimal disruption.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/deployment',
  },
};

const articleData = {
  hero: {
    title: 'Rapid Network Deployment',
    subtitle: 'Structured Cabling Rollouts Across UAE with Minimal Disruption',
    description: '',
  },
  intro:
    'Deploying network infrastructure across multiple sites is a high‑risk task if planning is weak. A structured deployment approach reduces downtime, enforces compliance, and gives your teams a predictable rollout timeline. From site surveys to certification, a rapid deployment program keeps your business moving while the infrastructure is upgraded.',
  blocks: [
    {
      title: 'What Rapid Deployment Includes',
      text: '<p>Rapid deployment is a structured cabling rollout designed to compress timelines without sacrificing quality. It starts with site surveys and design, then progresses through staging, installation, testing, and certification. Each phase is standardized so that multiple locations can be deployed in parallel.</p><p>We pre‑plan routes, label runs, and document assets to ensure handover is clean and operational teams can maintain the network from day one.</p>',
      list: [
        '<li>Site surveys, floor plans, and cable route design</li>',
        '<li>Prebuilt bill of materials and staging</li>',
        '<li>Certified installation teams and QA checks</li>',
        '<li>Testing, labeling, and documentation</li>',
        '<li>Compliance with UAE building and safety standards</li>',
        '<li>Handover packs for IT operations</li>',
      ],
    },
    {
      title: 'Why Structured Deployment Reduces Risk',
      text: '<p>Network rollouts fail when the work is ad‑hoc. Structured deployment creates a repeatable process that delivers consistent quality across all sites. This reduces rework, ensures predictable performance, and avoids the hidden costs of poor cable management and incomplete testing.</p><p>The result is a faster launch, fewer outages, and an infrastructure that scales as your business grows.</p>',
      list: [
        '<li>Consistent quality across all locations</li>',
        '<li>Lower downtime during migration</li>',
        '<li>Clean documentation for future maintenance</li>',
        '<li>Reduced rework and hidden costs</li>',
        '<li>Scalable rollout model for new sites</li>',
        '<li>Faster time to operational readiness</li>',
      ],
    },
    {
      title: 'Deployment Process at a Glance',
      text: '<p>We follow a staged rollout that keeps business operations online. Each location is surveyed, planned, and scheduled in advance, with tight coordination between IT and facilities. Installation is followed by testing and certification, then a structured handover.</p><p>For multi‑site businesses, we run parallel deployments with standardized deliverables so every site meets the same quality benchmark.</p>',
      list: [
        '<li>Survey and requirements capture</li>',
        '<li>Design, routing, and compliance checks</li>',
        '<li>Staging, procurement, and scheduling</li>',
        '<li>Installation and cable management</li>',
        '<li>Testing, certification, and remediation</li>',
        '<li>Documentation and operational handover</li>',
      ],
    },
  ],
};

export default function DeploymentArticlePage() {
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
