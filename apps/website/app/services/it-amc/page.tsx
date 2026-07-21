import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'IT AMC Dubai | IT Annual Maintenance Contract UAE | NOCKO',
  description:
    'Leading IT AMC provider in Dubai and UAE. Comprehensive IT Annual Maintenance Contract covering servers, networks, workstations, and 24/7 priority support. Fixed-cost IT AMC services for DIFC, DMCC, JLT, Business Bay businesses. Free AMC assessment.',
  keywords:
    'IT AMC Dubai, IT AMC services, IT AMC services in Dubai, annual maintenance contract Dubai, it annual maintenance contract in dubai, AMC services Dubai, IT support contract Dubai, IT maintenance contract UAE, AMC company Dubai, it amc uae',
  openGraph: {
    title: 'IT AMC Dubai | IT Annual Maintenance Contract UAE | NOCKO',
    description: 'Fixed-cost IT Annual Maintenance Contract for Dubai businesses. Priority support, scheduled visits, hardware lifecycle management.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/it-amc' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'IT AMC Services in Dubai & UAE',
    subtitle: 'IT Annual Maintenance Contract — Fixed Costs, Priority Support, Guaranteed SLAs',
    description:
      'NOCKO is a trusted IT AMC provider in Dubai, offering comprehensive Annual Maintenance Contracts for businesses across UAE free zones — DIFC, DMCC, JLT, Business Bay, DAFZA, JAFZA, and Abu Dhabi. Our IT AMC covers servers, networks, workstations, and all IT infrastructure for a predictable annual fee — no surprise bills, no reactive panic.',
  },
  firstSection: [
    {
      title: 'Comprehensive IT Infrastructure Maintenance',
      text: 'Our AMC covers your entire IT infrastructure — servers, network equipment, workstations, and peripherals. Regular preventive maintenance visits ensure optimal performance and identify potential issues before they cause costly downtime.',
      link: '/articles/it-amc-guide',
      linkText: 'AMC coverage details',
      image: '/images/services/amc-maintenance.png',
      imageAlt: 'IT maintenance contract services Dubai',
    },
    {
      title: 'Priority Support with Guaranteed Response Times',
      text: 'AMC clients receive priority support with guaranteed response times defined in your SLA. Our helpdesk prioritizes your tickets, ensuring critical issues receive immediate attention from senior engineers.',
      link: '/articles/it-amc-guide',
      linkText: 'SLA guarantees',
    },
    {
      title: 'Hardware Lifecycle Management',
      text: 'We track your entire hardware inventory, monitor warranty expiration, and proactively recommend replacements before failures occur. Our procurement team ensures you get the best pricing on hardware upgrades.',
      link: '/articles/it-amc-hardware-lifecycle',
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
      link: '/articles/it-amc-guide',
      linkText: 'AMC pricing structure',
      image: '/images/services/it-amc-costs.png',
      imageAlt: 'IT budget planning UAE',
    },
    {
      title: 'Scheduled Maintenance Visits',
      text: 'Regular on-site maintenance visits by certified engineers who inspect, clean, test, and optimize your IT infrastructure. We document every visit with detailed reports so you always know the health status of your systems.',
      link: '/articles/it-amc-guide',
      linkText: 'Maintenance visit schedule',
    },
    {
      title: 'Software Updates & Patch Management',
      text: 'We manage all operating system patches, software updates, and security fixes across your infrastructure. Our controlled update process ensures patches are tested before deployment, minimizing disruption risk.',
      link: '/articles/it-amc-guide',
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
    {
      question: 'What is an IT AMC and what does it cover in Dubai?',
      answer: 'An IT Annual Maintenance Contract (IT AMC) is a fixed-cost annual service agreement that covers preventive maintenance, emergency repairs, and ongoing support for your entire IT infrastructure. For Dubai businesses, a typical NOCKO IT AMC covers: servers (physical and virtual), network switches and routers, workstations and laptops, printers and peripherals, software patch management, and 24/7 priority helpdesk. You pay one fixed annual fee — no surprise invoices when something breaks.',
    },
    {
      question: 'How much does an IT AMC cost in Dubai?',
      answer: 'IT AMC pricing in Dubai depends on the number of devices, complexity of infrastructure, and SLA tier. For a 20–50 user business, IT AMC contracts typically range from AED 18,000–45,000 per year — equivalent to AED 1,500–3,750 per month. This includes scheduled maintenance visits, emergency callouts, remote support, and parts-replacement coordination. NOCKO provides free infrastructure assessments before quoting.',
    },
    {
      question: 'What is the difference between IT AMC and managed IT services?',
      answer: 'An IT AMC (Annual Maintenance Contract) focuses on maintenance, break-fix support, and hardware management — it is reactive when issues occur, with scheduled preventive visits. Managed IT services are fully proactive: 24/7 monitoring, automated remediation, and continuous infrastructure management. If you have a small IT footprint with stable infrastructure, an AMC is cost-effective. If you need continuous monitoring and strategic IT management, a managed services agreement is the better fit.',
    },
    {
      question: 'How many on-site maintenance visits are included in the AMC?',
      answer: 'Visit frequency depends on your AMC tier. Our Standard IT AMC includes quarterly visits (4 per year). Premium AMC includes monthly visits (12 per year). Enterprise AMC includes bi-weekly visits (24 per year) with a dedicated on-site engineer. All visit reports are documented and shared with your team showing work completed, issues identified, and upcoming recommendations.',
    },
    {
      question: 'Is emergency IT support included in the AMC?',
      answer: 'Yes. All NOCKO IT AMC contracts include emergency support with guaranteed SLA response times. Critical incidents (server down, network failure, data loss) receive a 1-hour remote response and 2-hour on-site response for Dubai mainland locations. AMC clients are prioritized ahead of ad-hoc customers in our helpdesk queue. Emergency callouts during business hours are included in the AMC fee — after-hours emergency callouts are included in Premium and Enterprise tiers.',
    },
    {
      question: 'Which UAE locations do you cover for IT AMC services?',
      answer: 'We provide IT AMC services across all major UAE business locations: Dubai mainland, DIFC, DMCC, JLT, Business Bay, Downtown Dubai, DAFZA, JAFZA, Dubai Internet City, Dubai Media City, and Abu Dhabi (including ADGM and Masdar City). Our engineers are Dubai-based with same-day on-site capability across the emirate. For Abu Dhabi and Sharjah clients, on-site visits are scheduled within 24 hours for standard requests.',
    },
    {
      question: 'Does the IT AMC cover hardware replacement costs?',
      answer: 'The IT AMC covers labour, diagnosis, and coordination for hardware repairs. Physical hardware replacement parts are typically excluded from the AMC fee and billed at cost — however, NOCKO\'s purchasing team negotiates vendor pricing that is typically 15–25% below retail. For clients who want full hardware coverage including parts, we offer our Enterprise AMC with parts-inclusive options for servers and networking equipment.',
    },
    {
      question: 'Can you take over an existing AMC from another IT company?',
      answer: 'Yes. IT AMC transitions are straightforward. Our process: (1) infrastructure discovery and documentation audit during a 2-week parallel period, (2) handover of monitoring tools and access credentials, (3) review of open issues and warranty status, (4) AMC contract activation. Most transitions complete within 2–3 weeks with no service disruption. We frequently take over contracts from companies that have outgrown their previous IT provider.',
    },
    {
      question: 'What is included in the NOCKO IT AMC vs. what is excluded?',
      answer: 'Included in all NOCKO IT AMC tiers: preventive maintenance visits, emergency remote support, patch management (Windows, Office, critical security patches), hardware inventory tracking, and monthly infrastructure health reports. Excluded from standard AMC (available as add-ons): 24/7 NOC monitoring, cloud infrastructure management, cybersecurity operations (SOC/SIEM), physical hardware replacement parts, and new infrastructure projects. Ask us for a full scope table when requesting a quote.',
    },
  ],
  faqTitle: 'IT AMC Dubai — Frequently Asked Questions',
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
