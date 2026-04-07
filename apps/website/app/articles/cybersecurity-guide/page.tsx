import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Complete Cybersecurity Guide for Enterprises | NOCKO UAE',
  description: 'An exhaustive guide to enterprise cybersecurity in the UAE.',
  alternates: {
    canonical: '/articles/cybersecurity-guide',
  },
};

const articleData = {
  hero: {
    title: 'The Blueprint for Enterprise Cybersecurity',
    subtitle: 'Threat Detection, Network Defenses, and Incident Recovery',
  },
  intro: 'A robust security posture goes beyond simply installing antivirus software; it requires a holistic approach that includes continuous monitoring, strict compliance frameworks, and an actionable incident response plan.',
  blocks: [
    {
      title: '1. Network Defense and Firewall Management',
      text: '<p>The perimeter of your corporate network is the primary battleground against automated attacks. Modern network architecture demands more than just a basic router firewall.</p>',
    },
  ],
};

export default function CybersecurityGuidePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';
  const currDate = new Date().toISOString().split('T')[0];
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: currDate }} />
      <HeaderWrapper />
      <main className="main"><Hero variant="article" title={articleData.hero.title} subtitle={articleData.hero.subtitle} /><div className="container"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Enterprise Cybersecurity Guide' }]} /><div className="article"><ArticleContent intro={articleData.intro} blocks={articleData.blocks} /></div></div></main>
      <Footer />
    </>
  );
}
