# Журнал работ — 2026-07-21

Всё выполнено и задеплоено на прод (nocko.com) в этот день. Коммиты: `74ce373` → `bfd0…` (см. git log за 2026-07-21).

## 1. Диагностика «Crawled — currently not indexed» (79 страниц в GSC)

- Через GSC URL Inspection API подтверждено: технических блокировок нет — фильтр качества Google.
- Причина: 36 статей-перестановок ключевиков по ~500 слов + разорванная внутренняя перелинковка.
- План: `docs/seo/CONSOLIDATION-PLAN-ARTICLES-2026-07-21.md`.

## 2. Консолидация статей (коммит 74ce373)

- 62 статьи → 40: 23 тонких статьи удалены (EN+RU), контент влит в 8 pillar-страниц
  по 1 900–3 000 слов: **it-amc-guide** (новая), cybersecurity-guide,
  managed-it-services-guide, it-support-guide, it-support-monitoring (поглотила
  3 каннибализирующих статьи о мониторинге), cloud-infrastructure-guide,
  cloud-migration, it-consulting-strategy.
- 46 редиректов 301 (23×EN + 23×RU) в `next.config.ts` (генерируются из карты).
- Sitemap и внутренние ссылки (16 файлов) обновлены.

## 3. Полный SEO-аудит (9 параллельных специалистов)

- Health Score: **72/100**. Отчёты: `FULL-AUDIT-REPORT-2026-07-21.md`, `ACTION-PLAN-2026-07-21.md`.
- Главные выводы: разорвана дискавери-цепочка (хаб /articles показывал 18/40 статей),
  дефицит авторитета домена (5 кликов/28 дней, позиции 55–85), баги schema.

## 4. Исправления по аудиту (коммит a3834e6)

- Хаб `/articles`: все 40 статей (списки генерируются в `lib/data/staticArticles*.json`);
  создан RU-хаб `/ru/articles`; главная ссылается на все 8 гайдов.
- Цены AMC согласованы EN+RU: AED 75–190/пользователь/мес ⇔ AED 18–45 тыс./год (20–50 польз.).
- hreflang: главная + все services; `x-default` на 108 страницах.
- Тайтлы: убран двойной бренд в 61 файле; RU-главная сокращена.
- Schema: один LocalBusiness (был конфликтный дубль), исправлен SSR-баг
  `components/seo/Breadcrumbs.tsx` (window.location → опущен item у последней крошки),
  удалены 20 ручных дублей BreadcrumbList, Service JSON-LD на 14 сервисных страницах.
- LCP: preload hero-фона (4 брейкпоинта, fetchpriority=high); 8 картинок индустрий
  PNG ~1 МБ → WebP 13–26 КБ. PageSpeed после: mobile 97–98, desktop 100, LCP 2.4 s.
- llms.txt: добавлена секция Guides.

## 5. Контактная форма

- **Найдена поломка:** SendGrid на Vercel исчерпал кредиты (451 Maximum credits
  exceeded) — заявки терялись. SMTP переключён на Gmail (Nocko.it@gmail.com,
  app-пароль из корневого .env). Проверено боевым тестом.
- **Антибот:** обязательный recaptchaToken при заданном RECAPTCHA_SECRET
  (раньше бот мог пропустить проверку, не прислав токен) + минимальное время
  заполнения 3 с (`formStartedAt` из обеих форм). Проверено: бот-POST → 400, человек → 200.
- Тема письма: `[nocko.com] New website enquiry — {имя}`.
- Получатели: `CONTACT_RECIPIENTS = info@nocko.com, it.nocko@gmail.com` (было настроено).
- reCAPTCHA v3 НЕ настроена (нет ключей) — для полной защиты создать ключи на
  google.com/recaptcha/admin и передать для интеграции.

## 6. Мобильная адаптивность (аудит 80/100 + фиксы)

- Проверено 8 страниц × 3 ширины (390/360/320) Playwright'ом, скриншоты.
- Фиксы: WhatsApp/cookie-кнопки скрываются при фокусе на полях формы и при
  открытой модалке (чистый CSS `:has`; важно — у фабов entry-анимация с
  fill-mode:forwards перебивала opacity, потребовался `animation:none` +
  `visibility:hidden`); RU-футер — flex-wrap (обрезался на 320px);
  hero stat-label 10.4px → 12px.
- Формы: поля 16px (нет iOS-автозума), тап-таргеты 46–52px, модалка и меню работают.

## Осталось (за владельцем)

1. **Request Indexing в GSC** для 8 гайдов (EN+RU) + `/articles` + `/ru/articles`.
2. Проверить входящие **info@nocko.com** — дошли ли тестовые письма (доставка с Gmail SMTP).
3. Ключи reCAPTCHA v3 → передать для интеграции.
4. Трастовые сигналы: реальные номера сертификатов, логотипы клиентов, именные
   авторы (Person schema) — данные может дать только компания.
5. Внешние ссылки: GBP, Clutch/GoodFirms, каталоги UAE, партнёрские бейджи —
   главный ограничитель роста позиций (сейчас 55–85 по небрендовым).
6. Через 2–4 недели: перепроверить GSC Coverage (цель: «Crawled — not indexed»
   79 → ~15–20) и позиции. Команда: «проверь индексацию».
7. На реальном iPhone проверить, что кнопка отправки формы видна при открытой клавиатуре.

## Инфраструктура / доступы (для будущих сессий)

- GSC API: сервис-аккаунт `claude@durable-ring-480915-t0.iam.gserviceaccount.com`
  (ключ `docs/durable-ring-480915-t0-…json`, read-only в GSC; sitemap submit → 403).
  Токен: JWT вручную + `openssl dgst -sha256 -sign` (google-библиотек на машине нет).
- PageSpeed API-ключ: `~/.config/claude-seo/google-api.json`. CrUX API для этого
  GCP-проекта не включён (403) — включить при необходимости field-данных.
- Deploy: `npx vercel --prod --yes --token=$VERCEL_TOKEN` (токен в корневом .env);
  GitHub-автодеплой не срабатывает.
- Playwright chromium установлен в `~/Library/Caches/ms-playwright`.
