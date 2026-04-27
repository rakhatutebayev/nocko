import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceGeo from '@/components/services/ServiceGeo';

export const metadata: Metadata = {
  title: 'IT Consulting Services in Dubai | #1 Technology Strategy UAE | NOCKO',
  description:
    'Strategic IT consulting services in Dubai and UAE. Technology assessment, digital transformation, and infrastructure planning for businesses. Expert IT advisors for DIFC, JLT and Business Bay.',
  keywords:
    'IT consulting Dubai, IT strategy UAE, technology consulting Dubai, IT planning UAE, digital transformation Dubai, IT assessment UAE, best IT consulting Dubai',
  openGraph: {
    title: 'IT Consulting Services in Dubai | #1 Technology Strategy UAE | NOCKO',
    description:
      'Expert IT strategy and technology consulting for businesses in Dubai and across the UAE. Drive growth through digital transformation.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-consulting',
  },
};

const itConsultingContent = {
  hero: {
    title: 'Strategic IT Consulting & vCIO Services in Dubai',
    subtitle: 'Digital Transformation, IT Roadmapping, and Vendor Governance',
    description:
      'Stop making blind technology investments. NOCKO provides acting vCIO (Virtual Chief Information Officer) services, impartial vendor negotiations, and forensic IT audits for scaling enterprises across the UAE.',
    serviceType: 'IT Consulting',
  },
  firstSection: [
    {
      title: 'Forensic IT Audits & RAG Health Checks',
      text: 'Many organizations in Dubai operate with hidden tech debt. We conduct forensic audits of your entire infrastructure—from physical wiring in your Business Bay office to cloud licensing utilization. We deliver an actionable Red/Amber/Green (RAG) report isolating critical bottlenecks, security vulnerabilities, and wasted software expenditure.',
      link: '/articles/it-consulting-assessment',
      linkText: 'Learn about Forensic Audits',
      image: '/images/services/it-consulting-strategy-v2.png',
      imageAlt: 'IT strategy and planning services',
    },
    {
      title: 'Impartial Vendor Negotiations & Governance',
      text: 'Enterprise software vendors frequently lock UAE businesses into punishing long-term contracts. As your fractional vCIO, NOCKO sits on your side of the table during Request for Proposal (RFP) processes. We technically scrutinize Service Level Agreements (SLAs), drive down implementation costs, and completely eliminate vendor lock-in risks.',
      link: '/articles/it-consulting-strategy',
      linkText: 'Explore Vendor Governance',
    },
    {
      title: 'Multi-Year Actionable IT Roadmaps',
      text: 'Digital Transformation is more than buying software. We build mathematically modeled, 3-to-5-year actionable IT roadmaps aligned strictly with your board’s revenue targets. From Phase 1 SD-WAN integrations to Phase 3 ERP migrations (SAP, Dynamics 365), we plan resource allocation so your tech stack scales flawlessly.',
      link: '/articles/it-consulting-roadmap',
      linkText: 'Review Example Roadmaps',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Red/Amber/Green (RAG) Infrastructure forensic reports',
    },
    {
      icon: 'icon2',
      title: 'Impartial third-party software vendor RFP negotiations',
    },
    {
      icon: 'icon3',
      title: 'Fractional vCIO engagements for board-level reporting',
    },
    {
      icon: 'icon4',
      title: 'Cost-benefit analysis and ROI modeling for CAPEX',
    },
    {
      icon: 'icon5',
      title: 'Business Continuity and Disaster Recovery (BCDR) design',
    },
  ],
  secondSection: [
    {
      title: 'M&A Technology Integration',
      text: 'Mergers and Acquisitions (M&A) frequently fail due to incompatible IT systems. When acquiring a new firm in the UAE, our architects assess the target company’s technical debt and design a seamless Active Directory and Cloud integration plan, ensuring day-one operational continuity for your staff.',
      link: '/articles/it-consulting-infrastructure-design',
      linkText: 'M&A Tech Integrations',
      image: '/images/services/it-consulting-architecture-v2.png',
      imageAlt: 'IT infrastructure design and architecture',
    },
    {
      title: 'Microsoft 365 Licensing Optimization',
      text: 'We routinely find that Dubai enterprises overpay by up to 40% on Microsoft 365 and Azure licensing. We conduct deep licensing audits, downgrading unutilized E5 licenses to basic tiers where appropriate, and consolidating disparate software subscriptions into unified, cost-effective Microsoft ecosystem tools.',
      link: '/articles/it-consulting-roi',
      linkText: 'Optimize your Licensing',
    },
    {
      title: 'Business Continuity and Disaster Recovery (BCDR)',
      text: 'Relying on a local hard drive backup is not a Disaster Recovery plan. We define exact RTO (Recovery Time Objective) and RPO (Recovery Point Objective) metrics with your executives, and architect cloud-native DRaaS failovers to ensure compliance with UAE insurance mandates and data residency laws.',
      link: '/articles/it-consulting-digital-transformation',
      linkText: 'Ensure Business Continuity',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Veteran GCC-Based <br> Technology Architects',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Vendor-Agnostic <br> Impartial Advice',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Board-Level <br> KPI Reporting',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Immediate ROI through <br> License Cuts',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Executive-Level <br> Direct Communication',
    },
  ],
  geoContent: {
    emirates: [
      { name: 'Dubai', hubs: ['DIFC', 'Business Bay', 'JLT', 'Silicon Oasis', 'Media City'] },
      { name: 'Abu Dhabi', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
      { name: 'Sharjah', hubs: ['SAIF Zone'] },
      { name: 'Ajman', hubs: [] },
      { name: 'Fujairah', hubs: [] },
      { name: 'Ras Al Khaimah', hubs: [] },
      { name: 'Umm Al Quwain', hubs: [] }
    ],
    terms: ['Virtual CIO Dubai', 'IT Audit UAE', 'ERP Integration Consulting', 'Microsoft 365 Licensing Audit'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'M365 Audit Saves 40% Annually',
      description:
        'Discover how our forensic licensing audit eliminated duplicate SaaS tools and recovered $45,000 annually for a Dubai firm.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/m365-audit',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'The Guide to Strategic IT Roadmaps',
      description:
        'Learn how to execute a Digital Transformation without bloated licensing and frustrating employee pushback.',
      image: '/images/services/cards/guide.png',
      url: '/articles/it-consulting-guide',
      ctaText: 'Download Roadmap Guide',
    },
    {
      type: 'CAPABILITY',
      title: 'Surviving a Ransomware Strike',
      description:
        'Understand exactly what RTO and RPO mean, and how to architect a Disaster Recovery plan that actually works.',
      image: '/images/services/cards/multi.png',
      url: '/articles/it-consulting-ransomware-survival',
      ctaText: 'Read Architecture Guide',
    },
  ],
  cta: {
    title: 'Stop Wasting Your IT Budget.',
    text: "Book a discovery call with a NOCKO Principal Architect to discuss your digital transformation roadmap.",
    ctaText: 'Book Discovery Call',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Cloud Migrations',
      url: '/services/cloud',
      description: 'Execute the roadmap with our Cloud Architects.',
    },
    {
      title: 'Managed IT Services',
      url: '/services/managed-it',
      description: 'Comprehensive IT infrastructure management.',
    },
    {
      title: 'Cybersecurity SOC',
      url: '/services/cybersecurity',
      description: 'Zero Trust architecture and NESA compliance.',
    },
  ],
};

export default function ITConsultingPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={itConsultingContent.hero.title}
          subtitle={itConsultingContent.hero.subtitle}
          description={itConsultingContent.hero.description}
        />

        <ServiceContentEnhanced blocks={itConsultingContent.firstSection} />
        <ServiceFeatures features={itConsultingContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itConsultingContent.secondSection} />
        <ServiceBenefits benefits={itConsultingContent.benefits} />
        
        <ServiceGeo 
          title="Strategic IT Guidance Across the Emirates"
          description="From DIFC-based financial strategies to retail-focused digital transformations in Business Bay, NOCKO is the trusted IT advisor for UAE businesses."
          emirates={itConsultingContent.geoContent.emirates}
          terms={itConsultingContent.geoContent.terms}
          footerNote="Expert Strategic Advice"
        />

        <ServiceCTA
          title={itConsultingContent.cta.title}
          text={itConsultingContent.cta.text}
          ctaText={itConsultingContent.cta.ctaText}
          ctaUrl={itConsultingContent.cta.ctaUrl}
        />
        <RelatedServices services={itConsultingContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

