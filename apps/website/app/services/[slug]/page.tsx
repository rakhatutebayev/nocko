import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceResources from '@/components/services/ServiceResources';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceArticleBlocks from '@/components/services/ServiceArticleBlocks';
import ServiceArticleCards from '@/components/services/ServiceArticleCards';
import { getService, getServices } from '@/lib/api/strapi';

export const revalidate = 3600; // ISR: revalidate every hour

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const services = await getServices();
    return services.map((service) => ({
      slug: service.attributes.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.attributes.title} | IT Services in UAE | NOCKO`,
    description: `Professional ${service.attributes.title} services in UAE.`,
    keywords: `${service.attributes.title}, IT services UAE, Dubai, Abu Dhabi`,
    openGraph: {
      title: `${service.attributes.title} | NOCKO`,
      description: `Professional ${service.attributes.title} services in UAE.`,
      type: 'website',
    },
  };
}

// Static content for structured-cabling (can be moved to Strapi later)
const structuredCablingContent = {
  firstSection: [
    {
      title: 'Start Deploying in Minutes Across All Emirates',
      text: 'Prebuilt cabling solutions and certified technicians allow you to deploy network infrastructure across Dubai, Abu Dhabi, Sharjah, and all Emirates, without any of the complexity or deployment risks. Our team handles site surveys, route planning, and compliance requirements, so you can focus on your business operations.',
      link: '/articles/deployment',
      linkText: 'Learn more',
      image: '/images/services/cabling-deploy.png',
      imageAlt: 'Network infrastructure deployment across UAE Emirates',
    },
    {
      title: 'Accelerate Network Performance Through Expert Installation',
      text: 'Get optimal network performance via our certified technicians and industry-standard installation practices. Use our channel management solutions to ensure proper cable routing, labeling, and documentation. Reach peak performance through the infrastructure your business needs.',
      link: '/articles/performance',
      linkText: 'Learn more',
    },
    {
      title: 'Maintain Performance Across the Entire Network Lifecycle',
      text: "It's now easier to manage network infrastructure. Tools like proactive monitoring, preventive maintenance, performance optimization, and lifecycle management allow you to turn potential downtime into maximum uptime across the network lifecycle, from installation to optimization, upgrades, and expansion.",
      link: '/articles/lifecycle',
      linkText: 'Learn more',
    },
  ],
  features: [
    {
      icon: 'icon1',
      title: 'Offer the localized experience your businesses expect in UAE',
    },
    {
      icon: 'icon2',
      title: 'Integrate quickly with any network infrastructure type',
    },
    {
      icon: 'icon3',
      title: 'Manage the entire network lifecycle with 24/7 support',
    },
    {
      icon: 'icon4',
      title: 'Automate monitoring and maintenance processes',
    },
    {
      icon: 'icon5',
      title: 'Strong documentation for network management',
    },
  ],
  secondSection: [
    {
      title: 'Grow Network Performance with Advanced Solutions',
      text: 'Use our comprehensive network solutions to plan and execute infrastructure expansion strategies - upgrades, scalability, optimization - and manage networks from any location. Our tools help you scale from small office networks to enterprise-wide infrastructure across multiple locations in UAE.',
      link: '/articles/solutions',
      linkText: 'Learn more',
      image: '/images/services/cabling-performance.png',
      imageAlt: 'Advanced network solutions for business growth',
    },
    {
      title: 'Mix and Manage Multiple Network Types',
      text: 'Our flexible platform supports deployment of multiple cabling types, allowing you to simultaneously manage Cat6, Cat6A, and fiber optic infrastructure. You can make the transition to higher-speed networks without disruption and maximize your network performance.',
      link: '/articles/network-types',
      linkText: 'Learn more',
    },
    {
      title: 'Scale Your Network Across UAE Without Risk',
      text: 'Use our flexible deployment models - standard installation, rapid deployment, or hybrid solutions - to adapt to what\'s next and give your business the network infrastructure experience it expects. From single office to multi-location enterprise networks.',
      link: '/articles/scaling',
      linkText: 'Learn more',
    },
  ],
  benefits: [
    {
      icon: '/images/benefits/global.png',
      text: 'Dubai-based with <br> global coverage',
    },
    {
      icon: '/images/benefits/time.png',
      text: '24/7 availability with <br> fastest SLA',
    },
    {
      icon: '/images/benefits/team.png',
      text: 'Highly-qualified <br> IT professionals',
    },
    {
      icon: '/images/benefits/pricing.png',
      text: 'Affordable pricing <br> & cost efficiency',
    },
    {
      icon: '/images/benefits/communication.png',
      text: 'Clear and transparent <br> communication',
    },
  ],
  resources: [
    {
      type: 'CASE STUDY',
      title: 'How Scalini Transformed Network Infrastructure Across 5 Locations',
      description: 'Learn how Scalini restaurant chain upgraded their network infrastructure across 5 locations in Dubai, reducing downtime by 95% and improving customer experience.',
      image: '/images/services/cards/book.png',
      url: '/case-studies/scalini',
      ctaText: 'Read Case Study',
    },
    {
      type: 'GUIDE',
      title: 'Complete Guide to Structured Cabling in UAE',
      description: 'Essential guide covering Cat6 vs Cat6A, fiber optic options, compliance requirements, and best practices for network infrastructure in Dubai and UAE.',
      image: '/images/services/cards/guide.png',
      url: '/resources/structured-cabling-guide',
      ctaText: 'Download Guide',
    },
    {
      type: 'ARTICLE',
      title: 'Network Infrastructure Planning for Multi-Location Businesses',
      description: 'Learn how to plan and deploy network infrastructure across multiple locations in UAE, including Dubai, Abu Dhabi, and other Emirates.',
      image: '/images/services/cards/multi.png',
      url: '/blog/network-infrastructure-planning',
      ctaText: 'Read Article',
    },
  ],
  cta: {
    title: 'Ready to Upgrade Your Network Infrastructure?',
    text: "Contact us for a free consultation and let's discuss your structured cabling needs.",
    ctaText: 'Get Free Consultation',
    ctaUrl: '#contact',
  },
  relatedServices: [
    {
      title: 'Network & Infrastructure Setup',
      url: '/services/network-infrastructure',
      description: 'Complete network design and deployment solutions.',
    },
    {
      title: 'IT Support & Maintenance',
      url: '/services/it-support',
      description: '24/7 IT support and maintenance services.',
    },
    {
      title: 'Cybersecurity & Data Protection',
      url: '/services/cybersecurity',
      description: 'Enterprise cybersecurity solutions for your business.',
    },
  ],
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getService(slug);

  // For structured-cabling, use static content even if Strapi is unavailable
  const isStructuredCabling = slug === 'structured-cabling';
  
  // If service not found and it's not structured-cabling, show 404
  if (!service && !isStructuredCabling) {
    notFound();
  }

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  // Transform Strapi data or use static content
  const getContent = () => {
    // Use static content for structured-cabling
    if (isStructuredCabling) {
      return structuredCablingContent;
    }

    // If no service data, return empty content
    if (!service) {
      return {
        firstSection: [],
        features: [],
        secondSection: [],
        benefits: [],
        resources: [],
        cta: undefined,
        relatedServices: [],
      };
    }

    // Transform Strapi data
    return {
      firstSection:
        service.attributes.firstSection?.map((block: any) => ({
          title: block.title,
          text: block.text,
          link: block.link,
          linkText: block.linkText || 'Learn more',
          image: block.image?.data?.attributes?.url
            ? `${strapiUrl}${block.image.data.attributes.url}`
            : undefined,
          imageAlt: block.imageAlt || block.image?.data?.attributes?.alternativeText,
        })) || [],
      features:
        service.attributes.serviceFeatures?.map((feature: any) => ({
          icon: feature.icon,
          title: feature.title,
        })) || [],
      secondSection:
        service.attributes.secondSection?.map((block: any) => ({
          title: block.title,
          text: block.text,
          link: block.link,
          linkText: block.linkText || 'Learn more',
          image: block.image?.data?.attributes?.url
            ? `${strapiUrl}${block.image.data.attributes.url}`
            : undefined,
          imageAlt: block.imageAlt || block.image?.data?.attributes?.alternativeText,
        })) || [],
      benefits:
        service.attributes.benefits?.map((benefit: any) => ({
          icon: benefit.icon?.data?.attributes?.url
            ? `${strapiUrl}${benefit.icon.data.attributes.url}`
            : '',
          text: benefit.text,
        })) || [],
      resources:
        service.attributes.resources?.map((resource: any) => ({
          type: resource.type,
          title: resource.title,
          description: resource.description,
          image: resource.image?.data?.attributes?.url
            ? `${strapiUrl}${resource.image.data.attributes.url}`
            : undefined,
          url: resource.url,
          ctaText: resource.ctaText,
        })) || [],
      cta: service.attributes.cta
        ? {
            title: service.attributes.cta.title,
            text: service.attributes.cta.text,
            ctaText: service.attributes.cta.ctaText,
            ctaUrl: service.attributes.cta.ctaUrl,
          }
        : undefined,
      relatedServices:
        service.attributes.relatedServices?.map((related: any) => ({
          title: related.title,
          description: related.description,
          url: related.url,
        })) || [],
    };
  };

  const content = getContent();

  // Use service data or fallback for structured-cabling
  const serviceTitle = service?.attributes?.hero?.heroTitle || service?.attributes?.title || 'Structured Cabling Services';
  const serviceDescription = service?.attributes?.hero?.heroSubtitle || 'Professional Network Infrastructure Solutions for Businesses in UAE';

  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero
          variant="service-enhanced"
          title={serviceTitle}
          subtitle={serviceDescription}
        />

        {content.firstSection.length > 0 && (
          <ServiceContentEnhanced blocks={content.firstSection} />
        )}
        {content.features.length > 0 && (
          <ServiceFeatures features={content.features} />
        )}
        {content.secondSection.length > 0 && (
          <ServiceContentEnhanced modifier="second" blocks={content.secondSection} />
        )}
        {content.benefits.length > 0 && (
          <ServiceBenefits benefits={content.benefits} />
        )}
        {content.resources.length > 0 && (
          <ServiceResources resources={content.resources} />
        )}
        {content.cta && (
          <ServiceCTA
            title={content.cta.title}
            text={content.cta.text}
            ctaText={content.cta.ctaText}
            ctaUrl={content.cta.ctaUrl}
          />
        )}
        {content.relatedServices.length > 0 && (
          <RelatedServices services={content.relatedServices} />
        )}

        {/* Article Blocks (6 blocks) */}
        {service?.attributes.articleBlocks && service.attributes.articleBlocks.length > 0 && (
          <ServiceArticleBlocks blocks={service.attributes.articleBlocks} />
        )}

        {/* Article Cards (3 cards) */}
        {service?.attributes.articleCards && service.attributes.articleCards.length > 0 && (
          <ServiceArticleCards cards={service.attributes.articleCards} />
        )}

        {/* Fallback for services without specific content blocks */}
        {content.firstSection.length === 0 &&
          content.features.length === 0 &&
          content.secondSection.length === 0 && (
            <section className="section">
              <div className="container">
                <p>Content coming soon...</p>
              </div>
            </section>
          )}
      </main>
      <Footer />
    </>
  );
}

