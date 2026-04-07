import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceGeo from '@/components/services/ServiceGeo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Рускоговорящие ИТ Специалисты в Дубае | ИТ Компания NOCKO',
  description:
    'Профессиональные рускоговорящие ИТ специалисты в Дубае и ОАЭ. ИТ поддержка 24/7, обслуживание серверов, облачные решения и аутсорсинг для вашего бизнеса.',
  keywords:
    'рускоговорящие ит специалисты дубай, итт компания дубай, ит поддержка оаэ, обслуживание компьютеров дубай, системный администратор дубай',
  openGraph: {
    title: 'Рускоговорящие ИТ Специалисты в Дубае | ИТ Компания NOCKO',
    description:
      'Надежная ИТ поддержка и обслуживание для вашего бизнеса в Дубае. Русскоязычная команда экспертов доступна 24/7.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/services/it-support-ru',
    languages: {
      'en-AE': '/services/it-support',
      'ru-RU': '/services/it-support-ru',
    },
  },
};

const itSupportRuContent = {
  hero: {
    title: 'ИТ Поддержка и Helpdesk в Дубае на Русском Языке',
    subtitle: 'Аутсорсинг ИТ, строгие SLA и удаленная диагностика 24/7',
    description:
      'Обеспечьте бесперебойную работу вашей команды. Мы предоставляем русскоязычную поддержку L1/L2/L3, проактивный мониторинг конечных устройств и оперативный выезд инженеров в DIFC, DMCC и по всем ОАЭ.',
    serviceType: 'ИТ Поддержка и Аутсорсинг',
  },
  firstSection: [
    {
      title: 'Централизованный Helpdesk 24/7',
      text: "Простои сотрудников парализуют производительность. Наш Центр управления сетью (NOC) работает круглосуточно, обеспечивая мгновенную удаленную диагностику. Если финансовому директору заблокирован доступ в Microsoft 365, или удаленному сотруднику нужен VPN, наши инженеры безопасно подключаются и решают 85% проблем в первые 15 минут.",
      link: '/articles/centralized-helpdesk-ru',
      linkText: 'Читать статью: Наш подход к Helpdesk',
      image: '/images/services/it-support-24-7.webp',
      imageAlt: 'ИТ поддержка 24/7 в ОАЭ',
    },
    {
      title: 'Тикет-система и соблюдение SLA',
      text: 'Перестаньте полагаться на хаотичные сообщения в WhatsApp. Мы внедряем профессиональные, ITIL-совместимые тикет-системы (ServiceNow, Jira Service Management) прямо в ваши корпоративные процессы. Каждая заявка фиксируется по времени, категоризируется по серьезности и строго подчиняется Соглашению об уровне услуг (SLA).',
      link: '/articles/centralized-helpdesk-ru',
      linkText: 'Изучить интеграцию SLA',
    },
    {
      title: 'Оперативный выезд инженера по Дубаю',
      text: 'Хотя мы решаем программные ошибки удаленно, поломки оборудования требуют физического присутствия. Если вышел из строя роутер в JLT или сервер в Business Bay, мы немедленно отправляем сертифицированных специалистов. Мы гарантируем выезд в течение 2 часов для критических сбоев первой категории.',
      link: '/articles/centralized-helpdesk-ru',
      linkText: 'Узнать больше о локальной поддержке',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: '24/7 Поддержка на русском, английском и арабском',
    },
    {
      icon: 'icon2',
      title: 'Работа строго по стандартам ITIL и тикет-системе',
    },
    {
      icon: 'icon3',
      title: 'Удаленная диагностика (решает 85% заявок мгновенно)',
    },
    {
      icon: 'icon4',
      title: 'Гарантированный выезд за 2 часа (Priority 1 SLA)',
    },
    {
      icon: 'icon5',
      title: 'Ежемесячная отчетность для руководства',
    },
  ],
  secondSection: [
    {
      title: 'Управление мобильными устройствами (MDM)',
      text: 'В условиях гибридной работы защита мобильных устройств критична. Мы развертываем системы MDM (например, Microsoft Intune) для обеспечения безопасности корпоративных ноутбуков и телефонов. Если сотрудник потеряет устройство в такси, мы можем удаленно стереть все корпоративные данные за секунды.',
      link: '/articles/cybersecurity-protection',
      linkText: 'Защита конечных точек',
      image: '/images/services/it-support-monitoring.webp',
      imageAlt: 'ИТ аутсорсинг в Дубае',
    },
    {
      title: "Автоматизация Onboarding сотрудников",
      text: "Процесс выхода нового сотрудника не должен тормозиться ИТ-отделом. Мы полностью автоматизируем выдачу доступов. Когда приходит новичок, мы заранее выделяем лицензию Microsoft 365, настраиваем политики безопасности ноутбука и предоставляем точные права доступа (RBAC) до его первого рабочего дня.",
      link: '/articles/it-support-onsite',
      linkText: 'Автоматизация ИТ для HR',
    },
    {
      title: 'Аудит лицензий и борьба с "Shadow IT"',
      text: "Сотрудники часто покупают несанкционированные SaaS-сервисы с корпоративных карт, создавая уязвимости и дублируя затраты. Наш мониторинг выявляет такие программы, блокирует их и переводит пользователей на одобренные, безопасные платформы, экономя вам тысячи дирхамов на лицензиях.",
      link: '/services/it-consulting',
      linkText: 'Аудит корпоративного ПО',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Локальная экспертиза <br> в Дубае',
    },
    {
      icon: '/images/benefits/time.png',
      text: '15 Минут на <br> Реакцию',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Инженеры от L1 <br> до Архитекторов',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Предсказуемая цена <br> за сотрудника',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Работаем по <br> регламентам ITIL',
    },
  ],
  geoContent: {
    emirates: [
      { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'JLT', 'Silicon Oasis', 'Media City'] },
      { name: 'Абу Даби', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
      { name: 'Шарджа', hubs: ['SAIF Zone', 'Al Majaz'] },
      { name: 'Аджман', hubs: [] },
      { name: 'Фуджера', hubs: [] },
      { name: 'Рас Аль Хайма', hubs: [] },
      { name: 'Умм Аль Кувейн', hubs: [] }
    ],
    terms: ['ИТ Поддержка Дубай', 'Русскоязычный Helpdesk ОАЭ', 'Поддержка Microsoft 365', 'Выездной системный администратор'],
  },
  faq: {
    title: 'Частые вопросы по ИТ Поддержке',
    items: [
      {
        question: 'Вы тарифицируете услуги "за пользователя" или "за устройство"?',
        answer:
          'Мы используем современную модель ценообразования «за пользователя». Поскольку современные сотрудники часто используют ноутбук, смартфон и планшет одновременно, ограничение поддержки устройств снижает производительность. Оплачивая "за пользователя", вы получаете комплексную поддержку всех корпоративных устройств сотрудника без скрытых платежей.',
      },
      {
        question: 'Как быстро инженер может приехать в наш офис в Дубае?',
        answer:
          'Для критических проблем Priority 1 (например, отказ коммутатора, обесточивший сеть всего офиса), наш SLA юридически гарантирует прибытие в течение 2 часов в основных деловых районах Дубая (DIFC, Business Bay, JLT).',
      },
      {
        question: 'Осуществляете ли вы поддержку Microsoft 365 / Google Workspace?',
        answer:
          'Да, наши инженеры L2 и L3 сертифицированы для администрирования сложных экосистем Microsoft Azure AD, Exchange Online и Google Workspace, включая сложную настройку политик MDM (Intune) и разрешений SharePoint.',
      },
      {
        question: 'Помогаете ли вы с нашей внутренней ERP системой (с 1С, SAP)?',
        answer:
          'Хотя наша основная техническая поддержка охватывает сетевую инфраструктуру и стандартное ПО, мы выступаем техническим посредником между вашей компанией и вендором ERP (например, 1С, SAP или Oracle). Мы диагностируем проблему и сами общаемся с их инженерами.',
      },
      {
        question: 'Как осуществляется коммуникация с поддержкой?',
        answer:
          'Мы предоставляем прямой номер технической поддержки, email для автоматического создания тикетов вServiceNow, а также клиентский портал. Вся техподдержка осуществляется приоритетно на русском языке.',
      },
    ],
  },
};

export default function ITSupportRuPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Breadcrumbs
          hidden={true}
          items={[
            { name: 'Услуги', url: '/services' },
            { name: 'ИТ Поддержка на русском' },
          ]}
        />
        <Hero
          variant="service-enhanced"
          title={itSupportRuContent.hero.title}
          subtitle={itSupportRuContent.hero.subtitle}
          description={itSupportRuContent.hero.description}
        />

        <ServiceContentEnhanced blocks={itSupportRuContent.firstSection} />
        <ServiceFeatures features={itSupportRuContent.features} />
        <ServiceContentEnhanced modifier="second" blocks={itSupportRuContent.secondSection} />
        <ServiceBenefits benefits={itSupportRuContent.benefits} />
        
        <ServiceGeo 
          title="Обслуживаем бизнес по всей территории ОАЭ"
          description="От технологичного DIFC до индустриальных зон — NOCKO обеспечивает надежную ИТ поддержку в любом уголке Эмиратов."
          emirates={itSupportRuContent.geoContent.emirates}
          terms={itSupportRuContent.geoContent.terms}
          footerNote="Экспертные ИТ решения"
        />

        <ServiceFAQ
          title={itSupportRuContent.faq.title}
          items={itSupportRuContent.faq.items}
        />
        <ServiceCTA
          title="Нужна надежная ИТ поддержка?"
          text="Свяжитесь с нами для бесплатной консультации, и мы обсудим ваши задачи."
          ctaText="Получить консультацию"
          ctaUrl="#contact"
        />
        <RelatedServices services={[
          {
            title: 'Облачные решения',
            url: '/services/cloud',
            description: 'Миграция и поддержка облачной инфраструктуры.',
          },
          {
            title: 'Кибербезопасность',
            url: '/services/cybersecurity',
            description: 'Защита ваших данных и бизнеса.',
          },
        ]} />
      </main>
      <Footer />
    </>
  );
}
