#!/bin/bash

# Скрипт для создания компонентов сервисов в Strapi через API
# Требуется: Strapi должен быть запущен и админ должен быть создан

STRAPI_URL="http://localhost:1337"
ADMIN_EMAIL="${STRAPI_ADMIN_EMAIL:-admin@example.com}"
ADMIN_PASSWORD="${STRAPI_ADMIN_PASSWORD:-Admin123!}"

echo "🔧 Создание компонентов для сервисов в Strapi"
echo "=============================================="
echo ""

# Шаг 1: Получение JWT токена
echo "1. Получение JWT токена..."
LOGIN_RESPONSE=$(curl -s -X POST "$STRAPI_URL/admin/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$ADMIN_EMAIL\",\"password\":\"$ADMIN_PASSWORD\"}")

JWT_TOKEN=$(echo "$LOGIN_RESPONSE" | python3 -c "import sys, json; d=json.load(sys.stdin); print(d.get('data', {}).get('token', ''))" 2>/dev/null)

if [ -z "$JWT_TOKEN" ]; then
  echo "❌ Ошибка: Не удалось получить JWT токен"
  echo "Проверьте логин и пароль администратора"
  echo ""
  echo "💡 Создайте компоненты вручную через админку:"
  echo "1. http://localhost:1337/admin"
  echo "2. Settings → Content-Type Builder → Components"
  echo "3. Создайте компоненты согласно инструкции в docs/CREATE_SERVICE_COMPONENTS.md"
  exit 1
fi

echo "✅ JWT токен получен"
echo ""

# Шаг 2: Создание компонента Service Hero Section
echo "2. Создание компонента 'Service Hero Section'..."
HERO_RESPONSE=$(curl -s -X POST "$STRAPI_URL/content-type-builder/components" \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "component": {
      "category": "service",
      "displayName": "Service Hero Section",
      "icon": "heading",
      "attributes": {
        "heroTitle": {
          "type": "string",
          "required": true
        },
        "heroSubtitle": {
          "type": "text",
          "required": false
        }
      }
    }
  }')

if echo "$HERO_RESPONSE" | grep -q "error\|Error"; then
  echo "⚠️  Компонент уже существует или ошибка создания"
else
  echo "✅ Компонент 'Service Hero Section' создан"
fi
echo ""

# Шаг 3: Создание компонента Service Article Block
echo "3. Создание компонента 'Service Article Block (6 blocks section)'..."
BLOCK_RESPONSE=$(curl -s -X POST "$STRAPI_URL/content-type-builder/components" \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "component": {
      "category": "service",
      "displayName": "Service Article Block (6 blocks section)",
      "icon": "file",
      "attributes": {
        "blockTitle": {
          "type": "string",
          "required": true
        },
        "blockExcerpt": {
          "type": "text",
          "required": true
        },
        "blockUrl": {
          "type": "string",
          "required": true
        },
        "blockBorderColor": {
          "type": "enumeration",
          "enum": ["#3474ff", "#00aeff", "#583bec", "#11c979", "#ffcc2a", "#ec5050"],
          "default": "#3474ff",
          "required": true
        }
      }
    }
  }')

if echo "$BLOCK_RESPONSE" | grep -q "error\|Error"; then
  echo "⚠️  Компонент уже существует или ошибка создания"
else
  echo "✅ Компонент 'Service Article Block (6 blocks section)' создан"
fi
echo ""

# Шаг 4: Создание компонента Service Article Card
echo "4. Создание компонента 'Service Article Card (3 cards section)'..."
CARD_RESPONSE=$(curl -s -X POST "$STRAPI_URL/content-type-builder/components" \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "component": {
      "category": "service",
      "displayName": "Service Article Card (3 cards section)",
      "icon": "file",
      "attributes": {
        "cardArticle": {
          "type": "relation",
          "relation": "oneToOne",
          "target": "api::article.article"
        },
        "cardColor": {
          "type": "enumeration",
          "enum": ["#3474ff", "#00aeff", "#583bec", "#11c979", "#ffcc2a", "#ec5050"],
          "default": "#3474ff",
          "required": true
        },
        "cardIcon": {
          "type": "media",
          "multiple": false,
          "required": false,
          "allowedTypes": ["images", "files"]
        }
      }
    }
  }')

if echo "$CARD_RESPONSE" | grep -q "error\|Error"; then
  echo "⚠️  Компонент уже существует или ошибка создания"
else
  echo "✅ Компонент 'Service Article Card (3 cards section)' создан"
fi
echo ""

echo "✅ Готово!"
echo ""
echo "💡 Следующий шаг: Добавьте компоненты в Service через админку:"
echo "1. Settings → Content-Type Builder → Collection Types → Service"
echo "2. Добавьте поля: hero, articleBlocks, articleCards"
echo "3. Перезапустите Strapi: docker-compose restart cms"



