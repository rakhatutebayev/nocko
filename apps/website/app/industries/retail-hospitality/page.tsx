import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Solutions for Retail & Hospitality | NOCKO UAE',
  description:
    'Reliable IT solutions for retail and hospitality businesses in UAE. POS systems, guest Wi-Fi, network infrastructure, digital signage, and 24/7 support for stores, restaurants, and hotels.',
  keywords:
    'IT solutions retail UAE, hospitality IT services Dubai, POS systems UAE, restaurant IT infrastructure, hotel network infrastructure',
  openGraph: {
    title: 'IT Solutions for Retail & Hospitality | NOCKO UAE',
    description:
      'Reliable IT solutions for retail and hospitality businesses in UAE. POS systems, guest Wi-Fi, and 24/7 support.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/industries/retail-hospitality',
  },
};

const industryData = {
  hero: {
    title: 'IT Solutions for Retail & Hospitality',
    subtitle: 'Reliable Technology for Stores, Restaurants, Hotels, and Entertainment Venues',
    description: '',
  },
  intro:
    'Retail and hospitality businesses depend on reliable IT systems for customer service, operations, and revenue. Our solutions deliver POS infrastructure, guest Wi-Fi, digital signage, and 24/7 support to keep your business running smoothly.',
  blocks: [
    {
      title: 'POS & Payment Systems',
      text: '<p>Point-of-sale systems are the backbone of retail and hospitality operations. We design and deploy reliable network infrastructure to support POS terminals, payment gateways, kitchen display systems, and inventory management.</p><p>Our networks ensure fast transaction processing, minimal downtime, and secure payment handling across all locations.</p>',
      list: [
        '<li>POS network infrastructure design</li>',
        '<li>Redundant connectivity for payment terminals</li>',
        '<li>Wired and wireless POS support</li>',
        '<li>Payment gateway integration</li>',
        '<li>Kitchen display system (KDS) connectivity</li>',
        '<li>Inventory and order management system integration</li>',
      ],
    },
    {
      title: 'Guest Wi-Fi & Digital Experience',
      text: '<p>Customers expect fast, reliable Wi-Fi in retail stores, restaurants, and hotels. We deploy secure guest Wi-Fi networks with captive portals, speed controls, and content filtering to enhance customer experience while protecting your business network.</p><p>Digital signage, loyalty programs, and mobile ordering integrate seamlessly with our network solutions to create engaging customer experiences.</p>',
      list: [
        '<li>High-performance guest Wi-Fi networks</li>',
        '<li>Branded captive portal with social login</li>',
        '<li>Bandwidth management and fair usage policies</li>',
        '<li>Network segmentation (guest vs. business)</li>',
        '<li>Digital signage and display connectivity</li>',
        '<li>Mobile ordering and loyalty app support</li>',
      ],
    },
    {
      title: 'Multi-Location Management',
      text: '<p>Retail chains, restaurant groups, and hotel operators need centralized management across multiple locations. We standardize network infrastructure, implement remote monitoring, and provide unified support for all your sites.</p><p>Cloud-based management platforms enable real-time visibility, faster troubleshooting, and consistent service quality across your entire operation.</p>',
      list: [
        '<li>Standardized network design for all locations</li>',
        '<li>Centralized network management and monitoring</li>',
        '<li>Remote diagnostics and support</li>',
        '<li>Automated alerts for system failures</li>',
        '<li>Scalable infrastructure for business expansion</li>',
        '<li>24/7 support with fast response times</li>',
      ],
    },
  ],
};

export default function RetailHospitalityPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: industryData.hero.title,
          description: metadata.description,
          datePublished: '2026-01-23',
          dateModified: '2026-01-23',
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
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '#' },
          { label: 'Retail & Hospitality' },
        ]}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={industryData.hero.title}
          subtitle={industryData.hero.subtitle}
          description={industryData.hero.description}
        />
        <div className="container">
          <div className="article">
            <ArticleContent intro={industryData.intro} blocks={industryData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
