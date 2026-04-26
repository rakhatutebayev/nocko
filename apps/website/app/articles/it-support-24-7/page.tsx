import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Shadow IT Detection & Cloud Licensing Audits UAE | NOCKO',
  description: 'Shut down dangerous shadow IT and unapproved SaaS applications. Reclaim thousands in duplicated licensing costs through continuous cloud monitoring.',
  alternates: {
    canonical: '/articles/it-support-24-7',
  },
};

const articleData = {
  hero: {
    title: 'Shadow IT & Licensing Audits',
    subtitle: 'Shutting Down Unapproved SaaS and Wasted Licensing',
    description: 'Regain control of your corporate data landscape. We forcefully detect, block, and audit unsanctioned applications.',
  },
  intro: 'In an era where any employee with a corporate credit card can purchase a web-based SaaS application in seconds, companies are losing total visibility over their own data. This unauthorized software ecosystem—known as "Shadow IT"—is the primary vector for data privacy leaks and compliance violations in the UAE. Furthermore, it results in immense financial waste due to duplicating platforms your company already owns. NOCKO provides continuous security monitoring to eliminate this threat.',
  blocks: [
    {
      title: 'Detecting the Invisible Threats',
      text: '<p>You cannot secure what you cannot see. While your official CRM might be protected by Multi-Factor Authentication, your sales team might be illegally exporting client data to unapproved, non-secure platforms like personal Dropbox accounts, Notion, or unauthorized AI tools. We utilize deep network telemetry (like Microsoft Defender for Cloud Apps) to mathematically map every single application your employees interact with on the corporate network.</p>'
    },
    {
      title: 'Blocking and Policy Enforcement',
      text: '<p>Once Shadow IT is detected, we do not simply generate a report—we enforce action. Any application that does not meet your corporate security standard or violates UAE Data Residency laws is actively blocked at the endpoint level. Employees attempting to upload files to an unauthorized cloud drive will be intercepted and redirected to your official, secured corporate storage repository (e.g., SharePoint).</p>'
    },
    {
      title: 'Rescuing Duplicate IT Spend',
      text: '<p>Shadow IT is exceptionally expensive. Marketing departments frequently buy Zoom subscriptions, unaware that the company already provides Microsoft Teams. Developers pay for redundant AWS hosting while the primary Azure environment sits under-utilized. Our licensing audits consolidate these disparate billing streams, actively canceling redundant SaaS purchases and shifting users exclusively into your centralized, fully audited tech stack.</p>'
    }
  ],
};

export default function ITSupport247Page() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: 'Shadow IT Auditing' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
