import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'SaaS Integration & M365 Deployments | NOCKO UAE',
  description: 'NOCKO migrates UAE enterprises from legacy Exchange to Microsoft 365, restructures file shares into SharePoint, and enforces DLP and Conditional Access policies aligned with TDRA data handling requirements.',
  alternates: {
    canonical: '/articles/cloud-infrastructure',
    languages: {
      'en-AE': '/articles/cloud-infrastructure',
      'ru-RU': '/ru/articles/cloud-infrastructure',
    },
  },
};

const articleData = {
  hero: {
    title: 'SaaS Integration & M365 Deployments',
    subtitle: 'Modernize your remote workforce with unified infrastructure',
    description: 'We migrate legacy Exchange environments into modern Entra ID and M365.',
  },
  intro: 'We seamlessly migrate massive corporations from legacy on-premise email silos directly into Microsoft 365 or Google Workspace. This isn\'t just about email; it involves completely restructuring your file shares into SharePoint architectures and applying strict Data Loss Prevention (DLP) conditional policies.',
  blocks: [
    {
      title: 'Microsoft 365 Migration and Tenant Configuration',
      text: '<p>We migrate Exchange on-premise mailboxes into Exchange Online using the Microsoft Hybrid Configuration Wizard, maintaining mail flow continuity throughout the cutover. Active Directory is synchronised to Entra ID (formerly Azure AD) via Azure AD Connect, and we configure Entra ID P2 with Conditional Access policies that restrict access based on device compliance state and named location (UAE IP ranges).</p><p>After migration, we restructure network drives into SharePoint document libraries with role-based permission sets, replacing open-access shared drives that are a common data leak vector in UAE offices.</p>',
      list: [
        'Exchange Online hybrid migration with zero mail flow interruption',
        'Entra ID SSO configuration for all business applications',
        'Conditional Access policies based on location and device compliance',
        'SharePoint architecture replacing legacy file share permissions',
        'DLP policies to block accidental external sharing of sensitive documents',
      ],
    },
    {
      title: 'Google Workspace Integration for Mixed Environments',
      text: '<p>Some UAE companies operate a split environment — sales teams using Google Workspace while finance runs on M365. We configure Google Cloud Directory Sync and SAML-based federation to provide single sign-on across both platforms, eliminating password fatigue and reducing the attack surface from duplicate credential sets.</p><p>We also deploy Google Workspace DLP rules for Gmail and Google Drive, preventing accidental data exfiltration via personal accounts — a common compliance gap in DIFC and ADGM regulated entities.</p>',
    },
    {
      title: 'Licensing and Cost Optimisation',
      text: '<p>M365 licensing in the UAE is frequently over-purchased — companies buy E3 for every user when most staff only need F3 or Business Standard. We audit your licence assignment against actual feature usage, reallocating and downgrading where appropriate. For a 100-seat company this typically saves AED 8,000–15,000 per year.</p><p>We also manage the annual renewal cycle with Microsoft CSP pricing, ensuring you do not renew on expired promotional rates or miss commitment discount windows.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: How long does an Exchange to M365 migration take for a 100-person company?</strong><br/>A: Typically 2–3 weekends. The first weekend we set up the hybrid environment and sync directories. The second weekend we migrate mailboxes in batches. The final weekend handles cutover and DNS changes.',
        '<strong>Q: Will staff lose access to email during the migration?</strong><br/>A: No — hybrid mode keeps both Exchange on-premise and Exchange Online active simultaneously during migration, so users continue receiving and sending mail throughout the process.',
        '<strong>Q: Do you support migrating from Google Workspace to M365?</strong><br/>A: Yes — we use Microsoft\'s Migration Manager to import Google Drive content and Gmail history into SharePoint and Exchange Online respectively.',
        '<strong>Q: Can Conditional Access work for staff travelling outside the UAE?</strong><br/>A: Yes — we configure named locations and trusted device policies so that travelling staff authenticate via MFA rather than being blocked, while still preventing access from unknown devices.',
      ],
    },
  ],
};

export default function CloudinfrastructurePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-01-22', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cloud' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
