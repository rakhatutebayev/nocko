import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Constant Endpoint Security | NOCKO UAE',
  description: 'NOCKO deploys Managed Detection and Response (MDR) combined with mobile device management across every endpoint in your UAE business — protecting laptops and smartphones whether they connect from a Dubai office or a remote location abroad.',
  alternates: {
    canonical: '/articles/managed-it-monitoring',
    languages: {
      'en-AE': '/articles/managed-it-monitoring',
      'ru-RU': '/ru/articles/managed-it-monitoring',
    },
  },
};

const articleData = {
  hero: {
    title: 'Constant Endpoint Security',
    subtitle: 'Protecting the hybrid workforce across the UAE',
    description: 'Deploying EDR and MDM dynamically.',
  },
  intro: 'We treat every laptop and smartphone as a border gate. We deploy Managed Detection and Response (MDR) combined with our unified Endpoint Management (MDM) so that your device is protected whether it connects from a café in Dubai Marina or an office in Business Bay.',
  blocks: [
    {
      title: 'Endpoint Detection and Response (EDR) Deployment',
      text: '<p>We deploy Microsoft Defender for Endpoint or CrowdStrike Falcon across all managed endpoints — Windows laptops, macOS devices, and Windows servers. EDR goes beyond traditional antivirus by monitoring process behaviour in real time: if an Office macro spawns a PowerShell process that makes outbound connections to an unknown IP, EDR identifies this as a suspicious execution chain and blocks it, even if no known malware signature matches.</p><p>EDR telemetry is aggregated in our SIEM, allowing cross-device correlation — an attacker who compromises one laptop and attempts to pivot to a file server generates events on both endpoints that individually look benign, but in correlation reveal a lateral movement pattern.</p>',
      list: [
        'Behavioural EDR replacing signature-only antivirus',
        'Cross-device telemetry correlation in centralised SIEM',
        'Automatic isolation of compromised endpoints from the network',
        'Threat intelligence integration: MITRE ATT&CK framework mapping',
        'Monthly EDR health report: coverage percentage and threat detections',
      ],
    },
    {
      title: 'Mobile Device Management for Hybrid Workforces',
      text: '<p>Smartphones and personal laptops used for corporate email and Teams calls are the largest unmanaged attack surface in most UAE businesses. We enrol all corporate-issued devices in Microsoft Intune or Jamf, enforcing device PIN/biometric lock, full disk encryption, remote wipe capability, and blocking access to corporate applications from non-compliant devices.</p><p>For BYOD (bring your own device) scenarios common in Dubai free zones, we deploy Intune App Protection Policies that enforce corporate data isolation within managed apps — preventing copy-paste of corporate email content into personal apps — without enrolling the personal device itself or accessing personal data.</p>',
    },
    {
      title: 'DNS Filtering and Web Security',
      text: '<p>We deploy Cisco Umbrella or Cloudflare Gateway as DNS-layer security for all managed endpoints, blocking connections to known malicious domains, phishing sites, and command-and-control infrastructure before a TCP connection is ever established. This protects devices on home networks and public Wi-Fi — not just when connected to the office network — covering the hybrid workforce that is standard across UAE businesses.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Does EDR replace our antivirus, or do we need both?</strong><br/>A: EDR includes antivirus functionality and replaces it. Running both simultaneously creates conflicts and performance overhead. We migrate clients from legacy AV to EDR as part of the managed service onboarding.',
        '<strong>Q: What happens when a managed device is lost or stolen?</strong><br/>A: We remote-wipe the device via Intune within minutes of receiving notification. Full disk encryption (BitLocker on Windows, FileVault on Mac) ensures data is unreadable even if the device is accessed before the wipe completes.',
        '<strong>Q: Can we enforce corporate security policies on personal devices without reading personal data?</strong><br/>A: Yes — Intune App Protection Policies apply to the corporate apps only (Outlook, Teams, OneDrive) and do not give us visibility into personal apps, photos, or messages on the personal device.',
        '<strong>Q: How does DNS filtering work when staff travel outside the UAE?</strong><br/>A: Cisco Umbrella and Cloudflare Gateway route DNS queries through the filtering platform regardless of the device location — the protection follows the endpoint globally, not just within the UAE network perimeter.',
      ],
    },
  ],
};

export default function ManageditmonitoringPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-06-17', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
