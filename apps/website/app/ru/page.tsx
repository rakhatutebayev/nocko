import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import IndustriesDynamic from '@/components/sections/IndustriesDynamic';
import LayoutScripts from '@/app/layout-scripts';

export const metadata: Metadata = {
  title: 'Ведущая ИТ-Компания в Дубае | ИТ Аутсорсинг и Поддержка ОАЭ | NOCKO',
  description:
    'Ищете лучшую ИТ-компанию в Дубае? NOCKO предлагает профессиональную техническую поддержку 24/7, настройку сетей, облачные решения и защиту данных для бизнеса в ОАЭ.',
  keywords: [
    'ит компания в дубае',
    'русскоговорящие ит специалисты дубай',
    'ит аутсорсинг дубай',
    'ит поддержка оаэ',
    'IT AMC dubai',
    'приходящий системный администратор',
  ],
  openGraph: {
    title: 'Ведущая ИТ-Компания в Дубае | ИТ Аутсорсинг и Поддержка ОАЭ | NOCKO',
    description:
      'Ведущая русскоязычная ИТ-компания в Дубае: сетевые технологии, облачные решения, кибербезопасность и абонентское обслуживание (AMC).',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NOCKO Information Technology',
  },
  alternates: {
    canonical: '/ru',
    languages: {
      'en-AE': '/',
      'ru-RU': '/ru',
    },
  },
};

const ruHero = {
  title: 'Профессиональная ИТ-Компания в Дубае | Комплексная поддержка в ОАЭ',
  subtitle: 'Мы предоставляем ИТ-аутсорсинг, настройку сетевой инфраструктуры, облачные решения и техническую поддержку 24/7 для Вашего бизнеса.',
  ctaPrimary: { text: 'Получить ИТ-поддержку', href: '#contact' },
  ctaSecondary: { text: 'Все услуги', href: '#services' },
  stats: [
    { number: '10+', label: 'Лет Экспертного Опыта' },
    { number: '50+', label: 'Клиентов в ОАЭ' },
    { number: '99.9%', label: 'Гарантия (SLA)' },
    { number: '24/7', label: 'Доступность' },
  ]
};

const ruFeatures = [
  {
    title: 'Круглосуточная поддержка 24/7',
    description: 'Непрерывная техническая помощь вашему бизнесу. Мы реагируем за 15 минут удаленно, и гарантируем физический выезд инженера в течение 2 часов (Дубай) и 4 часов (по ОАЭ).',
    iconId: 'support-24-7',
    link: '#services',
    linkText: 'Подробнее',
    linkAriaLabel: 'О круглосуточной ИТ-поддержке',
    serviceType: 'ИТ Поддержка',
  },
  {
    title: 'Сертифицированные инженеры',
    description: 'Русскоговорящие ИТ-эксперты, специализирующиеся на сетевой архитектуре и кибербезопасности. Сертификации Microsoft, Cisco, AWS.',
    iconId: 'expertise-15-years',
    link: '#about',
    linkText: 'Познакомьтесь с командой',
    linkAriaLabel: 'О нашей команде',
    serviceType: 'ИТ Консалтинг',
  },
  {
    title: 'Обслуживаем все Эмираты',
    description: 'Полный спектр услуг на всей территории ОАЭ. Быстрый выезд системных администраторов от Дубая до Абу-Даби.',
    iconId: 'dubai-service',
    link: '#contact',
    linkText: 'Зона обслуживания',
    linkAriaLabel: 'Наша зона покрытия в ОАЭ',
    serviceType: 'ИТ Услуги',
  },
  {
    title: 'Гарантия бесперебойности 99.9%',
    description: 'Инфраструктура корпоративного уровня со строгим SLA. Проактивный мониторинг 24/7 гарантирует, что ваши бизнес-процессы не остановятся ни на секунду.',
    iconId: 'high-availability',
    link: '#services',
    linkText: 'Узнать больше',
    linkAriaLabel: 'О гарантии 99.9%',
    serviceType: 'ИТ Инфраструктура',
  },
];

const ruServices = [
  {
    title: 'ИТ Аутсорсинг и AMC (Договор Поддержки)',
    description: 'Полное обслуживание ИТ-систем вашей компании (IT AMC - Annual Maintenance Contract). Включает круглосуточную поддержку (Helpdesk), удаленный мониторинг и выезд приходящего системного администратора в офис.',
    href: '/services/it-support-ru',
    serviceType: 'ИТ Поддержка',
    color: 'blue' as const,
  },
  {
    title: 'Монтаж локальных сетей (СКС)',
    description: 'Проектирование и прокладка высокоскоростных локальных сетей и сертифицированной системы каблирования для новых офисов, ресторанов и складов.',
    href: '/services/structured-cabling',
    serviceType: 'Сетевая архитектура',
    color: 'yellow' as const,
  },
  {
    title: 'Кибербезопасность и аудит',
    description: 'Решения корпоративной безопасности. Аудиты уязвимостей, настройка файрволов, шифрование данных и внедрение политик Zero Trust для защиты вашего бизнеса от угроз.',
    href: '/services/cybersecurity',
    serviceType: 'Кибербезопасность',
    color: 'green' as const,
  },
  {
    title: 'Облачные серверы и миграция',
    description: 'Внедрение и поддержка облачной инфраструктуры (AWS, Microsoft Azure, Google Cloud). Бесперебойный перенос данных (миграция) без простоя ваших сотрудников.',
    href: '/services/cloud',
    serviceType: 'Облачные вычисления',
    color: 'cyan' as const,
  },
];

const ruIndustries = [
  {
    id: 'corporate',
    name: 'Корпоративные ИТ-решения',
    icon: '/images/industries/enterprise.svg',
    image: '/images/industries/enterprise.png',
    description: 'Полный цикл ИТ-поддержки для корпораций, штаб-квартир и сетей офисов по всем ОАЭ.',
    fullDescription: 'Построение и обслуживание развитых ИТ экосистем: внутренние коммуникации, контроль доступа, облачная инфраструктура, автоматизация рабочих процессов и строгие политики кибербезопасности.',
    serviceType: 'Корпоративные решения',
  },
  {
    id: 'hospitality',
    name: 'Ритейл и Гостиничный Бизнес',
    icon: '/images/industries/hospitality.svg',
    image: '/images/industries/retail.png',
    description: 'Умная ИТ-инфраструктура для отелей, ресторанов и торговых центров.',
    fullDescription: 'Модернизация бесшовных сетей Wi-Fi, настройка POS-терминалов, интеграция CRM и видеонаблюдения для безупречного сервиса ваших клиентов.',
    serviceType: 'Ритейл и HoReCa',
  },
  {
    id: 'education',
    name: 'Образование',
    icon: '/images/industries/education.svg',
    image: '/images/industries/education.png',
    description: 'Комплексные цифровые экосистемы для школ, колледжей и онлайн-платформ.',
    fullDescription: 'Интеграция систем управления обучением (LMS), оборудования для виртуальных классов и безопасной передачи данных.',
    serviceType: 'Образовательные технологии',
  },
  {
    id: 'healthcare',
    name: 'Медицина и Клиники',
    icon: '/images/industries/healthcare.svg',
    image: '/images/industries/healthcare.png',
    description: 'Надежная ИТ-защита чувствительных данных пациентов и бесперебойная работа клиник.',
    fullDescription: 'Поддержка систем ЭМК/EHR, защита медицинских записей и организация надежных сетей (Wi-Fi, VoIP, PACS). Оптимизация ИТ для максимальной надежности при полной загрузке регистратуры.',
    serviceType: 'ИТ для медицины',
  },
  {
    id: 'realestate',
    name: 'Недвижимость и Строительство',
    icon: '/images/industries/retail.svg',
    image: '/images/industries/manufacturing.png',
    description: 'Сетевые решения для полевых команд, агентств недвижимости и офисов застройщиков.',
    fullDescription: 'Развертывание защищенных сетей для быстрой связи между объектами, облачные архивы для тяжелых BIM/CAD файлов, и интеграция систем контроля за проектом.',
    serviceType: 'ИТ для строительства',
  },
  {
    id: 'finance',
    name: 'Финансы и Финтех',
    icon: '/images/industries/finance.svg',
    image: '/images/industries/finance.png',
    description: 'Сверхзащищенная инфраструктура для банков, финансовых брокеров и платежных систем.',
    fullDescription: 'Зашифрованные сети, антифрод системы и строгий комплаенс для финансовых потоков. Проактивный мониторинг 24/7 для защиты каждой транзакции.',
    serviceType: 'Финансовые технологии',
  },
  {
    id: 'logistics',
    name: 'Логистика',
    icon: '/images/industries/logistics.svg',
    image: '/images/industries/logistics.png',
    description: 'Безотказная связь между складами, автопарками и головными офисами в Эмиратах.',
    fullDescription: 'Настройка WMS-систем, телематики, защищенного покрытия Wi-Fi на складах и интеграция ИТ для отслеживания маршрутов без прерываний.',
    serviceType: 'ИТ для логистики',
  },
  {
    id: 'manufacturing',
    name: 'Производство',
    icon: '/images/industries/manufacturing.svg',
    image: '/images/industries/manufacturing.png',
    description: 'Автоматизация фабрик и цехов. Интеграция станков в локальную сеть ERP.',
    fullDescription: 'Сетевая архитектура, связывающая производство с офисным сектором. Защита коммерческой тайны, IoT решения и резервное копирование ERP-систем.',
    serviceType: 'Промышленный ИТ',
  },
];

export default function RuHomePage() {
  return (
    <>
      <LayoutScripts />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          title={ruHero.title}
          subtitle={ruHero.subtitle}
          ctaPrimary={ruHero.ctaPrimary}
          ctaSecondary={ruHero.ctaSecondary}
          stats={ruHero.stats}
        />
        <Features 
          title="Почему выбирают NOCKO"
          intro="Ваш надежный ИТ-партнер, предоставляющий корпоративные решения на всей территории ОАЭ."
          features={ruFeatures}
        />
        <Services 
          title="Наши ИТ Услуги в ОАЭ: Сети, Облако, Безопасность и Поддержка"
          subtitle="Мы проектируем, запускаем и обслуживаем безопасную технологическую инфраструктуру для бизнеса."
          services={ruServices}
        />
        <Clients 
          title="Нам доверяют в ОАЭ"
          subtitle="Лидирующие компании по всем Эмиратам выбирают NOCKO для инфраструктуры и ИТ поддержки. От клиник и ресторанов к девелоперам и брокерским фирмам."
          ctaText="Стать нашим клиентом"
        />
        <IndustriesDynamic 
          title="Отраслевые ИТ Решения: Медицина, Финансы, Девелопмент"
          subtitle="Мы предоставляем специализированные ИТ-решения для более 8 секторов экономики ОАЭ с учетом узких требований конкретного бизнеса."
          industries={ruIndustries}
        />
      </main>
      <Footer isRu={true} />
    </>
  );
}
