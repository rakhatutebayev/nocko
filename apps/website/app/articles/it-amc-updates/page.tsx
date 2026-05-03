import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Automated Vulnerability Patching | NOCKO UAE',
  description: 'NOCKO manages centralised patch deployment for UAE businesses via WSUS or Intune — testing updates on staging machines first and deploying to production over weekends, ensuring servers and workstations are fully patched before Monday without any staff downtime.',
  alternates: {
    canonical: '/articles/it-amc-updates',
    languages: {
      'en-AE': '/articles/it-amc-updates',
      'ru-RU': '/ru/articles/it-amc-updates',
    },
  },
};

const articleData = {
  hero: {
    title: 'Automated Vulnerability Patching',
    subtitle: 'Ensuring your OS and Applications are legally compliant',
    description: 'We handle weekend patching rounds for zero production downtime.',
  },
  intro: 'Unpatched servers are the number one vector for ransomware ingress in the GCC. Our centralized NOC manages your complete patch deployment over the weekend. You come in on Monday fully secured with zero downtime experienced by your staff.',
  blocks: [
    {
      title: 'Centralised Patch Management Process',
      text: '<p>We deploy Windows Server Update Services (WSUS) or Microsoft Intune for organisations using M365, creating patch approval workflows that test updates on a ring of 3–5 staging machines before pushing to the full fleet. Critical security patches (CVSS score 9.0+) are expedited through the approval ring within 48 hours. Non-critical updates deploy on the monthly Tuesday patch cycle.</p><p>Third-party applications — Adobe Acrobat, Chrome, Java, VLC — are patched via Chocolatey or Patch My PC, tools that automate what IT teams otherwise skip manually. In our experience, unpatched third-party applications account for over 60% of exploitable vulnerabilities in UAE SME environments.</p>',
      list: [
        'Staged ring deployment: test machines before production',
        'Critical CVE patches expedited within 48 hours of release',
        'Third-party application patching via automated package managers',
        'Monthly patch compliance reports for AMC documentation',
        'Pre-patch snapshot of critical servers for rapid rollback',
      ],
    },
    {
      title: 'Weekend Maintenance Windows',
      text: '<p>Server reboots after patching are scheduled during Thursday night maintenance windows (post-market close for GCC businesses) or Friday morning when office activity is lowest. We stage the reboot sequence — domain controllers first, then file servers, then application servers — to ensure directory services are available before dependent services restart.</p><p>For 24/7 operations (hospitals, logistics, financial trading), we coordinate rolling reboots that maintain service availability throughout the maintenance window, rebooting one node at a time in clustered environments.</p>',
    },
    {
      title: 'Vulnerability Scanning and Remediation Tracking',
      text: '<p>Monthly vulnerability scans using Tenable Nessus or Qualys identify unpatched software, weak configurations, and default credentials across your entire network. Findings are tracked in our ticketing system with remediation deadlines by severity — critical findings must be resolved within 7 days, high within 30 days. For NESA-regulated entities, the monthly scan report forms part of your continuous compliance evidence.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: What happens if a patch breaks a business-critical application?</strong><br/>A: We take pre-patch snapshots of servers and test on ring-0 machines first. If a patch causes issues on test machines, we exclude it from the production deployment ring until the vendor releases a fix.',
        '<strong>Q: How do you handle servers running legacy software that cannot be patched?</strong><br/>A: We implement compensating controls — network isolation, additional monitoring, and application whitelisting — to reduce exposure for systems that cannot be patched for business reasons.',
        '<strong>Q: Do you patch network devices (firewalls, switches) as well?</strong><br/>A: Yes — firmware updates for FortiGate, Cisco, HP ProCurve, and other network devices are included in our AMC patch management scope.',
        '<strong>Q: How quickly are critical zero-day vulnerabilities patched?</strong><br/>A: For critical zero-days (e.g. ProxyShell, Log4Shell type vulnerabilities), we treat them as emergency changes and deploy patches or mitigations within 24–48 hours of vendor release.',
      ],
    },
  ],
};

export default function ItamcupdatesPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-04-07', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT AMC' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
