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

// Static menu from original HTML (header.html)
const staticMenu: Menu = {
  id: 0,
  attributes: {
    items: [
      {
        id: 1,
        label: 'Services',
        url: '#',
        isDropdown: true,
        order: 1,
        submenu: [
          { id: 1, label: 'Structured Cabling', url: '/services/structured-cabling', order: 1 },
          { id: 2, label: 'IT Support & Helpdesk', url: '/services/it-support', order: 2 },
          { id: 3, label: 'Managed IT Services', url: '/services/managed-it', order: 3 },
          { id: 4, label: 'IT AMC', url: '/services/it-amc', order: 4 },
          { id: 5, label: 'Cybersecurity', url: '/services/cybersecurity', order: 5 },
          { id: 6, label: 'Cloud & Data Services', url: '/services/cloud', order: 6 },
          { id: 7, label: 'IT Consulting', url: '/services/it-consulting', order: 7 },
        ],
      },
      {
        id: 2,
        label: 'Industries',
        url: '#',
        isDropdown: true,
        order: 2,
        submenu: [
          { id: 8, label: 'Finance & Banking', url: '#', order: 1 },
          { id: 9, label: 'Real Estate', url: '#', order: 2 },
          { id: 10, label: 'Healthcare', url: '#', order: 3 },
          { id: 11, label: 'Education', url: '#', order: 4 },
          { id: 12, label: 'Retail & Hospitality', url: '#', order: 5 },
          { id: 13, label: 'Government', url: '#', order: 6 },
        ],
      },
      { id: 3, label: 'Case Studies', url: '/case-studies', order: 3 },
      { id: 4, label: 'Blog', url: '#', order: 4 },
      { id: 5, label: 'About Us', url: '/about', order: 5 },
    ],
    ctaText: 'Contact',
    ctaUrl: '#',
  },
};

export default function HeaderWrapper() {
  // Always use static menu from original HTML
  return <Header menu={staticMenu} />;
}

