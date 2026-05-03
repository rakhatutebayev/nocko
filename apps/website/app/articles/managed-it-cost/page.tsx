import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Predictable IT Budgets and Costs | NOCKO UAE',
  description: 'Reduce TCO and ensure absolute pricing transparency with our Managed Service Provider (MSP) agreements.',
  alternates: {
    canonical: '/articles/managed-it-cost',
    languages: {
      'en-AE': '/articles/managed-it-cost',
      'ru-RU': '/ru/articles/managed-it-cost',
    },
  },
};

const articleData = {
  hero: {
    title: 'Predictable IT Budgets and Costs',
    subtitle: 'Shifting entirely to an OPEX utility model',
    description: 'Reduce TCO and ensure absolute pricing transparency with our Managed Service Provider (MSP) agreements.',
  },
  intro: 'Managing IT independently comes with massive capital expenditure requirements. By leveraging a Managed Service Provider (MSP), you purchase IT strictly as a service. This OPEX model gives CFOs exact forecasting capabilities, knowing precisely what the IT infrastructure will cost per user.',
  blocks: [
    {
      title: 'CAPEX to OPEX Transition',
      text: '<p>The traditional IT cost model in the UAE requires heavy upfront capital expenditure: buying servers, firewalls, backup appliances, and licences outright, then carrying depreciation and unexpected repair costs for years. A Managed IT arrangement converts this to a predictable monthly per-user fee that covers all infrastructure, support, and software — allowing the CFO to treat IT as a utility expense rather than a capital project.</p><p>For UAE free zone companies preparing annual IFRS financial statements, this reclassification from CAPEX to OPEX can improve working capital ratios and simplify financial reporting. We provide monthly invoices broken down by service category and user count, which map directly to P&L line items.</p>',
      list: [
        'Fixed monthly per-user pricing covering all IT services',
        'Elimination of emergency hardware spend and surprise break/fix invoices',
        'OPEX treatment improves working capital and simplifies financial reporting',
        'Monthly invoices with service category breakdown for P&L allocation',
        'Scalable pricing — add or remove users monthly without penalties',
      ],
    },
    {
      title: 'Total Cost of Ownership Comparison',
      text: '<p>Companies that manage IT internally typically underestimate the true cost. A 50-person company in Dubai with one internal IT engineer (salary AED 120,000/year) plus hardware depreciation (AED 40,000/year), software licences (AED 30,000/year), and emergency repair costs (AED 20,000/year) is spending approximately AED 210,000/year — AED 350/user/month. A managed IT package for the same company at AED 300–350/user/month delivers significantly broader coverage including 24/7 NOC monitoring, security tools, and backup management that the single internal engineer cannot provide.</p>',
    },
    {
      title: 'Licence and Vendor Management Savings',
      text: '<p>We manage all vendor relationships and licence renewals for your account — Microsoft 365, Fortinet, Adobe, and others. We purchase through CSP (Cloud Solution Provider) and volume licensing agreements that provide 10–25% discounts versus retail pricing. Renewals are tracked automatically with 90-day advance notice, preventing the expensive lapse-and-reactivate cycle that many UAE companies fall into with annual software subscriptions.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: What is the typical per-user monthly cost for managed IT in Dubai?</strong><br/>A: Entry-level managed IT (helpdesk + basic monitoring) starts around AED 200–250/user/month. Comprehensive managed IT including security, backup, and vCIO services ranges from AED 400–600/user/month.',
        '<strong>Q: Are hardware costs included in managed IT pricing?</strong><br/>A: Hardware procurement and capital refresh are typically separate from the monthly managed service fee, but we manage the procurement, warranty, and replacement at cost — you never pay a markup on hardware.',
        '<strong>Q: What happens to our internal IT team if we move to managed IT?</strong><br/>A: Most companies retain a junior IT coordinator as an on-site liaison while the managed service handles technical depth. Some companies fully outsource. We design the model around your preference.',
        '<strong>Q: Is there a minimum contract term?</strong><br/>A: Our standard managed IT contracts are 12 months. We offer 24-month terms with a 5% discount. Month-to-month arrangements are available with a 30-day notice period at a 15% premium.',
      ],
    },
  ],
};

export default function ManageditcostPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-03-18', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
