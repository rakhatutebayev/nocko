import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'IT Solutions for Healthcare | NOCKO UAE',
  description:
    'Secure IT solutions for healthcare providers in UAE. EMR/EHR systems, medical network infrastructure, HIPAA compliance, data security, and 24/7 support for clinics and hospitals.',
  keywords:
    'IT solutions healthcare UAE, medical IT services Dubai, healthcare network infrastructure, EMR EHR systems UAE, healthcare cybersecurity',
  openGraph: {
    title: 'IT Solutions for Healthcare | NOCKO UAE',
    description:
      'Secure IT solutions for healthcare providers in UAE. EMR/EHR systems, network infrastructure, compliance, and 24/7 support.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/industries/healthcare',
  },
};

const industryData = {
  hero: {
    title: 'IT Solutions for Healthcare',
    subtitle: 'Secure, Compliant, and Reliable Technology for Medical Facilities',
    description: '',
  },
  intro:
    'Healthcare providers require secure, reliable IT systems to protect patient data, ensure continuous availability, and comply with regulations. Our solutions deliver medical-grade infrastructure, EMR/EHR integration, and 24/7 support for clinics, hospitals, and medical centers.',
  blocks: [
    {
      title: 'Patient Data Security & Compliance',
      text: '<p>Healthcare facilities handle sensitive patient data that must be protected and managed in compliance with regulations. We implement security measures, access controls, and encryption to safeguard electronic health records and ensure regulatory compliance.</p><p>Our solutions include data backup, disaster recovery, and audit logging to protect patient information and maintain operational continuity.</p>',
      list: [
        '<li>HIPAA and local healthcare compliance support</li>',
        '<li>Data encryption and secure storage</li>',
        '<li>Role-based access control (RBAC)</li>',
        '<li>Audit trails and activity logging</li>',
        '<li>Secure patient portal integration</li>',
        '<li>Regular compliance assessments</li>',
      ],
    },
    {
      title: 'EMR/EHR Systems & Integration',
      text: '<p>Electronic medical records are the backbone of modern healthcare. We implement, integrate, and support EMR/EHR systems, ensuring seamless data flow between departments, medical devices, and external systems.</p><p>Our integration services connect lab systems, imaging equipment, billing platforms, and appointment scheduling to create a unified healthcare IT environment.</p>',
      list: [
        '<li>EMR/EHR implementation and migration</li>',
        '<li>HL7 and FHIR integration standards</li>',
        '<li>Medical device connectivity (PACS, lab systems)</li>',
        '<li>Pharmacy and billing system integration</li>',
        '<li>Telemedicine platform setup</li>',
        '<li>Mobile access for healthcare providers</li>',
      ],
    },
    {
      title: 'High-Availability Medical Networks',
      text: '<p>Healthcare facilities cannot afford downtime. We design and deploy redundant network infrastructure with failover capabilities, backup power, and 24/7 monitoring to ensure continuous availability.</p><p>Our medical-grade networks support critical applications, real-time imaging, video consultations, and electronic prescriptions with reliability and performance.</p>',
      list: [
        '<li>Redundant network design with failover</li>',
        '<li>Uninterrupted power supply (UPS) integration</li>',
        '<li>99.9%+ uptime SLA for critical systems</li>',
        '<li>24/7 network monitoring and support</li>',
        '<li>Wireless networks for medical devices</li>',
        '<li>Secure guest Wi-Fi for patients and visitors</li>',
      ],
    },
  ],
};

export default function HealthcarePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: industryData.hero.title,
          description: metadata.description,
          datePublished: '2026-01-23',
          dateModified: '2026-01-23',
          author: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NOCKO Information Technology',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo-white.svg`,
            },
          },
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
      </main>
      <Footer />
    </>
  );
}
