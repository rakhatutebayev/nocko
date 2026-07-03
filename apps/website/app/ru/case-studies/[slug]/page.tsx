import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import StructuredData from '@/components/seo/StructuredData';
import { getCaseStudy, getCaseStudies } from '@/lib/api/strapi';

export const revalidate = 3600; // ISR: revalidate every hour

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const caseStudies = await getCaseStudies();
    return caseStudies.map((caseStudy) => ({
      slug: caseStudy.attributes.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy && slug === 'projection') {
    return {
      title: 'How Projection Improved IT Reliability with Annual Maintenance Contract | Case Study | NOCKO',
      description:
        'Projection improved uptime and response times with a structured Annual Maintenance Contract and proactive support across UAE.',
      keywords:
        'Projection case study, IT AMC UAE, annual maintenance contract Dubai, IT reliability, uptime improvement',
      openGraph: {
        title: 'How Projection Improved IT Reliability with Annual Maintenance Contract | NOCKO',
        description:
          'Projection improved uptime and response times with a structured Annual Maintenance Contract and proactive support across UAE.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'solus') {
    return {
      title: 'How Solus Insurance Enhanced Security with Enterprise Cybersecurity | Case Study | NOCKO',
      description:
        'Solus Insurance improved threat detection, reduced risk exposure, and strengthened compliance with enterprise cybersecurity services in UAE.',
      keywords:
        'Solus Insurance case study, enterprise cybersecurity UAE, threat detection, security compliance, zero trust',
      openGraph: {
        title: 'How Solus Insurance Enhanced Security with Enterprise Cybersecurity | NOCKO',
        description:
          'Solus Insurance improved threat detection, reduced risk exposure, and strengthened compliance with enterprise cybersecurity services in UAE.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'fh') {
    return {
      title: 'How FH Fundamental Migrated to Cloud with Zero Downtime | Case Study | NOCKO',
      description:
        'FH Fundamental achieved seamless cloud migration to AWS with zero downtime, improved performance, and enhanced scalability for business growth.',
      keywords:
        'FH Fundamental case study, cloud migration UAE, AWS migration Dubai, zero downtime migration, cloud transformation',
      openGraph: {
        title: 'How FH Fundamental Migrated to Cloud with Zero Downtime | NOCKO',
        description:
          'FH Fundamental achieved seamless cloud migration to AWS with zero downtime, improved performance, and enhanced scalability.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'scalini') {
    return {
      title: 'How Scalini Transformed Network Infrastructure Across 5 Locations | Case Study | NOCKO',
      description:
        'Scalini restaurant group standardized network infrastructure across 5 UAE locations with certified Cat6A cabling, centralized management, and 99.9% uptime.',
      keywords:
        'Scalini case study, network infrastructure UAE, structured cabling Dubai, multi-site network, restaurant IT infrastructure',
      openGraph: {
        title: 'How Scalini Transformed Network Infrastructure Across 5 Locations | NOCKO',
        description:
          'Scalini restaurant group standardized network infrastructure across 5 UAE locations with certified Cat6A cabling and centralized management.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'gss') {
    return {
      title: 'How Global Service Solution Achieved 24/7 IT Support Excellence | Case Study | NOCKO',
      description:
        'Global Service Solution maintains 24/7 IT support for critical flight dispatch operations with 99.8% uptime, 30-minute response time, and zero unscheduled downtime.',
      keywords:
        'Global Service Solution case study, 24/7 IT support UAE, aviation IT support Dubai, flight dispatch IT, mission-critical support',
      openGraph: {
        title: 'How Global Service Solution Achieved 24/7 IT Support Excellence | NOCKO',
        description:
          'Global Service Solution maintains 24/7 IT support for critical flight dispatch operations with 99.8% uptime and 30-minute response time.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'technohub') {
    return {
      title: 'How TechnoHub Transformed IT Operations with Managed Services | Case Study | NOCKO',
      description:
        'TechnoHub eliminated IT complexity with fully managed services, achieving 40% cost reduction, predictable budgets, and strategic IT alignment.',
      keywords:
        'TechnoHub case study, managed IT services UAE, IT outsourcing Dubai, managed services provider, IT transformation',
      openGraph: {
        title: 'How TechnoHub Transformed IT Operations with Managed Services | NOCKO',
        description:
          'TechnoHub eliminated IT complexity with fully managed services, achieving 40% cost reduction and predictable budgets.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'ransomware-recovery') {
    return {
      title: 'How We Isolated and Defeated Ransomware in 4 Hours | Case Study | NOCKO',
      description:
        'A Dubai logistics firm saved millions in downtime when our automated EDR isolated a phishing payload within minutes of execution.',
      keywords:
        'Ransomware recovery case study, cybersecurity response UAE, EDR deployment Dubai, phishing protection, zero downtime',
      openGraph: {
        title: 'How We Isolated and Defeated Ransomware in 4 Hours | NOCKO',
        description:
          'A Dubai logistics firm saved millions in downtime when our automated EDR isolated a phishing payload within minutes.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'm365-audit') {
    return {
      title: 'How an M365 Audit Saved a Dubai Firm 40% Annually | Case Study | NOCKO',
      description:
        'Discover how our forensic licensing audit eliminated duplicate SaaS tools and recovered $45,000 annually for a Dubai firm.',
      keywords:
        'Microsoft 365 audit case study, IT consulting UAE, software license optimization, IT cost reduction Dubai, SaaS audit',
      openGraph: {
        title: 'How an M365 Audit Saved a Dubai Firm 40% Annually | NOCKO',
        description:
          'Discover how our forensic licensing audit eliminated duplicate SaaS tools and recovered $45,000 annually for a Dubai firm.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'it-consulting') {
    return {
      alternates: { canonical: `/ru/case-studies/${slug}` },
      title: 'Как девелопер недвижимости в Дубае сократил ИТ-расходы на 35% благодаря ИТ-консалтингу | NOCKO',
      description:
        'Девелопер недвижимости из Дубая устранил теневое ИТ, объединил поставщиков и снизил годовые ИТ-расходы на 35% после аудита и дорожной карты под руководством vCIO NOCKO.',
      keywords:
        'ИТ-консалтинг Дубай, ИТ-стратегия ОАЭ, услуги vCIO Дубай, снижение ИТ-расходов, ИТ дорожная карта ОАЭ, ИТ-консалтинг для недвижимости',
      openGraph: {
        title: 'Как девелопер недвижимости в Дубае сократил ИТ-расходы на 35% благодаря ИТ-консалтингу | NOCKO',
        description:
          'Девелопер недвижимости из Дубая устранил теневое ИТ и снизил годовые ИТ-расходы на 35% благодаря стратегии под руководством vCIO NOCKO.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'enterprise') {
    return {
      alternates: { canonical: `/ru/case-studies/${slug}` },
      title: 'Как предприятие на 300 сотрудников объединило ИТ-инфраструктуру по всем ОАЭ | Кейс | NOCKO',
      description:
        'Логистическое предприятие из ОАЭ с 300 рабочими местами в 4 офисах объединило разрозненную ИТ-инфраструктуру, заменило 6 поставщиков и достигло аптайма 99,95% с Managed IT от NOCKO.',
      keywords:
        'корпоративное ИТ ОАЭ, управляемые ИТ-услуги Дубай, консолидация ИТ-инфраструктуры, ИТ-поддержка нескольких офисов ОАЭ, ИТ-аутсорсинг для предприятий',
      openGraph: {
        title: 'Как предприятие на 300 сотрудников объединило ИТ-инфраструктуру по всем ОАЭ | NOCKO',
        description:
          'Логистическое предприятие ОАЭ объединило разрозненное ИТ в 4 офисах, заменило 6 поставщиков, достигло аптайма 99,95%.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'cybersecurity') {
    return {
      alternates: { canonical: `/ru/case-studies/${slug}` },
      title: 'Как медицинская группа в ОАЭ прошла аудит HAAD без единого замечания | Кейс | NOCKO',
      description:
        'Медицинская группа из ОАЭ с 3 клиниками достигла полного соответствия требованиям кибербезопасности HAAD, устранила 7 критических уязвимостей и прошла регуляторный аудит без замечаний.',
      keywords:
        'кибербезопасность в здравоохранении ОАЭ, соответствие HAAD, защита медицинских данных Дубай, аудит кибербезопасности ОАЭ, ИТ-безопасность в медицине',
      openGraph: {
        title: 'Как медицинская группа в ОАЭ прошла аудит HAAD без единого замечания | NOCKO',
        description:
          'Медицинская группа ОАЭ достигла полного соответствия HAAD, устранила 7 критических уязвимостей и прошла аудит без замечаний.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'network-segmentation') {
    return {
      alternates: { canonical: `/ru/case-studies/${slug}` },
      title: 'Как мультиформатная группа в Дубае защитила сеть с помощью сегментации и FortiGate | Кейс | NOCKO',
      description:
        'Мультиформатная F&B-группа в Дубае заменила плоскую недокументированную сеть на сегментированную архитектуру с FortiGate и ядром Cisco — изолировав трафик POS, гостевой и офисной сети и защитив удалённый доступ.',
      keywords:
        'сегментация сети Дубай, межсетевой экран FortiGate ОАЭ, сегментация VLAN, аудит сети Дубай, структурированная сеть ОАЭ, IPsec VPN ОАЭ',
      openGraph: {
        title: 'Как мультиформатная группа в Дубае защитила сеть с помощью сегментации и FortiGate | Кейс | NOCKO',
        description:
          'Группа из Дубая заменила плоскую сеть на сегментированную архитектуру с FortiGate и ядром Cisco, изолировав POS, гостевой и офисный трафик и защитив удалённый доступ.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'emr-backup') {
    return {
      alternates: { canonical: `/ru/case-studies/${slug}` },
      title: 'Как медицинская клиника в ОАЭ автоматизировала резервное копирование EMR и отчётность о комплаенсе | Кейс | NOCKO',
      description:
        'Медицинская клиника в ОАЭ защитила системы EMR, диагностической визуализации и бухгалтерии с помощью автоматических ежедневных резервных копий на Synology Active Backup for Business и самоформирующегося ежедневного отчёта о соответствии.',
      keywords:
        'резервное копирование EMR ОАЭ, резервное копирование медицинских данных Дубай, аварийное восстановление в здравоохранении ОАЭ, Synology Active Backup, отчётность о комплаенсе резервного копирования, ИТ-бэкап для клиники',
      openGraph: {
        title: 'Как медицинская клиника в ОАЭ автоматизировала резервное копирование EMR и отчётность о комплаенсе | Кейс | NOCKO',
        description:
          'Клиника в ОАЭ защитила данные EMR, визуализации и бухгалтерии автоматическими ежедневными резервными копиями и самоформирующимися отчётами о соответствии.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'workspace-migration') {
    return {
      alternates: { canonical: `/ru/case-studies/${slug}` },
      title: 'Как гостиничная группа в Дубае перенесла Google Workspace во время ребрендинга без простоев | Кейс | NOCKO',
      description:
        'Во время корпоративного ребрендинга гостиничная группа из Дубая перенесла все почтовые ящики в новый домен Google Workspace без простоев и без потери истории переписки.',
      keywords:
        'миграция Google Workspace Дубай, миграция почты ОАЭ, миграция домена, миграция workspace ОАЭ, миграция почты без простоев, облачная миграция Дубай',
      openGraph: {
        title: 'Как гостиничная группа в Дубае перенесла Google Workspace во время ребрендинга без простоев | Кейс | NOCKO',
        description:
          'Гостиничная группа из Дубая перенесла все почтовые ящики в новый домен Google Workspace во время ребрендинга — без простоев и потери истории.',
        type: 'article',
      },
    };
  }

  if (!caseStudy) {
    notFound();
  }

  return {
    title: `${caseStudy.attributes.title} | Case Study | NOCKO`,
    description: caseStudy.attributes.testimonial || `Case study: ${caseStudy.attributes.title}`,
    keywords: `${caseStudy.attributes.title}, case study, IT success story UAE, ${caseStudy.attributes.industry}`,
    openGraph: {
      title: `${caseStudy.attributes.title} | NOCKO`,
      description: caseStudy.attributes.testimonial || `Case study: ${caseStudy.attributes.title}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  let caseStudy = await getCaseStudy(slug);

  if (!caseStudy && slug === 'projection') {
    caseStudy = {
      attributes: {
        title: 'How Projection Improved IT Reliability with a Dedicated AMC',
        client: 'Projection (Dubai & Abu Dhabi)',
        industry: 'IT AMC & Maintenance',
        challenge:
          '<p>Projection is a UAE-based company with three major offices across Dubai and Abu Dhabi, managing over 80 endpoints. Their legacy IT stack included aging switches, disorganized cabling, and unmanaged Wi-Fi. Support was purely reactive: employees wasted hours waiting for ad-hoc IT freelancers, and recurring incidents crippled productivity.</p><p>leadership required guaranteed response times (SLAs), physical hardware reliability across multiple Emirates, and a unified upgrade roadmap that wouldn\'t disrupt ongoing operations.</p>',
        solution:
          '<p>NOCKO introduced a strict Annual Maintenance Contract (AMC) combining 24/7 proactive NOC monitoring, quarterly physical preventive maintenance (PM) visits, and financially backed SLAs. The first 30 days were dedicated to complete IT asset discovery and network risk scoring.</p><p>We replaced failing patch panels, labeled all IDFs, and standardized switch configurations. A priority-based ServiceNow ticketing workflow provided transparent escalation, placing a dedicated Level-2 onsite engineer at their highest-traffic Business Bay office.</p>',
        results: {
          uptime: 'Achieved 99.9% uptime across core branch network services',
          responseTime: 'Average physical response time improved from 6 hours to under 2 hours (Dubai)',
          incidents: 'Critical Priority-1 incident volume reduced by 48% within 4 months',
          rollout: 'Completed phased Wi-Fi upgrades without downtime for client-facing systems',
          satisfaction: 'Internal Helpdesk satisfaction score increased from 3.6 to 4.7/5',
        },
        testimonial:
          '“We now have predictable costs, faster response, and a clear upgrade roadmap. The NOCKO AMC program completely removed the chaos from our multi-branch IT operations.”',
      },
    } as any;
  }

  if (!caseStudy && slug === 'solus') {
    caseStudy = {
      attributes: {
        title: 'How Solus Insurance Enhanced Security with Enterprise Cybersecurity',
        client: 'Solus Insurance (DIFC)',
        industry: 'Cybersecurity & Compliance',
        challenge:
          '<p>Solus Insurance manages highly sensitive financial and customer data within the Dubai International Financial Centre (DIFC). Their legacy security stack had grown organically, leaving blind spots across remote endpoints and Azure cloud workloads.</p><p>Facing strict new compliance requirements from the UAE NESA and DFSA frameworks, Solus needed enterprise-grade threat detection, instant incident response, and a Zero Trust posture without slowing down their brokers.</p>',
        solution:
          '<p>We deployed a comprehensive Zero Trust cybersecurity architecture featuring centralized 24/7 SOC monitoring, EDR (Endpoint Detection and Response) hardening, and micro-segmented network access.</p><p>The deployment included firewall policy optimization, automated phishing simulation for brokers, and a structured Incident Response payload entirely aligned to DFSA regulatory compliance standards.</p>',
        results: {
          detection: 'Reduced average ransomware/threat detection time from hours to under 4 minutes',
          coverage: '100% EDR visibility across all DIFC offices and remote broker laptops',
          incidents: 'False-positive security alerts reduced by 42% within 90 days',
          compliance: 'Successfully passed annual DFSA IT audits with zero critical findings',
          response: 'Automated containment isolates infected endpoints in seconds',
        },
        testimonial:
          '“We gained visibility across our entire multi-cloud environment and a clear response plan. Security is now an automated compliance asset, not a daily IT headache.”',
      },
    } as any;
  }

  if (!caseStudy && slug === 'fh') {
    caseStudy = {
      attributes: {
        title: 'How FH Fundamental Migrated to AWS UAE with Zero Downtime',
        client: 'FH Fundamental',
        industry: 'Cloud & Data Services',
        challenge:
          '<p>FH Fundamental operated entirely on aging on-premises infrastructure located in a local server room. The physical hardware constrained their scalability, required heavy CapEx for upgrades, and posed a significant disaster recovery risk during power fluctuations.</p><p>They needed a seamless migration path to the cloud that ensured absolute zero downtime, strictly adhered to UAE TRA data residency requirements, and allowed for rapid deployment of new web services.</p>',
        solution:
          '<p>NOCKO engineered a phased cloud migration targeting the AWS Middle East (UAE) Region, utilizing parallel-run capabilities to validate workloads before final DNS cutover. We utilized a strategic mix of Lift-and-Shift for legacy ERPs and selective re-platforming (Docker) for high-traffic web applications.</p><p>Pre-migration ekahau testing, synchronized block-level data replication, and strict rollback plans guaranteed safety. Production cutovers were executed during predetermined 3 AM maintenance windows.</p>',
        results: {
          uptime: 'Achieved 100% zero downtime during the live migration of 12 production databases',
          performance: 'Database query response times improved by 35% utilizing AWS NVMe instances',
          scalability: 'Auto-scaling enabled for peak ramadan traffic periods without manual intervention',
          residency: '100% Compliance with UAE TRA data residency regulations',
          reliability: 'Total infrastructure uptime improved from 98.2% to 99.99%',
        },
        testimonial:
          '"The AWS migration was completely invisible to our users. Our teams kept working without interruption, and we instantly gained the enterprise speed and reliability we could never afford on-premise."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'scalini') {
    caseStudy = {
      attributes: {
        title: 'How Scalini Standardized Network Infrastructure Across 5 Locations',
        client: 'Scalini Restaurant Group',
        industry: 'Structured Cabling',
        challenge:
          '<p>Scalini operates 5 high-end restaurant locations across Dubai and Abu Dhabi. Each site was cabled independently by different contractors, resulting in uncertified cabling patches, unlabeled IDFs, and massive Wi-Fi dead zones. Constant POS drops during peak dining hours led directly to lost revenue.</p><p>Their IT team demanded a standardized physical layer capable of unified reservation systems, 4K security cameras, and uninterrupted guest Wi-Fi across all Emirates.</p>',
        solution:
          '<p>NOCKO executed a unified Structured Cabling overhaul across all 5 properties. Each site received certified Cat6A runs to support 10Gbps backbone links, meticulously labeled patch panels, and 25-year manufacturer warranties. </p><p>Utilizing Ekahau predictive heatmapping, we strategically placed enterprise access points to eliminate concrete and kitchen interference. All installations were strictly validated with Fluke DSX CableAnalyzers, and complete as-built CAD documentation was handed over.</p>',
        results: {
          coverage: '100% Enterprise Wi-Fi coverage across all VIP dining and kitchen areas',
          uptime: 'Achieved 99.99% network uptime for mission-critical POS systems',
          deployment: 'Completed night-shift physical rollouts across 5 locations without disrupting daytime operations',
          standardization: 'Single flawless Fluke-certified cabling standard across all restaurants',
          scalability: 'Fully documented physical backbone ready for their next 3 location expansions',
        },
        testimonial:
          '"Our restaurant networks used to be a terrifying black box. Now, every location has the exact same Fluke-certified setup, and we can finally focus on VIP guest experiences instead of apologizing for dropped Wi-Fi."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'gss') {
    caseStudy = {
      attributes: {
        title: 'How Global Service Solution Achieved 24/7 Flight IT Support',
        client: 'Global Service Solution (Aviation Hub)',
        industry: 'IT Support & Helpdesk',
        challenge:
          '<p>Global Service Solution operates a hyper-critical 24/7 flight dispatch center coordinating aircraft across the Middle East. Their dispatchers rely entirely on real-time weather software, secure VPNs, and compliance-heavy flight planning systems.</p><p>Standard "9-to-5" IT contractors were failing them. Any overnight IT downtime directly grounded flights. They demanded a guaranteed 24/7 Helpdesk with instant remote diagnostics and zero tolerance for missed SLAs.</p>',
        solution:
          '<p>NOCKO implemented an aviation-grade 24/7 IT Support workflow. We assigned dedicated onsite engineers during peak dispatch hours and seamlessly handed over to our remote NOC (Network Operations Center) for overnight coverage.</p><p>Our L2 engineers integrated ServiceNow ticketing with VIP escalation paths to ensure any dispatcher issue was addressed instantly within 15 minutes. Proactive MDM endpoint monitoring detects laptop failures before dispatchers even report them.</p>',
        results: {
          uptime: 'Achieved 99.9% availability for dispatch terminals with zero unscheduled downtime',
          response: 'Average Helpdesk remote triage time of under 10 minutes for Priority-1 incidents',
          availability: 'True 24/7/365 coverage with continuous holiday rotations',
          incidents: 'Avoidable hardware crashes reduced by 62% via proactive MDM monitoring',
          satisfaction: 'Flight Dispatch team satisfaction rating hit 4.9/5',
        },
        testimonial:
          '"Aviation never sleeps, and now our IT support doesn\'t either. NOCKO is always online, instantly fixing VPN drops before they can delay our flight schedules."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'technohub') {
    caseStudy = {
      attributes: {
        title: 'How TechnoHub Transformed Operations with Full Managed IT (MSP)',
        client: 'TechnoHub',
        industry: 'Managed Services (MSP)',
        challenge:
          '<p>TechnoHub, a growing consultancy in Dubai Media City, was bleeding money on fragmented IT contractors. Their solo internal IT manager was overwhelmed by reactive password resets, disjointed vendor management (Du/Etisalat), and manual laptop setups for new hires.</p><p>The lack of strategic IT leadership led to massive Shadow IT spending. They needed a Managed Service Provider (MSP) to completely take over daily operations while providing executive-level guidance.</p>',
        solution:
          '<p>We transitioned TechnoHub to a comprehensive NOCKO Managed Services agreement (MSP). We became their entire IT department overnight, absorbing all Helpdesk requests, SOC security monitoring, and hardware lifecycle procurement.</p><p>Through our embedded Virtual CTO (vCTO) program, we consolidated their SaaS vendors, audited Microsoft 365 licenses to eliminate bloat, and shifted their erratic IT spending into a predictable, flat-rate monthly OPEX model.</p>',
        results: {
          cost: 'Total IT operational costs dropped by 40% purely through SaaS vendor consolidation',
          predictability: 'Transitioned to a flat-rate monthly per-user OPEX with zero hidden invoices',
          focus: 'Internal management freed entirely from daily IT firefighting',
          security: 'Achieved Zero Trust security posture with 24/7 automated patching',
          alignment: 'Quarterly vCTO roadmap meetings ensure IT strictly supports their revenue goals',
        },
        testimonial:
          '"NOCKO\'s Managed Services removed every ounce of IT friction. We finally have a predictable budget, bulletproof security, and a vCTO who understands our growth. They aren\'t contractors; they are our IT department."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'ransomware-recovery') {
    caseStudy = {
      attributes: {
        title: 'Defeating Ransomware: A 4-Hour Recovery',
        client: 'Global Logistics Firm (Dubai)',
        industry: 'Cybersecurity Incident Response',
        challenge:
          '<p>A leading Dubai-based logistics firm faced a critical security incident when an employee unknowingly clicked a malicious phishing link hidden within a forged vendor invoice. The payload, a sophisticated zero-day ransomware variant, immediately attempted to establish lateral movement across their internal network, aiming to encrypt mission-critical shipping manifest databases.</p><p>With hundreds of containers actively moving through Jebel Ali Port, even a single day of database downtime would result in millions of dirhams in SLA penalties and supply chain chaos.</p>',
        solution:
          '<p>Fortunately, NOCKO had recently deployed an advanced Endpoint Detection and Response (EDR) agent across their entire fleet. Within milliseconds of the payload executing, the EDR’s behavioral AI flagged the anomalous encryption attempt.</p><p>The system automatically severed the infected machine’s connection to the corporate network, containing the "blast radius" to a single laptop. NOCKO\'s 24/7 SOC analysts were immediately alerted, allowing our Incident Response team to remotely wipe the compromised device and restore it from an immutable cloud backup.</p>',
        results: {
          containment: 'Threat isolated within 4 minutes of initial execution',
          downtime: 'Zero impact on core shipping manifest databases or port operations',
          recovery: 'Compromised laptop fully wiped and restored via Windows Autopilot in under 4 hours',
          compliance: 'Full forensic report generated to satisfy UAE federal data breach notification laws',
          roi: 'Prevented an estimated $2.4M in potential downtime and ransomware extortion fees',
        },
        testimonial:
          '"We watched the attack happen in real-time on the NOCKO dashboard. Their EDR stopped the encryption instantly. Without them, our entire fleet operation would have been grounded for weeks."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'm365-audit') {
    caseStudy = {
      attributes: {
        title: 'M365 Audit Saves 40% Annually',
        client: 'Regional Investment Firm (DIFC)',
        industry: 'Strategic IT Consulting',
        challenge:
          '<p>A fast-growing investment firm in the DIFC was experiencing uncontrolled "Shadow IT" sprawl. Different departments were independently expensing overlapping SaaS tools like Zoom, Dropbox, and Slack, completely ignoring their existing Microsoft 365 enterprise licenses.</p><p>Furthermore, they were paying for premium Microsoft E5 licenses for all 150 employees, despite 80% of the workforce only requiring basic webmail and Teams access. The CFO required an immediate forensic audit to halt the bleeding.</p>',
        solution:
          '<p>NOCKO’s vCIO conducted a comprehensive forensic licensing audit. We analyzed active usage telemetry across their entire tenant. We identified that the firm was paying for $45,000 worth of redundant third-party applications that were natively included in their Microsoft subscription.</p><p>We executed a strict consolidation roadmap. We migrated all data from Dropbox to SharePoint, transitioned video conferencing to Teams, and right-sized their Microsoft licensing—downgrading non-essential staff to Business Basic while reserving E5 licenses solely for executives handling highly classified financial models.</p>',
        results: {
          savings: 'Recovered $45,000 annually by eliminating duplicate SaaS subscriptions',
          optimization: 'Reduced monthly Microsoft 365 licensing costs by 40%',
          security: 'Eliminated 12 unauthorized "Shadow IT" applications, closing major compliance gaps',
          adoption: 'Conducted targeted staff training, increasing Microsoft Teams utilization by 300%',
          governance: 'Implemented centralized approval workflows for any future software purchases',
        },
        testimonial:
          '"NOCKO didn\'t just save us money; they forced us to actually use the enterprise tools we were already paying for. The audit paid for itself in the first month."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'it-consulting') {
    caseStudy = {
      attributes: {
        title: 'Как девелопер недвижимости в Дубае сократил ИТ-расходы на 35% благодаря стратегическому ИТ-консалтингу',
        client: 'Девелопер недвижимости в Дубае (Business Bay)',
        industry: 'ИТ-консалтинг и стратегия',
        createdAt: '2025-11-22T00:00:00.000Z',
        updatedAt: '2025-11-22T00:00:00.000Z',
        challenge:
          '<p>Средний по размеру девелопер недвижимости со штаб-квартирой в Business Bay стремительно рос — с 40 до 120 сотрудников за 3 года. Закупки ИТ были децентрализованы: каждый руководитель отдела самостоятельно приобретал SaaS-инструменты, оборудование и контракты на поддержку, что привело к 23 разным поставщикам с дублирующимися возможностями и полным отсутствием централизованного управления.</p><p>Финансовый директор забил тревогу, обнаружив, что годовые ИТ-расходы удвоились без какого-либо измеримого роста операционной отдачи. Компании требовался внешний vCIO для полного ИТ-аудита, оптимизации ландшафта поставщиков и разработки 24-месячной технологической дорожной карты под их агрессивную экспансию в Абу-Даби.</p>',
        solution:
          '<p>NOCKO выделил отдельного vCIO, который провёл 8-недельный этап обследования: инвентаризацию активов, анализ лицензий на ПО, ревизию контрактов с поставщиками и оценку состояния безопасности. Аудит выявил 280 000 дирхамов ежегодных дублирующих расходов на пересекающиеся CRM, хранилища и инструменты для совместной работы.</p><p>Мы разработали консолидированную модель поставщиков, сократив 23 подрядчика до 7 стратегических партнёров, с каждым из которых были согласованы SLA и чёткие пути эскалации. Была представлена поэтапная 24-месячная ИТ-дорожная карта: консолидация Microsoft 365 в Q1, виртуализация локальных серверов в Q2 и гибридная облачная стратегия для филиала в Абу-Даби в Q3.</p>',
        results: {
          savings: 'Сократили годовые ИТ-расходы на 35% (280 000 дирхамов) за счёт консолидации поставщиков',
          vendors: 'Оптимизировали ландшафт ИТ-поставщиков с 23 до 7 стратегических партнёров',
          governance: 'Внедрили централизованную политику ИТ-закупок и процесс согласования во всех отделах',
          roadmap: 'Разработали 24-месячную технологическую дорожную карту под стратегию экспансии в Абу-Даби',
          security: 'Закрыли 14 брешей в безопасности, выявленных в ходе аудита, включая 3 критические уязвимости удалённого доступа',
        },
        testimonial:
          '«vCIO от NOCKO дал нам ясность, которой у нас никогда не было. Меньше чем за 3 месяца мы прошли путь от ИТ-хаоса к структурированной дорожной карте с измеримой отдачей. Этот аудит окупился пятикратно.»',
      },
    } as any;
  }

  if (!caseStudy && slug === 'enterprise') {
    caseStudy = {
      attributes: {
        title: 'Как логистическое предприятие на 300 сотрудников объединило ИТ в 4 офисах ОАЭ',
        client: 'Логистическое и грузовое предприятие ОАЭ (Дубай, Шарджа, Абу-Даби, Джебель-Али)',
        industry: 'Управляемые ИТ-услуги',
        createdAt: '2026-01-08T00:00:00.000Z',
        updatedAt: '2026-01-08T00:00:00.000Z',
        challenge:
          '<p>Логистическая и грузовая компания из ОАЭ с 300 сотрудниками в 4 офисах — в Дубае, Шардже, Абу-Даби и свободной зоне Джебель-Али — страдала от разрозненной ИТ-среды. Каждый офис был настроен независимо, с разными поставщиками оборудования, топологиями сети и контрактами на поддержку — всего шесть отдельных ИТ-подрядчиков, ни один из которых не видел работу остальных.</p><p>Критически важное ПО управления складом периодически теряло связь в пиковые окна отгрузок, что напрямую влияло на соблюдение SLA перед крупными e-commerce клиентами. Операционный директор потребовал единого ответственного ИТ-партнёра с гарантированными SLA по аптайму и унифицированной базовой инфраструктурой на всех площадках.</p>',
        solution:
          '<p>NOCKO выполнил поэтапный переход на <a href="/ru/services/managed-it">управляемые ИТ-услуги</a> по всем 4 локациям за 60 дней. Мы начали с полного аудита инфраструктуры на каждой площадке, задокументировав топологию сети, активное оборудование и зависимости ПО. Все 6 действующих поставщиков были планомерно переведены на единый контракт поддержки под управлением NOCKO.</p><p>Мы стандартизировали все площадки на единой магистрали Cisco Meraki SD-WAN, что обеспечило централизованное управление сетью и мгновенное переключение между каналами офисов. К аккаунту был прикреплён круглосуточный NOC с выделенными инженерами эскалации для двух приоритетных площадок — Джебель-Али и штаб-квартиры в Дубае.</p>',
        results: {
          uptime: 'Достигли аптайма сети 99,95% во всех 4 офисах в течение 90 дней после перехода',
          vendors: 'Заменили 6 разрозненных ИТ-поставщиков единым ответственным контрактом на управляемые услуги',
          response: 'Среднее время реакции на инцидент сокращено с 4,5 часов до 38 минут на всех площадках',
          warehouse: 'Сбои связи системы управления складом сведены с 12 в месяц до нуля',
          cost: 'Консолидированные расходы на ИТ-поддержку снижены на 28% по сравнению с суммарными затратами на прежних поставщиков',
        },
        testimonial:
          '«До NOCKO мы вели политические игры с ИТ-поставщиками в четырёх городах. Теперь у нас один номер для звонка, один SLA и складские системы, которые не потеряли ни одного соединения за четыре месяца.»',
      },
    } as any;
  }

  if (!caseStudy && slug === 'cybersecurity') {
    caseStudy = {
      attributes: {
        title: 'Как медицинская группа в ОАЭ прошла аудит HAAD без единого замечания',
        client: 'Многопрофильная медицинская группа ОАЭ (Дубай и Абу-Даби)',
        industry: 'Кибербезопасность и комплаенс в здравоохранении',
        createdAt: '2026-02-17T00:00:00.000Z',
        updatedAt: '2026-02-17T00:00:00.000Z',
        challenge:
          '<p>Медицинская группа из ОАЭ, управляющая 3 клиниками в Дубае и Абу-Даби, столкнулась со срочным дедлайном по соответствию требованиям кибербезопасности HAAD (Управление здравоохранения Абу-Даби). Внутренняя проверка выявила 7 критических уязвимостей, включая незашифрованные данные пациентов на общих дисках, устаревшую прошивку медицинского оборудования, подключённого к основной клинической сети, и отсутствие формального плана реагирования на инциденты.</p><p>С регуляторным аудитом через 90 дней и возможным приостановлением лицензии в случае провала операционному директору группы срочно требовался партнёр по устранению киберугроз с прямым опытом работы в рамках комплаенс-требований здравоохранения ОАЭ.</p>',
        solution:
          '<p>NOCKO направил выделенную команду по <a href="/ru/services/cybersecurity">кибербезопасности</a> для здравоохранения, чтобы выполнить 90-дневный спринт соответствия HAAD. Мы начали с полной оценки пробелов, напрямую сопоставленной со стандартами информационной безопасности HAAD, и составили приоритизированный бэклог по устранению.</p><p>Ключевые работы включали полную сегментацию сети для изоляции медицинского оборудования в выделенный VLAN, развёртывание шифрования AES-256 во всех хранилищах данных пациентов и внедрение ролевого управления доступом во всех 3 клиниках. Мы разработали и протестировали полный план реагирования на инциденты и провели обязательное обучение по кибербезопасности для всех 85 клинических и административных сотрудников.</p>',
        results: {
          audit: 'Прошли аудит кибербезопасности HAAD без критических и значимых замечаний',
          vulnerabilities: 'Устранили все 7 критических уязвимостей, выявленных в ходе предаудитной оценки пробелов',
          segmentation: 'Сеть медицинского оборудования полностью изолирована через VLAN-сегментацию во всех 3 клиниках',
          encryption: '100% медицинских записей пациентов зашифрованы при хранении и передаче на всех площадках',
          training: 'Все 85 сотрудников прошли обязательное обучение по кибербезопасности в течение 60 дней',
        },
        testimonial:
          '«У нас было 90 дней, чтобы закрыть годами накопленный долг по безопасности перед регуляторным аудитом. NOCKO выполнил каждое устранение в срок. Мы прошли без единого замечания — чего, честно говоря, не ожидали.»',
      },
    } as any;
  }

  if (!caseStudy && slug === 'network-segmentation') {
    caseStudy = {
      attributes: {
        title: 'Как мультиформатная группа в Дубае защитила сеть с помощью сегментации и FortiGate',
        client: 'Мультиформатная сеть заведений общепита (Дубай)',
        industry: 'Сетевая инфраструктура и безопасность',
        createdAt: '2026-05-14T00:00:00.000Z',
        updatedAt: '2026-05-14T00:00:00.000Z',
        challenge:
          '<p>Растущая группа заведений общепита, управляющая несколькими площадками по всему Дубаю, развивалась быстрее, чем за ней успевала её сеть. Инфраструктура стихийно разрослась в плоскую, практически недокументированную топологию — POS-терминалы, офисная бухгалтерия, CCTV и гостевой Wi-Fi находились в одном широковещательном домене, без какой-либо изоляции между чувствительными системами и публичным трафиком.</p><p>Руководству требовалась ясная задокументированная картина того, что на самом деле работает в сети, межсетевой экран, которому можно доверять на границе, и надлежащая сегментация, чтобы скомпрометированное гостевое устройство или POS-терминал никогда не могли добраться до финансовых или управленческих систем.</p>',
        solution:
          '<p>NOCKO начал с полного аудита топологии L2/L3, зафиксировав каждый интерфейс, VLAN и поток данных в единой исполнительной схеме. Мы развернули межсетевой экран FortiGate в качестве пограничного шлюза, обрабатывающего NAT и безопасный доступ по IPsec VPN для удалённых сотрудников, и настроили ядро на коммутаторе Cisco Nexus для маршрутизации между VLAN.</p><p>Плоская сеть была переработана в выделенные VLAN — корпоративный, POS, офисный, CCTV и гостевой — со списками управления доступом (ACL), ограничивающими чувствительные сегменты так, что гостевые и публичные устройства полностью изолированы от финансовых и управленческих систем. Весь проект был задокументирован и передан как поддерживаемая справочная база.</p>',
        results: {
          segmentation: 'Переработали плоскую сеть в сегментированные VLAN с изоляцией через ACL между чувствительным и публичным трафиком',
          firewall: 'Развернули пограничный межсетевой экран FortiGate с политиками управления и NAT',
          remote: 'Обеспечили безопасный удалённый доступ для сотрудников через зашифрованный IPsec VPN',
          isolation: 'Полностью изолировали гостевой Wi-Fi и трафик POS от офисных и финансовых систем',
          documentation: 'Передали полную исполнительную схему топологии L2/L3 как единый источник достоверных данных о сети',
        },
        testimonial:
          '«Впервые мы действительно знаем, как выглядит наша сеть. Гостевые устройства больше не могут добраться до наших POS или бухгалтерии, а удалённые сотрудники подключаются безопасно. NOCKO превратил клубок кабелей в задокументированную, защищённую систему.»',
      },
    } as any;
  }

  if (!caseStudy && slug === 'emr-backup') {
    caseStudy = {
      attributes: {
        title: 'Как медицинская клиника в ОАЭ автоматизировала резервное копирование EMR и отчётность о комплаенсе',
        client: 'Частная медицинская клиника (ОАЭ)',
        industry: 'ИТ для здравоохранения — резервное копирование и аварийное восстановление',
        createdAt: '2026-06-23T00:00:00.000Z',
        updatedAt: '2026-06-23T00:00:00.000Z',
        challenge:
          '<p>Частная медицинская клиника в ОАЭ вела свою систему электронных медицинских карт (EMR), рабочую станцию диагностической визуализации (X-ray) и сервер бухгалтерии на смеси виртуальных машин и физических ПК. Данные пациентов должны быть защищены и восстанавливаемы согласно требованиям здравоохранения ОАЭ, однако у клиники не было автоматического способа проверить, что резервное копирование действительно выполняется, — или предъявить тому доказательства при аудите.</p><p>Команде требовались надёжные, изолированные ежедневные резервные копии каждой критически важной системы и, что не менее важно, повторяемый способ доказать регуляторам и руководству, что эти резервные копии успешно завершились.</p>',
        solution:
          '<p>NOCKO консолидировал резервное копирование на NAS Synology под управлением Active Backup for Business, с отдельными заданиями для рабочего сервера EMR (виртуальная машина Linux), рабочей станции визуализации X-ray, сервера бухгалтерии и контроллера домена. Резервное копирование выполняется автоматически по ночам по схеме incremental-forever с многоверсионным хранением.</p><p>Чтобы закрыть пробел в комплаенсе, мы создали автоматический скрипт отчётности, который работает на самом NAS и отправляет по почте ежедневный отчёт о резервном копировании — тип копии, источник, расположение, размер, срок хранения, сетевую изоляцию и полные характеристики серверов — извлекая данные напрямую из базы резервного копирования, так что доказательства всегда точны и никогда не редактируются вручную.</p>',
        results: {
          coverage: 'Автоматическое ежедневное резервное копирование систем EMR, диагностической визуализации, бухгалтерии и контроллера домена',
          emr: 'Рабочий сервер EMR защищён ежедневными инкрементальными копиями объёмом 1 ТБ с многоверсионным хранением',
          reporting: 'Самоформирующийся ежедневный отчёт о соответствии автоматически отправляется по почте — готовые к аудиту доказательства без ручной работы',
          accuracy: 'Данные отчёта извлекаются напрямую из движка резервного копирования, что исключает ошибки ручного переноса',
          recovery: 'У каждой критически важной системы теперь есть проверенная восстанавливаемая точка восстановления каждый день',
        },
        testimonial:
          '«Раньше мы просто надеялись, что резервное копирование работает. Теперь каждое утро мы получаем чистый отчёт в почте, который это подтверждает — записи пациентов, визуализация и бухгалтерия, всё под защитой. Для медицинского учреждения такое спокойствие — это всё.»',
      },
    } as any;
  }

  if (!caseStudy && slug === 'workspace-migration') {
    caseStudy = {
      attributes: {
        title: 'Как гостиничная группа в Дубае перенесла Google Workspace во время ребрендинга без простоев',
        client: 'Гостиничная группа (Дубай)',
        industry: 'Облако и миграция почты',
        createdAt: '2026-01-28T00:00:00.000Z',
        updatedAt: '2026-01-28T00:00:00.000Z',
        challenge:
          '<p>Гостиничная группа из Дубая проходила полный корпоративный ребрендинг, что означало перевод всей команды со старого почтового домена на совершенно новый домен Google Workspace. Почта — операционный костяк гостиничного бизнеса: через неё проходят бронирования, заказы поставщикам и управление, — поэтому миграция должна была пройти без потери хотя бы одного сообщения и без прерывания повседневной работы.</p><p>Группе требовалось, чтобы каждый почтовый ящик вместе с полной историей был аккуратно перенесён на новый домен — без простоев в рабочие часы и без риска отбитых или потерянных писем во время переключения.</p>',
        solution:
          '<p>NOCKO спланировал поэтапную миграцию Google Workspace. Мы построили полное соответствие «источник — цель» для каждой учётной записи, подготовили новый домен и с помощью инструментов миграции данных Google скопировали всю почту и историю в новые почтовые ящики, пока старая система оставалась работающей и нетронутой.</p><p>После того как каждый почтовый ящик был сверен с источником, мы запланировали переключение DNS и MX на непиковое окно, чтобы переход на новый домен был незаметен для сотрудников и гостей. При передаче пароли и доступы были сброшены, чтобы обеспечить безопасность нового тенанта с первого дня.</p>',
        results: {
          downtime: 'Завершили миграцию домена без простоев в рабочие часы',
          history: 'Перенесли каждый почтовый ящик с сохранением полной истории переписки — ничего не потеряно',
          cutover: 'Выполнили переключение DNS/MX в непиковое окно, незаметно для сотрудников и гостей',
          security: 'Сбросили учётные данные и защитили новый тенант Google Workspace при передаче',
          rebrand: 'Обеспечили чистую почтовую идентичность в соответствии с новым брендом, точно в срок',
        },
        testimonial:
          '«Ребрендинг сам по себе достаточно нервный, чтобы ещё переживать за почту. NOCKO перевёл всех на новый домен за выходные — в понедельник утром всё просто работало, и каждое старое сообщение было на месте. Ни одной жалобы от команды.»',
      },
    } as any;
  }

  if (!caseStudy) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          headline: caseStudy.attributes.title,
          description: caseStudy.attributes.testimonial || caseStudy.attributes.challenge?.substring(0, 150),
          datePublished: caseStudy.attributes.createdAt || new Date().toISOString(),
          dateModified: caseStudy.attributes.updatedAt || caseStudy.attributes.createdAt || new Date().toISOString(),
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
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={caseStudy.attributes.title}
          subtitle={`${caseStudy.attributes.client} - ${caseStudy.attributes.industry}`}
        />
        <section className="section">
          <div className="container">
            {caseStudy.attributes.challenge && (
              <div className="case-study__section">
                <h2>Challenge</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: caseStudy.attributes.challenge,
                  }}
                />
              </div>
            )}
            {caseStudy.attributes.solution && (
              <div className="case-study__section">
                <h2>Solution</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: caseStudy.attributes.solution,
                  }}
                />
              </div>
            )}
            {caseStudy.attributes.results && (
              <div className="case-study__section">
                <h2>Results</h2>
                <div className="case-study__results-grid" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  backgroundColor: '#f8f9fa',
                  padding: '24px',
                  borderRadius: '12px',
                  marginTop: '16px',
                  border: '1px solid #e9ecef'
                }}>
                  {Object.entries(caseStudy.attributes.results as Record<string, string>).map(([key, value]) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#3474FF', fontSize: '1.2rem', lineHeight: '1.2' }}>✓</span>
                      <div>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {caseStudy.attributes.testimonial && (
              <div className="case-study__testimonial" style={{
                marginTop: '40px',
                padding: '32px',
                backgroundColor: '#ffffff',
                borderLeft: '4px solid #3474FF',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: '#495057'
              }}>
                <blockquote>{caseStudy.attributes.testimonial}</blockquote>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

