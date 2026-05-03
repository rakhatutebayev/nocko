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
  title: 'Managed IT Services in Dubai | Complete IT Management UAE | NOCKO',
  description:
    'Comprehensive managed IT services in Dubai and UAE. Complete IT infrastructure management, 24/7 monitoring, and proactive maintenance for businesses. Expert IT outsourcing for DIFC, JLT and Business Bay.',
  keywords:
    'managed IT services Dubai, IT management UAE, managed IT infrastructure Dubai, IT outsourcing UAE, complete IT management Dubai, best managed IT UAE',
  openGraph: {
    title: 'Managed IT Services in Dubai | Complete IT Management UAE | NOCKO',
    description:
      'Professional managed IT services and infrastructure management for businesses in Dubai and across the UAE. Proactive IT support and monitoring.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/managed-it',
  },
};

const managedItContent = {
  hero: {
    title: 'Enterprise Managed IT Services in Dubai (MSP)',
    subtitle: 'Fully Outsourced IT Departments & Co-Managed Corporate Infrastructure',
    description:
      'Transform IT from a capital expense bottleneck into a predictable operational utility. We provide complete network operations, 24/7 SOC monitoring, and vCTO leadership for scaling organizations across the UAE.',
    serviceType: 'Managed IT Services',
  },
  firstSection: [
    {
      title: 'Complete Infrastructure Outsourcing',
      text: 'For fast-growing companies in Dubai Multi Commodities Centre (DMCC) or JAFZA, hiring an internal IT department is costly and scales poorly. Our fully Managed IT solution acts as your entire IT department. From configuring the office firewall to resetting an employee’s Microsoft 365 password at 2 AM, we take 100% ownership of your technology stack.',
      link: '/articles/managed-it-infrastructure',
      linkText: 'Explore Fully Managed IT',
      image: '/images/services/managed-it-infrastructure.webp',
      imageAlt: 'Managed IT infrastructure management services in UAE',
    },
    {
      title: 'Co-Managed IT for Enterprise Teams',
      text: 'If you already have a skilled IT Director or internal Helpdesk in your Dubai headquarters, they shouldn’t be wasting time on server patching or managing localized backups. Our Co-Managed IT structure integrates directly with your existing IT team. We handle the 24/7 backend NOC/SOC monitoring, freeing your internal staff to focus on high-value corporate projects.',
      link: '/articles/managed-it-scalable',
      linkText: 'Learn about Co-Managed IT',
    },
    {
      title: 'Virtual Chief Technology Officer (vCTO)',
      text: "Every business needs technical leadership, but a full-time CTO in the UAE commands a premium salary. Our Managed IT agreements include embedded vCTO guidance. We sit with your board quarterly to review IT utilization metrics, plan cloud migrations, and align technology spending directly with your firm's multi-year revenue goals.",
      link: '/articles/managed-it-cost',
      linkText: 'Discover vCTO Benefits',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Fixed Monthly OPEX billing per-user (No hidden invoices)',
    },
    {
      icon: 'icon2',
      title: 'Embedded vCTO strategy and quarterly board reporting',
    },
    {
      icon: 'icon3',
      title: 'Co-Managed frameworks to support existing internal IT teams',
    },
    {
      icon: 'icon4',
      title: '24/7 NOC / SOC monitoring from our Dubai engineering core',
    },
    {
      icon: 'icon5',
      title: 'Comprehensive vendor management (We talk to Etisalat/Du for you)',
    },
  ],
  secondSection: [
    {
      title: 'Strict UAE Data Residency & Compliance',
      text: "Managing IT in the Middle East requires strict adherence to local laws. As an established UAE Managed Service Provider (MSP), we ensure your backup architecture, cloud storage locations (AWS/Azure UAE Regions), and data handling policies are fully compliant with TRA, DESC, and NESA regulations, protecting your executives from compliance liabilities.",
      link: '/articles/managed-it-security',
      linkText: 'Ensure UAE Data Compliance',
      image: '/images/services/managed-it-security.webp',
      imageAlt: 'Managed IT security and compliance services in UAE',
    },
    {
      title: 'Automated Device Lifecycle & Procurement',
      text: 'Stop wasting management hours buying laptops on Amazon. When you need to scale your team, NOCKO handles the entire hardware lifecycle. We procure enterprise-grade hardware (Dell, Lenovo, Apple), apply custom zero-touch corporate imaging via Microsoft Intune, and deliver the ready-to-work device directly to your new employee’s desk in Dubai or Abu Dhabi.',
      link: '/articles/managed-it-monitoring',
      linkText: 'Automate Device Procurement',
    },
    {
      title: 'Disaster Recovery and Business Continuity',
      text: 'A cyberattack is mathematically inevitable. Our Managed IT packages include enterprise Disaster Recovery capabilities. We manage immutable, air-gapped backups and conduct quarterly failover testing to ensure that, in the event of a total server failure or ransomware strike, your operations can be restored within our guaranteed Recovery Time Objective (RTO).',
      link: '/articles/managed-it-backup',
      linkText: 'View Disaster Recovery Metrics',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Local UAE-Based <br> NOC & Helpdesk',
    },
    {
      icon: '/images/benefits/time.png',
      text: 'Financially Backed <br> Uptime SLAs',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Enterprise-Grade <br> MSP Architecture',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Predictable Utility <br> OPEX Billing',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Complete Vendor <br> Liaison Management',
    },
  ],
  geoContent: {
    emirates: [
      { name: 'Dubai', hubs: ['DIFC', 'Business Bay', 'JLT / DMCC', 'Silicon Oasis', 'Media City'] },
      { name: 'Abu Dhabi', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
      { name: 'Sharjah', hubs: ['SAIF Zone', 'Hamriyah Free Zone'] },
      { name: 'Ajman', hubs: [] },
      { name: 'Fujairah', hubs: [] },
      { name: 'Ras Al Khaimah', hubs: [] },
      { name: 'Umm Al Quwain', hubs: [] }
    ],
    terms: ['Managed Service Provider UAE', 'Outsourced IT Dubai', 'Co-Managed IT Hubs', 'vCTO Tech Leadership'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'Transitioning to OPEX: 40% TCO Reduction',
      description:
        'Learn how a scaling JLT logistics firm abandoned their disjointed external contractors for a unified NOCKO Managed Services agreement.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/technohub',
      ctaText: 'Read MSP Case Study',
    },
    {
      type: 'GUIDE',
      title: 'The Blueprint for Managed IT Services',
      description:
        'Understand the critical technical difference between reactive "Break/Fix" AMC contracts and true proactive Managed Services.',
      image: '/images/services/cards/guide.png',
      url: '/articles/managed-it-services-guide',
      ctaText: 'Download the MSP Blueprint',
    },
    {
      type: 'ARTICLE',
      title: 'Co-Managed IT: The Best of Both Worlds',
      description:
        'A guide for IT Directors on how to effectively outsource tedious NOC alerts while maintaining control of corporate strategy.',
      image: '/images/services/cards/multi.png',
      url: '/articles/managed-it-co-managed',
      ctaText: 'Read Co-Managed Strategy',
    },
  ],
  cta: {
    title: 'Ready to Stop Worrying About IT?',
    text: "Schedule an infrastructure audit with a NOCKO vCTO to determine if your firm is ready to transition to Managed Services.",
    ctaText: 'Request Infrastructure Audit',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Helpdesk & Support',
      url: '/services/it-support',
      description: 'The front-line of our Managed Services offering.',
    },
    {
      title: 'Strategic Consulting',
      url: '/services/it-consulting',
      description: 'Standalone vCIO and M&A technical integration services.',
    },
    {
      title: 'Enterprise Cybersecurity',
      url: '/services/cybersecurity',
      description: 'Zero Trust architecture and 24/7 EDR ransomware protection.',
    },
  ],
  faq: {
    title: 'Frequently Asked Questions About Managed IT Services',
    items: [
      {
        question: 'What is included in NOCKO Managed IT Services?',
        answer: 'Our fully managed IT service includes: 24/7 NOC monitoring and alerting, helpdesk (unlimited tickets), endpoint management (Windows Autopilot, Intune MDM), patch management, backup and disaster recovery, cybersecurity baseline (EDR, DNS filtering), and a dedicated vCIO. Everything is covered under a single monthly fee.',
      },
      {
        question: 'How is Managed IT different from IT AMC?',
        answer: 'IT AMC focuses on maintaining your existing hardware and infrastructure reactively. Managed IT is proactive and comprehensive — we own your IT outcomes, not just your hardware uptime. This includes security, cloud management, user onboarding/offboarding, and strategic planning.',
      },
      {
        question: 'How much does Managed IT cost in Dubai?',
        answer: 'Managed IT Services in Dubai typically cost AED 200–600 per user per month depending on service tier. A 50-seat company pays approximately AED 12,000–25,000/month for full management including security and cloud. This compares to AED 180,000–280,000/year for an equivalent in-house IT team.',
      },
      {
        question: 'How long does it take to onboard to NOCKO Managed IT?',
        answer: 'Standard onboarding takes 2–4 weeks. Week 1: IT discovery and documentation. Week 2: RMM agent deployment, monitoring setup, and helpdesk onboarding. Week 3–4: security baseline deployment and user training. During onboarding your existing IT remains operational.',
      },
    ],
  },
};

export default function ManagedITPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          '@id': 'https://nocko.com/services/managed-it#service',
          name: 'Managed IT Services Dubai',
          serviceType: 'Managed IT Services',
          description: 'Fully managed IT infrastructure, 24/7 monitoring, and proactive maintenance for businesses in Dubai and UAE.',
          url: 'https://nocko.com/services/managed-it',
          provider: { '@type': 'Organization', '@id': 'https://nocko.com/#localbusiness', name: 'NOCKO Information Technology' },
          areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'City', name: 'Sharjah' }],
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        data={{ itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nocko.com/services' },
          { '@type': 'ListItem', position: 3, name: 'Managed IT Services', item: 'https://nocko.com/services/managed-it' },
        ]}}
      />
      <StructuredData
        type="FAQPage"
        data={{
          mainEntity: managedItContent.faq.items.map((item) => ({
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
          title={managedItContent.hero.title}
          subtitle={managedItContent.hero.subtitle}
          description={managedItContent.hero.description}
        />

        <ServiceContentEnhanced blocks={managedItContent.firstSection} />
        <ServiceFeatures features={managedItContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={managedItContent.secondSection} />
        <ServiceBenefits benefits={managedItContent.benefits} />
        
        <ServiceGeo 
          title="Serving Businesses Throughout the UAE"
          description="NOCKO provides end-to-end managed IT services for corporate offices and enterprises in Dubai, Abu Dhabi, and the Northern Emirates."
          emirates={managedItContent.geoContent.emirates}
          terms={managedItContent.geoContent.terms}
          footerNote="Scale with NOCKO"
        />

        <ServiceFAQ
          title={managedItContent.faq.title}
          items={managedItContent.faq.items}
        />
        <ServiceCTA
          title={managedItContent.cta.title}
          text={managedItContent.cta.text}
          ctaText={managedItContent.cta.ctaText}
          ctaUrl={managedItContent.cta.ctaUrl}
        />
        <RelatedServices services={managedItContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}

