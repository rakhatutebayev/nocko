import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: '24/7 IT Support in Dubai — What Response Time Actually Means | NOCKO',
  description: 'What does 24/7 IT support really include for Dubai businesses? NOC monitoring, escalation tiers, P1/P2/P3 response times, and honest answers about what happens at 3am.',
  alternates: {
    canonical: '/articles/it-support-24-7',
    languages: {
      'en-AE': '/articles/it-support-24-7',
      'ru-RU': '/ru/articles/it-support-24-7',
    },
  },
};

const articleData = {
  hero: {
    title: '24/7 IT Support in Dubai — Why Response Time Matters',
    subtitle: 'NOC Monitoring, Escalation Tiers, and What Happens at 2am',
    description: 'Most providers say "24/7 support". Few explain what that actually means. Here is how structured round-the-clock IT support works — and what it does not cover.',
  },
  intro: 'Dubai operates across multiple time zones simultaneously. A logistics company in JAFZA is coordinating shipments with clients in Frankfurt and Singapore at 11pm. A DIFC fund manager is accessing trading systems during a London market session that closes at midnight UAE time. A hotel in Downtown never has a shift that ends. For businesses in these environments, IT support that only works Sunday to Thursday, 9am to 6pm, is not IT support — it is a gap in operations. But "24/7 support" has become a marketing phrase that means different things to different providers. This article explains what genuine round-the-clock IT coverage looks like, what the tiered response model means in practice, and where the realistic limits are.',
  blocks: [
    {
      title: 'What 24/7 IT Support Actually Includes',
      text: '<p>Genuine 24/7 IT support is not a single engineer sleeping next to a phone. It is a layered system with three distinct components that work together:</p><p><strong>NOC Monitoring (Network Operations Centre):</strong> Automated agents run on every managed device and infrastructure component — servers, firewalls, switches, cloud workloads. These agents feed real-time telemetry into a monitoring platform that alerts on anomalies: a server CPU at 98% for ten minutes, a firewall rule generating unexpected blocks, a backup that failed silently at 2am. Most issues are detected and resolved before any user notices a problem.</p><p><strong>Automated Alerting:</strong> When monitoring thresholds are breached, the system escalates automatically. Low-severity alerts create tickets for review during business hours. High-severity alerts trigger an immediate page to the on-call engineer. This removes human judgement from the escalation decision — if the threshold is breached, the alert fires.</p><p><strong>L1/L2/L3 Escalation:</strong> Level 1 handles initial triage and common resolutions. Level 2 takes ownership of infrastructure and application-layer issues that require deeper diagnosis. Level 3 involves senior engineers or specialist vendors for complex failures. At NOCKO, the escalation path runs through WhatsApp and phone, with a defined SLA at each level.</p>',
    },
    {
      title: 'Why Dubai Businesses Specifically Need After-Hours Coverage',
      text: '<p>Several sectors in Dubai have genuine operational reasons for round-the-clock IT availability — not because IT failures are more common here, but because the business consequences of downtime do not respect office hours.</p><p><strong>Finance (DIFC):</strong> DIFC market hours run 9:00–15:30 UAE time, but fund administrators and back-office teams often work later processing trades against London and New York sessions. A server failure at 7pm on a trading day has real financial consequence.</p><p><strong>Logistics (JAFZA / Jebel Ali):</strong> Port operations and freight forwarding run continuously. Warehouse management systems, customs documentation platforms, and fleet tracking software do not have a closing time. An Etisalat or Du ISP outage at 3am still needs a response if it takes down freight processing.</p><p><strong>Hospitality:</strong> Hotels, restaurants, and entertainment venues operate 24 hours. Property management systems, point-of-sale terminals, guest Wi-Fi, and IPTV infrastructure are all operational overnight. A PMS failure during a late check-in window causes immediate guest impact.</p><p><strong>Regional Operations Hubs:</strong> Many multinationals use Dubai as a hub covering MENA, Africa, and South Asia. An outage during UAE business hours is also an outage during working hours in Nairobi, Karachi, or Mumbai.</p>',
    },
    {
      title: 'NOCKO\'s 24/7 Model: Specific Commitments',
      text: '<p>Our after-hours coverage is structured around defined commitments rather than vague availability promises:</p><p><strong>NOC monitoring:</strong> Continuous, automated, running on all managed infrastructure. Alerts are generated in real time, not reviewed in the morning.</p><p><strong>Contact channels:</strong> WhatsApp and phone for after-hours escalation. Response to an acknowledged P1 alert begins within 15 minutes of the alert firing.</p><p><strong>On-site response:</strong> Under 2 hours for Dubai; under 4 hours across the UAE for Priority 1 incidents. Remote resolution is attempted first — most P1 issues are resolved remotely within the first hour.</p><p><strong>UAE-specific factors:</strong> Our team has direct experience handling Etisalat and Du circuit faults, DEWA power events affecting UPS and cooling systems, and the dust-related hardware failures that are more common in UAE environments than in European or North American ones. These are not theoretical scenarios — they are incidents we handle regularly.</p>',
    },
    {
      title: 'Priority Matrix: P1, P2, and P3 Response Times',
      text: '<p>Every incident is classified at intake. The classification determines the response commitment:</p>',
      list: [
        '<strong>P1 — Critical:</strong> Complete business outage. Examples: server down, internet circuit failed, email service unavailable company-wide, ransomware detected. Remote response within 15 minutes. On-site dispatch within 2 hours (Dubai) / 4 hours (UAE-wide).',
        '<strong>P2 — High:</strong> Significant degradation affecting a department or team. Examples: shared drive inaccessible, VPN failure for remote workers, VLAN routing issue. Remote response within 1 hour. On-site same business day.',
        '<strong>P3 — Standard:</strong> Individual user impact. Examples: laptop running slowly, password reset, software configuration issue. Response within 4 business hours. Resolved remotely in most cases.',
        '<strong>Scheduled work:</strong> Infrastructure changes, upgrades, new device deployments. Agreed in advance, performed during low-traffic windows including evenings and weekends where client operations require it.',
      ],
    },
    {
      title: 'What 24/7 Support Does Not Cover — An Honest Explainer',
      text: '<p>Most contracts have limits, and clients deserve to understand them before they need to invoke them.</p><p>A standard AMC with 24/7 monitoring does not mean a physical engineer will arrive at your office at 3am for a P3 issue (a single user\'s laptop). Non-critical issues are triaged remotely and scheduled for the next available on-site slot. This is not a failure of service — sending an engineer across Dubai at 3am for a browser configuration issue would be wasteful and would not represent meaningful value.</p><p>What after-hours physical response does cover: server room failures, network outages affecting the whole business, security incidents that require immediate containment. These are the scenarios where middle-of-the-night on-site presence is genuinely warranted, and these are the scenarios our P1 SLA is built for.</p><p>If your business has specific after-hours physical requirements — for example, a data centre requiring on-call hardware swap capability — these can be scoped into a custom contract with the appropriate cost structure. The default AMC tiers are designed to match realistic incident patterns, not edge cases.</p>',
    },
  ],
};

const faqData = {
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What counts as a P1 emergency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A P1 incident is any failure that stops the entire business from operating — a server outage, full internet circuit failure, company-wide email unavailability, or an active security incident such as ransomware. Single-user issues, slow performance on one device, or non-urgent configuration requests are P3 and handled during standard hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 24/7 support included in an AMC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NOC monitoring (automated, continuous) is included in all NOCKO AMC tiers. After-hours human escalation for P1 incidents is included in AMC Plus and Enterprise tiers. For standard AMC, after-hours support can be added as a contract supplement. We will always clarify what is and is not included before you sign.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can an engineer arrive in Dubai at 2am?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a confirmed P1 incident, our target is under two hours from the time of escalation to on-site arrival anywhere in Dubai. In practice, most P1 issues are resolved remotely within the first hour — on-site dispatch is triggered when remote resolution is not possible. We have engineers based across Dubai to support this response time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between 24/7 monitoring and 24/7 on-call support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '24/7 monitoring means automated systems watch your infrastructure continuously and generate alerts. It does not require a human to be active — the software does the work. 24/7 on-call support means a human engineer is reachable around the clock to respond to those alerts or to inbound calls. NOCKO provides both: automated NOC monitoring that never stops, and on-call engineers who respond to P1 escalations at any hour.',
      },
    },
  ],
};

export default function ITSupport247Page() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-01-28', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <StructuredData type="FAQPage" data={faqData} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: '24/7 IT Support' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {faqData.mainEntity.map((item, index) => (
                <div key={index} style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 600 }}>{item.name}</h3>
                  <p style={{ color: '#4a5568', lineHeight: 1.7 }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
