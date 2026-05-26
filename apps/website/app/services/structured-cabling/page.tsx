import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Structured Cabling Services in Dubai | Network Infrastructure & Structured Cabling UAE | NOCKO',
  description:
    'Professional structured cabling services in Dubai, UAE. Expert Cat6, Cat6A and fiber optic installation, testing, and certification. Reliable network infrastructure for businesses in DIFC, JLT and Business Bay.',
  keywords:
    'structured cabling Dubai, network cabling UAE, Cat6 installation Dubai, fiber optic cabling UAE, network infrastructure Dubai, data cabling Dubai',
  openGraph: {
    title: 'Structured Cabling Services in Dubai | Network Infrastructure UAE | NOCKO',
    description: 'Professional structured cabling and network infrastructure solutions in Dubai and UAE.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: { canonical: '/services/structured-cabling' },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Professional Structured Cabling & Network Infrastructure in Dubai',
    subtitle: 'Cat6/Cat6A, Fiber Optic Installation, Testing & Certification Across UAE',
    description:
      'Build the network foundation your business depends on. Our certified cabling engineers design and install high-performance structured cabling systems that support your current needs and future growth across Dubai and the UAE.',
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
    { question: 'What cabling standards do you work with?', answer: 'We install and certify Cat6, Cat6A, and single/multi-mode fiber optic cabling to TIA/EIA-568 and ISO/IEC 11801 standards. All work is documented with Fluke DSX-8000 certification.' },
    { question: 'How long does a typical cabling project take?', answer: 'A standard office floor (50 points) takes 1-2 days. Larger projects are scoped individually. We provide detailed project timelines during the proposal phase.' },
    { question: 'Do you provide cabling for data centers?', answer: 'Yes. We design and install structured cabling for data centers including high-density fiber, copper backbone cabling, and cable management systems that meet ANSI/TIA-942 standards.' },
  ],
  faqTitle: 'Structured Cabling FAQs',
};

export default async function StructuredCablingPage() {
  const service = await getService('structured-cabling');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://nocko.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Structured Cabling', item: 'https://nocko.com/services/structured-cabling' },
          ],
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
