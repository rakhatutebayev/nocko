import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Multi-Year IT Strategic Roadmaps UAE | NOCKO',
  description: 'Align your digital transformation with revenue targets through NOCKO\'s structured, 3-to-5-year actionable IT roadmaps.',
  alternates: {
    canonical: '/articles/it-consulting-roadmap',
    languages: {
      'en-AE': '/articles/it-consulting-roadmap',
      'ru-RU': '/ru/articles/it-consulting-roadmap',
    },
  },
};

const articleData = {
  hero: {
    title: 'Multi-Year Actionable IT Roadmaps',
    subtitle: 'Structuring Digital Transformation with Mathematical Precision',
    description: 'Transform chaos into clarity with a phased, board-approved technology roadmap aligned directly to your business goals.',
  },
  intro: `An IT roadmap is not a wish list. It is a phased plan with specific dates, AED budgets per quarter, measurable outcomes, and named owners for every initiative. Without a roadmap, Dubai businesses react to IT failures instead of preventing them — replacing hardware only after it fails, renewing software contracts at rack rate because nobody tracked the expiry date, and making infrastructure decisions based on whoever raised the urgent request most recently. A properly built roadmap maps every infrastructure component to its end-of-life date, every software contract to its renewal window, and every compliance requirement to its regulatory deadline. NOCKO delivers a complete IT roadmap in 3 weeks from kickoff.`,
  blocks: [
    {
      title: 'What an IT Roadmap Actually Delivers',
      text: `<p>The value of an IT roadmap is not the document itself — it is the discipline it imposes on IT decision-making. With a roadmap, every infrastructure purchase is justified by a documented business requirement rather than a reactive response to a failure. Every vendor renewal is negotiated from a position of preparation rather than pressure. Every compliance deadline is visible months in advance rather than discovered during an audit.</p>
<p>For a Dubai business, this translates into concrete financial outcomes: avoided emergency hardware replacements (AED 15,000–40,000 per event), proactive M365 licence rightsizing before auto-renewal adds unnecessary seats, and cloud cost optimisation before Azure bills compound over another 12 months. The roadmap does not just plan spending — it prevents waste.</p>
<p>The deliverable is a board-ready document: an infrastructure upgrade schedule with hardware end-of-life dates, a software contract renewal calendar, security improvement milestones (MFA deployment, EDR rollout, SIEM implementation), compliance deadlines for NESA, DFSA, or HAAD where applicable, and an AED budget model broken down per quarter across the planning horizon.</p>`,
    },
    {
      title: 'The NOCKO Roadmap Methodology',
      text: `<p>NOCKO's roadmap process runs from kickoff to delivered document in 3 weeks, structured across five phases:</p>`,
      list: [
        '<strong>Phase 1 — Current-state documentation:</strong> Asset register, network topology diagram, software contract inventory, and security baseline. We use RMM tooling to gather telemetry at scale rather than relying on self-reported information from IT staff.',
        '<strong>Phase 2 — Gap analysis against business goals:</strong> What IT does this business need in 12, 24, and 36 months? New offices? Regulatory certification? Headcount doubling? Each business objective maps to specific IT requirements.',
        '<strong>Phase 3 — Initiative prioritisation by ROI and risk:</strong> Every identified initiative is scored on two axes: financial return (AED savings or cost avoidance) and risk reduction (probability of a costly incident without this investment).',
        '<strong>Phase 4 — AED budget modelling per quarter:</strong> Each initiative is assigned a quarter, an AED cost estimate, and a source (CAPEX or OPEX). The full 36-month model is presented to the CFO and board as a technology budget.',
        '<strong>Phase 5 — Quarterly vCIO review cadence:</strong> The roadmap is a living document. NOCKO conducts quarterly reviews to update the plan against actual business changes, completed initiatives, and new requirements.',
      ],
    },
    {
      title: 'Roadmap Priorities for Dubai Businesses in 2025–2026',
      text: `<p>Across current NOCKO client roadmaps, four themes dominate the near-term planning horizon for Dubai SMEs:</p>`,
      list: [
        '<strong>Microsoft 365 consolidation:</strong> Moving from hybrid Exchange to full cloud M365 eliminates on-premise server costs and reduces administrative overhead. For a 50-seat firm, this typically saves AED 8,000–15,000 annually in server licensing and maintenance, while improving security posture through Microsoft Defender.',
        '<strong>EDR deployment:</strong> Replacing legacy antivirus (Symantec, McAfee, Kaspersky) with modern endpoint detection and response platforms — CrowdStrike Falcon or SentinelOne — before NESA mandates it. Legacy AV misses 30–40% of modern threat techniques that EDR detects and blocks automatically.',
        '<strong>Azure and AWS rightsizing:</strong> Most Dubai firms running cloud workloads are 30–50% over-provisioned on compute. Reserved Instances, auto-shutdown policies for development environments, and right-sized VM SKUs typically reduce cloud bills by 35–50% with no performance impact.',
        '<strong>WAN modernisation:</strong> Replacing costly Etisalat or du MPLS circuits with SD-WAN over broadband for multi-site businesses. SD-WAN delivers better application performance, built-in failover, and AED 3,000–6,000/month in circuit cost savings per remote site.',
      ],
    },
    {
      title: 'Frequently Asked Questions',
      text: `<dl>
<dt><strong>How long does it take to build an IT roadmap?</strong></dt>
<dd>NOCKO delivers a complete IT roadmap in 3 weeks from kickoff. Week 1 covers current-state assessment and documentation. Week 2 covers gap analysis and initiative identification. Week 3 covers prioritisation, AED budget modelling, and presentation to leadership. Ongoing quarterly vCIO reviews keep the roadmap current as the business evolves.</dd>

<dt><strong>What should an IT roadmap include?</strong></dt>
<dd>A practical IT roadmap should include an infrastructure upgrade schedule with hardware end-of-life dates, a software contract renewal calendar, security improvement milestones covering MFA, EDR, and SIEM, compliance deadlines for applicable frameworks such as NESA, DFSA, or HAAD, AED budget per quarter across the planning horizon, and a 30/90/180-day quick-win list for immediate cost savings and risk reduction.</dd>

<dt><strong>How much does an IT roadmap cost?</strong></dt>
<dd>A standalone IT roadmap engagement for a 50–150 seat Dubai business typically costs AED 12,000–22,000. Ongoing vCIO-managed roadmap reviews are available from AED 5,000 per month as part of a managed IT plan. The roadmap almost always identifies savings that exceed its cost within the first 90 days — particularly through M365 licence consolidation and cloud rightsizing.</dd>

<dt><strong>Can you build a roadmap for a business planning to expand to Abu Dhabi or KSA?</strong></dt>
<dd>Yes. Multi-emirate and GCC expansion is a common roadmap theme across our Dubai client base. We plan data residency architecture, inter-emirate connectivity via Etisalat or du links or SD-WAN overlay, Microsoft Entra ID multi-tenant or single-tenant decisions for acquired or new entities, and IT compliance requirements for each jurisdiction. Planning this before expansion costs a fraction of what it costs to fix after the fact.</dd>
</dl>`,
    },
  ],
};

export default function ITConsultingRoadmapPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-04-14', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Consulting', href: '/services/it-consulting' }, { label: 'IT Roadmaps' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
