import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'M&A Technology Integration Services UAE | NOCKO',
  description: 'Flawless IT infrastructure integration during Mergers and Acquisitions (M&A). Prevent technical disruptions during corporate restructuring.',
  alternates: {
    canonical: '/articles/it-consulting-infrastructure-design',
  },
};

const articleData = {
  hero: {
    title: 'M&A Technology Integration',
    subtitle: 'Seamless IT Consolidation for Mergers and Acquisitions',
    description: 'Ensure day-one operational continuity and secure data migrations when acquiring or merging enterprise infrastructures.',
  },
  intro: 'Mergers and Acquisitions (M&A) are highly complex business maneuvers that frequently fail to realize their expected value due to deeply incompatible IT systems. When an acquiring company brings a new firm under its umbrella, the inherited "technical debt"—from differing email servers to conflicting cyber security policies—must be resolved rapidly to protect the investment. NOCKO specializes in architectural tech integrations for UAE M&A activities.',
  blocks: [
    {
      title: 'Day-One Operational Continuity',
      text: '<p>The success of a merger is often judged by how smoothly the first day of consolidated operations performs. Our architects guarantee that on "Day One", critical communications are unified.</p>',
      list: [
        '<strong>Identity Consolidation:</strong> Bridging disparate Active Directories or Entra ID tenants so employees can securely authenticate across both organizations\' shared resources.',
        '<strong>Unified Communications:</strong> Seamlessly federating Microsoft Teams, Exchange email domains, and Slack workspaces to eliminate internal communication barriers.',
        '<strong>Role-Based Access Control:</strong> Automatically replicating HR permissions across new software ecosystems securely.'
      ]
    },
    {
      title: 'Due Diligence IT Auditing',
      text: '<p>Before a deal is even finalized, NOCKO acts as technical counsel to assess the target company’s infrastructure. We identify if the target company is harboring dangerous ransomware, relies on expiring legacy software, or faces massive non-compliance fines regarding UAE Data Privacy laws. We quantify these IT risks financially, giving your M&A team leverage during valuation negotiations.</p>'
    },
    {
      title: 'The Cloud Consolidation Strategy',
      text: '<p>Operating two separate cloud infrastructures (e.g., maintaining an AWS tenant and an Azure tenant simultaneously) rapidly drains operational budget. We design migration pathways that consolidate the acquired company’s assets into your primary cloud ecosystem safely. This eliminates redundant licensing (saving massive OPEX immediately) and standardizes your cybersecurity posture across the entire expanded enterprise.</p>'
    }
  ],
};

export default function ITConsultingInfrastructureDesignPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Consulting', href: '/services/it-consulting' }, { label: 'M&A IT Integration' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
