import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Forensic IT Audits & Technical Assessments UAE | NOCKO',
  description: 'Uncover hidden tech debt and security vulnerabilities with NOCKO\'s RAG-status forensic IT audits for Dubai and UAE enterprises.',
  alternates: {
    canonical: '/articles/it-consulting-assessment',
  },
};

const articleData = {
  hero: {
    title: 'Forensic IT Audits & RAG Health Checks',
    subtitle: 'Exposing Tech Debt, Security Gaps, and Licensing Waste',
    description: 'A comprehensive technical x-ray of your entire IT infrastructure. Discover what runs beneath the surface of your business.',
  },
  intro: 'Many organizations in the UAE operate continuously without knowing the true state of their technology stack. Often, hidden tech debt—such as legacy on-premise servers struggling to interface with modern cloud apps, or unpatched shadow-IT software—is only discovered after a catastrophic failure. NOCKO provides an essential preventative measure: The Forensic IT Audit.',
  blocks: [
    {
      title: 'What is a Forensic IT Audit?',
      text: '<p>A forensic IT assessment goes beyond a simple checklist. It is a deep, mathematically backed investigation into the three core layers of your business technology:</p>',
      list: [
        '<strong>The Physical Layer:</strong> We inspect your server rooms, network cabling, cooling efficiency, and hardware lifecycles across all your UAE branches.',
        '<strong>The Logical & Security Layer:</strong> We trace data flows, evaluate firewall configurations (VLANs, VPNs, Zero-Trust compliance), and actively scan for unpatched vulnerabilities.',
        '<strong>The Commercial Layer:</strong> We audit your software licensing models to identify unused or overlapping SaaS subscriptions (e.g., paying for Zoom when Microsoft Teams is already included in your E3 license).'
      ]
    },
    {
      title: 'The RAG Status Report',
      text: '<p>The primary deliverable of our audit is the Red/Amber/Green (RAG) Executive Report. Instead of overwhelming your board with technical jargon, we translate IT risks into business impacts:</p>',
      list: [
        '<strong>RED (Critical Risk):</strong> Immediate threats to business continuity, such as failing backup drives, exposed RDP ports, or compliance violations with UAE data laws.',
        '<strong>AMBER (Warning):</strong> Systems approaching end-of-life or inefficient configurations that drain productivity.',
        '<strong>GREEN (Optimal):</strong> Areas where your technology meets enterprise standards and provides a solid foundation for scaling.'
      ]
    },
    {
      title: 'Transforming Data into Strategy',
      text: '<p>An audit is only valuable if it leads to action. Our engineering team presents the findings not just as problems, but as a prioritized roadmap. By definitively isolating bottlenecks and security vulnerabilities, we empower your executive team to make informed IT investments that drive measurable ROI.</p>'
    }
  ],
};

export default function ITConsultingAssessmentPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Consulting', href: '/services/it-consulting' }, { label: 'Forensic Audits' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
