# Docker Setup для NOCKO Platform

## Быстрый старт

### 1. Установка Docker

Убедитесь, что Docker и Docker Compose установлены:

```bash
docker --version
docker compose version
```

### 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта (скопируйте из `.env.example`):

```bash
cp .env.example .env
```

Отредактируйте `.env` и установите секретные ключи для Strapi:

```env
STRAPI_APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4
STRAPI_JWT_SECRET=your-jwt-secret
STRAPI_ADMIN_JWT_SECRET=your-admin-jwt-secret
STRAPI_API_TOKEN_SALT=your-api-token-salt
STRAPI_TRANSFER_TOKEN_SALT=your-transfer-token-salt
```

**Важно:** Используйте надежные случайные строки для production!

### 3. Запуск всех сервисов

```bash
make docker-up
```

Или вручную:

```bash
docker compose up -d
```

### 4. Проверка статуса

```bash
make docker-ps
```

### 5. Просмотр логов

```bash
make docker-logs
```

Или для конкретного сервиса:

```bash
docker compose logs -f cms
docker compose logs -f website
```

## Доступ к сервисам

После запуска сервисы будут доступны по следующим адресам:

- **Strapi Admin Panel:** http://localhost:1337/admin
- **Strapi API:** http://localhost:1337/api
- **Next.js Website:** http://localhost:3000
- **PostgreSQL:** localhost:5432
- **Redis:** localhost:6379

## Первый запуск Strapi

При первом запуске Strapi нужно создать администратора:

1. Откройте http://localhost:1337/admin
2. Заполните форму регистрации первого администратора
3. Сохраните учетные данные

## Управление контейнерами

### Остановка сервисов

```bash
make docker-down
```

### Перезапуск сервисов

```bash
make docker-restart
```

### Пересборка контейнеров

```bash
make docker-build
```

### Полная очистка (удаление всех данных)

```bash
make docker-clean
```

**Внимание:** Это удалит все данные из базы данных!

## Работа внутри контейнеров

### Открыть shell в CMS контейнере

```bash
make docker-shell-cms
```

### Открыть shell в Website контейнере

```bash
make docker-shell-website
```

## Структура сервисов

```
nocko-platform/
├── docker-compose.yml          # Конфигурация всех сервисов
├── apps/
│   ├── cms/
│   │   ├── Dockerfile.dev     # Dockerfile для Strapi (development)
│   │   └── ...
│   └── website/
│       ├── Dockerfile.dev     # Dockerfile для Next.js (development)
│       └── ...
└── .env                        # Переменные окружения (не в git)
```

## Volumes (данные)

Docker создает следующие volumes для хранения данных:

- `postgres_data` - данные PostgreSQL
- `redis_data` - данные Redis
- `cms_uploads` - загруженные файлы в Strapi

Данные сохраняются между перезапусками контейнеров.

## Сеть

Все сервисы находятся в одной Docker сети `nocko-network` и могут обращаться друг к другу по именам:

- `postgres` - PostgreSQL
- `redis` - Redis
- `cms` - Strapi CMS
- `website` - Next.js Website

## Troubleshooting

### Проблема: Порт уже занят

Если порт 1337, 3000, 5432 или 6379 уже занят:

1. Остановите другие сервисы, использующие эти порты
2. Или измените порты в `docker-compose.yml`

### Проблема: Strapi не подключается к базе данных

Проверьте логи:

```bash
docker compose logs cms
```

Убедитесь, что PostgreSQL запущен:

```bash
docker compose ps postgres
```

### Проблема: Next.js не может подключиться к Strapi

В Docker контейнере Next.js должен использовать `http://cms:1337` для внутренних запросов.

Проверьте переменную окружения:

```bash
docker compose exec website env | grep STRAPI
```

### Проблема: Изменения в коде не применяются

В development режиме используется volume mounting, изменения должны применяться автоматически.

Если нет, перезапустите контейнер:

```bash
docker compose restart website
```

### Очистка и пересборка

Если что-то пошло не так, выполните полную очистку:

```bash
make docker-clean
make docker-build
make docker-up
```

## Production Deployment

Для production используйте отдельные `Dockerfile` файлы (без `.dev`):

- `apps/cms/Dockerfile` - production build для Strapi
- `apps/website/Dockerfile` - production build для Next.js

И соответствующий `docker-compose.prod.yml` с оптимизированными настройками.



