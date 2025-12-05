'use client';

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

interface ServiceArticleBlock {
  id: number;
  blockArticle?: {
    data: Article | null;
  };
  blockBorderColor: 'Синий (#3474ff)' | 'Голубой (#00aeff)' | 'Фиолетовый (#583bec)' | 'Зеленый (#11c979)' | 'Желтый (#ffcc2a)' | 'Красный (#ec5050)';
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

interface ServiceArticleBlocksProps {
  title?: string;
  blocks: ServiceArticleBlock[];
}

export default function ServiceArticleBlocks({
  title = 'Resources',
  blocks,
}: ServiceArticleBlocksProps) {
  return (
    <section className="service-article-blocks section">
      <div className="container">
        {title && <h2 className="service-article-blocks__title">{title}</h2>}
        <div className="service-article-blocks__grid">
          {blocks.map((block, index) => {
            const article = block.blockArticle?.data;

            if (!article) return null;

            const colorHex = COLOR_MAP[block.blockBorderColor] || block.blockBorderColor;

            return (
              <article
                key={block.id || index}
                className="service-article-blocks__block"
                style={{ borderColor: colorHex }}
              >
                <h3 className="service-article-blocks__block-title">
                  {article.attributes.title}
                </h3>
                {article.attributes.excerpt && (
                  <p className="service-article-blocks__block-excerpt">
                    {article.attributes.excerpt}
                  </p>
                )}
                <Link
                  href={`/articles/${article.attributes.slug}`}
                  className="service-article-blocks__block-link"
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

