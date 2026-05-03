import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Enterprise Wi-Fi Heatmapping Solutions | NOCKO UAE',
  description: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
  alternates: {
    canonical: '/articles/structured-cabling-wifi-heatmapping',
    languages: {
      'en-AE': '/articles/structured-cabling-wifi-heatmapping',
      'ru-RU': '/ru/articles/structured-cabling-wifi-heatmapping',
    },
  },
};

const articleData = {
  hero: {
    title: 'Enterprise Wi-Fi Heatmapping Solutions',
    subtitle: 'Stop guessing where to place access points.',
    description: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
  },
  intro: 'Stop guessing where to place access points. Using industry-standard Ekahau mapping software, we conduct predictive and physical RF heatmapping of your floorplan. We account for glass partitions in Business Bay and concrete pillars in Mussafah, guaranteeing absolute zero Wi-Fi dead zones across your enterprise.',
  blocks: [
    {
      title: 'Predictive Survey Before Installation',
      text: '<p>Before installing a single access point, we import your architectural floor plan into Ekahau Site Survey and run a predictive RF simulation modelling signal propagation through your specific materials — glass partition attenuation (typically 3dB), concrete pillar blockage, and metal ceiling tracks common in Business Bay and DIFC fit-outs. This produces an optimal access point placement map with predicted signal strength at every desk position.</p><p>For large open-plan floors common in Dubai tech parks and co-working spaces, the simulation also models channel contention between adjacent APs, spacing placements to minimise co-channel interference that causes slow Wi-Fi even in areas with strong signal.</p>',
      list: [
        'Floor plan import and Ekahau predictive RF simulation',
        'Material attenuation modelling: glass, concrete, metal, drywall',
        'Channel contention analysis to prevent co-channel interference',
        'Access point placement map with predicted signal strength per desk',
        'Coverage report meeting -65dBm minimum signal strength throughout',
      ],
    },
    {
      title: 'Physical Validation Survey',
      text: '<p>After installation, we conduct a physical walk survey with a Wi-Fi adapter and Ekahau Sidekick, walking every square metre of the floor plan to record actual signal strength, channel utilisation, and data rates. The resulting heatmap is overlaid on the floor plan and delivered to you as a PDF, documenting coverage quality down to individual meeting rooms and corner desks.</p><p>Any areas falling below the -65dBm minimum for corporate use (the threshold required for reliable 802.11ac voice calls and video conferencing) are flagged immediately and remediated by adjusting AP transmit power or adding an additional AP — included within the project scope.</p>',
    },
    {
      title: 'Access Point Selection and Configuration',
      text: '<p>Not all access points are suitable for UAE office environments. Consumer-grade APs (TP-Link, Netgear home units) lack the radio management capabilities needed for multi-AP deployments — they do not enforce client band steering, do not support 802.11r fast roaming for VoIP users walking between floors, and cannot report per-client association data needed for troubleshooting. We deploy Cisco Catalyst (Meraki), Aruba, or Ubiquiti UniFi enterprise APs sized to your client density, with centralised management for policy and firmware updates.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Do we need a Wi-Fi heatmap for a small office of 20 people?</strong><br/>A: For open-plan offices under 200 sqm, an experienced engineer can place APs correctly without a formal Ekahau survey. For larger offices, multi-floor buildings, or offices with irregular layouts and construction materials, a predictive survey prevents expensive rework.',
        '<strong>Q: How long does a physical validation survey take?</strong><br/>A: A 500–1,000 sqm floor takes approximately 3–4 hours to walk survey and post-process results. A full building with multiple floors is typically completed in 1 day.',
        '<strong>Q: Why does our current Wi-Fi have dead zones even though we have many APs?</strong><br/>A: More APs does not mean better Wi-Fi — poorly placed or misconfigured APs cause co-channel interference that degrades performance. The heatmap survey identifies exactly which APs need repositioning or reconfiguration.',
        '<strong>Q: Can you survey outdoor areas like terraces or car parks in Dubai?</strong><br/>A: Yes — we survey outdoor areas using IP67-rated outdoor access points and account for additional signal absorption from direct sunlight heating, which affects some AP radios in UAE summer conditions.',
      ],
    },
  ],
};

export default function StructuredcablingwifiheatmappingPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-04-30', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
