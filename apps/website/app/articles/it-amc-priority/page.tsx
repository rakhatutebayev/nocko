import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Guaranteed 2-Hour SLA Response | NOCKO UAE',
  description: 'We promise and deliver 15-minute remote diagnostic times and 2-hour physical dispatch SLA contracts.',
  alternates: {
    canonical: '/articles/it-amc-priority',
    languages: {
      'en-AE': '/articles/it-amc-priority',
      'ru-RU': '/ru/articles/it-amc-priority',
    },
  },
};

const articleData = {
  hero: {
    title: 'Guaranteed 2-Hour SLA Response',
    subtitle: 'Lightning fast physical dispatch in Dubai',
    description: 'We promise and deliver 15-minute remote diagnostic times and 2-hour physical dispatch SLA contracts.',
  },
  intro: 'When your essential trading systems go offline during market hours in DIFC, every minute represents thousands in lost revenue. A professional AMC contract mathematically guarantees our arrival times, forcing strict penalties if we miss our SLAs.',
  blocks: [
    {
      title: 'SLA Tiers and Response Time Commitments',
      text: '<p>We structure AMC SLAs into four severity tiers. P1 (critical business system down, affecting all staff) receives a 15-minute remote response and 2-hour on-site dispatch anywhere in Dubai. P2 (significant degradation, 50%+ of staff affected) receives 30-minute remote and 4-hour on-site. P3 (single-user issues, workarounds available) resolves within the same business day. P4 (non-urgent requests, change orders) complete within 3 business days.</p><p>These response times are contractually binding — our AMC agreements include financial credits to your account if we miss an SLA response time, creating a direct financial incentive for us to respond on time rather than a verbal promise.</p>',
      list: [
        'P1 critical: 15-minute remote, 2-hour on-site in Dubai',
        'P2 significant: 30-minute remote, 4-hour on-site',
        'Contractual financial penalties for SLA breaches',
        'Monthly SLA compliance report showing actual vs. contracted times',
        'Dedicated emergency line bypassing standard ticket queue for P1 incidents',
      ],
    },
    {
      title: 'DIFC and Financial District Priority Coverage',
      text: '<p>For financial firms in DIFC and ADGM, system downtime during market hours carries direct revenue consequences. Our Dubai operations are based in proximity to DIFC, ensuring that physical dispatch SLAs are achievable — not a theoretical guarantee that assumes no traffic delays. We map engineer locations against client sites and maintain a dedicated response roster for premium AMC clients during UAE market hours (9:00 AM – 3:30 PM UAE time).</p><p>For trading firms, we additionally offer a specific protocol for trading platform outages that escalates immediately to our most senior network engineer and initiates parallel remote diagnosis and physical dispatch simultaneously, rather than waiting for remote diagnosis to complete before dispatching.</p>',
    },
    {
      title: 'After-Hours and Weekend Emergency Coverage',
      text: '<p>Major incidents do not schedule themselves around business hours. Our premium AMC tier includes 24/7 emergency coverage with an on-call engineer who receives alerts from our NOC monitoring platform. If a server goes offline at 2 AM on a Friday, the on-call engineer begins remote diagnosis immediately and dispatches physically if the issue cannot be resolved remotely within 30 minutes.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: What defines a P1 critical incident?</strong><br/>A: A P1 is any incident that renders a core business system unavailable for all or most users — including complete internet outage, server room power failure, Exchange server down, or firewall failure blocking all access.',
        '<strong>Q: How do you measure SLA response time?</strong><br/>A: Response time is measured from the moment your call or ticket is received to the moment an engineer begins active work on the issue — not when a solution is delivered. This is standard industry practice.',
        '<strong>Q: What is the on-site response coverage area?</strong><br/>A: Our standard 2-hour on-site SLA covers Dubai. For Abu Dhabi, Sharjah, and other UAE emirates, a 4-hour on-site SLA applies. Same-day coverage is available for Al Ain and Fujairah under premium tiers.',
        '<strong>Q: Can we escalate directly to a senior engineer rather than tier-1 support?</strong><br/>A: Premium AMC clients have a dedicated account line that connects directly to a mid-level or senior engineer. This removes the tier-1 triage step for clients where the additional 10 minutes matters.',
      ],
    },
  ],
};

export default function ItamcpriorityPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-07-30', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT AMC' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
