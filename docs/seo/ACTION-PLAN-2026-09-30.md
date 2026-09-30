# SEO Action Plan — nocko.com (по аудиту 2026-09-30)

Приоритет: Critical → сразу · High → неделя · Medium → месяц · Low → бэклог.
В скобках — область и ориентир трудозатрат.

## CRITICAL (ломает индексацию, доверие или rich results)

1. **Создать og-image.jpg, twitter-image.jpg и логотип** (schema, 1 ч). Сейчас 404 на файлах, на которые
   ссылаются Article.image всех статей/кейсов и Organization.logo. Положить 1200×630 JPG + тёмный PNG-логотип
   ≥112×112 в public/, обновить пути в StructuredData и metadata.
2. **Свести цены и SLA к одному источнику правды** (content, 0.5 дня). Один прайс-лист (AED/польз./мес и
   AED/мес по размеру компании, AMC vs MSP) и одна SLA-таблица (P1 15 мин удалённо / 2 ч выезд Дубай /
   4 ч Эмираты). Переписать цифры на /services/managed-it, /services/it-support, /services/it-amc (FAQ «1 час»),
   /about FAQ, в managed-it гайде и в FAQ JSON-LD. Добавить «цены актуальны на MM.YYYY».
3. **RU-кейсы: 8 английских страниц под /ru/** (technical + content, 1–2 дня на перевод). Либо перевести
   (solus, fh, projection, scalini, gss, technohub, ransomware-recovery, m365-audit), либо временно
   убрать из sitemap и поставить canonical на EN-версию. Сейчас это дубли без canonical.
4. **`<html lang>` по локали** (technical, 30 мин). `lang="ru"` на /ru/* и /services/it-support-ru.
   Файлы: app/layout.tsx или локальный layout для /ru.
5. **Битые внутренние ссылки** (technical, 20 мин): /services/it-support-ru → /ru/services/it-support-ru (404)
   заменить на /ru/services/it-support; ссылки на /ru/locations (404) → /ru/locations/dubai; /locations (308) → /locations/dubai.

## HIGH (неделя)

6. **hreflang + canonical на кейсы и хабы** (technical, 1 ч): 32 страницы без hreflang, 11 без canonical —
   /case-studies, /ru/case-studies, /services, /ru/services и 14 пар кейсов. Использовать тот же `alternates`,
   что на статьях.
7. **Именные авторы** (E-E-A-T, 0.5 дня). Person в Article.author из команды на /about (Петров — кабели/сети,
   Смирнова — безопасность, Ковалев — облако, Аль Мансури — AMC/MSP), видимый байлайн «By X · Reviewed by Y ·
   Updated DD.MM.YYYY» на 8 pillar-гайдах и статьях. Даты показывать в тексте, не только в JSON-LD.
8. **Одна сущность Organization с @id** (schema, 2 ч). `@graph`: `#organization` (ProfessionalService:
   полный адрес, geo числами, часы с учётом 24/7 поддержки, sameAs, contactPoint, PNG-логотип) + `#website`;
   Service.provider, Article.publisher, ContactPage.mainEntity, Person.worksFor ссылаются на @id.
   Убрать второй LocalBusiness на главной и третий на /locations/dubai (оставить дочерний с parentOrganization).
   Удалить дубль FAQPage на /about. /industries/* → WebPage вместо Article.
9. **RU-главная и RU-услуги без английского** (content, 0.5 дня): перевести блок «Trusted IT Partner…»,
   CTA «Become Our Client», убрать « in UAE» у 9 заголовков, перевести «Reasons to Choose Us» /
   «Related Services» на /ru/services/*; добавить FAQ и цены на /ru/services/managed-it; Service name/description на русском.
10. **Title ≤ 60, description ≤ 160** (on-page, 2 ч). 149 и 99 страниц соответственно. Сократить суффикс
    до «| NOCKO» или убрать на длинных; переписать description на /locations/*, /ru/case-studies.
11. **Контраст кнопок** (a11y, 30 мин): `.btn--primary` #11c979 → ~#0a7a4d или тёмный текст;
    `.header__menu-cta` #3474ff → ~#1d5ce0; `.clients__subtitle`, `.features__intro-link`. Даёт Accessibility 100.
12. **Судьба /services/it-support-ru** (technical). Не в индексе с мая, 1 входящая ссылка, лежит вне /ru/.
    Решение: либо 301 на /ru/services/it-support с переносом FAQ и ключа «русскоговорящая ИТ компания»,
    либо оставить и запросить переиндексацию после правок 2 августа (Google не переобходил с 22 мая).
    Рекомендация: 301 — одна сильная RU-страница лучше двух слабых.

## MEDIUM (месяц)

13. Расширить тонкие страницы: /services/cybersecurity (500 → 1 000+), /services/cloud (760 → 1 000+),
    /articles/it-amc-vs-msp (552 → 1 500+, с таблицей сравнения и FAQ), /articles/structured-cabling-guide (719 → 1 500+),
    /contact и /ru/contact (65/30 слов).
14. Таблицы: AMC vs MSP, тарифы, SLA-матрица, in-house vs outsourcing, таймлайн миграции — как `<table>`
    с 40–60-словным резюме после каждой (лучший формат для AI Overviews).
15. /industries/healthcare: переписать под ОАЭ (DHA, Malaffi, ADHICS, ФЗ 2/2019, PDPL), убрать HIPAA как якорь,
    добавить пример, FAQ и CTA. Использовать как шаблон для других индустрий.
16. Кейсы: 800+ слов, таймлайн, объём, инструменты, базовые метрики, цитата с именем и должностью
    (с разрешения клиента). Начать с gss и solus.
17. Верифицируемый авторитет: номера сертификатов и ссылки на проверку, статус ISO 27001 самой NOCKO,
    ID партнёрств Microsoft/Cisco/AWS, год основания, номер лицензии на /about.
18. llms.txt: добавить it-amc-vs-msp, it-support-helpdesk, it-consulting-guide и раздел с /ru/ URL;
    опубликовать /llms-full.txt, /.well-known/rsl.xml, /.well-known/security.txt.
19. Performance: inline critical CSS (`experimental.inlineCss`) — минус ~0.55 с mobile LCP; lazy-load Google Maps
    на /contact (−257 КБ JS); `sizes` у next/image на услугах; PNG-иконки → SVG/WebP; ISR revalidate +
    stale-while-revalidate против холодного TTFB 0.7 с.
20. sitemap.ts: реальный lastmod из дат файлов/данных, убрать priority/changefreq.
21. Плотность ключей ниже 3% на /services/it-support и /services/it-amc.
22. CTA на страницах без него: it-amc-vs-msp, structured-cabling-guide, healthcare, locations/dubai, кейс solus.
23. Кликабельный телефон в шапке (из июльского плана, не сделано).

## LOW (бэклог)

24. CSP (report-only) и Permissions-Policy.
25. RSS-фид для 40 статей; IndexNow.
26. Явные правила robots.txt для ChatGPT-User, Claude-SearchBot, Perplexity-User; решение по Bytespider/meta-externalagent.
27. Дедуп 2-хопового редиректа http://www; убрать двойной robots-meta на 404.
28. Включить Chrome UX Report API в проекте 912061453742; добавить web-vitals RUM.
29. Переименовать structured-cabling-header-bg (фон всех услуг) → services-header-bg, конвертировать в WebP.

## Вне кода (главный ограничитель — авторитет домена)

- Показы упали на 42% за месяц при исправном сайте: конкуренты наращивают ссылки, мы стоим.
  29 ссылающихся доменов против 100–180 у emtech/geeks/cadgulf.
- Минимум на квартал: Google Business Profile (+ ссылка в sameAs и на /contact), Microsoft Partner Center
  (тексты готовы в session log 2026-08-02), Clutch, GoodFirms, Cloudtango, TechBehemoths, DesignRush,
  UAE-каталоги; outreach к staffconnect.ae / infraon.io / xedos.ae; 3–5 гостевых публикаций в UAE-медиа.
- YouTube-канал с 2–3 роликами: сильнейшая корреляция с AI-цитированием, плюс sameAs.
- После деплоя п.1–12: Request Indexing на затронутые URL через Indexing API (скрипт есть), контроль GSC через 2–4 недели.

## Порядок работ на ближайшую сессию
Пункты 1, 4, 5, 6, 8, 10, 11 — чистый код, ~1 рабочий день, без согласований.
Пункты 2, 3, 7, 9 требуют решений владельца: канонические цены и SLA, имена авторов, кто переводит кейсы.
