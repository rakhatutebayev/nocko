import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { getServices } from '@/lib/api/strapi';

export const metadata: Metadata = {
  title: 'IT Services in UAE | Network, Cloud, Security & Support | NOCKO',
  description:
    'Comprehensive IT solutions for businesses across UAE. Network setup, cloud migration, cybersecurity, and 24/7 support. Serving 8+ industries with experienced IT professionals.',
  keywords:
    'IT services UAE, network infrastructure Dubai, cloud solutions Abu Dhabi, cybersecurity UAE, IT support Dubai',
  openGraph: {
    title: 'IT Services in UAE | NOCKO',
    description: 'Comprehensive IT solutions for businesses across UAE.',
    type: 'website',
  },
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function ServicesPage() {
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
        description: `Professional ${service.attributes.title} services in UAE.`,
        href: `/services/${service.attributes.slug}`,
        serviceType: service.attributes.title,
        color: 'blue' as const,
      }))
    : undefined;

  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service"
          title="IT Services in UAE: Network, Cloud, Security & Support"
          subtitle="Comprehensive IT solutions for businesses across UAE. We design, build, and maintain secure, scalable technology infrastructure that drives business growth."
        />
        <Services services={services} />
      </main>
      <Footer />
    </>
  );
}

