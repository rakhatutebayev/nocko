import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';

export const metadata: Metadata = {
  title: 'Backup and Disaster Recovery Management | Data Backup Services UAE | NOCKO',
  description:
    'Comprehensive backup and disaster recovery management services in UAE. Automated backups, regular testing, recovery procedures, and quick system restoration. Ensure your data is safe and recoverable, and your business can continue operating after disasters.',
  keywords:
    'backup and disaster recovery UAE, data backup services Dubai, disaster recovery management, automated backups, data recovery services UAE',
  openGraph: {
    title: 'Backup and Disaster Recovery Management | Data Backup Services UAE | NOCKO',
    description:
      'Comprehensive backup and disaster recovery management services in UAE. Automated backups, regular testing, recovery procedures, and quick system restoration.',
    type: 'article',
    locale: 'en_AE',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/articles/managed-it-backup',
  },
};

const articleData = {
  hero: {
    title: 'Backup and Disaster Recovery Management',
    subtitle: 'Comprehensive Data Protection and Recovery Services in UAE',
    description: '',
  },
  intro:
    'Data loss and system failures can devastate businesses. Without proper backups and disaster recovery plans, you risk losing critical data, experiencing extended downtime, and facing significant business disruption. Backup and disaster recovery management ensures your data is safe, your systems are recoverable, and your business can continue operating even after disasters.',
  blocks: [
    {
      title: 'What Backup and Disaster Recovery Management Includes',
      text: '<p>Backup and disaster recovery management covers all aspects of protecting your data and ensuring business continuity. We implement automated backup systems, test backups regularly, maintain disaster recovery plans, and ensure quick system restoration. Everything needed for data protection and recovery is managed comprehensively.</p><p>We also monitor backup systems, verify data integrity, maintain off-site backups, and document recovery procedures. Regular testing ensures backups work correctly and recovery procedures are effective. If disaster strikes, we restore your systems quickly so your business can continue operating.</p>',
      list: [
        '<li>Automated backup systems and scheduling</li>',
        '<li>Regular backup testing and verification</li>',
        '<li>Disaster recovery planning and documentation</li>',
        '<li>Off-site backup storage and redundancy</li>',
        '<li>Quick system restoration procedures</li>',
        '<li>Data integrity monitoring and validation</li>',
      ],
      image: '/images/services/managed-it-backup.png',
      imageAlt: 'Backup and disaster recovery management services',
    },
    {
      title: 'Benefits of Comprehensive Backup Management',
      text: '<p>Comprehensive backup management provides peace of mind knowing your data is protected and recoverable. You don\'t need to worry about data loss, system failures, or extended downtime. Our backup experts ensure everything is protected and recoverable.</p><p>You also benefit from faster recovery times, reduced data loss risk, business continuity assurance, and compliance with data protection requirements. With dedicated backup management, your data stays safe, and your business can recover quickly from any disaster.</p>',
      list: [
        '<li>Peace of mind with protected data</li>',
        '<li>Faster recovery from disasters</li>',
        '<li>Reduced risk of data loss</li>',
        '<li>Business continuity assurance</li>',
        '<li>Compliance with data protection requirements</li>',
        '<li>Lower risk of extended downtime</li>',
      ],
    },
    {
      title: 'Disaster Recovery Planning and Testing',
      text: '<p>Having backups isn\'t enough—you need effective disaster recovery plans and regular testing. We develop comprehensive disaster recovery plans that document recovery procedures, identify critical systems, and establish recovery time objectives. Regular testing ensures plans work correctly.</p><p>We test backups regularly to verify data integrity and recovery procedures. We simulate disaster scenarios to ensure recovery plans are effective. We update plans as your business changes and document everything for quick reference during actual disasters.</p>',
      list: [
        '<li>Comprehensive disaster recovery planning</li>',
        '<li>Regular backup and recovery testing</li>',
        '<li>Recovery time objective (RTO) planning</li>',
        '<li>Recovery point objective (RPO) planning</li>',
        '<li>Disaster scenario simulation and testing</li>',
        '<li>Continuous plan updates and improvements</li>',
      ],
    },
  ],
};

export default function ManagedITBackupPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


