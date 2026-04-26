import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'ITIL Ticketing & SLA Workflows | NOCKO UAE',
  description: 'Discover how ITIL-compliant ticketing systems and strict Service Level Agreements (SLAs) bring accountability and metrics to your IT operations.',
  alternates: {
    canonical: '/articles/it-support-helpdesk',
  },
};

const articleData = {
  hero: {
    title: 'SLA-Driven Ticketing Workflows',
    subtitle: 'Bringing Accountability to Enterprise IT Support',
    description: 'Transform chaotic WhatsApp requests into measurable, timestamped ITIL-compliant service workflows with guaranteed response times.',
  },
  intro: 'One of the most common complaints from executives regarding their internal IT departments is a lack of accountability. When IT support requests are handled informally through phone calls, emails, or WhatsApp messages, it becomes impossible to track resolution times, identify recurring issues, or gauge the true performance of the technical team. NOCKO solves this by instituting rigorous, enterprise-grade ticketing systems backed by contractual SLAs.',
  blocks: [
    {
      title: 'What is an ITIL-Compliant Workflow?',
      text: '<p>ITIL (Information Technology Infrastructure Library) is the global gold standard for IT service management. We implement these methodologies directly into your organization, categorizing every interaction properly:</p>',
      list: [
        '<strong>Incidents:</strong> Immediate break-fix issues (e.g., "My printer is broken" or "The server is offline").',
        '<strong>Service Requests:</strong> Standard operational tasks with predefined approvals (e.g., "Provision a new laptop for a hire starting Monday").',
        '<strong>Problem Management:</strong> Grouping multiple recurring incidents to identify and permanently fix a root cause (e.g., replacing a failing network switch that keeps dropping connections).'
      ]
    },
    {
      title: 'Service Level Agreements (SLAs)',
      text: '<p>An SLA is a formal commitment binding NOCKO to specific performance metrics. We prioritize tickets dynamically based on business impact. A "Priority 1" total server outage may demand a 15-minute response and 2-hour physical dispatch, whereas a "Priority 4" request to update email signatures is scheduled logically. If we miss an SLA, you hold us financially accountable.</p>'
    },
    {
      title: 'Executive Dashboards and Monthly Reporting',
      text: '<p>Data drives decisions. At the end of every month, your management team receives an exhaustive dashboard detailing every ticket logged, average resolution times, and recurring hardware failures. This allows CFOs to justify hardware replacement budgets armed with empirical data rather than educated guesses.</p>'
    }
  ],
};

export default function ITSupportHelpdeskPage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: 'SLA Ticketing' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
