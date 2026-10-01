import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import ServiceCTA from '@/components/services/ServiceCTA';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Solutions for Healthcare Providers in the UAE',
  description:
    'IT infrastructure for clinics and hospitals in Dubai and Abu Dhabi. EMR uptime, PACS storage, NABIDH and Malaffi links, in-country backups, 24/7 support.',
  keywords:
    'IT solutions healthcare UAE, medical IT services Dubai, healthcare network infrastructure, EMR EHR systems UAE, healthcare cybersecurity',
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    title: 'IT Solutions for Healthcare Providers in the UAE',
    description:
      'Secure IT solutions for healthcare providers in UAE. EMR/EHR systems, network infrastructure, compliance, and 24/7 support.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/industries/healthcare',
    languages: {
      'en-AE': '/industries/healthcare',
      'ru-RU': '/ru/industries/healthcare',
      'x-default': '/industries/healthcare',
    },
  },
};

const industryData = {
  hero: {
    title: 'IT Solutions for Healthcare Providers in the UAE',
    subtitle: 'IT infrastructure for clinics and hospitals in Dubai and Abu Dhabi, built for DoH and DHA requirements',
    description:
      'EMR and EHR uptime, PACS storage, NABIDH and Malaffi connectivity, encrypted backups kept inside the UAE, and 24/7 support with a 15-minute remote response.',
  },
  intro:
    'A clinic or hospital in the UAE runs on its IT. When the EMR is down, reception cannot register patients and doctors cannot open results. When a backup sits on a server outside the country, the facility may be breaking federal law without knowing it. NOCKO designs, builds and supports IT infrastructure for healthcare providers in Dubai and Abu Dhabi with the local rules built in from day one. We are an IT company, not a regulator or an auditor, and we do not certify anyone. We build systems that make compliance with DoH, DHA and federal health data rules practical for your staff.',
  blocks: [
    {
      title: 'The rules that shape healthcare IT in the UAE',
      text: '<p>Four sets of rules decide how a medical facility in the UAE must store, move and protect patient data. Every project we deliver is planned around them.</p><p><strong>DoH ADHICS.</strong> The Abu Dhabi Healthcare Information and Cyber Security Standard, issued by the Department of Health Abu Dhabi (DoH), sets the information security controls that licensed facilities in the emirate are expected to apply.</p><p><strong>DHA requirements.</strong> The Dubai Health Authority (DHA) sets the licensing and health data protection requirements for facilities in Dubai, including how patient data is handled and shared.</p><p><strong>Malaffi and NABIDH.</strong> Malaffi is the health information exchange for Abu Dhabi and NABIDH is the one for Dubai; licensed facilities connect to them so patient records can be shared with other providers in the same emirate.</p><p><strong>UAE Federal Law No. 2 of 2019 on the Use of ICT in Health Fields.</strong> This federal law requires health data to be stored and processed inside the UAE unless one of the permitted exceptions applies.</p><p><strong>UAE PDPL.</strong> Federal Decree-Law No. 45 of 2021 is the federal personal data protection law and governs how personal data, including patient data, is collected, processed and secured.</p><p>NOCKO is not certified or accredited by any of these bodies. We build infrastructure that supports your compliance with them and give your compliance officer the documentation to show it.</p>',
      list: [
        '<li>Patient data and its backups stored on servers inside the UAE</li>',
        '<li>Access to medical records tied to named users and defined roles</li>',
        '<li>Documented controls that map to ADHICS and DHA checklists</li>',
      ],
    },
    {
      title: 'Keeping EMR, PACS and the NABIDH or Malaffi link running',
      text: '<p>The EMR or EHR is the system the whole facility depends on. Registration, orders, prescriptions, lab results and billing all pass through it. We host it on redundant hardware, put it behind a firewall and monitor it 24/7, with a 99.9% uptime SLA for the systems you mark as critical. PACS gets the same care: radiology images are large and accumulate for years, so we size storage for growth and keep a second copy inside the UAE.</p><p>A facility licensed in Dubai is expected to connect to NABIDH, and one licensed in Abu Dhabi to Malaffi. Your EMR vendor and the exchange operator set up the connection, but it only works if the network behind it is stable. We provide an internet link with a backup line, a secure channel for the integration interface, firewall rules limited to the traffic the exchange needs, and monitoring so a dropped connection is noticed within minutes. We also work with your EMR vendor on the HL7 and FHIR interfaces that carry the data.</p>',
      list: [
        '<li>Redundant servers, UPS and network paths for EMR, EHR and PACS</li>',
        '<li>Primary and backup internet links with automatic failover</li>',
        '<li>Monitoring of the NABIDH or Malaffi interface with alerts when data stops flowing</li>',
      ],
    },
    {
      title: 'Segmented networks for medical devices',
      text: '<p>Imaging machines, lab analysers, patient monitors and infusion pumps often run old operating systems that cannot be patched. If they share a network with front desk PCs and guest Wi-Fi, one infected laptop can reach them.</p><p>We split the network into zones: medical devices in their own segment, clinical workstations in another, administration in a third, and guest Wi-Fi fully separated. Traffic between zones passes through the firewall and only the connections a device needs are allowed. This is a control ADHICS and DHA assessors look for, and it keeps a ransomware incident away from equipment you cannot replace quickly.</p>',
      list: [
        '<li>Separate VLANs for medical devices, clinical staff, administration and guests</li>',
        '<li>Inventory of every connected device and its operating system</li>',
        '<li>Network access control so unknown devices cannot join clinical segments</li>',
      ],
    },
    {
      title: 'Encrypted backups that stay in the UAE',
      text: '<p>A backup only counts if it restores, and in healthcare it only counts if it stays in the country. We encrypt backups at rest and in transit, keep them in UAE data centres and run scheduled test restores, so you know the EMR can come back after a hardware failure or a ransomware attack.</p><p>For one UAE medical clinic we replaced manual EMR backups with an automated, verified process that also produced the reports their compliance officer needed. Read how it was done in our case study: <a href="/case-studies/emr-backup">How a UAE Medical Clinic Automated EMR Backup and Compliance Reporting</a>.</p>',
      list: [
        '<li>Encrypted EMR, EHR and PACS backups stored inside the UAE</li>',
        '<li>Scheduled restore tests with written results</li>',
        '<li>Offline or immutable copy to survive a ransomware attack</li>',
      ],
    },
    {
      title: 'Access control, audit logs and 24/7 support',
      text: '<p>Every regulator on this page asks the same two questions: who can see patient data, and can you prove who saw it. We set up role-based access so a receptionist, a nurse and a consultant each see only what their job requires, add multi-factor authentication for remote and admin access, and keep audit logs of every login and every change to a record.</p><p>Support runs 24/7 because clinics do not close at six. Our helpdesk responds to remote requests within 15 minutes. When a problem needs hands on site, an engineer reaches you within 2 hours anywhere in Dubai, and same day across Abu Dhabi and the other Emirates.</p>',
      list: [
        '<li>Role-based access and multi-factor authentication for EMR, PACS and file shares</li>',
        '<li>Central audit logs with retention for regulator requests</li>',
        '<li>24/7 helpdesk, 15-minute remote response, on-site within 2 hours in Dubai</li>',
      ],
    },
    {
      title: 'Frequently Asked Questions',
      text: '<h3>Does patient data have to stay inside the UAE?</h3><p>Yes, as a rule. UAE Federal Law No. 2 of 2019 requires health data to be stored and processed inside the country unless an exception applies. We keep every copy of patient data, including backups, in a UAE data centre and document where each copy is.</p><h3>Can NOCKO make our clinic ADHICS or DHA compliant?</h3><p>We cannot certify you, and we do not claim to. Compliance is confirmed by the regulator or an assessor they recognise. We build and run infrastructure that supports the controls ADHICS and DHA ask for, with documentation your compliance officer can present.</p><h3>Do you replace our EMR or work with the vendor we already have?</h3><p>We work with your existing EMR or EHR vendor. We take care of the servers, network, storage, backups and security around the application, and coordinate with the vendor on hosting, upgrades and the NABIDH or Malaffi interface.</p><h3>How fast do you respond when the EMR goes down?</h3><p>Our helpdesk is staffed 24/7 and responds to remote requests within 15 minutes. If an engineer is needed on site, we reach you within 2 hours anywhere in Dubai and same day in Abu Dhabi. Systems under our 99.9% uptime SLA are monitored around the clock.</p><h3>Can you connect our clinic to NABIDH or Malaffi?</h3><p>The connection is set up between your EMR vendor and the exchange operator. Our part is the network and security behind it: a stable link with failover, a secure path for the interface, firewall rules and monitoring. We join the calls with your vendor so the requirements are met on the first attempt.</p>',
    },
  ],
};

export default function HealthcarePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          name: industryData.hero.title,
          description: metadata.description,
          isPartOf: { '@id': 'https://nocko.com/#website' },
          about: { '@id': 'https://nocko.com/#organization' },
        }}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '#' },
          { label: 'Healthcare' },
        ]}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={industryData.hero.title}
          subtitle={industryData.hero.subtitle}
          description={industryData.hero.description}
        />
        <div className="container">
          <div className="article">
            <ArticleContent intro={industryData.intro} blocks={industryData.blocks} />
          </div>
        </div>
        <ServiceCTA
          title="Need help choosing?"
          text="Talk to an engineer."
          ctaText="Request a Free Consultation"
          ctaUrl="#contact"
        />
      </main>
      <Footer />
    </>
  );
}
