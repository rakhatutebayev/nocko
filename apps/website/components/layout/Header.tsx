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
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Убрали обработку скролла, чтобы className не менялся до/во время гидратации

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
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
            />
            <Image
              src="/images/logo-black.svg"
              alt="NOCKO Information Technology"
              width={120}
              height={40}
              className="logo-black"
              priority
            />
          </Link>

          <MenuNavigation
            items={menu.attributes?.items || []}
            onItemClick={closeMenu}
            isMenuOpen={isMenuOpen}
            isMobile={isMobile}
          />
        </div>

        {menu.attributes?.ctaText && (
          <div className="header__right">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn btn--secondary btn--sm header__menu-cta" 
              role="menuitem" 
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


