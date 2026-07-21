import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ServiceGeo from '@/components/services/ServiceGeo';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'ИТ Поддержка в Дубае',
  description:
    'Ведущая компания по ИТ-поддержке в Дубае, предоставляющая круглосуточную службу технической поддержки (Helpdesk), проактивное обслуживание и управляемые ИТ-услуги по всему ОАЭ.',
  keywords:
    'ИТ поддержка Дубай, ИТ компания Дубай, управляемые ИТ услуги ОАЭ, ИТ обслуживание Дубай, техническая поддержка ОАЭ',
  openGraph: {
    title: 'ИТ Поддержка в Дубае',
    description: 'Профессиональная ИТ поддержка для бизнеса в Дубае и по всему ОАЭ. Круглосуточный Helpdesk и техническое обслуживание.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/services/it-support',
    languages: { 'en-AE': '/services/it-support', 'ru-RU': '/ru/services/it-support' },
  },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Корпоративная ИТ Поддержка и Helpdesk в Дубае',
    subtitle: 'Круглосуточный мониторинг, гарантия SLA и удаленная диагностика',
    description:
      'Обеспечьте своих сотрудников мгновенной ИТ-поддержкой. Мы предоставляем многоязычную поддержку Helpdesk уровней L1/L2/L3, проактивный мониторинг рабочих станций и оперативный выезд инженеров в DIFC, DMCC и по всему ОАЭ.',
  },
  firstSection: [
    {
      title: 'Круглосуточный Удаленный Helpdesk 24/7',
      text: 'Простои пользователей парализуют работу всей организации. Наш централизованный Центр управления сетями (NOC) работает 24/7/365, предоставляя мгновенную удаленную диагностику. Мы решаем 85% проблем в первые 15 минут.',
      link: '/ru/articles/it-support-remote',
      linkText: 'Наши метрики',
      image: '/images/services/it-support-24-7.webp',
      imageAlt: 'Круглосуточная ИТ-поддержка 24/7 в ОАЭ',
    },
    {
      title: 'Управление заявками по SLA',
      text: 'Перестаньте полагаться на неструктурированные сообщения в WhatsApp «компьютерщику». Мы интегрируем профессиональные системы тикетинга (ITIL) прямо в ваш корпоративный процесс. Каждая заявка фиксируется и контролируется строгим соглашением (SLA).',
      link: '/ru/articles/it-support-helpdesk',
      linkText: 'Изучить интеграцию SLA',
    },
    {
      title: 'Оперативный выезд инженеров по Дубаю',
      text: 'В то время как удаленная поддержка решает проблемы с ПО, сбои оборудования требуют физического вмешательства. Мы направляем сертифицированных специалистов на места. Наше расположение гарантирует среднее время прибытия в 2 часа для критических ситуаций Приоритета 1.',
      link: '/ru/articles/it-support-onsite',
      linkText: 'Посмотреть зоны обслуживания',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Круглосуточные многоязычные агенты поддержки (Русский/Английский)' },
    { icon: 'icon2', title: 'Строгий ITIL-совместимый процесс отслеживания тикетов' },
    { icon: 'icon3', title: 'Удаленная диагностика, решающая 85% тикетов мгновенно' },
    { icon: 'icon4', title: 'Гарантированный выезд в течение 2 часов для Приоритета 1' },
    { icon: 'icon5', title: 'Ежемесячная отчетность о соблюдении SLA для руководителей' },
  ],
  secondSection: [
    {
      title: 'Проактивное управление рабочими станциями (MDM)',
      text: 'С развитием гибридной работы в ОАЭ защита мобильных устройств стала критически важной. Мы внедряем платформы управления (такие как Microsoft Intune) для обеспечения политик безопасности на всех корпоративных ноутбуках и телефонах.',
      link: '/ru/articles/it-support-monitoring',
      linkText: 'Защитить ваши устройства',
      image: '/images/services/it-support-monitoring.webp',
      imageAlt: 'Проактивный ИТ-мониторинг и обслуживание',
    },
    {
      title: 'Адаптация сотрудников и управление доступом',
      text: 'Процесс HR не должен тормозиться из-за ИТ. Мы полностью автоматизируем процесс приема и увольнения сотрудников. Мы настраиваем лицензии Microsoft 365 и политики безопасности еще до их первого рабочего дня.',
      link: '/ru/articles/it-support-optimization',
      linkText: 'Автоматизация HR ИТ-процессов',
    },
    {
      title: 'Теневые ИТ и Аудит лицензий',
      text: 'Сотрудники часто используют несанкционированные программы, создавая угрозы безопасности. Наш активный мониторинг обнаруживает такие приложения, блокирует их и одновременно экономит тысячи дирхамов на неиспользуемых лицензиях.',
      link: '/ru/articles/it-support-24-7',
      linkText: 'Аудит вашей инфраструктуры',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Выездные инженеры в Дубае' },
    { icon: '/images/benefits/time.png', text: '15-минутная удаленная диагностика' },
    { icon: '/images/benefits/team.png', text: 'Инженеры эскалации от L1 до L3' },
    { icon: '/images/benefits/pricing.png', text: 'Прогнозируемая оплата за пользователя' },
    { icon: '/images/benefits/communication.png', text: 'Обслуживание по стандартам ITIL' },
  ],
  resources: [],
  faq: [
    { question: 'Вы предлагаете оплату за "пользователя" или за "устройство"?', answer: 'Мы используем современную модель ценообразования «за пользователя». Поскольку сегодня сотрудники используют ноутбук, смартфон и планшет, отслеживание по устройствам ограничивает продуктивность. Модель оплаты за пользователя позволяет нам комплексно поддерживать все устройства сотрудника.' },
    { question: 'Как быстро ваши инженеры могут прибыть в наш офис в Дубае?', answer: 'Для проблем Приоритета 1 (например, отказ главного коммутатора, который отключает интернет всему офису), наше SLA физически гарантирует прибытие в течение 2 часов в основных районах Дубая (DIFC, Business Bay, JLT).' },
    { question: 'Поддерживаете ли вы Microsoft 365 и Google Workspace?', answer: 'Да, наши инженеры уровня L2 и L3 полностью сертифицированы для администрирования сложных экосистем Microsoft Azure AD, Exchange Online и Google Workspace, включая права доступа SharePoint и настройки MDM (Intune).' },
    { question: 'Можете ли вы обслуживать наше внутреннее ERP-приложение?', answer: 'В то время как наша основная поддержка охватывает сетевую инфраструктуру и стандартные офисные пакеты, мы часто выступаем в качестве связующего звена между вашей компанией и вашим поставщиком ERP (например, SAP или Oracle).' },
  ],
  faqTitle: 'Часто Задаваемые Вопросы об ИТ-Поддержке',
  cta: {
    title: 'Ваша команда устала от медленной технической поддержки?',
    text: 'Свяжитесь с нами сегодня, чтобы обсудить контракт на поддержку, который гарантирует мгновенное удаленное решение проблем.',
    ctaText: 'Запросить предложение',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Контракты IT AMC', url: '/ru/services/it-amc', description: 'Комплексное обслуживание оборудования в рамках Helpdesk.' },
    { title: 'Кибербезопасность', url: '/ru/services/cybersecurity', description: 'Защита ваших конечных точек с помощью активного SOC и EDR.' },
    { title: 'Стратегический ИТ Консалтинг', url: '/ru/services/it-consulting', description: 'Оптимизация программных лицензий, которые ваша команда использует ежедневно.' },
  ],
};

const geoData = {
  emirates: [
    { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'DMCC', 'Silicon Oasis', 'Media City'] },
    { name: 'Абу-Даби', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
    { name: 'Шарджа', hubs: ['SAIF Zone', 'Al Majaz'] },
    { name: 'Аджман', hubs: [] },
    { name: 'Фуджейра', hubs: [] },
    { name: 'Рас-эль-Хайма', hubs: [] },
    { name: 'Умм-эль-Кайвайн', hubs: [] },
  ],
  terms: ['ИТ Поддержка Дубай', 'Удаленная ИТ Поддержка ОАЭ', 'Поддержка Microsoft 365 Дубай', 'Корпоративный Helpdesk'],
};

export default async function ItSupportPage() {
  const service = await getService('it-support', 'ru');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'IT Support',
          name: 'IT Support & Helpdesk in Dubai & UAE',
          description: '24/7 helpdesk, remote and on-site IT support with guaranteed response times across Dubai and the UAE.',
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Услуги', url: '/ru/services' }, { name: 'ИТ Поддержка (Helpdesk)' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
        geoSection={
          <ServiceGeo
            title="Обслуживание бизнеса по всему ОАЭ"
            description="От финансовых центров, таких как DIFC, до промышленных зон, NOCKO предоставляет управляемую ИТ-поддержку, адаптированную под ваше расположение в Дубае, Абу-Даби и всех Эмиратах."
            emirates={geoData.emirates}
            terms={geoData.terms}
            footerNote="Экспертные ИТ Решения"
          />
        }
      />
      <Footer />
    </>
  );
}
