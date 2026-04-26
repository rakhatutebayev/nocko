import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Multi-Year IT Strategic Roadmaps UAE | NOCKO',
  description: 'Align your digital transformation with revenue targets through NOCKO\'s structured, 3-to-5-year actionable IT roadmaps.',
  alternates: {
    canonical: '/articles/it-consulting-roadmap',
  },
};

const articleData = {
  hero: {
    title: 'Multi-Year Actionable IT Roadmaps',
    subtitle: 'Structuring Digital Transformation with Mathematical Precision',
    description: 'Transform chaos into clarity with a phased, board-approved technology roadmap aligned directly to your business goals.',
  },
  intro: 'A digital transformation fails when it is treated merely as a series of disconnected software installations. True transformation requires a roadmap—a structured, phased approach that predicts costs, mitigates business disruption, and sequences deployments in a way that respects the logical dependencies of modern networks. NOCKO specializes in drafting 3-to-5-year IT roadmaps for scaling UAE enterprises.',
  blocks: [
    {
      title: 'The Blueprint for Growth',
      text: '<p>If your enterprise plans to expand from 5 locations to 50 across the GCC over the next three years, your technology must scale ahead of the business, not behind it. Our architectural roadmaps are designed to prevent the common pitfall of outgrowing your IT infrastructure.</p>',
      list: [
        '<strong>Phase 1: Stabilization & Foundation.</strong> Before migrating data to the cloud, we ensure the foundation is sound. This includes upgrading core networking (e.g., SD-WAN integrations), securing Active Directory, and resolving critical tech debt.',
        '<strong>Phase 2: Core Migrations.</strong> With a stable base, large-scale shifts—such as moving from legacy Sage accounting to a cloud-native Microsoft Dynamics 365 or SAP ERP—can occur without crippling operational downtime.',
        '<strong>Phase 3: Automation & Analytics.</strong> Once systems are integrated, we focus on competitive advantages: implementing PowerBI dashboards across departments and streamlining HR workflows through automation.'
      ]
    },
    {
      title: 'Aligning IT CAPEX with Revenue',
      text: '<p>IT should not act as a financial black hole. Our roadmaps include comprehensive mathematical modeling for resource allocation. Every planned technological shift is tethered to a Business Case and an expected ROI. By forecasting Capital Expenditure (CAPEX) and Operational Expenditure (OPEX) quarters in advance, CFOs and boards can approve technology budgets without hesitation or sudden surprise costs.</p>'
    },
    {
      title: 'Minimizing Operational Fatigue',
      text: '<p>Changing too many systems at once results in "change fatigue" among your staff, leading to low adoption rates and plummeting morale. A well-designed roadmap strictly defines the pacing of software rollouts, ensuring your training and HR departments have the required bandwidth to help employees comfortably integrate new digital tools into their daily workflows.</p>'
    }
  ],
};

export default function ITConsultingRoadmapPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Consulting', href: '/services/it-consulting' }, { label: 'IT Roadmaps' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
