#!/bin/bash

echo "🔍 Проверка сервисов NOCKO Platform"
echo "===================================="
echo ""

# Проверка PostgreSQL
echo "1. Проверка PostgreSQL..."
if psql -U postgres -d nocko_cms -c "SELECT 1;" > /dev/null 2>&1; then
    echo "   ✅ PostgreSQL работает"
else
    echo "   ❌ PostgreSQL не доступен"
    echo "   Запустите: brew services start postgresql@14"
fi
echo ""

# Проверка портов
echo "2. Проверка портов..."
if lsof -i :1337 | grep LISTEN > /dev/null 2>&1; then
    echo "   ✅ Порт 1337 (Strapi) занят"
    STRAPI_RUNNING=true
else
    echo "   ⚠️  Порт 1337 свободен - Strapi не запущен"
    STRAPI_RUNNING=false
fi

if lsof -i :3000 | grep LISTEN > /dev/null 2>&1; then
    echo "   ✅ Порт 3000 (Next.js) занят"
    NEXTJS_RUNNING=true
else
    echo "   ⚠️  Порт 3000 свободен - Next.js не запущен"
    NEXTJS_RUNNING=false
fi
echo ""

# Проверка доступности через HTTP
echo "3. Проверка HTTP доступности..."

if [ "$STRAPI_RUNNING" = true ]; then
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:1337/api 2>/dev/null)
    if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "403" ] || [ "$HTTP_CODE" = "404" ]; then
        echo "   ✅ Strapi отвечает (HTTP $HTTP_CODE)"
        echo "   🌐 Откройте: http://localhost:1337/admin"
    else
        echo "   ❌ Strapi не отвечает (HTTP $HTTP_CODE)"
    fi
else
    echo "   ⚠️  Strapi не запущен"
fi

if [ "$NEXTJS_RUNNING" = true ]; then
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null)
    if [ "$HTTP_CODE" = "200" ]; then
        echo "   ✅ Next.js отвечает (HTTP $HTTP_CODE)"
        echo "   🌐 Откройте: http://localhost:3000"
    else
        echo "   ❌ Next.js не отвечает (HTTP $HTTP_CODE)"
    fi
else
    echo "   ⚠️  Next.js не запущен"
fi
echo ""

# Инструкции
echo "📝 Инструкции:"
if [ "$STRAPI_RUNNING" = false ]; then
    echo "   Запустите Strapi:"
    echo "   cd apps/cms && npm run develop"
fi
if [ "$NEXTJS_RUNNING" = false ]; then
    echo "   Запустите Next.js:"
    echo "   cd apps/website && npm run dev"
fi
echo ""




