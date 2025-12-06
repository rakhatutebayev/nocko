# Настройка с локальным PostgreSQL

## Предварительные требования

1. **PostgreSQL** установлен локально
2. **Node.js 18+** установлен
3. Все зависимости установлены (`npm install`)

## Шаг 1: Проверка PostgreSQL

```bash
# Проверить версию
psql --version

# Проверить, что PostgreSQL запущен
psql -U postgres -c "SELECT version();"
```

Если PostgreSQL не установлен:

```bash
# macOS
brew install postgresql@15
brew services start postgresql@15
```

## Шаг 2: Создание базы данных

```bash
# Создать базу данных
createdb nocko_cms

# Или через psql
psql -U postgres -c "CREATE DATABASE nocko_cms;"

# Проверить, что база создана
psql -U postgres -c "\l" | grep nocko
```

## Шаг 3: Настройка Strapi

```bash
cd apps/cms

# Скопировать .env.example
cp .env.example .env
```

Отредактируйте `apps/cms/.env`:

```env
# Database - локальный PostgreSQL
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=nocko_cms
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_SSL=false

# Application
HOST=0.0.0.0
PORT=1337
NODE_ENV=development

# Сгенерировать секретные ключи:
# APP_KEYS (4 ключа через запятую):
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32

# JWT_SECRET:
openssl rand -base64 32

# ADMIN_JWT_SECRET:
openssl rand -base64 32

# API_TOKEN_SALT:
openssl rand -base64 32

# TRANSFER_TOKEN_SALT:
openssl rand -base64 32
```

Вставьте сгенерированные ключи в `.env`:

```env
APP_KEYS=key1,key2,key3,key4
JWT_SECRET=your_jwt_secret
ADMIN_JWT_SECRET=your_admin_jwt_secret
API_TOKEN_SALT=your_api_token_salt
TRANSFER_TOKEN_SALT=your_transfer_token_salt
```

## Шаг 4: Настройка Next.js

```bash
cd apps/website

# Создать .env.local (опционально)
cat > .env.local << EOF
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
EOF
```

## Шаг 5: Запуск

### Терминал 1: Strapi CMS

```bash
cd apps/cms
npm run develop
```

Откройте `http://localhost:1337/admin` и создайте администратора.

### Терминал 2: Next.js Website

```bash
cd apps/website
npm run dev
```

Откройте `http://localhost:3000`

## Полезные команды PostgreSQL

```bash
# Подключиться к базе данных
psql -U postgres -d nocko_cms

# Показать все таблицы
psql -U postgres -d nocko_cms -c "\dt"

# Показать все базы данных
psql -U postgres -c "\l"

# Удалить базу данных (осторожно!)
dropdb nocko_cms
```

## Troubleshooting

### Ошибка подключения к PostgreSQL

```bash
# Проверить, что PostgreSQL запущен
brew services list | grep postgres

# Запустить PostgreSQL
brew services start postgresql@15

# Проверить порт
lsof -i :5432
```

### Ошибка аутентификации

Если нужен пароль, создайте пользователя:

```bash
# Создать пользователя без пароля (для разработки)
createuser -s postgres

# Или установить пароль
psql -U postgres -c "ALTER USER postgres PASSWORD 'postgres';"
```

### База данных уже существует

```bash
# Удалить и пересоздать
dropdb nocko_cms
createdb nocko_cms
```





