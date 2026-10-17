# Полный SEO-аудит nocko.com — 2026-10-17

Метод: краулер по всем 158 URL sitemap (technical + on-page) и 8 параллельных проверок: Google Search Console API
(28 дней + URL Inspection 25 URL), контент/E-E-A-T (22 страницы), schema (21 страница), PageSpeed Insights (6 страниц × 2 устройства),
GEO/AI-readiness, Local SEO, SXO/SERP-анализ (10 запросов), ссылочный профиль (DataForSEO Backlinks API).
Отчёты по областям: `docs/seo/audit-2026-10-17/*.md`. Предыдущие аудиты: 2026-07-21 (72), 2026-09-30 (68).

## SEO Health Score: 73 / 100 (сентябрь: 68, июль: 72)

| Категория | Вес | Оценка | Взвешенно | Сентябрь |
|---|---|---|---|---|
| Technical SEO | 22% | 88 | 19.4 | 82 |
| Content Quality / E-E-A-T | 23% | 55 | 12.7 | 54 |
| On-Page | 20% | 72 | 14.4 | 61 |
| Schema / Structured Data | 10% | 66 | 6.6 | 58 |
| Performance (lab) | 10% | 96 | 9.6 | 94 |
| AI Search Readiness (GEO) | 10% | 64 | 6.4 | 66 |
| Images | 5% | 78 | 3.9 | 75 |
| **Итого** | | | **73.0** | 68.2 |

Вне взвешенной оценки, но важнее её:

| Метрика | Оценка |
|---|---|
| Авторитет (ссылочный профиль) | **4 / 100** |
| Local SEO | 38 / 100 |
| Фактический результат в Google (клики, позиции) | 18 / 100 |
| SXO (соответствие выдаче) | 61 / 100 |

## Главный вывод

Сайт технически в порядке и стал лучше с сентября: все 158 URL отдают 200, title и description в норме на 158/158,
canonical и hreflang на всех страницах, lastmod реальный, логотип и og-image отдают 200, одна сущность Organization с @id,
Lighthouse 94–100. Все правки сентябрьского плана, которые зависели от кода, выполнены.

Результата в поиске по-прежнему нет: **5 кликов за 28 дней**, показы упали с 3 199 (август) до 1 260, позиция 57. Это
ожидаемо, потому что три причины, которые держат сайт на 5–8 странице, лежат вне кода:

1. **Авторитета нет, а ссылочный профиль — спам.** DataForSEO видит 1 631 ссылающийся домен, но rank домена = 0, spam score 53.
   97% ссылок с зон .website/.store/.space/.site, все dofollow, анкоры «Premium Authority SEO Links to Improve nocko.com…».
   Часть ссылок появилась 17.10.2026 — волна идёт сейчас. Такой же профиль у itsupportdubai.com, это массовая рассылка по нише,
   не атака на nocko. Ни одной нормальной ссылки в выборке не найдено, ссылок из .ae нет вовсе.
   Конкуренты: vrstech.com rank 345 / 2 158 доменов / spam 14; bluechipgulf.ae rank 245 / 481 доменов; geeks.ae rank 180 / 213 доменов.
2. **Нет слоя доверия.** SERP-анализ показал, что формат страниц совпадает с выдачей (сервисные лендинги против сервисных
   лендингов), но у топ-результатов есть сертификаты, отзывы с именами, логотипы клиентов и цена «от». У nocko ни одного именного
   автора, ни одного подписанного отзыва, нет лицензии, TRN, года основания, партнёрских номеров. Цены на одну услугу расходятся
   между страницами в 5 местах (см. Content).
3. **Локальные сигналы почти нулевые.** GBP не подтверждён, отзывов нет, адрес — жилой комплекс (Wavez Residence, Wadi Al Safa 2),
   что осложняет верификацию в Google Maps. Из каталогов подтверждён только LinkedIn.

Лучшая краткосрочная возможность: RU-запросы «ит аутсорсинг дубай» и «русскоговорящая ит компания дубай» — в выдаче почти нет
коммерческих страниц, у nocko две сильные RU-страницы, но слово «аутсорсинг» стоит только в meta, не в title/H1.

## Данные Google Search Console (17 сен – 14 окт vs 20 авг – 16 сен)

| Метрика | Сейчас | Было | 30.09 |
|---|---|---|---|
| Клики | 5 | 2 | 4 |
| Показы | 1 260 | 2 446 (−48%) | 1 676 |
| CTR | 0.40% | 0.08% | 0.24% |
| Средняя позиция | 57.2 | 57.8 | 59.4 |

- Тренд показов по месяцам: дек 102 → мар 587 → май 1 182 → июл 2 654 → **авг 3 199 (пик)** → сен 1 685 → окт (14 дн.) 789.
  Клики все месяцы 2–8. Рост показов до августа не конвертировался в клики, потому что позиции 55–90.
- Бренд «nocko»: 94 показа, позиция 5.8. ОАЭ — 986 из 1 260 показов. Десктоп 1 091 / мобильные 168.
- Топ запросов: managed it services (56, поз. 77.6), managed it services dubai (36, поз. 68), it consulting dubai (34, поз. 69).
  «managed it services uae»: было 113 показов на поз. 55 → 27 на поз. 66.
- Топ страниц: /services/cloud 264 (было 647), /services/managed-it 176 (было 472), /services/it-consulting 159, /locations/sharjah 15 (было 120).
- Индексация (25 URL): 18 в индексе. «Crawled, not indexed»: /services/it-support-ru, /ru/services/managed-it,
  /articles/it-support-monitoring, /articles/it-support-helpdesk, /articles/it-consulting-roi, /ru/articles/managed-it-services-guide.
  «Unknown to Google»: /articles/data-backup-services-dubai (повторно, несмотря на запрос 12.10).
- Sitemap: скачан 12.10, 158 URL, 0 ошибок.
- CrUX: API заблокирован в GCP-проекте 912061453742 (403 API_KEY_SERVICE_BLOCKED). Полевых CWV нет и в PSI (мало трафика).

## Находки по областям

### Technical (88/100)
- ✅ 158/158 → 200, 0 редиректов в sitemap, 0 noindex, canonical и hreflang на 158/158, ровно один H1 везде, 0 сирот.
- ✅ HSTS preload, X-Frame-Options DENY, nosniff, Permissions-Policy, Referrer-Policy. CSP есть, но в режиме report-only.
- ✅ Все ссылочные картинки schema (logo-512.png, og-image.jpg, twitter-image.jpg) отдают 200. lastmod теперь по дате правки.
- ✅ Внутренние ссылки на /ru/locations и /locations исправлены; TTFB медиана 423 мс из Бомбея, x-vercel-cache HIT.
- ❌ `<html lang="en">` на 80 RU-страницах. Инлайн-скрипт ставит `lang='ru'`, но в исходном HTML — en. Google по lang не ранжирует, но
  og:locale=ru_RU и lang=en противоречат друг другу. Отложено (route groups) — остаётся в бэклоге.
- ❌ Одна внутренняя ссылка через 308: /articles → /articles/centralized-helpdesk-ru (редирект на /ru/articles/centralized-helpdesk-ru).
- ❌ Schema и hreflang заявляют арабский (availableLanguage), а /ar отдаёт 404.
- ❌ Крошки на /industries/* ведут на `https://nocko.com#`, страница /industries отдаёт 404.
- ⚠️ На /services/it-support нет hreflang x-default (на остальных есть). RSS /rss.xml есть, но нет `<link rel="alternate" type="application/rss+xml">` в head; /feed.xml 404.

### On-Page (72/100)
- ✅ Title ≤ 60 на 155/158 (3 на 61–63: cloud-cost-optimization, it-consulting-strategy, it-support-helpdesk), description 70–160 на 158/158,
  дублей title/description нет.
- ❌ Плотность головного термина с учётом навигации: «it support» 4.8% на /services/it-support, «it amc» 4.2% на /services/it-amc,
  «managed it» 3.8% на /services/managed-it. Выше 3% — риск переоптимизации.
- ❌ 18 страниц получают только 2 входящие ссылки (хаб + языковой близнец), среди них /articles/google-workspace-vs-microsoft-365 —
  статья, которая ближе всех к первой странице. Все 5 пар кейсов (projection, solus, scalini, m365-audit, enterprise) тоже.
- ❌ Каннибализация RU: /services/it-support-ru и /ru/services/it-support конкурируют за одни запросы; у первой английское меню и футер,
  нет Service schema, она не в индексе с мая. «ИТ аутсорсинг» нет в title/H1 ни одной RU-страницы.
- ❌ Тонкие: /ru/contact (164 слова), /contact (222), /ru/services (280). /ru/services/managed-it 638 слов против ~1 150 у EN, без цен и FAQ.
- ⚠️ 70 страниц: title начинается с текста H1 — нормально, но title и H1 можно разводить под разные формулировки запроса.

### Content / E-E-A-T (55/100; E-E-A-T 47)
Исправлено с 30.09: P1 везде «15 минут удалённо / 2 часа на объекте в Дубае»; у 4 EN-статей и RU-гайда появились видимые даты.
- ❌ **Цены не сведены** (для 20–50 пользователей): Managed IT — AED 2 500–6 000/мес на услуге vs AED 200–600/польз. в статье
  (= 4 000–30 000); IT support — 3 000–8 000/мес (дороже managed); AMC — 18 000–45 000/год; штатный инженер — 12 000–18 000/мес vs
  120 000/год; почасовая — 300–600 vs 350. RU managed-it: 3 000–8 000.
- ❌ **SLA расходятся**: P2 — 1 час на услугах vs 30 минут в гайде AMC; выезд в Шарджу — 2–3 ч / 4 ч / 24 ч / same-day на разных
  страницах; cybersecurity — «sub-15-minute business hours» и «15 минут 24/7» на одной странице; статья AMC vs MSP — «4–8 hours».
- ❌ **Авторов нет**: author = Organization во всех Article; нет био, byline, «reviewed by».
- ❌ **Доказательств компании нет**: лицензия, TRN, юрлицо (LinkedIn: «NOCKO Information Technology L.L.C»), год основания, размер
  команды, номера партнёрств Microsoft/Cisco/AWS. Отзывы в кейсах без имён. Цифры («$2.4M», «50+ клиентов», zero-day) без источников.
  Устаревшие HAAD и NESA (ныне DoH и CSC/ISR), доллары вместо AED в ransomware-кейсе.
- ❌ **Противоречие**: /articles/it-amc-vs-msp описывает AMC как чистый break/fix, а /services/it-amc продаёт AMC с патч-менеджментом
  и плановыми визитами. В статье непроверяемый «$30 000 счёт».
- ❌ RU-кейс Solus: `datePublished` в JSON-LD = момент запроса (генерируется на лету).
- ⚠️ Flesch EN ≈ 23–30 (сложный текст). Нет ни одной HTML-таблицы на сайте. RU-перевод в целом хороший, остались английские
  термины в заголовках (Co-Managed IT, Break/fix), «ДГО» без расшифровки.
- ⚠️ Нет страницы под «русскоговорящая ИТ компания дубай»: слово встречается по одному разу.

### Schema (66/100)
Исправлено: один Organization/ProfessionalService с `@id https://nocko.com/#organization`, на него ссылаются Service, WebPage, WebSite,
LocalBusiness.parentOrganization; дубли FAQPage убраны; /industries/* → WebPage; картинки 200.
- ❌ Ошибки по правилам Google: BreadcrumbList на /locations/* и /ru/locations/dubai — средний элемент без `item`;
  LocalBusiness на /locations/dubai и /ru/locations/dubai — `streetAddress` пустая строка.
- ❌ /locations/sharjah и /locations/abu-dhabi: LocalBusiness с адресом и geo Дубая.
- ⚠️ Article: dateModified = datePublished (кроме RU managed-it гайда), author Organization без url, нет mainEntityOfPage и inLanguage,
  одна картинка og-image.jpg на все статьи. Service без offers/url/@id. BreadcrumbList нет на /, /case-studies, /case-studies/*.
- ⚠️ sameAs только LinkedIn. На /ru Organization.description английский, крошка «Home» ведёт на EN-корень. geo с 4 знаками.
- ℹ️ FAQPage: тексты совпадают с видимыми. Rich results для коммерческого сайта Google не покажет; польза только для AI.

### Performance (96/100)
- Mobile: / 97, /ru 94, managed-it 98, it-amc-guide 98, dubai 97, ransomware 97. Desktop 100 везде. Best Practices 100. A11y 97–100.
  SEO 100, кроме /locations/dubai — 92 (6 ссылок «Learn More» без контекста).
- LCP mobile 2.3–2.4 с, /ru — 2.9 с (регресс: render delay 940 мс). CLS ≤ 0.036, TBT 0–40 мс. TTFB 150–190 мс.
- LCP-элемент везде section.hero (hero-bg-xs.webp). На главной ~20 preload (logo-*.svg, 8 industries/*.svg, 6 clients/*.svg, 11 JS-чанков)
  делят канал с hero. fetchpriority=high не применён на managed-it, dubai, ransomware.
- Контраст: #11c979 исправлен; #3474ff всё ещё падает на a.feature-card__link (/ru, 3.31:1) и a.service-content-enhanced__link (4.12:1).
- Legacy-полифиллы ~14 КиБ, неиспользуемый JS 23–27 КиБ в 981ae20817657409.js. Порядок заголовков h4.footer__nav-title.

### AI Search Readiness / GEO (64/100)
- ✅ Technical accessibility 95: все поисковые и retrieval-боты разрешены, SSR полный (1 600–2 900 слов без JS), llms.txt по спецификации,
  llms-full.txt (~14k слов), /.well-known/rsl.xml валиден, ~45 ссылок llms.txt → 200.
- Citability по страницам (0–10): it-amc-guide 8, managed-it-services-guide 8, /services/managed-it 6, it-amc-vs-msp 5,
  google-workspace-vs-microsoft-365 5, /locations/dubai 4. У «восьмёрок» есть AED, определение и FAQ; у остальных нет прямого ответа под H1.
- ❌ Multi-modal 30: ни таблиц, ни видео. Authority 55: sameAs только LinkedIn, нет foundingDate, legalName, Person.
- ⚠️ llms.txt без секции Optional, без фактов (год, цены, SLA), без ссылок на локации и статью GW vs M365. Черновик: audit-2026-10-17/llms.proposed.txt.
- ⚠️ Рекомендация: открыть meta-externalagent (Meta AI/WhatsApp — важный канал в ОАЭ) и CCBot; блок anthropic-ai/cohere-ai/Bytespider безвреден.
- ⚠️ RSS pubDate = штампы деплоя; it-amc-vs-msp dateModified 2025-07-02.

### Local SEO (38/100)
- NAP: адрес, телефон +971 54 244 8888, info@nocko.com, часы Пн–Пт 09–18 везде одинаковы. Формат страны расходится («Dubai , UAE» vs
  «Dubai , United Arab Emirates»). Сайт без «L.L.C», LinkedIn с ним.
- ❌ GBP не подтверждён (Bing по бренду — 0 результатов; нужна ручная проверка). Нет ссылки на Maps, виджета отзывов, aggregateRating.
- ❌ Адрес — жилой комплекс: риск при верификации GBP и для доверия B2B-закупщика.
- ❌ Каталоги: подтверждён только LinkedIn. Clutch, GoodFirms, Yellow Pages UAE, 2GIS, Яндекс Карты, Facebook, Instagram — не найдены/не проверены.
- ⚠️ Локации: Dubai 829 слов, Abu Dhabi 604, Sharjah 611, RU Dubai 773; текст не дублируется, но Abu Dhabi и Sharjah взаимозаменяемы
  (нет именных клиентов, карты, SLA по эмирату). Конкурент geeks.ae: «150+ clients», рейтинг в schema, арабская версия.
- ⚠️ Нет упоминаний лицензии, TDRA, Dubai Police/DESC; нет арабской версии.

### SXO / SERP (61/100)
- Page-type mismatch почти нет: по 6 EN-коммерческим запросам выдача — сервисные лендинги, как у nocko. Разрыв — в доверии и авторитете.
- Реальные расхождения: по «it consulting dubai», «it amc dubai», «it support company dubai» в выдаче заметна доля директорий и
  листиклов (Clutch, DesignRush, GoodFirms, «Top 10…») — туда можно попасть только листингами. /services/it-consulting — 592 слова, HIGH gap.
- Персоны с худшими оценками: закупщик, делающий шорт-лист компаний (3/10), владелец бизнеса, ищущий ИТ-стратега (3/10),
  бюджетный стартап (4/10 — на EN нет цен), читатель статьи GW vs M365 (4/10).
- Статья GW vs M365 (поз. ~15): лидер mrsharepoint — ~2 000 слов, 4 таблицы, Quick Verdict сверху, цены, обновлён 26.05.2026.
  У nocko 1 203 слова, 0 таблиц, 0 цен, вердикт в конце, «small business» нет в title. Есть FAQ — плюс против лидера.
- Статья AMC vs MSP (поз. ~15): в выдаче нет прямого сравнения с UAE-контекстом — ниша свободна. У nocko 726 слов, без таблицы и FAQ, дата 2025-07-02.
- Ограничение: WebSearch шёл из США, без Local Pack/PAA/AIO. Проверить на google.ae.

### Images (78/100)
- ✅ alt на всех контентных картинках (alt="" только у декоративных SVG-иконок), width/height везде, WebP, hero с fetchpriority на /.
- ❌ Одна og-image.jpg на все 109 Article — соцпревью и Article.image одинаковы для всех статей.
- ❌ Нет ни одной фотографии команды/офиса, нет таблиц и схем — визуальные доказательства отсутствуют.
- ⚠️ ~20 preload SVG на главной конкурируют с LCP; тяжёлые SVG.

## Что изменилось с 30.09

| Было | Стало |
|---|---|
| og-image / logo 404 | 200 |
| 2–3 Organization на странице, дубль FAQPage | одна сущность с @id |
| 149 title > 60, 99 description > 160 | 3 title 61–63, description все в норме |
| 32 без hreflang, 11 без canonical | 0 и 0 |
| битые ссылки на /ru/locations, /locations | исправлены |
| lastmod = время билда | по дате правки |
| P1 «15 мин» vs «1 час» | единые 15 мин / 2 ч |
| 29 ссылающихся доменов | 1 631, из них нормальных — 0 (спам-волна) |
| показы 1 676 | 1 260 (−25%), пик августа 3 199 |

## Ограничения аудита
- WebSearch был недоступен у части агентов; GBP, каталоги и позиции в Local Pack нужно проверить вручную или через DataForSEO SERP.
- CrUX заблокирован в GCP → реальных CWV нет.
- Подсчёт слов включает меню и футер (~150–200 слов).
- Список ссылочных возможностей составлен по знанию рынка, онлайн не верифицирован.
- Базовые 29 ссылок августа в текущем индексе не выделены — неизвестно, сохранились ли они.
