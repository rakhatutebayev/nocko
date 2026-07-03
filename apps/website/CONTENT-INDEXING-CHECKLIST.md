# Чек-лист индексации контента (Google)

Что проверять при создании **любой** новой страницы (статья, кейс, услуга, локация),
чтобы Google её проиндексировал. Каждый пункт — из реальной проблемы, найденной в GSC.

> Быстрое правило: страница индексируется, только если она одновременно
> **доступна (200)**, **не заблокирована**, **каноническая сама на себя**,
> **уникальна**, **достаточной глубины** и **на неё есть внутренние ссылки + она в sitemap**.

---

## 1. Метаданные (в каждом `page.tsx`)

- [ ] **`robots: { index: true, follow: true }`** — явно разрешить индексацию.
- [ ] **Self-canonical** — `alternates.canonical` указывает на **саму себя**, а не на другой язык/страницу.
  - ❌ Баг: RU-страницы `industries/*` имели `canonical: '/industries/x'` (EN) → Google не индексировал их как «Alternate page with proper canonical tag».
  - ✅ RU: `canonical: '/ru/...'`, EN: `canonical: '/...'`.
- [ ] **Title без дубля бренда.** Root-layout добавляет `%s | NOCKO Information Technology`.
  - ❌ Не писать `title: 'X | NOCKO Information Technology'` → получится двойной хвост.
  - ✅ Писать `title: 'X'` или `title: 'X | NOCKO UAE'`.
- [ ] Description ~150–160 символов, с целевым ключом.

## 2. Двуязычность (EN + RU всегда парой)

- [ ] Создать **обе** версии: `app/<path>` и `app/ru/<path>`.
- [ ] **Bidirectional hreflang** на обеих:
  ```ts
  alternates: {
    canonical: '/ru/articles/x',          // сама на себя
    languages: {
      'en-AE': '/articles/x',
      'ru-RU': '/ru/articles/x',
    },
  }
  ```
- [ ] **RU-контент реально на русском** (заголовок, интро, блоки, FAQ), не английский.
  - ❌ Баг: RU-industries и часть RU-кейсов были на английском.
- [ ] RU-страница импортирует **`HeaderWrapperRu` / `FooterRu`**, а не EN-обёртки.
- [ ] `openGraph.locale: 'ru_RU'` на RU-страницах.

## 3. Sitemap (`app/sitemap.ts`)

- [ ] Добавить слаг в **оба** списка — EN и RU (это два отдельных массива).
  - ❌ Баг: `/ru/terms`, `/ru/case-studies`, RU-локации отсутствовали → «No referring sitemaps detected».
- [ ] Проверить в живом `sitemap.xml` после деплоя.

## 4. Хлебные крошки (`Breadcrumbs`)

- [ ] У **каждой промежуточной** крошки есть `href` (только у последней можно без).
  - ❌ Баг: `{ label: 'Cybersecurity' }` без href → «1 invalid item» в Breadcrumbs (нет обязательного `item`).
  - ✅ `{ label: 'Cybersecurity', href: '/services/cybersecurity' }`.
- [ ] RU-крошки: `Home → Главная (href: '/ru')`, категории на `/ru/...`.

## 5. Нет soft-404 (динамические роуты `[slug]`)

- [ ] Если страница рендерится через fallback (`if (!caseStudy && slug === 'x')`), добавить блок
      **и в `generateMetadata`, и в теле компонента** — иначе `notFound()` отдаёт 404-страницу
      с `noindex` под статусом 200 (soft-404).
  - ❌ Баг: `/ru/case-studies/it-consulting` отдавал «Excluded by noindex tag».
- [ ] EN и RU наборы fallback-слагов должны **совпадать**.

## 6. Внутренние ссылки (не «сирота»)

- [ ] На новую страницу должна вести **минимум 1 контекстная ссылка** с «сильной» страницы
      (услуга/хаб/связанная статья). Sitemap ≠ внутренняя ссылка.
  - ❌ Баг: `cybersecurity-protection` был орфаном → «Crawled – currently not indexed».
- [ ] Новые **кейсы** добавить в `lib/data/caseStudies.ts` (`defaultCaseStudies`), иначе их не будет на индексе `/case-studies`.
- [ ] Новые **статьи/кейсы** слинковать с профильной услугой (`resources`-массив сервисной страницы).

## 7. Качество / глубина

- [ ] Не тонкий контент: цель ~**1000+ слов** уникального текста (не копия другой страницы).
  - ❌ Баг: статья 755 слов не индексировалась; после расширения до 1250 — ок.
- [ ] Title ↔ URL ↔ H1 ↔ контент про **одно и то же** (без рассинхрона темы и слага).
- [ ] Structured data: `Article` (статьи), `BreadcrumbList`, `FAQPage` (если есть FAQ).

## 8. Не блокировать рендер-ресурсы

- [ ] `robots.txt` (`app/robots.ts`) **не должен** блокировать `/_next/static/...` (JS/CSS/шрифты).
  - ❌ Баг: `Disallow: /_next/static/chunks/` → Google не мог отрендерить страницы («11/13 resources blocked»).
  - ✅ Блокировать только `/api/`, `/admin/`.

## 9. Git + деплой

- [ ] **Закоммитить файлы в git** (`git add <путь>`), а не только выкатить через CLI.
  - ❌ Баг: RU-локации были untracked — жили на проде только из-за CLI-деплоя, в репо отсутствовали.
- [ ] Собрать из **правильной директории**: `cd apps/website && npx next build` (или Vercel через `vercel.json`).
- [ ] Проверить сборку до деплоя: `EXIT CODE: 0`, нет `Error occurred prerendering`.
  - ❌ Баг: импорт данных из `'use client'`-компонента в server-страницу → `map is not a function` на пререндере.
    Данные держать в **обычном** модуле (`lib/data/...`), не в client-компоненте.

## 10. После деплоя (Search Console)

- [ ] Прогнать быстрый чек (см. ниже).
- [ ] **URL Inspection → Test Live URL** → должно быть «Page can be indexed», Indexing allowed: Yes.
- [ ] **Request Indexing** для приоритетных URL.
- [ ] Учитывать: прохождение теста **не гарантирует** индексацию; обход занимает дни–недели.

---

## Быстрая проверка на проде (скопировать)

```bash
U="articles/твой-слаг"   # без ведущего слэша
curl -s -o /dev/null -w "HTTP %{http_code}\n" -A "Mozilla/5.0" "https://nocko.com/$U"
H=$(curl -s -A "Mozilla/5.0" "https://nocko.com/$U?v=$(date +%s)")
echo "$H" | grep -oiE 'noindex' && echo "⛔ NOINDEX!" || echo "✅ нет noindex"
echo "$H" | grep -oE '<link rel="canonical" href="[^"]*"'      # должен быть сам на себя
echo "$H" | grep -oE '<title>[^<]*</title>'                    # без двойного бренд-хвоста
curl -s "https://nocko.com/sitemap.xml" | grep -c "/$U"        # 1 = в sitemap
```

Всё зелёное (200 + нет noindex + self-canonical + в sitemap + есть внутренняя ссылка) → готово к Request Indexing.
