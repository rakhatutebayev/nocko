# Полный SEO-аудит nocko.com — 2026-09-30

Метод: 6 параллельных проверок (technical + on-page по всем 156 URL sitemap, content/E-E-A-T по 19 страницам,
schema по 17 страницам, PageSpeed по 5 страницам × 2 устройства, Google Search Console API, GEO/AI-readiness).
Сырые данные и отчёты агентов: scratchpad/audit/{technical,content,schema,performance,google,geo}/.
Предыдущий аудит: 2026-07-21 (72/100).

## SEO Health Score: 68 / 100 (июль: 72)

| Категория | Вес | Оценка | Взвешенно | Июль |
|---|---|---|---|---|
| Technical SEO | 22% | 82 | 18.0 | 82 |
| Content Quality / E-E-A-T | 23% | 54 | 12.4 | 68 |
| On-Page (тайтлы, дескрипшены, перелинковка) | 20% | 61 | 12.2 | 65 |
| Schema / Structured Data | 10% | 58 | 5.8 | 58 |
| Performance (lab) | 10% | 94 | 9.4 | 90 |
| AI Search Readiness (GEO) | 10% | 66 | 6.6 | 72 |
| Images | 5% | 75 | 3.8 | 70 |
| **Итого** | | | **68.2** | 72.1 |

Падение оценки не означает, что сайт стал хуже: техника и скорость выросли. Контент-аудит в этот раз
глубже (19 страниц против выборки) и нашёл противоречия в цифрах и английские RU-страницы, которых
в июле не проверяли.

## Главный вывод

Фундамент готов: 156/156 URL отдают 200, 18/20 проверенных URL в индексе, Lighthouse 97–100,
0 сирот, alt у всех картинок, hreflang на 122 страницах. Google **видит** сайт, но **не доверяет** ему:

1. **Трафика нет.** 4 клика за 28 дней (столько же было в августе). Показы упали с 2 870 до 1 676 (−42%),
   средняя позиция ушла с 55.9 на 59.4. Все коммерческие запросы на позициях 45–85. На первой странице
   только бренд «nocko» (поз. 7).
2. **Причина не в коде, а в доверии и авторитете.** Внутри сайта цены и SLA противоречат друг другу
   (три разных прайса на одну услугу, «15 минут» против «1 час» на реакцию). Ни одного именного автора.
   Отзывы без имён. Сертификаты без номеров. Снаружи: 29 ссылающихся доменов против 100–180 у конкурентов.
3. **RU-версия наполовину фиктивна.** 8 из 15 RU-кейсов целиком на английском, на RU-главной английские
   блоки, у всех 79 RU-страниц `lang="en"`. Google справедливо не индексирует часть RU-страниц.

## Данные Google Search Console (31 авг – 27 сен vs 3–30 авг)

| Метрика | Сейчас | Было | Δ |
|---|---|---|---|
| Клики | 4 | 4 | 0 |
| Показы | 1 676 | 2 870 | −42% |
| Средняя позиция | 59.4 | 55.9 | −3.5 |

- Топ-запросы по показам: managed it services (78, поз. 69), managed it services uae (61, поз. 59),
  managed it services dubai (56, поз. 64), it consulting dubai (45, поз. 65), cloud migration в 8 вариантах (поз. 64–83).
- Страницы, которые просели: /services/managed-it (778→274 показов, поз. 59.6→64.5), /services/cloud
  (727→394, поз. 66→72), /articles/cloud-migration (поз. 43→66), /articles/cloud-banking-uae (128→9 показов).
- Ближе всего к первой странице: /articles/google-workspace-vs-microsoft-365 (поз. 14.7),
  /articles/it-amc-guide (7.7), /articles/it-amc-vs-msp (15.6), /locations/sharjah по «it support sharjah» (46.7).
- Индексация: 18/20 в индексе. Не в индексе: /services/it-support-ru («Crawled, not indexed», последний
  обход 22 мая — до наших правок 2 августа), /ru/articles/managed-it-services-guide.
- 91% показов с десктопа; UAE 84% показов.
- CrUX (полевые данные) недоступны: API не включён в GCP-проекте 912061453742, и трафика мало.

## Находки по областям

### Technical (82/100)
- ✅ 156/156 → 200, 0 редиректов в sitemap, 0 noindex, HSTS+preload, HTTP/2, X-Frame-Options, nosniff, честный 404.
- ✅ 0 сирот; hreflang на 122 страницах, все взаимные; canonical на 145.
- ❌ `<html lang="en">` на всех 79 русских страницах (78 /ru/* + /services/it-support-ru).
- ❌ 8 страниц /ru/case-studies/* (solus, fh, projection, scalini, gss, technohub, ransomware-recovery, m365-audit)
  на английском, дублируют EN-версии, без canonical и hreflang.
- ❌ 32 страницы без hreflang (все кейсы EN+RU, /services, /ru/services, /case-studies, /ru/case-studies);
  11 без canonical (в основном RU-кейсы и /case-studies).
- ❌ Битые внутренние ссылки: /services/it-support-ru → /ru/services/it-support-ru (404);
  3 страницы → /ru/locations (404); 3 страницы → /locations (308).
- ⚠️ lastmod у всех 156 URL = время билда; нет CSP и Permissions-Policy; нет RSS; http://www — 2 хопа.

### On-Page (61/100)
- ✅ Title, description, ровно один H1 и alt — на 156/156.
- ❌ 149/156 title длиннее 60 символов (суффикс «| NOCKO Information Technology» = 30 символов; типично 70–100, макс. 138).
- ❌ 99/156 description длиннее 160 (макс. 227: /locations/sharjah).
- ❌ 26 страниц тоньше 300 слов: /contact (65), /ru/contact (30), /services (241), /case-studies (269).
- ⚠️ Плотность ключей 4–4.7% на /services/it-support («IT support»), /services/it-amc («IT AMC» 23 раза).
- ⚠️ Кейсы получают по 2 входящих ссылки (только хаб + языковой близнец).

### Content / E-E-A-T (54/100)
- ❌ **Противоречия в ценах.** Managed IT: AED 2 500–6 000/мес за 20–50 польз. (услуга) против
  AED 200–600/польз./мес (гайд) = AED 4 000–30 000/мес; IT Support: AED 3 000–8 000/мес — третий диапазон.
- ❌ **Противоречия в SLA.** Реакция на критичный инцидент: 15 минут (managed-it, cybersecurity, it-support, гайд)
  против 1 часа (FAQ на it-amc). Выезд: «2 ч Дубай / 4 ч Эмираты» против «до 2 ч» против «в тот же день».
- ❌ Ни одного именного автора: везде author = Organization. При этом на /about есть 4 сотрудника с сертификатами.
- ❌ Отзывы без имени и должности; «прошли аудит DFSA без замечаний» без источника; кейсы 245–275 слов.
- ❌ Тонкие: /services/cybersecurity (500 слов), /services/cloud (760), /articles/it-amc-vs-msp (552, «vs»-статья
  без таблицы сравнения), /articles/structured-cabling-guide (719), /industries/healthcare (312), /ru (329),
  /ru/services/managed-it (492, без FAQ и цен).
- ❌ RU-страницы с английскими вставками: на /ru целый блок «Trusted IT Partner for Businesses in UAE…»
  и CTA «Become Our Client»; 9 русских заголовков с приклеенным « in UAE»; на /ru/services/managed-it
  заголовки «Reasons to Choose Us», «Related Services».
- ❌ /industries/healthcare опирается на HIPAA (закон США); нет DHA, Malaffi, ADHICS, ФЗ 2/2019.
- ❌ Сертификаты без номеров и ссылок; «NESA» устарел; ISO 27001 упомянут без указания, сертифицирована ли сама NOCKO.
- ❌ Ни одной `<table>` на 19 страницах; даты только в JSON-LD, не видны читателю.
- ⚠️ Flesch 23–36 (сложно); шаблонные фразы («We turn complexity into clarity»).

### Schema (58/100)
- ✅ Весь JSON-LD валиден; FAQ в схеме совпадает с видимым текстом на всех 8 страницах; Breadcrumbs PASS в GSC на 15 страницах.
- ❌ **`/og-image.jpg`, `/twitter-image.jpg`, `/logo-white.svg` отдают 404**, но на них ссылаются Article.image
  на всех статьях/кейсах и Organization.logo. Google не может получить картинку — rich results под угрозой.
- ❌ Три конфликтующих бизнес-сущности без @id: Organization + LocalBusiness на главной (разные данные),
  ещё один LocalBusiness на /locations/dubai. LocalBusiness.description = "".
- ❌ /about: FAQPage продублирован дважды.
- ❌ Service без offers/url/@id; на /services/it-support-ru нет Service; на /ru/services/managed-it Service на английском, без FAQPage.
- ❌ /industries/healthcare размечен как Article (лендинг); /case-studies без BreadcrumbList/CollectionPage.
- ⚠️ sameAs только LinkedIn; часы Mon–Fri 9–18 при заявленном 24/7; geo как строки; Home в крошках то с «/», то без.

### Performance (94/100, lab)
- ✅ Mobile 97–98, desktop 99–100; TBT 10–40 мс; CLS ≈ 0; hero preload с fetchpriority работает; TTFB 6–9 мс (lab).
- ⚠️ Mobile LCP 2.4–2.6 с на грани: 0.55–0.6 с съедает render-blocking CSS (19 КБ c5f6154a…css).
- ⚠️ /contact грузит Google Maps сразу: 257 КБ неиспользуемого JS.
- ⚠️ /services/managed-it: картинки 1920w для слота 372px (нет `sizes`), фон 43 КБ JPEG; иконки benefits PNG 20 КБ за 100×100.
- ⚠️ Холодный TTFB 0.7 с на 4 из 5 страниц (Vercel edge-кэш протух), тёплый 0.14–0.2 с.
- ❌ Контраст: `.btn--primary` белый на #11c979 = 2.17:1 (норма 4.5), `.header__menu-cta` 4.12:1,
  `.clients__subtitle` 3.64:1, `.features__intro-link` 4.46:1. Единственные провалы доступности (95–99).
- ✅ Immutable-кэш на статике; HTML 30 КБ по сети (brotli).

### GEO / AI (66/100)
- ✅ SSR полный (2 291 слово статьи в сыром HTML); GPTBot/OAI-SearchBot/ClaudeBot/PerplexityBot разрешены; llms.txt есть, все 22 ссылки → 200.
- ❌ llms.txt не содержит 3 из 8 pillar-гайдов (it-amc-vs-msp, it-support-helpdesk, it-consulting-guide) и ни одного /ru/ URL.
- ❌ Нет llms-full.txt, /.well-known/rsl.xml, security.txt.
- ❌ 0 таблиц; заголовки не в форме вопросов; статистика без источников; автор не Person.
- ⚠️ Нет ссылки на Google Business Profile (карта на /contact без place ID); sameAs = 1 ссылка.
- ⚠️ ChatGPT-User, Claude-SearchBot, Perplexity-User разрешены только через `*`, без явных правил.

### Images (75/100)
- ✅ alt на 100% картинок; hero в WebP с 4 брейкпоинтами.
- ⚠️ PNG-иконки benefits (20 КБ за 100×100), SVG индустрий по 20 КБ без SVGO, отсутствие `sizes` у next/image на услугах.

## Что изменилось с июля
Сделано: хаб статей, hreflang на главной и услугах, двойной бренд в title, один LocalBusiness на главной,
Service JSON-LD на услугах, preload hero, llms.txt с гайдами, cookie-баннер (сегодня), единый hero и ритм секций (сегодня).
Не сделано из июльского плана: именные авторы (п.11), расширение cybersecurity (п.12), кейсы (п.13), таблицы (п.14),
lastmod (п.16), телефон в шапке (п.18), IndexNow, CSP, CrUX API, sameAs/YouTube.
Новое, чего в июле не видели: 404 на og-image/logo, 8 английских RU-кейсов, lang="en" на RU, противоречия SLA/цен,
HIPAA на healthcare, битые ссылки на /ru/locations и /ru/services/it-support-ru.
