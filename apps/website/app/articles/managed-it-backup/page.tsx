import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Disaster Recovery and SLA Guarantees | NOCKO UAE',
  description: 'NOCKO engineers and manages backup and disaster recovery for UAE businesses — defining RTO and RPO targets, deploying immutable backup vaults, and running quarterly tested failovers so a server room fire or ransomware attack never becomes a permanent data loss event.',
  alternates: {
    canonical: '/articles/managed-it-backup',
    languages: {
      'en-AE': '/articles/managed-it-backup',
      'ru-RU': '/ru/articles/managed-it-backup',
    },
  },
};

const articleData = {
  hero: {
    title: 'Disaster Recovery and SLA Guarantees',
    subtitle: 'Mathematically protecting your data against absolute failure',
    description: 'Strict RTO and RPO objectives ensuring zero data loss.',
  },
  intro: 'If your primary datacenter catches fire or your server is cryptolocked, how long can you survive without your data? We engineer and manage your backups continuously to hit your exact Recovery Time Objective (RTO) and Recovery Point Objective (RPO) requirements.',
  blocks: [
    {
      title: 'Defining RTO and RPO Requirements',
      text: '<p>Recovery Time Objective (RTO) is how long your business can operate without a system before revenue is impacted. Recovery Point Objective (RPO) is how much data you can afford to lose — the maximum gap between your last backup and the incident. These are business decisions, not technical ones, and they drive the entire backup architecture.</p><p>A trading firm in DIFC may need a 30-minute RTO and 5-minute RPO for their core systems, requiring continuous replication. A professional services firm in Business Bay might accept a 4-hour RTO and 24-hour RPO, which is achievable with nightly cloud backups at a fraction of the cost. We work with your management team to define realistic targets and then engineer an architecture that meets them within your budget.</p>',
      list: [
        'Business impact analysis to determine tolerable RTO and RPO per system',
        'Tier-based backup frequency: continuous replication for Tier 1, nightly for Tier 3',
        'Immutable backup vaults preventing ransomware deletion or modification',
        'Offsite backup storage in UAE-resident cloud (Azure UAE Central, AWS ME)',
        'Quarterly tested restore exercises with documented results',
      ],
    },
    {
      title: 'Backup Architecture and Implementation',
      text: '<p>We deploy Veeam Backup & Replication for VMware/Hyper-V environments, or Azure Backup and AWS Backup for cloud workloads. Backup jobs are configured with grandfather-father-son (GFS) retention: hourly snapshots for 24 hours, daily backups for 30 days, weekly backups for 3 months, monthly backups for 1 year. This retention schedule satisfies NESA log retention requirements and UAE financial record-keeping obligations.</p><p>All backup data is encrypted in transit and at rest using AES-256. For regulated data, we configure backups to write to immutable storage (AWS S3 Object Lock or Azure immutable blob storage) that cannot be deleted or modified for the retention period — protecting against both ransomware and accidental deletion.</p>',
    },
    {
      title: 'Tested Recovery — Not Just Backup',
      text: '<p>Untested backups are not disaster recovery — they are a false sense of security. We run quarterly restore tests, actually recovering a virtual machine or database from backup to a test environment and verifying that the application starts and data is intact. These tests are documented with timestamps and screenshots, providing evidence that your recovery capability actually works.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: How do we know our backups are working if nobody checks them?</strong><br/>A: We configure backup job monitoring with daily email reports showing job status. Any failed backup job raises an alert to our NOC within 30 minutes, and we investigate and resolve before the next backup window.',
        '<strong>Q: Can ransomware delete our cloud backups?</strong><br/>A: With immutable storage configured correctly, no — the cloud storage provider enforces the immutability lock even against API deletion requests. This is why immutable vaults are a non-negotiable part of our backup design.',
        '<strong>Q: How long does it take to restore a 2TB server from backup?</strong><br/>A: A bare-metal restore of a 2TB VM from cloud backup over a 100Mbps link takes approximately 45 hours. For critical systems, we maintain a local backup copy that restores in 4–6 hours. RTO requirements determine which backup tier you need.',
        '<strong>Q: Do backups of Microsoft 365 email count as part of the managed backup service?</strong><br/>A: Yes — Microsoft does not guarantee long-term retention of deleted M365 data. We back up Exchange Online, SharePoint, and OneDrive using Veeam Backup for Microsoft 365, with a separate retention policy.',
      ],
    },
  ],
};

export default function ManageditbackupPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-10-14', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Managed IT' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
