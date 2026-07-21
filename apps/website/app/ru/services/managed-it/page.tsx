import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ServiceGeo from '@/components/services/ServiceGeo';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Управляемые ИТ-услуги в Дубае | ИТ-аутсорсинг ОАЭ',
  description:
    'Комплексные управляемые ИТ-услуги в Дубае и ОАЭ. Полное управление ИТ-инфраструктурой, круглосуточный мониторинг и проактивное обслуживание для бизнеса.',
  keywords:
    'управляемые ИТ-услуги Дубай, управление ИТ ОАЭ, ИТ-аутсорсинг ОАЭ, полное управление ИТ Дубай, лучшие управляемые ИТ ОАЭ',
  openGraph: {
    title: 'Управляемые ИТ-услуги в Дубае | ИТ-аутсорсинг ОАЭ',
    description: 'Профессиональные управляемые ИТ-услуги и управление инфраструктурой для бизнеса в Дубае и по всему ОАЭ.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/services/managed-it',
    languages: {
      'en-AE': '/services/managed-it',
      'ru-RU': '/ru/services/managed-it',
      'x-default': '/services/managed-it',
    },
  },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Корпоративные Управляемые ИТ-услуги в Дубае (MSP)',
    subtitle: 'Полностью переданные на аутсорсинг ИТ-отделы и совместное управление',
    description:
      'Превратите ИТ из капитальных затрат в предсказуемые операционные расходы. Мы предоставляем полное управление сетями, круглосуточный SOC-мониторинг и услуги виртуального CTO (vCTO) для растущих организаций по всему ОАЭ.',
  },
  firstSection: [
    {
      title: 'Полный Аутсорсинг Инфраструктуры',
      text: 'Для быстрорастущих компаний в DMCC или JAFZA наем внутреннего ИТ-отдела обходится дорого. Наше решение Managed IT действует как ваш полноценный ИТ-отдел. От настройки офисного брандмауэра до сброса пароля сотрудника в Microsoft 365 в 2 часа ночи.',
      link: '/ru/articles/managed-it-infrastructure',
      linkText: 'Изучить Полностью Управляемые ИТ',
      image: '/images/services/managed-it-infrastructure.webp',
      imageAlt: 'Услуги по управлению ИТ-инфраструктурой в ОАЭ',
    },
    {
      title: 'Совместное управление (Co-Managed IT)',
      text: 'Если у вас уже есть опытный ИТ-директор в Дубае, он не должен тратить время на установку патчей или управление резервными копиями. Наша структура Co-Managed IT интегрируется напрямую с вашей существующей командой, беря на себя рутину мониторинга.',
      link: '/ru/articles/managed-it-services-guide',
      linkText: 'Узнать о Co-Managed IT',
    },
    {
      title: 'Виртуальный технический директор (vCTO)',
      text: 'Каждому бизнесу нужно техническое руководство, но CTO на полный рабочий день в ОАЭ стоит дорого. Наши контракты Managed IT включают руководство vCTO. Мы встречаемся с вашим советом директоров ежеквартально для планирования бюджетов и миграций.',
      link: '/ru/articles/managed-it-services-guide',
      linkText: 'Преимущества vCTO',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Фиксированные ежемесячные операционные расходы (OPEX) без скрытых платежей' },
    { icon: 'icon2', title: 'Стратегия vCTO и ежеквартальная отчетность перед руководством' },
    { icon: 'icon3', title: 'Схемы совместного управления для поддержки внутренних ИТ-отделов' },
    { icon: 'icon4', title: 'Круглосуточный NOC / SOC мониторинг из нашего центра в Дубае' },
    { icon: 'icon5', title: 'Комплексное управление поставщиками (мы общаемся с Etisalat/Du за вас)' },
  ],
  secondSection: [
    {
      title: 'Строгое соблюдение законов ОАЭ о данных',
      text: 'Управление ИТ на Ближнем Востоке требует строгого соблюдения местных законов. Мы гарантируем, что архитектура резервного копирования и места хранения данных полностью соответствуют требованиям TRA, DESC и NESA.',
      link: '/ru/articles/managed-it-services-guide',
      linkText: 'Обеспечить соответствие данных',
      image: '/images/services/managed-it-security.webp',
      imageAlt: 'Услуги безопасности и соблюдения требований в ОАЭ',
    },
    {
      title: 'Автоматизированный жизненный цикл устройств',
      text: 'Хватит тратить часы руководства на покупку ноутбуков. Когда вам нужно масштабировать команду, NOCKO берет на себя весь жизненный цикл оборудования. Мы закупаем корпоративное оборудование, применяем корпоративные образы через Microsoft Intune и доставляем устройство прямо на стол сотруднику.',
      link: '/ru/articles/it-support-monitoring',
      linkText: 'Автоматизировать закупки',
    },
    {
      title: 'Аварийное восстановление (Disaster Recovery)',
      text: 'Кибератака математически неизбежна. Наши пакеты Managed IT включают возможности аварийного восстановления корпоративного уровня. Мы управляем изолированными резервными копиями и проводим ежеквартальное тестирование.',
      link: '/ru/articles/data-backup-services-dubai',
      linkText: 'Посмотреть метрики восстановления',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Локальный NOC & Helpdesk в ОАЭ' },
    { icon: '/images/benefits/time.png', text: 'Финансовые гарантии аптайма SLA' },
    { icon: '/images/benefits/team.png', text: 'MSP-архитектура корпоративного уровня' },
    { icon: '/images/benefits/pricing.png', text: 'Предсказуемые счета (OPEX)' },
    { icon: '/images/benefits/communication.png', text: 'Полное управление контрагентами' },
  ],
  resources: [
    {
      type: 'Кейс',
      title: 'Автоматический бэкап EMR и комплаенс для клиники в ОАЭ',
      description: 'Как мы защитили EMR, снимки и бухгалтерские данные клиники ежедневными автоматическими бэкапами и отчётами для аудита.',
      url: '/ru/case-studies/emr-backup',
      ctaText: 'Читать кейс',
    },
  ],
  cta: {
    title: 'Готовы перестать беспокоиться об ИТ?',
    text: 'Запланируйте аудит инфраструктуры с vCTO NOCKO, чтобы определить, готова ли ваша фирма к переходу на управляемые услуги.',
    ctaText: 'Запросить аудит инфраструктуры',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'ИТ Поддержка (Helpdesk)', url: '/ru/services/it-support', description: 'Первая линия наших Управляемых Услуг.' },
    { title: 'Стратегический Консалтинг', url: '/ru/services/it-consulting', description: 'Независимые услуги vCIO и техническая интеграция.' },
    { title: 'Корпоративная Кибербезопасность', url: '/ru/services/cybersecurity', description: 'Архитектура Zero Trust и круглосуточная защита от шифровальщиков.' },
  ],
};

const geoData = {
  emirates: [
    { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'JLT / DMCC', 'Silicon Oasis', 'Media City'] },
    { name: 'Абу-Даби', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
    { name: 'Шарджа', hubs: ['SAIF Zone', 'Hamriyah Free Zone'] },
    { name: 'Аджман', hubs: [] },
    { name: 'Фуджейра', hubs: [] },
    { name: 'Рас-эль-Хайма', hubs: [] },
    { name: 'Умм-эль-Кайвайн', hubs: [] },
  ],
  terms: ['Провайдер MSP ОАЭ', 'Аутсорсинг ИТ Дубай', 'Хабы Co-Managed ИТ', 'Техническое лидерство vCTO'],
};

export default async function ManagedItPage() {
  const service = await getService('managed-it', 'ru');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Managed IT Services',
          name: 'Managed IT Services in Dubai & UAE',
          description: 'Fully managed IT operations: helpdesk, monitoring, security, and infrastructure management for a fixed monthly fee.',
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Услуги', url: '/ru/services' }, { name: 'Управляемые ИТ Услуги' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
        geoSection={
          <ServiceGeo
            title="Обслуживаем бизнес по всему ОАЭ"
            description="NOCKO предоставляет комплексные управляемые ИТ-услуги для корпоративных офисов и предприятий в Дубае, Абу-Даби и Северных Эмиратах."
            emirates={geoData.emirates}
            terms={geoData.terms}
            footerNote="Масштабируйтесь с NOCKO"
          />
        }
      />
      <Footer />
    </>
  );
}
