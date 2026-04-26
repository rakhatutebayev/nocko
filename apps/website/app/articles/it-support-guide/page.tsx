import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Modern IT Support Guide: SLAs, Helpdesk & Automation | NOCKO',
  description: 'A comprehensive guide to enterprise-grade IT support in the UAE. Learn about ITIL-compliant helpdesks, guaranteed SLAs, and zero-touch onboarding.',
  alternates: {
    canonical: '/articles/it-support-guide',
  },
};

const articleData = {
  hero: {
    title: 'The Blueprint for Modern IT Support & Zero-Touch Onboarding',
    subtitle: 'From Reactive Helpdesk to Automated Workplace Management',
    description: 'Empower your workforce with instant IT resolution, guaranteed SLAs, and automated configuration.',
  },
  intro: 'In the high-stakes business environments of Dubai and Abu Dhabi, traditional IT support is no longer enough. The "break-fix" mentality where you call a technician only when something breaks creates unpredictable downtime and hinders growth. Modern enterprise IT support is built on three pillars: iron-clad Service Level Agreements (SLAs), 24/7 centralized monitoring, and the automation of repetitive tasks like employee onboarding.',
  blocks: [
    {
      title: '1. Beyond the Ticket: Understanding SLA-Driven Support',
      text: '<p>Many businesses in the UAE rely on informal support—emails or messages that go into a black hole. Modern IT support utilizes ITIL-compliant ticketing systems where every request is governed by a <strong>Service Level Agreement (SLA)</strong>.</p><p>A professional SLA defines specific windows for different severity levels:</p>',
      list: [
        'Priority 1 (Critical): 15-minute remote response, 2-hour physical arrival.',
        'Priority 2 (High): 1-hour response for department-wide issues.',
        'Priority 3 (Normal): 4-hour response for individual application glitches.',
        'Monthly Reporting: Transparent analytics on resolution times and MTTR.'
      ]
    },
    {
      title: '2. Zero-Touch Onboarding: The Death of Manual Configuration',
      text: '<p>The most common bottleneck in IT is employee onboarding. Traditionally, an IT person would spend 2-4 hours manually configuring every new hire\'s laptop. We utilize <strong>Windows Autopilot</strong> and <strong>Microsoft Intune</strong> to enable Zero-Touch deployment.</p>',
      list: [
        'Drop-ship Ready: Laptops are sent directly to employees, still in the box.',
        'Automatic Policy Sync: Security settings and apps download on first login.',
        'Role-Based Access: Permissions are assigned automatically based on HR data.',
        'Remote Wipe: Securely erase data from lost devices in seconds.'
      ]
    },
    {
      title: '3. 24/7 Centralized NOC Monitoring',
      text: '<p>A successful IT department is one the employees never have to call. This is achieved through a <strong>Network Operations Center (NOC)</strong> that monitors your infrastructure 24/7/365 using proactive RMM agents.</p>',
      list: [
        'Predictive Maintenance: Detecting failing hard drives before they crash.',
        'Security Patching: Centralized testing and deployment of critical updates.',
        'Performance Audits: Identifying bottlenecks in your network or cloud.',
        'Compliance Monitoring: Ensuring all devices meet UAE data regulations.'
      ]
    }
  ],
};

export default function ITSupportGuidePage() {
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Articles', href: '/articles' }, { label: 'IT Support Guide' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
