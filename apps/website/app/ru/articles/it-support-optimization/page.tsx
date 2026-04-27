import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Automated Employee IT Onboarding UAE | NOCKO',
  description: 'Eliminate HR bottlenecks by fully automating your IT onboarding processes, Identity and Access Management (IAM), and strict RBAC security in Dubai.',
  alternates: {
    canonical: '/articles/it-support-optimization',
  },
};

const articleData = {
  hero: {
    title: 'Automated IT Onboarding & Identity Management',
    subtitle: 'Bridging the Gap Between HR Processes and IT Security',
    description: 'Ensure new hires are productive from their very first hour by automating laptop provisioning, licensing, and access control.',
  },
  intro: 'A frustratingly common scenario for new employees is arriving on their first day, only to wait a week for their email account to be created, their software to be installed, or their CRM access to be approved. Conversely, when an employee resigns, failing to revoke their access immediately creates a massive data-leak vulnerability. NOCKO specializes in deeply automating the intersection between HR requirements and IT Identity and Access Management (IAM).',
  blocks: [
    {
      title: 'Flawless Pre-Boarding Provisioning',
      text: '<p>Our integrations allow your HR department to trigger a cascading IT workflow simply by marking a candidate as "Hired" in their HRIS software (e.g., BambooHR, Workday). The automated workflow instantly executed by our NOC includes:</p>',
      list: [
        'Automatically generating the employee\'s Microsoft 365 or Google Workspace email address using standardized corporate naming conventions.',
        'Assigning the mathematically correct software licensing tier (e.g., granting an E5 license to a Director, and an F3 license to a frontline worker) to prevent license waste.',
        'Adding the employee to the correct distribution lists, departmental shared drives, and Teams channels automatically based on their title.'
      ]
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      text: '<p>Manual permission assignments are incredibly dangerous, often leading to "permission creep" where an employee accumulates excessive access over years of internal transfers. We implement strict Role-Based Access Control (RBAC). A "Sales Executive" receives access to the Sales CRM and marketing collateral automatically. The system mathematically prevents them from accessing localized Financial or HR datasets, adhering perfectly to the Principle of Least Privilege.</p>'
    },
    {
      title: 'Zero-Day Offboarding',
      text: '<p>When a termination occurs, speed is critical to protect corporate IP. We integrate "Zero-Day Offboarding" hooks. A single click from HR instantaneously severs the employee\'s Entra ID (Azure AD), locking them out of their email, wiping the corporate vault on their mobile phone, and terminating active VPN sessions—whether they are sitting in the Dubai office or traveling abroad.</p>'
    }
  ],
};

export default function ITSupportOptimizationPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: 'HR IT Automation' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
