import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Zero Trust Network Enforcement | NOCKO UAE',
  description: 'NOCKO implements Zero Trust Network Access (ZTNA) for UAE businesses — replacing VPN-based perimeters with continuous identity verification, device health checks, and microsegmentation that blocks lateral movement even with compromised credentials.',
  alternates: {
    canonical: '/articles/cybersecurity-data-protection',
    languages: {
      'en-AE': '/articles/cybersecurity-data-protection',
      'ru-RU': '/ru/articles/cybersecurity-data-protection',
    },
  },
};

const articleData = {
  hero: {
    title: 'Zero Trust Network Enforcement',
    subtitle: 'Never trust, always mathematically verify',
    description: 'Eliminate inherent network trust. Every access vector is strictly authenticated.',
  },
  intro: 'The traditional "castle-and-moat" security model is obsolete since compromised credentials let hackers bypass the firewall entirely. We implement absolute Zero-Trust Network Access (ZTNA). Every request—whether the CEO inside the Dubai office or a manager traveling abroad—is continuously authenticated, authorized, and vetted for anomalies.',
  blocks: [
    {
      title: 'Identity Verification and Conditional Access',
      text: '<p>In a Zero Trust architecture, granting network access is not enough — every request must prove identity, device health, and context. We implement Microsoft Entra ID Conditional Access policies that evaluate six signals before granting access: user identity, device compliance state, location, application sensitivity, session risk score, and real-time sign-in risk calculated by Microsoft\'s ML models.</p><p>For high-sensitivity applications such as financial ERP or HR systems, we require hardware FIDO2 security keys rather than SMS-based MFA, which is trivially bypassed by SIM-swap attacks — a growing threat in the UAE.</p>',
      list: [
        'Entra ID Conditional Access with risk-based evaluation',
        'FIDO2 hardware key enforcement for high-sensitivity systems',
        'Device compliance checks before granting any application access',
        'Continuous access evaluation — sessions revoked within 60 seconds of risk change',
        'Guest and contractor access scoped to specific applications only',
      ],
    },
    {
      title: 'Microsegmentation and Lateral Movement Prevention',
      text: '<p>Even with strong perimeter controls, a compromised endpoint inside the network can pivot laterally to reach sensitive servers. We implement network microsegmentation using Fortinet FortiNAC or Cisco ISE, placing every device into a dynamically assigned VLAN based on its identity and health state. An unpatched laptop automatically moves to a quarantine VLAN with internet-only access until it is remediated.</p><p>East-west firewall policies between segments ensure that even a fully compromised endpoint in the sales VLAN cannot initiate connections to the finance or database segments — limiting blast radius to a single segment.</p>',
    },
    {
      title: 'Remote Access Without VPN',
      text: '<p>Traditional VPN gives remote users the same level of access as if they were physically in the office — which means a stolen VPN credential provides unrestricted internal network access. We replace VPN with Zscaler Private Access or Cloudflare Access, which provide application-level access to specific internal apps based on identity, without exposing the entire internal network to the remote device.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Does Zero Trust work for small businesses or only enterprises?</strong><br/>A: Core Zero Trust principles — MFA, conditional access, least-privilege — are applicable and affordable for businesses of all sizes. The complexity and tooling scales up for larger enterprises.',
        '<strong>Q: Will Zero Trust slow down our staff accessing applications?</strong><br/>A: Properly configured, Zero Trust is transparent to users on trusted devices in normal conditions. Friction only appears when anomalies are detected, such as login from an unfamiliar location.',
        '<strong>Q: Can Zero Trust help with remote workers connecting from outside the UAE?</strong><br/>A: Yes — location-based policies can permit access from abroad after MFA, while blocking access from untrusted devices regardless of location.',
        '<strong>Q: How long does a full Zero Trust implementation take?</strong><br/>A: A phased implementation typically takes 3–6 months. We start with MFA and conditional access (highest impact, lowest disruption) and progressively add microsegmentation and ZTNA.',
      ],
    },
  ],
};

export default function CybersecuritydataprotectionPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-09-16', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
