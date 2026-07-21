# SEO Action Plan — nocko.com (по аудиту 2026-07-21)

Приоритет: Critical → сразу · High → неделя · Medium → месяц · Low → бэклог.

## CRITICAL (блокирует индексацию/продажи — сделать сразу)

1. **Починить хаб /articles**: выводить все 40 статей (пагинация или категории),
   в первую очередь 8 pillar-гайдов. Сейчас 22 статьи — сироты без внутренних
   ссылок → соучастник «Crawled — currently not indexed».
   Файлы: app/articles/page.tsx (+ ru-версия).
2. **Обновить карточки гайдов на главной**: ссылаться на новые pillar-гайды
   (сейчас 3 из 8 + старые слаги).
3. **Свести цены AMC к одному набору цифр** в /services/it-amc и
   /articles/it-amc-guide (внутри гайда тоже два несовместимых диапазона).
4. **Убрать /articles/centralized-helpdesk-ru из EN-списка** app/sitemap.ts
   (RU-only статья, в sitemap отдаёт 308).

## HIGH (неделя)

5. Schema-баги:
   - удалить дублирующий LocalBusiness (оставить один блок: либо layout-scripts.tsx,
     либо page.tsx; единые geo/часы; тип ProfessionalService);
   - исправить components/seo/Breadcrumbs.tsx:31-43 — не использовать
     window.location на SSR; у последнего элемента крошек опустить item;
   - включить Service JSON-LD на всех /services/* (кейс 'Service' в
     StructuredData.tsx уже реализован — просто вызвать с offers/AED).
6. hreflang на главную и все /services/* (+ru), везде добавить x-default.
7. Тайтлы: убрать двойной бренд «| NOCKO | NOCKO Information Technology» на
   services/locations; RU-главную сократить со 146 до ~60 символов.
8. Трастовые сигналы на 4 сервисные страницы: бейджи сертификаций
   (Microsoft/Cisco/AWS с номерами), логотипы клиентов, 1–2 атрибутированных
   отзыва, «X лет в UAE» — главный разрыв с конкурентами в SERP.
9. LCP: preload hero-изображения с fetchpriority="high" в исходном HTML
   (минус ~1 с мобильного LCP); enterprise.png → WebP 385×385 (−900 КБ).
10. Разобраться со спиннером на шаблоне статьи (десктоп: пустой экран после
    `load`) — облегчить гидрацию.

## MEDIUM (месяц)

11. Именные авторы: Person schema + видимый байлайн «Reviewed by [имя], [должность]»
    на pillar-гайдах и сервисных страницах.
12. Расширить /services/cybersecurity (~600 слов → 1200+): NESA/ISO с номерами
    сертификатов, кейс, AED-диапазоны.
13. Усилить кейсы (начать с gss): имя/должность в отзыве, таймлайн, логотип,
    500–600+ слов.
14. Таблицы в гайдах: тарифы AMC и SLA-матрица как `<table>` (лучший формат для
    AI Overviews); добавить AED-цифры в cloud-migration (0), cybersecurity-guide,
    it-support-monitoring, cloud-infrastructure-guide (по 2).
15. Обновить llms.txt (добавить pillar-гайды), добавить /.well-known/rsl.xml.
16. sitemap.ts: lastmod из реальных дат изменения (не new Date()), убрать
    priority/changefreq.
17. Cookie-баннер: убрать наложение текста при первой отрисовке.
18. Кликабельный телефон в шапке/hero (сейчас только футер и WhatsApp);
    CTA-кнопки на мобильном ≥44 px.
19. Развести углы it-consulting-guide (широкий обзор услуг консалтинга) и
    it-consulting-strategy (стратегия/оценка/роадмап), перелинковать между собой.
20. Найти и убрать источник ошибки 400 в консоли на /services/it-amc.

## LOW (бэклог)

21. IndexNow (ключ + пинг Bing/Yandex) — ускорит переобход 46 редиректов.
22. CSP-заголовок (можно report-only).
23. Дедуп 2-хопового редиректа www+.html в next.config.ts.
24. Убрать legacy-полифиллы из чанка 981ae20817657409.js; code-splitting −25 КБ JS.
25. Включить Chrome UX Report API в GCP-проекте 912061453742 (для field-данных).
26. sameAs: добавить GBP, YouTube (сильнейший сигнал для AI-цитирования),
    соцпрофили; завести YouTube-канал с 2–3 роликами.
27. Явно решить по Bytespider (TikTok) в robots.txt.

## Вне кода (авторитет — главный ограничитель роста)

- Позиции 55–85 по небрендовым запросам при нормальном контенте = дефицит ссылок.
  Минимум: Google Business Profile, каталоги UAE (Clutch, GoodFirms, Yellow Pages
  UAE), партнёрские страницы Microsoft/Cisco, 3–5 гостевых публикаций/PR в
  UAE-медиа за квартал.
- После деплоя фиксов — Request Indexing на 8 гайдов (EN+RU) и переобход хаба /articles.
- Контроль: перепроверка GSC Coverage через 2–4 недели («Crawled — not indexed»
  должно уйти с 79 к ~15–20), CrUX через 4–8 недель.
