# Инструкции по тестированию

## Предварительные требования

1. **Docker** и **Docker Compose** должны быть установлены
2. **Node.js 18+** установлен
3. Все зависимости установлены (`npm install`)

## Шаг 1: Запуск Docker контейнеров (PostgreSQL и Redis)

```bash
# Запустить PostgreSQL и Redis в Docker
make docker-up

# Или вручную:
docker-compose -f docker-compose.dev.yml up -d

# Проверить статус контейнеров
make docker-ps

# Или:
docker-compose -f docker-compose.dev.yml ps
```

Контейнеры будут доступны:
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`

База данных `nocko_cms` создается автоматически при первом запуске.

## Шаг 2: Настройка переменных окружения

### Strapi CMS

```bash
cd apps/cms
cp .env.example .env
```

Отредактируйте `.env` и установите:
- `DATABASE_HOST=localhost` (или `postgres` если запускаете Strapi в Docker)
- `DATABASE_PORT=5432`
- `DATABASE_NAME=nocko_cms`
- `DATABASE_USERNAME=postgres`
- `DATABASE_PASSWORD=postgres`

Сгенерируйте секретные ключи:
```bash
# Для APP_KEYS (4 ключа через запятую)
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32
openssl rand -base64 32

# Для JWT_SECRET
openssl rand -base64 32

# Для ADMIN_JWT_SECRET
openssl rand -base64 32

# Для API_TOKEN_SALT
openssl rand -base64 32

# Для TRANSFER_TOKEN_SALT
openssl rand -base64 32
```

### Next.js Website

```bash
cd apps/website
```

Создайте `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## Шаг 3: Запуск Strapi CMS

```bash
cd apps/cms
npm run develop
```

При первом запуске:
1. Откройте `http://localhost:1337/admin`
2. Создайте администратора
3. После входа создайте Content Types через Admin UI:
   - Page
   - Service
   - CaseStudy
   - Article
   - Industry

4. Настройте API permissions:
   - Settings > Users & Permissions plugin > Roles
   - Edit "Public" role
   - Enable "find" and "findOne" для всех Content Types

## Шаг 4: Запуск Next.js Website

В новом терминале:

```bash
cd apps/website
npm run dev
```

Откройте `http://localhost:3000`

## Шаг 5: Тестирование

### Проверка Next.js

- ✅ Главная страница открывается
- ✅ Header и Footer отображаются
- ✅ Навигация работает
- ✅ Метаданные в `<head>` корректны

### Проверка Strapi

- ✅ Admin панель доступна
- ✅ API endpoints работают:
  - `http://localhost:1337/api/pages`
  - `http://localhost:1337/api/services`
  - `http://localhost:1337/api/case-studies`

### Проверка интеграции

После создания контента в Strapi:

1. Проверьте, что API клиент работает:
   ```typescript
   // В компоненте или странице
   import { getServices } from '@/lib/api/strapi';
   const services = await getServices();
   ```

2. Проверьте, что данные отображаются на страницах

## Docker команды

```bash
# Запустить контейнеры
make docker-up

# Остановить контейнеры
make docker-down

# Просмотр логов
make docker-logs

# Остановить и удалить контейнеры и volumes
make docker-clean

# Показать статус контейнеров
make docker-ps
```

## Известные проблемы

1. **SCSS файлы** - нужно скопировать из старого проекта или создать заново
2. **Изображения** - нужно скопировать в `apps/website/public/images/`
3. **Strapi Content Types** - нужно создать вручную через Admin UI

## Альтернатива: Запуск без Docker

Если не хотите использовать Docker, можно установить PostgreSQL локально:

```bash
# macOS
brew install postgresql@15
brew services start postgresql@15
createdb nocko_cms

# Linux (Ubuntu/Debian)
sudo apt-get install postgresql postgresql-contrib
sudo -u postgres createdb nocko_cms
```

## Следующие шаги

После успешного тестирования:
1. Создать Content Types в Strapi
2. Мигрировать контент из старого проекта
3. Создать остальные страницы
4. Настроить SEO и метаданные

