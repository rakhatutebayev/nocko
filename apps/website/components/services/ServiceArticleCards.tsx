'use client';

import Image from 'next/image';
import Link from 'next/link';

// Article type based on Strapi structure
type Article = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
  };
};

interface ServiceArticleCard {
  id: number;
  cardArticle?: {
    data: Article | null;
  };
  cardColor: 'Синий (#3474ff)' | 'Голубой (#00aeff)' | 'Фиолетовый (#583bec)' | 'Зеленый (#11c979)' | 'Желтый (#ffcc2a)' | 'Красный (#ec5050)';
  cardIcon?: {
    data?: {
      attributes?: {
        url?: string;
        alternativeText?: string;
      };
    };
  };
}

// Map color labels to hex codes
const COLOR_MAP: Record<string, string> = {
  'Синий (#3474ff)': '#3474ff',
  'Голубой (#00aeff)': '#00aeff',
  'Фиолетовый (#583bec)': '#583bec',
  'Зеленый (#11c979)': '#11c979',
  'Желтый (#ffcc2a)': '#ffcc2a',
  'Красный (#ec5050)': '#ec5050',
};

interface ServiceArticleCardsProps {
  title?: string;
  cards: ServiceArticleCard[];
}

export default function ServiceArticleCards({
  title = 'Featured Articles',
  cards,
}: ServiceArticleCardsProps) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  return (
    <section className="service-article-cards section">
      <div className="container">
        {title && <h2 className="service-article-cards__title">{title}</h2>}
        <div className="service-article-cards__grid">
          {cards.map((card, index) => {
            const article = card.cardArticle?.data;
            const iconUrl = card.cardIcon?.data?.attributes?.url
              ? `${strapiUrl}${card.cardIcon.data.attributes.url}`
              : null;
            const colorHex = COLOR_MAP[card.cardColor] || card.cardColor;

            if (!article) return null;

            return (
              <article
                key={card.id || index}
                className="service-article-cards__card"
                style={{ borderColor: colorHex }}
              >
                {iconUrl && (
                  <div className="service-article-cards__icon">
                    <Image
                      src={iconUrl}
                      alt={card.cardIcon?.data?.attributes?.alternativeText || 'Icon'}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                )}
                <h3 className="service-article-cards__card-title">{article.attributes.title}</h3>
                {article.attributes.excerpt && (
                  <p className="service-article-cards__card-excerpt">
                    {article.attributes.excerpt}
                  </p>
                )}
                <Link
                  href={`/articles/${article.attributes.slug}`}
                  className="service-article-cards__card-link"
                  style={{ color: colorHex }}
                >
                  Read more
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

