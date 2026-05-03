import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Forensic IT Audits & Technical Assessments UAE | NOCKO',
  description: 'Uncover hidden tech debt and security vulnerabilities with NOCKO\'s RAG-status forensic IT audits for Dubai and UAE enterprises.',
  alternates: {
    canonical: '/articles/it-consulting-assessment',
    languages: {
      'en-AE': '/articles/it-consulting-assessment',
      'ru-RU': '/ru/articles/it-consulting-assessment',
    },
  },
};

const articleData = {
  hero: {
    title: 'Forensic IT Audits & RAG Health Checks',
    subtitle: 'Exposing Tech Debt, Security Gaps, and Licensing Waste',
    description: 'A comprehensive technical x-ray of your entire IT infrastructure. Discover what runs beneath the surface of your business.',
  },
  intro: `Most Dubai SMEs have never formally mapped their IT infrastructure. They know roughly what they have — some switches, a few servers, a Microsoft 365 subscription — but they have no asset register, no risk score, and no documented baseline. This gap is not a minor administrative oversight. It means the business is making infrastructure decisions without knowing what it actually owns, what is at risk, and what is costing money without delivering value. NOCKO's structured IT assessment closes that gap in 5–10 business days, producing a documented baseline, a Red/Amber/Green risk score across every layer, and a prioritised fix list with AED cost estimates attached to every action.`,
  blocks: [
    {
      title: 'Why Dubai SMEs Need a Structured IT Assessment',
      text: `<p>An IT assessment is not a consultant's opinion about your IT. It is a documented, evidence-based inventory of exactly what you have, what state it is in, and what it will cost to fix. For a 50-seat Dubai business, the deliverables are concrete: a network topology map showing every switch, server, and firewall; a software licence audit against actual usage from Microsoft Entra ID logs; a security posture score based on CIS Controls benchmarks; and a hardware age analysis flagging assets beyond end-of-life.</p>
<p>The risk scoring uses a standard Red/Amber/Green (RAG) classification. Red items are business continuity threats requiring immediate action — an unpatched RDP server exposed to the internet, a failing UPS protecting production servers, a missing MFA policy on admin accounts. Amber items are medium-term risks that need a remediation plan. Green items confirm what is working and should be maintained. This RAG dashboard replaces subjective IT conversations with a board-level risk document that non-technical executives can act on.</p>
<p>For a 50-seat Dubai business, the full assessment — including on-site infrastructure inspection, RMM agent deployment for remote telemetry, licence audit, and security review — takes 5–10 business days. You receive a written report with findings, RAG scoring, and a prioritised remediation roadmap within 2 weeks of kickoff.</p>`,
    },
    {
      title: 'What NOCKO\'s IT Assessment Covers',
      text: `<p>The assessment is structured across four layers, each producing measurable outputs:</p>`,
      list: [
        '<strong>Infrastructure layer:</strong> Physical inspection of switches (Cisco Catalyst, HP Aruba), servers, UPS capacity and battery health, and cabling quality. We identify hardware beyond manufacturer end-of-life and capacity bottlenecks before they cause downtime.',
        '<strong>Security layer:</strong> Firewall configuration review (Fortinet, Check Point, Cisco ASA), patch level audit against CVE databases, EDR coverage status (CrowdStrike, SentinelOne, or legacy AV still in place), and MFA adoption across Microsoft Entra ID.',
        '<strong>Compliance layer:</strong> For UAE-regulated businesses, we map findings against NESA IA controls and DFSA IT Risk Management requirements for DIFC-licensed firms. Our reports are formatted for regulatory submission and include evidence packs for auditors.',
        '<strong>Cloud layer:</strong> Microsoft 365 licence utilisation review against actual Entra ID activity logs, Azure compute sizing vs. actual load, and AWS cost vs. usage where applicable. Most Dubai businesses are overpaying by 20–40% on M365 licensing alone.',
      ],
    },
    {
      title: 'From Assessment to Roadmap: The 30/90/180 Day Plan',
      text: `<p>An assessment that does not lead to action is wasted budget. Every NOCKO IT assessment concludes with a phased remediation roadmap broken into three horizons, each with AED cost estimates and a business justification for every initiative:</p>`,
      list: [
        '<strong>30 days (Critical fixes):</strong> Unpatched systems with publicly known exploits, open firewall rules, missing MFA on admin and privileged accounts, failing backup jobs. These are Red items that represent active business risk. Most can be resolved within a standard managed IT engagement at no additional project cost.',
        '<strong>90 days (Medium-term improvements):</strong> Infrastructure upgrades for hardware approaching end-of-life, cloud cost optimisation (Azure Reserved Instances, M365 licence rightsizing), and backup policy formalisation with RTO/RPO targets documented.',
        '<strong>180 days (Strategic initiatives):</strong> Vendor consolidation to reduce the number of separate security tools, IT governance framework documentation, and BCDR testing schedule. These initiatives typically deliver AED 50,000–120,000 in annual savings for a 100-seat business.',
      ],
    },
    {
      title: 'Frequently Asked Questions',
      text: `<dl>
<dt><strong>How long does an IT assessment take?</strong></dt>
<dd>For a 50–100 seat Dubai business, a full IT assessment takes 5–10 business days. This includes on-site infrastructure inspection, remote tooling deployment via RMM agent, licence audit against Microsoft Entra ID logs, and security review. You receive a written report with RAG scoring and a prioritised remediation plan within 2 weeks of kickoff.</dd>

<dt><strong>Does NOCKO provide IT assessments for DIFC or ADGM firms?</strong></dt>
<dd>Yes. We conduct IT assessments specifically mapped to DFSA IT Risk Management requirements for DIFC-licensed firms and FSRA Technology Risk Guidelines for ADGM entities. Our reports are formatted for regulatory submission and include evidence packs for auditors. These are not generic assessments with compliance language bolted on — the framework mapping is built into the assessment methodology.</dd>

<dt><strong>What does an IT assessment cost?</strong></dt>
<dd>IT assessments for Dubai SMEs with 50–150 seats typically cost AED 8,000–18,000 as a one-time engagement. This fee is frequently recovered within the first month of implementing the identified savings — particularly through M365 licence consolidation and Azure rightsizing, where most Dubai businesses find AED 30,000–80,000 in annual waste on the first audit.</dd>

<dt><strong>What happens if critical vulnerabilities are found during the assessment?</strong></dt>
<dd>We triage findings in real time. If we discover an actively exploited vulnerability — for example, an unpatched RDP server exposed directly to the internet — we notify you the same day and can begin emergency remediation immediately. P1 emergency response is handled as a separate engagement from the assessment scope, so the assessment does not pause while the critical issue is resolved.</dd>
</dl>`,
    },
  ],
};

export default function ITConsultingAssessmentPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-03-11', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Consulting', href: '/services/it-consulting' }, { label: 'Forensic Audits' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
