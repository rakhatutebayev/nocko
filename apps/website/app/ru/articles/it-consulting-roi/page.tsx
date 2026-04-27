import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Microsoft 365 Licensing Optimization & ROI | NOCKO',
  description: 'Stop overpaying for Microsoft 365 and Azure in Dubai. NOCKO provides deep licensing audits to maximize IT ROI and eliminate duplicate software costs.',
  alternates: {
    canonical: '/articles/it-consulting-roi',
  },
};

const articleData = {
  hero: {
    title: 'Microsoft 365 Licensing Optimization',
    subtitle: 'Reclaiming Wasted OPEX from your Technology Budget',
    description: 'We routinely find that Dubai enterprises overpay by up to 40% on enterprise software. Optimize your M365 ecosystems today.',
  },
  intro: 'Software licensing is one of the largest silent budget drains for modern businesses. Because Microsoft 365 and Azure environments are priced per-user and per-compute-cycle, companies frequently end up paying for enterprise features (like E5 licenses) that their staff never use, or they purchase third-party tools that duplicate native platform features. NOCKO conducts surgical licensing financial audits to deliver immediate, risk-free ROI.',
  blocks: [
    {
      title: 'Identifying Unused E5/E3 Tiers',
      text: '<p>Microsoft\'s pricing structure heavily incentivizes companies to buy premium bundles (like E5) for all their staff under the guise of "better security." However, frontline workers or logistics field-staff rarely utilize the advanced Power Automate features, eDiscovery tools, or Azure P2 capabilities included in these costly tiers.</p><p>We scan your Entra ID (formerly Azure AD) logs to mathematically track exactly which features each user consumes. By aggressively downgrading non-essential staff to cheaper Business Premium or F3 frontline licenses while maintaining their core security posture, we instantly slash monthly recurring costs.</p>'
    },
    {
      title: 'Eliminating Redundant Shadow IT',
      text: '<p>A major source of wasted ROI is overlapping software (often called Shadow IT). If your company is paying for a Microsoft 365 subscription, you are already paying for:</p>',
      list: [
        '<strong>Cloud Storage:</strong> You have 1TB of OneDrive/SharePoint per user. There is zero reason to pay for Dropbox Enterprise.',
        '<strong>Video Conferencing:</strong> You have Microsoft Teams. Canceling legacy Zoom Professional licenses saves thousands annually.',
        '<strong>Device Management:</strong> You have Microsoft Intune. You do not need to pay for external MDM (Mobile Device Management) solutions like Jamf or Airwatch for basic iOS/Windows policies.'
      ]
    },
    {
      title: 'Azure Compute and Consumption Audits',
      text: '<p>Outside of user licensing, cloud hosting bills are extremely opaque. Developers routinely leave high-performance virtual machines running over the weekend, or over-provision server RAM "just to be safe." We implement automated Azure Cost Management guardrails to spin down unused dev environments and apply "Reserved Instance" discounts to baseline workloads, guaranteeing lower compute costs.</p>'
    }
  ],
};

export default function ITConsultingROIPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Consulting', href: '/services/it-consulting' }, { label: 'Licensing ROI' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
