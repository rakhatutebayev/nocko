import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Data Residency and Backup Compliance | NOCKO UAE',
  description: 'NOCKO architects UAE-resident cloud workloads on AWS Middle East (Bahrain) and Azure UAE Central, ensuring TDRA and NESA compliance for government-affiliated and financial entities across Dubai and Abu Dhabi.',
  alternates: {
    canonical: '/articles/cloud-data-management',
    languages: {
      'en-AE': '/articles/cloud-data-management',
      'ru-RU': '/ru/articles/cloud-data-management',
    },
  },
};

const articleData = {
  hero: {
    title: 'Data Residency and Backup Compliance',
    subtitle: 'Keeping your sensitive UAE data strictly within the country borders',
    description: 'We architect natively within AWS Middle East and Azure UAE Central.',
  },
  intro: 'For government-affiliated or financial entities in the GCC, data geography is legally strictly regulated by the TDRA and NESA. We ensure all your cloud workloads—including your Disaster Recovery (DRaaS) backups—never physically leave the boundaries of the United Arab Emirates.',
  blocks: [
    {
      title: 'UAE-Resident Cloud Architecture',
      text: '<p>We deploy all workloads exclusively within AWS Middle East (Bahrain) or Azure UAE Central (Abu Dhabi) regions, both of which satisfy TDRA data localisation requirements. For entities operating under ADGM or DIFC regulatory frameworks, we document region affinity using AWS Region Control and Azure Policy assignments, producing audit-ready evidence for regulatory submissions.</p><p>Every storage account, database replica, and backup vault is tagged and policy-enforced to prevent accidental replication outside approved geographic boundaries. We run quarterly geo-compliance scans to catch configuration drift before auditors do.</p>',
      list: [
        'AWS Middle East and Azure UAE Central region enforcement via SCPs and Azure Policy',
        'ADGM and DIFC regulatory documentation packages',
        'Geo-tagging and policy assignments for all storage and compute resources',
        'Quarterly compliance drift detection reports',
      ],
    },
    {
      title: 'Immutable Backup and DRaaS Design',
      text: '<p>We configure immutable S3 Object Lock or Azure Blob immutability policies so that ransomware cannot delete or overwrite your backup snapshots. Backup jobs run every 4 hours for critical databases, with daily and weekly snapshots retained according to your RTO and RPO requirements—typically 15-minute RPO for Tier-1 financial systems.</p><p>Our Disaster Recovery as a Service (DRaaS) setups use AWS Elastic Disaster Recovery or Azure Site Recovery to maintain warm standby environments. We test failover quarterly so that the 4 AM phone call never turns into a 48-hour outage.</p>',
      list: [
        'Immutable backup vaults preventing ransomware deletion',
        'Sub-15-minute RPO for Tier-1 workloads',
        'Warm standby DRaaS on AWS or Azure within UAE boundaries',
        'Quarterly tested failover runbooks',
        'Automated backup health dashboards and alerting',
      ],
    },
    {
      title: 'Encryption and Key Custody',
      text: '<p>All data at rest is encrypted with AES-256 using Customer Managed Keys (CMK) stored in AWS KMS or Azure Key Vault, both configured with HSM-backed key material. This satisfies NESA Information Assurance standards requiring that encryption keys remain under the organisation\'s direct custody rather than delegated to the cloud provider.</p><p>We implement key rotation on a 90-day cycle and maintain a complete key lifecycle audit trail. For entities regulated by the UAE Central Bank or UAE Securities and Commodities Authority, we produce key management documentation as part of your annual IT audit package.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Does data stored in AWS Bahrain actually stay inside the UAE?</strong><br/>A: AWS Middle East (Bahrain) is the closest certified region, but for strict UAE-only residency we use Azure UAE Central (Abu Dhabi) or Azure UAE North (Dubai), which are physically within UAE borders. We select regions based on your specific regulatory requirement.',
        '<strong>Q: How do you prove data residency to a TDRA auditor?</strong><br/>A: We produce AWS CloudTrail logs filtered by region, Azure Policy compliance reports, and resource inventory exports showing every asset tagged to the approved region. These are packaged into an evidence bundle for your audit submission.',
        '<strong>Q: What happens to backups if we switch cloud providers?</strong><br/>A: We design backup workflows to be provider-agnostic where possible, storing exports in open formats such as SQL dumps or VM disk images. Migration between providers typically takes one to two weekends depending on data volume.',
        '<strong>Q: Can we keep sensitive HR data on-premise and burst compute workloads to the cloud?</strong><br/>A: Yes — hybrid architectures with private data stores in your Dubai datacenter connecting securely to cloud compute via ExpressRoute or AWS Direct Connect are a common pattern we implement.',
      ],
    },
  ],
};

export default function ClouddatamanagementPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-02-10', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
