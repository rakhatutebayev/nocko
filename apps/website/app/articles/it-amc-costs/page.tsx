import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Predictable CAPEX through Fixed-Cost Contracts | NOCKO UAE',
  description: 'Stop paying surprise break/fix invoices. We guarantee your entire IT operations budget for the full year.',
  alternates: {
    canonical: '/articles/it-amc-costs',
    languages: {
      'en-AE': '/articles/it-amc-costs',
      'ru-RU': '/ru/articles/it-amc-costs',
    },
  },
};

const articleData = {
  hero: {
    title: 'Predictable CAPEX through Fixed-Cost Contracts',
    subtitle: 'Understand Annual Maintenance Contract IT Budgets',
    description: 'Stop paying surprise break/fix invoices. We guarantee your entire IT operations budget for the full year.',
  },
  intro: 'An Annual Maintenance Contract (AMC) is the foundation of predictable IT spending in the UAE. By switching from a volatile "break/fix" model to an all-inclusive AMC, companies completely eliminate unexpected invoices. Whether your server motherboard burns out or your switch fails, the SLA and costs are capped securely.',
  blocks: [
    {
      title: 'What an AMC Contract Covers',
      text: '<p>A well-structured Annual Maintenance Contract in the UAE covers unlimited remote helpdesk support, scheduled preventive maintenance visits, hardware fault diagnosis, vendor management, patch deployment, and agreed SLA response times. The key distinction from a break/fix arrangement is that all of these are included in the annual fee — there is no additional charge when a server fails or when 20 staff call the helpdesk in one week.</p><p>AMC contracts are typically priced per user or per device, with tiers based on response SLA and service scope. A Tier 1 contract might include 8×5 support with next-business-day on-site response, while a Tier 3 contract includes 24×7 NOC monitoring and 2-hour physical dispatch anywhere in Dubai.</p>',
      list: [
        'Unlimited remote helpdesk calls with no per-incident charges',
        'Scheduled monthly preventive maintenance visits',
        'Hardware fault diagnosis and vendor RMA coordination',
        'Patch management for servers, workstations, and network devices',
        'Defined SLA response times with contractual penalties for breach',
      ],
    },
    {
      title: 'AMC versus Break/Fix Cost Comparison',
      text: '<p>In the break/fix model, a single server failure requiring a part replacement, 4 hours of engineer labour at AED 350/hour, and emergency after-hours callout charges can easily cost AED 4,000–8,000 for one incident. A 50-person company typically experiences 3–5 such incidents per year, making the unbudgeted annual exposure AED 15,000–40,000 on top of regular IT bills.</p><p>An AMC for the same company typically costs AED 8,000–18,000 per year all-inclusive. The cost certainty allows your finance team to include the exact IT operations cost in the annual budget, which is particularly important for UAE free zone entities preparing annual financial statements for auditors or investors.</p>',
    },
    {
      title: 'Contract Structure and SLA Negotiation',
      text: '<p>We structure AMC contracts with clear escalation paths: Tier 1 issues (printer jams, password resets) resolved remotely within 4 business hours; Tier 2 issues (server down, network outage) responded within 2 hours with physical dispatch if needed; Tier 3 critical incidents (data loss, security breach) receive immediate response with senior engineer involvement and a dedicated incident bridge call.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: What is a typical AMC cost per user in Dubai?</strong><br/>A: AMC pricing in Dubai typically ranges from AED 200–600 per user per month depending on service scope. Basic helpdesk-only contracts start lower; comprehensive contracts with 24/7 NOC, security monitoring, and vCIO services are at the higher end.',
        '<strong>Q: Is hardware replacement included in an AMC?</strong><br/>A: Labour for hardware replacement is included. Parts and hardware are typically excluded (billed at cost) unless you add a hardware cover rider, which covers parts up to an agreed per-claim limit.',
        '<strong>Q: What happens if we grow significantly during the contract year?</strong><br/>A: AMC contracts include a true-up clause — if your headcount grows by more than 20%, the contract fee adjusts pro-rata for the remaining contract months.',
        '<strong>Q: Can we move from break/fix to AMC mid-year?</strong><br/>A: Yes — we can start an AMC contract at any point. We conduct an initial audit to document the existing infrastructure state, which protects both parties at contract start.',
      ],
    },
  ],
};

export default function ItamccostsPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-02-18', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
