import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Ransomware Extrication & Incident Response | NOCKO UAE',
  description: 'NOCKO responds to active ransomware attacks in UAE businesses — isolating infected VLANs within minutes, hunting persistence mechanisms in Active Directory, and restoring operations from immutable backups with minimal data loss.',
  alternates: {
    canonical: '/articles/cybersecurity-incident-response',
    languages: {
      'en-AE': '/articles/cybersecurity-incident-response',
      'ru-RU': '/ru/articles/cybersecurity-incident-response',
    },
  },
};

const articleData = {
  hero: {
    title: 'Ransomware Extrication & Incident Response',
    subtitle: 'Stopping the bleeding during an active attack',
    description: 'Our emergency SWAT teams immediately freeze active malware ingress.',
  },
  intro: 'If your desktops suddenly encrypt and demand bitcoin, every second costs your company deeply. Our Incident Response (IR) protocols are military-grade. We instantly isolate infected VLANs, hunt down the active adversarial persistence mechanisms within Active Directory, and begin immutable disaster recovery restorations.',
  blocks: [
    {
      title: 'Containment Within the First Hour',
      text: '<p>The first priority during an active ransomware attack is stopping the spread. We remotely disconnect infected VLANs at the managed switch level within minutes of detection — isolating the affected segment without requiring physical access to your office. Firewall policies are updated to block all outbound C2 (command and control) communication from compromised IP ranges, preventing further encryption commands from reaching already-infected endpoints.</p><p>Simultaneously, our engineers pull Active Directory logs to identify the compromised account credential used for lateral movement, lock it, and audit all privileged group memberships for recently added accounts — a common persistence technique used by ransomware groups operating in the Middle East.</p>',
      list: [
        'VLAN isolation at managed switch level within 15 minutes',
        'Outbound C2 blocking at perimeter firewall',
        'Active Directory credential lockdown and privilege audit',
        'Memory forensics on key servers to identify persistence mechanisms',
        'Communication protocol for notifying staff and stakeholders during incident',
      ],
    },
    {
      title: 'Forensic Investigation and Root Cause Analysis',
      text: '<p>After containment, we conduct forensic analysis to determine the initial access vector — typically a phishing email, unpatched vulnerability, or RDP brute-force. We use Velociraptor or similar endpoint forensics tools to collect process execution history, network connection logs, and file system change records from affected machines.</p><p>The root cause report documents the full attack timeline, the specific vulnerabilities exploited, and the gap in your security controls that allowed the attack to succeed. This documentation is required for UAE cybercrime reporting under the UAE Cybercrime Law (Federal Decree-Law No. 34 of 2021) if the incident involves data theft.</p>',
    },
    {
      title: 'Recovery and Hardening',
      text: '<p>We restore operations from the most recent clean backup — ideally an immutable snapshot from before the attack window. Systems are rebuilt from clean images rather than restored in-place where possible, eliminating any risk of missed persistence. After recovery, we implement the specific hardening measures that would have prevented the attack: MFA on RDP, patch deployment, email sandboxing, or EDR deployment — whichever was the missing control.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Should we pay the ransomware demand?</strong><br/>A: Generally no — payment does not guarantee decryption, funds criminal organisations, and may violate UAE financial regulations on payments to sanctioned entities. Recovery from clean backups is always the preferred path.',
        '<strong>Q: How quickly can you restore operations from backups?</strong><br/>A: This depends entirely on your backup architecture. With immutable cloud backups and a tested recovery runbook, Tier-1 systems can be restored in 2–8 hours. Without tested backups, recovery can take days or weeks.',
        '<strong>Q: Do we have to report a ransomware attack to UAE authorities?</strong><br/>A: If customer or employee personal data was accessed or exfiltrated, reporting to the UAE Data Office under the PDPL may be required. We advise on the regulatory reporting obligation as part of our incident response.',
        '<strong>Q: Can you help us even if we do not have an AMC or managed IT contract?</strong><br/>A: Yes — we take emergency incident response cases. Hourly rates apply without a retainer, but we prioritise getting your business operational regardless.',
      ],
    },
  ],
};

export default function CybersecurityincidentresponsePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-03-22', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
