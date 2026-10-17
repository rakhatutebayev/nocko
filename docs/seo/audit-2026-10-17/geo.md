# GEO / AI Search Readiness: nocko.com (аудит 2026-10-17)

## Итог: AI Search Readiness = 64 / 100

| Измерение | Вес | Балл (0-100) | Вклад |
|---|---|---|---|
| Citability (пассажи, факты) | 25% | 62 | 15.5 |
| Structural Readability | 20% | 70 | 14.0 |
| Multi-Modal (таблицы, видео, схемы) | 15% | 30 | 4.5 |
| Authority & Brand (E-E-A-T, сущность) | 20% | 55 | 11.0 |
| Technical Accessibility | 20% | 95 | 19.0 |
| **Сумма** | | | **64** |

Технически сайт в топ-десятке по готовности для ИИ-краулеров, слабость: контент-факты, бренд-сущность вне сайта и отсутствие таблиц/видео.

Ограничение аудита: поиск (Google, DDG, Bing через WebFetch) отдал капчу/пустую выдачу, WebSearch недоступен. Пункты 5-6 (внешние профили, присутствие в выдаче "best managed IT Dubai" и "русскоязычная IT компания в Дубае", конкуренты) НЕ проверены; нужно сделать вручную или через DataForSEO. Wikipedia: статьи про NOCKO нет (поиск по API: 0 релевантных). Wikidata: есть только несвязанная запись "Nocko" (Q134991404), сущности компании нет.

## 1. robots.txt и ИИ-краулеры

| Бот | Статус |
|---|---|
| GPTBot, OAI-SearchBot, ChatGPT-User | разрешены |
| ClaudeBot, Claude-SearchBot | разрешены |
| PerplexityBot, Perplexity-User | разрешены |
| Google-Extended, Applebot-Extended | разрешены |
| CCBot, anthropic-ai, cohere-ai | закрыты |
| meta-externalagent, Bytespider | закрыты |

Оценка блокировок:
- Блок только обучения (CCBot, anthropic-ai, cohere-ai, Bytespider) не влияет на цитирование в ИИ-поиске: retrieval-боты (OAI-SearchBot, Claude-SearchBot, PerplexityBot) открыты. anthropic-ai это устаревший токен, реальный краулер ClaudeBot открыт, так что блок практически декоративен.
- CCBot: Common Crawl питает обучающие корпуса многих LLM. Закрытие снижает шанс попасть в параметрическую память моделей ("знают бренд без поиска"). Для малого B2B-бренда с задачей узнаваемости это скорее минус, чем защита. Рекомендация: открыть CCBot (риск мал: контент и так публичный и лицензирован RSL), если политика "не для обучения" не принципиальна. Если принципиальна, оставить, но тогда осознанно.
- meta-externalagent: питает Meta AI (включая ответы в WhatsApp, на который сайт делает ставку для лидов). Рекомендация: открыть. Выигрыш реальный (WhatsApp/Meta AI в ОАЭ), потери нет.
- Рекомендация итого: открыть meta-externalagent и CCBot; cohere-ai, Bytespider, anthropic-ai оставить закрытыми.
- Мелочь: у GPTBot и др. нет `Disallow: /api/`, `/admin/` (группы без правил наследуют только свою группу). Добавить, иначе боты могут бить по /api/.

## 2. llms.txt

- Присутствует, 200, структура соответствует спеку: H1, blockquote, H2-секции со ссылками и описаниями, EN+RU. Все ~45 ссылок отдают 200 (проверено curl -L). Хорошо.
- llms-full.txt существует (200, ~14 000 слов, 5 pillar-гайдов), на него ссылается секция About.
- Замечания: (a) нет секции `## Optional` (по спеку для второстепенного, что можно пропустить при нехватке контекста; сюда стоит перенести RU-блок, RSS, лицензию); (b) блок "About" это проза без ссылок, лучше факт-лист; (c) нет ссылок на /locations/*, google-workspace-vs-microsoft-365, case studies деталей; (d) нет фактов: год основания, лицензия, цены; (e) описания ссылок описательные, а не ответные; (f) раздел Licensing нестандартный, но безвреден.
- Черновик: `/private/tmp/claude-501/-Users-rakhat-Documents-1-webhosting-nocko-platform/3ec33f2b-800e-4450-88a2-6b9f334fdb4c/scratchpad/audit/geo/llms.proposed.txt` (плейсхолдер "Key facts" заполнить реальными данными; URL Abu Dhabi/Sharjah проверить).
- RSL: /.well-known/rsl.xml 200, корректная двойная лицензия (поиск/summarize бесплатно с атрибуцией, обучение по запросу). Сильное преимущество. Проверить, что robots.txt содержит строку `License:` на RSL (сейчас нет): добавить `License: https://nocko.com/.well-known/rsl.xml`.

## 3. SSR / рендеринг

Сырой HTML (curl, без JS) полный: размер 380-423 КБ на страницу; текст без script/style: / ≈ 2941 слов, /services/managed-it 2036, it-amc-guide 1717, it-amc-vs-msp 1952, gw-vs-m365 1629, managed-it-services-guide 1647, locations/dubai 2101, about 1604. H1, H2, FAQ (в разметке и JSON-LD), список услуг, отрасли присутствуют без JS. Нет hreflang-проблем (en-AE / ru-RU / x-default). Вердикт: SSR OK, блокеров для GPTBot/ClaudeBot/PerplexityBot нет.
Замечание: 400 КБ HTML это много (вероятно встроенный RSC-payload); не критично, но сжать снижает риск усечения краулерами с лимитом ~1 МБ (пока запас есть).
На /services/managed-it нет цен в AED вообще (только 2 упоминания "AED"), блок "industries" не выделен.

## 4. Цитируемость по страницам (0-10)

| Страница | Прямой ответ ≤60 слов под H1 | Определение "X is" | Нумерация/шаги | Таблица | FAQ (ответы) | Цифры (AED/SLA) | Дата обновления | Балл |
|---|---|---|---|---|---|---|---|---|
| /services/managed-it | да, 45 слов ("NOCKO is a Dubai-based MSP...") | да (про NOCKO, не про MSP) | нет | нет | 9 Q&A, 40-61 слов, FAQPage | почти нет (2x AED) | нет | 6 |
| /articles/it-amc-guide | нет: подзаголовок 27 сл., определение AMC 143 слова (чуть длинно, но самодостаточно) | да (AMC) | 8 нумерованных H2 | нет | 5 Q&A 42-61 сл. | 19x AED, SLA-уровни | dateModified 2026-07-21 только в схеме, на странице не видно | 8 |
| /articles/it-amc-vs-msp | частично: вступление 65 слов, без определения и ответа "что выбрать" | слабо | нет | нет (идеальный кандидат) | нет FAQ, нет FAQPage | почти нет (SLA 4-8 ч) | dateModified 2025-07-02 (устарело на 15 мес.) | 5 |
| /articles/google-workspace-vs-microsoft-365 | нет: 86 слов вводного, без вердикта | слабо | нет | нет | 4 Q&A 35-48 сл. | нет цен вообще | dM 2026-07-04, не видно | 5 |
| /articles/managed-it-services-guide | вступление 129 слов, ответ в 2-м абзаце (42 слова, ок) | да ("What Are Managed IT Services?") | 9 нумерованных H2 | нет | 5 Q&A 30-39 сл. (идеально) | 18x AED | видно "Published 17 Mar 2025, Updated 21 Jul 2026" | 8 |
| /locations/dubai | нет, 27-сл. слоган, затем 90 слов нарратива | нет | 1 ol | нет | нет FAQ, нет FAQPage | нет цен/SLA | нет; нет Article-схемы | 4 |

Общее: ни одной сравнительной таблицы на 6 страницах (ноль `<table>`), ни одного видео/YouTube. Заголовки H2 почти не в форме вопросов (кроме 0-2 на страницу). Автор только Organization (нет персоны с экспертизой).

## 5. Бренд и сущность

- Название консистентно: "NOCKO Information Technology" в схеме, футере (© 2026), llms.txt. Адрес и телефон (+971542448888) одинаковы в схеме и llms.txt.
- Пробелы: нет юридического названия/номера торговой лицензии, нет года основания (founded/foundingDate), нет Person-схемы основателя/инженеров, нет сертификатов/партнёрств в видимом тексте (about: ни Microsoft, ни Dell, ни Cisco). Часы работы в схеме 09-18 при заявленном 24/7: пояснить.
- sameAs: только LinkedIn (https://www.linkedin.com/company/it-nocko/). Нет Google Business Profile, Clutch, GoodFirms, Crunchbase, Microsoft Partner Center, Facebook/Instagram/YouTube, WhatsApp-канала.
- Проверить вручную: наличие GBP с отзывами, Clutch/GoodFirms/Sortlist, Reddit (r/dubai, r/UAE), YouTube. По данным корреляции (YouTube ~0.74, Reddit, Wikipedia) внешние упоминания важнее бэклинков; у сайта на странице YouTube-ссылок нет.
- Wikipedia/Wikidata: отсутствуют; Wikipedia недостижима по критериям значимости, а вот Wikidata-элемент для компании создать реально (после появления 2-3 независимых источников).

## 6. Видимость в поиске
Не проверено (капча/нет выдачи). Следующий шаг: прогнать запросы в ChatGPT/Perplexity/Google AIO вручную или DataForSEO (ai_optimization_chat_gpt_scraper, ai_opt_llm_ment_search): "best managed IT services providers in Dubai", "русскоязычная IT компания в Дубае", "IT AMC cost Dubai". Ожидание: в англоязычных "best MSP Dubai" листингах цитируются каталоги (Clutch, Sortlist, GoodFirms), поэтому отсутствие профилей там главный барьер.

## 7. Свежесть
- Видимая дата обновления есть только на managed-it-services-guide. На остальных страницах нет.
- dateModified в схеме: it-amc-guide 2026-07-21, managed-it 2026-07-21, gw-vs-m365 2026-07-04, it-amc-vs-msp 2025-07-02. Нет dateModified у /services/*, /locations/*.
- sitemap.xml: 158 URL; 45 URL с одинаковым lastmod 2026-04-27T03:29:32, ещё десятки с общими штампами (2026-10-12T09:31:31 x14, 2026-07-03T20:56:29 x14, 2026-10-01 x17...): это даты деплоя, а не реальных правок. Google/Bing научатся игнорировать lastmod.
- RSS: /rss.xml существует (40 items, en-AE), /feed.xml 404 (не критично). pubDate это те же штампы деплоя (4 статьи с 12 окт 2026 и т.д.), а не даты публикации. Нет `<link rel="alternate" type="application/rss+xml">` в head (в head только hreflang).

## Платформы

| Платформа | Балл | Комментарий |
|---|---|---|
| Google AI Overviews | 68 | SSR, FAQPage, Article схемы есть; не хватает таблиц, дат, GBP/отзывов |
| ChatGPT (Search) | 72 | боты открыты, llms.txt; нужны упоминания на сторонних ресурсах |
| Perplexity | 74 | PerplexityBot открыт, прямые пассажи; нужна свежесть и цитируемые цифры |
| Bing Copilot | 62 | нет Bing Webmaster/IndexNow (не проверено), нет внешних профилей |

## Топ-приоритеты

1. Создать внешние профили и sameAs (GBP, Clutch, GoodFirms, Crunchbase, Microsoft Partner, YouTube-канал) и добавить в Organization.sameAs; foundingDate, legalName, vatID/license, founder Person. Усилие: 1-2 дня + сбор отзывов; эффект: самый высокий (бренд-сигналы).
2. Добавить в каждую статью/услугу "answer capsule" 40-60 слов сразу под H1 с определением и ключевой цифрой, плюс сравнительную таблицу (AMC vs MSP, GWS vs M365, тарифы AED/пользователь) и видимую строку "Updated <date>". Усилие: 1-2 дня на 6 страниц; эффект: высокий (Citability, Multi-modal).
3. Добавить FAQ + FAQPage на /articles/it-amc-vs-msp и /locations/dubai (и другие локации), цены/SLA в минутах на /services/managed-it. Усилие: полдня.
4. Открыть meta-externalagent и CCBot, добавить Disallow для /api/,/admin/ во все группы, строку `License:` с RSL. Усилие: 15 минут.
5. Привести lastmod/dateModified/RSS pubDate к реальным датам правок контента (не деплоя), добавить dateModified в услуги и локации, `<link rel="alternate" type="application/rss+xml">`, обновить it-amc-vs-msp (2025). Заменить llms.txt на черновик (Optional, факты). Усилие: 0.5-1 день.
Дальше: 2-3 видео на YouTube (разбор AMC vs MSP, разбор цен) с встраиванием; авторские профили инженеров; присутствие в Reddit/LinkedIn.

Файлы: `/private/tmp/claude-501/-Users-rakhat-Documents-1-webhosting-nocko-platform/3ec33f2b-800e-4450-88a2-6b9f334fdb4c/scratchpad/audit/geo/REPORT.md`, `.../geo/llms.proposed.txt`, сырые данные в `.../geo/raw/`.
