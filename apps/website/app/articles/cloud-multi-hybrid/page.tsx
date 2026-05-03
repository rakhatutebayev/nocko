import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Hybrid Cloud Security | NOCKO UAE',
  description: 'NOCKO designs hybrid cloud architectures for UAE enterprises — keeping regulated databases in Dubai private datacenters while bursting web and compute workloads into AWS or Azure, connected securely via ExpressRoute or AWS Direct Connect.',
  alternates: {
    canonical: '/articles/cloud-multi-hybrid',
    languages: {
      'en-AE': '/articles/cloud-multi-hybrid',
      'ru-RU': '/ru/articles/cloud-multi-hybrid',
    },
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
      title: 'Private Datacenter for Regulated Workloads',
      text: '<p>Financial entities operating under UAE Central Bank regulations or entities subject to NESA IA standards frequently cannot place their core databases and customer data on public cloud infrastructure. We co-locate or manage private racks in certified Dubai datacenters (such as Khazna or du Datamena facilities), giving your IT team physical control over hardware while we manage the virtualisation layer, patching, and monitoring remotely.</p><p>This physical sovereignty satisfies auditors while still allowing modern DevOps tooling and API-driven automation on the private layer, so your development team does not regress to manual provisioning.</p>',
      list: [
        'Private racks in Dubai-certified ISO 27001 datacenters',
        'VMware or Hyper-V virtualisation managed and monitored remotely',
        'Physical hardware owned by client — no vendor lock-in',
        'NESA and UAE Central Bank compliant architecture documentation',
      ],
    },
    {
      title: 'Secure Connectivity Between Private and Public Layers',
      text: '<p>The connection between your on-premise or private datacenter and the public cloud burst layer must be encrypted and deterministic — not running over the public internet. We configure Azure ExpressRoute or AWS Direct Connect circuits through Etisalat or Du, providing dedicated private bandwidth between your Dubai datacenter and the cloud region.</p><p>Network segmentation ensures the public cloud layer can only reach specific API endpoints in the private datacenter, and never has direct database access. This segmentation is enforced at both the network firewall level and the application layer.</p>',
      list: [
        'ExpressRoute or AWS Direct Connect via Etisalat/Du circuits',
        'Dedicated bandwidth without internet exposure',
        'Strict network segmentation between public and private tiers',
        'Encrypted IPSec backup tunnel for circuit redundancy',
      ],
    },
    {
      title: 'Burst Scaling and Cost Management',
      text: '<p>The public cloud layer handles unpredictable demand spikes — promotional campaigns, year-end financial processing, or peak e-commerce periods. We configure auto-scaling groups on AWS or Azure VM Scale Sets that automatically provision and decommission instances based on CPU and queue depth metrics. Instances are only live when needed, so you pay only for burst capacity actually consumed.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Is a hybrid setup more expensive than going fully public cloud?</strong><br/>A: For UAE-regulated entities the private layer is a compliance requirement, not an option. However, moving bursty workloads to the public layer typically saves 40–60% compared to over-provisioning on-premise hardware for peak capacity.',
        '<strong>Q: What is the latency between a Dubai private datacenter and Azure UAE Central?</strong><br/>A: Via ExpressRoute, typical round-trip latency is under 5ms, which is acceptable for most application architectures.',
        '<strong>Q: Can we start with a fully public cloud setup and add a private layer later?</strong><br/>A: Yes — we frequently design architectures where the private layer is added when the company scales to a size that triggers regulatory scrutiny.',
        '<strong>Q: Which datacenters in Dubai support this kind of private co-location?</strong><br/>A: We work primarily with Khazna Data Centers and du Datamena, both of which hold ISO 27001 and Tier III certifications.',
      ],
    },
  ],
};

export default function CloudmultihybridPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-05-20', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
