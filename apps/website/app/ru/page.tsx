import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
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
    href: '/ru/services/it-support',
    serviceType: 'ИТ Поддержка',
    color: 'blue' as const,
  },
  {
    title: 'Монтаж локальных сетей (СКС)',
    description: 'Проектирование и прокладка высокоскоростных локальных сетей и сертифицированной системы каблирования для новых офисов, ресторанов и складов.',
    href: '/ru/services/structured-cabling',
    serviceType: 'Сетевая архитектура',
    color: 'yellow' as const,
  },
  {
    title: 'Кибербезопасность и аудит',
    description: 'Решения корпоративной безопасности. Аудиты уязвимостей, настройка файрволов, шифрование данных и внедрение политик Zero Trust для защиты вашего бизнеса от угроз.',
    href: '/ru/services/cybersecurity',
    serviceType: 'Кибербезопасность',
    color: 'green' as const,
  },
  {
    title: 'Облачные серверы и миграция',
    description: 'Внедрение и поддержка облачной инфраструктуры (AWS, Microsoft Azure, Google Cloud). Бесперебойный перенос данных (миграция) без простоя ваших сотрудников.',
    href: '/ru/services/cloud',
    serviceType: 'Облачные вычисления',
    color: 'cyan' as const,
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
        <Clients />
        <IndustriesDynamic />
      </main>
      <Footer />
    </>
  );
}
