import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Complete Guide to Managed IT Services & Support | NOCKO UAE',
  description: 'A detailed breakdown of Managed IT Services in Dubai.',
  alternates: {
    canonical: '/articles/managed-it-services-guide',
  },
};

const articleData = {
  hero: {
    title: 'Complete Guide to Managed IT Services & Support',
    subtitle: '24/7 Helpdesk, Proactive Monitoring, and IT Optimization',
  },
  intro: 'Managed IT Services shifts your IT from a reactive cost center to a proactive, predictable utility. This guide outlines everything from 24/7 helpdesk operations to scalable infrastructure management.',
  blocks: [
    {
      title: '1. The Shift to Proactive Monitoring and Maintenance',
      text: '<p>Under a Managed IT Service provider (MSP) model, your infrastructure is monitored electronically 24/7. Automated alerts preempt system failure.</p>',
    },
  ],
};

export default function ManagedITGuidePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';
  const currDate = new Date().toISOString().split('T')[0];
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: currDate }} />
      <HeaderWrapper />
      <main className="main"><Hero variant="article" title={articleData.hero.title} subtitle={articleData.hero.subtitle} /><div className="container"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Managed IT Services Guide' }]} /><div className="article"><ArticleContent intro={articleData.intro} blocks={articleData.blocks} /></div></div></main>
      <Footer />
    </>
  );
}
