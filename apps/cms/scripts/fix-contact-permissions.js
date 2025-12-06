/**
 * Скрипт для исправления прав доступа для Contact
 * Запустить внутри контейнера: docker exec -it nocko-cms node scripts/fix-contact-permissions.js
 */

const Strapi = require('@strapi/strapi');

let app;

async function fixContactPermissions() {
  try {
    console.log('🚀 Загрузка Strapi...');
    app = await Strapi().load();
    
    console.log('🔍 Поиск публичной роли...');
    const publicRole = await app
      .query('plugin::users-permissions.role')
      .findOne({
        where: { type: 'public' },
      });

    if (!publicRole) {
      console.error('❌ Публичная роль не найдена');
      process.exit(1);
    }

    console.log('✅ Найдена публичная роль ID:', publicRole.id);

    // Получаем все права для Contact
    const allContactPermissions = await app
      .query('plugin::users-permissions.permission')
      .findMany({
        where: {
          role: publicRole.id,
        },
      });

    const contactPermissions = allContactPermissions.filter(
      p => p.action && p.action.includes('api::contact.contact')
    );

    console.log('📋 Найдено прав для Contact:', contactPermissions.length);
    contactPermissions.forEach(p => {
      console.log(`   - ${p.action}: enabled=${p.enabled}`);
    });

    // Проверяем право на create
    let createPermission = contactPermissions.find(
      p => p.action === 'api::contact.contact.create'
    );

    if (!createPermission) {
      console.log('➕ Создание права create...');
      createPermission = await app
        .query('plugin::users-permissions.permission')
        .create({
          data: {
            action: 'api::contact.contact.create',
            role: publicRole.id,
            enabled: true,
          },
        });
      console.log('✅ Право create создано и включено');
    } else {
      if (!createPermission.enabled) {
        console.log('🔧 Включение права create...');
        await app
          .query('plugin::users-permissions.permission')
          .update({
            where: { id: createPermission.id },
            data: { enabled: true },
          });
        console.log('✅ Право create включено');
      } else {
        console.log('✅ Право create уже включено');
      }
    }

    // Проверяем финальное состояние
    const finalPermission = await app
      .query('plugin::users-permissions.permission')
      .findOne({
        where: {
          role: publicRole.id,
          action: 'api::contact.contact.create',
        },
      });

    if (finalPermission && finalPermission.enabled) {
      console.log('\n✅ Успешно! Права доступа для Contact настроены.');
      console.log('📧 Форма контактов теперь должна работать!');
    } else {
      console.log('\n❌ Ошибка: Право не было настроено правильно');
    }

    await app.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Ошибка:', error);
    if (app) {
      await app.destroy();
    }
    process.exit(1);
  }
}

fixContactPermissions();



