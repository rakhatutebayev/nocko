const fs = require('fs');
const path = require('path');

const basePath = '/Users/rakhat/Documents/webhosting/nocko-platform/apps/website';

const newArticles = [
  {
    slug: 'managed-it-co-managed',
    parentService: 'Managed IT',
    parentServiceUrl: '/services/managed-it',
    title: 'Co-Managed IT: The Best of Both Worlds',
    subtitle: 'Outsource tedious NOC alerts while maintaining control',
    description: 'A guide for IT Directors on how to effectively outsource tedious NOC alerts while maintaining control of corporate strategy. We integrate directly with your internal team.'
  },
  {
    slug: 'cloud-zero-trust',
    parentService: 'Cloud',
    parentServiceUrl: '/services/cloud',
    title: 'Defending Your Cloud with Zero Trust',
    subtitle: 'Understand the shared responsibility model',
    description: 'Understand the shared responsibility model and why IAM security is critical for your Azure deployment. Do not leave your cloud endpoints exposed.'
  },
  {
    slug: 'cybersecurity-antivirus-dead',
    parentService: 'Cybersecurity',
    parentServiceUrl: '/services/cybersecurity',
    title: 'Why standard Antivirus is dead in 2024',
    subtitle: 'Legacy signatures cannot stop zero-day attacks',
    description: 'Understand the stark technical difference between legacy signature-based Antivirus and behavioral AI-driven EDR platforms like CrowdStrike.'
  },
  {
    slug: 'it-support-onboarding',
    parentService: 'IT Support & Helpdesk',
    parentServiceUrl: '/services/it-support',
    title: 'Why Microsoft 365 Onboarding takes Too Long',
    subtitle: 'Automate laptop provisioning with Autopilot',
    description: 'Discover how integrating Windows Autopilot with Azure AD completely eliminates manual laptop configuration within your IT department.'
  },
  {
    slug: 'it-amc-vs-msp',
    parentService: 'IT AMC & Maintenance',
    parentServiceUrl: '/services/it-amc',
    title: 'The AMC vs MSP Decision Guide',
    subtitle: 'Understand inclusive scopes vs hardware capital expenditures',
    description: 'Understand the critical difference between inclusive scopes and exclusive out-of-scope hardware capital expenditures. Choose the right contract for your business.'
  },
  {
    slug: 'it-amc-hardware-lifecycle',
    parentService: 'IT AMC & Maintenance',
    parentServiceUrl: '/services/it-amc',
    title: 'Hardware Lifecycle Management',
    subtitle: 'Calculate your true downtime cost',
    description: 'An executive breakdown of why saving $500 on a cheap AMC contract will cost you $50,000 during a 3-day server outage due to aging hardware.'
  },
  {
    slug: 'it-consulting-ransomware-survival',
    parentService: 'IT Consulting',
    parentServiceUrl: '/services/it-consulting',
    title: 'Surviving a Ransomware Strike',
    subtitle: 'Architect a Disaster Recovery plan that actually works',
    description: 'Understand exactly what RTO and RPO mean, and how to architect a Disaster Recovery plan that actually works under the pressure of a real-world breach.'
  },
  {
    slug: 'structured-cabling-fiber-vs-cat6a',
    parentService: 'Structured Cabling',
    parentServiceUrl: '/services/structured-cabling',
    title: 'The Guide to Cat6A vs Fiber Optic',
    subtitle: 'Managing physical layer deployments',
    description: 'A deep dive into Cat6 vs Cat6A, the necessity of Fluke certification, and managing physical layer deployments for modern smart offices.'
  },
  {
    slug: 'structured-cabling-fluke-importance',
    parentService: 'Structured Cabling',
    parentServiceUrl: '/services/structured-cabling',
    title: 'Why Fluke Testing is Non-Negotiable',
    subtitle: 'Eliminate Wi-Fi interference before it happens',
    description: 'Understand how RF interference and physical materials block consumer routers, and why Ekahau heatmapping and Fluke testing is mandatory.'
  }
];

newArticles.forEach(article => {
  const componentName = article.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
  
  const content = `import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: '${article.title.replace(/'/g, "\\'")} | NOCKO UAE',
  description: '${article.description.replace(/'/g, "\\'")}',
  alternates: {
    canonical: '/articles/${article.slug}',
  },
};

const articleData = {
  hero: {
    title: '${article.title.replace(/'/g, "\\'")}',
    subtitle: '${article.subtitle.replace(/'/g, "\\'")}',
    description: '${article.description.replace(/'/g, "\\'")}',
  },
  intro: '${article.description.replace(/'/g, "\\'")} Our certified architects ensure your deployment is strictly aligned with UAE compliance standards.',
  blocks: [
    {
      title: 'Expert Implementation and Strategy',
      text: '<p>Our dedicated architects in Dubai deploy this framework rigorously, ensuring that your enterprise operates with maximum efficiency, reduced risk, and strict adherence to UAE governmental regulations.</p>',
    },
    {
      title: 'Long-Term Impact',
      text: '<p>By addressing these critical bottlenecks preemptively, we shift your organization away from reactive disaster mitigation precisely toward proactive, strategic growth.</p>'
    }
  ],
};

export default function ${componentName}() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: '${article.parentService}', href: '${article.parentServiceUrl}' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;

  const dirPath = path.join(basePath, 'app/articles', article.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log(`Created: ${article.slug}`);
});

console.log('Successfully scaffolded 9 new granular articles.');
