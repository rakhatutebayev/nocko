import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Advanced Cybersecurity Hardening | NOCKO UAE',
  description: 'NOCKO hardens managed IT networks in the UAE with MFA enforcement on all cloud applications, Active Directory audit policies, SIEM log monitoring, and phishing-resistant email security layered directly into the managed service package.',
  alternates: {
    canonical: '/articles/managed-it-security',
    languages: {
      'en-AE': '/articles/managed-it-security',
      'ru-RU': '/ru/articles/managed-it-security',
    },
  },
};

const articleData = {
  hero: {
    title: 'Advanced Cybersecurity Hardening',
    subtitle: 'Elevating the security posture of your business',
    description: 'Integrating SIEM and AI monitoring directly into your Managed IT stack.',
  },
  intro: 'A managed network is only as good as its security wrapper. We constantly harden your directory structures, enforce Multi-Factor Authentication (MFA) aggressively, and audit logs to prevent sophisticated spear-phishing campaigns against your critical UAE operations.',
  blocks: [
    {
      title: 'Identity and Directory Hardening',
      text: '<p>Active Directory and Entra ID are the backbone of your organisation — compromised directory credentials are the primary means by which ransomware groups move laterally and achieve domain administrator access. We enforce a tiered administration model: privileged accounts used only for administrative tasks, never for email or web browsing. Legacy authentication protocols (NTLM, basic auth, SMTP relay without authentication) are disabled because they bypass MFA.</p><p>Conditional Access policies require MFA for all cloud application logins, and Entra ID Identity Protection flags risky sign-ins in real time. Password complexity policies enforce 12-character minimums with breach password checking against the HaveIBeenPwned database through Entra ID Smart Lockout.</p>',
      list: [
        'Tiered administrator model — privileged accounts isolated from daily use accounts',
        'Legacy authentication protocol blocking (NTLM, basic auth)',
        'MFA enforcement on all M365 and SaaS applications via Conditional Access',
        'Breach password monitoring and Entra ID Smart Lockout',
        'Quarterly Active Directory permissions audit and stale account cleanup',
      ],
    },
    {
      title: 'Endpoint Detection and Response',
      text: '<p>Standard antivirus that relies on signature databases misses the fileless malware and living-off-the-land techniques used by modern threat actors. We deploy Microsoft Defender for Endpoint (MDE) or CrowdStrike Falcon across all managed endpoints, providing behavioural detection that identifies suspicious process chains even when no known malware signature is present.</p><p>EDR telemetry feeds into our SIEM for correlation with network events — a lateral movement attempt that starts on a single endpoint and reaches a file server is detected and responded to before it reaches the domain controller.</p>',
    },
    {
      title: 'Continuous Security Configuration Review',
      text: '<p>Security configurations drift as staff add exceptions, install new software, or modify policies. We run monthly Secure Score assessments in Microsoft Defender and Entra ID, reviewing the current configuration against the Microsoft recommended baseline and the CIS Benchmark controls applicable to your industry. Regressions trigger immediate remediation rather than waiting for an incident to reveal them.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Is Microsoft Defender for Endpoint enough or do we need a separate EDR?</strong><br/>A: MDE is a fully capable EDR platform and is included with Microsoft 365 Business Premium and E3/E5 licences. For organisations without M365, we deploy CrowdStrike or SentinelOne as standalone solutions.',
        '<strong>Q: How do we enforce MFA for staff who refuse to use it?</strong><br/>A: Conditional Access policies make MFA technically mandatory — users who do not enrol cannot access M365 applications. We manage the rollout communication and provide support during the transition period.',
        '<strong>Q: What is the most common security gap you find in UAE managed IT environments?</strong><br/>A: Legacy authentication protocols and overly permissive Active Directory group membership. Both are easy to fix but require careful testing to avoid breaking dependent applications.',
        '<strong>Q: Does the security hardening require any downtime?</strong><br/>A: Most hardening steps are zero-downtime configuration changes. Blocking legacy authentication requires a pilot phase to identify any applications using it, which we run over 2–4 weeks before enforcement.',
      ],
    },
  ],
};

export default function ManageditsecurityPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-08-25', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
