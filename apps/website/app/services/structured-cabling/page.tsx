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
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Structured Cabling Services in Dubai | Network Infrastructure & Structured Cabling UAE | NOCKO',
  description:
    'Professional structured cabling services in Dubai, UAE. Expert Cat6, Cat6A and fiber optic installation, testing, and certification. Reliable network infrastructure for businesses in DIFC, JLT and Business Bay.',
  keywords:
    'structured cabling Dubai, network cabling UAE, Cat6 installation Dubai, fiber optic cabling UAE, network infrastructure Dubai, data cabling Dubai',
  openGraph: {
    title: 'Structured Cabling Services in Dubai | Network Infrastructure & Structured Cabling UAE | NOCKO',
    description:
      'Professional structured cabling and network infrastructure solutions in Dubai and UAE. Cat6/Cat6A and fiber optic certification.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/structured-cabling',
  },
};

// Static content with High Information Gain and UAE Localized Data
const firstSection = [
  {
    title: 'Certified Cat6A & Fiber Optic Engineering',
    text: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
    link: '/articles/structured-cabling-fiber-optic',
    linkText: 'Read our Infrastructure Guide',
    image: '/images/services/cabling-deploy.png',
    imageAlt: 'Data Center cabling in UAE',
  },
  {
    title: 'Fluke Testing and 25-Year Warranties',
    text: 'We do not guess on cable integrity. Every single node we deploy is rigorously tested and validated using Fluke DSX CableAnalyzers. This empirical verification guarantees that your internal network can handle 10Gbps throughput without packet loss, allowing us to provide manufacturer-backed 25-year performance warranties on our corporate installations.',
    link: '/articles/structured-cabling-fluke-testing',
    linkText: 'Understand Fluke Certification',
  },
  {
    title: 'Server Room & IDFs Retrofitting',
    text: "Inherited a disastrous, disorganized server room in your new office? We specialize in live cabinet retrofitting and 'spaghetti' cleanups. We trace, label, and re-patch your entire server rack with precise cable management channels, restoring airflow to your switches and transforming a fire hazard into an organized, maintainable IT environment.",
    link: '/articles/structured-cabling-retrofitting',
    linkText: 'Explore Server Maintenance',
  },
];

const features = [
  {
    icon: 'icon1',
    title: 'Fluke Networks Certified DSX Testing & Documentation',
  },
  {
    icon: 'icon2',
    title: 'Cat6, Cat6A, and Single/Multi-mode Fiber Splicing',
  },
  {
    icon: 'icon3',
    title: 'Live Server Rack Retrofitting without Business Downtime',
  },
  {
    icon: 'icon4',
    title: 'Enterprise Wi-Fi 6/7 Predictive Heatmapping (Ekahau)',
  },
  {
    icon: 'icon5',
    title: 'Manufacturer-backed 25-Year Infrastructure Warranties',
  },
];

const secondSection = [
  {
    title: 'Logistics Warehouses to Corporate Hubs',
    text: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
    link: '/articles/structured-cabling-industrial',
    linkText: 'Industrial vs Corporate Cabling',
    image: '/images/services/cabling-performance.png',
    imageAlt: 'Industrial fiber optic splicing UAE',
  },
  {
    title: 'Enterprise Wi-Fi Heatmapping Solutions',
    text: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
    link: '/articles/structured-cabling-wifi-heatmapping',
    linkText: 'Explore Wi-Fi Solutions',
  },
  {
    title: 'Access Control and physical Security',
    text: "Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.",
    link: '/articles/structured-cabling-physical-security',
    linkText: 'Secure Your Physical Perimeter',
  },
];

const benefits = [
  {
    icon: '/images/benefits/global.png',
    text: 'Fluke Network <br> Certified Testing',
  },
  {
    icon: '/images/benefits/time.png',
    text: 'Live Rack <br> Cleanups',
  },
  {
    icon: '/images/benefits/team.png',
    text: 'Fiber Optic <br> Fusion Splicing',
  },
  {
    icon: '/images/benefits/pricing.png',
    text: '25-Year <br> Hardware Warranties',
  },
  {
    icon: '/images/benefits/communication.png',
    text: 'Comprehensive <br> Node Documentation',
  },
];

const resources = [
  {
    type: 'CASE STUDY',
    title: 'How Scalini Standardized Network Infrastructure Across 5 UAE Locations',
    description:
      'Scalini restaurant group unified network infrastructure across 5 locations with certified Cat6A cabling, centralized switching, and 99.9% uptime.',
    image: '/images/services/cards/book.png',
    url: '/case-studies/scalini',
    ctaText: 'Read Case Study',
    imageAlt: 'Server rack retrofit UAE',
  },
  {
    type: 'GUIDE',
    title: 'The Blueprint for Corporate Infrastructure',
    description:
      'A deep dive into Cat6 vs Cat6A, the necessity of Fluke certification, and managing physical layer deployments.',
    image: '/images/services/cards/guide.png',
    url: '/articles/structured-cabling-fiber-vs-cat6a',
    ctaText: 'Download the Guide',
    imageAlt: 'Structured cabling guide for UAE businesses',
  },
  {
    type: 'ARTICLE',
    title: 'Why standard Wi-Fi fails in Offices',
    description:
      'Understand how RF interference and physical materials block consumer routers, and why Ekahau heatmapping is mandatory.',
    image: '/images/services/cards/multi.png',
    url: '/articles/structured-cabling-fluke-importance',
    ctaText: 'Read Wi-Fi Article',
    imageAlt: 'Ekahau predictive heatmap',
  },
];

const relatedServices = [
  {
    title: 'Managed IT Services',
    url: '/services/managed-it',
    description: 'We can manage the network switches connected to your new cabling.',
  },
  {
    title: 'IT Helpdesk Support',
    url: '/services/it-support',
    description: 'Instant remote support for end-users on your network.',
  },
  {
    title: 'Strategic IT Consulting',
    url: '/services/it-consulting',
    description: 'Complete office relocation and technology roadmapping.',
  },
];

const geoContent = {
  emirates: [
    { name: 'Dubai', hubs: ['DIFC', 'Business Bay', 'JAFZA', 'DSO', 'DMCC'] },
    { name: 'Abu Dhabi', hubs: ['ADGM', 'Mussafah Industrial', 'KIZAD'] },
    { name: 'Sharjah', hubs: ['SAIF Zone', 'Hamriyah Free Zone'] },
    { name: 'Ajman', hubs: [] },
    { name: 'Fujairah', hubs: [] },
    { name: 'Ras Al Khaimah', hubs: [] },
    { name: 'Umm Al Quwain', hubs: [] }
  ],
  terms: ['Structured Cabling Dubai', 'Cat6A Certification UAE', 'Server Rack Cleanup Dubai', 'Ekahau Wi-Fi Heatmapping'],
};

export default function StructuredCablingPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          '@id': 'https://nocko.com/services/structured-cabling#service',
          name: 'Structured Cabling & Network Infrastructure Dubai',
          serviceType: 'Structured Cabling',
          description: 'Professional structured cabling, Cat6/Cat6A/fiber optic installation, and network infrastructure for businesses in Dubai and UAE.',
          url: 'https://nocko.com/services/structured-cabling',
          provider: { '@type': 'Organization', '@id': 'https://nocko.com/#localbusiness', name: 'NOCKO Information Technology' },
          areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'City', name: 'Sharjah' }],
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        data={{ itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nocko.com/services' },
          { '@type': 'ListItem', position: 3, name: 'Structured Cabling', item: 'https://nocko.com/services/structured-cabling' },
        ]}}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title="Structured Cabling Dubai | Network Infrastructure & Structured Cabling UAE"
          subtitle="Professional Cat6, Cat6A & Fiber Optic Installation for Businesses"
          description="Get reliable structured cabling and network infrastructure solutions for your office in Dubai and across the UAE. We provide certified installation, testing, and lifecycle management in DIFC, JLT, and Business Bay."
        />

        <ServiceContentEnhanced blocks={firstSection} />
        <ServiceFeatures features={features} />
        <ServiceContentEnhanced modifier="second" blocks={secondSection} />
        <ServiceBenefits benefits={benefits} />
        
        <ServiceGeo 
          title="Professional Network Cabling Across UAE"
          description="NOCKO provides certified structured cabling services for corporate offices and data centers in Dubai, Abu Dhabi, Sharjah, and all Emirates."
          emirates={geoContent.emirates}
          terms={geoContent.terms}
          footerNote="Certified Infrastructure"
        />

        <ServiceCTA
          title="Ready to Upgrade Your Network Infrastructure?"
          text="Contact us for a free consultation and let's discuss your structured cabling needs."
          ctaText="Get Free Consultation"
          ctaUrl="#contact"
        />
        <RelatedServices
          title="Related Services"
          subtitle="Explore other IT infrastructure services we offer"
          services={relatedServices}
        />
      </main>
      <Footer />
    </>
  );
}

