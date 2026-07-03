import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import FAQAccordion from '@/components/sections/FAQAccordion';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cyber Security Monitoring Service Dubai | 24/7 SOC & SIEM | NOCKO UAE',
  description: 'Professional cyber security monitoring service in Dubai. 24/7 SOC with SIEM log analysis, real-time threat detection, NESA-compliant reporting, and sub-15-minute incident response for UAE businesses. Free security assessment.',
  alternates: {
    canonical: '/articles/cybersecurity-monitoring',
    languages: {
      'en-AE': '/articles/cybersecurity-monitoring',
      'ru-RU': '/ru/articles/cybersecurity-monitoring',
    },
  },
  keywords: 'cyber security monitoring service, cybersecurity monitoring dubai, soc monitoring services dubai, 24/7 security monitoring uae, siem services dubai, managed soc dubai, nesa compliance monitoring, threat detection dubai',
  robots: { index: true, follow: true },
};

const articleData = {
  hero: {
    title: 'Cyber Security Monitoring Service in Dubai',
    subtitle: '24/7 SOC with SIEM — Real-Time Threat Detection for UAE Businesses',
    description: 'Continuous cyber security monitoring service operated from Dubai. Our SOC engineers detect and respond to threats in under 15 minutes, 24 hours a day, 7 days a week — keeping your business compliant with NESA and DFSA requirements.',
  },
  intro: 'A single undetected intrusion can cost a UAE business millions in regulatory fines, ransom payments, and reputational damage. Yet most companies in Dubai rely on reactive security — checking logs only after something breaks. Our managed cyber security monitoring service changes that: we pipe every firewall drop, failed login, and file access event into a centralised SIEM platform and have Dubai-based SOC engineers reviewing AI-flagged anomalies around the clock, shutting down attacks before your staff arrives in the morning.',
  blocks: [
    {
      title: '1. What Is a Cyber Security Monitoring Service?',
      text: '<p>A cyber security monitoring service continuously collects, analyses, and responds to security events across your entire IT environment — servers, firewalls, endpoints, cloud platforms, and email. Unlike antivirus software that only blocks known malware signatures, a monitoring service detects anomalous behaviour patterns: a user downloading 50 GB at midnight, an admin account logging in from two countries simultaneously, or a server communicating with a known command-and-control IP.</p><p>For UAE businesses operating in regulated free zones such as DIFC, ADGM, or entities subject to NESA (National Electronic Security Authority) requirements, a documented security monitoring programme is not optional — it is a compliance obligation. Our service provides both the technical monitoring and the audit-ready evidence reports your compliance team needs.</p>',
      list: [
        'Continuous monitoring of network, cloud, endpoints, and email',
        'Behaviour-based detection — catches zero-day threats antivirus misses',
        'NESA IA-Standards and DFSA Technology Risk compliant logging',
        'Documented audit trail for regulatory inspections',
      ],
    },
    {
      title: '2. SIEM Platform and Log Ingestion',
      text: '<p>We deploy Microsoft Sentinel or Splunk as the SIEM backbone, ingesting logs from firewalls (FortiGate, Palo Alto, Check Point), Active Directory, cloud platforms (AWS CloudTrail, Azure Monitor), email gateways (Microsoft 365 Defender, Proofpoint), and endpoint agents. A medium-sized Dubai office typically generates 2–5 million log events per day — far too many for manual review.</p><p>Our correlation rules and ML-based anomaly detection condense those millions of events into 20–50 actionable alerts per day. Log retention is configured for 12 months in hot storage and 3 years in cold storage, satisfying NESA IA requirements for log preservation and enabling forensic investigation of historical incidents.</p>',
      list: [
        'Multi-source ingestion: firewall, Active Directory, cloud, endpoints, email gateway',
        'Microsoft Sentinel or Splunk SIEM deployment and management',
        'ML-based anomaly detection — reduces noise by 99.5%',
        '12-month hot + 3-year cold log retention for NESA compliance',
        'Custom detection rules for UAE-specific threat patterns (BEC, ransomware, insider threat)',
        'Automated incident ticket creation in ServiceNow, Jira, or Freshservice',
      ],
    },
    {
      title: '3. 24/7 SOC: Human Response, Not Just Alerts',
      text: '<p>Technology alone is not enough. Our Security Operations Center runs three shifts — covering UAE business hours, evening, and overnight — so a real engineer reviews every high-severity alert. When the SIEM flags a credential stuffing attack against your Microsoft 365 tenant at 2 AM, a SOC analyst confirms it is a genuine attack (not a false positive), blocks the attacking IP at the perimeter firewall, disables the targeted account, and opens an incident ticket — all within 15 minutes.</p><p>Beyond reactive alerting, we run weekly threat hunting sessions: proactive searches for indicators of compromise that automated rules may have missed. Common examples include low-and-slow data exfiltration (100 MB per hour for 30 days) and living-off-the-land attacks using legitimate Windows tools like PowerShell and WMI to avoid triggering signature-based detection.</p>',
      list: [
        'Three-shift SOC coverage — UAE business hours, evening, and overnight',
        'Guaranteed 15-minute response time for critical severity alerts',
        'Verified response: analyst confirms genuine threat before taking action',
        'Containment actions: IP blocking, account disabling, network segmentation',
        'Weekly proactive threat hunting for low-and-slow attacks',
      ],
    },
    {
      title: '4. Endpoint Detection and Response (EDR) Integration',
      text: '<p>Perimeter monitoring alone misses threats that enter via phishing emails or USB drives. We integrate EDR agents (Microsoft Defender for Endpoint, CrowdStrike Falcon, or SentinelOne) on every workstation and server, feeding endpoint telemetry directly into the SIEM. This gives our SOC engineers process-level visibility: if ransomware begins encrypting files, we see it at the first encrypted file — not after thousands.</p><p>For remote workers — common across Dubai\'s free zone business community — EDR provides consistent protection regardless of whether the device is on the corporate network or a home Wi-Fi connection in JBR or Marina.</p>',
      list: [
        'EDR deployment on all endpoints: workstations, laptops, servers',
        'Process-level telemetry fed to SIEM for correlated analysis',
        'Ransomware detection at first encrypted file — not after mass damage',
        'Remote worker protection regardless of network location',
      ],
    },
    {
      title: '5. NESA Compliance Monitoring and Reporting',
      text: '<p>The UAE\'s National Electronic Security Authority (NESA) IA Standards require organisations in critical sectors to maintain documented security monitoring programmes. Our cyber security monitoring service is designed around these requirements: log sources, retention periods, alert thresholds, and response procedures all map directly to NESA control categories.</p><p>For entities in DIFC or ADGM, we also map monitoring outputs to DFSA Technology Risk and Cyber Risk guidance. Monthly security reports include incident counts, MTTD, MTTR, top threat categories, and a control evidence annex that your compliance officer can submit directly to regulators or auditors.</p>',
      list: [
        'NESA IA-Standards control mapping for all monitoring activities',
        'DFSA Technology Risk and Cyber Risk guidance alignment',
        'Monthly compliance report with evidence annex',
        'Incident response documentation suitable for regulatory submission',
        'Annual penetration testing coordination with monitoring baseline',
      ],
    },
    {
      title: '6. Security Monitoring for Cloud Environments (AWS & Azure)',
      text: '<p>As UAE businesses migrate workloads to AWS Middle East Region and Azure UAE Central, security monitoring must follow. Cloud environments generate their own security events — IAM permission changes, unusual API calls, S3 bucket policy modifications — that on-premise security tools miss entirely.</p><p>We connect AWS CloudTrail, AWS GuardDuty, Azure Defender, and Azure Sentinel into our centralised SIEM, giving your SOC team unified visibility across on-premise and cloud infrastructure. A single dashboard shows whether a suspicious login originated from your Dubai office, your AWS workload, or a compromised cloud credential.</p>',
      list: [
        'AWS CloudTrail and GuardDuty integration with central SIEM',
        'Azure Defender and Azure Monitor log ingestion',
        'Unified on-premise + cloud security dashboard',
        'Cloud-specific detection rules: IAM abuse, S3 exposure, cryptomining',
      ],
    },
    
  ],
};

const faqItems = [
  {
    question: "What is a cyber security monitoring service and does my business need it?",
    answer: "A cyber security monitoring service continuously watches your IT environment for threats and responds in real time. Any UAE business with more than 20 employees, customer data, or regulatory obligations (NESA, DFSA, ADGM) should have one. Without it, breaches go undetected for an average of 207 days globally.",
  },
  {
    question: "What is the difference between a SIEM and an MDR service?",
    answer: "A SIEM is a platform that aggregates and correlates logs. MDR (Managed Detection and Response) adds human analysts who investigate alerts and take containment actions. Our SOC service combines both — enterprise SIEM technology plus 24/7 analyst response at a managed service price.",
  },
  {
    question: "How quickly do you respond to a detected threat?",
    answer: "For critical severity alerts (active intrusion, ransomware, data exfiltration), our guaranteed response time is 15 minutes. For high severity, 1 hour. For medium severity, 4 hours. Response actions include IP blocking, account suspension, network isolation, and customer notification.",
  },
  {
    question: "How long does it take to set up the monitoring service?",
    answer: "Initial SIEM deployment and basic log ingestion takes 1–2 weeks. Fine-tuning detection rules to reduce false positives for your specific environment takes another 2–4 weeks. Full operational capability is typically achieved within 30 days.",
  },
  {
    question: "Is your monitoring service NESA compliant?",
    answer: "Yes. Our log retention (12 months hot, 3 years cold), alert documentation, and incident response procedures are designed to satisfy NESA IA Standards requirements. We provide monthly evidence reports suitable for NESA audit submissions.",
  },
  {
    question: "Can you monitor our Microsoft 365 and Azure environment?",
    answer: "Yes. We ingest Microsoft 365 Defender, Azure Monitor, and Azure Sentinel data into our centralised SIEM. This covers email threats, Teams activity, SharePoint access, Azure AD sign-ins, and cloud resource changes.",
  },
];

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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cybersecurity', href: '/services/cybersecurity' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>

        <FAQAccordion
          title="Frequently Asked Questions — Cyber Security Monitoring Service Dubai"
          items={faqItems}
        />
      </main>
      <Footer />
    </>
  );
}
