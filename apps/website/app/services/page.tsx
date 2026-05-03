import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { getServices } from '@/lib/api/strapi';
import StructuredData from '@/components/seo/StructuredData';

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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'IT Services UAE — NOCKO' }],
  },
  alternates: { canonical: '/services' },
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

  const serviceList = [
    { name: 'IT Support Dubai', url: 'https://nocko.com/services/it-support', description: '24/7 IT support and helpdesk services for businesses in Dubai and UAE.' },
    { name: 'Cloud Solutions UAE', url: 'https://nocko.com/services/cloud', description: 'Cloud migration, management, and optimization for businesses in UAE.' },
    { name: 'Cybersecurity UAE', url: 'https://nocko.com/services/cybersecurity', description: 'Enterprise cybersecurity, threat detection, and compliance for UAE businesses.' },
    { name: 'Managed IT Services Dubai', url: 'https://nocko.com/services/managed-it', description: 'Fully managed IT infrastructure and support for businesses in Dubai.' },
    { name: 'IT Consulting UAE', url: 'https://nocko.com/services/it-consulting', description: 'Strategic IT consulting and digital transformation for UAE enterprises.' },
    { name: 'IT AMC Dubai', url: 'https://nocko.com/services/it-amc', description: 'Annual maintenance contracts for IT infrastructure in Dubai and UAE.' },
    { name: 'Structured Cabling Dubai', url: 'https://nocko.com/services/structured-cabling', description: 'Professional structured cabling and network infrastructure installation in UAE.' },
  ];

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nocko.com' },
            { '@type': 'ListItem', position: 2, name: 'IT Services in UAE', item: 'https://nocko.com/services' },
          ],
        }}
      />
      <StructuredData
        type="ItemList"
        data={{
          numberOfItems: serviceList.length,
          itemListElement: serviceList.map((svc, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: svc.name,
            url: svc.url,
          })),
        }}
      />
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

