import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Logistics Warehouses to Corporate Hubs | NOCKO UAE',
  description: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
  alternates: {
    canonical: '/articles/structured-cabling-industrial',
    languages: {
      'en-AE': '/articles/structured-cabling-industrial',
      'ru-RU': '/ru/articles/structured-cabling-industrial',
    },
  },
};

const articleData = {
  hero: {
    title: 'Logistics Warehouses to Corporate Hubs',
    subtitle: 'Tailored infrastructure environments across all industries.',
    description: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
  },
  intro: 'A massive logistics facility in JAFZA requires a vastly different physical layer than a glass-walled financial office in DIFC. We engineer tailored environments: deploying armored fiber for sprawling industrial floors, and aesthetic, under-floor plenum cabling for high-end corporate boardrooms.',
  blocks: [
    {
      title: 'Industrial Environments: JAFZA, KIZAD, and Mussafah',
      text: '<p>A logistics warehouse or manufacturing facility in JAFZA or KIZAD presents cabling challenges that simply do not exist in a glass-walled DIFC office. Cable runs exceed 200 metres across warehouse floors, requiring fibre backbone between distribution points. Forklift traffic requires cables in steel conduit or under raised cable trays rather than surface-mounted trunking. Dust and humidity in some facilities mandate IP67-rated patch panels and connectors.</p><p>We specify industrial-grade ethernet switches (Cisco IE, Moxa, or Hirschmann) rated for extended temperature ranges and DIN rail mounting where data points are inside electrical panels or machinery enclosures. Standard office-grade switches fail within months in uncontrolled industrial environments with ambient temperatures exceeding 45°C in UAE summer.</p>',
      list: [
        'Fibre optic backbone for spans exceeding 100 metres on warehouse floors',
        'Steel conduit protection for cables in vehicle traffic areas',
        'Industrial-grade switches rated for extended temperature ranges',
        'IP67-rated outdoor and dusty-environment patch enclosures',
        'ATEX-rated equipment for facilities handling flammable materials',
      ],
    },
    {
      title: 'Corporate and Financial Office Environments',
      text: '<p>DIFC and ADGM offices require a very different approach — concealed infrastructure, aesthetic cable management, and minimal visible disruption to finished interiors. We install under-raised-floor plenum cabling in buildings with access floors, route cables through ceiling voids with professional fire-stopping at all penetration points, and use slim-profile surface trunking matched to the office interior finish where concealment is not possible.</p><p>Server room buildouts in corporate offices follow the TIA-942 data centre standards with hot/cold aisle separation for racks, dedicated cooling supply air through raised floor tiles, and structured labelling of all patch connections that allows any engineer to trace any connection in under 60 seconds.</p>',
    },
    {
      title: 'Hospitality and Retail Environments',
      text: '<p>Hotels and retail fit-outs in Dubai Mall and other major centres require cabling that is invisible, installed without damage to high-value finishes, and integrated with building management systems. We work within the specific constraints of occupied retail environments and hospitality properties, including coordinating work during non-trading hours and protecting marble, glass, and fitted furniture from installation activity.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Can standard Cat6A cable be used in a JAFZA warehouse?</strong><br/>A: Standard PVC-jacketed Cat6A degrades at sustained temperatures above 60°C and in UV-exposed outdoor sections. We specify LSZH or PE-jacketed cable rated for the specific temperature and exposure conditions of each section of the installation.',
        '<strong>Q: What connectivity standard applies to industrial automation networks?</strong><br/>A: Industrial automation uses PROFINET, EtherNet/IP, or Modbus TCP over standard ethernet. We design the passive infrastructure to support these protocols, but the active industrial network devices are typically supplied by the automation system vendor.',
        '<strong>Q: How do you handle cabling in a building that is still under fit-out?</strong><br/>A: We coordinate with the main contractor and MEP consultant to install cable containment (trays, conduit) during the early fit-out stage before ceilings close, then pull and terminate cables during the final phase. This saves significant cost versus installing after the ceiling is complete.',
        '<strong>Q: Do you handle cabling in UAE free zones outside Dubai (Sharjah, Abu Dhabi)?</strong><br/>A: Yes — we work across all UAE emirates including KIZAD in Abu Dhabi, SAIF Zone in Sharjah, and RAKIA in Ras Al Khaimah.',
      ],
    },
  ],
};

export default function StructuredcablingindustrialPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-08-19', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Structured Cabling', href: '/services/structured-cabling' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
