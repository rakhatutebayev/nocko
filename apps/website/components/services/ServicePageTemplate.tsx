import Hero from '@/components/sections/Hero';
import ServiceContentEnhanced from '@/components/services/ServiceContentEnhanced';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceResources from '@/components/services/ServiceResources';
import ServiceCTA from '@/components/services/ServiceCTA';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceArticleBlocks from '@/components/services/ServiceArticleBlocks';
import ServiceArticleCards from '@/components/services/ServiceArticleCards';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import type { MappedServiceContent } from '@/lib/services/mapServiceData';
import type { ReactNode } from 'react';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface ServicePageTemplateProps {
  content: MappedServiceContent;
  breadcrumbs: BreadcrumbItem[];
  articleBlocks?: any[];
  articleCards?: any[];
  geoSection?: ReactNode;
}

export default function ServicePageTemplate({
  content,
  breadcrumbs,
  articleBlocks,
  articleCards,
  geoSection,
}: ServicePageTemplateProps) {
  return (
    <main className="main" role="main">
      <Breadcrumbs hidden={true} items={breadcrumbs} />

      <Hero
        variant="service-enhanced"
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
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

      {geoSection}

      {content.resources.length > 0 && (
        <ServiceResources resources={content.resources} />
      )}

      {content.faq && content.faq.length > 0 && (
        <ServiceFAQ
          title={content.faqTitle}
          items={content.faq}
        />
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

      {articleBlocks && articleBlocks.length > 0 && (
        <ServiceArticleBlocks blocks={articleBlocks} />
      )}

      {articleCards && articleCards.length > 0 && (
        <ServiceArticleCards cards={articleCards} />
      )}
    </main>
  );
}
