import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'IT AMC Services in Dubai | Annual Maintenance Contract UAE | NOCKO',
  description:
    'Reliable IT Annual Maintenance Contract (AMC) services in Dubai and across UAE. Fixed annual costs for IT maintenance, server management, and 24/7 support. Expert IT AMC provider for businesses in DIFC, JLT and Business Bay.',
  keywords:
    'IT AMC Dubai, annual maintenance contract UAE, IT maintenance contract Dubai, AMC services UAE, IT support contract Dubai, best IT AMC Dubai',
  openGraph: {
    title: 'IT AMC Services in Dubai | Annual Maintenance Contract UAE | NOCKO',
    description: 'Predictable IT maintenance with Annual Maintenance Contract (AMC) in Dubai and UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/it-amc' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'IT Annual Maintenance Contract (AMC) in Dubai',
    subtitle: 'Predictable IT Costs with Guaranteed SLAs and Proactive Maintenance',
    description:
      'Eliminate IT uncertainty with a comprehensive Annual Maintenance Contract. We provide fixed-cost IT maintenance, server management, and priority 24/7 support for businesses across Dubai and the UAE.',
  },
  firstSection: [
    {
      title: 'Comprehensive IT Infrastructure Maintenance',
      text: 'Our AMC covers your entire IT infrastructure — servers, network equipment, workstations, and peripherals. Regular preventive maintenance visits ensure optimal performance and identify potential issues before they cause costly downtime.',
      link: '/articles/it-amc-comprehensive',
      linkText: 'AMC coverage details',
      image: '/images/services/amc-maintenance.png',
      imageAlt: 'IT maintenance contract services Dubai',
    },
    {
      title: 'Priority Support with Guaranteed Response Times',
      text: 'AMC clients receive priority support with guaranteed response times defined in your SLA. Our helpdesk prioritizes your tickets, ensuring critical issues receive immediate attention from senior engineers.',
      link: '/articles/it-amc-priority',
      linkText: 'SLA guarantees',
    },
    {
      title: 'Hardware Lifecycle Management',
      text: 'We track your entire hardware inventory, monitor warranty expiration, and proactively recommend replacements before failures occur. Our procurement team ensures you get the best pricing on hardware upgrades.',
      link: '/articles/it-amc-hardware',
      linkText: 'Hardware management',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Scheduled preventive maintenance visits' },
    { icon: 'icon2', title: 'Priority helpdesk with guaranteed SLA response' },
    { icon: 'icon3', title: 'Complete hardware and software inventory tracking' },
    { icon: 'icon4', title: 'Security patches and updates management' },
    { icon: 'icon5', title: 'Dedicated account manager for your business' },
  ],
  secondSection: [
    {
      title: 'Predictable IT Budgeting',
      text: 'Replace unpredictable IT costs with a fixed annual fee. Our AMC pricing covers all routine maintenance, emergency support calls, and remote assistance — giving your finance team complete cost visibility throughout the year.',
      link: '/articles/it-amc-costs',
      linkText: 'AMC pricing structure',
      image: '/images/services/it-amc-costs.png',
      imageAlt: 'IT budget planning UAE',
    },
    {
      title: 'Scheduled Maintenance Visits',
      text: 'Regular on-site maintenance visits by certified engineers who inspect, clean, test, and optimize your IT infrastructure. We document every visit with detailed reports so you always know the health status of your systems.',
      link: '/articles/it-amc-maintenance-visits',
      linkText: 'Maintenance visit schedule',
    },
    {
      title: 'Software Updates & Patch Management',
      text: 'We manage all operating system patches, software updates, and security fixes across your infrastructure. Our controlled update process ensures patches are tested before deployment, minimizing disruption risk.',
      link: '/articles/it-amc-updates',
      linkText: 'Patch management approach',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Certified IT engineers in Dubai' },
    { icon: '/images/benefits/time.png', text: 'Guaranteed SLA response times' },
    { icon: '/images/benefits/team.png', text: 'Dedicated account manager' },
    { icon: '/images/benefits/pricing.png', text: 'Fixed annual IT costs' },
    { icon: '/images/benefits/communication.png', text: 'Monthly health reports' },
  ],
  resources: [],
  cta: {
    title: 'Get a Tailored IT AMC Proposal',
    text: 'Contact us for a free IT infrastructure assessment and customized AMC pricing for your business.',
    ctaText: 'Get AMC Proposal',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'IT Support', url: '/services/it-support', description: '24/7 helpdesk and on-site IT support.' },
    { title: 'Managed IT Services', url: '/services/managed-it', description: 'Fully managed IT infrastructure and monitoring.' },
    { title: 'IT Consulting', url: '/services/it-consulting', description: 'Strategic IT planning and technology roadmaps.' },
  ],
  faq: [
    { question: 'What is an IT AMC and what does it cover?', answer: 'An IT Annual Maintenance Contract is a service agreement that covers preventive maintenance, repairs, and support for your IT infrastructure for a fixed annual fee. It typically includes hardware maintenance, software support, and helpdesk services.' },
    { question: 'How many site visits are included in the AMC?', answer: 'Visit frequency depends on your contract tier. Standard AMCs include quarterly visits, Premium AMCs include monthly visits, and Enterprise AMCs can include bi-weekly visits.' },
    { question: 'Is emergency support included in the AMC?', answer: 'Yes. All our AMC contracts include emergency support. Response times vary by tier — Critical issues receive 2-hour response in our Premium and Enterprise tiers.' },
  ],
  faqTitle: 'IT AMC FAQs',
};

export default async function ItAmcPage() {
  const service = await getService('it-amc');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://nocko.com/services' },
            { '@type': 'ListItem', position: 3, name: 'IT AMC', item: 'https://nocko.com/services/it-amc' },
          ],
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'IT AMC' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
      />
      <Footer />
    </>
  );
}
