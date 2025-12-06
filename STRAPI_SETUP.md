# Strapi CMS Setup Guide

## ✅ Content Types созданы

Следующие Content Types созданы и готовы к использованию:

1. **Page** (`api::page.page`)
   - Страницы сайта (главная, about, contact и т.д.)
   - Поля: title, slug, metaTitle, metaDescription, content, heroImage, seo, geo

2. **Service** (`api::service.service`)
   - IT услуги компании
   - Поля: title, slug, description, icon, features (JSON), caseStudies, pricing, geo

3. **Case Study** (`api::case-study.case-study`)
   - Кейсы клиентов
   - Поля: title, slug, client, industry, service, services, challenge, solution, results, testimonial, images

4. **Article** (`api::article.article`)
   - Статьи/блог
   - Поля: title, slug, excerpt, content, author, category, tags, featuredImage, seo

5. **Industry** (`api::industry.industry`)
   - Индустрии
   - Поля: name, slug, description, icon, services, caseStudies

## 🔐 Настройка API Permissions

Для настройки публичного доступа к API:

1. Откройте Strapi Admin: http://localhost:1337/admin
2. Перейдите в **Settings** → **Users & Permissions plugin** → **Roles** → **Public**
3. Включите следующие permissions:
   - **Page**: `find`, `findOne`
   - **Service**: `find`, `findOne`
   - **Case Study**: `find`, `findOne`
   - **Article**: `find`, `findOne`
   - **Industry**: `find`, `findOne`

Или используйте API для настройки (требуется административный доступ).

## 📝 Следующие шаги

1. **Создать первого администратора:**
   - Откройте http://localhost:1337/admin
   - Заполните форму регистрации

2. **Настроить Content Types через админ-панель:**
   - Добавить компоненты (если нужно)
   - Настроить поля
   - Добавить валидацию

3. **Импортировать контент:**
   - Использовать скрипт миграции (будет создан позже)
   - Или вручную через админ-панель

## 🔗 API Endpoints

После настройки permissions будут доступны:

- `GET /api/pages` - список всех страниц
- `GET /api/pages/:id` - конкретная страница
- `GET /api/services` - список услуг
- `GET /api/services/:id` - конкретная услуга
- `GET /api/case-studies` - список кейсов
- `GET /api/case-studies/:id` - конкретный кейс
- `GET /api/articles` - список статей
- `GET /api/articles/:id` - конкретная статья
- `GET /api/industries` - список индустрий
- `GET /api/industries/:id` - конкретная индустрия

## 📚 Документация

- [Strapi Documentation](https://docs.strapi.io)
- [Content Types](https://docs.strapi.io/dev-docs/backend-customization/models)
- [API Documentation](https://docs.strapi.io/dev-docs/api/rest)




