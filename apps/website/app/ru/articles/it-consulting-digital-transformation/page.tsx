import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Business Continuity & Disaster Recovery UAE | NOCKO',
  description: 'Architecting cloud-native Disaster Recovery as a Service (DRaaS) to ensure zero data loss and compliance with UAE insurance mandates.',
  alternates: {
    canonical: '/articles/it-consulting-digital-transformation',
  },
};

const articleData = {
  hero: {
    title: 'Business Continuity & Disaster Recovery',
    subtitle: 'Architecting Resilience Against Ransomware and Outages',
    description: 'Stop confusing simple backups with true disaster recovery. We build mathematically proven failover systems for the modern enterprise.',
  },
  intro: 'A catastrophic IT failure—whether caused by a targeted ransomware encryption attack, a hardware failure, or an office fire in Dubai—is an inevitability, not a possibility. Relying on an external hard drive or a basic daily NAS backup is profoundly insufficient for true business continuity. NOCKO architects cloud-native Disaster Recovery as a Service (DRaaS) frameworks designed to keep your business functioning when your primary systems go dark.',
  blocks: [
    {
      title: 'Defining the Mathematics of Recovery',
      text: '<p>A professional Disaster Recovery plan is not measured by "how" data is stored, but by two critical mathematical thresholds agreed upon by the executive board:</p>',
      list: [
        '<strong>RPO (Recovery Point Objective):</strong> How much data (in hours or minutes) can your business afford to permanently lose? For a hospital or high-frequency trading firm, the RPO might be zero. For a logistics firm, it might be 15 minutes.',
        '<strong>RTO (Recovery Time Objective):</strong> How long can your systems remain offline before the business suffers unrecoverable financial damage? If your servers crash, how fast can we boot up emergency copies? 1 hour? 4 hours? A week?'
      ]
    },
    {
      title: 'Immutable Snapshots & Ransomware Defense',
      text: '<p>Modern ransomware doesn\'t just encrypt your files; it intentionally hunts down and destroys your backups first so that you are forced to pay the ransom. We counteract this using Immutable Cloud Storage. By utilizing Write-Once-Read-Many (WORM) storage protocols, we ensure that once a server snapshot is written to the vault in the cloud, it cannot be modified, deleted, or encrypted by any administrator or malware strain until the retention period expires—guaranteeing recovery.</p>'
    },
    {
      title: 'Virtual Cloud Failover (DRaaS)',
      text: '<p>If your physical office loses power or your local server chassis critically fails, retrieving a backup could ordinarily take days while you wait for new hardware to ship. Instead, we architect "warm" or "hot" standby environments using AWS or Azure. Within minutes of a disaster, our NOC team can boot replica virtual machines of your critical servers in the cloud, allowing your staff in the UAE or remotely to continue working via secure VPNs exactly as if nothing happened.</p>'
    }
  ],
};

export default function ITConsultingBCDRePage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Consulting', href: '/services/it-consulting' }, { label: 'Disaster Recovery' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
