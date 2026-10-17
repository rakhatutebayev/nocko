# Аудит производительности / Core Web Vitals — https://nocko.com

Дата: 2026-10-17. Источник: PageSpeed Insights v5 (Lighthouse 13, ключ API использован), 6 страниц x mobile/desktop. Сырые JSON лежат рядом: `*_mobile.json`, `*_desktop.json`.

## Итоговая оценка производительности: 96 / 100

Мобильная (основная для Google) средняя 96.8; десктоп 100. Единственная страница с заметной просадкой: `/ru` на мобильном (94, LCP 2.9 с). Все лабораторные CWV в зелёной зоне, кроме `/ru` mobile LCP (2.9 с, "needs improvement").

## Полевые данные (CrUX)

`loadingExperience` и `originLoadingExperience` отсутствуют на всех 12 прогонах: у домена недостаточно трафика Chrome для CrUX. Оценка CWV (p75) по реальным пользователям недоступна; всё ниже — лабораторные данные (симуляция Moto G Power, медленный 4G). INP в лабе не измеряется (нет взаимодействий); ориентир — TBT 0–40 мс, что соответствует хорошему INP.

## Баллы категорий (Perf / A11y / BP / SEO)

| Страница | Mobile | Desktop |
|---|---|---|
| / | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| /ru | **94** / 97 / 100 / 100 | 100 / 97 / 100 / 100 |
| /services/managed-it | 98 / 97 / 100 / 100 | 100 / 97 / 100 / 100 |
| /articles/it-amc-guide | 98 / 99 / 100 / 100 | 100 / 99 / 100 / 100 |
| /locations/dubai | 97 / 99 / 100 / **92** | 100 / 99 / 100 / **92** |
| /case-studies/ransomware-recovery | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

## Лабораторные метрики (mobile)

| Страница | LCP | CLS | TBT | FCP | SI | TTFB (док.) |
|---|---|---|---|---|---|---|
| / | 2.4 с | 0.036 | 20 мс | 1.1 с | 2.9 с | 10 мс |
| /ru | **2.9 с** | 0.010 | 10 мс | 1.4 с | 2.9 с | 10 мс |
| /services/managed-it | 2.4 с | 0.003 | 0 | 1.1 с | 1.2 с | 20 мс |
| /articles/it-amc-guide | 2.3 с | 0.002 | 0 | 1.1 с | 2.5 с | 10 мс |
| /locations/dubai | 2.4 с | 0.002 | 40 мс | 1.1 с | 2.7 с | 20 мс |
| /case-studies/ransomware-recovery | 2.4 с | 0.003 | 30 мс | 1.1 с | 2.5 с | 10 мс |

Desktop: LCP 0.5–0.6 с, CLS 0.001–0.002, TBT 0–20 мс, FCP 0.3 с, SI 0.3–0.6 с на всех страницах.

## TTFB: Бомбей (место запуска curl) vs аудитория ОАЭ

3 замера `time_starttransfer`: `/` = 0.187 / 0.165 / 0.148 с; `/ru` = 0.172 / 0.155 / 0.165 с. Connect ~13 мс. Заголовок `x-vercel-id: bom1::...` — запрос обслужен edge/регионом **bom1 (Mumbai)**, `x-vercel-cache: HIT`, `cache-control: public, max-age=0, must-revalidate`. Замер из Индии близок к ОАЭ (bom1 — ближайший к Персидскому заливу регион Vercel, ~25–40 мс RTT из Дубая), поэтому для аудитории ОАЭ TTFB ожидается ~150–250 мс — в пределах цели (<200 мс на кэш-хите). Проблемы нет. Вторичное замечание: HTML отдаётся с `max-age=0, must-revalidate` — статические страницы можно кэшировать на edge дольше (`s-maxage` + SWR), но HIT уже есть.

## Что изменилось относительно базы 30.09

| Показатель | 30.09 | Сейчас |
|---|---|---|
| Lighthouse | 97–100 | 94–100 (mobile 94–98, desktop 100) |
| PSI mobile | 98–99 | 94–98 (среднее 96.8) |
| LCP mobile | 2.2–2.4 с | 2.3–2.4 с; `/ru` 2.9 с (ухудшение) |
| Контраст `.btn--primary #11c979` | проблема | **не обнаруживается** (исправлено либо не попадает в выборку) |
| Контраст `.header__menu-cta #3474ff` | проблема | не в списке; но тот же цвет `#3474ff` по-прежнему падает на других элементах (см. ниже) |

Итого: общий уровень стабилен, небольшой откат по mobile (~1–2 п.) и регресс на `/ru`. Контрастные проблемы кнопок ушли, но остались у ссылок цвета `#3474ff`.

## Разбор LCP

Элемент LCP везде — `section.hero` (фоновое изображение hero, `hero-bg-xs.webp`, 20 КБ на мобильном; для него есть `<link rel=preload ... fetchpriority=high media=(max-width:480px)>`). Основной вклад даёт не размер файла, а **задержка старта загрузки и отрисовки**:

- `/` : resource load delay 1254 мс, load 415 мс, render delay 121 мс. Hero-изображение начинает грузиться на ~1266 мс — одновременно с 20+ другими preload-ресурсами (logo-white/black.svg, 8 SVG индустрий, 6 SVG клиентов, 11 JS-чанков, шрифт). Всё это конкурирует за канал при симуляции slow-4G.
- `/ru`: element render delay 940 мс (шрифт/кириллица + текст hero), LCP 2.9 с.
- `/locations/dubai`: render delay 1024 мс; `/articles/it-amc-guide`: 1036 мс; `/case-studies/...`: 675 мс — задержка отрисовки после загрузки (блокировка рендера CSS/шрифтом/JS-гидрацией).
- `/services/managed-it`, `/locations/dubai`, `/case-studies/...`: `fetchpriority=high` **не применён** к LCP-ресурсу (на `/` и `/ru` применён).

## Приоритетные исправления

1. **LCP на /ru и общий render delay (высокий эффект: -0.4…0.8 с на /ru, -0.2…0.5 с на остальных).** Проверить, чем блокируется отрисовка hero на `/ru`, `/locations/dubai`, `/articles/it-amc-guide` (render delay 0.9–1.0 с): кириллический/латинский шрифт `e8f2fbee2754df70.p...woff2` (36 КБ, preload есть — проверить subset для кириллицы и `font-display: swap/optional`), CSS-блокировка и гидрация. Рассмотреть inline critical CSS для `.hero`.
2. **Сократить избыточные preload на главной (средний эффект, -0.2…0.4 с LCP mobile).** Удалить `rel=preload as=image` для `logo-white.svg`, `logo-black.svg`, 8 SVG `images/industries/*.svg` (enterprise 14 КБ, finance 21 КБ, manufacturing 21 КБ и др.) и `images/clients/*.svg` — они ниже сгиба и отнимают пропускную способность у `hero-bg-xs.webp`. Оставить preload только hero и шрифта. Один из logo-* предзагружать только нужный по теме.
3. **fetchpriority=high / preload hero на /services/managed-it, /locations/dubai, /case-studies/ransomware-recovery** — применить тот же механизм, что на главной (низкий-средний эффект).
4. **Устаревший JS (legacy-javascript, ~14 КиБ).** Чанк `/_next/static/chunks/981ae20817657409.js` (68 КБ) содержит полифиллы `Array.prototype.at/flat/flatMap` и др. Обновить `browserslist` (современные браузеры) / `target` в Next/Turbopack. Экономия ~14 КиБ.
5. **Неиспользуемый JS (~23–27 КиБ).** Тот же чанк `981ae20817657409.js`: 34% неиспользуемо; est. savings до 150 мс LCP на mobile. Динамический импорт редко используемых компонентов (формы, виджеты), проверить GA/GTM-загрузку (`lazyOnload`/после взаимодействия).
6. **Доступность — контраст `#3474ff`** (ссылки на белом 4.12:1, на `#e0e7ef` 3.31:1; требуется 4.5:1):
   - `/ru`: `a.feature-card__link` («Русскоязычный системный администратор в Дубае»);
   - `/services/managed-it`: `a.service-content-enhanced__link` (4 ссылки на `/articles/...`).
   Затемнить ссылочный цвет до ~`#2457d6`/`#1f4fd1` (>=4.5:1 на белом и `#e0e7ef`). Заодно `label-content-name-mismatch`: у `a.feature-card__link` `aria-label` на русском не содержит видимый текст — привести `aria-label` к видимому тексту.
7. **SEO 92 на /locations/dubai.** Аудит `link-text`: 6 ссылок «Learn More» (на `/services/it-support`, `/structured-cabling`, `/cloud`, `/cybersecurity` и др.). Заменить на описательный текст («Подробнее об IT-поддержке» / «Learn more about cloud services») либо `aria-label`. Выигрыш +8 баллов SEO.
8. **Порядок заголовков (heading-order).** `h4.footer__nav-title` в футере идёт после заголовка не того уровня на `/articles/it-amc-guide` и `/locations/dubai` — сменить на `h2/h3` или `<p>` со стилем. Лёгкое исправление, +1 балл A11y.
9. **Изображения (image-delivery, 10–16 КиБ).** `img.benefits__icon` (50x50, `/services/managed-it`) и аналоги — SVG/WebP нужного размера; логотипы клиентов `images/clients/projection.svg` (14.7 КБ) и `industries/finance.svg`, `manufacturing.svg` (21 КБ) — оптимизировать SVGO (тяжёлые для SVG).
10. **CLS на главной 0.036** (остальные <=0.01) — в норме, но выше остальных; проверить `cls-culprits-insight` для `/` (вероятно подгрузка шрифта/логотипов). Низкий приоритет.
11. **Forced reflow (47–58 мс, unattributed)** на `/ru` и `/locations/dubai` — найти скрипты, читающие layout в цикле (GA/виджеты/слайдеры). Низкий приоритет.

## Best Practices

100 на всех страницах: ошибок консоли, устаревших API и проблем безопасности Lighthouse не обнаружил. Заголовки: HSTS preload, CSP в режиме Report-Only (`content-security-policy-report-only`; CSP не блокирующий — после проверки отчётов перевести в enforce).

## Файлы

- Отчёт: `/private/tmp/claude-501/-Users-rakhat-Documents-1-webhosting-nocko-platform/3ec33f2b-800e-4450-88a2-6b9f334fdb4c/scratchpad/audit/performance/REPORT.md`
- Сырые JSON: тот же каталог (`home_*.json`, `homeru_*.json`, `homeservices_managed-it_*.json`, `homearticles_it-amc-guide_*.json`, `homelocations_dubai_*.json`, `homecase-studies_ransomware-recovery_*.json`).
