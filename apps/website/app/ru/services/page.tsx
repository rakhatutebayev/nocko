import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapperRu';
import Footer from '@/components/layout/FooterRu';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { getServices } from '@/lib/api/strapi';

export const metadata: Metadata = {
  title: 'ИТ-услуги в ОАЭ | Сети, Облако, Безопасность и Поддержка | NOCKO',
  description:
    'Комплексные ИТ-решения для бизнеса по всей территории ОАЭ. Настройка сети, миграция в облако, кибербезопасность и круглосуточная поддержка 24/7. Обслуживаем более 8 отраслей.',
  keywords:
    'ИТ услуги ОАЭ, сетевая инфраструктура Дубай, облачные решения Абу-Даби, кибербезопасность ОАЭ, ИТ поддержка Дубай',
  openGraph: {
    title: 'ИТ-услуги в ОАЭ | NOCKO',
    description: 'Комплексные ИТ-решения для бизнеса по всей территории ОАЭ.',
    type: 'website',
  },
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
    : undefined;

  // We could also pass a pre-translated static list if strapi fails, 
  // but Services component already has default static Russian content?
  // Let's assume Services component renders default English if undefined is passed.
  // Wait, does Services component have Russian support? We'll see.

  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service"
          title="ИТ-услуги в ОАЭ: Сети, Облако, Безопасность и Поддержка"
          subtitle="Комплексные ИТ-решения для бизнеса по всей территории ОАЭ. Мы проектируем, строим и поддерживаем безопасную масштабируемую технологическую инфраструктуру, которая способствует росту бизнеса."
        />
        {/* We might need to make Services component support ru prop if it uses hardcoded English data. */}
        <Services services={services} />
      </main>
      <Footer />
    </>
  );
}
