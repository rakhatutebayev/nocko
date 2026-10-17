# Local SEO аудит: NOCKO Information Technology (nocko.com)

Дата: 2026-10-17. Тип бизнеса: гибрид (офис в Дубае с видимым адресом и кнопкой "Show map" + обслуживание выездом по Дубаю, Абу-Даби, Шардже). Вертикаль: ИТ-аутсорсинг / MSP (Home Services-подобный: service area, 24/7, response time).

Ограничения: инструмент WebSearch в этой среде недоступен, поиск через DuckDuckGo/Bing (через curl и WebFetch) вернул капчу или нерелевантную выдачу. Clutch, GoodFirms, vrstech.com, itsupportdubai.com закрыты Cloudflare (403). Поэтому пункты 3-5 оценены частично, помечено ниже. DataForSEO не использовался. Сырые HTML лежат в `/private/tmp/claude-501/-Users-rakhat-Documents-1-webhosting-nocko-platform/3ec33f2b-800e-4450-88a2-6b9f334fdb4c/scratchpad/audit/local/raw/`.

## 1. NAP

| Источник | Название | Адрес | Телефон | Email | Часы |
|---|---|---|---|---|---|
| /contact (видимый) | NOCKO Information Technology | Office R20-42, Wavez Residence, Wadi Al Safa 2, "Dubai , UAE" | +971 54 244 8888 | info@nocko.com | Mon-Fri 09:00-18:00 (GST) |
| Футер (все страницы) | то же | то же, но "Dubai , United Arab Emirates" | то же | то же | нет |
| JSON-LD Organization/ProfessionalService (@graph, на всех страницах) | NOCKO Information Technology | street как выше, Dubai / Dubai / AE, geo 25.0785, 55.2708 | +971542448888 | info@nocko.com | Пн-Пт 09-18; contactPoint 24/7 |
| JSON-LD ContactPage | то же | street + Dubai + AE (без region) | то же | то же | нет |
| JSON-LD /locations/dubai и /ru/locations/dubai (LocalBusiness) | то же | **streetAddress пустой ""** | то же | то же | Пн-Пт 09-18 |
| JSON-LD /locations/abu-dhabi, /sharjah (LocalBusiness) | то же | street офиса в Дубае, locality Dubai | то же | то же | Пн-Пт 09-18 |
| LinkedIn | "NOCKO Information Technology **L.L.C**" | не проверялся | - | - | - |

Расхождения:
1. Пустой streetAddress в LocalBusiness на /locations/dubai и /ru/locations/dubai при полном адресе в Organization на той же странице (две сущности с разным адресом).
2. Формат страны: "Dubai , UAE" (контакт) против "Dubai , United Arab Emirates" (футер); лишний пробел перед запятой. Нужен единый формат.
3. Юр. название: на сайте без "L.L.C", в LinkedIn с "L.L.C". Должно совпадать с trade licence.
4. Часы: на сайте Пн-Пт 9-18, а везде заявлено 24/7 (ок как "офис vs поддержка", но не разведено текстом на страницах; Сб-Вс не указаны как закрыто).
5. Адрес в "Wavez Residence" (жилое здание, офис R20-42): риск для GBP (верификация, подозрение на виртуальный/жилой адрес). Это не PO Box, формат улицы нормальный, но нет почтового индекса/района Dubai Production City-подобного ориентира и нет Makani/Plus Code.
6. Телефон единообразен везде. Мобильный номер (054), нет городского 04.
7. geo с 4 знаками (25.0785, 55.2708): нужно 5+ знаков.
8. У Abu Dhabi/Sharjah LocalBusiness тот же адрес и geo Дубая: допустимо для SAB, но тип надо моделировать как serviceArea, а не как отдельную точку.

## 2. Страницы локаций

| Страница | Слов | Title | H1 | Уник. контент | Локальные доказательства | Schema |
|---|---|---|---|---|---|---|
| /locations/dubai | 829 | IT Support & Managed IT Services in Dubai / NOCKO | IT Support & Managed Services in Dubai | Высокий (структура свой) | DIFC, Business Bay, DMCC, Media City, JAFZA, Deira; "50+ clients" без имён; карты нет | LocalBusiness, geo 4 знака, areaServed City Dubai, serviceArea, **пустой street** |
| /locations/abu-dhabi | 604 | IT Company in Abu Dhabi / IT Support Services | IT Company in Abu Dhabi / IT Support & Solutions | Средний | ADGM, Khalifa City, Mussafah; нет клиентов, нет карты, нет упоминания местного офиса/времени выезда из Дубая | LocalBusiness, geo Дубая, areaServed 3 города |
| /locations/sharjah | 611 | IT Company in Sharjah / IT Support Services | IT Company in Sharjah / IT Support & Solutions | Средний | SAIF Zone, Al Majaz, Industrial Area, Hamriyah, Media City | то же |
| /ru/locations/dubai | 773 | ИТ Поддержка в Дубае, управляемые ИТ услуги / NOCKO | ИТ Поддержка и Управляемые Услуги в Дубае | Перевод EN | те же районы, ничего про русскоязычную аудиторию | LocalBusiness, **пустой street**, areaServed только Dubai |

Тест на дорвеи (swap test): совпадающих предложений между страницами 1-2 из ~30, то есть текст не дублируется дословно; шаблонна структура (Why choose / IT services / Areas we serve / CTA). Если заменить название города, страницы Abu Dhabi и Sharjah почти взаимозаменяемы по смыслу (нет местных кейсов, времени ответа по эмирату, адреса). Доказательств присутствия нет ни на одной.

Внутренние ссылки: все страницы локаций связаны между собой и с /services/*, /industries/*, /contact через футер и меню. Входящие: футер каждой страницы ("IT Company in Dubai / Abu Dhabi / Sharjah"), в sitemap 6 URL локаций. Дерево: / > locations > город (глубина 1-2). Нет ссылок на локации из текстов кейсов/статей (не проверено глубоко). hreflang отсутствует на всех проверенных страницах (EN и RU не связаны); canonical корректный и самоссылающийся.

## 3. Google Business Profile

- Поиск "NOCKO Information Technology Dubai" в Bing: 0 результатов. Прямой запрос Google Maps вернул только эхо запроса, подтвердить наличие или отсутствие карточки автоматически не удалось. **Статус: не подтверждён.**
- На сайте нет ссылки на Google Maps/GBP (ни maps URL, ни `hasMap`, ни CID), нет iframe карты (есть только кнопка "Show map" на /contact; встроенной карты в HTML нет), нет виджета отзывов, нет aggregateRating в schema, нет Google review link.
- sameAs содержит только LinkedIn (https://www.linkedin.com/company/it-nocko/). Facebook и Instagram на сайте не указаны.
- Категория GBP не определена. Рекомендуемая основная: "Managed service provider" (или "IT services company"/"Computer support and services"), доп.: "Network security service", "Cloud computing service", "Telecommunications contractor" при необходимости. Это фактор №1 (Whitespark).
- Proximity около 55% дисперсии: офис в Wadi Al Safa 2 (район Dubai Production City/Al Barsha South area) далеко от DIFC/Business Bay, в локальном пакете по запросам "Dubai" будет слабее, чем у компаний в центре; компенсировать надо отзывами, категориями и цитатами.

## 4. Цитирования

| Площадка | Статус | Комментарий |
|---|---|---|
| LinkedIn | **Найден** | "NOCKO Information Technology L.L.C", описание "Enterprise IT Infrastructure, Cybersecurity & Business Telephony Solutions in UAE"; единственный sameAs |
| Facebook | Не найден | /nocko.ae возвращает общую страницу Facebook без названия компании; на сайте ссылки нет |
| Instagram | Не найден | аналогично |
| Google Maps/GBP | Не подтверждён | см. п.3 |
| Yelp | Не найден | поиск вернул общий результат без NOCKO (Yelp в UAE малозначим) |
| Clutch, GoodFirms | Не проверено (Cloudflare 403) | проверить вручную |
| Yellow Pages UAE (yellowpages.ae) | Не проверено (нет соединения) | проверить вручную |
| Dubai Chamber / DED каталог, DesignRush, Bayut business | Не проверено | вручную |
| 2GIS Dubai (2gis.ae) | Не подтверждён | страница требует браузер, результаты не загрузились |
| Яндекс Карты | Не подтверждён | страница динамическая, результата нет в HTML |
| Bing Places / Apple Business Connect | Не проверено | Bing по бренду пуст, значит карточки, вероятно, нет |

Вывод: подтверждено только 1 из ~12 площадок. Для русскоязычной аудитории в ОАЭ критичны Яндекс Карты, 2GIS и русскоязычные каталоги (Russian Dubai, Expat.ru и др.).

## 5. Конкуренты (ограниченно: поиск недоступен, сайты взяты по списку задачи)

| Конкурент | Что видно на сайте | Локальные сигналы |
|---|---|---|
| geeks.ae | Title "Managed & On-Demand IT Support, Laptop & PC Repair", "150+ clients", schema с рейтингом ~4-5, упоминает JLT, Business Bay, DIFC, Abu Dhabi, есть арабский (rtl) | Сильнее NOCKO: рейтинг в schema, больше клиентов, районы, арабский; hreflang нет |
| bluechipgulf.com | "IT Support & IT Solutions Company in Dubai", упоминает Abu Dhabi, Sharjah, Business Bay, ссылка на Google Maps | Карта на сайте есть; арабского нет; отзывов не видно |
| vrstech.com | 403 (Cloudflare) | не оценён |
| itsupportdubai.com | 403 (Cloudflare) | не оценён |

Живую выдачу по "managed it services dubai" и "it support company dubai" снять не удалось (Bing вернул нерелевантное). Нужно ручное снятие local pack или DataForSEO `google_local_pack_serp`.

## 6. Отраслевые проверки (MSP в ОАЭ)

| Сигнал | Статус |
|---|---|
| Free zones (DMCC, JAFZA, DIFC, Media City, ADGM, SAIF Zone, Hamriyah) | Есть на страницах локаций (Dubai: 6 районов; AD: ADGM, Khalifa City, Mussafah; Sharjah: SAIF, Hamriyah). На главной и /services/* нет |
| Время реакции по эмиратам | Есть только в FAQ /about и в schema-FAQ: 2 часа Dubai, 4 часа все эмираты. На страницах локаций упоминание "response time" есть, но без SLA-таблицы по эмирату |
| Арабский | **Отсутствует**: /ar даёт 404, hreflang нет; в schema заявлено availableLanguage ar (несоответствие реальности). Только EN и RU |
| Номер торговой лицензии | **Нет** (ни в футере, ни на /about, ни в schema) |
| TDRA / Dubai Police / DESC / ISR | Нет упоминаний (на страницах локаций не найдено TDRA, Dubai Police, DESC) |
| Партнёрства (Microsoft, Cisco, Fortinet) | Упомянуты текстом без бейджей и ссылок |
| Именованные клиенты / кейсы | "50+ clients" без имён; есть /case-studies, но не привязаны к локациям |

## Оценка Local SEO: **38 / 100**

| Измерение | Вес | Оценка | Баллы |
|---|---|---|---|
| GBP-сигналы | 25% | 25% (нет ссылки/карты/отзывов, листинг не подтверждён) | 6 |
| Отзывы и репутация | 20% | 5% (нет рейтинга, виджета, aggregateRating) | 1 |
| Локальный on-page | 20% | 65% (title/H1 с городом, районы, 3+RU страниц, нет карт/клиентов/hreflang/арабского) | 13 |
| NAP и цитирования | 15% | 45% (NAP почти единообразен, но 2 пустых street, формат, цитат 1) | 7 |
| Local schema | 10% | 65% (LocalBusiness+ProfessionalService, geo, hours, areaServed; geo 4 знака, пустой street, нет hasMap/aggregateRating, sameAs 1) | 6 |
| Локальные ссылки/авторитет | 10% | 30% (LinkedIn, нет каталогов и локальных упоминаний) | 3 |
| Итого | | | **36-38** |

Итог округлён до 38. Оценка условна из-за недоступности live GBP и поиска.

## Приоритетные действия

1. (Критично) Подтвердить/создать и верифицировать GBP: категория "Managed service provider" (primary), SAB-настройка с зоной обслуживания Dubai/Abu Dhabi/Sharjah; решить вопрос жилого адреса (Wavez Residence) и скрытия адреса, если верификация требует.
2. (Критично) Собрать отзывы: цель 20+ в Google в первые 60-90 дней, затем 1-2 в неделю (18-дневное правило); добавить виджет отзывов и aggregateRating в schema только на реальные данные.
3. (Критично) Исправить schema: заполнить streetAddress в LocalBusiness на /locations/dubai и /ru/locations/dubai; geo до 5 знаков; добавить `hasMap`, `sameAs` (GBP, Facebook, Instagram, Яндекс, 2GIS, Clutch), `taxID`/`identifier` лицензии.
4. (Высокий) Встроить Google Maps iframe и кнопку "Get directions" на /contact и /locations/dubai; ссылка на GBP в футере.
5. (Высокий) Добавить hreflang EN/RU (и x-default) на все страницы, связать локации EN и RU.
6. (Высокий) Цитаты: Яндекс Карты, 2GIS, Yellow Pages UAE, Dubai Chamber/DED, Clutch, GoodFirms, Bing Places, Apple Business Connect, Facebook, Instagram; везде идентичный NAP.
7. (Высокий) Усилить страницы Abu Dhabi и Sharjah: именованные кейсы/клиенты, SLA по времени выезда, карта зоны, отзывы из региона; убрать зеркальную структуру.
8. (Средний) Унифицировать NAP: "Dubai, United Arab Emirates" везде, юр. название с "L.L.C" согласовать с лицензией, добавить городской номер 04 и Makani/ориентир, показать Сб-Вс как "закрыто / поддержка 24/7".
9. (Средний) Доверие в ОАЭ: номер торговой лицензии, упоминания TDRA/DESC/Dubai ISR и NESA-совместимости, бейджи партнёров, блок SLA по эмиратам.
10. (Низкий/стратегический) Арабская версия (/ar) хотя бы ключевых страниц; убрать "ar" из availableLanguage до запуска; русские страницы Abu Dhabi/Sharjah довести до паритета с Dubai.

Примечание: близость офиса к центру (55% вариации) вне контроля сайта.
