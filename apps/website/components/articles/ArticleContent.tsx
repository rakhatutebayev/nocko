interface ArticleBlock {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  list?: string[];
}

interface ArticleContentProps {
  intro: string;
  blocks: ArticleBlock[];
}

export default function ArticleContent({ intro, blocks }: ArticleContentProps) {
  return (
    <article className="article section" itemScope itemType="https://schema.org/Article" itemProp="articleBody">
      <div className="container">
        {intro && (
          <div className="article__intro">
            <p className="article__intro-text">{intro}</p>
          </div>
        )}

        {blocks.map((block, index) => (
          <div key={index} className="article__block">
            {block.title && (
              <h2 className="article__block-title">{block.title}</h2>
            )}
            {block.text && (
              <div
                className="article__block-text"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            )}
            {block.list && block.list.length > 0 && (
              <ul className="article__list">
                {block.list.map((item, itemIndex) => {
                  // Remove <li> tags if present, as we're already rendering <li> elements
                  const cleanItem = item.replace(/^<li>|<\/li>$/g, '').trim();
                  return (
                    <li
                      key={itemIndex}
                      dangerouslySetInnerHTML={{ __html: cleanItem }}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

