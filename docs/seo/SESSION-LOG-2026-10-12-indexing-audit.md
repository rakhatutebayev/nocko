# Session log 2026-10-12 — аудит индексации nocko.com

## Факты (GSC URL Inspection API, все 158 URL из sitemap)

| Статус | Кол-во |
|---|---|
| Submitted and indexed | 63 (40%) |
| Crawled – currently not indexed | 72 |
| URL is unknown to Google | 11 |
| Discovered – currently not indexed | 3 |
| Excluded by noindex | 3 (RU-кейсы, обход май) |
| Alternate page / redirect | 6 (RU-статьи, обход 1–9 мая) |

- Sitemap: скачан 26.09, ошибок нет. Главная обходилась 08.10.
- Показы: пик август 3199/мес → с недели 13–20.09 падение вдвое. Деплоев в этот период не было.
- RU-спрос: 2 русских запроса из 421 за 4,5 мес. 92% показов — ОАЭ, EN.

## Что НЕ причина (проверено)
robots.txt, meta robots, canonical, hreflang (есть в HTML — Next пишет `hrefLang`), редиректы http/www/slash (308, цепочек нет), TTFB 0,22 с, объём текста (у непроиндексированных статей слов больше).

## Причины
1. **История смены URL** (git): апрель — pillar + 301; 03.05 — `/ru/articles/*` → 301 на EN; 24–26.05 — noindex 58 статей → переводы, редирект снят; 21.07 — 23 статьи склеены в 8 гайдов. **66 из 81 вердиктов «не в индексе» вынесены до 21.07** по старым версиям страниц. Страницы, которые Google пересканировал в сентябре, проиндексированы — контент проходит, проблема в том, что бот не возвращается.
2. **Слабый домен** (29 ссылающихся доменов) → низкий краул-приоритет, Google держит ~60 страниц.
3. **Sitemap lastmod**: 153 из 158 дат — одно время сборки (массовые коммиты 01.10), Google игнорирует. JSON ещё и устаревал: на Vercel нет git, prebuild молчит.
4. RU-раздел: нет спроса.
5. Перелинковка — второстепенно: у большинства EN-статей уже 2–4 ссылки с проиндексированных страниц; `it-support-monitoring` с 10 такими ссылками не в индексе с мая.

## Второстепенное
- `<html lang="en">` на RU (app/layout.tsx:92), JS-подмена боту не видна.
- Кейсы: зависимость от Strapi → `notFound()` → noindex при сбое (3 noindex в мае); ~250 слов; EN-фолбэки с русским description.
- Сироты: `/ru/locations/abu-dhabi`, `/ru/locations/sharjah`.
- Языковой переключатель на `/ru/articles/centralized-helpdesk-ru` ведёт на EN URL, который 301-ит обратно (RU-only статья).

## Сделано (коммит 2026-10-12)
- `scripts/gen-lastmod.mjs`: коммиты с ≥30 page.tsx считаются массовыми и пропускаются → 12 различных дат вместо 3.
- Блоки `relatedArticles` в гайдах managed-it, cybersecurity, it-amc (EN+RU); дубль в it-consulting-guide заменён 4 статьями кластера.
- `/services/it-support-ru` → ссылка на RU URL helpdesk-статьи; у RU-only статьи убран en-AE hreflang на редирект.
- Сборка `npx next build` OK (`rm -rf .next` падает из песочницы — запускать `next build` напрямую).

## Деплой и первые результаты (12.10, 13:00–13:30 GST)
- Задеплоено на прод (Vercel CLI), live sitemap: 10 URL с датой 12.10, остальные — апрель/июль/октябрь. Sitemap пересабмичен через API (204, lastSubmitted 09:09 UTC).
- Коммит e3fa36e запушен в GitHub.
- Request indexing, день 1: 9 из 10 приняты. `/articles/cloud-banking-uae` **проиндексирована через час** (lastCrawl 09:16 UTC) — метод работает.
- `/articles/it-consulting-roi`: live-тест в GSC упал. Страница в норме (200, index/follow, JSON-LD валиден, TTFB 0,2 с), разовый медленный ответ 1,6 с после деплоя. Повторить запрос позже.

## Второй деплой (12.10, 13:40 GST) — коммит 129cb21, запушен
- EN-фолбэки кейсов Projection/Solus/Scalini: русские description → английские.
- RU-футер: ссылки на /ru/locations/abu-dhabi и /ru/locations/sharjah (были сиротами).
- lastmod пересчитан. Проверено на проде.

## Точка возврата
- Код: всё закоммичено и на проде (main = 129cb21). Незакоммиченных изменений нет.
- Неотслеживаемые файлы в docs/ (ключи Google, отчёты Semrush) — не мои, не коммитить ключи.
- Скрипты проверки лежали в scratchpad сессии (gsc-all.js, crawl.js, gsa.js) — при повторе пересоздать: JWT сервисного аккаунта → URL Inspection API по всем URL из sitemap, группировка по coverageState.
- Состояние задач — claude-mem work_state, список `seo-indexing-2026-10`.

## Дальше
1. ~~Деплой~~ ✅
2. ~~Пересабмит sitemap~~ ✅
3. Ручной Request indexing в GSC, 10 URL/день (день 1 ✅, повторить it-consulting-roi): день 1 — cloud-banking-uae, it-consulting-guide, ru/locations/dubai, it-support-monitoring, it-outsourcing-dubai-cost, data-backup-services-dubai, services/it-support-ru, it-consulting-strategy, it-support-helpdesk, it-consulting-roi; день 2 — it-support-remote, it-support-onsite, cloud-zero-trust, cloud-cost-optimization, managed-it-co-managed, managed-it-infrastructure, it-amc-hardware-lifecycle, it-support-24-7, structured-cabling-fiber-optic, it-consulting-ransomware-survival; день 3 — остальные EN.
4. Заморозить URL на 3–4 месяца.
5. Кейсы: статические данные вместо Strapi, 600+ слов, EN description.
6. `lang` по маршруту через route-группы `(en)`/`(ru)`.
7. Ссылочная масса — план из SESSION-LOG-2026-08-02.
8. Контроль через 2–3 недели: повторить `gsc-all.js` (URL Inspection по sitemap) и сравнить число indexed / даты lastCrawl.
