import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceGeo from '@/components/services/ServiceGeo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: '#1 IT Support Company in Dubai | 24/7 Managed IT Services UAE',
  description:
    'Leading IT support company in Dubai providing 24/7 helpdesk, proactive maintenance, and managed IT services across UAE. Expert IT professionals available for on-site and remote support in DIFC, Business Bay, and JLT.',
  keywords:
    'IT support Dubai, IT support company Dubai, managed IT services UAE, 24/7 IT support, IT maintenance Dubai, technical support UAE, IT helpdesk Dubai',
  openGraph: {
    title: '#1 IT Support Company in Dubai | 24/7 Managed IT Services UAE',
    description:
      'Professional IT support and managed services for businesses in Dubai and across the UAE. 24/7 helpdesk and expert technical maintenance.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-support',
    languages: {
      'en-AE': '/services/it-support',
      'ru-RU': '/services/it-support-ru',
    },
  },
};

const itSupportContent = {
  hero: {
    title: 'Enterprise IT Support & Helpdesk in Dubai',
    subtitle: '24/7 Ticketing, Guaranteed SLAs, and Remote Diagnostics',
    description:
      'Empower your workforce with instant IT resolution. We provide multi-lingual L1/L2/L3 helpdesk support, proactive endpoint monitoring, and rapid physical dispatch across DIFC, DMCC, and the wider UAE.',
    serviceType: 'IT Support & Helpdesk',
  },
  firstSection: [
    {
      title: '24/7 Centralized Remote Helpdesk',
      text: "End-user downtime paralyzes organizational productivity. Our centralized Network Operations Center (NOC) operates 24/7/365, providing instant remote diagnostics. Whether your CFO is locked out of Microsoft 365 or a remote worker needs secure VPN access from abroad, our engineers connect securely to resolve 85% of issues within the first 15 minutes.",
      link: '/articles/it-support-remote',
      linkText: 'Our Remote Resolution Metrics',
      image: '/images/services/it-support-24-7.webp',
      imageAlt: '24/7 IT support services in UAE',
    },
    {
      title: 'SLA-Driven Ticketing Workflows',
      text: 'Stop relying on unstructured WhatsApp messages to "the IT guy." We integrate professional, ITIL-compliant ticketing systems (like ServiceNow or Jira Service Management) directly into your corporate workflow. Every request is timestamped, categorized by severity, and bound by strict Service Level Agreements (SLAs)—guaranteeing transparent accountability and executive reporting.',
      link: '/articles/it-support-helpdesk',
      linkText: 'Explore SLA Integrations',
    },
    {
      title: 'Physical On-Site Dispatch Across Dubai',
      text: 'While remote support resolves software issues, hardware failures require physical intervention. When a router dies in your JLT office or a printer fails in your JAFZA warehouse, we dispatch certified field technicians. Our strategic location guarantees an average 2-hour physical arrival time for critical Priority-1 outages anywhere in Dubai.',
      link: '/articles/it-support-onsite',
      linkText: 'View Dispatch Zones',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: '24/7 Multi-lingual (English/Arabic/Russian) Support Agents',
    },
    {
      icon: 'icon2',
      title: 'Strict ITIL-compliant ticketing & tracking workflows',
    },
    {
      icon: 'icon3',
      title: 'Remote diagnostics resolving 85% of tickets instantly',
    },
    {
      icon: 'icon4',
      title: 'Guaranteed 2-Hour physical dispatch for Priority 1 issues',
    },
    {
      icon: 'icon5',
      title: 'Monthly SLA adherence reporting for corporate executives',
    },
  ],
  secondSection: [
    {
      title: 'Proactive Endpoint Management (MDM)',
      text: 'With the rise of hybrid work in the UAE, securing mobile endpoints is critical. We deploy Mobile Device Management (MDM) platforms (like Microsoft Intune) to enforce security policies across all corporate laptops and phones. If an employee loses their device in a Dubai taxi, our helpdesk can remotely wipe the sensitive corporate data within seconds.',
      link: '/articles/it-support-monitoring',
      linkText: 'Secure Your Endpoints',
      image: '/images/services/it-support-monitoring.webp',
      imageAlt: 'Proactive IT monitoring and maintenance',
    },
    {
      title: "Employee Onboarding & Identity Management",
      text: "The HR process shouldn't be slowed down by IT bottlenecks. We completely automate your employee onboarding and offboarding workflows. When a new hire joins, we provision their Microsoft 365 licensing, configure their laptop security policies, and grant precise Role-Based Access Control (RBAC) before their first day in the office.",
      link: '/articles/it-support-optimization',
      linkText: 'Automate HR IT Processes',
    },
    {
      title: 'Shadow IT & Licensing Audits',
      text: "Employees frequently purchase unauthorized SaaS tools using corporate cards, creating massive security vectors (Shadow IT). Our active monitoring detects unsanctioned applications, blocks them, and forces users onto your secure, company-approved platforms—simultaneously rescuing thousands of dirhams in wasted duplicate licensing costs.",
      link: '/articles/it-support-24-7',
      linkText: 'Audit your Tech Stack',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Dubai-centric <br> Field Technicians',
    },
    {
      icon: '/images/benefits/time.png',
      text: '15-Minute <br> Remote Triage',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Tier 1 to Tier 3 <br> Escalation Engineers',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Predictable <br> Per-User Billing',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'ITIL-Compliant <br> Service Delivery',
    },
  ],
  geoContent: {
    emirates: [
      { name: 'Dubai', hubs: ['DIFC', 'Business Bay', 'DMCC', 'Silicon Oasis', 'Media City'] },
      { name: 'Abu Dhabi', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
      { name: 'Sharjah', hubs: ['SAIF Zone', 'Al Majaz'] },
      { name: 'Ajman', hubs: [] },
      { name: 'Fujairah', hubs: [] },
      { name: 'Ras Al Khaimah', hubs: [] },
      { name: 'Umm Al Quwain', hubs: [] }
    ],
    terms: ['IT Helpdesk Dubai', 'Remote IT Support UAE', 'Microsoft 365 Support Dubai', 'Corporate IT Ticketing'],
  },
  resources: [
    {
      type: 'CASE STUDY',
      title: 'Reducing Ticket Resolution Time by 80%',
      description:
        'Learn how deploying structured ITIL ticketing allowed a Business Bay real estate firm to cut average IT resolution times from three days to under two hours.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/it-support',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'The Blueprint for Managed IT Services',
      description:
        'A complete guide outlining the financial and operational differences between ad-hoc support and proactive Managed Services (MSP).',
      image: '/images/services/cards/guide.png',
      url: '/articles/managed-it-services-guide',
      ctaText: 'Read Blueprint',
    },
    {
      type: 'ARTICLE',
      title: 'Why Microsoft 365 Onboarding takes Too Long',
      description:
        'Discover how integrating Windows Autopilot with Azure AD completely eliminates manual laptop configuration within your IT department.',
      image: '/images/services/cards/multi.png',
      url: '/articles/it-support-guide',
      ctaText: 'Read Architecture Article',
    },
  ],
  cta: {
    title: 'Is Your Team Frustrated by Slow Technical Support?',
    text: "Contact our Dubai-based NOC directors today to explore a support contract that guarantees instant remote resolution.",
    ctaText: 'Request Support Proposal',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'IT AMC Contracts',
      url: '/services/it-amc',
      description: 'Wrap your Helpdesk inside a fixed-cost comprehensive hardware AMC.',
    },
    {
      title: 'Cybersecurity SOC',
      url: '/services/cybersecurity',
      description: 'Protect the endpoints we support with an active SOC and EDR.',
    },
    {
      title: 'Strategic IT Consulting',
      url: '/services/it-consulting',
      description: 'Let our vCIO optimize the software licenses your team uses daily.',
    },
  ],
  faq: {
    title: 'Frequently Asked Questions About IT Support Services',
    items: [
      {
        question: 'Do you offer "per-user" or "per-device" pricing?',
        answer:
          'We utilize a modern "per-user" pricing model. Because modern employees utilize a laptop, a smartphone, and often a tablet, tracking devices limits productivity. By billing per-user, we support all your employees\' corporate devices comprehensively without nickel-and-diming you.',
      },
      {
        question: 'How quickly can your engineers arrive at our Dubai office?',
        answer:
          'For Priority 1 issues (such as a core switch failure taking down the internet for the entire office), our SLA physically guarantees arrival within 2 hours across major Dubai hubs (DIFC, Business Bay, JLT). Standard hardware issues are scheduled for next-business-day dispatch.',
      },
      {
        question: 'Do you support Microsoft 365 and Google Workspace?',
        answer:
          'Yes, our L2 and L3 engineers are fully certified in administering complex Microsoft Azure AD, Exchange Online, and Google Workspace ecosystems, including complex SharePoint permissions and MDM (Intune) configurations.',
      },
      {
        question: 'Can you support our proprietary internal ERP software?',
        answer:
          'While our core support encompasses network infrastructure and standard productivity suites, we frequently act as the technical liaison between your company and your ERP vendor (like SAP or Oracle). We will diagnose the issue and coordinate with their engineers so you don\'t have to.',
      },
    ],
  },
};

export default function ITSupportPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Services', url: '/services' },
            { name: 'IT Support & Helpdesk' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={itSupportContent.hero.title}
          subtitle={itSupportContent.hero.subtitle}
          description={itSupportContent.hero.description}
        />

        <ServiceContentEnhanced blocks={itSupportContent.firstSection} />
        <ServiceFeatures features={itSupportContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itSupportContent.secondSection} />
        <ServiceBenefits benefits={itSupportContent.benefits} />
        
        <ServiceGeo 
          title="Serving Businesses Across the UAE"
          description="From high-frequency financial hubs like DIFC to industrial zones, NOCKO provides managed IT support tailored to your location in Dubai, Abu Dhabi and all Emirates."
          emirates={itSupportContent.geoContent.emirates}
          terms={itSupportContent.geoContent.terms}
          footerNote="Expert IT Solutions"
        />

        <ServiceFAQ
          title={itSupportContent.faq.title}
          items={itSupportContent.faq.items}
        />
        <ServiceCTA
          title={itSupportContent.cta.title}
          text={itSupportContent.cta.text}
          ctaText={itSupportContent.cta.ctaText}
          ctaUrl={itSupportContent.cta.ctaUrl}
        />
        <RelatedServices services={itSupportContent.relatedServices} />
      </main>
      <Footer />
    </>
  );
}
