import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'On-Site IT Support Dubai | Field Engineer Dispatch UAE | NOCKO',
  description: 'NOCKO dispatches certified field engineers to DIFC, Business Bay, JLT, DSO, and Abu Dhabi within defined SLA windows. Hardware replacement, rack work, structured cabling, and break-fix on-site.',
  alternates: {
    canonical: '/articles/it-support-onsite',
    languages: {
      'en-AE': '/articles/it-support-onsite',
      'ru-RU': '/ru/articles/it-support-onsite',
    },
  },
};

const articleData = {
  hero: {
    title: 'On-Site IT Support & Field Engineer Dispatch',
    subtitle: 'Certified Engineers. Defined SLAs. Physical Presence Across UAE.',
    description: 'When remote diagnosis reaches its limit, NOCKO deploys certified field engineers to your premises — DIFC, Business Bay, JLT, DSO, Mussafah, ADGM — within contracted SLA windows.',
  },
  intro: `Remote support resolves the majority of IT incidents. But hardware failures, physical network faults, rack work, and structured cabling cannot be fixed over a screen-sharing session. When a server PSU fails in a Business Bay server room at 9 AM, when a switch stack in a JLT trading office drops half the floor, or when a new office in ADGM needs full workstation deployment before Monday — the only answer is a certified engineer on-site with the right tools and parts. NOCKO maintains a field engineering team across Dubai and Abu Dhabi, dispatching to customer sites under defined SLA windows and documenting every on-site action in a centralised service record. This article explains how NOCKO's on-site IT support model works, what physical work types are covered, how on-site SLAs are structured, and how on-site response integrates with remote managed IT for a seamless support experience.`,
  blocks: [
    {
      title: 'On-Site vs Remote IT Support: When Physical Presence Is Non-Negotiable',
      text: `<p>The distinction between remote and on-site support is not about preference — it is about capability. Remote support via RMM agent, screen share, or secure tunnel is effective for software faults, configuration changes, user account issues, cloud service problems, and the majority of network troubleshooting where the device is still reachable. NOCKO's remote first-line team resolves approximately 75–80% of all incidents without requiring a physical visit.</p>
<p>The remaining 20–25% require hands-on physical intervention. These fall into three categories:</p>
<p><strong>Hardware failure:</strong> A failed disk in a RAID array, a faulty NIC, a dead power supply, a UPS battery bank that has reached end of life, or a workstation that will not POST after a power surge. These cannot be diagnosed or resolved remotely. A certified engineer must attend site, run physical diagnostics (POST codes, beep codes, hardware test utilities), confirm the failed component, and carry out the replacement.</p>
<p><strong>Physical network faults:</strong> A patch panel port that has lost continuity, a damaged fibre run between floors, an incorrectly punched-down keystone jack, or a switch that has failed in a way that takes it off the network entirely. Fluke DSX or similar cable qualification testing, physical patch rerouting, and fibre connector polishing are all on-site-only activities.</p>
<p><strong>Deployment and infrastructure work:</strong> New office fit-outs, server rack builds, workstation imaging and deployment, structured cabling installation, and hardware moves all require physical presence. For a 30-seat DIFC office fit-out, this means rack installation, switch and patch panel mounting, cable runs to each desk, workstation imaging from a golden image, and end-to-end connectivity testing — all documented in a handover pack before sign-off.</p>`,
    },
    {
      title: 'SLA Dispatch Windows: Response Times by Zone and Priority',
      text: `<p>On-site SLA windows at NOCKO are contractually defined by priority level and geographic zone. Response time is measured from ticket creation to engineer arrival on-site — not from when the ticket is assigned or acknowledged internally.</p>`,
      list: [
        '<strong>P1 — Critical (Business down):</strong> 2-hour on-site response for Dubai core zones (DIFC, Business Bay, Downtown, DWTC, Sheikh Zayed Road corridor). P1 is defined as complete loss of a business-critical system — server room down, entire office network offline, primary internet circuit failure with no failover. Engineers are dispatched immediately on ticket creation; parts from our Dubai spares stock are transported to site concurrently.',
        '<strong>P2 — High (Major degradation):</strong> 4-hour on-site response for all Dubai zones including JLT/DMCC, Dubai Silicon Oasis, Dubai South, and Al Quoz. P2 covers partial failures affecting more than 10 users — a failed core switch, storage array degradation, or a server running on a single failed-over PSU.',
        '<strong>P3 — Medium (Minor impact):</strong> Next business day on-site for single-user hardware faults, workstation swap-outs, peripheral replacements, and minor cabling issues. This covers most break-fix scenarios that do not affect business operations.',
        '<strong>Abu Dhabi zones (ADGM, Mussafah, Khalifa City):</strong> P1 4-hour, P2 8-hour (same business day), P3 next business day. NOCKO maintains a field engineer presence in Abu Dhabi for Managed IT clients; ad-hoc callouts carry a minimum 2-hour billable engagement plus travel.',
        '<strong>Remote sites (Sharjah, Ajman, RAK):</strong> Available under Managed IT contracts with agreed scheduled windows, or as premium ad-hoc callout with 24-hour advance notice. SLAs are agreed per-contract for outlying emirate sites.',
      ],
    },
    {
      title: 'Engineer Certification and Physical Work Scope',
      text: `<p>NOCKO field engineers hold industry-standard certifications relevant to the physical and systems work they carry out on-site. Certifications are not a marketing credential — they define the scope of work an engineer is qualified to perform without supervision and are relevant to warranty compliance on enterprise hardware.</p>`,
      list: [
        '<strong>CompTIA A+:</strong> Core certification for hardware diagnostics, component replacement, and workstation/laptop servicing. All NOCKO field engineers hold CompTIA A+ as the baseline qualification for any on-site hardware work. This covers POST diagnostics, RAM, storage, PSU, and peripheral replacement across desktop and laptop platforms.',
        '<strong>MCSA / Microsoft 365 Certified:</strong> For on-site Active Directory and Microsoft 365 configuration work — domain join, Group Policy troubleshooting, hybrid join issues, and Intune device enrolment that requires physical device access. Required where the engineer must access the local machine to resolve an identity or device management issue that cannot be completed remotely.',
        '<strong>Cisco CCNA / CompTIA Network+:</strong> For on-site network troubleshooting beyond layer 1. Switch VLAN configuration, STP troubleshooting, wireless controller on-site access, and firewall physical replacement (Fortinet, Cisco ASA) with configuration restore. Engineers carrying out network infrastructure work hold at minimum Network+; Cisco-specific rack work is carried out by CCNA-certified engineers.',
        '<strong>Structured cabling (EIA/TIA 568):</strong> Cable installation and termination work is performed to EIA/TIA 568-C.2 standards. Completed cabling runs are tested with calibrated Fluke DSX or equivalent cable analyser, and test results are provided as part of the project handover pack. NOCKO does not certify cabling without passing test records.',
        '<strong>Server hardware (HPE, Dell ProSupport-aligned):</strong> NOCKO engineers carry out HPE ProLiant and Dell PowerEdge hardware replacement — drives, PSUs, memory DIMMs, NIC cards, RAID controllers — under manufacturer guidelines. Where hardware is under warranty, NOCKO coordinates with HPE or Dell dispatch to ensure replacement parts arrive at site within the hardware warranty SLA; our engineer handles the physical swap and firmware update post-replacement.',
      ],
    },
    {
      title: 'Break-Fix vs Managed On-Site: Two Models for Different Needs',
      text: `<p>NOCKO offers on-site IT support under two commercial models, and the right choice depends on your headcount, infrastructure complexity, and risk tolerance for unplanned costs.</p>
<p><strong>Break-fix (ad-hoc callout):</strong> You pay per visit — a fixed callout fee plus an hourly rate for time on-site, charged in 30-minute increments after the first hour. Parts are charged at cost plus a handling margin. This model works for businesses that have infrequent hardware issues, have internal IT staff for day-to-day work, or need specialist on-site skills for a specific project. The downside is unpredictable cost — a complex server repair can run 4–6 hours — and no SLA guarantee on response time unless a priority callout rate is agreed in advance.</p>
<p><strong>Managed on-site (included in Managed IT contract):</strong> On-site response is included within a flat monthly fee under NOCKO's Managed IT service tiers. Response SLAs (the 2/4/next-day windows above) are contractually guaranteed. Routine on-site tasks — workstation swap-outs, hardware upgrades, scheduled infrastructure maintenance — are included without generating individual callout charges. This model is significantly more cost-predictable for businesses with 30+ seats and provides the fastest response times because NOCKO's dispatch team is already familiar with your environment.</p>
<p>For most Dubai SMEs with 30–200 seats operating from a single or dual-site premises, the Managed IT model delivers better total cost of ownership when at least 3–4 on-site visits per month would otherwise be charged as break-fix. For smaller businesses or those with a primary internal IT function, break-fix with agreed priority callout rates is the more efficient commercial structure.</p>`,
    },
    {
      title: 'Common On-Site Physical Work Types in Dubai and Abu Dhabi',
      text: `<p>The following categories represent the most frequently dispatched on-site work types across NOCKO's client base in Dubai (DIFC, Business Bay, JLT/DMCC, DSO) and Abu Dhabi (ADGM, Mussafah):</p>`,
      list: [
        '<strong>Server rack work:</strong> Rack mounting of new servers, switches, and patch panels; cable management and labelling; PDU load balancing; KVM installation; blanking panel installation for airflow management. All rack work is documented with before/after photography and a rack elevation diagram updated in the asset register.',
        '<strong>Hardware replacement and repair:</strong> Server disk replacement in HPE MSA, HPE Nimble, and Dell PowerVault arrays; PSU hot-swap on HPE ProLiant and Dell PowerEdge; workstation and laptop component replacement (SSD, RAM, keyboard, display); UPS battery replacement (APC, Eaton) with load testing post-replacement.',
        '<strong>Structured cabling and patching:</strong> Cat6/Cat6A horizontal runs from patch panel to floor box or wall outlet; termination and testing to EIA/TIA 568-C.2; fibre patch cord replacement and connector cleaning; cable labelling and documentation. New office fit-out cabling in DIFC towers and Business Bay offices is a regular NOCKO on-site work type.',
        '<strong>Workstation deployment and imaging:</strong> Bulk workstation deployment for new office openings — unboxing, asset tagging, imaging from Microsoft Deployment Toolkit or Windows Autopilot, domain or Entra ID join, standard application installation, peripheral connection, and user acceptance sign-off. NOCKO has deployed 200+ seat offices in a single weekend.',
        '<strong>Network infrastructure on-site:</strong> Switch replacement and reconfiguration; wireless access point mounting, cabling, and controller registration; firewall physical replacement with configuration restore; ISP router/modem swap coordination with du, Etisalat/e&, and Virgin Media Business technicians.',
        '<strong>Server room and comms room surveys:</strong> Physical inspection of rack layout, airflow, power redundancy, cable management, and environmental monitoring. Required before infrastructure changes and as part of IT assessments. NOCKO produces a documented comms room report with photographic evidence for every site survey.',
      ],
    },
    {
      title: 'Frequently Asked Questions',
      text: `<dl>
<dt><strong>How quickly can NOCKO dispatch a field engineer in Dubai?</strong></dt>
<dd>Under a Managed IT contract, P1 critical incidents (complete business systems down) are dispatched for 2-hour on-site arrival in Dubai core zones: DIFC, Business Bay, Downtown, Sheikh Zayed Road corridor, and DWTC. P2 high-priority faults are 4-hour on-site for all Dubai zones including JLT/DMCC and Dubai Silicon Oasis. For ad-hoc break-fix callouts without a Managed IT contract, same-day attendance is typically available for morning bookings made before 10 AM, subject to engineer availability and a priority callout surcharge.</dd>

<dt><strong>Do NOCKO engineers carry spare parts to site?</strong></dt>
<dd>NOCKO maintains a Dubai spare-parts stock covering the most common break-fix components: server hard drives (SAS and SATA, common capacities for HPE and Dell arrays), server PSUs (top HPE ProLiant and Dell PowerEdge models), Cat6 patch cables and keystone jacks, APC UPS battery cartridges (common SMT and SUA models), and desktop/laptop RAM and SSDs. For less common components — a specific RAID controller, a proprietary NIC, or a fibre SFP — we source from local Dubai distributors same-day or next-day for most items. Engineers confirm parts availability at ticket triage before dispatch so there are no wasted site visits.</dd>

<dt><strong>Can NOCKO provide on-site support in Abu Dhabi — ADGM and Mussafah?</strong></dt>
<dd>Yes. NOCKO covers Abu Dhabi including ADGM (Al Maryah Island), Mussafah industrial district, Khalifa City, and the main CBD around Corniche and Al Reem Island. For Managed IT clients in Abu Dhabi, P1 SLA is 4-hour on-site and P2 is 8-hour (same business day). NOCKO has a field engineer presence in Abu Dhabi during business hours. Ad-hoc callouts to Abu Dhabi carry a minimum 2-hour billable engagement plus a travel charge; Managed IT clients in Abu Dhabi have travel included in the contract fee.</dd>
</dl>`,
    },
  ],
};

export default function ITSupportOnsitePage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-03-17', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="article"
          title={articleData.hero.title}
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'IT Support', href: '/services/it-support' }, { label: 'On-Site Support' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
