import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'On-Site IT Dispatch Services Dubai | NOCKO UAE',
  description: 'Certified field technicians dispatched physically for hardware failures. We guarantee 2-hour Priority-1 arrival across DIFC, JLT, and business hubs in Dubai.',
  alternates: {
    canonical: '/articles/it-support-onsite',
  },
};

const articleData = {
  hero: {
    title: 'Physical On-Site IT Dispatch',
    subtitle: 'Rapid Response Field Technicians for Hardware Criticalities',
    description: 'When remote diagnostics hit a physical barrier, our certified mobile technicians respond within hours, not days.',
  },
  intro: 'Software configuration can be resolved remotely, but physical hardware has limitations. When a core fiber-optic switch fails in your server rack, or when a high-capacity printer jams permanently in a busy logistics hub, an engineer must be physically present. NOCKO maintains a dedicated fleet of L2/L3 field technicians stationed strategically across Dubai to ensure your physical hardware is replaced or repaired without devastating downtime.',
  blocks: [
    {
      title: 'Our Strategic Dispatch Zones',
      text: '<p>Traffic and geography should not dictate your uptime. Because we are headquartered strategically in Dubai, we map our dispatch protocols to bypass common transit bottlenecks. This allows us to guarantee strict arrival times:</p>',
      list: [
        '<strong>1-Hour Zones:</strong> DIFC, Business Bay, Downtown Dubai, and Sheikh Zayed Road corridors for hyper-critical financial and corporate clients.',
        '<strong>2-Hour Zones:</strong> JLT, Dubai Marina, Internet/Media City, and DMCC for tech and media enterprises.',
        '<strong>Outer Industrial Zones:</strong> JAFZA, Dubai South, and DIP where logistics hubs require immediate scanner, warehouse Wi-Fi, and rugged-device replacements.'
      ]
    },
    {
      title: 'Deskside Executive Support (White-Glove Service)',
      text: '<p>C-suite executives operate on zero-tolerance timelines. For critical board members and CEOs, we offer "white-glove" deskside support. A dedicated senior engineer will arrive physically in the boardroom to set up secure presentation equipment, configure mobile device syncing, or troubleshoot high-priority VIP hardware issues securely and discreetly.</p>'
    },
    {
      title: 'Hardware Inventory and Sparing',
      text: '<p>We do not wait for external suppliers to ship parts when disaster strikes. As part of our Managed IT agreements, we maintain localized spare-parts inventory for critical infrastructure. If your firewall appliances or primary switches fail, our field dispatch teams arrive on-site carrying pre-configured replacement hardware to swap instantly.</p>'
    }
  ],
};

export default function ITSupportOnsitePage() {
  const currDate = new Date().toISOString().split('T')[0];
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: currDate }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: 'On-Site Dispatch' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
