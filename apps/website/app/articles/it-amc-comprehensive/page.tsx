import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Strategic vCIO Consulting | NOCKO UAE',
  description: 'NOCKO provides vCIO services as part of premium IT AMC tiers in the UAE — quarterly board-level technology reviews, IT budgeting, software acquisition guidance, and expansion planning for companies growing into Abu Dhabi, KSA, or new free zones.',
  alternates: {
    canonical: '/articles/it-amc-comprehensive',
    languages: {
      'en-AE': '/articles/it-amc-comprehensive',
      'ru-RU': '/ru/articles/it-amc-comprehensive',
    },
  },
};

const articleData = {
  hero: {
    title: 'Strategic vCIO Consulting',
    subtitle: 'Virtual Chief Information Officer (vCIO) Services',
    description: 'We align your technology directly with your 3-year business strategy.',
  },
  intro: 'Your IT should scale proportionally with your revenue. Included in premium AMC tiers, our vCIOs conduct quarterly architectural reviews with your board of directors, advising on software acquisitions, expansion strategies into Abu Dhabi, and data lifecycle management.',
  blocks: [
    {
      title: 'Quarterly Technology Reviews with Leadership',
      text: '<p>Our vCIO meets with your management team quarterly to review the IT roadmap against business objectives. These sessions cover upcoming technology renewals (Microsoft licences, firewall firmware, ISP contracts), planned headcount growth and the IT infrastructure required to support it, and emerging technologies relevant to your industry — such as AI-powered document processing for legal firms or automated inventory systems for logistics companies in JAFZA.</p><p>The output of each quarterly review is a written IT roadmap document that your board and external auditors can reference, demonstrating that technology decisions are made strategically rather than reactively — a key indicator of IT governance maturity for DFSA and ADGM regulated entities.</p>',
      list: [
        'Quarterly IT roadmap review and documentation',
        'Technology renewal calendar with 12-month budget forecast',
        'Software acquisition recommendations based on business requirements',
        'Vendor contract negotiation support for enterprise software agreements',
        'Board-level IT reports suitable for investor and regulatory review',
      ],
    },
    {
      title: 'Regional Expansion Planning',
      text: '<p>When a Dubai-based company opens an office in Abu Dhabi, KSA, or Bahrain, the IT implications are frequently underestimated. Different free zone connectivity providers, local cloud availability zones, and data sovereignty requirements need to be accounted for 6–12 months before the expansion date. Our vCIO service addresses this during the planning phase — not as an emergency when the new office opens.</p><p>We provide site survey reports for new UAE locations, assessing ISP availability (Etisalat business fibre, Du Enterprise, or du Datamena co-location options), reviewing lease agreements for IT infrastructure provisions, and specifying the hardware and connectivity required to match the existing office standard.</p>',
    },
    {
      title: 'IT Budget Planning and Financial Governance',
      text: '<p>We produce an annual IT budget recommendation covering all known expenditure categories: hardware refresh, software licences, security tools, connectivity costs, and managed service fees. For companies with multiple UAE entities, we allocate costs by entity for accurate P&L reporting. This level of detail satisfies the CFO, eliminates budget surprises, and supports accurate financial statements.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: What is the difference between a vCIO and a regular IT consultant?</strong><br/>A: An IT consultant delivers a project and leaves. A vCIO provides ongoing strategic oversight as part of your management team, attending meetings, tracking IT KPIs, and continuously aligning technology to business strategy.',
        '<strong>Q: Do we need a vCIO if we already have an internal IT manager?</strong><br/>A: A vCIO complements an internal IT manager rather than replacing them. The internal manager handles day-to-day operations; the vCIO brings strategic expertise, vendor relationships, and board-level communication skills.',
        '<strong>Q: How often does the vCIO meet with our management team?</strong><br/>A: Quarterly reviews are standard in our comprehensive AMC tier. Monthly touchpoints via email summary are included, and ad-hoc calls for urgent decisions are available without additional charge.',
        '<strong>Q: Can the vCIO represent us in meetings with government entities like TRA or TDRA?</strong><br/>A: Yes — our vCIOs have experience representing clients in regulatory discussions with UAE government entities and can attend meetings on your behalf.',
      ],
    },
  ],
};

export default function ItamccomprehensivePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-06-25', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
