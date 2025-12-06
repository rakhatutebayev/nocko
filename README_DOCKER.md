# 🐳 NOCKO Platform - Docker Setup

Проект полностью перенесен в Docker для упрощения разработки и деплоя.

## 🚀 Быстрый старт

### 1. Установите Docker

Убедитесь, что Docker и Docker Compose установлены:

```bash
docker --version
docker compose version
```

### 2. Запустите все сервисы

```bash
./docker-start.sh
```

Или используйте Makefile:

```bash
make docker-up
```

### 3. Откройте в браузере

- **Strapi Admin:** http://localhost:1337/admin
- **Next.js Site:** http://localhost:3000

## 📦 Что включено

Docker Compose запускает следующие сервисы:

1. **PostgreSQL** (порт 5432) - база данных для Strapi
2. **Redis** (порт 6379) - кэш (опционально)
3. **Strapi CMS** (порт 1337) - админ-панель и API
4. **Next.js Website** (порт 3000) - фронтенд

## 🔧 Управление

### Запуск

```bash
make docker-up
# или
docker compose up -d
```

### Остановка

```bash
make docker-down
# или
docker compose down
```

### Просмотр логов

```bash
make docker-logs
# или
docker compose logs -f
```

### Перезапуск

```bash
make docker-restart
# или
docker compose restart
```

### Полная очистка

```bash
make docker-clean
# или
docker compose down -v
```

## ⚙️ Конфигурация

### Переменные окружения

Создайте файл `.env` в корне проекта:

```env
# Strapi Secrets (ОБЯЗАТЕЛЬНО измените!)
STRAPI_APP_KEYS=your-key-1,your-key-2,your-key-3,your-key-4
STRAPI_JWT_SECRET=your-jwt-secret
STRAPI_ADMIN_JWT_SECRET=your-admin-secret
STRAPI_API_TOKEN_SALT=your-api-salt
STRAPI_TRANSFER_TOKEN_SALT=your-transfer-salt

# Database (для локальной разработки)
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=nocko_cms
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

**Важно:** В Docker эти переменные устанавливаются автоматически через `docker-compose.yml`.

### Первый запуск Strapi

При первом запуске откройте http://localhost:1337/admin и создайте администратора.

## 📁 Структура

```
nocko-platform/
├── docker-compose.yml          # Конфигурация всех сервисов
├── Makefile                     # Команды для управления
├── docker-start.sh             # Скрипт быстрого запуска
├── apps/
│   ├── cms/
│   │   ├── Dockerfile.dev      # Dockerfile для Strapi
│   │   └── ...
│   └── website/
│       ├── Dockerfile.dev      # Dockerfile для Next.js
│       └── ...
└── .env                         # Переменные окружения (не в git)
```

## 🔍 Troubleshooting

### Проблема: Порт занят

Если порт уже занят, остановите другие сервисы или измените порты в `docker-compose.yml`.

### Проблема: Strapi не запускается

Проверьте логи:

```bash
docker compose logs cms
```

Убедитесь, что PostgreSQL запущен:

```bash
docker compose ps postgres
```

### Проблема: Изменения не применяются

В development режиме используется volume mounting. Если изменения не применяются:

```bash
docker compose restart website
docker compose restart cms
```

### Полная пересборка

Если что-то пошло не так:

```bash
make docker-clean
make docker-build
make docker-up
```

## 📚 Дополнительная документация

- [DOCKER_SETUP.md](./DOCKER_SETUP.md) - Подробная документация по Docker
- [START_HERE.md](./START_HERE.md) - Общее руководство по проекту

## 🎯 Следующие шаги

1. Запустите сервисы: `./docker-start.sh`
2. Откройте Strapi Admin и создайте администратора
3. Настройте Content Types в Strapi
4. Начните разработку!




