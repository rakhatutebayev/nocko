import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'AWS and Azure Cloud Security | NOCKO UAE',
  description: 'NOCKO governs the customer side of the AWS and Azure Shared Responsibility Model — IAM hardening, OS patching, encryption key custody, and network security groups — keeping UAE cloud workloads secure and audit-ready.',
  alternates: {
    canonical: '/articles/cloud-security-compliance',
    languages: {
      'en-AE': '/articles/cloud-security-compliance',
      'ru-RU': '/ru/articles/cloud-security-compliance',
    },
  },
};

const articleData = {
  hero: {
    title: 'AWS and Azure Cloud Security',
    subtitle: 'Navigating the Shared Responsibility Model securely',
    description: 'You are still responsible for your own data security in the cloud.',
  },
  intro: 'Migrating to Microsoft Azure does not magically make your data immune to hackers. The hypervisor is secured by Microsoft, but the Identity and Access Management (IAM), operating system patches, and application security remains solely your responsibility. We govern and heavily encrypt your entire IaaS stack.',
  blocks: [
    {
      title: 'IAM Hardening and Least-Privilege Enforcement',
      text: '<p>The most common entry point for cloud breaches is over-permissioned IAM credentials. We audit every AWS IAM role and Azure RBAC assignment, removing wildcard permissions (Action: "*") and replacing them with scoped policies aligned to actual job function. We enforce MFA on all IAM users and disable root account access keys entirely on AWS accounts.</p><p>Service accounts are transitioned to role-based authentication (AWS instance profiles, Azure Managed Identities) so that application credentials are never stored in code repositories — a critical finding in nearly every UAE cloud security audit we conduct.</p>',
      list: [
        'IAM permission audit and least-privilege remediation',
        'Root account lockdown and MFA enforcement',
        'Managed Identities replacing hardcoded service account credentials',
        'AWS Organizations SCPs blocking dangerous actions across all accounts',
        'Azure PIM (Privileged Identity Management) for just-in-time admin access',
      ],
    },
    {
      title: 'Network Security and Encryption',
      text: '<p>Default cloud network configurations are far too permissive. We audit and tighten every Security Group and Network Security Group, closing inbound SSH and RDP to the public internet entirely — replacing with AWS Systems Manager Session Manager or Azure Bastion for administrative access. All inter-service traffic is routed through private VPC/VNet endpoints, never traversing the public internet.</p><p>Storage accounts and RDS instances are encrypted with Customer Managed Keys (CMK) rotated every 90 days, and we enable AWS CloudTrail or Azure Diagnostic Logs across all services, feeding into a centralised SIEM for anomaly detection.</p>',
    },
    {
      title: 'Continuous Compliance Scanning',
      text: '<p>Cloud configurations drift over time as developers make ad-hoc changes. We deploy AWS Security Hub with CIS Benchmark controls enabled, or Azure Security Centre with Defender for Cloud, sending real-time alerts when a security group is opened to 0.0.0.0/0 or public blob access is enabled on a storage account.</p><p>Weekly compliance reports are sent to your IT manager and CISO, showing the current security score and any open findings ranked by severity. For NESA-regulated entities, we map these findings directly to the NESA IA control framework for audit evidence.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Does moving to Azure or AWS automatically make us NESA compliant?</strong><br/>A: No — the cloud provider secures the infrastructure, but you remain responsible for IAM, encryption, patching, and network configuration. We handle all of those for you.',
        '<strong>Q: How often should we rotate encryption keys?</strong><br/>A: NESA IA guidelines recommend 90-day key rotation for sensitive data. We automate this via AWS KMS automatic rotation or Azure Key Vault rotation policies.',
        '<strong>Q: What is the risk of leaving default Security Group rules in place?</strong><br/>A: Default rules in AWS allow all outbound traffic and typically have broad inbound rules for common services. This creates unnecessary exposure — we close all unnecessary ports as part of initial hardening.',
        '<strong>Q: Can you help us pass a cloud security audit for a UAE government tender?</strong><br/>A: Yes — we produce audit-ready evidence packages including AWS Config compliance reports, IAM access reviews, and encryption documentation formatted for UAE government and NESA audit requirements.',
      ],
    },
  ],
};

export default function CloudsecuritycompliancePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-06-03', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Cloud' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
