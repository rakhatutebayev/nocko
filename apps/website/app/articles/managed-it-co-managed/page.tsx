import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Co-Managed IT: The Best of Both Worlds | NOCKO UAE',
  description: 'A guide for IT Directors on how to effectively outsource tedious NOC alerts while maintaining control of corporate strategy. We integrate directly with your internal team.',
  alternates: {
    canonical: '/articles/managed-it-co-managed',
    languages: {
      'en-AE': '/articles/managed-it-co-managed',
      'ru-RU': '/ru/articles/managed-it-co-managed',
    },
  },
};

const articleData = {
  hero: {
    title: 'Co-Managed IT: The Best of Both Worlds',
    subtitle: 'Outsource tedious NOC alerts while maintaining control',
    description: 'A guide for IT Directors on how to effectively outsource tedious NOC alerts while maintaining control of corporate strategy. We integrate directly with your internal team.',
  },
  intro: `For many mid-to-large enterprises in Dubai and Abu Dhabi, completely outsourcing the IT department isn\'t an option. You already have a skilled IT Director, a CIO, or a capable internal Helpdesk managing day-to-line operations. However, your high-value internal team shouldn\'t be wasting their hours on reactive password resets, midnight server patching, or monitoring firewall telemetry. This is where a Co-Managed IT (Co-MIT) strategy becomes a massive competitive advantage. By hybridizing your IT approach, you combine the institutional knowledge of your internal staff with the massive scale, 24/7 availability, and specialized cybersecurity expertise of a Managed Service Provider (MSP).`,
  blocks: [
    {
      title: `Augmenting, Not Replacing, Your Team`,
      text: `<p>Co-Managed IT is fundamentally a partnership. We act as an extension of your existing IT department, filling in the crucial operational gaps that drain your team\'s energy. Typically, NOCKO assumes responsibility for the tedious backend operations: <strong>24/7 NOC (Network Operations Center) monitoring</strong>, automated patch management across servers and endpoints, and daily off-site backup verification.</p><p>This division of labor completely frees your internal IT Director to focus on what actually matters—strategic digital transformation, ERP software integration, analyzing workflow efficiencies, and driving direct business revenue. When your internal team stops fighting fires, they start building infrastructure.</p>`,
    },
    {
      title: `Solving the Level 1 Helpdesk Bottleneck`,
      text: `<p>Internal IT teams are frequently bogged down by an endless barrage of Level 1 support tickets: printer paper jams, Outlook synchronization crashes, forgotten passwords, and routine onboarding of new hires. By routing these low-level requests directly to our dedicated remote Helpdesk engineers, your internal staff can instantly reclaim up to 60% of their operational hours.</p><ul><li><strong>Unified Ticketing:</strong> We don\'t force you into our system. We can integrate our API directly into your existing ServiceNow, Zendesk, or Jira Service Desk environments, providing a seamless experience for your end-users.</li><li><strong>Shared Documentation:</strong> Through ITGlue integration, we ensure both our Level 3 engineers and your internal team have real-time, synchronized access to network topologies, vendor contracts, and administrative credentials.</li><li><strong>Overflow Support:</strong> During critical periods, such as an office relocation or a major software rollout, our Helpdesk acts as an overflow valve, handling the spike in user queries while your team manages the physical migration.</li></ul>`,
    },
    {
      title: `Eliminating Shadow IT and Skill Gaps`,
      text: `<p>Technology evolves faster than internal training budgets allow. When internal teams lack highly specialized knowledge—such as configuring Azure Zero Trust architectures, performing deep-packet firewall inspection, or executing forensic incident response—they often rely on expensive, unvetted ad-hoc contractors. This leads to fragmented infrastructure and dangerous "Shadow IT."</p><p>A Co-Managed agreement grants your team immediate, flat-rate access to our entire bench of Senior Cloud Architects and Cybersecurity Analysts in the UAE. You effectively close any technical skill gaps instantly without the immense cost of hiring a full-time, in-house Cloud Security Engineer.</p>`,
    },
    {
      title: `Strategic vCIO Consulting and Roadmapping`,
      text: `<p>A true Co-Managed relationship extends beyond technical support; it includes executive leadership. Our Virtual Chief Information Officers (vCIOs) sit down with your internal IT Director and CFO on a quarterly basis. We analyze hardware lifecycle reports, audit your Microsoft 365 licensing to eliminate unused subscriptions, and build a 3-year IT Capital Expenditure (CapEx) roadmap.</p><p>We provide the empirical data and industry benchmarking your internal IT leader needs to successfully pitch budget approvals to the board of directors.</p>`,
    },
    {
      title: `24/7/365 Coverage and Holiday Rotations`,
      text: `<p>Internal IT staff need vacations, get sick, and go home at 6:00 PM. But cyber threats and server failures don\'t operate on Dubai business hours. Our Co-Managed model provides a seamless handover. At the end of the business day, our 24/7 Security Operations Center (SOC) takes the watch. If a critical server goes offline at 3:00 AM on a Sunday, our automated systems detect it, and our engineers begin remediation immediately—ensuring everything is online before your staff arrives on Monday morning.</p>`,
    }
  ],
};

export default function ManagedItCoManagedPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-09-25', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Managed IT', href: '/services/managed-it' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
