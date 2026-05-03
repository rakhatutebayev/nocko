import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Complete NOC Remote Integration | NOCKO UAE',
  description: 'NOCKO connects UAE businesses to a Dubai-based Network Operations Center via lightweight RMM agents — monitoring CPU, temperature, disk health, and network events in real time, with automated remediation for known issue patterns before they cause downtime.',
  alternates: {
    canonical: '/articles/managed-it-infrastructure',
    languages: {
      'en-AE': '/articles/managed-it-infrastructure',
      'ru-RU': '/ru/articles/managed-it-infrastructure',
    },
  },
};

const articleData = {
  hero: {
    title: 'Complete NOC Remote Integration',
    subtitle: 'A centralized intelligence hub for your entire fleet',
    description: 'Our Network Operations Center monitors thousands of your data points live.',
  },
  intro: 'We deploy lightweight, secure agents across all your endpoints and servers. This connects your entire office to our dedicated Network Operations Center in Dubai. We see temperature spikes, CPU overloading, or firewall intrusion attempts live, acting upon them instantly.',
  blocks: [
    {
      title: 'RMM Agent Deployment and Monitoring Scope',
      text: '<p>We deploy NinjaRMM or ConnectWise Automate agents across all Windows and macOS endpoints, servers, and network devices within the managed environment. Each agent transmits telemetry every 60 seconds: CPU utilisation, memory usage, disk I/O, disk health (SMART data), temperature sensors, running services, and event log error counts. This creates a continuous health baseline — when CPU spikes to 95% at 3 AM on a fileserver, our NOC receives an alert and investigates before staff arrive in the morning.</p><p>Network device monitoring via SNMP covers your Cisco switches, FortiGate firewalls, and Ubiquiti or Aruba access points — tracking interface utilisation, error rates, and availability. A switch port flapping or a firewall CPU running hot triggers an alert before it causes packet loss or a security policy failure.</p>',
      list: [
        'Per-device health telemetry: CPU, memory, disk, temperature, services',
        'SMART disk health monitoring with pre-failure alerts before drive replacement',
        'Network device monitoring via SNMP for switches, firewalls, and APs',
        'Automated remediation scripts for common known-issue patterns',
        'Monthly infrastructure health summary reports',
      ],
    },
    {
      title: 'Network Operations Center and Alert Response',
      text: '<p>Our Dubai NOC operates 24 hours a day with engineers assigned to alert queues. When the monitoring platform raises an alert, it is triaged using automated runbooks — common alerts like a backup job failure or a service stopping trigger an automated remediation script first before engaging an engineer. This resolves 40–60% of alerts without human intervention, reserving engineer time for issues that actually need investigation.</p><p>All alert activity is logged with timestamps, engineer notes, and resolution steps. Monthly NOC reports show the number of alerts by category, how many were auto-resolved versus engineer-resolved, and the average time to resolution — giving you visibility into the operational health of your infrastructure.</p>',
    },
    {
      title: 'Remote Access and Remediation',
      text: '<p>When an engineer needs to remediate an issue on a remote machine, they connect via the encrypted RMM remote desktop session — never using unmonitored third-party tools like AnyDesk or TeamViewer outside of the managed platform. All remote sessions are logged, recorded, and auditable. For regulated clients, this session recording satisfies NESA and DFSA requirements for privileged access monitoring.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: What is an RMM agent and is it safe to install?</strong><br/>A: RMM (Remote Monitoring and Management) agents are small background services that report system health telemetry to the management platform. They operate with no user-visible interface and are deployed via Group Policy or Intune — the same channels used for any enterprise software.',
        '<strong>Q: Can we see what the NOC is doing on our systems at any time?</strong><br/>A: Yes — we provide a client portal showing all open tickets, recent alerts, and a log of all remote sessions conducted on your devices. Nothing happens on your systems without a corresponding audit record.',
        '<strong>Q: Does the RMM agent affect system performance?</strong><br/>A: RMM agents consume less than 1% of CPU and 30–50MB of RAM in normal operation. The telemetry uploads are compressed and run on a separate low-priority thread that does not compete with business applications.',
        '<strong>Q: What happens if our internet connection goes down — do we lose monitoring?</strong><br/>A: RMM agents cache telemetry locally during connectivity loss and sync when the connection is restored. We also monitor the connection from the network device level, so a complete internet outage is detected separately via network monitoring.',
      ],
    },
  ],
};

export default function ManageditinfrastructurePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-01-15', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Managed IT' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
