interface ArticleBylineProps {
  published: string; // YYYY-MM-DD
  modified?: string; // YYYY-MM-DD
  locale?: 'en' | 'ru';
}

const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
};

const LABELS = {
  en: { author: 'NOCKO Information Technology', published: 'Published', updated: 'Updated' },
  ru: { author: 'NOCKO Information Technology', published: 'Опубликовано', updated: 'Обновлено' },
};

function fmt(iso: string, locale: 'en' | 'ru'): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[locale][m - 1]} ${y}`;
}

/** Видимая подпись статьи: автор-организация и даты, совпадающие с Article JSON-LD. */
export default function ArticleByline({ published, modified, locale = 'en' }: ArticleBylineProps) {
  const l = LABELS[locale];
  const showUpdated = modified && modified !== published;
  return (
    <div className="container">
      <p className="article__byline">
        <span className="article__byline-author">{l.author}</span>
        <span className="article__byline-sep" aria-hidden="true">·</span>
        <span>
          {l.published} <time dateTime={published}>{fmt(published, locale)}</time>
        </span>
        {showUpdated && (
          <>
            <span className="article__byline-sep" aria-hidden="true">·</span>
            <span>
              {l.updated} <time dateTime={modified}>{fmt(modified!, locale)}</time>
            </span>
          </>
        )}
      </p>
    </div>
  );
}
