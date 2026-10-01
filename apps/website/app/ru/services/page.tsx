import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { getServices } from '@/lib/api/strapi';

export const metadata: Metadata = {
  title: 'ИТ-услуги в ОАЭ. Сети, облако и безопасность',
  description:
    'ИТ-услуги в ОАЭ для бизнеса. Настройка сети, миграция в облако, кибербезопасность и круглосуточная поддержка 24/7. Обслуживаем более 8 отраслей.',
  keywords:
    'ИТ услуги ОАЭ, сетевая инфраструктура Дубай, облачные решения Абу-Даби, кибербезопасность ОАЭ, ИТ поддержка Дубай',
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    title: 'ИТ-услуги в ОАЭ',
    description: 'Комплексные ИТ-решения для бизнеса по всей территории ОАЭ.',
    type: 'website',
  },
  alternates: {
    canonical: '/ru/services',
    languages: { 'en-AE': '/services', 'ru-RU': '/ru/services', 'x-default': '/services' },
  },
  robots: { index: true, follow: true },
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function ServicesPageRu() {
  // Try to fetch services from Strapi, fallback to default if not available
  let strapiServices: Awaited<ReturnType<typeof getServices>> = [];
  try {
    strapiServices = await getServices();
  } catch (error) {
    console.error('Error fetching services:', error);
    strapiServices = [];
  }

  // Transform Strapi services to format expected by Services component
  const services = strapiServices.length > 0
    ? strapiServices.map((service) => ({
        title: service.attributes.title,
        description: `Профессиональные услуги ${service.attributes.title} в ОАЭ.`,
        href: `/ru/services/${service.attributes.slug}`,
        serviceType: service.attributes.title,
        color: 'blue' as const,
      }))
    : [
        { title: 'ИТ поддержка и обслуживание', description: 'Helpdesk 24/7, выезд инженера за 2 часа по Дубаю, абонентское обслуживание офисов.', href: '/ru/services/it-support', serviceType: 'ИТ поддержка', color: 'blue' as const },
        { title: 'Управляемые ИТ-услуги', description: 'Полное ведение ИТ-инфраструктуры: мониторинг, NOC, безопасность и helpdesk по фиксированной цене.', href: '/ru/services/managed-it', serviceType: 'Управляемые ИТ-услуги', color: 'cyan' as const },
        { title: 'Сети и СКС', description: 'Проектирование и монтаж корпоративных сетей, Cat6A и оптоволокно, тестирование Fluke.', href: '/ru/services/structured-cabling', serviceType: 'Сетевая инфраструктура', color: 'yellow' as const },
        { title: 'Кибербезопасность', description: 'Межсетевые экраны, защита рабочих мест, резервное копирование и аудит безопасности.', href: '/ru/services/cybersecurity', serviceType: 'Кибербезопасность', color: 'red' as const },
        { title: 'Облачные решения', description: 'Миграция в AWS и Azure, Microsoft 365, гибридная инфраструктура и резервное копирование.', href: '/ru/services/cloud', serviceType: 'Облачные решения', color: 'lightblue' as const },
        { title: 'ИТ консалтинг', description: 'Аудит инфраструктуры, ИТ-стратегия, план модернизации и контроль бюджета.', href: '/ru/services/it-consulting', serviceType: 'ИТ консалтинг', color: 'green' as const },
        { title: 'IT AMC', description: 'Годовой контракт на обслуживание серверов, сетей и рабочих станций с приоритетной поддержкой.', href: '/ru/services/it-amc', serviceType: 'IT AMC', color: 'blue' as const },
      ];


  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service"
          title="ИТ-услуги в ОАЭ: Сети, Облако, Безопасность и Поддержка"
          subtitle="Комплексные ИТ-решения для бизнеса по всей территории ОАЭ. Мы проектируем, строим и поддерживаем безопасную масштабируемую технологическую инфраструктуру, которая способствует росту бизнеса."
        />
        <Services
          title="ИТ-услуги NOCKO в ОАЭ"
          subtitle="Проектируем, запускаем и обслуживаем ИТ-инфраструктуру компаний в Дубае, Абу-Даби и Шардже."
          hiddenSuffix=" в ОАЭ"
          services={services}
        />
      </main>
      <Footer />
    </>
  );
}
