import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import FAQAccordion from '@/components/sections/FAQAccordion';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cybersecurity Protection for UAE Businesses | Email, Endpoint & Network Defence | NOCKO',
  description: 'Layered cybersecurity protection for UAE businesses — cloud email sandboxing, EDR endpoint defence, and network segmentation. NOCKO detonates weaponised attachments, blocks BEC fraud, and stops ransomware before it spreads.',
  alternates: {
    canonical: '/articles/cybersecurity-protection',
    languages: {
      'en-AE': '/articles/cybersecurity-protection',
      'ru-RU': '/ru/articles/cybersecurity-protection',
    },
  },
  robots: { index: true, follow: true },
};

const articleData = {
  hero: {
    title: 'Cybersecurity Protection for UAE Businesses',
    subtitle: 'Layered defence across email, endpoints, and your network',
    description: 'Email sandboxing, EDR, and network segmentation working together to stop breaches.',
  },
  intro: 'Effective cybersecurity protection is never a single product — it is layers that each stop a different stage of an attack. The vast majority of breaches begin with a deceptive email, so our first layer is rigorous cloud sandboxing: suspicious PDF attachments or weaponised Excel macros are detonated safely inside an isolated cloud virtual machine, analysing their behavioural impact before the email is ever permitted to reach your staff. Behind that sit endpoint detection and network segmentation, so that even if one layer is bypassed, the attack is contained before it becomes a business-wide incident. This is how we protect UAE financial services, real estate, and professional-services firms against the ransomware and Business Email Compromise campaigns that target them.',
  blocks: [
    {
      title: 'Email Sandboxing and Detonation',
      text: '<p>We deploy Microsoft Defender for Office 365 Plan 2 or Proofpoint Targeted Attack Protection, both of which use cloud-based detonation chambers to detonate suspicious attachments and URLs before delivery. A weaponised Excel file containing an embedded macro dropper is opened inside an isolated Windows VM — if it attempts to download a payload or make external connections, the email is quarantined and the sender is flagged.</p><p>This process adds 30–90 seconds of delivery delay for suspicious emails, which is imperceptible to staff while blocking the primary delivery mechanism for ransomware groups targeting UAE financial services and real estate companies.</p>',
      list: [
        'Attachment detonation in isolated cloud VMs before inbox delivery',
        'Safe Links URL rewriting for real-time URL reputation checking on click',
        'Anti-phishing policies with impersonation protection for executive names',
        'DMARC, DKIM, and SPF enforcement to block spoofed sender domains',
        'Quarantine management with user self-service release for false positives',
      ],
    },
    {
      title: 'Spear-Phishing and BEC Protection',
      text: '<p>Business Email Compromise (BEC) attacks — where attackers impersonate your CEO or CFO to authorise fraudulent wire transfers — are the highest-value attack vector in the UAE, with average losses exceeding AED 500,000 per incident. We configure executive impersonation protection rules that flag emails claiming to be from your leadership team but arriving from external domains, and we implement dual-approval workflows for financial transactions initiated by email.</p><p>We also conduct quarterly simulated phishing campaigns using Microsoft Attack Simulator, testing staff awareness and identifying the employees who need additional security awareness training before they become a real incident.</p>',
    },
    {
      title: 'DMARC Enforcement and Domain Protection',
      text: '<p>Without DMARC in enforcement mode, anyone can send emails that appear to come from your company domain — a trivial technique used for supplier fraud and credential harvesting. We configure SPF, DKIM, and DMARC records with p=quarantine and progress to p=reject once legitimate mail flow is confirmed, preventing domain spoofing entirely. We also monitor for lookalike domains (nocko-uae.com, nockko.ae) that attackers register to impersonate your company in phishing campaigns.</p>',
    },
    {
      title: 'Endpoint Protection and EDR',
      text: '<p>Email is the entry point, but the endpoint — the laptop or server — is where an attack executes. Traditional signature-based antivirus cannot detect the fileless and living-off-the-land techniques modern ransomware groups use, so we deploy Endpoint Detection and Response (EDR) such as Microsoft Defender for Endpoint or SentinelOne. Instead of matching known signatures, EDR watches process behaviour: a Word document spawning PowerShell, or an application encrypting files in rapid succession, is automatically isolated from the network within seconds.</p><p>Every endpoint reports telemetry to a central console, giving our team a single pane of glass across your UAE offices. When one device is compromised, we can contain it remotely — cutting its network access while investigation continues — without waiting for an engineer to reach the desk.</p>',
      list: [
        'Behaviour-based detection of fileless and zero-day malware',
        'Automated device isolation the moment ransomware behaviour is detected',
        'Continuous telemetry with 24/7 threat hunting by our SOC',
        'Rollback of malicious changes on supported endpoints',
        'Full asset inventory so no unmanaged device becomes a blind spot',
      ],
    },
    {
      title: 'Network Segmentation and Zero-Trust Access',
      text: '<p>The final protection layer assumes a breach will eventually happen and limits how far it can spread. We segment your network so that a compromised device in one department cannot reach servers or systems it has no business touching, and we apply Zero-Trust access controls that verify every user and device on every request rather than trusting anything simply because it is inside the perimeter. Combined with multi-factor authentication and least-privilege permissions, this turns what could be a company-wide ransomware event into a single contained machine — the difference between a quiet Tuesday and a week of downtime.</p>',
    },
  ],
};

const faqItems = [
  {
    question: "Is Microsoft Defender for Office 365 enough, or do we need a third-party solution?",
    answer: "Defender P2 is strong and tightly integrated with M365. For companies with high-value targets (CFOs, legal teams), a third-party like Proofpoint or Mimecast adds a second detonation layer and more granular policies.",
  },
  {
    question: "How do we stop staff from clicking phishing links on personal devices?",
    answer: "Mobile Device Management (MDM) with Conditional Access ensures personal devices meet minimum security requirements before accessing corporate email, and DNS filtering can block known malicious domains even on personal networks.",
  },
  {
    question: "What is DMARC and why does it matter?",
    answer: "DMARC is a DNS record that tells receiving mail servers what to do with emails that fail SPF or DKIM checks. Without it, spoofed emails from your domain are delivered without warning. With p=reject, they are blocked entirely.",
  },
  {
    question: "What is the difference between antivirus and EDR?",
    answer: "Antivirus matches files against a database of known threats, so it misses new or fileless malware. EDR (Endpoint Detection and Response) watches how software behaves — for example a document launching PowerShell or mass-encrypting files — and can automatically isolate the device the moment it detects an attack, even one never seen before.",
  },
  {
    question: "Why do you need network segmentation if you already have email and endpoint protection?",
    answer: "No single layer is perfect. Segmentation and Zero-Trust access assume a breach will eventually get through and limit the damage — a compromised laptop can only reach the systems it genuinely needs, so an incident stays contained to one machine instead of spreading across the whole company.",
  },
];

export default function CybersecurityprotectionPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-01-30', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cybersecurity', href: '/services/cybersecurity' }, { label: 'Cybersecurity Protection' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>

        <FAQAccordion
          title="Frequently Asked Questions"
          items={faqItems}
        />
      </main>
      <Footer />
    </>
  );
}
