import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Network Infrastructure & Structured Cabling Guide | NOCKO UAE',
  description:
    'A complete guide to structured cabling, network infrastructure deployment, lifecycle management, and performance optimization for businesses in Dubai and the UAE.',
  keywords:
    'structured cabling Dubai, network infrastructure UAE, Cat6A deployment, network lifecycle management, IT AMC hardware',
  openGraph: {
    title: 'Network Infrastructure & Structured Cabling Guide | NOCKO UAE',
    description:
      'A complete guide to structured cabling, deployment, and performance optimization for businesses in the UAE.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/structured-cabling-guide',
  },
};

const articleData = {
  hero: {
    title: 'Network Infrastructure & Structured Cabling in the UAE',
    subtitle: 'Deployment, Fluke Certification, and Physical Layer Optimization',
    description: '',
  },
  intro:
    'The physical layer of your IT environment dictates the reliability of everything stacked above it. In the UAE environment, physical heat, dust in industrial zones, and dense concrete in modern high-rises pose significant challenges. Poorly installed wiring causes unexplained latency, dropped VoIP calls, and agonizing deployment delays. A unified approach combining certified Structured Cabling with strict IT Annual Maintenance Contracts (AMC) guarantees long-term network performance. This engineering guide covers how to deploy, certify, and optimize enterprise infrastructure across Dubai and Abu Dhabi.',
  blocks: [
    {
      title: '1. Industrial vs. Corporate Cabling (JAFZA vs. Business Bay)',
      text: '<p>Deploying infrastructure in a high-rise corporate office in DIFC is fundamentally different from cabling a massive logistics warehouse in JAFZA or DIP. In corporate environments, the priority is density—running thousands of Cat6A cables tightly through raised floors to support Power over Ethernet (PoE) devices like VoIP phones and Wi-Fi 6 access points without causing cross-talk.</p><p>Conversely, industrial environments require heavy-duty deployment. Operating temperatures and electromagnetic interference (EMI) from factory equipment mean that standard Unshielded Twisted Pair (UTP) will fail. In these environments, we deploy Shielded Twisted Pair (STP) or armored OM4 fiber optics, suspended in robust hot-dip galvanized cable trays to ensure absolute longevity.</p>',
      list: [
        'Site surveys to document drop lengths (ensuring no copper run exceeds the strict 90-meter limit).',
        'Installation of high-density patch panels, cable management arms (CMA), and rigorous port labeling.',
        'Deployment of Cat6A cabling supporting advanced 802.3bt PoE++ (up to 90W) for PTZ cameras and smart lighting.',
        'Delivery of strict as-built documentation and Fluke DSX-8000 test certification reports.'
      ],
      image: '/images/services/cabling-deploy.png',
      imageAlt: 'Certified network cabling rack',
    },
    {
      title: '2. Fiber Optic Backbones and Core Routing',
      text: '<p>For multi-floor enterprise deployments or campus environments connecting multiple buildings, copper simply cannot handle the distance or bandwidth. Fiber optic backbones represent the core interstate highway of your corporate data.</p><p>We specialize in both Single-mode (for multi-kilometer distances between isolated campus buildings) and Multi-mode (for inter-rack 10G or 40G datacenter connections) fiber splicing. Once the physical layer is flawless, optimizing network performance involves configuring intelligent Quality of Service (QoS), ensuring critical traffic (like SAP or Microsoft Teams) is never choked by background Windows updates.</p>',
      list: [
        'Fusion splicing for near-zero db signal loss across all OM3/OM4 fiber connections.',
        'VLAN segmentation to cryptographically separate IP cameras, guest Wi-Fi, and corporate HR traffic.',
        'Configuring Traffic Shaping and QoS on edge switches to guarantee bandwidth for critical voice/video.',
        'Upgrading legacy edge switches with 10Gbps SFP+ uplinks to eliminate throughput bottlenecks.'
      ],
      image: '/images/services/cabling-performance.png',
      imageAlt: 'Network performance routing diagram',
    },
    {
      title: '3. Datacenter Thermals and Rack Lifecycle Management',
      text: '<p>Structured cabling and hardware constitute massive capital expenditures. Without an IT Annual Maintenance Contract (AMC), Dubai’s ubiquitous fine dust, failing server fans, and neglected software patches rapidly shorten hardware lifespans. Proper cable management directly impacts datacenter thermals—the "spaghetti" of unmanaged cables blocks server exhaust fans, causing CPUS to thermal throttle and crash.</p><p>Comprehensive AMC agreements guarantee strict physical maintenance. Quarterly physical visits check server rack thermals using infrared scanning, reorganize untidy patch cables restoring laminar airflow, and apply firmware updates to core routers before vulnerabilities are exploited.</p>',
      list: [
        'Implementation of hot-aisle/cold-aisle containment strategies in local server rooms.',
        'Routine hardware vacuuming and preventative thermal scanning on dense, high-load router racks.',
        'Priority hardware replacement managing manufacturer RMAs on failing Dell/HP endpoints.',
        'Fixed annual AMC costs allowing CFOs to precisely forecast hardware replacement without surprise CAPEX.'
      ],
    },
    {
      title: '4. Ongoing Reliability with Single-Vendor AMC Coverage',
      text: '<p>Reliability requires continuity. Engaging a single IT provider for both your initial structured cabling deployment and ongoing managed AMC ensures absolute accountability. When an access point on the 40th floor fails, the technical NOC team already possesses the exact cable maps, port numbers, and switch configurations needed to resolve it instantly without sending a tech blindly into the ceiling.</p><p>This holistic approach aligns physical infrastructure management with your operational digital strategy, guaranteeing that your network backbone scales effortlessly as your company expands across the GCC.</p>',
      list: [
        'Unified accountability covering both the physical layer (cables) and software layer (routing/switching).',
        'Instant identification of issues via detailed pre-existing 2D/3D infrastructure documentation.',
        'Streamlined troubleshooting since engineers inherently understand the bespoke network architecture.',
        'Adaptable IT cabling coverage scaling dynamically as your headcount and office footprint expands.'
      ],
    },
  ],
};

export default function StructuredCablingGuidePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';
  const currDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: articleData.hero.title,
          description: metadata.description as string,
          datePublished: currDate,
          dateModified: currDate,
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo-white.svg`,
            },
          },
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: 'Network & Structured Cabling Guide' },
            ]}
          />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
