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
    title: 'Network Infrastructure & Structured Cabling',
    subtitle: 'Deployment, Performance Optimization, and IT AMC',
    description: '',
  },
  intro:
    'The physical layer of your IT environment dictates the reliability of everything stacked above it. Poorly installed wiring causes unexplained latency, dropped VoIP calls, and agonizing deployment delays. A unified approach combining certified Structured Cabling with strict IT Annual Maintenance Contracts (AMC) guarantees long-term network performance. This guide covers how to deploy, optimize, and maintain enterprise infrastructure.',
  blocks: [
    {
      title: '1. Rapid Network Deployment and Structured Cabling',
      text: '<p>Structured cabling organizes the chaos of IT hardware. By establishing standardized connectivity through central patch panels and high-grade unshielded twisted pair (UTP) or fiber optics, businesses can rapidly open new offices without network bottlenecks.</p><p>Deploying Cat6 or Cat6A cabling with proper documentation drastically simplifies future expansions. Certified technicians map out cable pathways avoiding electrical interference, ensuring the backbone supports at least 10Gbps connectivity between core switches.</p>',
      list: [
        'Site surveys to determine optimal routing for fiber backbones and copper horizontals',
        'Installation of high-density patch panels, cable organizers, and rack labeling',
        'Deployment of Cat6/Cat6A cabling supporting advanced PoE (Power over Ethernet) devices',
        'Delivery of strict as-built documentation and Fluke test certification reports'
      ],
      image: '/images/services/cabling-deploy.png',
      imageAlt: 'Certified network cabling rack',
    },
    {
      title: '2. Network Performance Optimization',
      text: '<p>Intermittent connection drops and slow file transfers signal degrading infrastructure. Optimizing network performance starts at the switch level. By configuring intelligent Quality of Service (QoS) protocols, critical applications like Microsoft Teams voice traffic are prioritized over background Windows updates.</p><p>Hardware auditing identifies legacy 100Mbps bottlenecks. Upgrading to managed gigabit switches with robust spanning-tree setups ensures network loops are blocked and traffic routes efficiently.</p>',
      list: [
        'VLAN segmentation to separate IP cameras, guest Wi-Fi, and corporate data traffic',
        'Configuring Traffic Shaping and QoS to guarantee bandwidth for critical voice/video',
        'Upgrading legacy edge switches to eliminate throughput bottlenecks',
        'Identifying and resolving broadcast storms degrading subnet performance'
      ],
      image: '/images/services/cabling-performance.png',
      imageAlt: 'Network performance routing diagram',
    },
    {
      title: '3. Lifecycle Management and Comprehensive IT AMC',
      text: '<p>Structured cabling and hardware constitute massive capital expenditures. Without an IT Annual Maintenance Contract (AMC), dust, failing fans, and neglected software patches rapidly shorten hardware lifespans. IT AMC ensures your infrastructure is proactively maintained.</p><p>Comprehensive AMC agreements guarantee strict Service Level Agreements (SLAs). Quarterly maintenance visits check server rack thermals, reorganize untidy patch cables, and apply firmware updates to core routers.</p>',
      list: [
        'Routine hardware cleaning and preventative thermal scanning on dense server racks',
        'Priority hardware replacement managing RMAs on failing switches and endpoints',
        'Lifecycle tracking forecasting exactly when servers will require physical replacement',
        'Fixed annual costs (IT AMC) ensuring hardware preservation without surprise bills'
      ],
    },
    {
      title: '4. Ongoing Reliability with AMC Coverage',
      text: '<p>Reliability requires continuity. Engaging a single provider for both your initial structured cabling deployment and ongoing AMC ensures absolute accountability. When an access point fails, the tech team already possesses the cable maps and switch port configurations needed to resolve it instantly.</p><p>This holistic approach aligns physical infrastructure management with operational strategy, guaranteeing that your network scales effortlessly alongside your Dubai-based business.</p>',
      list: [
        'Unified accountability covering physical layer cabling and software layer routing',
        'Instant identification of issues via detailed pre-existing infrastructure documentation',
        'Streamlined troubleshooting since engineers understand the bespoke network architecture',
        'Adaptable IT coverage evolving as your headcount and office footprint expands'
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
