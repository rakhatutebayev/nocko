export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Auto-configure permissions for Main Menu Single Type
    try {
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({
          where: { type: 'public' },
        });

      if (publicRole) {
        // Get all permissions
        const permissions = await strapi
          .query('plugin::users-permissions.permission')
          .findMany({
            where: {
              role: publicRole.id,
              action: {
                $contains: 'api::menu.menu',
              },
            },
          });

        // If no permissions exist, create them
        if (permissions.length === 0) {
          const actions = ['find', 'findOne'];
          
          for (const action of actions) {
            await strapi
              .query('plugin::users-permissions.permission')
              .create({
                data: {
                  action: `api::menu.menu.${action}`,
                  role: publicRole.id,
                },
              });
          }
          
          console.log('✅ Автоматически настроены права доступа для Main Menu');
        } else {
          // Enable existing permissions
          for (const permission of permissions) {
            if (!permission.enabled) {
              await strapi
                .query('plugin::users-permissions.permission')
                .update({
                  where: { id: permission.id },
                  data: { enabled: true },
                });
            }
          }
          console.log('✅ Права доступа для Main Menu уже настроены');
        }
      }
    } catch (error) {
      console.warn('⚠️  Не удалось автоматически настроить права для Main Menu:', error.message);
      console.warn('   Настройте права вручную в админке: Settings → Roles → Public → Single Types → Main Menu');
    }
  },
};
