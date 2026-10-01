'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuNavigation from './MenuNavigation';
import ContactModal from '../contact/ContactModal';

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

interface HeaderProps {
  menu: Menu;
}

// RU-страница ИТ-поддержки живёт вне /ru/ — у неё свой партнёр в языковом переключателе
const LANG_PAIRS: Record<string, string> = {
  '/services/it-support-ru': '/ru/services/it-support',
};
function langSwitchUrl(pathname: string): string {
  if (LANG_PAIRS[pathname]) return LANG_PAIRS[pathname];
  if (pathname === '/') return '/ru';
  if (pathname.startsWith('/ru')) return pathname.replace('/ru', '') || '/';
  return `/ru${pathname}`;
}

export default function Header({ menu }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Make all "#contact" links work across the site:
  // - If a real section with id="contact" exists on the page -> smooth scroll to it
  // - Otherwise -> open the contact modal (used on most pages)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const openContact = () => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        setIsContactModalOpen(true);
      }
    };

    const handleContactAction = () => {
      if (window.location.hash !== '#contact') return;

      openContact();

      // Remove hash to avoid re-triggering and to allow clicking the same link again
      try {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch {
        // ignore
      }
    };

    const onHashChange = () => handleContactAction();
    const onOpenContactEvent = () => openContact();

    const onDocClickCapture = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHref = anchor.getAttribute('href') || '';
      if (!rawHref) return;

      let hash = '';
      try {
        hash = new URL(rawHref, window.location.href).hash;
      } catch {
        // Best effort for malformed href
        if (rawHref.startsWith('#')) hash = rawHref;
      }

      if (hash !== '#contact') return;

      const contactEl = document.getElementById('contact');

      // If we don't have an actual contact section, prevent navigation and open modal.
      if (!contactEl) {
        e.preventDefault();
        setIsContactModalOpen(true);
      }
    };

    // Handle direct loads like "/#contact"
    handleContactAction();

    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('nocko:open-contact', onOpenContactEvent as EventListener);
    document.addEventListener('click', onDocClickCapture, true);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('nocko:open-contact', onOpenContactEvent as EventListener);
      document.removeEventListener('click', onDocClickCapture, true);
    };
  }, []);

  useEffect(() => {
    // Check if we're on client side
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Close menu on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        burgerRef.current?.focus();
      }
    };

    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(e.target as Node) &&
        !burgerRef.current.contains(e.target as Node) &&
        isMenuOpen
      ) {
        // Use setTimeout to avoid immediate closure when opening
        setTimeout(() => {
          setIsMenuOpen(false);
          setActiveDropdown(null);
        }, 0);
      }
    };

    document.addEventListener('keydown', handleEscape);
    // Use mousedown instead of click to avoid conflicts
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Убрали обработку скролла, чтобы className не менялся до/во время гидратации

  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMenuOpen((prev) => {
      if (prev) {
        setActiveDropdown(null);
      }
      return !prev;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Keep burger class static in markup; toggle active state after mount via classList
  useEffect(() => {
    if (!burgerRef.current) return;
    burgerRef.current.classList.toggle('burger--active', isMenuOpen);
  }, [isMenuOpen]);

  const toggleDropdown = (e: React.MouseEvent, dropdownName: string) => {
    if (!isMobile) return;

    e.preventDefault();
    e.stopPropagation();

    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Add / remove "scrolled" class after mount based on scroll position
  useEffect(() => {
    if (typeof window === 'undefined' || !headerRef.current) return;

    const headerEl = headerRef.current;
    const updateScrollClass = () => {
      const scrolled = (window.scrollY || window.pageYOffset || 0) > 50;
      headerEl.classList.toggle('scrolled', scrolled);
    };

    window.addEventListener('scroll', updateScrollClass, { passive: true });
    updateScrollClass(); // set initial state after mount

    return () => {
      window.removeEventListener('scroll', updateScrollClass);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${isContactModalOpen ? 'header--modal-open' : ''}`}
      role="banner"
      suppressHydrationWarning={true}
    >
      <div className="container">
        <button
          ref={burgerRef}
          className="burger"
          id="burger-btn"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </button>

        <div className="header__left">
          <Link href="/" className="header__logo">
            <Image
              src="/images/logo-white.svg"
              alt="NOCKO Information Technology"
              width={120}
              height={40}
              className="logo-white"
              priority
              unoptimized
            />
            <Image
              src="/images/logo-black.svg"
              alt="NOCKO Information Technology"
              width={120}
              height={40}
              className="logo-black"
              priority
              unoptimized
            />
          </Link>

          <MenuNavigation
            items={menu.attributes?.items || []}
            onItemClick={closeMenu}
            isMenuOpen={isMenuOpen}
            isMobile={isMobile}
            navRef={navRef}
            langUrl={langSwitchUrl(pathname)}
            langLabel={pathname.startsWith('/ru') ? 'EN' : 'RU'}
          />
        </div>

        {menu.attributes?.ctaText && (
          <div className="header__right">
            <a
              href="tel:+971542448888"
              className="header__phone"
              aria-label="Call +971 54 244 8888"
            >
              <svg
                className="header__phone-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="header__phone-label">+971 54 244 8888</span>
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn--secondary btn--sm header__menu-cta"
              tabIndex={0}
              aria-label={`Open contact form: ${menu.attributes.ctaText}`}
            >
              <svg
                className="header__menu-cta-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="header__menu-cta-label">{menu.attributes.ctaText}</span>
            </button>
            {!isMobile && (
              <Link
                href={langSwitchUrl(pathname)}
                className="btn btn--secondary btn--sm header__lang"
                aria-label="Switch language"
              >
                {pathname.startsWith('/ru') ? 'EN' : 'RU'}
              </Link>
            )}
          </div>
        )}
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </header>
  );
}


