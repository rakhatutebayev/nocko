#!/bin/bash

# Скрипт для автоматического тестирования API меню
# Использование: ./scripts/test-menu-api.sh

STRAPI_URL="http://localhost:1337"
MENU_ENDPOINT="$STRAPI_URL/api/menu"

echo "🧪 Автоматическое тестирование API меню"
echo "========================================"
echo ""

# Тест 1: Базовый запрос
echo "ТЕСТ 1: Базовый запрос к API"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$MENU_ENDPOINT")
RESPONSE=$(curl -s "$MENU_ENDPOINT")

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ УСПЕХ: HTTP $HTTP_CODE"
    echo "Данные меню:"
    echo "$RESPONSE" | jq '.data' 2>/dev/null || echo "$RESPONSE" | head -20
    echo ""
    ITEMS_COUNT=$(echo "$RESPONSE" | jq '.data.attributes.items | length' 2>/dev/null || echo "0")
    echo "Количество пунктов меню: $ITEMS_COUNT"
    exit 0
elif [ "$HTTP_CODE" = "404" ]; then
    echo "❌ ОШИБКА: HTTP 404 - Menu Not Found"
    echo ""
    echo "Возможные причины:"
    echo "1. Меню не создано в Content Manager"
    echo "2. Меню не опубликовано (только Draft)"
    echo "3. Права доступа не настроены"
    echo ""
    echo "Решение:"
    echo "1. Откройте: $STRAPI_URL/admin"
    echo "2. Settings → Users & Permissions → Roles → Public"
    echo "3. Найдите 'Single Types' → 'Main Menu'"
    echo "4. Включите все опции и нажмите 'Save'"
    exit 1
elif [ "$HTTP_CODE" = "403" ]; then
    echo "❌ ОШИБКА: HTTP 403 - Forbidden"
    echo "Проблема с правами доступа!"
    exit 1
else
    echo "❌ ОШИБКА: HTTP $HTTP_CODE"
    echo "Ответ:"
    echo "$RESPONSE" | head -10
    exit 1
fi



