# План консолидации статей — «Crawled, currently not indexed»

Дата: 2026-07-21. Источник: GSC URL Inspection API + экспорт Coverage Drilldown 2026-05-24.

## Диагноз

36 из 62 статей `/articles/*` не индексируются. Технических блокировок нет
(crawl OK, robots allowed, canonical self) — это фильтр качества Google:
generic-статьи-перестановки ключевиков с ~400–500 словами видимого текста
и слабой перелинковкой. Проиндексированы только статьи с уникальным углом
(fiber-vs-cat6a, fluke-testing, cloud-banking-uae, healthcare-it-backup-uae,
antivirus-dead, google-workspace-vs-microsoft-365 и т.д.).

Принцип плана: **меньше статей, но глубже**. Тонкие перестановки → 301 в
pillar-страницы; пересекающиеся темы → одна сильная статья.

## Кластер 1: IT AMC (6 статей → 1 новый pillar)

Создать: `/articles/it-amc-guide` — «IT AMC in UAE: Complete Guide»
(2000–2500 слов: что входит, цены в AED, визиты, hardware, обновления,
priority support, сравнительная таблица пакетов, FAQ).

301 → `/articles/it-amc-guide`:
- it-amc-costs, it-amc-priority, it-amc-hardware,
- it-amc-updates, it-amc-comprehensive, it-amc-maintenance-visits

Оставить как есть (индексируются): it-amc-vs-msp, it-amc-hardware-lifecycle.
Из guide поставить ссылки на обе.

## Кластер 2: Managed IT (5 → pillar + 1 слияние)

Расширить pillar `/articles/managed-it-services-guide` (сейчас тонкий),
влить содержимое cost / monitoring / scalable / security.

301 → `/articles/managed-it-services-guide`:
- managed-it-cost, managed-it-scalable, managed-it-security

301 отдельно:
- managed-it-backup → `/articles/data-backup-services-dubai` (индексируется, тема та же)
- managed-it-monitoring → см. кластер «Мониторинг» ниже

Оставить: managed-it-co-managed, managed-it-infrastructure (уникальные углы).

## Кластер 3: Мониторинг — каннибализация ×3

Три статьи об одном: it-support-monitoring, managed-it-monitoring,
cybersecurity-monitoring — все три не в индексе.

Оставить одну: `/articles/it-support-monitoring` (самая большая),
переписать как «24/7 IT Monitoring in UAE» с секциями про infra- и
security-мониторинг.

301 → `/articles/it-support-monitoring`:
- managed-it-monitoring, cybersecurity-monitoring

## Кластер 4: Cybersecurity (5 → pillar)

Расширить pillar `/articles/cybersecurity-guide` (сейчас тонкий) до
2500+ слов: угрозы для UAE-бизнеса, firewall, защита данных, комплаенс
(NESA/ISR/PDPL), инцидент-респонс чеклист.

301 → `/articles/cybersecurity-guide`:
- cybersecurity-firewall, cybersecurity-protection,
- cybersecurity-data-protection, cybersecurity-compliance,
- cybersecurity-incident-response

Оставить: cybersecurity-antivirus-dead, cloud-zero-trust,
it-consulting-ransomware-survival (индексируются).

## Кластер 5: Cloud (6 → pillar + 1 объединённая + 1 доработка)

301 → `/articles/cloud-infrastructure-guide` (pillar, индексируется):
- cloud-infrastructure (прямой дубль guide),
- cloud-data-management, cloud-security-compliance

Объединить в одну «Cloud Migration for UAE Business» на базе
`/articles/cloud-migration` (влить multi-hybrid):
- 301: cloud-multi-hybrid → cloud-migration

Доработать и оставить: cloud-cost-optimization (добавить конкретику:
калькуляции AED, FinOps-примеры).

## Кластер 6: IT Consulting (6 → 1 объединённая + 3 доработки)

Объединить strategy + roadmap + assessment в одну
«IT Strategy, Assessment & Roadmap for UAE Companies» на базе
`/articles/it-consulting-strategy`:
- 301: it-consulting-roadmap → it-consulting-strategy
- 301: it-consulting-assessment → it-consulting-strategy

Доработать и оставить (длинные, но нужен уникальный угол + перелинковка):
- it-consulting-roi (кейс с цифрами),
- it-consulting-digital-transformation,
- it-consulting-infrastructure-design

## Кластер 7: IT Support (доработка без слияний)

Статьи длинные, но пересекаются. Оставить onsite / remote / helpdesk /
24-7 / optimization, но: заострить уникальный угол каждой, добавить
взаимные ссылки и ссылки из расширенного `/articles/it-support-guide`
(сейчас 527 слов исходника — самый тонкий pillar, расширить в первую очередь).

## Сводная таблица 301 (в next.config.ts → redirects())

| source | destination |
|---|---|
| /articles/it-amc-costs | /articles/it-amc-guide |
| /articles/it-amc-priority | /articles/it-amc-guide |
| /articles/it-amc-hardware | /articles/it-amc-guide |
| /articles/it-amc-updates | /articles/it-amc-guide |
| /articles/it-amc-comprehensive | /articles/it-amc-guide |
| /articles/it-amc-maintenance-visits | /articles/it-amc-guide |
| /articles/managed-it-cost | /articles/managed-it-services-guide |
| /articles/managed-it-scalable | /articles/managed-it-services-guide |
| /articles/managed-it-security | /articles/managed-it-services-guide |
| /articles/managed-it-backup | /articles/data-backup-services-dubai |
| /articles/managed-it-monitoring | /articles/it-support-monitoring |
| /articles/cybersecurity-monitoring | /articles/it-support-monitoring |
| /articles/cybersecurity-firewall | /articles/cybersecurity-guide |
| /articles/cybersecurity-protection | /articles/cybersecurity-guide |
| /articles/cybersecurity-data-protection | /articles/cybersecurity-guide |
| /articles/cybersecurity-compliance | /articles/cybersecurity-guide |
| /articles/cybersecurity-incident-response | /articles/cybersecurity-guide |
| /articles/cloud-infrastructure | /articles/cloud-infrastructure-guide |
| /articles/cloud-data-management | /articles/cloud-infrastructure-guide |
| /articles/cloud-security-compliance | /articles/cloud-infrastructure-guide |
| /articles/cloud-multi-hybrid | /articles/cloud-migration |
| /articles/it-consulting-roadmap | /articles/it-consulting-strategy |
| /articles/it-consulting-assessment | /articles/it-consulting-strategy |

То же самое зеркально для `/ru/articles/*`.

## Порядок работ

1. Написать/расширить контент: it-amc-guide (новый), managed-it-services-guide,
   cybersecurity-guide, it-support-guide, it-support-monitoring, cloud-migration,
   it-consulting-strategy — вливая лучшие куски удаляемых статей.
2. Добавить 23 редиректа (×2 для /ru) в next.config.ts, удалить папки
   удаляемых статей из app/articles и app/ru/articles.
3. Обновить sitemap (генерится из файловой структуры — проверить app/sitemap.ts),
   убрать удалённые URL, обновить внутренние ссылки (services/* → articles/*).
4. Deploy → в GSC Request Indexing для 7 обновлённых/новых страниц + /ru версии.
5. Через 2–4 недели перепроверить Coverage: цель — <20 в «Crawled, not indexed»
   (останутся легаси .html и технические файлы, они уйдут сами).

## Итог

- Было: 62 статьи, 36 не в индексе.
- Станет: ~41 статья, из них 7 сильных pillar/объединённых.
- 23 URL уходят через 301 с передачей сигналов на целевые страницы.
