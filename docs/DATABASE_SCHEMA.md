# Database Schema Documentation

## PostgreSQL Database Structure for Strapi CMS

Strapi автоматически создает таблицы на основе Content Types. Ниже описана структура, которая будет создана.

### Системные таблицы Strapi

Эти таблицы создаются автоматически Strapi:

- `strapi_core_store_settings` - настройки системы
- `strapi_administrator` - администраторы CMS
- `strapi_users` - пользователи (если используется плагин users-permissions)
- `strapi_roles` - роли пользователей
- `strapi_permissions` - права доступа
- `strapi_api_tokens` - API токены для доступа к API
- `strapi_webhooks` - вебхуки
- `strapi_migrations` - история миграций

### Content Types таблицы

Таблицы создаются автоматически на основе Content Types:

#### `pages`
Страницы сайта (главная, about, contact и т.д.)

```sql
CREATE TABLE pages (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  content TEXT,
  hero_image INTEGER REFERENCES upload_files(id),
  seo JSONB,
  geo JSONB,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by_id INTEGER REFERENCES strapi_users(id),
  updated_by_id INTEGER REFERENCES strapi_users(id)
);
```

#### `services`
Услуги компании

```sql
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon INTEGER REFERENCES upload_files(id),
  features JSONB,
  pricing JSONB,
  geo JSONB,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by_id INTEGER REFERENCES strapi_users(id),
  updated_by_id INTEGER REFERENCES strapi_users(id)
);
```

#### `case_studies`
Кейсы клиентов

```sql
CREATE TABLE case_studies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  client VARCHAR(255),
  industry VARCHAR(255),
  service INTEGER REFERENCES services(id),
  challenge TEXT,
  solution TEXT,
  results JSONB,
  testimonial TEXT,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by_id INTEGER REFERENCES strapi_users(id),
  updated_by_id INTEGER REFERENCES strapi_users(id)
);
```

#### `articles`
Статьи/блог

```sql
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  author INTEGER REFERENCES strapi_users(id),
  category VARCHAR(255),
  tags JSONB,
  featured_image INTEGER REFERENCES upload_files(id),
  seo JSONB,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by_id INTEGER REFERENCES strapi_users(id),
  updated_by_id INTEGER REFERENCES strapi_users(id)
);
```

#### `industries`
Индустрии

```sql
CREATE TABLE industries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon INTEGER REFERENCES upload_files(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by_id INTEGER REFERENCES strapi_users(id),
  updated_by_id INTEGER REFERENCES strapi_users(id)
);
```

### Связи Many-to-Many

Strapi создает промежуточные таблицы для many-to-many связей:

#### `services_case_studies_links`
Связь услуг с кейсами

```sql
CREATE TABLE services_case_studies_links (
  id SERIAL PRIMARY KEY,
  service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
  case_study_id INTEGER REFERENCES case_studies(id) ON DELETE CASCADE,
  service_order INTEGER,
  case_study_order INTEGER,
  UNIQUE(service_id, case_study_id)
);
```

#### `industries_services_links`
Связь индустрий с услугами

```sql
CREATE TABLE industries_services_links (
  id SERIAL PRIMARY KEY,
  industry_id INTEGER REFERENCES industries(id) ON DELETE CASCADE,
  service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
  industry_order INTEGER,
  service_order INTEGER,
  UNIQUE(industry_id, service_id)
);
```

#### `industries_case_studies_links`
Связь индустрий с кейсами

```sql
CREATE TABLE industries_case_studies_links (
  id SERIAL PRIMARY KEY,
  industry_id INTEGER REFERENCES industries(id) ON DELETE CASCADE,
  case_study_id INTEGER REFERENCES case_studies(id) ON DELETE CASCADE,
  industry_order INTEGER,
  case_study_order INTEGER,
  UNIQUE(industry_id, case_study_id)
);
```

### Медиа файлы

#### `upload_files`
Файлы загруженные в Strapi Media Library

```sql
CREATE TABLE upload_files (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  alternative_text TEXT,
  caption TEXT,
  width INTEGER,
  height INTEGER,
  formats JSONB,
  hash VARCHAR(255) NOT NULL,
  ext VARCHAR(10),
  mime VARCHAR(255),
  size DECIMAL(10,2),
  url VARCHAR(255) NOT NULL,
  preview_url VARCHAR(255),
  provider VARCHAR(255),
  provider_metadata JSONB,
  folder_path VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by_id INTEGER REFERENCES strapi_users(id),
  updated_by_id INTEGER REFERENCES strapi_users(id)
);
```

#### `upload_folders`
Папки для организации медиа файлов

```sql
CREATE TABLE upload_folders (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  path_id INTEGER,
  path VARCHAR(255),
  parent_id INTEGER REFERENCES upload_folders(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by_id INTEGER REFERENCES strapi_users(id),
  updated_by_id INTEGER REFERENCES strapi_users(id)
);
```

## Индексы

Strapi автоматически создает индексы для:
- `slug` полей (UNIQUE)
- Foreign keys
- `published_at` для фильтрации опубликованного контента

## Миграции

Все изменения в схеме БД управляются через Strapi миграции. Не редактируйте таблицы вручную - используйте Strapi Admin UI или API.




