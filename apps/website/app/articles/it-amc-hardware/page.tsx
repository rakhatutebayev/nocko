import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Hardware Lifecycle Management & RMA | NOCKO UAE',
  description: 'NOCKO manages the full hardware lifecycle for UAE businesses — proactive end-of-life planning, Cisco, Dell, and HP warranty RMA coordination, and on-site installation of replacement parts, so your team never deals with manufacturer support queues.',
  alternates: {
    canonical: '/articles/it-amc-hardware',
    languages: {
      'en-AE': '/articles/it-amc-hardware',
      'ru-RU': '/ru/articles/it-amc-hardware',
    },
  },
};

const articleData = {
  hero: {
    title: 'IT Hardware Lifecycle Management & RMA',
    subtitle: 'Offload your hardware supply chain entirely',
    description: 'We diagnose failures, handle complex vendor RMAs, and physically install the replacements.',
  },
  intro: 'Dealing with enterprise manufacturers (Cisco, Dell, HP) for warranty replacements is incredibly time consuming. We take over the entire RMA lifecycle. If a physical hardware piece fails, our certified engineers open the ticket, ship the part, and install the new unit on your rack.',
  blocks: [
    {
      title: 'Hardware Inventory and End-of-Life Planning',
      text: '<p>Most UAE companies have no accurate inventory of their physical hardware assets, making it impossible to plan for replacements before failures occur. We maintain a live CMDB (Configuration Management Database) tracking every server, switch, firewall, UPS, and desktop — including serial number, purchase date, warranty expiry, and estimated end-of-life date.</p><p>Quarterly hardware health reviews flag any devices within 12 months of warranty expiry or reaching vendor end-of-support status (e.g. Windows Server 2012, Cisco switches reaching EoL). This gives your finance team a 12-month budget forecast for hardware capital expenditure, eliminating emergency procurement at inflated prices.</p>',
      list: [
        'Live CMDB tracking all hardware assets with warranty status',
        'Quarterly end-of-life reports with 12-month replacement planning',
        'Budget forecasting for hardware capital expenditure',
        'Proactive procurement before failure rather than emergency replacement',
      ],
    },
    {
      title: 'RMA and Vendor Warranty Management',
      text: '<p>When a Dell server hard drive fails, the RMA process involves verifying warranty status on the Dell portal, running the online diagnostics to generate a dispatch code, coordinating the courier delivery of the replacement drive, and installing it — a process that typically takes an internal IT team 4–6 hours to navigate. We handle this entirely: we hold the warranty credentials for your hardware fleet, open the RMA, track the shipment, and install the replacement.</p><p>For Cisco SmartNet contracts, we manage the renewal cycle 90 days in advance, preventing the common scenario where a Cisco switch fails after SmartNet has lapsed and replacement parts carry a 6–8 week lead time from authorised suppliers in the UAE.</p>',
      list: [
        'Warranty claim management for Cisco, Dell, HP, and Fortinet hardware',
        'Cisco SmartNet renewal management 90 days before expiry',
        'On-site installation of warranty replacement parts within SLA',
        'Data sanitisation of decommissioned hardware per UAE disposal standards',
      ],
    },
    {
      title: 'Spare Parts and Emergency Procurement',
      text: '<p>For critical infrastructure, waiting for a warranty replacement is not always acceptable. We maintain a spare parts inventory of common failure items — RAM modules, hard drives, SFP transceivers, and power supplies — for immediate same-day replacement of critical components in Dubai-based clients under premium AMC tiers.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: How long does a Dell warranty hard drive replacement take in Dubai?</strong><br/>A: Dell ProSupport in the UAE typically delivers replacement parts next business day for in-warranty servers. We manage the claim submission and installation same-day once the part arrives.',
        '<strong>Q: What happens when hardware is out of warranty?</strong><br/>A: Out-of-warranty hardware is replaced through our procurement channels. We source authorised hardware from UAE distributors and can typically deliver and install replacement hardware within 2–3 business days.',
        '<strong>Q: Can you manage hardware at multiple office locations?</strong><br/>A: Yes — our AMC contracts cover all your UAE locations under a single agreement, with on-site SLA response times defined per location.',
        '<strong>Q: Do you handle server room UPS and power infrastructure?</strong><br/>A: Yes — UPS maintenance, battery replacement, and APC/Eaton warranty management are included in comprehensive AMC tiers.',
      ],
    },
  ],
};

export default function ItamchardwarePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-05-12', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
