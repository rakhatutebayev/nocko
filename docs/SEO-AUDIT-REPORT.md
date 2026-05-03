# NOCKO.com — Полный SEO Аудит
**Дата:** 2 мая 2026  
**Сайт:** https://nocko.com  
**Бизнес:** NOCKO Information Technology — IT-услуги в Дубае, ОАЭ  
**Платформа:** Next.js 15 / Vercel  
**Страниц в sitemap:** 162 | **Страниц в коде:** 159 route-файлов

---

## 🏆 SEO Health Score: 54 / 100

| Категория | Вес | Оценка | Взвешенная |
|-----------|-----|--------|------------|
| Технический SEO | 22% | 68/100 | 14.96 |
| Контент / E-E-A-T | 23% | 52/100 | 11.96 |
| On-Page SEO | 20% | 52/100 | 10.40 |
| Schema / Structured Data | 10% | 40/100 | 4.00 |
| Производительность (CWV) | 10% | 62/100 | 6.20 |
| AI Search Readiness (GEO) | 10% | 52/100 | 5.20 |
| Local SEO | 5% | 54/100 | 2.70 |

---

## EXECUTIVE SUMMARY

**Сильные стороны:** Технический фундамент (Next.js, ISR, Vercel, HTTPS, security headers, image optimization) находится в хорошем состоянии. 162 страницы в sitemap, включая RU-локализацию, 24 статьи по сервисам, кейс-стади с реальными клиентами и специфическими метриками. Robots.txt правильно настроен.

**Критические проблемы:**
1. **Organization/LocalBusiness schema отсутствует на главной** — самая важная страница не сигнализирует Google о бизнесе
2. **Placeholder телефон `+971-XX-XXX-XXXX`** в коде `StructuredData.tsx` — может попасть в Google Search Console как ошибка
3. **llms.txt отсутствует** — потеря AI-трафика (ChatGPT, Perplexity, Claude)
4. **Нет Google Maps embed и GBP сигналов** — критично для local SEO в ОАЭ
5. **Противоречие в статистике** — "50+ Clients" vs "500+ Places" vs "10+ years" vs "12+ years"
6. **SearchAction в WebSite schema ведёт на несуществующий `/search`**
7. **AI crawlers не перечислены явно в robots.ts** — нет opt-out от training crawlers

---

## 🔴 CRITICAL — Исправить немедленно

### 1. Placeholder телефон в StructuredData.tsx
**Файл:** [components/seo/StructuredData.tsx](apps/website/components/seo/StructuredData.tsx)

Строки с `'+971-XX-XXX-XXXX'` должны быть заменены на `'+971542448888'`. Любая страница, рендерящая `type="Organization"` без явного `telephone` prop, будет эмитить сломанный номер в Google.

### 2. Удалить SearchAction на несуществующий /search
**Файл:** [app/page.tsx](apps/website/app/page.tsx)

`potentialAction` в WebSite JSON-LD указывает на `https://nocko.com/search?q=...` — этого роута не существует. Удалить или реализовать страницу поиска.

### 3. Добавить LocalBusiness/Organization schema на главную
**Файл:** [app/page.tsx](apps/website/app/page.tsx)

Главная страница рендерит только `WebSite` schema. Необходимо добавить `<StructuredData type="LocalBusiness">` с реальным адресом, телефоном, `sameAs`, `areaServed`, `geo` координатами.

### 4. Исправить Object.assign deadcode в StructuredData.tsx
**Файл:** [components/seo/StructuredData.tsx](apps/website/components/seo/StructuredData.tsx)

`Object.assign(baseSchema, data)` на строке 14 перезаписывается в каждом `case` новым объектом-литералом. Любые дополнительные props в `data` (например, `sameAs`) молча игнорируются.

---

## 🔴 HIGH — Исправить в течение 1 недели

### 5. Создать /public/llms.txt
AI поисковики (ChatGPT, Perplexity, Claude) читают этот файл. Минимальный контент:

```
# NOCKO Information Technology
> IT services company in Dubai, UAE — IT support, network infrastructure, cloud, cybersecurity.

## Key Pages
- [Homepage](https://nocko.com)
- [Services](https://nocko.com/services)
- [About](https://nocko.com/about)
- [Contact](https://nocko.com/contact)

## Licensing
Content may be cited for informational purposes. Training use requires written consent.
```

### 6. Обновить robots.ts — явно перечислить AI crawlers
**Файл:** [app/robots.ts](apps/website/app/robots.ts)

```typescript
{ userAgent: 'GPTBot', allow: '/' },
{ userAgent: 'OAI-SearchBot', allow: '/' },
{ userAgent: 'ClaudeBot', allow: '/' },
{ userAgent: 'PerplexityBot', allow: '/' },
{ userAgent: 'Google-Extended', allow: '/' },
{ userAgent: 'CCBot', disallow: '/' },         // opt-out from training
{ userAgent: 'anthropic-ai', disallow: '/' },  // opt-out from training
{ userAgent: 'cohere-ai', disallow: '/' },     // opt-out from training
```

### 7. Удалить 4 мёртвых Google Fonts <link> тега
**Файл:** [app/layout.tsx](apps/website/app/layout.tsx), строки 93-96

`next/font` самостоятельно хостит шрифт. `preconnect` к `fonts.googleapis.com` — мёртвые подключения, замедляющие LCP.

### 8. Переписать H1 главной страницы
Текущий: `"Leading IT Company in Dubai | IT Support & Solutions UAE"` — это строка title-тега, не H1.

Рекомендуемый: `"IT Support & Solutions for Dubai Businesses"` или `"Your IT Partner in Dubai — Available 24/7"`

### 9. Исправить противоречия в статистике
Одновременно существуют: "50+ Clients" (hero), "500+ Places Helped" (AboutStats), "12+ Years Expertise" (AboutStats), "10+ Years Expert Experience" (hero). Выбрать одну правдивую цифру и применить глобально через единый источник данных.

### 10. Переписать meta description главной (сейчас 213 символов, обрезается)
**Текущий:** "Looking for the best IT company in Dubai? NOCKO provides top-rated IT support..."
**Рекомендуемый (151 символ):** "NOCKO delivers 24/7 IT support, network setup, cloud & cybersecurity for Dubai businesses. UAE-wide coverage. Fast response. Get a free consultation."

### 11. Добавить BreadcrumbList schema на все внутренние страницы
Services, About, Contact, все `/services/[slug]`, `/articles/[slug]`, `/case-studies/[slug]` не имеют BreadcrumbList. Это быстрая структурная правка.

### 12. Добавить Google Maps embed на /contact
Отсутствие Google Maps iframe — главный сигнал для local SEO. GBP-сигнал не может связаться с сайтом без этой точки привязки.

---

## 🟡 MEDIUM — Исправить в течение 1 месяца

### 13. Исправить CTA primary button
**Текущий:** "Get IT Support in UAE" → JS modal (без fallback href)  
**Проблемы:** Текст обращён к существующим клиентам, не к потенциальным. Нет fallback для no-JS.  
**Исправить:** Изменить текст на "Request a Free Consultation", добавить `href="/contact"` как fallback.

### 14. Исправить secondary CTA — ссылать на /services, не #services
Кнопка "View All Services" → `#services` (anchor на той же странице) вместо `/services`. Это лишает страницу /services ссылочного веса с главной.

### 15. Убрать дубликат service card "IT Support & Helpdesk"
В `Services.tsx` два карточки ведут на `/services/it-support`. Заменить вторую на карточку **IT AMC** — высокочастотный UAE-запрос, полностью отсутствующий на главной.

### 16. Исправить og:image inheritance на Services/About/Contact
Next.js 14+ не мержит `images` из layout в page-level `openGraph` объект если page определяет свой `openGraph` без `images`. Добавить явный `images` в каждый page-level openGraph.

### 17. Добавить Service JSON-LD на каждый /services/[slug]
Каждая страница сервиса должна иметь `Service` schema с `serviceType`, `areaServed`, `provider` ссылающийся на `#organization`.

### 18. Исправить даты в case studies
`datePublished` fallback — `new Date().toISOString()` — каждый раз показывает сегодняшнюю дату. Задать реальные даты публикации в hardcoded данных.

### 19. Создать страницы /locations/abu-dhabi и /locations/sharjah
Сайт заявляет покрытие Abu Dhabi и Sharjah, но страниц нет. Это неподтверждённое заявление для краулера. Использовать /locations/dubai как шаблон.

### 20. Добавить видимый адрес и телефон на /contact
JSON-LD содержит адрес, но пользователь видит только форму. Добавить блок с адресом, телефоном, часами работы, WhatsApp ссылкой (стандарт UAE бизнеса).

### 21. Сократить нагрузку шрифтов — 5 весов Montserrat
В `app/layout.tsx` загружаются weights 300, 400, 500, 600, 700. Оставить только реально используемые выше fold (скорее всего 400, 600, 700). Прямое влияние на LCP для text-based hero.

### 22. Ленивая загрузка reCAPTCHA
**Файл:** [components/contact/RecaptchaScript.tsx](apps/website/components/contact/RecaptchaScript.tsx)  
Загружать reCAPTCHA (~100KB) только при открытии формы, не на каждой странице. Влияет на INP.

### 23. Исправить AggregateRating microdata misuse в Hero
Hero stats (`10+ Years`, `50+ Clients`, etc.) обёрнуты в `itemType="schema.org/AggregateRating"` — это неверное использование, которое может вызвать Manual Action при проверке.

### 24. Добавить FAQ секцию на главную страницу
FAQPage schema существует только на /about. Перенести/дублировать часть FAQ на главную (самую авторитетную страницу для AI citation).

---

## 🟢 LOW — Backlog

### 25. Добавить команду или founder на /about
"Meet Our Team" link ведёт на /about, но там нет ни одного имени. Добавить хотя бы founder/lead с именем, ролью, 1-2 предложениями опыта.

### 26. Создать Privacy Policy и Terms of Service
Отсутствуют полностью. Обязательны для Trustworthiness по Google QRG 2025.

### 27. Добавить sameAs социальные профили
`sameAs: []` везде пустой. Минимум: LinkedIn company page, Google Business Profile URL.

### 28. Переделать Clients как Server Component
`Clients.tsx` помечен `'use client'` ради одной кнопки. Вынести CTA в отдельный client component, сделать Clients server component для улучшения JS bundle.

### 29. Добавить preload для icons-sprite.svg
`/images/icons-sprite.svg` используется в Features section (above the fold) без preload hint.

### 30. Исправить название в LocalBusiness schema
На /locations/dubai: `"name": "NOCKO Information Technology - IT Company in Dubai"` — добавление ключевых слов в name противоречит GBP политике. Использовать только юридическое название.

### 31. Уточнить geo-координаты
Текущие: `25.2048, 55.2708` — центр Дубая, 4 знака после запятой. Установить точные координаты офиса R20-42, Wavez Residence, 5 знаков после запятой.

### 32. Добавить og:url явно на каждой странице
`og:url` нигде не задан явно. Next.js должен резолвить через metadataBase, но лучше задать явно.

---

## 📊 ТЕХНИЧЕСКИЙ SEO — Детали

### Sitemap
- **162 URL** в одном sitemap.xml (без index sitemap)
- Все `lastmod` — одинаковые (`2026-05-02T17:01:48.532Z`) — значит нет реальных дат изменений
- **Отсутствуют hreflang аннотации** в sitemap — EN и RU страницы есть, но нет `xhtml:link` alternate
- RU страницы (`/ru`, `/ru/services/*`) присутствуют в sitemap — это хорошо
- Отсутствуют в sitemap: `/articles/*` (24+ статьи!), `/case-studies/*`, `/locations/dubai`

### robots.txt (live)
```
User-Agent: *
Allow: /
Disallow: /api/, /admin/, /_next/

User-Agent: Googlebot
Allow: /
Disemap: https://nocko.com/sitemap.xml
```
- Корректно, но нет явных правил для AI crawlers

### Security Headers (live, Vercel)
- ✅ HSTS: `max-age=63072000; includeSubDomains; preload`
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Access-Control-Allow-Origin: *
- ⚠️ Отсутствует Content-Security-Policy

### Производительность
- ✅ AVIF/WebP форматы включены
- ✅ 30-day cache TTL для статических assets
- ✅ `compress: true` в next.config.ts
- ✅ `standalone` output для Docker
- ❌ 4 мёртвых Google Fonts preconnect тега (LCP)
- ❌ 5 font weights вместо необходимых 2-3
- ❌ reCAPTCHA загружается на всех страницах

---

## 📝 КОНТЕНТ — Детали

| Страница | Слов (прим.) | Минимум | Статус |
|----------|-------------|---------|--------|
| Главная | ~370 | 500 | ❌ |
| /services | ~180 | 800 | ❌ |
| /about | ~570 | 500 | ⚠️ |
| /contact | ~40 | N/A | ⚠️ |
| /case-studies/[slug] | ~450 | 1500 | ❌ |

**Положительно:** 24 статьи по сервисам — сильная структура контент-хаба. Кейс-стади с реальными клиентами (Scalini, Solus Insurance) и конкретными метриками (AED 280,000 savings, 99.95% uptime) — лучший E-E-A-T контент на сайте.

---

## 🤖 AI / GEO READINESS

| Платформа | Оценка | Главный барьер |
|-----------|--------|----------------|
| Google AI Overviews | 38/100 | Нет LocalBusiness schema на главной; нет FAQ на главной |
| ChatGPT Browse | 50/100 | Нет llms.txt; passages слишком короткие |
| Perplexity | 55/100 | Нет question-format заголовков; несорсированная статистика |
| Bing Copilot | 58/100 | Organization schema отсутствует на главной |

---

## 🗺️ LOCAL SEO — Детали

**Критически важно:** Google Business Profile — главный фактор Local Pack. Без подтверждённого GBP с правильной категорией ("Computer Support and Services") весь остальной local SEO теряет ~55% эффективности.

- ❌ Нет Google Maps embed ни на одной странице
- ❌ Нет ссылок на GBP или LinkedIn в footer
- ❌ Нет страниц для Abu Dhabi и Sharjah (заявляются в тексте)
- ✅ /locations/dubai существует с уникальным контентом и LocalBusiness schema
- ✅ Адрес и телефон в footer и ContactPage JSON-LD согласованы

---

## ПЛАН ДЕЙСТВИЙ — ПРИОРИТИЗАЦИЯ

### Неделя 1 (Critical)
- [ ] Исправить placeholder телефон в StructuredData.tsx
- [ ] Удалить SearchAction → несуществующий /search
- [ ] Добавить LocalBusiness JSON-LD на главную
- [ ] Создать /public/llms.txt
- [ ] Обновить robots.ts с AI crawler правилами
- [ ] Удалить 4 мёртвых Google Fonts link тега

### Неделя 2-3 (High)
- [ ] Переписать H1 и hero subtitle главной
- [ ] Унифицировать статистику (одна цифра везде)
- [ ] Исправить meta description (~151 символ)
- [ ] Добавить BreadcrumbList на все inner pages
- [ ] Добавить Google Maps embed на /contact
- [ ] Исправить og:image inheritance (Services/About/Contact)

### Месяц 2 (Medium)
- [ ] Добавить Service JSON-LD на /services/[slug]
- [ ] Переписать CTA ("Request a Free Consultation" + href fallback)
- [ ] Исправить secondary CTA → /services вместо #services
- [ ] Создать /locations/abu-dhabi и /locations/sharjah
- [ ] Добавить видимый адрес/телефон на /contact
- [ ] Добавить FAQ секцию на главную
- [ ] Исправить даты в case studies
- [ ] Ленивая загрузка reCAPTCHA

### Месяц 3 (Low)
- [ ] Добавить команду/founder на /about
- [ ] Privacy Policy и Terms of Service
- [ ] Заполнить sameAs (LinkedIn, GBP)
- [ ] Добавить /articles/* и /case-studies/* в sitemap
- [ ] Hreflang аннотации в sitemap (EN/RU)
- [ ] Добавить кейс-стади preview на главную

---

*Аудит выполнен: 2 мая 2026 | 8 специализированных субагентов*
