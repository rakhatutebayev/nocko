# Аудит структурированных данных nocko.com

Дата: 2026-10-17. Метод: curl живого HTML, извлечение всех `<script type="application/ld+json">`, разбор в node. Сырой JSON-LD по каждой странице: `raw/*.jsonld.json`, HTML: `html/`, сводка: `summary.json`, статусы картинок: `imgstatus.json` (все в `/private/tmp/claude-501/-Users-rakhat-Documents-1-webhosting-nocko-platform/3ec33f2b-800e-4450-88a2-6b9f334fdb4c/scratchpad/audit/schema/`).

Общий вывод: по сравнению с прошлым аудитом основные проблемы исправлены (logo и og-image отдают 200, дублей Organization/LocalBusiness на одной странице нет, второго FAQPage на /about нет, /industries/* теперь WebPage, а не Article). Остались: слабые Article/Service, неверные данные в LocalBusiness для Sharjah и Dubai, пустой streetAddress, битые элементы BreadcrumbList, несоответствие `html lang` на RU-страницах, нет `@id` у второстепенных сущностей.

## 1. Типы по страницам

Во всех JSON-LD блоках `@context` равен `https://schema.org`, все JSON валидно парсятся (ошибок парсинга 0). Базовый граф `[Organization, ProfessionalService] #organization` + `WebSite #website` присутствует на каждой странице (в таблице обозначен как "База").

| Страница | Статус | Блоков | Типы сверх базы |
|---|---|---|---|
| / | 200 | 1 | только база |
| /ru | 200 | 1 | только база (описание на английском) |
| /about | 200 | 3 | BreadcrumbList (2), FAQPage (5 Q) |
| /services | 200 | 3 | BreadcrumbList (2), ItemList (7) |
| /services/managed-it | 200 | 4 | Service, BreadcrumbList (3), FAQPage (7 Q) |
| /services/it-amc | 200 | 4 | Service, BreadcrumbList (3), FAQPage (7 Q) |
| /services/it-support | 200 | 4 | Service, BreadcrumbList (3), FAQPage (6 Q) |
| /services/cloud | 200 | 4 | Service, BreadcrumbList (3), FAQPage (8 Q) |
| /articles/it-amc-guide | 200 | 4 | Article, BreadcrumbList (4), FAQPage (5 Q) |
| /articles/google-workspace-vs-microsoft-365 | 200 | 4 | Article, BreadcrumbList (4), FAQPage (4 Q) |
| /ru/articles/managed-it-services-guide | 200 | 4 | Article, BreadcrumbList (4), FAQPage (4 Q) |
| /case-studies | 200 | 1 | только база (нет ItemList/CollectionPage, нет BreadcrumbList) |
| /case-studies/ransomware-recovery | 200 | 2 | Article (нет BreadcrumbList) |
| /locations/dubai | 200 | 3 | LocalBusiness (#localbusiness), BreadcrumbList (3) |
| /locations/sharjah | 200 | 3 | LocalBusiness, BreadcrumbList (3) |
| /ru/locations/dubai | 200 | 3 | LocalBusiness, BreadcrumbList (3) |
| /industries/healthcare, /ru/industries/healthcare, /industries/government | 200 | 3 | WebPage, BreadcrumbList (3) |
| /contact | 200 | 3 | BreadcrumbList (2), ContactPage + вложенный Organization без @id |
| /faq | 404 | 1 | страницы нет (отдаётся только база на 404-шаблоне) |

Число FAQ-вопросов в разметке 4-8 (в таблице количество Q).

## 2. Дубли сущностей и @id

Положительное:
- Один главный узел `https://nocko.com/#organization` с типом `["Organization","ProfessionalService"]` и `WebSite #website` с `publisher` на него. Это правильный паттерн.
- `Service.provider` ссылается на `{"@id": "https://nocko.com/#organization"}`; `LocalBusiness.parentOrganization` тоже; `WebPage.isPartOf` / `about` тоже.
- Дублей FAQPage на /about нет (1 блок). Дублей Organization на главной нет.

Проблемы:
- Article: `publisher` объявлен как `{"@type":"Organization","@id":"https://nocko.com/#organization","name","logo"}`, то есть повторно переопределяет сущность с тем же `@id` частично (в итоге два описания Organization на странице: полное в базе и сокращённое здесь). Безопаснее оставить только `{"@id": ...}`. `author` - отдельный Organization без `@id` и без `url` (третий безымянный по id узел).
- /contact: `ContactPage.mainEntity` - новый Organization без `@id` (дубль организации с урезанными полями). Заменить на `{"@id":".../#organization"}`.
- Локации: `LocalBusiness` с `@id` вида `/locations/dubai#localbusiness` существует рядом с головным Organization, в Organization нет ссылки на подразделения (`department`/`subOrganization`). Для /ru/locations/dubai свой отдельный `@id` (`/ru/locations/dubai#localbusiness`) - то есть один и тот же офис описан двумя разными сущностями (EN и RU). Лучше один `@id` на офис.
- В базе на каждой странице повторяется весь граф (~3 КБ). Это допустимо, но лучше выводить полный Organization на главной, а на внутренних оставлять ссылки по `@id` (Google читает по странице, поэтому главное - чтобы `@id` совпадал, а полные данные оставались хотя бы на главной и /about, /contact).
- У Service, ItemList, WebPage, Article нет собственных `@id`, поэтому на них нельзя сослаться из других узлов.

## 3. Обязательные и рекомендованные свойства

### Organization / ProfessionalService (база)
Есть: name, alternateName, url, logo (ImageObject 512x512), image, description, telephone, email, address, geo, areaServed, openingHoursSpecification, contactPoint, sameAs.
Замечания:
- sameAs: только LinkedIn. Добавить Facebook/Instagram/X/YouTube, Google Business Profile (URL maps), Clutch и т.д., если существуют.
- Нет `priceRange` в базе (есть только на LocalBusiness страниц локаций) - у ProfessionalService это рекомендуемое поле.
- Нет `foundingDate`, `legalName`, `taxID`/`vatID`, `hasMap`, `knowsAbout`, `hasOfferCatalog`.
- Адрес: `Office R20-42, Wavez Residence, Wadi Al Safa 2` - нет `postalCode` (в ОАЭ индексов нет, допустимо). Координаты 25.0785, 55.2708 одинаковые для всех локаций.
- `openingHoursSpecification` Пн-Пт 09:00-18:00, а contactPoint заявляет 24/7: нормально, но на странице должно быть то же (24/7 NOC). Проверить согласованность с видимым текстом.
- Для Google это Warning-уровень, не Error: для Local business нет требуемых полей кроме address и name.

### Article (3 страницы)
| Поле | /articles/it-amc-guide | /ru/articles/managed-it | /case-studies/ransomware |
|---|---|---|---|
| headline | да | да | да |
| image | есть, всегда общий og-image.jpg 1200x630 | то же | то же |
| datePublished | 2026-07-21 (только дата) | 2025-03-17 | `2025-09-03T00:00:00.000Z` |
| dateModified | равна datePublished (подозрительно) | 2026-07-21 | равна datePublished |
| author | Organization, без url | то же | то же |
| mainEntityOfPage | нет | нет | нет |
| description | нет | нет | есть, но это цитата клиента в кавычках |
| inLanguage | нет | нет (страница RU) | нет |

Для Google ошибок нет (Article не имеет обязательных полей), но предупреждения/рекомендации: автор должен быть Person (или Organization) с `url` - Google рекомендует `author.url`; даты желательно с часовым поясом (`2026-07-21T09:00:00+04:00`); общий og-image на все статьи снижает ценность; нет `mainEntityOfPage`, `description`, `inLanguage`, `wordCount`/`articleSection` (необязательно). Тип для кейса лучше `Article` с `about`, либо `BlogPosting` для статей. `case-studies/ransomware-recovery` не имеет BreadcrumbList.

### FAQPage
- Количество Q/A: 5 (about), 6-8 (услуги), 4-5 (статьи). Проверка по видимому HTML для /about, /services/cloud, /articles/it-amc-guide: все вопросы и начала ответов присутствуют в видимом тексте (true/true), то есть требование "соответствие видимому контенту" выполнено.
- Тексты ответов - простой текст, допустимо.
- Ответы содержат конкретные цены (AED 75-190 за пользователя) - полезно для AI-цитирования, проверить, что это действительное предложение.

### Service (4 страницы)
Есть: serviceType, name, description, areaServed (3 City + Country), provider по @id.
Нет: `url`, `@id`, `offers` (Offer / `priceSpecification`, хотя бы `priceCurrency: AED` + диапазон), `hasOfferCatalog`, `audience`, `availableChannel`, `image`. Для rich results у Service нет собственного сниппета Google; значение - сущностное (entity/AI).
`serviceArea` в LocalBusiness Dubai - допустимое свойство schema.org (у Organization/LocalBusiness оно есть), но `areaServed` уже есть - дублирование; на ru-версии `serviceArea` нет (несогласованность EN/RU).

### LocalBusiness (location pages)
- **/locations/dubai и /ru/locations/dubai: `streetAddress: ""` (пустая строка)** - Google может расценить адрес как неполный (Warning/Error для локального бизнеса: адрес должен быть полным). Нужен реальный адрес.
- **/locations/sharjah: адрес и geo скопированы из Dubai** (`Office R20-42, Wavez Residence, Wadi Al Safa 2`, `addressLocality: Dubai`, те же координаты). Это вводит в заблуждение и может расцениваться как спам-разметка, если в Шардже нет физического офиса. Если офиса нет - использовать `areaServed: Sharjah` без address, либо `Service`.
- Есть priceRange `$$`, openingHoursSpecification, telephone, email, parentOrganization. Нет sameAs, hasMap, logo, `name` не различается между локациями ("NOCKO Information Technology" - лучше "NOCKO Information Technology - Dubai").
- Тип только `LocalBusiness`; лучше `["LocalBusiness","ProfessionalService"]` либо `ITService`-подобный (в schema.org нет, оставить ProfessionalService).

### BreadcrumbList
- Item-ссылки есть там, где это нужно, но много замечаний:
  - Последний элемент без `item` - допустимо (Google разрешает).
  - /industries/*: второй элемент `"item": "https://nocko.com#"` - фрагмент-заглушка (ведёт на главную), а страницы `/industries` отдаёт 404. Нужно убрать `item` (или создать хаб `/industries`).
  - /locations/*: второй элемент "Locations" вообще без `item` и не последний - **для Google это Error: все элементы кроме последнего должны иметь `item`**. Хаб `/locations` редиректит на `/locations/dubai`.
  - /services/managed-it и другие: Home -> Services -> страница: корректно.
  - /articles/*: хлебные крошки "Home -> Services -> IT AMC -> IT AMC Guide" - у статьи в цепочке услуга, а не /articles. Допустимо, но проверьте соответствие видимым крошкам.
  - /ru/*: в breadcrumb "Home" ведёт на `https://nocko.com/` (EN-корень), а не на `/ru`; имена на RU-страницах частично на английском ("Home"). В /ru/locations/dubai второй элемент "Локации" без item (та же ошибка).
  - Главная в /about и /contact `https://nocko.com` (без слэша), в других `https://nocko.com/` - нормализовать.
  - /case-studies, /case-studies/*, главная - BreadcrumbList отсутствует.

## 4. Проверка URL картинок и логотипов (HEAD)

| URL | Статус |
|---|---|
| https://nocko.com/images/logo-512.png | 200 image/png |
| https://nocko.com/og-image.jpg | 200 image/jpeg (92 КБ) |
| https://nocko.com/twitter-image.jpg (meta twitter:image) | 200 image/jpeg |

Прошлая проблема 404 для logo и og-image устранена. Все остальные URL в разметке (services/cybersecurity, it-consulting, structured-cabling, ru/services) отдают 200. Не отдаёт 200 корректно: `https://nocko.com#` (отдаёт главную, но это не нужный URL) и `/industries` (404).

## 5. Ошибки и предупреждения по семантике Google Rich Results / schema.org

Недопустимых имён свойств schema.org не обнаружено (проверены Organization, ProfessionalService, ImageObject, GeoCoordinates, OpeningHoursSpecification, ContactPoint, Service, LocalBusiness, Article, FAQPage, BreadcrumbList, ContactPage, WebPage, ItemList; `serviceArea`, `hoursAvailable`, `availableLanguage`, `parentOrganization` существуют). Валидатор Google (не запускался автоматически - расчёт по правилам):

Ошибки (Error):
1. BreadcrumbList на /locations/* и /ru/locations/*: средний элемент "Locations"/"Локации" без `item`.
2. LocalBusiness Dubai (EN, RU): `streetAddress` пустая строка (поле присутствует, но пустое - неполный адрес).

Предупреждения (Warning) / риски:
3. LocalBusiness Sharjah: адрес/координаты Dubai (недостоверные данные, риск расхождения с Google Business Profile).
4. Article: `dateModified` = `datePublished`, нет `author.url`, нет `mainEntityOfPage`, одно и то же изображение для всех, нет `description` (кроме case study, где описание - цитата).
5. Organization: только 1 `sameAs`; `Organization` повторно объявляется внутри Article.publisher и в ContactPage.mainEntity без/с неполным описанием.
6. `/industries/*` BreadcrumbList: `item: "https://nocko.com#"`.
7. Service без `offers`/`url`/`@id`.
8. Нет BreadcrumbList на главной, /case-studies, /case-studies/*.
9. `/faq` отсутствует (404) - если ссылаетесь на него где-либо, это битая ссылка.

## 6. FAQPage: реальная ценность

Google с августа 2023 показывает FAQ rich results только для авторитетных государственных и медицинских сайтов. nocko.com - коммерческий сайт, поэтому расширенный сниппет в Google получен не будет. Разметка на 7 страницах (about, 4 услуги, 3 статьи) безопасна (не штрафуется, содержимое совпадает с видимым), но ценность - только для AI/LLM-цитирования и общего понимания тематики. Рекомендация: приоритет Info, не удалять; не добавлять на остальные страницы ради Google; писать новые FAQ только если есть AI/GEO-цель. Не использовать HowTo (сниппеты отключены в 2023).

## 7. hreflang / og / inLanguage на RU-страницах

- hreflang есть на всех проверенных страницах: `en-AE`, `ru-RU`, `x-default`, взаимные ссылки корректны, canonical самоссылочный (`/ru/...`). Исключение: **/services/it-support не имеет `x-default`** (у остальных есть).
- **На главной /ru** hreflang `ru-RU` -> `https://nocko.com/ru`, canonical `https://nocko.com/ru` - ок.
- **Проблема: `<html lang="en">` на всех RU-страницах** (/ru, /ru/articles/..., /ru/locations/dubai, /ru/industries/healthcare), хотя `og:locale = ru_RU` и контент русский. Несогласованность языковых сигналов; нужно `lang="ru"`.
- `inLanguage` в схеме: только в `WebSite` (`["en-AE","ru-RU"]`) и одинаково на EN и RU. В `Article`, `WebPage`, `LocalBusiness`, `FAQPage` `inLanguage` отсутствует. На /ru главная: Organization.description остаётся английской, WebSite.name не локализован.
- На странице /ru/articles/... заголовок и og:title на русском, `Article.headline` на русском - ок. Но breadcrumb "Home" - английский, ссылка на EN-корень.
- `og:image` везде один (`og-image.jpg`) - для RU нет локализованной картинки (некритично).
- `og:locale` = `en_AE` на EN, `ru_RU` на RU: в целом корректно, но нет `og:locale:alternate`.

## 8. Оценка схемы: 66 / 100

| Критерий | Баллы | Комментарий |
|---|---|---|
| Базовая структура (@id, @graph, ссылки) | 17 / 20 | Стабильные @id, provider/publisher/parentOrganization по ссылке; минус за повторное объявление publisher/mainEntity |
| Покрытие типами | 14 / 20 | Org, WebSite, Service, Article, FAQ, Breadcrumb, LocalBusiness есть; нет Breadcrumb на главной и кейсах, нет Offer, нет Person, нет CollectionPage для /case-studies |
| Корректность и полнота свойств | 12 / 25 | Пустой streetAddress, фальшивый адрес Sharjah, Breadcrumb без item, Article слабый (одинаковые даты, author без url) |
| Дубли и согласованность | 8 / 10 | Прошлые дубли ушли; остались вложенные Organization без @id |
| Ресурсы (картинки, URL) | 9 / 10 | logo, og, twitter-image 200; `#`-заглушка и /industries 404 |
| Мультиязычность | 4 / 10 | `html lang=en` на RU, нет inLanguage в сущностях, x-default отсутствует на 1 странице, английские breadcrumb на RU |
| Реальная ценность для SERP | 2 / 5 | FAQ не даст сниппетов; Breadcrumb и Organization полезны, Review/AggregateRating отсутствуют |

Итого 66 / 100 (прошлый аудит с 404 на logo/og-image и дублями был бы заметно ниже).

## 9. Приоритетный план исправлений

1. (Высокий) Исправить BreadcrumbList на /locations/* и /ru/locations/* (убрать средний элемент или дать ему валидный `item`); убрать `https://nocko.com#` в /industries/*.
2. (Высокий) Заполнить `streetAddress` в LocalBusiness Dubai (или убрать address); для Sharjah указать реальный адрес/гео либо убрать address и geo.
3. (Высокий) `<html lang>` для RU = `ru`; добавить `inLanguage` в WebPage/Article/LocalBusiness; локализовать Organization.description на /ru; добавить `x-default` на /services/it-support.
4. (Средний) Article: `author` -> Person (имя автора) с `url`, реальные `dateModified`, ISO 8601 с часовым поясом, уникальное изображение статьи, `mainEntityOfPage`, `description`, `inLanguage`; publisher и mainEntity - только ссылки по `@id`.
5. (Средний) Service: добавить `@id`, `url`, `offers` (priceCurrency AED, диапазон или "от"), `serviceOutput`/`audience` при желании.
6. (Средний) Добавить BreadcrumbList на /case-studies и кейсы; `CollectionPage` + `ItemList` для /case-studies.
7. (Низкий) Расширить sameAs, добавить `priceRange`, `foundingDate`, `hasMap`, `knowsAbout` в Organization.
8. (Info) FAQPage оставить как есть (польза для AI); /faq не создавать ради Google.
9. После внедрения проверить в Rich Results Test и Schema Markup Validator.

## 10. Пример полного @graph для главной

Значения в `<...>` и пометки нужно подставить реальными данными владельца (не публиковать плейсхолдеры). Отсутствующие данные (рейтинги, отзывы) не выдумываются.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://nocko.com/#organization",
      "name": "NOCKO Information Technology",
      "legalName": "NOCKO Information Technology",
      "alternateName": "NOCKO",
      "url": "https://nocko.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://nocko.com/#logo",
        "url": "https://nocko.com/images/logo-512.png",
        "contentUrl": "https://nocko.com/images/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": { "@id": "https://nocko.com/#logo" },
      "description": "IT company in Dubai providing 24/7 IT support, managed IT services, network infrastructure, cloud solutions and cybersecurity for businesses across the UAE.",
      "telephone": "+971542448888",
      "email": "info@nocko.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office R20-42, Wavez Residence, Wadi Al Safa 2",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 25.0785, "longitude": 55.2708 },
      "hasMap": "<URL карточки Google Maps>",
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Abu Dhabi" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ],
      "knowsAbout": ["Managed IT services", "IT AMC", "IT support", "Cloud migration", "Cybersecurity", "Structured cabling"],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971542448888",
          "email": "info@nocko.com",
          "contactType": "customer support",
          "areaServed": "AE",
          "availableLanguage": ["English", "Russian", "Arabic"]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "NOCKO IT services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://nocko.com/services/managed-it#service" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://nocko.com/services/it-amc#service" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://nocko.com/services/it-support#service" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://nocko.com/services/cloud#service" } }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/it-nocko/",
        "<URL Google Business Profile>",
        "<URL других реальных профилей: Facebook/Instagram/YouTube/Clutch>"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://nocko.com/#website",
      "url": "https://nocko.com/",
      "name": "NOCKO Information Technology",
      "publisher": { "@id": "https://nocko.com/#organization" },
      "inLanguage": ["en-AE", "ru-RU"]
    },
    {
      "@type": "WebPage",
      "@id": "https://nocko.com/#webpage",
      "url": "https://nocko.com/",
      "name": "NOCKO - Managed IT Services & IT Support in Dubai, UAE",
      "isPartOf": { "@id": "https://nocko.com/#website" },
      "about": { "@id": "https://nocko.com/#organization" },
      "primaryImageOfPage": { "@type": "ImageObject", "url": "https://nocko.com/og-image.jpg", "width": 1200, "height": 630 },
      "inLanguage": "en-AE"
    }
  ]
}
```

Для RU-главной: тот же граф, но `WebPage.@id = https://nocko.com/ru#webpage`, `url = https://nocko.com/ru`, `inLanguage = "ru-RU"`, русские `name`/`description`, Organization остаётся единой (`@id` общий). BreadcrumbList на главной не обязателен.

### Пример корректной хлебной крошки для локации
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nocko.com/" },
    { "@type": "ListItem", "position": 2, "name": "Dubai" }
  ]
}
```
(Если хаб `/locations` будет создан - добавить его с `item`.)

### Пример Article с Person и ссылками по @id
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://nocko.com/articles/it-amc-guide#article",
  "mainEntityOfPage": "https://nocko.com/articles/it-amc-guide",
  "headline": "IT AMC in UAE: The Complete Guide for Business",
  "description": "<реальное краткое описание статьи>",
  "image": ["https://nocko.com/<уникальная-картинка-статьи>.jpg"],
  "datePublished": "2026-07-21T09:00:00+04:00",
  "dateModified": "<реальная дата последнего изменения, ISO 8601>",
  "inLanguage": "en-AE",
  "author": { "@type": "Person", "name": "<имя автора>", "url": "https://nocko.com/<страница-автора>" },
  "publisher": { "@id": "https://nocko.com/#organization" }
}
```
