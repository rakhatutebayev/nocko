'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

export default function Header({ menu }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

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
          />
        </div>

        {menu.attributes?.ctaText && (
          <div className="header__right">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn--secondary btn--sm header__menu-cta" 
              tabIndex={0}
              aria-label={`Open contact form: ${menu.attributes.ctaText}`}
            >
              {menu.attributes.ctaText}
            </button>
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


