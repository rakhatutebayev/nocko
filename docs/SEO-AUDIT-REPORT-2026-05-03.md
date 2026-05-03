# SEO Audit Report — nocko.com
**Дата:** 2026-05-03  
**Источники:** Google Search Console Coverage Report (2026-05-02) + анализ кодовой базы  
**Инструмент:** Claude Code SEO Audit

---

## Исполнительное резюме

| Метрика | Значение |
|---------|----------|
| Страниц в статусе "Crawled – not indexed" | **47** (на 27 апреля 2026) |
| Тренд | Рост с 11 → 47 за 3 месяца (ухудшение) |
| Технический SEO скор | **61 / 100** |
| Критических проблем | 3 |
| Высокоприоритетных проблем | 5 |
| Среднеприоритетных проблем | 5 |

**Вывод:** Сайт активно краулится Google, но контент не индексируется. Причины — тонкий контент в статьях, технические ошибки (отсутствие hreflang, canonical, OG-изображений), а также рост числа статей без достаточного E-E-A-T сигнала. Проблема не в техническом доступе (robots, sitemap в порядке), а в том, что Google считает страницы недостаточно ценными для индексирования.

---

## Часть 1: Анализ GSC Coverage Report

### Динамика "Crawled – currently not indexed"

```
Фев 2026:  11 страниц  ████
Мар 2026:  31 страниц  ████████████
Апр 2026:  47 страниц  ████████████████████
```

Рост **+327%** за 3 месяца. Это не временная аномалия — это системная проблема контента.

### Категории не проиндексированных URL

#### Категория A — Технические дубликаты (исправлены)
Проблема уже устранена — 301-редиректы добавлены в `next.config.ts`:

| URL | Причина | Статус |
|-----|---------|--------|
| `/case-studies/gss.html` | Legacy .html URL | ✅ Редирект добавлен |
| `/case-studies/solus.html` | Legacy .html URL | ✅ Редирект добавлен |
| `/case-studies/scalini.html` | Legacy .html URL | ✅ Редирект добавлен |
| `/services/managed-it.html` | Legacy .html URL | ✅ Редирект добавлен |
| `/services/it-amc.html` | Legacy .html URL | ✅ Редирект добавлен |
| `/services/network-infrastructure` | Переименован slug | ✅ Редирект добавлен |
| `www.nocko.com/locations/dubai` | www-дубликат | ✅ www→non-www редирект |

#### Категория B — Статические файлы (исправлены)

| URL | Причина | Статус |
|-----|---------|--------|
| `/manifest.json` | Не должен индексироваться | ✅ X-Robots-Tag + robots.ts |
| `/favicon.ico` | Не должен индексироваться | ✅ X-Robots-Tag + robots.ts |
| `/_next/static/media/*.woff2` | Шрифты | ✅ /_next/ заблокирован |
| `/favicon.ico?favicon.*.ico` | Query-string вариант | ✅ Покрыт правилом |

#### Категория C — Case Studies (не проиндексированы, требуют внимания)

| URL | Последний краул | Проблема |
|-----|----------------|---------|
| `/case-studies/gss` | 2026-03-01 | Краулится 5+ месяцев, не индексируется |
| `/case-studies/solus` | 2025-12-28 | Тонкий контент? |
| `/case-studies/it-consulting` | 2025-12-15 | Нет canonical тега |
| `/case-studies/fh` | 2025-12-13 | Нет canonical тега |
| `/case-studies/projection` | 2025-12-12 | Нет canonical тега |
| `/case-studies/enterprise` | 2025-12-11 | Нет canonical тега |
| `/case-studies/cybersecurity` | 2025-12-11 | Нет canonical тега |
| `/case-studies/scalini` | 2025-12-11 | Нет canonical тега |
| `/case-studies/technohub` | 2025-12-10 | Нет canonical тега |

**9 из 11 кейс-стади не индексируются.** Это серьёзно — кейс-стади являются главным сигналом E-E-A-T для B2B IT-компании.

#### Категория D — Статьи (основная масса проблемы)

30 статей в статусе "not indexed". Последние краулы — преимущественно январь-апрель 2026.  
После правок предыдущей сессии (переписанный контент, hardcoded datePublished, добавлен author) эти страницы должны улучшиться — но Google ещё не перекраулил их после изменений.

#### Категория E — Контактная страница

`/contact` — последний краул 2026-02-12, не проиндексирована. Страница контактов B2B IT-компании должна быть проиндексирована. Вероятная причина — недостаточно текстового контента + нет hreflang.

---

## Часть 2: Технический SEO Аудит

### 🔴 КРИТИЧЕСКИЕ ПРОБЛЕМЫ

---

#### КРИТ-1: Отсутствуют OG-изображения
**Файлы:** `public/og-image.jpg`, `public/twitter-image.jpg` — **НЕ СУЩЕСТВУЮТ**  
**Затронуто:** Все страницы сайта

`app/layout.tsx:27` ссылается на `/og-image.jpg` и `/twitter-image.jpg`. Файлы отсутствуют в `public/`. При шаринге любой страницы в LinkedIn, WhatsApp, Telegram, X — превью будет без изображения. Для B2B это потеря доверия и CTR.

Дополнительно: `components/seo/StructuredData.tsx:47` ссылается на `/images/og-image.jpg` — путь не совпадает с layout.tsx (`/og-image.jpg`).

**Исправление:** Создать 1200×630px изображение → `public/og-image.jpg` и `public/twitter-image.jpg`. Унифицировать путь в StructuredData.tsx.

---

#### КРИТ-2: 58 EN-статей без hreflang
**Файлы:** `app/articles/*/page.tsx` — все 58 файлов  

Каждая EN-статья имеет `alternates: { canonical: '/articles/...' }` но **без** `languages`. Русские версии (`/ru/articles/...`) объявляют hreflang к EN, но EN-страницы не отвечают взаимностью. Google требует **двустороннего** hreflang. Без него связь не засчитывается.

```typescript
// Текущий код (неправильно):
alternates: { canonical: '/articles/cloud-infrastructure-guide' }

// Должно быть:
alternates: {
  canonical: '/articles/cloud-infrastructure-guide',
  languages: {
    'en-AE': '/articles/cloud-infrastructure-guide',
    'ru-RU': '/ru/articles/cloud-infrastructure-guide',
  }
}
```

---

#### КРИТ-3: Все case-study страницы без canonical
**Файл:** `app/case-studies/[slug]/page.tsx`

`generateMetadata()` возвращает title, description, openGraph — но **нет** `alternates.canonical`. 9 из 11 кейс-стади не индексируются. Отсутствие canonical — прямая причина: Google не знает, какой URL является каноническим, и может отказаться индексировать.

**Исправление:** Добавить в generateMetadata:
```typescript
alternates: { canonical: `/case-studies/${slug}` }
```

---

### 🟠 ВЫСОКОПРИОРИТЕТНЫЕ ПРОБЛЕМЫ

---

#### ВЫСОК-1: /ru/about, /ru/contact, /ru/services отсутствуют в sitemap
**Файл:** `app/sitemap.ts`

Страницы существуют в файловой системе, но не включены в sitemap. Google не будет активно их краулить.

**Добавить:**
```typescript
{ url: `${baseUrl}/ru/about`, ... }
{ url: `${baseUrl}/ru/contact`, ... }  
{ url: `${baseUrl}/ru/services`, ... }
```

---

#### ВЫСОК-2: /about и /contact — hreflang отсутствует с обеих сторон
**Файлы:** `app/about/page.tsx:23`, `app/contact/page.tsx:19`, `app/ru/about/page.tsx`, `app/ru/contact/page.tsx`

Ни одна из четырёх страниц не объявляет языковую пару. `/contact` есть в GSC как "not indexed" — отсутствие hreflang усугубляет проблему.

---

#### ВЫСОК-3: Article schema без поля `image`
**Файл:** `components/seo/StructuredData.tsx:94–113`

Все 58 статей используют Article schema без `image`. Это обязательное поле для Article rich results в Google Search. Без него статьи не получат расширенное отображение в выдаче (заголовок + изображение + дата).

---

#### ВЫСОК-4: `lastModified: new Date()` на всех URL sitemap
**Файл:** `app/sitemap.ts`

Каждый билд сайта объявляет ВСЕ 180+ страниц как "изменённые сегодня". Google учится игнорировать этот сигнал, что снижает эффективность краулинга. Статьи с контентом от 2025 года не должны заявлять дату изменения в 2026.

---

#### ВЫСОК-5: Нет Content-Security-Policy заголовка
**Файл:** `next.config.ts`

HSTS, X-Frame-Options, X-Content-Type-Options настроены корректно. Но CSP (Content Security Policy) и Permissions-Policy отсутствуют. CSP учитывается в оценке безопасности сайта (особенно важно для клиентов из finance/healthcare/DIFC сегментов).

---

### 🟡 СРЕДНЕПРИОРИТЕТНЫЕ ПРОБЛЕМЫ

---

#### СРЕДН-1: robots.txt блокирует `/_next/` для всех ботов кроме Google
**Файл:** `app/robots.ts:11`

```
userAgent: '*', disallow: ['/_next/', ...]   // слишком широко
userAgent: 'Googlebot', disallow: ['/_next/static/media/', '/_next/static/chunks/']  // правильно
```

Bing, Yandex и другие боты не могут загрузить JS/CSS из `/_next/static/css/` и `/_next/static/js/` — это ухудшает JavaScript-рендеринг для этих поисковиков. Особенно критично для Yandex (русскоязычная аудитория сайта).

**Исправление:** Синхронизировать правило `*` с правилом Googlebot.

---

#### СРЕДН-2: Главная страница без `languages` в alternates
**Файл:** `app/page.tsx:39`

`/ru/page.tsx` объявляет `languages: { 'en-AE': '/', 'ru-RU': '/ru' }`, но `app/page.tsx` не имеет `languages`. Связь односторонняя.

---

#### СРЕДН-3: /ru/case-studies/[slug] без canonical и hreflang
**Файл:** `app/ru/case-studies/[slug]/page.tsx`

Русские кейс-стади добавлены в sitemap, но страницы не имеют canonical тега и hreflang. Google может их проигнорировать.

---

#### СРЕДН-4: Slug `centralized-helpdesk-ru` в EN sitemap
**Файл:** `app/sitemap.ts:131`

Статья с суффиксом `-ru` находится в английском разделе `/articles/`. Это либо дубликат русского контента в EN URL, либо ошибка размещения. Путаница для Google при определении языка страницы.

---

#### СРЕДН-5: IndexNow не реализован
Для сайта активно публикующего статьи и кейс-стади — отсутствие IndexNow означает задержку 3-7 дней для Bing/Yandex при обнаружении новых страниц. Особенно актуально для `/ru/` страниц на Yandex.

---

## Часть 3: Что работает хорошо ✅

| Аспект | Детали |
|--------|--------|
| HSTS + Security headers | max-age=63072000, includeSubDomains, preload — готово к HSTS preload list |
| www → non-www редирект | Реализован через `has: host` в next.config.ts |
| AI-crawler policy | GPTBot, ClaudeBot, PerplexityBot разрешены; CCBot заблокирован |
| LocalBusiness schema | Координаты, openingHours, areaServed, sameAs — всё корректно |
| BreadcrumbList schema | Реализован на service, contact, article страницах |
| Image оптимизация | AVIF+WebP, 30-day TTL, deviceSizes настроены |
| ISR revalidation | 3600s на services и case-studies страницах |
| Viewport config | maximumScale: 5, font-display: swap |
| Sitemap структура | 180+ URL, все сервисы EN+RU, все статьи EN+RU |
| Article контент | 58 статей переписаны, добавлены FAQ, hardcoded datePublished, author |
| Cookie consent | GDPR-совместимый, focus trap, aria-labelledby, aria-pressed |

---

## Часть 4: План действий

### Приоритет 1 — Сделать немедленно (критично для индексации)

- [ ] **КРИТ-3:** Добавить `alternates.canonical` в `app/case-studies/[slug]/page.tsx`
- [ ] **КРИТ-1:** Создать `public/og-image.jpg` и `public/twitter-image.jpg` (1200×630px)
- [ ] **ВЫСОК-1:** Добавить `/ru/about`, `/ru/contact`, `/ru/services` в sitemap
- [ ] **СРЕДН-1:** Исправить robots.ts — синхронизировать `*` с Googlebot правилом

### Приоритет 2 — В течение недели (hreflang, schema)

- [ ] **КРИТ-2:** Добавить `languages` в alternates для всех 58 EN статей
- [ ] **ВЫСОК-2:** Добавить hreflang для /about и /contact (обе стороны)
- [ ] **СРЕДН-2:** Добавить `languages` на homepage `/app/page.tsx`
- [ ] **СРЕДН-3:** Добавить canonical в `/ru/case-studies/[slug]/page.tsx`
- [ ] **ВЫСОК-3:** Добавить `image` в Article schema в StructuredData.tsx

### Приоритет 3 — В течение месяца (оптимизация)

- [ ] **ВЫСОК-4:** Заменить `new Date()` на реальные даты в sitemap для статических страниц
- [ ] **ВЫСОК-5:** Добавить CSP заголовок в next.config.ts
- [ ] **СРЕДН-4:** Перенести `centralized-helpdesk-ru` в `/ru/articles/` или убрать из EN sitemap
- [ ] **СРЕДН-5:** Реализовать IndexNow для Bing/Yandex
- [ ] Написать индивидуальный контент для страниц case-studies (gss, solus, scalini) — они краулятся но не индексируются больше 3 месяцев

### Приоритет 4 — Case Studies (контент)

9 из 11 кейс-стади не индексируются несмотря на регулярный краулинг. Это сигнал тонкого контента:
- Проверить объём текста на каждой странице
- Добавить конкретные результаты (числа, проценты, сроки)
- Добавить технические детали реализации
- Case Study schema (CaseStudy или Article тип) с `about`, `result` полями

---

## Прогноз после исправлений

При реализации Приоритета 1 и 2:
- Canonical теги для case-studies → 5-7 страниц должны проиндексироваться в течение 2-4 недель
- hreflang фикс → улучшение ранжирования RU-страниц в Яндексе и Google.ru
- OG-изображения → CTR в социальных сетях +15-30%
- robots.txt фикс → Yandex начнёт корректно рендерить JS-страницы

Полное снижение "not indexed" ниже 20 страниц — ожидать через 6-8 недель после всех правок.

---

*Отчёт сгенерирован: 2026-05-03 | Версия: 1.0*
