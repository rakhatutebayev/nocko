# Алгоритм создания контента (индексируемого Google)

Пошаговая процедура. Выполнять по порядку. Каждый шаг обязателен.
Подробное «почему» по каждому пункту — в `CONTENT-INDEXING-CHECKLIST.md`.

---

## ШАГ 0. Решить, что создаём

1. **Тема из спроса.** Взять запрос из Search Console (Performance) с показами, но низкой позицией,
   или очевидный пробел. База SEMrush для ОАЭ: `ae`.
2. **Проверить дубль.** Не создавать статью/кейс, дублирующий существующий (иначе каннибализация).
   ```bash
   ls apps/website/app/articles | grep <ключевое-слово>
   ```
3. **Задать slug** (латиница, через дефис, с гео при уместности): напр. `cloud-banking-uae`.
4. **Определить категорию** для хлебных крошек и перелинковки:
   cloud → `/services/cloud`, managed-it → `/services/managed-it`,
   cybersecurity → `/services/cybersecurity`, structured-cabling → `/services/structured-cabling`,
   it-support → `/services/it-support`, it-amc → `/services/it-amc`, it-consulting → `/services/it-consulting`.

## ШАГ 1. Создать EN-страницу

Файл: `app/articles/<slug>/page.tsx` (для статьи).
Взять за образец существующую: `app/articles/cloud-migration/page.tsx`.
Обязательно в metadata:
```ts
export const metadata: Metadata = {
  title: '<Заголовок>',                         // БЕЗ "| NOCKO Information Technology" (layout добавит сам)
  description: '<150-160 символов с ключом>',
  alternates: {
    canonical: '/articles/<slug>',              // сам на себя
    languages: {
      'en-AE': '/articles/<slug>',
      'ru-RU': '/ru/articles/<slug>',
    },
  },
  robots: { index: true, follow: true },
};
```
Контент: hero + intro + **3–4 блока** (≈1000+ слов уникального текста) + **3–4 FAQ**.
- Хлебные крошки: каждая промежуточная крошка **с `href`**, последняя — без:
  `[{label:'Home',href:'/'}, {label:'Services',href:'/services'}, {label:'<Категория>',href:'/services/<cat>'}, {label:'<Имя статьи>'}]`
- Внутри текста — **1+ ссылка** на профильную услугу (`/services/<cat>`) и связанный кейс.
- `StructuredData type="Article"`, `HeaderWrapper`, `Footer`, `FAQAccordion`.

## ШАГ 2. Создать RU-страницу (парой, всегда)

Файл: `app/ru/articles/<slug>/page.tsx`. Образец: `app/ru/articles/cloud-migration/page.tsx`.
- Импорты: **`HeaderWrapperRu`**, **`FooterRu`** (не EN-обёртки).
- Весь контент **переведён на русский** (заголовок, интро, блоки, FAQ).
- `openGraph: { locale: 'ru_RU' }`.
- `alternates.canonical: '/ru/articles/<slug>'` + тот же `languages`-блок.
- Крошки: `{label:'Главная',href:'/ru'}, {label:'Услуги',href:'/ru/services'}, {label:'<Категория>',href:'/ru/services/<cat>'}, {label:'<Имя>'}`.
- Ссылки внутри → на `/ru/services/...` и `/ru/case-studies/...`.

## ШАГ 3. Зарегистрировать страницу

1. **Sitemap** `app/sitemap.ts` — добавить slug в **ОБА** массива статей (EN-список и RU-список).
2. **Внутренняя ссылка** — добавить карточку/ссылку на новую страницу с профильной услуги
   (`resources`-массив в `app/services/<cat>/page.tsx` и `app/ru/services/<cat>/page.tsx`).
3. **Только для кейсов:** добавить запись в `lib/data/caseStudies.ts` (`defaultCaseStudies`) —
   иначе кейс не появится на индексе `/case-studies`. И fallback-блоки в
   `app/case-studies/[slug]/page.tsx` **и** `app/ru/case-studies/[slug]/page.tsx`
   (в `generateMetadata` **и** в теле — иначе soft-404 + noindex).

## ШАГ 4. Собрать и проверить сборку

```bash
cd apps/website
npx next build > /tmp/build.log 2>&1; echo "EXIT: $?"
grep -iE "error occurred|prerender-error|is not a function|failed" /tmp/build.log || echo "OK: пререндер чистый"
grep -E "/articles/<slug>" /tmp/build.log        # должна появиться в списке роутов
```
Не деплоить, пока `EXIT: 0` и нет ошибок пререндера.
(Данные держать в обычных модулях `lib/...`, НЕ импортировать массивы из `'use client'`-компонентов в server-страницы.)

## ШАГ 5. Закоммитить и задеплоить

```bash
cd /Users/rakhat/Documents/webhosting/nocko-platform
git add apps/website/app/articles/<slug> apps/website/app/ru/articles/<slug> apps/website/app/sitemap.ts <прочие изменённые>
git commit -m "feat(articles): add <slug> (EN+RU)"
git push origin main
# деплой Vercel CLI (токен в .env):
export VERCEL_TOKEN=$(grep -E '^VERCEL_TOKEN=' .env | cut -d= -f2-)
npx vercel --prod --yes --token="$VERCEL_TOKEN"
```
> Все файлы должны попасть в git (не только на прод через CLI).

## ШАГ 6. Проверить на проде

```bash
for U in "articles/<slug>" "ru/articles/<slug>"; do
  echo "== /$U =="
  curl -s -o /dev/null -w "HTTP %{http_code}\n" -A "Mozilla/5.0" "https://nocko.com/$U"
  H=$(curl -s -A "Mozilla/5.0" "https://nocko.com/$U?v=$(date +%s)")
  echo "$H" | grep -oiE 'noindex' && echo "⛔ NOINDEX" || echo "✅ нет noindex"
  echo "$H" | grep -oE '<link rel="canonical" href="[^"]*"'
  echo "$H" | grep -oE '<title>[^<]*</title>'
done
curl -s "https://nocko.com/sitemap.xml" | grep -E "/(ru/)?articles/<slug>"
```
Ждём: **200**, нет noindex, canonical сам на себя (`/ru/...` у RU), title без двойного бренда, оба URL в sitemap.

## ШАГ 7. Search Console

1. URL Inspection → **Test Live URL** → «Page can be indexed», Indexing allowed: Yes.
2. **Request Indexing** для EN и RU URL.
3. Ждать обхода (дни–недели). Прохождение теста ≠ гарантия индексации.

---

### Definition of Done (страница готова)
✅ EN+RU созданы · ✅ self-canonical + hreflang · ✅ robots index/follow ·
✅ в sitemap (оба списка) · ✅ есть входящая внутренняя ссылка · ✅ крошки валидны ·
✅ ~1000+ слов, тема=URL=H1 · ✅ сборка EXIT 0 · ✅ закоммичено · ✅ на проде 200/без noindex · ✅ Request Indexing отправлен.
