import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: '24/7 SIEM & SOC Integration | NOCKO UAE',
  description: 'NOCKO feeds firewall drops, failed logins, and file access events into a centralised SIEM platform, with Dubai-based SOC engineers reviewing AI-flagged anomalies 24/7 and responding to active threats before business hours.',
  alternates: {
    canonical: '/articles/cybersecurity-monitoring',
    languages: {
      'en-AE': '/articles/cybersecurity-monitoring',
      'ru-RU': '/ru/articles/cybersecurity-monitoring',
    },
  },
};

const articleData = {
  hero: {
    title: '24/7 SIEM & SOC Integration',
    subtitle: 'A dedicated Security Operations Center in Dubai',
    description: 'Constant intelligent monitoring over millions of daily log events.',
  },
  intro: 'We pipe every firewall drop, every failed login attempt, and every file deletion into our Security Information and Event Management (SIEM) orchestrator. Our 24/7 specialized SOC engineers review these compiled AI-driven anomalies live, shutting down brute-force attacks in the middle of the night.',
  blocks: [
    {
      title: 'SIEM Platform and Log Ingestion',
      text: '<p>We deploy Microsoft Sentinel or Splunk as the SIEM backbone, ingesting logs from firewalls (FortiGate, Palo Alto), Active Directory, cloud platforms (AWS CloudTrail, Azure Monitor), email gateways, and endpoint agents. A medium-sized Dubai office typically generates 2–5 million log events per day — far too many for manual review. Correlation rules and ML-based anomaly detection reduce these to 20–50 actionable alerts per day.</p><p>Log retention is configured for 12 months in hot storage and 3 years in cold storage, satisfying NESA IA requirements for log preservation and enabling forensic investigation of historical incidents.</p>',
      list: [
        'Multi-source log ingestion: firewall, AD, cloud, endpoints, email',
        'ML-based anomaly detection reducing noise to actionable alerts',
        '12-month hot log retention for NESA compliance',
        'Custom detection rules for UAE-specific threat patterns',
        'Automated incident ticket creation in your ITSM platform',
      ],
    },
    {
      title: '24/7 SOC Response and Threat Hunting',
      text: '<p>Our Security Operations Center runs three shifts covering UAE business hours, evening, and overnight. When the SIEM raises a high-severity alert — such as a credential stuffing attack against your M365 tenant at 2 AM — a SOC engineer reviews the event context, confirms it is not a false positive, and acts within 15 minutes: blocking the attacking IP at the firewall and disabling the targeted account pending investigation.</p><p>Beyond reactive alerting, we conduct weekly threat hunting sessions to proactively search for indicators of compromise that automated rules may have missed — such as low-and-slow data exfiltration or living-off-the-land attacks using legitimate Windows tools.</p>',
    },
    {
      title: 'Reporting and Compliance Evidence',
      text: '<p>Monthly security reports summarise incident counts, mean time to detect (MTTD), mean time to respond (MTTR), and top threat categories. For entities undergoing NESA or DFSA audits, we produce control-mapped evidence reports showing log retention, access monitoring, and incident response history aligned to the relevant regulatory framework.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: What is the difference between a SIEM and an MDR service?</strong><br/>A: A SIEM aggregates and correlates logs. MDR (Managed Detection and Response) adds human analysts who investigate alerts and take containment actions. Our SOC service combines both — SIEM technology plus analyst response.',
        '<strong>Q: How long does it take to get the SIEM operational?</strong><br/>A: Initial deployment and basic log ingestion takes 1–2 weeks. Fine-tuning detection rules to reduce false positives for your specific environment typically takes another 2–4 weeks.',
        '<strong>Q: Can you integrate with our existing ticketing system?</strong><br/>A: Yes — we integrate with ServiceNow, Jira, Freshservice, and most major ITSM platforms via webhook or API, so SIEM alerts automatically create tickets in your workflow.',
        '<strong>Q: What languages do your SOC engineers speak?</strong><br/>A: Our Dubai-based SOC team communicates in English and Arabic, and we have engineers comfortable with both.',
      ],
    },
  ],
};

export default function CybersecuritymonitoringPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-07-08', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cybersecurity' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
