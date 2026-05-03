import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Certified Cat6A & Fiber Optic Engineering | NOCKO UAE',
  description: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
  alternates: {
    canonical: '/articles/structured-cabling-fiber-optic',
    languages: {
      'en-AE': '/articles/structured-cabling-fiber-optic',
      'ru-RU': '/ru/articles/structured-cabling-fiber-optic',
    },
  },
};

const articleData = {
  hero: {
    title: 'Certified Cat6A & Fiber Optic Engineering',
    subtitle: 'Physical cabling is the absolute foundation of your corporate network',
    description: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
  },
  intro: 'Physical cabling is the absolute foundation of your corporate network; a single faulty termination can cripple an entire department. Our certified engineers design and pull high-density Cat6, Cat6A, and OM3/OM4 Fiber Optic infrastructure specifically rated for the extreme temperatures of UAE industrial zones and the aesthetic requirements of modern Dubai offices.',
  blocks: [
    {
      title: 'Cat6A for High-Density Office Environments',
      text: '<p>Cat6A supports 10Gbps throughput up to 100 metres, making it the current standard for new commercial fit-outs in Dubai where 10G desktop and PoE++ (90W) requirements are increasingly common. The augmented specification requires tighter cable construction tolerances — particularly alien crosstalk (ANEXT) rejection — which makes installation technique critical. Poorly installed Cat6A that is kinked, over-bent, or terminated without maintaining twist right to the connector fails ANEXT testing.</p><p>For UAE industrial environments (Mussafah, JAFZA, KIZAD), we specify Cat6A in low-smoke zero-halogen (LSZH) jackets rated to 75°C continuous operation, as standard PVC-jacketed cable degrades in the temperatures found inside enclosed industrial ducts during UAE summer months.</p>',
      list: [
        'Cat6A supporting 10Gbps at 100 metres — future-proof for dense offices',
        'LSZH-jacketed cable for UAE industrial zones and high-temperature environments',
        'All terminations maintaining cable twist right to keystone jack',
        'PoE++ (802.3bt) rated infrastructure for high-power devices',
        'Fully colour-coded and labelled patch panels for operational clarity',
      ],
    },
    {
      title: 'Fibre Optic for Building Backbone and Long Runs',
      text: '<p>Copper Cat6A reaches its limit at 100 metres — for backbone runs between IDF (Intermediate Distribution Frame) closets and the MDF (Main Distribution Frame), or between buildings in a campus environment, fibre is the only practical solution. We install OM3 and OM4 multimode fibre for intra-building runs (supporting 40G and 100G over distances up to 150 metres on OM4) and OS2 single-mode for inter-building or campus runs over 300 metres.</p><p>All fibre is terminated with LC connectors and fusion-spliced at any mid-run join points — mechanical splices are not used on new installations as their higher insertion loss degrades available link budget. Terminations are tested with an insertion loss metre and verified against the ANSI/TIA-568 maximum channel loss specification.</p>',
    },
    {
      title: 'Cable Management and Labelling Standards',
      text: '<p>A cable installation without disciplined management and labelling creates an operational liability — the next engineer who needs to trace a fault wastes hours rather than minutes, and untidy server rooms in Dubai accumulate the dust that kills fans and drives faster in UAE conditions. We install D-ring cable managers on all patch panels, route cables in dedicated trays separated from power runs, and apply TIA-606 compliant machine-printed labels at both ends of every run, matching the as-built documentation delivered at project handover.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Should we install Cat6 or Cat6A in a new office fit-out?</strong><br/>A: For any fit-out in 2025 and beyond, Cat6A is the right choice. The incremental cost over Cat6 is 20–30% per node, but it future-proofs the installation for 10G to the desktop and high-power PoE++ devices for the next 20 years.',
        '<strong>Q: How do you run cables through a raised floor in a DIFC office?</strong><br/>A: We use under-floor cable trays and ensure cables are not run in the same tray as electrical power cables. All cable entry points into the tray are sealed with fire-rated foam after installation.',
        '<strong>Q: What is the difference between OM3 and OM4 fibre?</strong><br/>A: OM4 supports higher bandwidth over longer distances — 40G up to 150 metres versus 100 metres for OM3. For intra-building runs in most Dubai offices, OM3 is sufficient. For distances over 100 metres or future 100G requirements, OM4 is the correct specification.',
        '<strong>Q: Can you work in a live office without disrupting operations?</strong><br/>A: Yes — core cabling work (pulling cable, installing patch panels) is done out of hours or in phases by section. End-user disruption is typically limited to brief connection interruptions during final termination and testing.',
      ],
    },
  ],
};

export default function StructuredcablingfiberopticPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-09-10', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
