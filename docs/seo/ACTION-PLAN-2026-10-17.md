# SEO Action Plan — nocko.com (по аудиту 2026-10-17)

Приоритет: Critical → сразу · High → 2 недели · Medium → месяц · Low → бэклог. В скобках — область и трудозатраты.
Код в порядке; 80% плана — решения и материалы владельца (цены, люди, лицензия, профили, ссылки).

## CRITICAL

1. **Спам-волна ссылок: disavow + мониторинг** (authority, 2 ч). Выгрузить все ~1 630 доменов из DataForSEO
   (refdomains постранично по 100), отфильтровать .website/.store/.space/.site/.shop/.online и анкоры «Premium Authority SEO Links…»,
   загрузить disavow-файл в GSC (domain:-формат). Google обычно игнорирует такой спам сам, но при 0 нормальных ссылок
   соотношение 100% мусора — повод подстраховаться. Повторять выгрузку ежемесячно (summary + lost). **Не покупать** пакеты
   «DA 50 PBN backlinks» — это они и есть. Письма вроде «Kerston: нашёл SEO-проблемы» — в спам.
2. **Единый прайс и SLA — один источник правды** (content, решение владельца + 0.5 дня правок). Сейчас 5 расхождений по ценам
   и 4 по SLA (см. отчёт). Решить: Managed IT AED ?/мес и ?/польз.; IT support ?; AMC ?/год; почасовая ?; P1/P2/P3 удалённо и
   выезд по эмиратам (Дубай / Шарджа / Абу-Даби). Вынести в один JSON/MDX и рендерить таблицей на /services/managed-it,
   /services/it-support, /services/it-amc, /ru/services/*, в гайды и FAQ JSON-LD. Пометка «цены актуальны на MM.YYYY».
3. **Блок «О компании» с проверяемыми фактами** (E-E-A-T, материалы владельца + 2 ч). На /about и /contact (+RU): юрлицо
   «NOCKO Information Technology L.L.C», номер торговой лицензии, TRN, год основания, размер команды, партнёрские статусы с
   номерами/ссылками (Microsoft Partner ID, Cisco, AWS). В schema: legalName, foundingDate, identifier (лицензия), numberOfEmployees.
   Если есть офис/бизнес-центр помимо Wavez Residence — указать его.
4. **Именные авторы** (E-E-A-T, 0.5 дня). Person в Article.author с url на страницу автора, видимый byline «By X · Reviewed by Y ·
   Updated DD.MM.YYYY» на 8 pillar-гайдах, затем на остальных статьях. Страницы /team/<slug> или якоря на /about с ролью и опытом.
5. **Убрать динамическую дату** на /ru/case-studies/solus (datePublished = now) и проверить остальные RU-кейсы (schema, 20 мин).

## HIGH (2 недели)

6. **Google Business Profile** (local, 1–2 ч + верификация). Проверить, существует ли; создать/подтвердить как service-area business
   с категорией «Managed service provider» / «Computer support and services», часы, фото, услуги, ссылка на сайт. Добавить `hasMap`
   и ссылку на профиль в футер и /contact. Запустить сбор отзывов: 5 клиентов из кейсов → первые 5 отзывов за месяц.
7. **Профили и каталоги с единым NAP** (authority + local, 1 день). Clutch, GoodFirms, The Manifest, DesignRush, Microsoft Partner
   Directory (профиль создавался в августе — проверить публикацию), Yellow Pages UAE, Connect.ae, Cylex, 2GIS Dubai, Яндекс Карты
   (RU-аудитория), Facebook, Instagram, YouTube. Все → в `sameAs`. Анкор — бренд/URL.
8. **Статья AMC vs MSP → топ-10** (content, 0.5 дня). Title/H1 «IT AMC vs MSP in Dubai: Differences, Cost & Which to Choose (2026)»;
   TL;DR в первых 100 словах; таблица AMC / MSP / break-fix (оплата, состав, мониторинг, SLA, безопасность, AED, для кого);
   FAQ 5–6 вопросов + FAQPage; убрать «AMC = только reactive» (противоречит /services/it-amc) и «$30 000» → расчёт в AED;
   1 300–1 500 слов; dateModified + видимое «Updated October 2026»; ссылки из /services/it-amc и /services/managed-it на статью.
9. **Статья Google Workspace vs M365 → топ-10** (content, 1 день). Title «Google Workspace vs Microsoft 365 for Small Business in the
   UAE (2026 Comparison)»; Quick Verdict таблицей сразу после вступления; таблица тарифов USD + AED (сверить с вендорами); таблицы
   функций и безопасности (хранилище, MFA, DLP, MDM, data residency, Copilot/Gemini); UAE-раздел; обновить дату; ссылки с
   /services/cloud и /services/it-support. Сейчас у статьи 2 входящие ссылки.
10. **RU: занять свободную нишу** (on-page, 0.5–1 день). «ИТ-аутсорсинг в Дубае» в title/H1 /ru/services/it-support;
    решить судьбу /services/it-support-ru (не в индексе с мая, английское меню, нет Service schema): 301 → /ru/services/it-support с
    переносом FAQ и блока «русскоговорящая ИТ-компания», либо перевести меню/футер и добавить Service schema. Рекомендация — 301.
    Добавить на /ru/services/it-support раздел «Русскоговорящая ИТ-компания в Дубае» (300+ слов, отзыв RU-клиента).
    Дополнить /ru/services/managed-it до уровня EN: цены, FAQ (638 → 1 100+ слов).
11. **Schema-ошибки** (schema, 1 ч). BreadcrumbList на /locations/*: `item` у среднего элемента; крошки /industries/* → убрать ссылку
    на `#` или сделать /industries; LocalBusiness: заполнить streetAddress, на Sharjah/Abu Dhabi — либо реальные адреса/geo,
    либо убрать LocalBusiness и оставить Organization + areaServed; добавить BreadcrumbList на /, /case-studies, /case-studies/*;
    Article: author Person, mainEntityOfPage, inLanguage, dateModified ≠ datePublished при правке; Service: url, @id, offers.
    Убрать `availableLanguage: Arabic`, пока нет /ar. x-default на /services/it-support.
12. **Слой доверия на сервисных страницах** (content, 2–3 дня + материалы). На /services/managed-it, it-support, it-amc, cloud,
    cybersecurity, it-consulting: блок сертификатов/партнёрств, 3+ подписанных отзыва (имя, должность, компания), логотипы клиентов
    (с разрешения), фото команды, таблица тарифов «от». Review/AggregateRating в schema только при реальных отзывах на странице.

## MEDIUM (месяц)

13. **Снизить плотность ключей** на /services/it-support (4.8%), /services/it-amc (4.2%), /services/managed-it (3.8%) до ≤ 2.5%:
    синонимы, местоимения, убрать повторы в подзаголовках (on-page, 2 ч).
14. **Перелинковка** (on-page, 2 ч). 18 страниц с 2 входящими: блоки «Читайте также» в теле статей (не только в хабе), ссылки
    из сервисных страниц на релевантные кейсы и статьи, из кейсов — на услуги. Исправить ссылку /articles →
    /articles/centralized-helpdesk-ru (308) на /ru/articles/centralized-helpdesk-ru.
15. **Расширить /services/it-consulting** (592 → 1 200+ слов): форматы (аудит, стратегия, vCIO), цены «от», кейс, биография
    консультанта (content, 1–2 дня). Расширить /services/cybersecurity (646 → 1 000+).
16. **Отдельная /services/cloud-migration** (content, 2 дня): этапы, сроки, кейс, PDPL и резидентность данных, цены «от».
    Запросы cloud migration в 8 вариантах дают показы на поз. 64–83.
17. **Таблицы на сайте**: сейчас 0 HTML-таблиц. Тарифы, SLA, сравнения — таблицами (помогает AI-цитированию и featured snippets).
18. **Прямой ответ под H1** (40–60 слов) на всех сервисных страницах и статьях с citability ≤ 5; FAQ + FAQPage на
    /articles/it-amc-vs-msp и /locations/* (geo, 1 день).
19. **Локации Абу-Даби и Шарджа**: уникальные SLA по эмирату, именной клиент/кейс, карта, местный контекст (free zones, районы);
    убрать показы-падение /locations/sharjah 120 → 15 (local + content, 1 день).
20. **llms.txt**: заменить на черновик из audit-2026-10-17/llms.proposed.txt (добавить Optional, факты, локации, GW vs M365);
    robots.txt: открыть meta-externalagent и CCBot, добавить Disallow /api/ и /admin/ в бот-группы (geo, 30 мин).
21. **Performance**: /ru LCP 2.9 с — разобрать render delay (шрифт woff2, critical CSS); убрать лишние preload SVG на главной;
    fetchpriority=high на hero managed-it/dubai/ransomware; #3474ff → ≥ 4.5:1 на ссылках; 6 «Learn More» на /locations/dubai →
    описательные анкоры; порядок заголовков в футере; legacy-полифиллы (perf, 0.5 дня).
22. **Уникальные og-image** для статей и кейсов (хотя бы шаблон с заголовком) и Article.image ≠ общая картинка (images, 0.5 дня).
23. **Индексация**: повторно запросить /articles/data-backup-services-dubai (unknown), 6 crawled-not-indexed — усилить входящими
    ссылками и обновить контент перед запросом. Включить CrUX API в GCP-проекте 912061453742 (google, 15 мин).
24. **Обновить регуляторику**: HAAD → DoH, NESA → CSC/ISR; доллары → AED в ransomware-кейсе; «ДГО» расшифровать (content, 1 ч).

## LOW (бэклог)

25. `<html lang>` по локали через (en)/(ru) route groups (сейчас инлайн-скрипт).
26. RSS: `<link rel="alternate" type="application/rss+xml">` в head, pubDate по реальной дате; /feed.xml → 301 на /rss.xml.
27. CSP из report-only в enforce после проверки отчётов.
28. Арабская версия (/ar) — отдельный проект; до неё убрать Arabic из schema.
29. Linkable assets: чек-лист UAE PDPL/ISR, калькулятор стоимости MSP, отчёт по ИТ-ценам в ОАЭ (authority, 1–2 недели) → питчи в
    Tahawul Tech, Arabian Business, HARO/Qwoted. Цель: 20–30 реальных доменов за квартал, ≥ 30% из .ae.
30. Hub «IT Support Company in Dubai» под запросы с «company» (закупщик-персона 3/10).

## Контрольные точки

- Через 4 недели: GSC клики/показы, позиции it-amc-vs-msp и google-workspace-vs-microsoft-365 (цель ≤ 10), индексация 7 проблемных URL.
- Через 8 недель: DataForSEO summary — rank > 0, появились .ae-домены; GBP с ≥ 5 отзывами.
- Через 6 месяцев: rank > 50, ≥ 30 нормальных ref. доменов, небрендовые клики > 50/мес.
