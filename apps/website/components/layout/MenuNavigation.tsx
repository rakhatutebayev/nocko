'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Menu types based on Strapi structure
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

interface MenuNavigationProps {
  items: MenuItem[];
  onItemClick?: () => void;
  isMenuOpen: boolean;
  isMobile: boolean;
  navRef?: React.RefObject<HTMLElement | null>;
}

export default function MenuNavigation({ items, onItemClick, isMenuOpen, isMobile, navRef }: MenuNavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    // Close dropdowns when menu is closed
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  }, [isMenuOpen]);

  const toggleDropdown = (e: React.MouseEvent, itemId: string) => {
    if (!isMobile) return;

    e.preventDefault();
    e.stopPropagation();

    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  // Sort items by order
  const sortedItems = [...items].sort((a, b) => (a.order || 0) - (b.order || 0));

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  // Generate URL from linkType and linkedContent if needed
  const getItemUrl = (menuItem: MenuItem | MenuSubitem): string => {
    // If URL is explicitly set and not null/empty, use it
    if (menuItem.url && menuItem.url.trim() && menuItem.url !== 'null') {
      return menuItem.url;
    }
    
    // If linkType is set and linkedContent exists, generate URL dynamically
    if (menuItem.linkType && menuItem.linkType !== 'custom' && menuItem.linkedContent) {
      const slug = menuItem.linkedContent?.attributes?.slug || menuItem.linkedContent?.slug;
      if (slug) {
        const typeMap: Record<string, string> = {
          'service': '/services',
          'case-study': '/case-studies',
          'article': '/articles',
          'page': '',
          'industry': '/industries',
        };
        const basePath = typeMap[menuItem.linkType] || '';
        return basePath ? `${basePath}/${slug}` : `/${slug}`;
      }
    }
    
    // Default fallback
    return '#';
  };

  return (
    <>
      <nav 
        ref={navRef as React.RefObject<HTMLElement>}
        id="main-nav" 
        className={`header__nav ${isMenuOpen ? 'is-open' : ''}`} 
        role="navigation"
      >
        <ul className="header__menu" role="menubar">
          {sortedItems.map((item) => {
            const itemId = `menu-${item.id}`;
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isActive = activeDropdown === itemId;
            const itemUrl = getItemUrl(item);

            // Sort submenu by order
            const sortedSubmenu = hasSubmenu
              ? [...item.submenu!].sort((a, b) => (a.order || 0) - (b.order || 0))
              : [];

            return (
              <li
                key={item.id}
                className={`header__menu-item ${
                  hasSubmenu ? 'header__menu-item--dropdown' : ''
                } ${isActive ? 'is-active' : ''}`}
                role="none"
              >
                {hasSubmenu ? (
                  <a
                    href={itemUrl}
                    role="menuitem"
                    tabIndex={0}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    onClick={(e) => toggleDropdown(e, itemId)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={itemUrl}
                    role="menuitem"
                    tabIndex={0}
                    onClick={handleItemClick}
                  >
                    {item.label}
                  </Link>
                )}
                {hasSubmenu && (
                  <ul
                    className={`header__dropdown ${isActive ? 'is-open' : ''}`}
                    role="menu"
                  >
                    {sortedSubmenu.map((subitem) => {
                      const subitemUrl = getItemUrl(subitem);
                      
                      return (
                        <li key={subitem.id} className="header__dropdown-item">
                          <Link
                            className="header__dropdown-link"
                            href={subitemUrl}
                            role="menuitem"
                            onClick={handleItemClick}
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

