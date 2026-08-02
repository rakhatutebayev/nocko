# Сессия 2026-08-02: RU-ключ «русскоговорящая ИТ компания» + план подъёма EN-версии

## Статус: где мы остановились

Пользователь заполнял бизнес-профиль в **Microsoft Partner Center** (Referrals → Business profiles → New Profile → Services/ISV, шаг «Partner information» — тексты выданы, см. ниже). Следующий шаг после публикации профиля — подготовить пакет текстов для остальных каталогов (Cloudtango, Clutch, GoodFirms, TechBehemoths, каталоги ОАЭ) и outreach-письма к staffconnect.ae / infraon.io / xedos.ae.

## Сделано в этой сессии

### 1. RU-ключ «русскоговорящие ит компании» — закрыт полностью
- Диагноз: страницы были проиндексированы (GSC PASS), но фразы «компания» не было нигде — только «специалисты». `/services/it-support-ru` отсутствовал в sitemap, одна входящая ссылка.
- Правки (коммит `8f24407`, задеплоен, live проверен):
  - `/services/it-support-ru`: title/H1/description/keywords/OG → «Русскоговорящая ИТ Компания в Дубае», +FAQ-вопрос с фразой во мн. числе, +robots index/follow, +geo term.
  - `/ru`: keywords + внутренняя ссылка (блок «Сертифицированные инженеры» → /services/it-support-ru).
  - `/ru/services/it-support`: related-ссылка на /services/it-support-ru.
  - `sitemap.ts`: добавлен /services/it-support-ru.
- Переиндексация запрошена через **Indexing API** — все 3 URL приняты (OK): /services/it-support-ru, /ru, /ru/services/it-support.

### 2. Доступы (настроены и работают)
- **GSC API**: сервисный аккаунт `claude@durable-ring-480915-t0.iam.gserviceaccount.com`, ключ `docs/durable-ring-480915-t0-5a156ccaa008.json`. Роль в Search Console поднята до **Owner** (siteOwner) → Indexing API работает. Готовые скрипты: scratchpad прошлой сессии (gsc*.js, reindex.js, perm.js) — JWT → token → API.
- **Indexing API** включён в GCP-проекте durable-ring-480915-t0.
- **DataForSEO**: логин/пароль в `.env` (DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD). Баланс ~$0.45. Аккаунт верифицирован (после первого запроса требовал верификацию — прошла).
- **Деплой**: `set -a && source .env; npx vercel --prod --yes --token="$VERCEL_TOKEN"` из корня — работает.

### 3. Данные по частотности (DataForSEO, Google Ads)
- **Все RU-запросы «ИТ+Дубай» < 10/мес** и в гео ОАЭ, и worldwide («ит компания дубай», «ит поддержка дубай», «русскоговорящие ит …» — всё null). Контроль подтвердил корректность: «работа в дубае» 3600, «системный администратор» 8100, «ит аутсорсинг» 590 worldwide. RU-ниша = конверсионная микрониша, не трафик.
- **EN-объёмы** (Semrush-отчёт): it companies in dubai 1600, it support dubai 590, managed it services dubai 260.

### 4. Анализ EN-версии — почему позиции 65–80
- GSC: `/services/managed-it` — «managed it services dubai» поз. 68 (381 imp), «…uae» поз. 65 (334 imp); `/services/cloud` — «cloud migration services uae» поз. 71; `/services/it-consulting` поз. 64 (228 imp); `/locations/sharjah` поз. 51 — ближайшая к прорыву.
- On-page `/services/managed-it` в порядке: точный title, H1, ~1100 слов, schema (Service, FAQPage, Organization), www→non-www 308.
- **Корень проблемы — авторитет**: nocko.com rank **0**, **29** ссылающихся доменов vs geeks.ae (топ-5) rank 180, 174 домена.
- SERP «managed it services dubai» (UAE): органика с поз. 4 (выше — карта/реклама). Топ: realsecure.ae, geeks.ae, bluechipgulf.ae, burhani.co + агрегаторы cloudtango.net, staffconnect.ae («Top 10 MSP 2026»), infraon.io, xedos.ae («Leading MSP UAE 2026»).

## План подъёма EN (по приоритету)

1. **Ссылки/каталоги (максимальный эффект)** — бесплатно:
   - Microsoft Partner Directory ← В ПРОЦЕССЕ (см. статус выше)
   - Cloudtango (бесплатный MSP-профиль), Clutch, GoodFirms, TechBehemoths, DesignRush
   - Outreach в топ-листы из выдачи: staffconnect.ae, infraon.io, xedos.ae (возможно платно — решать по ответу)
   - Каталоги ОАЭ: yellowpages.ae и др. (NAP-цитаты)
   - Цель: 29 → 100+ доменов за 4–6 мес → выход с 65–80 в 20–40.
2. **Google Business Profile** — map pack по «managed it services dubai» достижим быстрее органики.
3. **Контент под коммерческий интент** (после роста ссылок): «Managed IT Services Cost in Dubai», сравнения.
4. **Quick wins**: внутренние ссылки на /locations/sharjah (поз. 51) и /services/it-consulting (поз. 64).

## Тексты для Microsoft Partner Center (выданы пользователю)
- Profile Name: NOCKO Information Technology; Website: https://nocko.com; Privacy: https://nocko.com/privacy-policy
- Description (EN, готовый) — см. сообщение в сессии; кратко: MSP in Dubai/UAE, 24/7 support, IT AMC, M365/Azure, cloud migration, cybersecurity, structured cabling; ITIL, SLA 2h on-site, EN/RU/AR support.
- Expertise: Microsoft 365, Azure, Security/Modern Work; Customer size: SMB + Midmarket.

## Чем проверять результат (через 1–2 недели)
- GSC: показы по запросам с «русско»/«компани» (сейчас 0), позиция /services/it-support-ru.
- `site:nocko.com русскоговорящие` в Google.
- Позиции managed it services dubai/uae после первых 10–20 новых ссылок.
