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
  /** Язык служебных заголовков секций; по умолчанию английский */
  locale?: 'en' | 'ru';
}

const SECTION_LABELS = {
  en: { benefits: 'Reasons to Choose Us', resources: 'Check Out These Resources to Learn More', related: 'Related Services', relatedSub: 'Explore other IT infrastructure services we offer' },
  ru: { benefits: 'Почему выбирают нас', resources: 'Полезные материалы по теме', related: 'Смежные услуги', relatedSub: 'Другие ИТ-услуги NOCKO для вашей инфраструктуры' },
};

export default function ServicePageTemplate({
  content,
  breadcrumbs,
  articleBlocks,
  articleCards,
  geoSection,
  locale = 'en',
}: ServicePageTemplateProps) {
  const labels = SECTION_LABELS[locale];
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
        <ServiceBenefits title={labels.benefits} benefits={content.benefits} />
      )}

      {geoSection}

      {content.resources.length > 0 && (
        <ServiceResources title={labels.resources} resources={content.resources} />
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
        <RelatedServices title={labels.related} subtitle={labels.relatedSub} services={content.relatedServices} />
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
