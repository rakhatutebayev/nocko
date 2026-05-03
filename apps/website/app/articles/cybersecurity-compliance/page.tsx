import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'NESA & SIA IT Compliance | NOCKO UAE',
  description: 'NOCKO aligns UAE businesses with NESA Information Assurance standards and SIA cybersecurity requirements — from physical access controls and cryptographic key rotation to log retention and incident response documentation for federal audits.',
  alternates: {
    canonical: '/articles/cybersecurity-compliance',
    languages: {
      'en-AE': '/articles/cybersecurity-compliance',
      'ru-RU': '/ru/articles/cybersecurity-compliance',
    },
  },
};

const articleData = {
  hero: {
    title: 'NESA & SIA IT Compliance',
    subtitle: 'Adhering strictly to UAE Federal cybersecurity laws',
    description: 'We harden your infrastructure to pass massive federal security compliance audits.',
  },
  intro: 'Operating a financial or governmental entity in the UAE requires passing grueling NESA (National Electronic Security Authority) or SIA audits. We align your entire technical framework—from physical access logs to cryptographic key rotation—assuring you pass compliance evaluations flawlessly.',
  blocks: [
    {
      title: 'NESA Information Assurance Framework Alignment',
      text: '<p>The UAE National Electronic Security Authority (NESA) Information Assurance standards define technical and procedural controls for critical information infrastructure operators and government-connected entities. We conduct a gap assessment against the NESA IA framework, mapping your current controls to each requirement domain: access control, cryptography, change management, incident response, physical security, and business continuity.</p><p>Gaps are remediated in order of criticality with full technical documentation. The final deliverable is an evidence package structured to match the audit assessment criteria, giving your auditors the exact artefacts they need without requiring additional data collection during the assessment window.</p>',
      list: [
        'Gap assessment against NESA IA domains',
        'Remediation roadmap prioritised by audit risk level',
        'Physical access control logs and CCTV retention documentation',
        '90-day encryption key rotation implementation and evidence',
        'Incident response procedure documentation and drill records',
      ],
    },
    {
      title: 'SIA and DFSA Technology Compliance',
      text: '<p>Securities and Commodities Authority (SCA) and DFSA regulated financial entities in Dubai and Abu Dhabi face technology governance requirements covering data classification, system availability, change management, and third-party supplier risk. We map your IT controls to these requirements and implement missing technical controls such as privileged access management, patch management with SLA evidence, and network monitoring logs.</p><p>For ADGM entities, we also address the FSRA Technology Risk Guidelines, which closely mirror UK FCA standards and require documented vulnerability management programmes and annual penetration testing.</p>',
    },
    {
      title: 'Annual Penetration Testing and Remediation',
      text: '<p>Both NESA and financial regulators require documented evidence of regular penetration testing. We coordinate external penetration tests through approved UAE penetration testing firms and manage the remediation of findings against agreed timelines, producing a re-test report that confirms closure of critical and high vulnerabilities before submission to auditors.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: How long does a NESA compliance preparation engagement take?</strong><br/>A: From gap assessment to audit-ready status typically takes 3–6 months depending on the size of your infrastructure and the number of gaps identified.',
        '<strong>Q: Are international standards like ISO 27001 accepted in place of NESA IA?</strong><br/>A: ISO 27001 certification is recognised and can reduce the scope of a NESA audit, but it does not replace NESA IA requirements for critical information infrastructure operators.',
        '<strong>Q: What happens if we fail a NESA audit?</strong><br/>A: NESA issues a non-conformance report with a remediation deadline. We have supported companies through multiple remediation cycles and can represent your organisation during the follow-up audit.',
        '<strong>Q: Does DFSA compliance cover cybersecurity specifically?</strong><br/>A: Yes — the DFSA Technology Governance Guidelines (TGN) cover cybersecurity, operational resilience, and outsourcing risk. We produce control documentation specifically formatted for DFSA submissions.',
      ],
    },
  ],
};

export default function CybersecuritycompliancePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-08-11', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cybersecurity' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
