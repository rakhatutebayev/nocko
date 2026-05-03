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
import ServiceFAQ from '@/components/services/ServiceFAQ';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'IT AMC Services in Dubai | Annual Maintenance Contract UAE | NOCKO',
  description:
    'Reliable IT Annual Maintenance Contract (AMC) services in Dubai and across UAE. Fixed annual costs for IT maintenance, server management, and 24/7 support. Expert IT AMC provider for businesses in DIFC, JLT and Business Bay.',
  keywords:
    'IT AMC Dubai, annual maintenance contract UAE, IT maintenance contract Dubai, AMC services UAE, IT support contract Dubai, best IT AMC Dubai',
  openGraph: {
    title: 'IT AMC Services in Dubai | Annual Maintenance Contract UAE | NOCKO',
    description:
      'Predictable IT maintenance with Annual Maintenance Contract (AMC) in Dubai and UAE. Complete IT support and management with fixed annual costs.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-amc',
  },
};

const itAmcContent = {
  hero: {
    title: 'Enterprise IT AMC Services in Dubai',
    titleBreak: 'Enterprise IT AMC<br>Services in Dubai',
    subtitle: 'Strict SLAs, Predictable Budgets, and High-Availability Infrastructure',
    description:
      'Eliminate IT downtime with an iron-clad Annual Maintenance Contract (AMC). We deliver 24/7 proactive monitoring, guaranteed 2-hour physical response times across Dubai, and complete hardware lifecycle management.',
    serviceType: 'IT AMC',
  },
  firstSection: [
    {
      title: 'Predictable CAPEX through Fixed-Cost Contracts',
      text: "The traditional 'break-fix' model destroys financial predictability. An Annual Maintenance Contract (AMC) shifts your IT from a volatile cost center to a fixed, predictable utility. One comprehensive contract covers all Level 1 to Level 3 support, server maintenance, and emergency NOC response—allowing CFOs to accurately model yearly IT expenditure without surprise invoices.",
      link: '/articles/it-amc-costs',
      linkText: 'Understand AMC Structures',
      image: '/images/services/it-amc-costs.png',
      imageAlt: 'IT AMC annual maintenance contract services',
    },
    {
      title: 'Guaranteed 2-Hour SLA in Dubai Core Hubs',
      text: "Downtime during trading hours in the UAE is catastrophic. Standard AMC contracts promise 'fast response', but we mathematically guarantee it. Across major Dubai business clusters including DIFC, DMCC, and Business Bay, we guarantee a 15-minute remote triage response and a maximum 2-hour physical on-site arrival for Priority 1 infrastructure failures.",
      link: '/articles/it-amc-priority',
      linkText: 'Review our SLA Matrices',
    },
    {
      title: 'Hardware Lifecycle and Manufacturer RMAs',
      text: "We completely offload the burden of managing decaying hardware. When a Dell server fan fails or a Cisco access point burns out, your staff shouldn't spend hours on hold with manufacturers. Our AMC includes complete RMA (Return Merchandise Authorization) management. We diagnose the physical fault, ship the failing component to the vendor, and install the replacement.",
      link: '/articles/it-amc-hardware',
      linkText: 'Hardware Management Capabilities',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Strictly defined 15-minute remote and 2-hour physical SLAs',
    },
    {
      icon: 'icon2',
      title: 'Fixed Annual Billing eliminating unpredictable break/fix invoices',
    },
    {
      icon: 'icon3',
      title: 'Complete Lifecycle Management (From procurement to RMA handling)',
    },
    {
      icon: 'icon4',
      title: 'Scheduled preventive physical rack maintenance (thermals/dust)',
    },
    {
      icon: 'icon5',
      title: 'Unlimited remote L1/L2 Helpdesk for your entire localized staff',
    },
  ],
  secondSection: [
    {
      title: 'Proactive System Maintenance vs Reactive Repairs',
      text: 'Why wait for a server to crash? Under our AMC, your entire infrastructure is outfitted with precise Remote Monitoring and Management (RMM) agents. If an Exchange server drive reaches 98% capacity at 3 AM on a Sunday, our NOC engineers receive the alert and preemptively expand the volume before your office opens on Monday morning.',
      link: '/articles/it-amc-maintenance-visits',
      linkText: 'Learn about Proactive RMM',
      image: '/images/services/it-amc-maintenance.png',
      imageAlt: 'Regular IT maintenance visits and system checks',
    },
    {
      title: 'Automated Vulnerability Patching Workflow',
      text: 'The vast majority of ransomware penetrations in the Middle East exploit unpatched software. As a core component of your comprehensive AMC, we implement strict automated patching. All Microsoft Windows, Linux, and 3rd-party application updates are tested in our sandbox and deployed centrally to your fleet over the weekend, eliminating production disruption.',
      link: '/articles/it-amc-updates',
      linkText: 'Our Patching SLA',
    },
    {
      title: 'Strategic vCIO Consulting Included',
      text: 'An AMC should provide direction, not just technical hands. Upgrading your AMC tier unlocks access to our virtual Chief Information Officer (vCIO) services. We conduct quarterly architectural reviews to align your aging infrastructure with your 3-to-5 year business expansion goals across the Emirates.',
      link: '/articles/it-amc-comprehensive',
      linkText: 'Explore vCIO Benefits',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Dubai-Based Engineering <br> Dispatch Core',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Legally Binding <br> Recovery SLAs',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Microsoft & Cisco <br> Certified Technicians',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Zero Hidden Costs <br> (Inclusive Coverage)',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Dedicated <br> Account Governance',
    },
  ],
  geoContent: {
    emirates: [
      { name: 'Dubai', hubs: ['DIFC', 'Business Bay', 'DMCC (JLT)', 'DSO', 'JAFZA'] },
      { name: 'Abu Dhabi', hubs: ['ADGM', 'Mussafah Industrial', 'KIZAD'] },
      { name: 'Sharjah', hubs: ['SAIF Zone', 'Hamriyah Free Zone'] }
    ],
    terms: ['Dubai AMC Contracts', 'SLA Driven IT Support', 'Hardware RMA Management', 'Enterprise Data Center Maintenance'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'Eliminating the Break-Fix Trap: 35% Cost Reduction',
      description:
        'Read how Projection moved from reactive break-fix IT to a structured AMC with 24/7 monitoring, cutting P1 incidents by 48% and achieving 99.9% uptime across their Dubai and Abu Dhabi offices.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/projection',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'How to structure a bombproof AMC Contract',
      description:
        'Understand the critical difference between inclusive scopes and exclusive out-of-scope hardware capital expenditures.',
      image: '/images/services/cards/guide.png',
      url: '/articles/it-amc-vs-msp',
      ctaText: 'Read Legal Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Why SLAs matter more than price',
      description:
        'An executive breakdown of why saving $500 on a cheap AMC contract will cost you $50,000 during a 3-day server outage.',
      image: '/images/services/cards/multi.png',
      url: '/articles/it-amc-hardware-lifecycle',
      ctaText: 'Calculate True Downtime',
    },
  ],
  cta: {
    title: 'Stop Paying for Downtime.',
    text: "Contact our commercial team today for a transparent, strictly defined IT AMC proposal tailored to your office footprint.",
    ctaText: 'Request AMC Proposal',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Helpdesk & Remote Support',
      url: '/services/it-support',
      description: 'Instant remote L1/L2 ticketing for end-users.',
    },
    {
      title: 'Datacenter Structured Cabling',
      url: '/services/structured-cabling',
      description: 'Physical network architecture and Fluke certification.',
    },
    {
      title: 'Cybersecurity SOC',
      url: '/services/cybersecurity',
      description: 'Zero Trust architecture and 24/7 EDR ransomware protection.',
    },
  ],
  faq: {
    title: 'Frequently Asked Questions About IT AMC Services',
    items: [
      {
        question: 'What is included in NOCKO\'s IT AMC service?',
        answer: 'Our Annual Maintenance Contract includes: 24/7 NOC monitoring, quarterly preventive maintenance visits, hardware fault diagnosis and RMA management, software patching, helpdesk ticketing (ServiceNow), and financially backed SLAs with response time guarantees. Hardware replacement costs are scoped separately.',
      },
      {
        question: 'What are typical AMC response times in Dubai?',
        answer: 'For Priority-1 critical failures (server down, network outage), remote triage begins within 15 minutes and onsite dispatch within 2 hours in Dubai. For Priority-2 issues, onsite response is within 4 hours. All SLAs are contractually backed with service credits.',
      },
      {
        question: 'How much does an IT AMC cost in Dubai?',
        answer: 'IT AMC pricing in Dubai typically ranges from AED 150–500 per user per month depending on scope, number of endpoints, and SLA level. A 50-seat office with standard monitoring and quarterly visits typically costs AED 8,000–15,000/month. We provide fixed quotes after a free IT assessment.',
      },
      {
        question: 'Can NOCKO take over AMC from our current IT provider?',
        answer: 'Yes. We handle full IT transitions including asset discovery, documentation of your current state, and a parallel-run handover period. Most transitions complete within 30 days with zero service disruption.',
      },
    ],
  },
};

export default function ITAMCPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          '@id': 'https://nocko.com/services/it-amc#service',
          name: 'IT AMC Dubai — Annual Maintenance Contract',
          serviceType: 'IT Annual Maintenance Contract',
          description: 'Annual IT maintenance contracts for businesses in Dubai and UAE. Fixed cost, predictable budget, priority support, and proactive maintenance.',
          url: 'https://nocko.com/services/it-amc',
          provider: { '@type': 'Organization', '@id': 'https://nocko.com/#localbusiness', name: 'NOCKO Information Technology' },
          areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'City', name: 'Sharjah' }],
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        data={{ itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nocko.com/services' },
          { '@type': 'ListItem', position: 3, name: 'IT AMC Dubai', item: 'https://nocko.com/services/it-amc' },
        ]}}
      />
      <StructuredData
        type="FAQPage"
        data={{
          mainEntity: itAmcContent.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={itAmcContent.hero.title}
          subtitle={itAmcContent.hero.subtitle}
          description={itAmcContent.hero.description}
          className="hero--it-amc"
        />

        <ServiceContentEnhanced blocks={itAmcContent.firstSection} />
        <ServiceFeatures features={itAmcContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itAmcContent.secondSection} />
        <ServiceBenefits benefits={itAmcContent.benefits} />
        
        <ServiceGeo 
          title="Leading IT AMC Provider in UAE"
          description="From DIFC financial offices to Business Bay enterprises, our IT Annual Maintenance Contracts provide reliable support across Dubai, Abu Dhabi and the Northern Emirates."
          emirates={itAmcContent.geoContent.emirates}
          terms={itAmcContent.geoContent.terms}
          footerNote="Corporate IT Excellence"
        />

        <ServiceFAQ
          title={itAmcContent.faq.title}
          items={itAmcContent.faq.items}
        />
        <ServiceCTA
          title={itAmcContent.cta.title}
          text={itAmcContent.cta.text}
          ctaText={itAmcContent.cta.ctaText}
          ctaUrl={itAmcContent.cta.ctaUrl}
        />
        <RelatedServices services={itAmcContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}
