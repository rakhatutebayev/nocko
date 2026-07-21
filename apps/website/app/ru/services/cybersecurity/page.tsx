import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import ServiceGeo from '@/components/services/ServiceGeo';
import StructuredData from '@/components/seo/StructuredData';
import { getService } from '@/lib/api/strapi';
import { mapServiceData, type MappedServiceContent } from '@/lib/services/mapServiceData';

export const metadata: Metadata = {
  title: 'Кибербезопасность в Дубае | Защита Данных ОАЭ',
  description:
    'Передовые услуги кибербезопасности в Дубае и ОАЭ. Управление межсетевыми экранами, обнаружение угроз, шифрование данных и соответствие стандартам безопасности для бизнеса.',
  keywords:
    'кибербезопасность Дубай, защита данных ОАЭ, услуги ИТ-безопасности Дубай, сетевая безопасность ОАЭ, соответствие безопасности Дубай, обнаружение угроз ОАЭ',
  openGraph: {
    title: 'Кибербезопасность в Дубае | Защита Данных ОАЭ',
    description: 'Корпоративная кибербезопасность и защита данных для бизнеса в Дубае и по всему ОАЭ.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru/services/cybersecurity',
    languages: {
      'en-AE': '/services/cybersecurity',
      'ru-RU': '/ru/services/cybersecurity',
      'x-default': '/services/cybersecurity',
    },
  },
};

export const revalidate = 3600;

const fallback: MappedServiceContent = {
  hero: {
    title: 'Корпоративная Кибербезопасность и SOC в Дубае',
    subtitle: 'Архитектура Zero-Trust, активный поиск угроз и соответствие NESA',
    description:
      'Защитите свой корпоративный периметр. Мы предоставляем круглосуточный мониторинг SOC, управление межсетевыми экранами нового поколения и передовую защиту конечных точек, адаптированную специально для предприятий в ОАЭ.',
  },
  firstSection: [
    {
      title: 'Архитектура Zero-Trust и IAM',
      text: 'Исключите неявное доверие из своей сети. Мы разрабатываем бескомпромиссные решения для управления идентификацией и доступом (IAM), где каждый пользователь непрерывно аутентифицируется с использованием контекстной многофакторной аутентификации (MFA).',
      link: '/ru/articles/cybersecurity-guide',
      linkText: 'Изучить политики Zero-Trust',
      image: '/images/services/cybersecurity-protection.png',
      imageAlt: 'Интеграция Архитектуры Zero-Trust',
    },
    {
      title: 'Круглосуточный Центр управления безопасностью (SOC) 24/7',
      text: 'Автоматизированные триггеры вредоносного ПО не ждут рабочих часов. Наш выделенный SOC постоянно анализирует логи Microsoft 365, телеметрию брандмауэра и поведение конечных точек. Используя SIEM с ИИ, мы физически блокируем атаки программ-вымогателей в реальном времени.',
      link: '/ru/articles/it-support-monitoring',
      linkText: 'Узнать об активном поиске угроз',
    },
    {
      title: 'Управление межсетевыми экранами (NGFW)',
      text: 'Устаревшие маршрутизаторы не могут остановить современные атаки прикладного уровня. Мы внедряем и управляем NGFW (Fortinet, Palo Alto, Cisco Meraki) с использованием глубокой инспекции пакетов (DPI).',
      link: '/ru/articles/cybersecurity-guide',
      linkText: 'Обновите ваш периметр',
    },
  ],
  features: [
    { icon: 'icon1', title: 'Архитектура Zero-Trust и строгая контекстная MFA' },
    { icon: 'icon2', title: 'Круглосуточный локализованный мониторинг событий SOC в Дубае' },
    { icon: 'icon3', title: 'Обнаружение и реагирование на конечных точках (EDR / XDR)' },
    { icon: 'icon4', title: 'Строгое соблюдение стандартов NESA и DESC в ОАЭ' },
    { icon: 'icon5', title: 'Ежеквартальное тестирование на проникновение и аудит уязвимостей' },
  ],
  secondSection: [
    {
      title: 'Интеграция соответствия NESA и DESC',
      text: 'Для государственных подрядчиков ОАЭ, поставщиков медицинских услуг и финансовых учреждений DIFC соблюдение нормативных требований не подлежит обсуждению. NOCKO приводит вашу ИТ-инфраструктуру в соответствие со стандартами SIA/NESA.',
      link: '/ru/articles/cybersecurity-guide',
      linkText: 'Обеспечить соответствие',
      image: '/images/services/cybersecurity-firewall.png',
      imageAlt: 'Соответствие безопасности и аудит NESA',
    },
    {
      title: 'Защита от программ-вымогателей (EDR)',
      text: 'Стандартный антивирус математически устарел против бесфайловых вредоносных программ нулевого дня. Мы развертываем поведенческие агенты EDR (такие как CrowdStrike или SentinelOne) по всему вашему парку устройств.',
      link: '/ru/articles/cybersecurity-guide',
      linkText: 'Победить синдикаты вымогателей',
    },
    {
      title: 'Реагирование на инциденты и цифровая криминалистика',
      text: 'Когда происходит взлом, время — ваш самый ценный актив. Наша элитная команда реагирования на инциденты действует как цифровые парамедики. Мы следуем строгим протоколам для изоляции скомпрометированного оборудования и устранения угрозы.',
      link: '/ru/articles/cybersecurity-guide',
      linkText: 'Создать план реагирования',
    },
  ],
  benefits: [
    { icon: '/images/benefits/global.png', text: 'Сертифицированные этичные хакеры и аналитики' },
    { icon: '/images/benefits/time.png', text: 'Сортировка угроз менее чем за 15 минут' },
    { icon: '/images/benefits/team.png', text: 'Обязательная стандартизация NESA в ОАЭ' },
    { icon: '/images/benefits/pricing.png', text: 'Проактивная безопасность с фиксированной стоимостью' },
    { icon: '/images/benefits/communication.png', text: 'Панели мониторинга рисков для руководителей' },
  ],
  resources: [],
  cta: {
    title: 'Скомпрометирована ли ваша сеть прямо сейчас?',
    text: 'Свяжитесь с нашими аналитиками по безопасности в ОАЭ для немедленного тестирования на проникновение и аудита инфраструктуры.',
    ctaText: 'Запросить аудит безопасности',
    ctaUrl: '#contact',
  },
  relatedServices: [
    { title: 'Стратегический ИТ Консалтинг', url: '/ru/services/it-consulting', description: 'Аудит вашей текущей архитектуры и лицензирования.' },
    { title: 'Управляемые ИТ Услуги', url: '/ru/services/managed-it', description: 'Комплексное круглосуточное управление ИТ и Helpdesk.' },
    { title: 'СКС и Сети', url: '/ru/services/structured-cabling', description: 'Безопасность физического уровня и системы контроля доступа.' },
  ],
};

const geoData = {
  emirates: [
    { name: 'Дубай', hubs: ['DIFC', 'Business Bay', 'JLT', 'Silicon Oasis', 'Media City'] },
    { name: 'Абу-Даби', hubs: ['ADGM', 'Mussafah', 'Khalifa City'] },
    { name: 'Шарджа', hubs: ['SAIF Zone'] },
    { name: 'Аджман', hubs: [] },
    { name: 'Фуджейра', hubs: [] },
    { name: 'Рас-эль-Хайма', hubs: [] },
    { name: 'Умм-эль-Кайвайн', hubs: [] },
  ],
  terms: ['SOC Дубай', 'Соответствие NESA ОАЭ', 'Защита от программ-вымогателей Middle East', 'Zero Trust IAM'],
};

export default async function CybersecurityPage() {
  const service = await getService('cybersecurity', 'ru');
  const content = service ? mapServiceData(service) : fallback;

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Cybersecurity Services',
          name: 'Cybersecurity Services in Dubai & UAE',
          description: 'Firewall, endpoint protection, security monitoring, and NESA/PDPL compliance support for UAE businesses.',
        }}
      />
      <HeaderWrapper />
      <ServicePageTemplate
        content={content}
        breadcrumbs={[{ name: 'Услуги', url: '/ru/services' }, { name: 'Кибербезопасность' }]}
        articleBlocks={service?.attributes.articleBlocks}
        articleCards={service?.attributes.articleCards}
        geoSection={
          <ServiceGeo
            title="Обеспечение безопасности бизнеса по всему ОАЭ"
            description="От финансов с высокими ставками в DIFC до транснациональных штаб-квартир в Business Bay, NOCKO защищает цифровые активы корпоративного сектора ОАЭ."
            emirates={geoData.emirates}
            terms={geoData.terms}
            footerNote="Безопасность Корпоративного Уровня"
          />
        }
      />
      <Footer />
    </>
  );
}
