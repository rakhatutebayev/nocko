import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Strategic IT Consulting and Digital Transformation | NOCKO UAE',
  description: 'A guide to strategic IT consulting, ROI analysis, and enterprise architecture in the UAE.',
  alternates: {
    canonical: '/articles/it-consulting-guide',
  },
};

const articleData = {
  hero: {
    title: 'The Guide to Strategic IT Consulting',
    subtitle: 'Digital Transformation, Roadmapping, and Architecture Design',
  },
  intro: 'This guide covers the critical phases of IT Consulting: from initial assessments and ROI evaluations to drafting a multi-year Digital Transformation roadmap.',
  blocks: [
    {
      title: '1. Comprehensive IT Assessments and Health Checks',
      text: '<p>A strategic technology assessment acts as an x-ray of your current infrastructure, workflows, and licensing.</p>',
    },
  ],
};

export default function ITConsultingGuidePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';
  const currDate = new Date().toISOString().split('T')[0];
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: currDate }} />
      <HeaderWrapper />
      <main className="main"><Hero variant="article" title={articleData.hero.title} subtitle={articleData.hero.subtitle} /><div className="container"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Strategic IT Consulting Guide' }]} /><div className="article"><ArticleContent intro={articleData.intro} blocks={articleData.blocks} /></div></div></main>
      <Footer />
    </>
  );
}
