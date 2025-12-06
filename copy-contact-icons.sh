#!/bin/bash
# Скрипт для копирования иконок контактов из docs/contacts в public/images/contacts

SOURCE_DIR="docs/contacts"
DEST_DIR="apps/website/public/images/contacts"

if [ -d "$SOURCE_DIR" ]; then
  # Создаем директорию назначения, если её нет
  mkdir -p "$DEST_DIR"
  
  # Копируем все SVG файлы
  if ls "$SOURCE_DIR"/*.svg 1> /dev/null 2>&1; then
    cp "$SOURCE_DIR"/*.svg "$DEST_DIR/"
    echo "✅ Иконки скопированы из $SOURCE_DIR в $DEST_DIR"
    ls -la "$DEST_DIR"
  else
    echo "⚠️  SVG файлы не найдены в $SOURCE_DIR"
  fi
else
  echo "⚠️  Директория $SOURCE_DIR не существует"
fi
