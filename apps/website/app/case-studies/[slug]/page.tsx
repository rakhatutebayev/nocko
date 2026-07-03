import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
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
      alternates: { canonical: `/case-studies/${slug}` },
      title: 'How a Dubai Real Estate Firm Cut IT Costs 35% with Strategic IT Consulting | NOCKO',
      description:
        'A Dubai real estate developer eliminated Shadow IT, unified vendors, and reduced annual IT spend by 35% after a NOCKO vCIO-led IT strategy audit and roadmap.',
      keywords:
        'IT consulting Dubai, IT strategy UAE, vCIO services Dubai, IT cost reduction, IT roadmap UAE, real estate IT consulting',
      openGraph: {
        title: 'How a Dubai Real Estate Firm Cut IT Costs 35% with Strategic IT Consulting | NOCKO',
        description:
          'A Dubai real estate developer eliminated Shadow IT and reduced annual IT spend by 35% with a NOCKO vCIO-led strategy.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'enterprise') {
    return {
      alternates: { canonical: `/case-studies/${slug}` },
      title: 'How a 300-Seat Enterprise Unified IT Infrastructure Across UAE | Case Study | NOCKO',
      description:
        'A UAE logistics enterprise with 300 seats across 4 offices unified fragmented IT infrastructure, eliminated 6 separate vendors, and achieved 99.95% uptime with NOCKO Managed IT.',
      keywords:
        'enterprise IT UAE, managed IT services Dubai, IT infrastructure consolidation, multi-site IT support UAE, enterprise IT outsourcing',
      openGraph: {
        title: 'How a 300-Seat Enterprise Unified IT Infrastructure Across UAE | NOCKO',
        description:
          'UAE logistics enterprise unified fragmented IT across 4 offices, eliminated 6 vendors, achieved 99.95% uptime.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'cybersecurity') {
    return {
      alternates: { canonical: `/case-studies/${slug}` },
      title: 'How a UAE Healthcare Group Passed HAAD Audit with Zero Findings | Case Study | NOCKO',
      description:
        'A UAE healthcare group serving 3 clinics achieved full HAAD cybersecurity compliance, eliminated 7 critical vulnerabilities, and passed their regulatory audit with zero findings.',
      keywords:
        'healthcare cybersecurity UAE, HAAD compliance, medical data security Dubai, cybersecurity audit UAE, healthcare IT security',
      openGraph: {
        title: 'How a UAE Healthcare Group Passed HAAD Audit with Zero Findings | NOCKO',
        description:
          'UAE healthcare group achieved full HAAD compliance, eliminated 7 critical vulnerabilities, passed regulatory audit with zero findings.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'network-segmentation') {
    return {
      alternates: { canonical: `/case-studies/${slug}` },
      title: 'How a Multi-Site Dubai Group Secured Its Network with Segmentation & FortiGate | Case Study | NOCKO',
      description:
        'A multi-site F&B group in Dubai replaced a flat, undocumented network with a segmented FortiGate + Cisco core architecture — isolating POS, guest and back-office traffic and securing remote access.',
      keywords:
        'network segmentation Dubai, FortiGate firewall UAE, VLAN segmentation, network audit Dubai, structured network UAE, IPsec VPN UAE',
      openGraph: {
        title: 'How a Multi-Site Dubai Group Secured Its Network with Segmentation & FortiGate | NOCKO',
        description:
          'A Dubai group replaced a flat network with a segmented FortiGate + Cisco core, isolating POS/guest/back-office and securing remote access.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'emr-backup') {
    return {
      alternates: { canonical: `/case-studies/${slug}` },
      title: 'How a UAE Medical Clinic Automated EMR Backup & Compliance Reporting | Case Study | NOCKO',
      description:
        'A UAE medical clinic protected its EMR, imaging and accounting systems with automated daily backups on Synology Active Backup for Business and a self-generating daily compliance report.',
      keywords:
        'EMR backup UAE, medical data backup Dubai, healthcare disaster recovery UAE, Synology Active Backup, backup compliance reporting, clinic IT backup',
      openGraph: {
        title: 'How a UAE Medical Clinic Automated EMR Backup & Compliance Reporting | NOCKO',
        description:
          'A UAE clinic protected EMR, imaging and accounting data with automated daily backups and self-generating compliance reports.',
        type: 'article',
      },
    };
  }

  if (!caseStudy && slug === 'workspace-migration') {
    return {
      alternates: { canonical: `/case-studies/${slug}` },
      title: 'How a Dubai Hospitality Group Migrated Google Workspace During a Rebrand with Zero Downtime | Case Study | NOCKO',
      description:
        'During a corporate rebrand, a Dubai hospitality group moved every mailbox to a new Google Workspace domain with zero downtime and no lost email history.',
      keywords:
        'Google Workspace migration Dubai, email migration UAE, domain migration, workspace migration UAE, zero downtime email migration, cloud migration Dubai',
      openGraph: {
        title: 'How a Dubai Hospitality Group Migrated Google Workspace During a Rebrand with Zero Downtime | NOCKO',
        description:
          'A Dubai hospitality group moved every mailbox to a new Google Workspace domain during a rebrand — zero downtime, no lost history.',
        type: 'article',
      },
    };
  }

  if (!caseStudy) {
    notFound();
  }

  return {
      alternates: { canonical: `/case-studies/${slug}` },
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
        createdAt: '2025-03-15T00:00:00.000Z',
        updatedAt: '2025-03-15T00:00:00.000Z',
        challenge:
          '<p>Projection is a UAE-based company with three major offices across Dubai and Abu Dhabi, managing over 80 endpoints. Their legacy IT stack included aging switches, disorganized cabling, and unmanaged Wi-Fi. Support was purely reactive: employees wasted hours waiting for ad-hoc IT freelancers, and recurring incidents crippled productivity.</p><p>leadership required guaranteed response times (SLAs), physical hardware reliability across multiple Emirates, and a unified upgrade roadmap that wouldn\'t disrupt ongoing operations.</p>',
        solution:
          '<p>NOCKO introduced a strict <a href="/services/it-amc">Annual Maintenance Contract</a> combining 24/7 proactive NOC monitoring, quarterly physical preventive maintenance (PM) visits, and financially backed SLAs. The first 30 days were dedicated to complete IT asset discovery and network risk scoring.</p><p>We replaced failing patch panels, labeled all IDFs, and standardized switch configurations. A priority-based ServiceNow ticketing workflow provided transparent escalation, placing a dedicated Level-2 onsite engineer at their highest-traffic Business Bay office.</p>',
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
        createdAt: '2025-04-10T00:00:00.000Z',
        updatedAt: '2025-04-10T00:00:00.000Z',
        challenge:
          '<p>Solus Insurance manages highly sensitive financial and customer data within the Dubai International Financial Centre (DIFC). Their legacy security stack had grown organically, leaving blind spots across remote endpoints and Azure cloud workloads.</p><p>Facing strict new compliance requirements from the UAE NESA and DFSA frameworks, Solus needed enterprise-grade threat detection, instant incident response, and a Zero Trust posture without slowing down their brokers.</p>',
        solution:
          '<p>We deployed a comprehensive Zero Trust <a href="/services/cybersecurity">cybersecurity</a> architecture featuring centralized 24/7 SOC monitoring, EDR (Endpoint Detection and Response) hardening, and micro-segmented network access.</p><p>The deployment included firewall policy optimization, automated phishing simulation for brokers, and a structured Incident Response payload entirely aligned to DFSA regulatory compliance standards.</p>',
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
        createdAt: '2025-05-20T00:00:00.000Z',
        updatedAt: '2025-05-20T00:00:00.000Z',
        challenge:
          '<p>FH Fundamental operated entirely on aging on-premises infrastructure located in a local server room. The physical hardware constrained their scalability, required heavy CapEx for upgrades, and posed a significant disaster recovery risk during power fluctuations.</p><p>They needed a seamless migration path to the cloud that ensured absolute zero downtime, strictly adhered to UAE TRA data residency requirements, and allowed for rapid deployment of new web services.</p>',
        solution:
          '<p>NOCKO engineered a phased <a href="/services/cloud">cloud migration</a> targeting the AWS Middle East (UAE) Region, utilizing parallel-run capabilities to validate workloads before final DNS cutover. We utilized a strategic mix of Lift-and-Shift for legacy ERPs and selective re-platforming (Docker) for high-traffic web applications.</p><p>Pre-migration ekahau testing, synchronized block-level data replication, and strict rollback plans guaranteed safety. Production cutovers were executed during predetermined 3 AM maintenance windows.</p>',
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
        createdAt: '2025-06-05T00:00:00.000Z',
        updatedAt: '2025-06-05T00:00:00.000Z',
        challenge:
          '<p>Scalini operates 5 high-end restaurant locations across Dubai and Abu Dhabi. Each site was cabled independently by different contractors, resulting in uncertified cabling patches, unlabeled IDFs, and massive Wi-Fi dead zones. Constant POS drops during peak dining hours led directly to lost revenue.</p><p>Their IT team demanded a standardized physical layer capable of unified reservation systems, 4K security cameras, and uninterrupted guest Wi-Fi across all Emirates.</p>',
        solution:
          '<p>NOCKO executed a unified <a href="/services/structured-cabling">structured cabling</a> overhaul across all 5 properties. Each site received certified Cat6A runs to support 10Gbps backbone links, meticulously labeled patch panels, and 25-year manufacturer warranties. </p><p>Utilizing Ekahau predictive heatmapping, we strategically placed enterprise access points to eliminate concrete and kitchen interference. All installations were strictly validated with Fluke DSX CableAnalyzers, and complete as-built CAD documentation was handed over.</p>',
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
        createdAt: '2025-07-12T00:00:00.000Z',
        updatedAt: '2025-07-12T00:00:00.000Z',
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
        createdAt: '2025-08-18T00:00:00.000Z',
        updatedAt: '2025-08-18T00:00:00.000Z',
        challenge:
          '<p>TechnoHub, a growing consultancy in Dubai Media City, was bleeding money on fragmented IT contractors. Their solo internal IT manager was overwhelmed by reactive password resets, disjointed vendor management (Du/Etisalat), and manual laptop setups for new hires.</p><p>The lack of strategic IT leadership led to massive Shadow IT spending. They needed a Managed Service Provider (MSP) to completely take over daily operations while providing executive-level guidance.</p>',
        solution:
          '<p>We transitioned TechnoHub to a comprehensive NOCKO <a href="/services/managed-it">managed IT services</a> agreement (MSP). We became their entire IT department overnight, absorbing all Helpdesk requests, SOC security monitoring, and hardware lifecycle procurement.</p><p>Through our embedded Virtual CTO (vCTO) program, we consolidated their SaaS vendors, audited Microsoft 365 licenses to eliminate bloat, and shifted their erratic IT spending into a predictable, flat-rate monthly OPEX model.</p>',
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
        createdAt: '2025-09-03T00:00:00.000Z',
        updatedAt: '2025-09-03T00:00:00.000Z',
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
        createdAt: '2025-10-14T00:00:00.000Z',
        updatedAt: '2025-10-14T00:00:00.000Z',
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
        title: 'How a Dubai Real Estate Firm Cut IT Costs 35% with Strategic IT Consulting',
        client: 'Dubai Real Estate Developer (Business Bay)',
        industry: 'IT Consulting & Strategy',
        createdAt: '2025-11-22T00:00:00.000Z',
        updatedAt: '2025-11-22T00:00:00.000Z',
        challenge:
          '<p>A mid-sized real estate developer headquartered in Business Bay was experiencing rapid headcount growth from 40 to 120 employees across 3 years. Their IT procurement was decentralized — each department head independently purchased SaaS tools, hardware, and support contracts, resulting in 23 separate vendors with overlapping capabilities and zero centralized governance.</p><p>The CFO escalated concerns after discovering that annual IT spend had doubled with no measurable increase in operational output. They needed an external vCIO to perform a full IT audit, rationalize their vendor landscape, and produce a 24-month technology roadmap aligned to their aggressive expansion into Abu Dhabi.</p>',
        solution:
          '<p>NOCKO assigned a dedicated vCIO who conducted an 8-week discovery engagement covering asset inventory, software license analysis, vendor contract review, and security posture assessment. The audit revealed AED 280,000 in redundant annual spend across overlapping CRM, storage, and collaboration tools.</p><p>We designed a consolidated vendor framework reducing 23 suppliers to 7 strategic partners, each with negotiated SLAs and clear escalation paths. A 24-month phased IT roadmap was delivered, prioritizing Microsoft 365 consolidation in Q1, on-premise server virtualisation in Q2, and a hybrid cloud strategy for their Abu Dhabi branch in Q3.</p>',
        results: {
          savings: 'Reduced annual IT expenditure by 35% (AED 280,000) through vendor consolidation',
          vendors: 'Rationalized IT supplier landscape from 23 vendors down to 7 strategic partners',
          governance: 'Implemented centralized IT procurement policy and approval workflow across all departments',
          roadmap: 'Delivered 24-month technology roadmap aligned to Abu Dhabi expansion strategy',
          security: 'Closed 14 security gaps identified during the audit including 3 critical remote access vulnerabilities',
        },
        testimonial:
          '"The NOCKO vCIO gave us clarity we never had. We went from IT chaos to a structured roadmap with measurable ROI in under 3 months. That audit paid for itself five times over."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'enterprise') {
    caseStudy = {
      attributes: {
        title: 'How a 300-Seat UAE Logistics Enterprise Unified IT Across 4 Offices',
        client: 'UAE Logistics & Freight Enterprise (Dubai, Sharjah, Abu Dhabi, Jebel Ali)',
        industry: 'Managed IT Services',
        createdAt: '2026-01-08T00:00:00.000Z',
        updatedAt: '2026-01-08T00:00:00.000Z',
        challenge:
          '<p>A UAE-based logistics and freight company with 300 employees spread across 4 offices in Dubai, Sharjah, Abu Dhabi, and the Jebel Ali Free Zone was struggling with a fragmented IT environment. Each office had been set up independently with different hardware vendors, network topologies, and support contracts — six separate IT suppliers in total, none with visibility into each other\'s work.</p><p>Critical warehouse management software experienced repeated connectivity failures during peak shipping windows, directly impacting SLA delivery to major e-commerce clients. The COO demanded a single accountable IT partner with guaranteed uptime SLAs and a unified infrastructure baseline across all sites.</p>',
        solution:
          '<p>NOCKO executed a phased <a href="/services/managed-it">Managed IT Services</a> takeover across all 4 locations over 60 days. We began with a full infrastructure audit at each site, documenting network topology, active hardware, and software dependencies. All 6 incumbent vendors were systematically transitioned to a single NOCKO-managed support contract.</p><p>We standardized all sites onto a unified Cisco Meraki SD-WAN backbone, enabling centralized network management and real-time failover between office links. A 24/7 NOC was assigned to the account with dedicated escalation engineers for the two highest-priority Jebel Ali and Dubai headquarters sites.</p>',
        results: {
          uptime: 'Achieved 99.95% network uptime across all 4 offices within 90 days of takeover',
          vendors: 'Replaced 6 fragmented IT suppliers with a single accountable managed service contract',
          response: 'Average incident response time reduced from 4.5 hours to 38 minutes across all sites',
          warehouse: 'Warehouse management system connectivity failures reduced from 12/month to zero',
          cost: 'Consolidated IT support costs reduced by 28% compared to combined previous vendor spend',
        },
        testimonial:
          '"Before NOCKO, we were playing IT vendor politics across four cities. Now we have one number to call, one SLA to hold, and our warehouse systems have not dropped a single connection in four months."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'cybersecurity') {
    caseStudy = {
      attributes: {
        title: 'How a UAE Healthcare Group Achieved HAAD Compliance with Zero Audit Findings',
        client: 'UAE Multi-Clinic Healthcare Group (Dubai & Abu Dhabi)',
        industry: 'Healthcare Cybersecurity & Compliance',
        createdAt: '2026-02-17T00:00:00.000Z',
        updatedAt: '2026-02-17T00:00:00.000Z',
        challenge:
          '<p>A UAE healthcare group operating 3 medical clinics across Dubai and Abu Dhabi faced an urgent HAAD (Health Authority Abu Dhabi) cybersecurity compliance deadline. An internal review had flagged 7 critical vulnerabilities including unencrypted patient data on shared drives, outdated medical device firmware connected to the main clinical network, and no formal incident response plan.</p><p>With a regulatory audit scheduled in 90 days and potential license suspension as a consequence of failure, the group\'s operations director needed an immediate cybersecurity remediation partner with direct experience in UAE healthcare compliance frameworks.</p>',
        solution:
          '<p>NOCKO deployed a dedicated healthcare <a href="/services/cybersecurity">cybersecurity services</a> team to execute a 90-day HAAD compliance sprint. We began with a full gap assessment mapped directly to HAAD Information Assurance Standards, producing a prioritized remediation backlog.</p><p>Critical work included complete network segmentation to isolate medical devices onto a dedicated VLAN, deployment of AES-256 encryption across all patient data repositories, and implementation of role-based access controls across all 3 clinic locations. We built and tested a full Incident Response Plan and conducted mandatory cybersecurity awareness training for all 85 clinical and administrative staff.</p>',
        results: {
          audit: 'Passed HAAD cybersecurity audit with zero critical or major findings',
          vulnerabilities: 'Remediated all 7 critical vulnerabilities identified in pre-audit gap assessment',
          segmentation: 'Medical device network fully isolated via VLAN segmentation across all 3 clinics',
          encryption: '100% of patient health records encrypted at rest and in transit across all sites',
          training: 'All 85 staff completed mandatory cybersecurity awareness training within 60 days',
        },
        testimonial:
          '"We had 90 days to fix years of accumulated security debt before a regulatory audit. NOCKO delivered every single remediation on time. We passed with zero findings — something we genuinely did not expect to achieve."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'network-segmentation') {
    caseStudy = {
      attributes: {
        title: 'How a Multi-Site Dubai Group Secured Its Network with Segmentation and FortiGate',
        client: 'Multi-Site F&B Group (Dubai)',
        industry: 'Network Infrastructure & Security',
        createdAt: '2026-05-14T00:00:00.000Z',
        updatedAt: '2026-05-14T00:00:00.000Z',
        challenge:
          '<p>A growing food & beverage group operating multiple venues across Dubai had expanded faster than its network could keep up. The infrastructure had grown organically into a flat, largely undocumented topology — point-of-sale terminals, back-office accounting, CCTV and guest Wi-Fi all shared the same broadcast domain, with no isolation between sensitive systems and public traffic.</p><p>Leadership needed a clear, documented picture of what was actually running on the network, a firewall they could trust at the edge, and proper segmentation so a compromised guest device or POS terminal could never reach financial or management systems.</p>',
        solution:
          '<p>NOCKO began with a full L2/L3 topology audit, mapping every interface, VLAN and data flow into a single as-built diagram. We deployed a FortiGate firewall as the edge gateway handling NAT and secure IPsec VPN access for remote staff, and configured a Cisco Nexus core switch to perform inter-VLAN routing.</p><p>The flat network was re-architected into dedicated VLANs — corporate, point-of-sale, back-office, CCTV and guest — with access-control lists restricting the sensitive segments so that guest and public devices are fully isolated from financial and management systems. The entire design was documented and handed over as a maintainable reference.</p>',
        results: {
          segmentation: 'Re-architected a flat network into segmented VLANs with ACL isolation between sensitive and public traffic',
          firewall: 'Deployed a FortiGate edge firewall with policy-based control and NAT',
          remote: 'Enabled secure remote access for staff via encrypted IPsec VPN',
          isolation: 'Fully isolated guest Wi-Fi and POS traffic from back-office and financial systems',
          documentation: 'Delivered a complete as-built L2/L3 topology diagram as a single source of network truth',
        },
        testimonial:
          '"For the first time we actually know what our network looks like. Guest devices can no longer touch our POS or accounts, and remote staff connect securely. NOCKO turned a tangle of cables into a documented, defensible system."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'emr-backup') {
    caseStudy = {
      attributes: {
        title: 'How a UAE Medical Clinic Automated EMR Backup and Compliance Reporting',
        client: 'Private Medical Clinic (UAE)',
        industry: 'Healthcare IT — Backup & Disaster Recovery',
        createdAt: '2026-06-23T00:00:00.000Z',
        updatedAt: '2026-06-23T00:00:00.000Z',
        challenge:
          '<p>A private medical clinic in the UAE ran its Electronic Medical Records (EMR) system, diagnostic imaging (X-ray) workstation and accounting server on a mix of virtual machines and physical PCs. Patient data must be protected and recoverable under UAE healthcare regulations, but the clinic had no automated way to verify that backups were actually running — or to produce evidence of it for an audit.</p><p>The team needed reliable, isolated daily backups of every critical system and, just as importantly, a repeatable way to prove to regulators and management that those backups completed successfully.</p>',
        solution:
          '<p>NOCKO consolidated backups onto a Synology NAS running Active Backup for Business, with dedicated jobs for the EMR production server (a Linux virtual machine), the X-ray imaging workstation, the accounting server and the domain controller. Backups run automatically overnight using an incremental-forever schedule with multi-version retention.</p><p>To close the compliance gap, we built an automated reporting script that runs on the NAS itself and emails a daily backup report — backup type, source, location, size, retention, network isolation and full server specifications — pulled directly from the backup database so the evidence is always accurate and never hand-edited.</p>',
        results: {
          coverage: 'Automated daily backups of EMR, diagnostic imaging, accounting and domain-controller systems',
          emr: 'EMR production server protected with 1 TB daily incremental backups and multi-version retention',
          reporting: 'Self-generating daily compliance report emailed automatically — audit-ready evidence with no manual work',
          accuracy: 'Report data pulled directly from the backup engine, eliminating manual transcription errors',
          recovery: 'Every critical system now has a verified, recoverable restore point every single day',
        },
        testimonial:
          '"We used to hope our backups were working. Now we get a clean report in our inbox every morning that proves it — patient records, imaging and accounts, all covered. For a healthcare provider, that peace of mind is everything."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'workspace-migration') {
    caseStudy = {
      attributes: {
        title: 'How a Dubai Hospitality Group Migrated Google Workspace During a Rebrand with Zero Downtime',
        client: 'Hospitality Group (Dubai)',
        industry: 'Cloud & Email Migration',
        createdAt: '2026-01-28T00:00:00.000Z',
        updatedAt: '2026-01-28T00:00:00.000Z',
        challenge:
          '<p>A Dubai hospitality group was going through a full corporate rebrand, which meant moving the entire team from its old email domain to a brand-new Google Workspace domain. Email is the operational backbone of a hospitality business — reservations, supplier orders and management all run through it — so the migration had to happen without losing a single message or interrupting daily operations.</p><p>The group needed every mailbox, along with its full history, moved cleanly to the new domain, with no downtime during service hours and no risk of bounced or lost email during the cutover.</p>',
        solution:
          '<p>NOCKO planned a staged Google Workspace migration. We built a complete source-to-target mapping of every user account, provisioned the new domain, and used Google\'s data migration tooling to copy all mail and history into the new mailboxes while the old system stayed live and untouched.</p><p>Once every mailbox was verified against the source, we scheduled the DNS and MX cutover for an off-peak window so the switch to the new domain was invisible to staff and guests. Passwords and access were reset on handover to keep the new tenant secure from day one.</p>',
        results: {
          downtime: 'Completed the domain migration with zero downtime during business hours',
          history: 'Migrated every mailbox with full email history preserved — nothing lost',
          cutover: 'Executed the DNS/MX cutover in an off-peak window, invisible to staff and guests',
          security: 'Reset credentials and secured the new Google Workspace tenant on handover',
          rebrand: 'Delivered a clean email identity aligned to the new brand, on schedule',
        },
        testimonial:
          '"Rebranding is stressful enough without worrying about email. NOCKO moved everyone to the new domain over a weekend — Monday morning it just worked, with every old message still there. Not one complaint from the team."',
      },
    } as any;
  }

  if (!caseStudy) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  const RELATED_BY_SLUG: Record<string, { href: string; title: string; desc: string }[]> = {
    projection: [
      { href: '/articles/it-support-monitoring', title: 'IT Infrastructure Monitoring', desc: 'Proactive RMM and NOC monitoring for UAE businesses.' },
      { href: '/articles/it-support-onsite', title: 'On-Site IT Support', desc: 'Field engineer dispatch with 2-hour SLA across Dubai.' },
      { href: '/services/it-amc', title: 'IT AMC Services', desc: 'Annual maintenance contracts with financially backed SLAs.' },
    ],
    solus: [
      { href: '/articles/it-consulting-assessment', title: 'IT Assessment & Security Audit', desc: 'Gap assessment mapped to NESA and ISO 27001 frameworks.' },
      { href: '/articles/it-support-monitoring', title: 'IT Infrastructure Monitoring', desc: 'EDR, SIEM, and endpoint monitoring for UAE businesses.' },
      { href: '/services/cybersecurity', title: 'Cybersecurity Services', desc: 'Zero Trust, EDR, and compliance for UAE businesses.' },
    ],
    fh: [
      { href: '/articles/cloud-infrastructure-guide', title: 'Cloud Infrastructure Guide', desc: 'AWS, Azure, and GCP deployment patterns for UAE businesses.' },
      { href: '/articles/it-consulting-digital-transformation', title: 'Digital Transformation', desc: 'Cloud adoption and automation strategy for UAE organisations.' },
      { href: '/services/cloud', title: 'Cloud Services', desc: 'Cloud migration and managed cloud infrastructure.' },
    ],
    scalini: [
      { href: '/articles/it-support-helpdesk', title: 'IT Helpdesk Services', desc: 'Centralised helpdesk for end-user support across UAE.' },
      { href: '/articles/it-support-remote', title: 'Remote IT Support', desc: 'Remote resolution for software and connectivity issues.' },
      { href: '/services/it-support', title: 'IT Support Services', desc: 'Full-spectrum IT support across Dubai and UAE.' },
    ],
    gss: [
      { href: '/articles/it-support-24-7', title: '24/7 IT Support', desc: 'Round-the-clock IT support operations for UAE businesses.' },
      { href: '/articles/it-support-monitoring', title: 'IT Infrastructure Monitoring', desc: 'Continuous monitoring so issues are caught before users notice.' },
      { href: '/services/it-support', title: 'IT Support Services', desc: 'Full-spectrum IT support across Dubai and UAE.' },
    ],
    technohub: [
      { href: '/articles/it-support-helpdesk', title: 'IT Helpdesk Services', desc: 'Centralised helpdesk for end-user support.' },
      { href: '/articles/it-support-optimization', title: 'IT Support Optimisation', desc: 'Reducing ticket volumes and improving resolution time.' },
      { href: '/services/it-support', title: 'IT Support Services', desc: 'Full-spectrum IT support across Dubai and UAE.' },
    ],
    enterprise: [
      { href: '/articles/it-support-remote', title: 'Remote IT Support', desc: 'Remote support across multiple sites and emirates.' },
      { href: '/articles/it-consulting-infrastructure-design', title: 'IT Infrastructure Design', desc: 'Scalable network and server architecture for UAE businesses.' },
      { href: '/services/managed-it', title: 'Managed IT Services', desc: 'Fully managed IT for multi-site UAE businesses.' },
    ],
    cybersecurity: [
      { href: '/articles/it-consulting-assessment', title: 'IT Assessment & Security Audit', desc: 'Gap assessment mapped to HAAD, NESA, and ISO 27001.' },
      { href: '/articles/it-consulting-infrastructure-design', title: 'IT Infrastructure Design', desc: 'Network segmentation and security architecture for UAE.' },
      { href: '/services/cybersecurity', title: 'Cybersecurity Services', desc: 'Zero Trust, EDR, and compliance for UAE businesses.' },
    ],
    'ransomware-recovery': [
      { href: '/articles/it-consulting-assessment', title: 'IT Assessment & Security Audit', desc: 'Identify vulnerabilities before attackers do.' },
      { href: '/articles/it-support-monitoring', title: 'IT Infrastructure Monitoring', desc: 'Continuous monitoring and threat detection.' },
      { href: '/services/cybersecurity', title: 'Cybersecurity Services', desc: 'Ransomware protection and incident response.' },
    ],
    'm365-audit': [
      { href: '/articles/it-consulting-assessment', title: 'IT Assessment', desc: 'Comprehensive IT and security gap assessment.' },
      { href: '/articles/it-consulting-strategy', title: 'IT Strategy Consulting', desc: 'Business-aligned IT planning for UAE organisations.' },
      { href: '/services/it-consulting', title: 'IT Consulting Services', desc: 'Advisory and architecture consulting for UAE.' },
    ],
    'it-consulting': [
      { href: '/articles/it-consulting-guide', title: 'IT Consulting Guide', desc: 'Full guide to IT consulting engagements in the UAE.' },
      { href: '/articles/it-consulting-roadmap', title: 'IT Roadmap Planning', desc: '12–36 month IT roadmaps with prioritised initiatives.' },
      { href: '/services/it-consulting', title: 'IT Consulting Services', desc: 'Advisory and architecture consulting for UAE.' },
    ],
  };

  const relatedArticles = RELATED_BY_SLUG[slug] ?? [
    { href: '/articles/it-support-monitoring', title: 'IT Infrastructure Monitoring', desc: 'Proactive RMM monitoring for UAE businesses.' },
    { href: '/articles/it-consulting-assessment', title: 'IT Assessment', desc: 'Comprehensive IT gap assessment for UAE organisations.' },
    { href: '/services', title: 'All IT Services', desc: 'Browse NOCKO\'s full range of IT services.' },
  ];

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
        <section className="section" style={{ borderTop: '1px solid #eaeaea', paddingTop: '3rem' }}>
          <div className="container">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Related Services & Resources</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {relatedArticles.map((item) => (
                <a key={item.href} href={item.href} style={{ display: 'block', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

