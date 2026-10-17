import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleByline from '@/components/articles/ArticleByline';
import ArticleContent from '@/components/articles/ArticleContent';
import FAQAccordion from '@/components/sections/FAQAccordion';
import StructuredData from '@/components/seo/StructuredData';
import ServiceCTA from '@/components/services/ServiceCTA';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const PUBLISHED = '2025-07-02';
const MODIFIED = '2026-10-17';

export const metadata: Metadata = {
  title: 'IT AMC vs MSP in Dubai: Differences, Cost & Which to Choose',
  description: 'IT AMC vs MSP compared for UAE businesses: what each contract covers, SLA, pricing in AED, hidden costs and a decision checklist for 10–200 users.',
  alternates: {
    canonical: '/articles/it-amc-vs-msp',
    languages: {
      'en-AE': '/articles/it-amc-vs-msp',
      'ru-RU': '/ru/articles/it-amc-vs-msp',
      'x-default': '/articles/it-amc-vs-msp',
    },
  },
  robots: { index: true, follow: true },
};

const articleData = {
  hero: {
    title: 'IT AMC vs MSP in Dubai: Differences, Cost & Which to Choose (2026)',
    subtitle: 'Two contracts that sound alike and bill very differently',
    description: 'What an IT AMC and a managed services (MSP) agreement actually cover in the UAE, what each costs in AED, where the hidden invoices hide, and how to pick the right one for your company size.',
  },
  intro: `An IT AMC (Annual Maintenance Contract) and an MSP (Managed Service Provider) agreement are the two standard ways UAE companies outsource IT. They are often sold with the same words - "support", "maintenance", "SLA" - but they differ in what is included, how you are billed and who carries the risk when something breaks. This guide compares them side by side with UAE pricing so you can choose in one meeting instead of three.`,
  blocks: [
    {
      title: 'The short answer',
      text: `<div class="article__tldr"><p><strong>An IT AMC</strong> is a fixed annual contract for keeping your existing infrastructure running: scheduled maintenance visits, patching, hardware support and incident response within an SLA. <strong>An MSP agreement</strong> is a monthly per-user or per-device subscription for running your whole IT function: 24/7 monitoring, unlimited helpdesk, security, cloud and a virtual CIO. In Dubai a 20–25 user company typically pays <strong>AED 18,000–45,000 per year</strong> for an AMC and <strong>AED 2,500–6,000 per month</strong> for managed IT. AMC suits companies with stable infrastructure and some in-house IT; MSP suits companies that want IT fully outsourced with predictable OPEX.</p></div>`,
    },
    {
      title: 'IT AMC vs MSP vs break/fix: side-by-side comparison',
      text: `<div class="article__table-wrap"><table>
<caption>Typical UAE market terms, October 2026. NOCKO's own AMC and managed IT scopes are described on the linked service pages.</caption>
<thead><tr><th>Criteria</th><th>IT AMC</th><th>Managed IT (MSP)</th><th>Break/fix (pay per call)</th></tr></thead>
<tbody>
<tr><td>Billing model</td><td>Fixed annual fee, usually paid yearly or quarterly</td><td>Monthly fee per user or per device (OPEX)</td><td>Hourly or per incident</td></tr>
<tr><td>What is included</td><td>Preventive maintenance visits, patching, hardware support, incident response for covered assets</td><td>Everything in AMC plus 24/7 NOC monitoring, unlimited helpdesk, security stack, cloud and vendor management, vCIO</td><td>Only the work you call for</td></tr>
<tr><td>Monitoring</td><td>Scheduled checks; 24/7 monitoring available as an add-on</td><td>Continuous (RMM, alerts, automated remediation)</td><td>None</td></tr>
<tr><td>SLA</td><td>Defined response times by priority, e.g. P1 15 min remote, 2 h on-site in Dubai</td><td>Same priority SLA plus uptime and resolution targets</td><td>Best effort</td></tr>
<tr><td>Security</td><td>Patching and antivirus; advanced security scoped separately</td><td>Endpoint protection, MFA, email security, backup and DR usually bundled</td><td>Not included</td></tr>
<tr><td>Typical cost, 20–25 users</td><td>AED 18,000–45,000 per year</td><td>AED 2,500–6,000 per month (AED 30,000–72,000 per year)</td><td>AED 300–600 per hour; AED 4,000–8,000 per major incident</td></tr>
<tr><td>Who carries the risk</td><td>Shared: out-of-scope work and hardware are billed</td><td>Provider: incidents are covered by the fee</td><td>You</td></tr>
<tr><td>Best for</td><td>Stable infrastructure, in-house IT or office manager as first line, predictable budget</td><td>No in-house IT, growth, compliance needs, multi-site or hybrid teams</td><td>Micro-businesses with almost no IT dependency</td></tr>
</tbody></table></div>`,
    },
    {
      title: 'What an IT AMC covers in the UAE',
      text: `<p>A well-written AMC is <strong>preventive, not just reactive</strong>. It lists every covered asset - servers, switches, firewalls, workstations, printers, UPS - and commits the provider to scheduled maintenance (monthly or quarterly), operating system and firmware patching, health checks and a priority-based SLA for incidents. Hardware replacement is normally quoted separately: the AMC covers the labour, the parts are a capital cost.</p><p>The weak point of a cheap AMC is scope. If the contract only says "maintenance and support", everything else - a new user set-up, a migration, a security review, an after-hours call-out - becomes a chargeable extra at AED 300–600 per hour. Before signing, ask for the asset list, the visit schedule, the SLA table by priority and the explicit list of exclusions. Our <a href="/articles/it-amc-guide">IT AMC guide</a> walks through the tiers and pricing per user and per device.</p>`,
      list: [
        'Fixed annual price for a defined list of assets and services',
        'Scheduled visits, patching and health checks, not only incident response',
        'SLA by priority (P1 15 min remote / 2 h on-site in Dubai is the market benchmark)',
        'Hardware parts, projects and out-of-scope requests are billed separately',
      ],
    },
    {
      title: 'What a managed services (MSP) agreement covers',
      text: `<p>A managed IT agreement turns the provider into your outsourced IT department. You pay a flat monthly fee per user or per device and the provider is responsible for the outcome: systems available, tickets resolved, security maintained. Scope normally includes 24/7 monitoring (NOC), unlimited remote helpdesk, on-site visits within the SLA, patch and update management, endpoint and email security, backup and disaster recovery, cloud and licence management, and quarterly strategy reviews with a virtual CIO.</p><p>Because incidents cost the MSP money rather than earning it, the commercial incentive is to prevent them. That is why managed IT comes with monitoring tooling, automation and standardisation - and why it costs more per month than an AMC. For a 20–50 user company in Dubai the typical range is AED 2,500–6,000 per month; see <a href="/services/managed-it">managed IT services</a> for what NOCKO includes and how the price is built.</p>`,
      list: [
        'Monthly OPEX per user or device; no hourly surprises for covered work',
        '24/7 monitoring and unlimited helpdesk as the default, not an add-on',
        'Security, backup and DR bundled, with compliance reporting on request',
        'vCIO: quarterly roadmap, budget and vendor reviews',
      ],
    },
    {
      title: 'Where the hidden costs are',
      text: `<p>Compare total cost of ownership, not the sticker price. An AMC at AED 30,000 a year looks cheaper than managed IT at AED 4,000 a month (AED 48,000 a year) until you add the extras. A single ransomware or server-failure incident handled on hourly rates typically costs a UAE SME <strong>AED 4,000–8,000</strong> in labour alone, after-hours call-outs run at a premium, and project work (migrations, office moves, new sites) is quoted on top. Two or three such events a year close the gap entirely.</p><p>On the MSP side the hidden cost is usually scope creep in the other direction: licences (Microsoft 365, security tools, backup storage) billed at pass-through, and onboarding fees in the first month. Ask both types of provider for a twelve-month "all-in" estimate for your real asset list and incident history.</p>`,
      list: [
        'AMC extras: hourly incidents, after-hours call-outs, projects, hardware parts',
        'MSP extras: software licences at pass-through, onboarding, out-of-hours on-site beyond SLA',
        'A 25-user company with 2–3 serious incidents a year usually pays more under AMC + hourly than under managed IT',
        'Ask for a 12-month total cost for your asset list, not a per-user headline',
      ],
    },
    {
      title: 'The vCIO difference',
      text: `<p>AMC engineers keep hardware alive; a managed services provider also owns the roadmap. The virtual CIO component of an MSP agreement means someone meets your leadership every quarter to review risks, plan refresh cycles, consolidate SaaS spend and align IT with UAE compliance requirements (ISR, PDPL, sector regulators). If your company has no one making those decisions today, this is often the part of managed IT that pays for itself.</p>`,
    },
    {
      title: 'Which model fits your business?',
      text: `<p><strong>Choose an IT AMC</strong> if your infrastructure is stable, you have an in-house IT person or a technically confident office manager as first line, and you mainly need guaranteed response for incidents plus scheduled maintenance. It is also the right fit for sites with a lot of hardware - warehouses, clinics, schools - where physical maintenance dominates.</p><p><strong>Choose managed IT (MSP)</strong> if you have no internal IT, you are growing or opening new sites, you handle regulated data, or your team is hybrid and works in the cloud. You will pay more per month, but incidents, security and strategy are the provider's problem, and your IT budget becomes a single predictable line.</p><p><strong>Hybrid is common.</strong> Many Dubai companies start with an AMC for the server room and move the users to a managed helpdesk; others run a managed agreement with an AMC-style hardware schedule written into it. Ask the provider to quote both and show the twelve-month total.</p>`,
      list: [
        'AMC: stable infrastructure, in-house first line, hardware-heavy sites',
        'MSP: no in-house IT, growth, compliance, hybrid or multi-site teams',
        'Hybrid: AMC for hardware, managed helpdesk for users',
        'Decision input: asset list, incident history, growth plan, compliance scope',
      ],
    },
  ],
};

const faqItems = [
  {
    question: 'What is the difference between an IT AMC and managed IT services?',
    answer: 'An IT AMC is a fixed annual contract to maintain and support your existing infrastructure within an SLA: scheduled visits, patching, hardware support and incident response. Managed IT services (MSP) is a monthly subscription under which the provider runs your entire IT function, including 24/7 monitoring, unlimited helpdesk, security, cloud and strategic planning.',
  },
  {
    question: 'How much does an IT AMC cost in Dubai?',
    answer: 'For a 20–25 user company a comprehensive IT AMC in Dubai typically costs AED 18,000–45,000 per year, depending on the number of servers and workstations, the SLA tier and whether 24/7 coverage is included. Per-device pricing is usually AED 80–150 per workstation and AED 400–900 per server per month.',
  },
  {
    question: 'How much do managed IT services cost in the UAE?',
    answer: 'Managed IT for a 20–50 user company in the UAE usually costs AED 2,500–6,000 per month, covering 24/7 monitoring, helpdesk, security and cloud management. Per-user pricing ranges from about AED 75 to AED 190 per user per month depending on scope.',
  },
  {
    question: 'Is an AMC the same as break/fix support?',
    answer: 'No. Break/fix means you pay per call with no commitment. A proper AMC is a preventive contract with scheduled maintenance, patching and an SLA for incidents. A cheap AMC that only reacts to failures is effectively break/fix with a retainer, so check the visit schedule and scope before signing.',
  },
  {
    question: 'Can we move from an AMC to managed IT later?',
    answer: 'Yes, and it is the most common path in the UAE. Providers typically run a 30–60 day onboarding: asset discovery, monitoring agents, helpdesk set-up and documentation. Many companies keep an AMC-style hardware maintenance schedule inside the managed agreement.',
  },
  {
    question: 'Which is better for a small business in Dubai with 10–30 staff?',
    answer: 'If you have no IT staff and work in the cloud, managed IT gives you a complete IT department for a predictable monthly fee. If your set-up is simple and someone in the office handles first-line issues, an AMC with a clear SLA is the more economical choice. Ask for both quotes with a twelve-month total cost.',
  },
];

export default function ItAmcVsMspPage() {
  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title,
          description: metadata.description,
          url: 'https://nocko.com/articles/it-amc-vs-msp',
          inLanguage: 'en-AE',
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <ArticleByline locale="en" published={PUBLISHED} modified={MODIFIED} />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT AMC & Maintenance', href: '/services/it-amc' }, { label: 'IT AMC vs MSP' }]} />
          <div className="article">
            <ArticleContent
              intro={articleData.intro}
              blocks={articleData.blocks}
              relatedArticles={[
                { href: '/services/it-amc', title: 'IT AMC Services', description: 'Annual maintenance contracts with scheduled visits and a priority SLA.' },
                { href: '/services/managed-it', title: 'Managed IT Services', description: 'Fully managed IT with 24/7 monitoring and helpdesk, from AED 2,500 a month.' },
                { href: '/articles/it-amc-guide', title: 'IT AMC Guide: Pricing & SLA Tiers', description: 'AED pricing per user and per device, SLA tiers and contract structure.' },
              ]}
            />
          </div>
        </div>
        <FAQAccordion title="IT AMC vs MSP: frequently asked questions" items={faqItems} />
        <ServiceCTA
          title="Not sure which contract you need?"
          text="Send us your asset list and we will quote both an AMC and a managed IT option with a twelve-month total."
          ctaText="Request Both Quotes"
          ctaUrl="#contact"
        />
      </main>
      <Footer />
    </>
  );
}
