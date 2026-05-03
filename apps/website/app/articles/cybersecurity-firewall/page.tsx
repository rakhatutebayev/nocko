import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Next-Generation Edge Protection | NOCKO UAE',
  description: 'NOCKO deploys Fortinet FortiGate and Palo Alto NGFW appliances in Dubai offices, enabling SSL inspection, application-layer filtering, and IPS signatures that block zero-day threats before they reach the internal network.',
  alternates: {
    canonical: '/articles/cybersecurity-firewall',
    languages: {
      'en-AE': '/articles/cybersecurity-firewall',
      'ru-RU': '/ru/articles/cybersecurity-firewall',
    },
  },
};

const articleData = {
  hero: {
    title: 'Next-Generation Edge Protection',
    subtitle: 'Deploying advanced UTM and Layer 7 Firewalling',
    description: 'Deep Packet Inspection stops malware before it enters the routing table.',
  },
  intro: 'A standard firewall only blocks IP addresses. The modern threat landscape demands Next-Generation Firewalls (NGFW) with Unified Threat Management (UTM). We integrate Fortinet and Palo Alto appliances that deploy deep packet inspection, actively decrypting and scanning web traffic for zero-day signatures at hardware speed.',
  blocks: [
    {
      title: 'NGFW Deployment and SSL Inspection',
      text: '<p>We deploy Fortinet FortiGate or Palo Alto Networks PA-Series appliances sized to your throughput requirements. SSL/TLS inspection is configured to decrypt and scan HTTPS traffic for malware signatures — critical because over 80% of modern malware uses encrypted channels to bypass legacy firewalls. We maintain a certificate exception list for banking and government portals that break under inspection to avoid false-positive disruptions.</p><p>Application identification profiles (App-ID on Palo Alto, Application Control on FortiGate) allow us to block specific applications like BitTorrent or non-business social media at Layer 7 without relying on port-based rules that are trivially bypassed by tunnelling.</p>',
      list: [
        'SSL/TLS inspection with managed exception lists',
        'Layer 7 application control and URL category filtering',
        'IPS signatures updated in real-time from FortiGuard or Palo Alto Threat Intel',
        'Geo-blocking inbound connections from high-risk regions',
        'SD-WAN integration for multi-ISP failover on Etisalat and Du circuits',
      ],
    },
    {
      title: 'Network Segmentation and VLAN Design',
      text: '<p>A flat network where printers, servers, and user workstations share the same broadcast domain is a ransomware propagation nightmare — we have seen attacks spread to 200 machines in under 4 minutes in such environments. We redesign your LAN using VLANs with inter-VLAN firewall policies, isolating finance, operations, guest Wi-Fi, and IoT devices into separate segments with enforced east-west inspection.</p><p>For DIFC and ADGM financial entities, this segmentation is not just best practice — it is a direct requirement under DFSA and FSRA technology governance frameworks.</p>',
    },
    {
      title: 'Firewall Policy Review and Hardening',
      text: '<p>Legacy firewalls accumulate hundreds of stale rules over years of ad-hoc changes. We conduct a firewall audit using FortiAnalyzer or Palo Alto Panorama, identifying unused rules, overly permissive ANY-ANY entries, and shadow rules that are never reached. Rules are pruned and documented in a change-controlled policy baseline, giving your compliance team an auditable security posture.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Which firewall brand do you recommend for UAE businesses?</strong><br/>A: For most SME and mid-market companies we recommend Fortinet FortiGate for its strong price-performance ratio. For enterprises requiring advanced threat intelligence integration, Palo Alto is the preferred platform.',
        '<strong>Q: Does SSL inspection cause performance problems?</strong><br/>A: Modern NGFWs have dedicated SSL inspection hardware. For typical office throughput (under 1Gbps), the latency overhead is under 2ms — imperceptible to users.',
        '<strong>Q: How often do firewall rules need to be reviewed?</strong><br/>A: We recommend quarterly reviews for growing companies. Rules for decommissioned servers or ex-employee VPN accounts should be removed immediately and are caught by our monthly monitoring.',
        '<strong>Q: Can you manage our firewall remotely from your NOC?</strong><br/>A: Yes — we manage firewalls remotely via FortiManager or Panorama with full change logging. Emergency rule changes can be applied within 15 minutes of a reported incident.',
      ],
    },
  ],
};

export default function CybersecurityfirewallPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-02-27', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
