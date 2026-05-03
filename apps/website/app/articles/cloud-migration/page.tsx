import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Zero-Downtime Cloud Extrications | NOCKO UAE',
  description: 'NOCKO orchestrates zero-downtime cloud migrations for UAE enterprises, staging parallel environments on AWS and Azure, synchronising data over site-to-site VPNs, and executing final cutovers over weekends to avoid business disruption.',
  alternates: {
    canonical: '/articles/cloud-migration',
    languages: {
      'en-AE': '/articles/cloud-migration',
      'ru-RU': '/ru/articles/cloud-migration',
    },
  },
};

const articleData = {
  hero: {
    title: 'Zero-Downtime Cloud Extrications',
    subtitle: 'Evacuate your physical server room safely',
    description: 'We orchestrate massively parallel AWS and Azure migrations with zero missing packets.',
  },
  intro: 'Lifting and shifting legacy core applications demands extreme precision to prevent outages. Our Senior Cloud Architects stage complete identical environments, establishing secure VPN site-to-site bridges. Once data replication is identically synchronized, we execute the final cutover invisibly over a weekend.',
  blocks: [
    {
      title: 'Pre-Migration Assessment and Staging',
      text: '<p>Before moving a single byte, we inventory your on-premise workloads using AWS Application Discovery Service or Azure Migrate, categorising servers by complexity and dependency. We then build an identical staging environment in the target cloud region — Azure UAE Central or AWS Middle East — and validate application behaviour against real traffic replays before any DNS change is made.</p><p>This discovery phase typically takes 1–2 weeks for environments with up to 30 servers, and produces a dependency map that prevents "surprise" outages caused by undocumented inter-server connections — a very common issue in UAE businesses that have grown organically without formal change management.</p>',
      list: [
        'Full workload discovery and dependency mapping',
        'Cloud-native staging environment validated before cutover',
        'Site-to-site VPN bridge between on-premise and cloud during replication',
        'Application compatibility testing under realistic load',
      ],
    },
    {
      title: 'Data Replication and Cutover Execution',
      text: '<p>We use AWS Elastic Disaster Recovery or Azure Site Recovery to continuously replicate your on-premise VMs to the cloud staging environment. Replication runs silently in the background for days or weeks — your staff never notice. Once the replication lag drops below 30 seconds, we schedule a maintenance window (typically a Thursday night after MENA market close) to execute the final cutover.</p><p>DNS records are updated with a 60-second TTL, and we keep the on-premise environment in standby for 72 hours in case an unexpected issue requires rollback. For most migrations we complete the entire process with under 2 hours of scheduled downtime.</p>',
      list: [
        'Continuous VM replication with sub-30-second lag before cutover',
        'DNS cutover executed during off-peak hours',
        'On-premise standby retained for 72-hour rollback window',
        'Post-migration performance validation against pre-migration baselines',
      ],
    },
    {
      title: 'Post-Migration Optimisation',
      text: '<p>After migration, cloud resources are rarely right-sized on day one. We monitor resource utilisation for the first 30 days and make instance type adjustments based on actual usage patterns. We also convert remaining On-Demand instances to Reserved Instances once workload patterns are confirmed, and implement auto-scaling groups for web tiers to handle peak traffic without manual intervention.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: How long does a full server room migration take?</strong><br/>A: For a 20–40 server environment, the full migration including staging, replication, and cutover typically takes 4–8 weeks from start to completion.',
        '<strong>Q: What if something goes wrong during the cutover?</strong><br/>A: We maintain the on-premise environment in standby for 72 hours post-cutover. Rolling back is a single DNS change — we rehearse this exact procedure in staging before touching production.',
        '<strong>Q: Can you migrate while our office is still operating?</strong><br/>A: Yes — replication happens in the background using encrypted tunnels that do not interrupt production traffic. Only the final cutover window requires a brief scheduled maintenance period.',
        '<strong>Q: Do you support migrating from one cloud provider to another (e.g. AWS to Azure)?</strong><br/>A: Yes — we handle cloud-to-cloud migrations using export/import pipelines, though these are typically more complex than on-premise-to-cloud migrations.',
      ],
    },
  ],
};

export default function CloudmigrationPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-04-14', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
