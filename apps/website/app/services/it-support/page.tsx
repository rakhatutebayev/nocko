import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'IT Support Company in Dubai | 24/7 Managed IT Services UAE',
  description:
    'Leading IT support company in Dubai providing 24/7 helpdesk, proactive maintenance, and managed IT services across UAE. Expert IT professionals available for on-site and remote support in DIFC, Business Bay, and JLT.',
  keywords:
    'IT support Dubai, IT support company Dubai, managed IT services UAE, 24/7 IT support, IT maintenance Dubai, technical support UAE, IT helpdesk Dubai',
  openGraph: {
    title: 'IT Support Company in Dubai | 24/7 Managed IT Services UAE',
    description: 'Professional IT support and managed services for businesses in Dubai and across the UAE.',
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
    title: 'Enterprise IT Support & Helpdesk in Dubai',
    subtitle: '24/7 Ticketing, Guaranteed SLAs, and Remote Diagnostics',
    description:
      'Empower your workforce with instant IT resolution. We provide multi-lingual L1/L2/L3 helpdesk support, proactive endpoint monitoring, and rapid physical dispatch across DIFC, DMCC, and the wider UAE.',
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
    { question: 'What are your IT support response time guarantees?', answer: 'Critical issues: 15-minute remote response, 2-hour on-site in Dubai. High priority: 1-hour remote, 4-hour on-site. Standard: 4-hour remote, next business day on-site.' },
    { question: 'Do you provide support outside of business hours?', answer: 'Yes. Our NOC operates 24/7/365. After-hours support is included in Premium and Enterprise plans, and available as add-on for Standard plans.' },
    { question: 'Can you support remote and hybrid workforces?', answer: 'Absolutely. We provide VPN setup, secure remote access, cloud collaboration tools support, and remote endpoint management for fully distributed teams.' },
  ],
  faqTitle: 'IT Support FAQs',
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
