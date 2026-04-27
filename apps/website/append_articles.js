const fs = require('fs');
const path = require('path');

const jsonPath = '/Users/rakhat/Documents/webhosting/nocko-platform/apps/website/lib/data/staticArticles.json';

const newArticles = [
  {
    slug: 'managed-it-co-managed',
    title: 'Co-Managed IT: The Best of Both Worlds',
    excerpt: 'A guide for IT Directors on how to effectively outsource tedious NOC alerts while maintaining control of corporate strategy. We integrate directly with your internal team.'
  },
  {
    slug: 'cloud-zero-trust',
    title: 'Defending Your Cloud with Zero Trust',
    excerpt: 'Understand the shared responsibility model and why IAM security is critical for your Azure deployment. Do not leave your cloud endpoints exposed.'
  },
  {
    slug: 'cybersecurity-antivirus-dead',
    title: 'Why standard Antivirus is dead in 2024',
    excerpt: 'Understand the stark technical difference between legacy signature-based Antivirus and behavioral AI-driven EDR platforms like CrowdStrike.'
  },
  {
    slug: 'it-support-onboarding',
    title: 'Why Microsoft 365 Onboarding takes Too Long',
    excerpt: 'Discover how integrating Windows Autopilot with Azure AD completely eliminates manual laptop configuration within your IT department.'
  },
  {
    slug: 'it-amc-vs-msp',
    title: 'The AMC vs MSP Decision Guide',
    excerpt: 'Understand the critical difference between inclusive scopes and exclusive out-of-scope hardware capital expenditures. Choose the right contract for your business.'
  },
  {
    slug: 'it-amc-hardware-lifecycle',
    title: 'Hardware Lifecycle Management',
    excerpt: 'An executive breakdown of why saving $500 on a cheap AMC contract will cost you $50,000 during a 3-day server outage due to aging hardware.'
  },
  {
    slug: 'it-consulting-ransomware-survival',
    title: 'Surviving a Ransomware Strike',
    excerpt: 'Understand exactly what RTO and RPO mean, and how to architect a Disaster Recovery plan that actually works under the pressure of a real-world breach.'
  },
  {
    slug: 'structured-cabling-fiber-vs-cat6a',
    title: 'The Guide to Cat6A vs Fiber Optic',
    excerpt: 'A deep dive into Cat6 vs Cat6A, the necessity of Fluke certification, and managing physical layer deployments for modern smart offices.'
  },
  {
    slug: 'structured-cabling-fluke-importance',
    title: 'Why Fluke Testing is Non-Negotiable',
    excerpt: 'Understand how RF interference and physical materials block consumer routers, and why Ekahau heatmapping and Fluke testing is mandatory.'
  }
];

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

newArticles.forEach(a => {
  data.push({
    id: `static-${a.slug}`,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt
  });
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log('Appended 9 new articles to staticArticles.json');
