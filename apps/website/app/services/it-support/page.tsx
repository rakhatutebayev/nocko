import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'IT Support Dubai | IT Support Companies in Dubai | NOCKO UAE',
  description:
    'Top-rated IT support company in Dubai. 24/7 helpdesk, 2-hour on-site response, proactive monitoring, and managed IT support services for businesses in DIFC, DMCC, Business Bay, and across UAE. Free IT support assessment.',
  keywords:
    'IT support Dubai, IT support companies in Dubai, IT support services Dubai, IT support company Dubai, IT services Dubai, managed IT support UAE, 24/7 IT support Dubai, helpdesk Dubai, IT services company Dubai, IT solutions provider Dubai',
  openGraph: {
    title: 'IT Support Dubai | IT Support Companies in Dubai | NOCKO UAE',
    description: 'Dubai-based IT support company. 24/7 helpdesk, 2-hour on-site response, and proactive monitoring for UAE businesses.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-support',
    languages: { 'en-AE': '/services/it-support', 'ru-RU': '/ru/services/it-support' },
  },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'IT Support Services in Dubai & UAE',
    subtitle: 'Trusted IT Support Company for Dubai Businesses — 24/7 Helpdesk, 2-Hour On-Site Response',
    description:
      'NOCKO is a Dubai-based IT support company serving businesses across UAE free zones and business districts. We provide 24/7 remote helpdesk, on-site IT support across Dubai, Abu Dhabi, and Sharjah, proactive endpoint monitoring, and structured IT management — so your team stays productive and your IT stays running.',
  },
  firstSection: [
    {
      title: '24/7 Centralized Remote Helpdesk',
      text: "Our centralized Network Operations Center (NOC) operates 24/7/365, providing instant remote diagnostics. Whether your CFO is locked out of Microsoft 365 or a remote worker needs secure VPN access, our engineers connect securely to resolve 85% of issues within the first 15 minutes.",
      link: '/articles/it-support-remote',
      linkText: 'Remote support details',
      image: '/images/services/it-support-24-7.png',
      imageAlt: 'IT support helpdesk Dubai',
    },
    {
      title: 'On-Site IT Support Across UAE',
      text: 'When remote support isn\'t enough, our certified engineers dispatch to your location within 2 hours anywhere in Dubai and same-day across Abu Dhabi, Sharjah, and other Emirates.',
      link: '/articles/it-support-onsite',
      linkText: 'On-site support coverage',
    },
    {
      title: 'Proactive Endpoint Monitoring',
      text: 'We monitor your servers, workstations, and network devices around the clock. Automated alerts notify our NOC team of anomalies before they become outages, dramatically reducing unplanned downtime.',
      link: '/articles/it-support-monitoring',
      linkText: 'Monitoring capabilities',
    },
  ],
  features: [
    { icon: 'icon1', title: '24/7 NOC with 15-minute first response SLA' },
    { icon: 'icon2', title: 'Multi-lingual support (English, Arabic, Russian)' },
    { icon: 'icon3', title: 'L1/L2/L3 tiered helpdesk structure' },
    { icon: 'icon4', title: 'Proactive endpoint and server monitoring' },
    { icon: 'icon5', title: 'On-site dispatch within 2 hours in Dubai' },
  ],
  secondSection: [
    {
      title: 'Structured Ticketing & SLA Reporting',
      text: 'Every IT issue is logged, tracked, and resolved through our ITSM platform. Monthly SLA reports give your management team full visibility into IT performance, resolution times, and recurring issues.',
      link: '/articles/it-support-helpdesk',
      linkText: 'ITSM and ticketing system',
      image: '/images/services/it-support-monitoring.png',
      imageAlt: 'IT support reporting UAE',
    },
    {
      title: 'IT Onboarding & Offboarding',
      text: 'Streamline employee IT lifecycle management. We handle new hire setups, device provisioning, account creation, and secure offboarding — ensuring productivity from day one and security at departure.',
      link: '/articles/it-support-onboarding',
      linkText: 'Onboarding process',
    },
    {
      title: 'IT Optimization & Performance Tuning',
      text: 'Regular system optimization keeps your IT running at peak performance. We analyze usage patterns, identify bottlenecks, and implement improvements that increase productivity across your organization.',
      link: '/articles/it-support-optimization',
      linkText: 'Optimization approach',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Dubai-based engineers on-call 24/7' },
    { icon: '/images/benefits/time.png', text: '15-min first response SLA' },
    { icon: '/images/benefits/team.png', text: 'Multi-lingual support team' },
    { icon: '/images/benefits/pricing.png', text: 'Transparent per-ticket pricing' },
    { icon: '/images/benefits/communication.png', text: 'Monthly SLA reports' },
  ],
  resources: [],
  cta: {
    title: 'Ready for Reliable IT Support?',
    text: 'Get a free IT support assessment and discover how we can reduce your downtime and IT costs.',
    ctaText: 'Get Free Assessment',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Managed IT Services', url: '/services/managed-it', description: 'Complete IT infrastructure outsourcing.' },
    { title: 'IT AMC', url: '/services/it-amc', description: 'Annual maintenance contract with fixed costs.' },
    { title: 'Cybersecurity', url: '/services/cybersecurity', description: 'Endpoint protection and threat monitoring.' },
  ],
  faq: [
    {
      question: 'What IT support response times do you guarantee in Dubai?',
      answer: 'Our SLA tiers: Critical (server down, network failure) — 15-minute remote response, 2-hour on-site in Dubai. High priority (single system failure, security incident) — 1-hour remote, 4-hour on-site. Standard requests — 4-hour remote, next business day on-site. All SLAs are contractually guaranteed. Abu Dhabi and Sharjah on-site response is typically same-day for critical issues.',
    },
    {
      question: 'How much does IT support cost for a business in Dubai?',
      answer: 'IT support pricing in Dubai varies by model. Per-incident (break-fix) support typically costs AED 300–600 per hour for on-site engineers. Monthly retainer IT support for a 20–50 user company ranges from AED 3,000–8,000 per month, covering unlimited remote helpdesk tickets and a defined number of on-site visits. Our managed IT support packages include proactive monitoring, which reduces incidents by 60–70% compared to pure break-fix support.',
    },
    {
      question: 'What is the difference between IT support companies in Dubai?',
      answer: 'The key differentiators among Dubai IT support companies are: response time guarantees (are SLAs contractual or verbal?), engineer qualifications (certified Microsoft/Cisco vs. generalists), local presence (Dubai-based engineers vs. remote-only), language capability (English, Arabic, Russian), and monitoring capability (proactive NOC vs. pure break-fix). NOCKO employs certified engineers based in Dubai, with contractual SLAs and 24/7 monitoring included in all support contracts.',
    },
    {
      question: 'Do you provide IT support outside business hours?',
      answer: 'Yes. Our helpdesk operates 24/7/365. After-hours remote support is included in all NOCKO support contracts. After-hours on-site emergency response for Dubai mainland is available within a 2-hour window under our Premium and Enterprise contracts. Standard contracts include after-hours remote support with on-site the next business day.',
    },
    {
      question: 'Can you support remote and hybrid workforces across UAE?',
      answer: 'Yes. We support distributed teams through secure remote access management, Microsoft 365 and Google Workspace administration, VPN setup and troubleshooting, and endpoint monitoring for devices regardless of location. For free zone businesses with employees working across multiple Dubai locations or from home in areas like JVC, Marina, or Business Bay, our remote-first support model resolves 85% of issues without requiring an on-site visit.',
    },
    {
      question: 'Which industries do you provide IT support for in Dubai?',
      answer: 'We provide IT support for businesses across all major sectors in the UAE: financial services (DIFC, ADGM regulated entities), real estate agencies, professional services (law firms, consulting), hospitality, healthcare clinics, logistics companies, and retail. Our team understands sector-specific compliance requirements — including DFSA technology risk guidelines for DIFC firms and NESA standards for government-adjacent entities.',
    },
    {
      question: 'What is included in a monthly IT support contract?',
      answer: 'A typical NOCKO monthly IT support contract covers: unlimited remote helpdesk tickets (business hours + after-hours), a defined number of scheduled on-site visits, endpoint monitoring and alerting, patch management (Windows and critical software), Microsoft 365 / Google Workspace administration, and monthly IT health reports. Cloud infrastructure support, cybersecurity operations, and large project work are available as extensions.',
    },
    {
      question: 'How quickly can you start providing IT support for our business?',
      answer: 'For remote helpdesk support, we can begin within 24–48 hours after contract signing. Full onboarding — including installing RMM monitoring agents, documenting your infrastructure, configuring access, and integrating your team into our ticketing system — typically takes 3–5 business days for companies with 20–100 users.',
    },
  ],
  faqTitle: 'IT Support Dubai — Frequently Asked Questions',
};

export default async function ItSupportPage() {
  const service = await getService('it-support');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://nocko.com/services' },
            { '@type': 'ListItem', position: 3, name: 'IT Support', item: 'https://nocko.com/services/it-support' },
          ],
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'IT Support' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
      />
      <Footer />
    </>
  );
}
