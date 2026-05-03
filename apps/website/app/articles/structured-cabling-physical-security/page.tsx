import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Access Control and physical Security | NOCKO UAE',
  description: 'Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.',
  alternates: {
    canonical: '/articles/structured-cabling-physical-security',
    languages: {
      'en-AE': '/articles/structured-cabling-physical-security',
      'ru-RU': '/ru/articles/structured-cabling-physical-security',
    },
  },
};

const articleData = {
  hero: {
    title: 'Access Control and physical Security',
    subtitle: 'Structured cabling extends beyond computers.',
    description: 'Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.',
  },
  intro: 'Structured cabling extends beyond computers. We deploy the Unified Physical Layer for your office, running dedicated PoE (Power over Ethernet) infrastructure for high-resolution CCTV IP cameras, biometric Access Control Systems, and VoIP telephony grids on a single, seamlessly integrated network.',
  blocks: [
    {
      title: 'PoE Infrastructure for IP Cameras and Access Control',
      text: '<p>Modern IP CCTV cameras and biometric door readers are powered entirely over the network cable using PoE (Power over Ethernet). This eliminates separate power runs to every camera location — a significant cost saving in UAE commercial fit-outs where electrical work by licensed contractors carries substantial costs. We specify the correct PoE budget per switch port: standard 802.3af (15.4W) for basic cameras, 802.3at (30W) for PTZ cameras with heaters, and 802.3bt (60W or 90W) for high-resolution thermal cameras used at sensitive sites.</p><p>We design the cabling topology to ensure every camera and access control reader is within the 100-metre Cat6 limit from the nearest PoE switch, placing IDF switches strategically to avoid exceeding the distance limit — a common oversight in large floor plate installations.</p>',
      list: [
        'PoE-powered IP cameras eliminating separate electrical runs',
        'PoE budget calculation per switch to prevent port overloading',
        'Access control panel cabling with dedicated pairs for door strike and REX',
        'VoIP telephone infrastructure sharing the structured cabling plant',
        'Separate VLAN segmentation for cameras, access control, and VoIP traffic',
      ],
    },
    {
      title: 'Access Control System Integration',
      text: '<p>Biometric and card-based access control systems require more than a single PoE drop per door — the typical door controller requires a Cat6 run to the card reader, a connection to the magnetic lock or electric strike (which carries 12V DC over separate pairs), and sometimes a connection to a request-to-exit (REX) sensor. We pre-plan all these runs during the structured cabling design phase so they are installed neatly in conduit rather than added as an afterthought with surface-run cables.</p><p>We partner with access control vendors including Suprema, HID, and Honeywell, whose systems are commonly deployed in Dubai free zone offices, DIFC, and hospitality venues. Our cabling installations are compatible with the manufacturer\'s installation specifications, avoiding the most common cause of access control failures — insufficient cable quality or length.</p>',
    },
    {
      title: 'CCTV Storage and Retention Design',
      text: '<p>IP cameras generate substantial storage volumes — a single 4MP camera at 15fps with H.265 compression requires approximately 40–60GB per day. For a 20-camera system with 30-day retention, that is 24–36TB of storage. We calculate storage requirements accurately and specify a NVR or server with appropriate RAID redundancy, located in the server room with adequate cooling and connected via the structured cabling backbone.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Can existing Cat5e cabling support IP cameras and access control?</strong><br/>A: Cat5e supports PoE and gigabit ethernet, so it is technically compatible with most IP cameras and access control systems. The question is whether the existing installation has sufficient cable runs and patch panel documentation to integrate cleanly.',
        '<strong>Q: Do you supply the cameras and access control hardware, or just the cabling?</strong><br/>A: We provide both — structured cabling installation plus supply and integration of the IP camera system and access control hardware, giving you a single point of responsibility for the complete physical security layer.',
        '<strong>Q: How many cameras can one PoE switch support?</strong><br/>A: A 24-port 802.3af switch with 370W PoE budget supports approximately 24 standard cameras. For high-power PTZ cameras, the count per switch is lower. We calculate the PoE budget during design to ensure the switch is not overloaded.',
        '<strong>Q: Is CCTV footage storage subject to UAE data protection law?</strong><br/>A: Yes — the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) covers CCTV footage as personal data. We configure retention periods and access controls to support compliance, though legal advice on your specific obligations should come from a qualified UAE legal practitioner.',
      ],
    },
  ],
};

export default function StructuredcablingphysicalsecurityPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-05-05', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
