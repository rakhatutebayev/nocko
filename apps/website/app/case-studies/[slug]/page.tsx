import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
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

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
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
        title: 'How Projection Improved IT Reliability with Annual Maintenance Contract',
        client: 'Projection',
        industry: 'IT AMC',
        challenge:
          '<p>Projection is a UAE‑based company with three offices and ~80 endpoints. Their IT stack included aging switches, mixed cable standards, and unmanaged Wi‑Fi. Support was reactive: tickets piled up, vendors arrived late, and repeat incidents increased.</p><p>The leadership team needed faster response times, higher reliability, and an upgrade plan that would not disrupt operations.</p>',
        solution:
          '<p>We introduced a structured Annual Maintenance Contract (AMC) that combined proactive monitoring, quarterly preventive visits, and a clearly defined SLA. The first 30 days focused on asset discovery, network mapping, and risk scoring.</p><p>We standardized switch configurations, replaced failing patch panels, and labeled/recertified critical cabling runs. A priority‑based ticket system and escalation path were implemented, with a dedicated onsite engineer for the highest‑risk office.</p>',
        results: {
          uptime: 'Achieved 99.9% uptime across core network services',
          responseTime: 'Average response time improved from 6h to 2h (Dubai)',
          incidents: 'Critical incident volume reduced by 48% within 4 months',
          rollout: 'Completed phased upgrades without downtime for client‑facing systems',
          satisfaction: 'Helpdesk satisfaction score increased from 3.6 to 4.7/5',
        },
        testimonial:
          '“We now have predictable costs, faster response, and a clear upgrade roadmap. The AMC program removed the chaos from our IT operations.”',
      },
    } as any;
  }

  if (!caseStudy && slug === 'solus') {
    caseStudy = {
      attributes: {
        title: 'How Solus Insurance Enhanced Security with Enterprise Cybersecurity',
        client: 'Solus Insurance',
        industry: 'Cybersecurity',
        challenge:
          '<p>Solus Insurance manages sensitive customer data across multiple lines of business. Their security stack had grown organically, leaving gaps in visibility and inconsistent policies across endpoints and cloud workloads.</p><p>They needed stronger detection, faster incident response, and a compliance‑ready security posture without disrupting daily operations.</p>',
        solution:
          '<p>We deployed an enterprise cybersecurity program with centralized monitoring, endpoint hardening, and segmented network access. A layered approach combined firewall policy cleanup, EDR rollout, and 24/7 SOC monitoring.</p><p>We also implemented security baselines, phishing protection, and a structured incident response playbook aligned to insurance compliance requirements.</p>',
        results: {
          detection: 'Reduced average threat detection time from hours to minutes',
          coverage: '100% endpoint visibility across offices and remote users',
          incidents: 'Security incidents reduced by 42% within 90 days',
          compliance: 'Improved audit readiness with standardized security controls',
          response: 'Faster incident response with clear escalation paths',
        },
        testimonial:
          '“We gained visibility across our entire environment and a clear response plan. Security is now proactive, not reactive.”',
      },
    } as any;
  }

  if (!caseStudy && slug === 'fh') {
    caseStudy = {
      attributes: {
        title: 'How FH Fundamental Migrated to Cloud with Zero Downtime',
        client: 'FH Fundamental',
        industry: 'Cloud & Data Services',
        challenge:
          '<p>FH Fundamental operated legacy on‑premises infrastructure hosting business‑critical applications and customer data. Aging hardware, limited scalability, and high maintenance overhead constrained their growth and innovation capacity.</p><p>They needed a migration path to cloud that ensured zero downtime, preserved data integrity, and enabled rapid deployment of new services without disrupting existing operations.</p>',
        solution:
          '<p>We designed a phased cloud migration strategy targeting AWS, with parallel run capability to validate workloads before cutover. Application assessment identified dependencies, and a lift‑and‑shift approach was combined with selective re‑platforming for high‑traffic services.</p><p>Pre‑migration testing, synchronized data replication, and a rollback plan ensured safety at each stage. We migrated non‑critical workloads first, validated performance, then moved production systems during planned maintenance windows with health checks at every step.</p>',
        results: {
          uptime: 'Achieved zero downtime during migration of 12 production workloads',
          performance: 'Application response times improved by 35% post‑migration',
          scalability: 'Auto‑scaling enabled for peak traffic periods without manual intervention',
          deployment: 'New feature deployment time reduced from weeks to hours',
          reliability: 'Infrastructure uptime improved from 98.2% to 99.95%',
        },
        testimonial:
          '"The migration was seamless. Our teams kept working without interruption, and we immediately gained speed and reliability we never had with on‑prem."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'scalini') {
    caseStudy = {
      attributes: {
        title: 'How Scalini Transformed Network Infrastructure Across 5 Locations',
        client: 'Scalini Restaurant Group',
        industry: 'Structured Cabling',
        challenge:
          '<p>Scalini operates 5 restaurant locations across Dubai and Abu Dhabi. Each site had been cabled independently over time, resulting in mixed standards, undocumented patch panels, unlabeled runs, and inconsistent Wi‑Fi coverage. POS downtime during peak hours led to lost revenue and customer complaints.</p><p>The IT team needed a standardized network foundation that could support centralized reservation systems, security cameras, digital signage, and reliable guest Wi‑Fi without ongoing troubleshooting.</p>',
        solution:
          '<p>We deployed a unified structured cabling program across all 5 locations. Each site received certified Cat6A runs to support 10Gbps backbone links, labeled patch panels, and a documented cable map. Centralized switches were placed in each location with fiber uplinks to a regional hub.</p><p>Wi‑Fi access points were strategically positioned for full guest and back‑of‑house coverage. All installations were certified with Fluke testing, and as‑built documentation was delivered with each site handover.</p>',
        results: {
          coverage: '100% Wi‑Fi coverage across all dining and kitchen areas',
          uptime: 'Achieved 99.9% network uptime for POS and reservation systems',
          deployment: 'Completed rollout across 5 locations in 8 weeks without disrupting operations',
          standardization: 'Single cabling standard and labeling scheme across all sites',
          scalability: 'Ready for future expansion with documented infrastructure',
        },
        testimonial:
          '"Our network used to be a constant headache. Now it just works. Every location has the same reliable setup, and we can finally focus on serving our guests instead of troubleshooting Wi‑Fi."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'gss') {
    caseStudy = {
      attributes: {
        title: 'How Global Service Solution Achieved 24/7 IT Support Excellence',
        client: 'Global Service Solution',
        industry: 'IT Support',
        challenge:
          '<p>Global Service Solution operates a 24/7 flight dispatch center coordinating aircraft operations across the Middle East and Asia. Their dispatch teams rely on mission‑critical systems for flight planning, weather data, real‑time tracking, and regulatory compliance.</p><p>Any IT downtime directly impacts flight schedules and safety. They needed guaranteed 24/7 IT support with rapid response times, proactive monitoring, and zero tolerance for unscheduled outages.</p>',
        solution:
          '<p>We implemented a comprehensive 24/7 IT support program with dedicated onsite engineers during peak hours and remote monitoring coverage around the clock. A tiered escalation system ensures critical incidents reach senior engineers within minutes.</p><p>Proactive monitoring tracks server health, network performance, and application uptime with automated alerts. Redundant systems were deployed for all critical workloads, and a detailed runbook was created for common incident scenarios to minimize resolution time.</p>',
        results: {
          uptime: 'Achieved 99.8% uptime for dispatch systems with zero unscheduled downtime',
          response: 'Average response time of 30 minutes for P1 incidents (target: 1 hour)',
          availability: '24/7 onsite or remote engineer coverage with <15min escalation',
          incidents: 'Critical incident count reduced by 62% through proactive monitoring',
          satisfaction: 'Dispatch team satisfaction rating: 4.9/5 for IT support quality',
        },
        testimonial:
          '"Our flight dispatch operations never stop, and now our IT support never stops either. The team is always available, and issues are resolved before they impact our operations."',
      },
    } as any;
  }

  if (!caseStudy && slug === 'technohub') {
    caseStudy = {
      attributes: {
        title: 'How TechnoHub Transformed IT Operations with Managed Services',
        client: 'TechnoHub',
        industry: 'Managed Services',
        challenge:
          '<p>TechnoHub is a growing technology consultancy managing IT infrastructure across multiple projects. Their in‑house IT team was overwhelmed with reactive support, vendor management, security patching, and infrastructure maintenance, leaving no time for strategic initiatives.</p><p>Rising costs, fragmented vendor relationships, and unpredictable IT spending made it difficult to plan budgets. They needed a partner to fully manage their IT operations while aligning technology with business goals.</p>',
        solution:
          '<p>We transitioned TechnoHub to a fully managed IT services model, taking ownership of infrastructure, security, support, and vendor coordination. A dedicated account manager became the single point of contact, and a 24/7 SOC monitored all systems with proactive alerts.</p><p>We consolidated vendor contracts, implemented security baselines, automated patch management, and created a quarterly technology roadmap aligned with business objectives. Predictable monthly pricing replaced unpredictable project‑based costs.</p>',
        results: {
          cost: 'IT operational costs reduced by 40% through vendor consolidation',
          predictability: 'Fixed monthly pricing with zero surprise invoices',
          focus: 'Internal IT team freed to focus on strategic projects and innovation',
          security: 'Security posture improved with automated patching and 24/7 monitoring',
          alignment: 'Quarterly roadmap meetings ensure IT supports business growth',
        },
        testimonial:
          '"Managed services removed all the complexity. We now have a predictable IT budget, better security, and a partner who understands our business. Our internal team can finally focus on innovation instead of firefighting."',
      },
    } as any;
  }

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
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
                <pre>{JSON.stringify(caseStudy.attributes.results, null, 2)}</pre>
              </div>
            )}
            {caseStudy.attributes.testimonial && (
              <div className="case-study__testimonial">
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

