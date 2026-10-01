export interface CaseStudy {
  id: string;
  title: string;
  type: string;
  image: string;
  alt: string;
  href: string;
  color?: 'blue' | 'purple';
}

export const defaultCaseStudies: CaseStudy[] = [
  {
    id: 'scalini',
    title: 'How Scalini Standardized Network Infrastructure Across 5 Locations',
    type: 'Structured Cabling',
    image: '/images/cases/structured.svg',
    alt: 'Scalini network infrastructure transformation',
    href: '/case-studies/scalini',
    color: 'blue',
  },
  {
    id: 'gss',
    title: 'How Global Service Solution Achieved 24/7 Flight IT Support',
    type: 'IT Support & Helpdesk',
    image: '/images/cases/itsupport.svg',
    alt: 'IT Support & Helpdesk case study',
    href: '/case-studies/gss',
    color: 'blue',
  },
  {
    id: 'technohub',
    title: 'How TechnoHub Transformed Operations with Full Managed IT (MSP)',
    type: 'Managed IT Services',
    image: '/images/cases/itmanagment.svg',
    alt: 'Managed IT Services case study',
    href: '/case-studies/technohub',
    color: 'blue',
  },
  {
    id: 'projection',
    title: 'How Projection Improved IT Reliability with a Dedicated AMC',
    type: 'IT AMC',
    image: '/images/cases/amc.svg',
    alt: 'IT AMC case study',
    href: '/case-studies/projection',
    color: 'blue',
  },
  {
    id: 'solus',
    title: 'How Solus Insurance Strengthened Cybersecurity',
    type: 'Cybersecurity',
    image: '/images/cases/cybersecurity.svg',
    alt: 'Cybersecurity case study',
    href: '/case-studies/solus',
    color: 'blue',
  },
  {
    id: 'fh',
    title: 'How FH Fundamental Migrated to AWS UAE with Zero Downtime',
    type: 'Cloud & Data Services',
    image: '/images/cases/cloud.svg',
    alt: 'Cloud migration case study',
    href: '/case-studies/fh',
    color: 'blue',
  },
  {
    id: 'network-segmentation',
    title: 'How a Multi-Site Dubai Group Secured Its Network with Segmentation and FortiGate',
    type: 'Network Infrastructure & Security',
    image: '/images/cases/structured.svg',
    alt: 'Network segmentation case study',
    href: '/case-studies/network-segmentation',
    color: 'blue',
  },
  {
    id: 'emr-backup',
    title: 'How a UAE Medical Clinic Automated EMR Backup and Compliance Reporting',
    type: 'Backup & Disaster Recovery',
    image: '/images/cases/itmanagment.svg',
    alt: 'Healthcare EMR backup case study',
    href: '/case-studies/emr-backup',
    color: 'blue',
  },
  {
    id: 'workspace-migration',
    title: 'How a Dubai Hospitality Group Migrated Google Workspace with Zero Downtime',
    type: 'Cloud & Email Migration',
    image: '/images/cases/cloud.svg',
    alt: 'Google Workspace migration case study',
    href: '/case-studies/workspace-migration',
    color: 'blue',
  },
  {
    id: 'enterprise',
    title: 'How a 300-Seat UAE Logistics Enterprise Unified IT Across 4 Offices',
    type: 'Managed IT Services',
    image: '/images/cases/itmanagment.svg',
    alt: 'Enterprise managed IT case study',
    href: '/case-studies/enterprise',
    color: 'blue',
  },
  {
    id: 'cybersecurity',
    title: 'How a UAE Healthcare Group Passed Its HAAD Audit with Zero Findings',
    type: 'Cybersecurity & Compliance',
    image: '/images/cases/cybersecurity.svg',
    alt: 'Healthcare cybersecurity case study',
    href: '/case-studies/cybersecurity',
    color: 'blue',
  },
  {
    id: 'it-consulting',
    title: 'How a Dubai Real Estate Firm Cut IT Costs 35%',
    type: 'IT Consulting & Strategy',
    image: '/images/cases/amc.svg',
    alt: 'IT consulting case study',
    href: '/case-studies/it-consulting',
    color: 'blue',
  },
  {
    id: 'ransomware-recovery',
    title: 'How We Isolated and Defeated Ransomware in 4 Hours',
    type: 'Cybersecurity Incident Response',
    image: '/images/cases/cybersecurity.svg',
    alt: 'Ransomware recovery case study',
    href: '/case-studies/ransomware-recovery',
    color: 'blue',
  },
  {
    id: 'm365-audit',
    title: 'How an M365 Audit Saved a Dubai Firm 40% Annually',
    type: 'IT Consulting',
    image: '/images/cases/itmanagment.svg',
    alt: 'Microsoft 365 audit case study',
    href: '/case-studies/m365-audit',
    color: 'blue',
  },
];

/** Русские заголовки для хаба /ru/case-studies (те же id, href и картинки). */
const CASE_TITLES_RU: Record<string, string> = {
  "projection": "Как Projection повысила надёжность ИТ благодаря выделенному AMC",
  "solus": "Как Solus Insurance усилила защиту с помощью корпоративной кибербезопасности",
  "fh": "Как FH Fundamental мигрировала в AWS UAE без простоев",
  "scalini": "Как Scalini стандартизировала сетевую инфраструктуру в 5 ресторанах",
  "gss": "Как Global Service Solution обеспечила ИТ-поддержку полётов 24/7",
  "technohub": "Как TechnoHub перестроила ИТ-операции с полным Managed IT (MSP)",
  "ransomware-recovery": "Победа над ransomware: восстановление за 4 часа",
  "m365-audit": "Аудит M365: экономия 40% в год",
  "it-consulting": "Как девелопер недвижимости в Дубае сократил ИТ-расходы на 35% благодаря ИТ-консалтингу",
  "enterprise": "Как логистическое предприятие на 300 сотрудников объединило ИТ в 4 офисах ОАЭ",
  "cybersecurity": "Как медицинская группа в ОАЭ прошла аудит HAAD без единого замечания",
  "network-segmentation": "Как мультиформатная группа в Дубае защитила сеть с помощью сегментации и FortiGate",
  "emr-backup": "Как клиника в ОАЭ автоматизировала резервное копирование EMR и отчётность",
  "workspace-migration": "Как гостиничная группа в Дубае перенесла Google Workspace во время ребрендинга без простоев"
};

const CASE_TYPES_RU: Record<string, string> = {
  "Structured Cabling": "СКС и сети",
  "IT Support": "ИТ поддержка",
  "Managed IT": "Управляемые ИТ-услуги",
  "IT AMC": "IT AMC",
  "Cybersecurity": "Кибербезопасность",
  "Cloud": "Облако",
  "Cloud Migration": "Миграция в облако",
  "IT Consulting": "ИТ консалтинг",
  "Healthcare IT": "ИТ для медицины",
  "Network Security": "Сетевая безопасность",
  "Data Backup": "Резервное копирование",
  "Google Workspace": "Google Workspace",
  "Microsoft 365": "Microsoft 365",
  "Enterprise IT": "Корпоративные ИТ",
  "Case Study": "Кейс"
};

export const defaultCaseStudiesRu: CaseStudy[] = defaultCaseStudies.map((cs) => ({
  ...cs,
  title: CASE_TITLES_RU[cs.id] ?? cs.title,
  type: CASE_TYPES_RU[cs.type] ?? cs.type,
  alt: CASE_TITLES_RU[cs.id] ?? cs.alt,
  href: cs.href.replace('/case-studies/', '/ru/case-studies/'),
}));
