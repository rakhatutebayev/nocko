import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Structured Cabling Companies Dubai | Network Cabling UAE',
  description:
    'Leading structured cabling company in Dubai and UAE. Cat6, Cat6A, and fiber optic installation with Fluke certification. Network cabling for offices, data centers, and warehouses across DIFC, DMCC, JLT, Business Bay, and all UAE emirates.',
  keywords:
    'structured cabling companies in dubai, network cabling company in dubai, structured cabling dubai, structured cabling solutions dubai, structured cabling uae, structured cabling companies in uae, network cabling companies, networking companies in uae, cabling installation dubai',
  openGraph: {
    title: 'Structured Cabling Companies Dubai | Network Cabling UAE',
    description: 'Top-rated structured cabling company in Dubai. Cat6, Cat6A, and fiber optic cabling with Fluke certification across UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/structured-cabling',
    languages: {
      'en-AE': '/services/structured-cabling',
      'ru-RU': '/ru/services/structured-cabling',
      'x-default': '/services/structured-cabling',
    },
  },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Structured Cabling Companies in Dubai & UAE',
    subtitle: 'Cat6, Cat6A & Fiber Optic Installation with Fluke Certification — UAE Network Cabling Specialists',
    description:
      'NOCKO is a trusted structured cabling company in Dubai serving businesses, data centers, warehouses, and campuses across all UAE emirates. Our certified cabling engineers design, install, and certify Cat6, Cat6A, and fiber optic network infrastructure — every job backed by Fluke DSX-8000 testing and full documentation.',
  },
  firstSection: [
    {
      title: 'Fast Deployment Across All Emirates',
      text: 'Prebuilt cabling solutions and certified technicians allow you to deploy network infrastructure across Dubai, Abu Dhabi, Sharjah, and all Emirates. Our team handles site surveys, route planning, and compliance requirements.',
      link: '/articles/structured-cabling-fiber-optic',
      linkText: 'Infrastructure deployment guide',
      image: '/images/services/cabling-deploy.png',
      imageAlt: 'Network infrastructure deployment across UAE Emirates',
    },
    {
      title: 'Expert Installation & Fluke Testing',
      text: 'Every cable run is tested with Fluke certification equipment to industry standards. We provide detailed test reports for every point, giving you documented proof of performance that satisfies insurance and compliance requirements.',
      link: '/articles/structured-cabling-fluke-testing',
      linkText: 'Fluke testing standards',
    },
    {
      title: 'Network Lifecycle Management',
      text: 'From installation to expansion and eventual upgrades, we manage your network infrastructure throughout its lifecycle. Proactive monitoring and maintenance keeps your cabling performing at specification for years.',
      link: '/articles/structured-cabling-retrofitting',
      linkText: 'Lifecycle management',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Cat6, Cat6A, and fiber optic installation' },
    { icon: 'icon2', title: 'Fluke certified testing with full documentation' },
    { icon: 'icon3', title: 'TIA/EIA and ISO/IEC standards compliance' },
    { icon: 'icon4', title: 'WiFi heatmapping and access point optimization' },
    { icon: 'icon5', title: 'Complete cable management and labeling' },
  ],
  secondSection: [
    {
      title: 'Advanced Network Performance Solutions',
      text: 'Use our comprehensive network solutions to plan and execute infrastructure expansion strategies. Our tools help you scale from small office networks to enterprise-wide infrastructure across multiple UAE locations.',
      link: '/articles/structured-cabling-industrial',
      linkText: 'Enterprise network solutions',
      image: '/images/services/cabling-performance.png',
      imageAlt: 'Advanced network solutions for business growth',
    },
    {
      title: 'Multi-Type Cabling Management',
      text: 'Our flexible platform supports simultaneous management of Cat6, Cat6A, and fiber optic infrastructure. Transition to higher-speed networks without disruption and maximize your network performance.',
      link: '/articles/structured-cabling-wifi-heatmapping',
      linkText: 'WiFi and cabling integration',
    },
    {
      title: 'Physical Security Integration',
      text: 'Modern cabling infrastructure supports more than data. We integrate CCTV, access control, and intercom systems into your structured cabling framework — creating a unified physical security and data network.',
      link: '/articles/structured-cabling-physical-security',
      linkText: 'Security system integration',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Dubai-based certified cabling engineers' },
    { icon: '/images/benefits/time.png', text: 'Fast deployment across all UAE' },
    { icon: '/images/benefits/team.png', text: 'Fluke certified testing' },
    { icon: '/images/benefits/pricing.png', text: 'Competitive project pricing' },
    { icon: '/images/benefits/communication.png', text: 'Full documentation provided' },
  ],
  resources: [
    {
      type: 'CASE STUDY',
      title: 'Network Segmentation & FortiGate for a Dubai Group',
      description: 'How we re-architected a flat network into segmented VLANs with a FortiGate edge and Cisco core — isolating POS, guest and back-office traffic.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/network-segmentation',
      ctaText: 'Read the case study',
    },
    {
      type: 'CASE STUDY',
      title: 'How Scalini Transformed Network Infrastructure Across 5 Locations',
      description: 'Learn how Scalini restaurant chain upgraded their network infrastructure across 5 Dubai locations, reducing downtime by 95%.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/scalini',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to Structured Cabling in UAE',
      description: 'Essential guide covering Cat6 vs Cat6A, fiber optic options, compliance requirements, and best practices for network infrastructure.',
      image: '/images/services/cards/guide.png',
      url: '/articles/structured-cabling-guide',
      ctaText: 'Read Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Network Infrastructure Planning for Multi-Location Businesses',
      description: 'Learn how to plan and deploy network infrastructure across multiple UAE locations.',
      image: '/images/services/cards/multi.png',
      url: '/articles/structured-cabling-fiber-vs-cat6a',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Upgrade Your Network Infrastructure?',
    text: "Contact us for a free site survey and structured cabling proposal tailored to your space.",
    ctaText: 'Get Free Site Survey',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Managed IT Services', url: '/services/managed-it', description: 'Complete managed IT for your infrastructure.' },
    { title: 'IT Support', url: '/services/it-support', description: '24/7 IT support and maintenance services.' },
    { title: 'Cybersecurity', url: '/services/cybersecurity', description: 'Network security and endpoint protection.' },
  ],
  faq: [
    {
      question: 'What cabling standards do you install and certify in Dubai?',
      answer: 'We install and certify Cat6, Cat6A, and single/multi-mode fiber optic cabling to TIA/EIA-568 and ISO/IEC 11801 international standards. All cable runs are tested with Fluke DSX-8000 certification equipment and documented with per-point test reports. For data centers, we follow ANSI/TIA-942 standards. Our documentation package includes as-built drawings, test reports, and warranty certificates for insurance and compliance purposes.',
    },
    {
      question: 'How much does structured cabling cost in Dubai?',
      answer: 'Structured cabling pricing in Dubai depends on the number of data points, cable type, building access complexity, and conduit requirements. As a rough guide: Cat6 cabling for a standard office floor (50 data points) typically ranges from AED 8,000–18,000 including materials, installation, and Fluke testing. Fiber optic backbone runs and data center cabling are scoped individually. NOCKO provides free site surveys and detailed proposals — contact us for a quote.',
    },
    {
      question: 'Do you provide network cabling for data centers in UAE?',
      answer: 'Yes. We design and install structured cabling for data centers including high-density fiber patch panels, copper backbone cabling, overhead cable trays, and structured cable management systems that meet ANSI/TIA-942 standards. We work in colocation facilities across UAE including Equinix Dubai, du datacenters, and Etisalat data centers.',
    },
    {
      question: 'How long does a structured cabling project take?',
      answer: 'A standard office floor with 50 data points typically takes 2–3 working days including installation, testing, and documentation. A full floor of 150+ points takes 5–7 days. We plan all cabling projects around your business hours — most installation work can be done during weekends or evenings to minimize disruption. Cabling for a full office fit-out (500–1,000 points) is scoped as a multi-week project.',
    },
    {
      question: 'Can you cable buildings already occupied or during a live office renovation?',
      answer: 'Yes. We regularly complete cabling projects in occupied offices. Our engineers work in designated zones with protective sheeting, and we schedule noisy work (core drilling, ceiling access) during agreed quiet hours. For occupied buildings, we conduct a pre-survey to map existing infrastructure and plan routes that minimize disruption.',
    },
    {
      question: 'Do you cover all UAE emirates for structured cabling projects?',
      answer: 'Yes. NOCKO provides structured cabling installation across all UAE emirates — Dubai (including all free zones: DIFC, DMCC, DAFZA, JAFZA, DIC, DMC), Abu Dhabi (ADGM, Khalifa Industrial Zone, Masdar City), Sharjah, Ajman, Ras Al Khaimah, and Fujairah. For large projects in northern emirates, our teams are mobilized from our Dubai base.',
    },
    {
      question: 'What is included in your structured cabling warranty?',
      answer: 'All NOCKO structured cabling installations come with a 15-year system warranty on Cat6A installations when using approved manufacturer components (Panduit, Belden, or CommScope). This warranty covers cabling performance and component defects. The warranty is voided if third-party contractors modify the cabling without authorization. Fluke DSX-8000 certification reports are provided as warranty documentation.',
    },
  ],
  faqTitle: 'Structured Cabling Dubai — Frequently Asked Questions',
};

export default async function StructuredCablingPage() {
  const service = await getService('structured-cabling');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Structured Cabling',
          name: 'Structured Cabling Services in Dubai & UAE',
          description: 'Cat6A and fiber optic structured cabling design, installation, and Fluke-certified testing for UAE offices.',
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Structured Cabling' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
      />
      <Footer />
    </>
  );
}
