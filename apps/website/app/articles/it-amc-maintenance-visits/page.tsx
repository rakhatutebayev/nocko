import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Proactive Datacenter Maintenance | NOCKO UAE',
  description: 'Monthly physical site visits to clean hardware thermals, check RAID status, and prevent catastrophic downtime.',
  alternates: {
    canonical: '/articles/it-amc-maintenance-visits',
    languages: {
      'en-AE': '/articles/it-amc-maintenance-visits',
      'ru-RU': '/ru/articles/it-amc-maintenance-visits',
    },
  },
};

const articleData = {
  hero: {
    title: 'Proactive Datacenter Maintenance',
    subtitle: 'Preventing the crash before it happens',
    description: 'Monthly physical site visits to clean hardware thermals, check RAID status, and prevent catastrophic downtime.',
  },
  intro: 'An AMC isn\'t just about fixing things when they break. Our engineers physically visit your datacenter or server room in Dubai every month. We conduct thermal evaluations, clear dust from critical fans, and run physical diagnostic batteries on your RAID controllers to stop failures before they happen.',
  blocks: [
    {
      title: 'Monthly Physical Health Checks',
      text: '<p>During each monthly visit, our engineers follow a structured checklist: checking server inlet and exhaust temperatures with a non-contact thermometer, inspecting fan operation and cleaning dust filters on Dell and HP servers (the UAE environment deposits more dust per week than temperate climates accumulate per month), verifying UPS battery charge and runtime test results, and reviewing RAID controller health logs for reallocated sectors that indicate a failing drive before it causes an array degradation event.</p><p>Physical cabling is inspected for chafing or accidental disconnection — we have found partially-seated SFP transceivers causing intermittent 1-Gbps drops in multiple client server rooms in Dubai and Sharjah, issues that are invisible to remote monitoring but immediately obvious on-site.</p>',
      list: [
        'Server thermal imaging and fan performance verification',
        'UPS battery health check and runtime test',
        'RAID controller logs reviewed for pre-failure indicators',
        'Physical cabling inspection for seating and chafing',
        'Server room air conditioning and humidity logging',
      ],
    },
    {
      title: 'Preventive Maintenance vs. Emergency Repair Cost',
      text: '<p>A monthly visit that catches a failing RAID drive before the array degrades prevents a 4–8 hour emergency recovery engagement. In UAE server environments without active cooling management, thermal failures from blocked airflow are one of the most common causes of unplanned downtime — particularly in summer when ambient temperatures stress cooling systems operating near capacity.</p><p>We track the historical failure patterns of your hardware fleet and adjust maintenance focus accordingly — for example, increasing thermal monitoring frequency during June–September when UAE temperatures peak and server room AC units are under maximum load.</p>',
    },
    {
      title: 'Visit Reports and Asset Documentation',
      text: '<p>After every maintenance visit, we issue a written visit report documenting the equipment checked, any findings and the actions taken, and any items requiring follow-up or budget planning. These reports accumulate into a maintenance history log that is invaluable during hardware insurance claims and provides evidence of due diligence for regulatory compliance audits.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: How long does a monthly maintenance visit take?</strong><br/>A: For a typical server room with 2–5 servers and a network cabinet, a thorough maintenance visit takes 1.5–2.5 hours. Larger environments with dedicated datacenter cabinets may take half a day.',
        '<strong>Q: Do we need to be present during the visit?</strong><br/>A: We need access to the server room and a brief handover of any issues observed since the last visit. A technical contact does not need to remain present throughout — we work independently and brief you after.',
        '<strong>Q: What if you find a critical issue during the visit?</strong><br/>A: Critical findings (e.g. a UPS on bypass with dead batteries, a RAID drive showing imminent failure) are treated as active incidents — we do not wait until the next visit. The AMC agreement covers emergency remediation within the same visit.',
        '<strong>Q: Is server room cleaning part of the maintenance visit?</strong><br/>A: Dust removal from server fan inlets, cable management tidying, and rack inspection are included. Deep server room cleaning (floor tiles, AC duct cleaning) is a separate scheduled service.',
      ],
    },
  ],
};

export default function ItamcmaintenancevisitsPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-09-02', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
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
