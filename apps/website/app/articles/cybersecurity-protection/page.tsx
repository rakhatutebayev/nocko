import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Advanced Email Sandboxing | NOCKO UAE',
  description: 'NOCKO deploys advanced email sandboxing for UAE businesses — detonating suspicious PDF attachments and Excel macros in isolated cloud VMs, blocking weaponised emails before they reach the inbox and eliminating the primary ransomware delivery vector.',
  alternates: {
    canonical: '/articles/cybersecurity-protection',
    languages: {
      'en-AE': '/articles/cybersecurity-protection',
      'ru-RU': '/ru/articles/cybersecurity-protection',
    },
  },
};

const articleData = {
  hero: {
    title: 'Advanced Email Sandboxing',
    subtitle: 'Stopping 99.9% of spear-phishing before it hits the inbox',
    description: 'We execute suspicious attachments in isolated cloud hardware.',
  },
  intro: 'The vast majority of breaches start with a single deceptive email. We implement rigorous cloud sandboxing. Suspicious PDF attachments or weaponized Excel macros are detonated safely inside an isolated cloud virtual machine analyzing their behavioral impact before the email is legally permitted to reach your staff.',
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
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Is Microsoft Defender for Office 365 enough, or do we need a third-party solution?</strong><br/>A: Defender P2 is strong and tightly integrated with M365. For companies with high-value targets (CFOs, legal teams), a third-party like Proofpoint or Mimecast adds a second detonation layer and more granular policies.',
        '<strong>Q: How do we stop staff from clicking phishing links on personal devices?</strong><br/>A: Mobile Device Management (MDM) with Conditional Access ensures personal devices meet minimum security requirements before accessing corporate email, and DNS filtering can block known malicious domains even on personal networks.',
        '<strong>Q: What is DMARC and why does it matter?</strong><br/>A: DMARC is a DNS record that tells receiving mail servers what to do with emails that fail SPF or DKIM checks. Without it, spoofed emails from your domain are delivered without warning. With p=reject, they are blocked entirely.',
        '<strong>Q: Can you help us after a BEC attack where money has already been sent?</strong><br/>A: We can assist with technical forensics to document the attack for law enforcement and your bank. The UAE Central Bank has a financial crime rapid response process — time is critical, as wire reversals are only possible within hours.',
      ],
    },
  ],
};

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
