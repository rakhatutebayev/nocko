import Header from './Header';

// Menu type based on Strapi structure
type Menu = {
  id: number;
  attributes: {
    items?: MenuItem[];
    ctaText?: string;
    ctaUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
  };
};

type MenuItem = {
  id: number;
  label: string;
  url?: string;
  isDropdown?: boolean;
  submenu?: MenuSubitem[];
  order?: number;
  linkType?: 'custom' | 'page' | 'service' | 'case-study' | 'article' | 'industry';
  linkedContent?: any;
};

type MenuSubitem = {
  id: number;
  label: string;
  url?: string;
  linkType?: 'custom' | 'page' | 'service' | 'case-study' | 'article' | 'industry';
  linkedContent?: any;
  order?: number;
};

// Static menu from original HTML translated to Russian
const staticMenu: Menu = {
  id: 0,
  attributes: {
    items: [
      {
        id: 1,
        label: 'Услуги',
        url: '#',
        isDropdown: true,
        order: 1,
        submenu: [
          { id: 1, label: 'Сети и СКС', url: '/ru/services/structured-cabling', order: 1 },
          { id: 2, label: 'ИТ Поддержка (Helpdesk)', url: '/ru/services/it-support', order: 2 },
          { id: 3, label: 'Управляемые ИТ Услуги', url: '/ru/services/managed-it', order: 3 },
          { id: 4, label: 'Абонентское обслуживание (AMC)', url: '/ru/services/it-amc', order: 4 },
          { id: 5, label: 'Кибербезопасность', url: '/ru/services/cybersecurity', order: 5 },
          { id: 6, label: 'Облачные Решения', url: '/ru/services/cloud', order: 6 },
          { id: 7, label: 'ИТ Консалтинг', url: '/ru/services/it-consulting', order: 7 },
        ],
      },
      {
        id: 2,
        label: 'Отрасли',
        url: '#',
        isDropdown: true,
        order: 2,
        submenu: [
          { id: 8, label: 'Финансы и Банки', url: '/ru/industries/finance-banking', order: 1 },
          { id: 9, label: 'Недвижимость', url: '/ru/industries/real-estate', order: 2 },
          { id: 10, label: 'Здравоохранение', url: '/ru/industries/healthcare', order: 3 },
          { id: 11, label: 'Образование', url: '/ru/industries/education', order: 4 },
          { id: 12, label: 'Ритейл и HoReCa', url: '/ru/industries/retail-hospitality', order: 5 },
          { id: 13, label: 'Государственный сектор', url: '/ru/industries/government', order: 6 },
        ],
      },
      {
        id: 3,
        label: 'Ресурсы',
        url: '#',
        isDropdown: true,
        order: 3,
        submenu: [
          { id: 14, label: 'Кейсы', url: '/ru/case-studies', order: 1 },
          { id: 15, label: 'Блог', url: '/ru/articles', order: 2 },
        ],
      },
      { id: 5, label: 'О нас', url: '/ru/about', order: 5 },
    ],
    ctaText: 'Контакты',
    ctaUrl: '#contact',
  },
};

export default function HeaderWrapperRu() {
  return <Header menu={staticMenu} />;
}
