import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    description: 'Navigation menu item with optional dropdown submenu (max 2 levels)';
    displayName: 'Menu Item';
    icon: 'list';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    linkType: Schema.Attribute.Enumeration<
      ['custom', 'page', 'service', 'case-study', 'article', 'industry']
    > &
      Schema.Attribute.DefaultTo<'custom'>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    submenu: Schema.Attribute.Component<'menu.menu-subitem', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      >;
    url: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface MenuMenuSubitem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_subitems';
  info: {
    description: 'Submenu item (dropdown item) - second level only';
    displayName: 'Menu Subitem';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    linkType: Schema.Attribute.Enumeration<
      ['custom', 'page', 'service', 'case-study', 'article', 'industry']
    > &
      Schema.Attribute.DefaultTo<'custom'>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    url: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface ServiceServiceArticleBlock6BlocksSection
  extends Struct.ComponentSchema {
  collectionName: 'components_service_article_block_6_blocks_sections';
  info: {
    description: 'Article block for 6 blocks section with article relation and border color';
    displayName: 'Service Article Block (6 blocks section)';
    icon: 'file';
  };
  attributes: {
    blockArticle: Schema.Attribute.Relation<
      'oneToOne',
      'api::article.article'
    > &
      Schema.Attribute.Required;
    blockBorderColor: Schema.Attribute.Enumeration<
      [
        '\u0421\u0438\u043D\u0438\u0439 (#3474ff)',
        '\u0413\u043E\u043B\u0443\u0431\u043E\u0439 (#00aeff)',
        '\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439 (#583bec)',
        '\u0417\u0435\u043B\u0435\u043D\u044B\u0439 (#11c979)',
        '\u0416\u0435\u043B\u0442\u044B\u0439 (#ffcc2a)',
        '\u041A\u0440\u0430\u0441\u043D\u044B\u0439 (#ec5050)',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0438\u043D\u0438\u0439 (#3474ff)'>;
  };
}

export interface ServiceServiceArticleCard3CardsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_service_article_card_3_cards_sections';
  info: {
    description: 'Article card for 3 cards section with article relation, color and SVG icon';
    displayName: 'Service Article Card (3 cards section)';
    icon: 'file';
  };
  attributes: {
    cardArticle: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    cardColor: Schema.Attribute.Enumeration<
      [
        '\u0421\u0438\u043D\u0438\u0439 (#3474ff)',
        '\u0413\u043E\u043B\u0443\u0431\u043E\u0439 (#00aeff)',
        '\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439 (#583bec)',
        '\u0417\u0435\u043B\u0435\u043D\u044B\u0439 (#11c979)',
        '\u0416\u0435\u043B\u0442\u044B\u0439 (#ffcc2a)',
        '\u041A\u0440\u0430\u0441\u043D\u044B\u0439 (#ec5050)',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0438\u043D\u0438\u0439 (#3474ff)'>;
    cardIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ServiceServiceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_service_hero_sections';
  info: {
    description: 'Hero section with title and subtitle for service pages';
    displayName: 'Service Hero Section';
    icon: 'heading';
  };
  attributes: {
    heroSubtitle: Schema.Attribute.Text;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu-item': MenuMenuItem;
      'menu.menu-subitem': MenuMenuSubitem;
      'service.service-article-block-6-blocks-section': ServiceServiceArticleBlock6BlocksSection;
      'service.service-article-card-3-cards-section': ServiceServiceArticleCard3CardsSection;
      'service.service-hero-section': ServiceServiceHeroSection;
    }
  }
}
