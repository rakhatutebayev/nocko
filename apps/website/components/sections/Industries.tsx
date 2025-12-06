'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';

interface Industry {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  fullDescription: string;
  serviceType: string;
}

interface IndustriesProps {
  title?: string;
  subtitle?: string;
  industries?: Industry[];
}

const defaultIndustries: Industry[] = [
  {
    id: 'corporate',
    name: 'Corporate & Enterprise',
    icon: '/images/industries/enterprise.svg',
    image: '/images/industries/enterprise.png',
    description: 'Full-cycle IT support for corporate environments, headquarters, and multi-office structures across UAE.',
    fullDescription:
      'Building, maintaining, and optimizing IT ecosystems — from internal communication systems and secure access controls to cloud infrastructures, virtualization, and workflow automation. Enterprises achieve operational continuity through proactive monitoring, asset management, failover protection, and strict security policies.',
    serviceType: 'Corporate IT Solutions',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Retail',
    icon: '/images/industries/hospitality.svg',
    image: '/images/industries/retail.png',
    description: 'Smart IT infrastructure tailored for hotels, restaurants, malls, and retail chains across UAE.',
    fullDescription:
      'Modernizing customer-facing environments with stable high-speed networks, POS terminals, secure wireless access, reservation and check-in systems, inventory tracking, and centralized payment platforms. Seamless integration of loyalty programs, digital signage, CCTV, and IoT devices ensures flawless guest experiences while maintaining efficient internal operations.',
    serviceType: 'Hospitality & Retail IT Solutions',
  },
  {
    id: 'education',
    name: 'Education & E-Learning',
    icon: '/images/industries/education.svg',
    image: '/images/industries/education.png',
    description: 'End-to-end digital ecosystems built for schools, universities, academies, and online learning platforms across UAE.',
    fullDescription:
      'Deploying secure LMS solutions, student portals, virtual classrooms, cloud collaboration tools, content distribution systems, and high-performance networks that support thousands of concurrent users. Institutions transition to hybrid or fully digital learning environments with device management, content delivery optimization, user authentication, and secure storage of student records.',
    serviceType: 'Education Technology',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: '/images/industries/healthcare.svg',
    image: '/images/industries/healthcare.png',
    description: 'Robust healthcare IT that protects sensitive data and supports critical medical workflows for hospitals, clinics, and medical facilities across UAE.',
    fullDescription:
      'Building and maintaining EMR/EHR systems, appointment platforms, imaging storage (PACS), telemedicine connections, secure internal networks, and encrypted communication channels. Optimizing clinical operations with high-availability infrastructure, device integration, automated backups, and redundancy — ensuring clinic IT remains stable even during peak patient load or emergency situations.',
    serviceType: 'Healthcare IT Solutions',
  },
  {
    id: 'realestate',
    name: 'Real Estate & Construction',
    icon: '/images/industries/retail.svg',
    image: '/images/industries/manufacturing.png',
    description: 'IT solutions engineered for construction sites, real estate firms, and property management operations across UAE.',
    fullDescription:
      'Providing rapid-deployment networks for field teams, rugged connectivity for construction zones, real-time communication tools, project management systems, and cloud environments for BIM files, CAD documents, and large datasets. Streamlining operations by integrating contractor communication, mobile device management, on-site surveillance, access control systems, and asset tracking platforms.',
    serviceType: 'Real Estate & Construction IT',
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: '/images/industries/finance.svg',
    image: '/images/industries/finance.png',
    description: 'Ultra-secure IT infrastructure engineered for banks, fintech platforms, payment providers, and insurance firms across UAE.',
    fullDescription:
      'Implementing encrypted networks, secure transaction gateways, fraud-detection systems, identity-verification workflows, compliance frameworks, and financial-grade cybersecurity controls. Supporting digital banking platforms, e-payment systems, trading environments, and cloud-based financial applications with proactive monitoring, risk management, and guaranteed business continuity.',
    serviceType: 'Financial Services IT',
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    icon: '/images/industries/logistics.svg',
    image: '/images/industries/logistics.png',
    description: 'IT that keeps goods and data flowing — fast, safe, and trackable. Comprehensive IT solutions for warehouses, fleets, and distribution networks across UAE.',
    fullDescription:
      'Optimizing logistics operations with advanced tracking systems, warehouse automation, real-time communication platforms, fleet management telematics, secure communication across sites and vehicles, smart routing, performance analytics, and integration with shipping and delivery platforms.',
    serviceType: 'Logistics IT Solutions',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '/images/industries/manufacturing.svg',
    image: '/images/industries/manufacturing.png',
    description: 'Technology that keeps production moving without delays. Comprehensive IT support for automation, monitoring, and connected production floors across UAE.',
    fullDescription:
      'Empowering manufacturing facilities with smart factory solutions that integrate production systems, quality control, and supply chain management. Our IT infrastructure ensures seamless connectivity between machinery, control systems, and enterprise applications — including factory network optimization, equipment connectivity (IIoT), real-time monitoring dashboards, automated alerts, production data analytics, and ERP integration.',
    serviceType: 'Manufacturing IT Solutions',
  },
];

export default function Industries({
  title = 'IT Solutions for Industries in UAE: Healthcare, Finance, Retail & More',
  subtitle = 'NOCKO provides specialized IT solutions for businesses across 8+ industries in UAE. Industry-specific IT infrastructure and support tailored to your sector\'s requirements.',
  industries = defaultIndustries,
}: IndustriesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const accordionRef = useRef<HTMLDivElement>(null);
  const contentAreaRef = useRef<HTMLDivElement | null>(null);
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const desktopAppliedRef = useRef(false);

  const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 992;

  const handleMobileToggle = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMobile()) return;
    e.preventDefault();
    e.stopPropagation();

    if (activeIndex === index) {
      // Close
      setActiveIndex(-1);
    } else {
      // Open
      setActiveIndex(index);
    }
  };

  // Update active state when activeIndex changes
  useEffect(() => {
    if (typeof window === 'undefined' || !accordionRef.current) return;

    const accordionRoot = accordionRef.current;
    const items = Array.from(accordionRoot.querySelectorAll('.accordion-item'));
    if (!items.length) return;

    const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');
    const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
    const OPEN_DUR = 0.45;
    const CLOSE_DUR = 0.75;
    const dur = (type: 'open' | 'close') => (PREFERS_REDUCED_MOTION.matches ? 0 : (type === 'open' ? OPEN_DUR : CLOSE_DUR));

    const updateActiveState = (idx: number) => {
      items.forEach((it, i) => {
        const header = it.querySelector('.accordion-item__header') as HTMLElement | null;
        const content = it.querySelector('.accordion-item__content') as HTMLElement | null;
        const isActive = i === idx && idx >= 0;
        const wasActive = it.classList.contains('active');
        
        it.classList.toggle('active', isActive);
        if (header) {
          header.classList.toggle('active', isActive);
          header.setAttribute('aria-expanded', String(isActive));
        }
        if (content) {
          content.classList.toggle('active', isActive);
          content.setAttribute('aria-hidden', String(!isActive));
          
          // Mobile animation
          if (isMobile()) {
            // Ensure initial state for closed items
            if (!isActive && !wasActive) {
              content.style.height = '0px';
              content.style.paddingTop = '0';
              content.style.paddingBottom = '0';
              content.style.overflow = 'hidden';
            }
            
            if (isActive && !wasActive) {
              // Opening animation (exactly like static version)
              content.style.transition = `height ${dur('open')}s ${EASING}, padding ${dur('open')}s ${EASING}`;
              content.style.height = '0px';
              content.style.paddingTop = '20px';
              content.style.paddingBottom = '20px';
              void content.offsetHeight; // reflow
              content.style.height = content.scrollHeight + 'px';
              const openEnd = (e: TransitionEvent) => {
                if (e.propertyName === 'height') {
                  // Clean up inline height so responsive changes work
                  content.style.removeProperty('height');
                  content.style.removeProperty('transition');
                  content.removeEventListener('transitionend', openEnd as EventListener);
                }
              };
              content.addEventListener('transitionend', openEnd as EventListener);
            } else if (!isActive && wasActive) {
              // Closing animation (exactly like static version)
              const currentHeight = content.scrollHeight;
              content.style.transition = `height ${dur('close')}s ${EASING}, padding ${dur('close')}s ${EASING}`;
              content.style.height = currentHeight + 'px';
              void content.offsetHeight; // reflow
              content.style.height = '0px';
              content.style.paddingTop = '0';
              content.style.paddingBottom = '0';
              const closeEnd = (e: TransitionEvent) => {
                if (e.propertyName === 'height') {
                  content.classList.remove('active');
                  content.removeEventListener('transitionend', closeEnd as EventListener);
                  content.style.removeProperty('height');
                  content.style.removeProperty('padding-top');
                  content.style.removeProperty('padding-bottom');
                  content.style.removeProperty('transition');
                }
              };
              content.addEventListener('transitionend', closeEnd as EventListener);
            } else if (isActive && wasActive) {
              // Already open, ensure it's visible
              content.style.height = 'auto';
              content.style.overflow = 'visible';
              content.style.paddingTop = '16px';
              content.style.paddingBottom = '16px';
              content.style.display = 'block';
            }
          }
        }
      });

      // Update desktop image and text areas (only if desktop setup is done)
      if (desktopAppliedRef.current && contentAreaRef.current && !isMobile()) {
        const imageArea = contentAreaRef.current.querySelector('.industries-tabs__image-area');
        const textArea = contentAreaRef.current.querySelector('.industries-tabs__text-area');
        
        if (imageArea) {
          const images = Array.from(imageArea.querySelectorAll('.tab-content__image'));
          images.forEach((img, i) => {
            (img as HTMLElement).style.display = i === idx ? 'block' : 'none';
          });
        }
        
        if (textArea) {
          const texts = Array.from(textArea.querySelectorAll('.tab-content__text'));
          texts.forEach((text, i) => {
            (text as HTMLElement).style.display = i === idx ? 'block' : 'none';
          });
        }
      }

      if (tabsListRef.current) {
        const clones = Array.from(tabsListRef.current.querySelectorAll('.industries-tabs__tab-clone')) as HTMLElement[];
        clones.forEach((btn, i) => {
          const isActive = i === idx;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-selected', String(isActive));
          btn.tabIndex = isActive ? 0 : -1;
        });
      }
    };

    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      updateActiveState(activeIndex);
    }, 0);
  }, [activeIndex]);

  // Desktop setup logic (точно как в статической версии)
  // Use useLayoutEffect to ensure DOM is ready before setup
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !accordionRef.current) return;

    const accordionRoot = accordionRef.current;
    const items = Array.from(accordionRoot.querySelectorAll('.accordion-item'));
    if (!items.length) return;

    const DESKTOP_MQ = window.matchMedia('(min-width: 769px)');
    const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

    const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
    const OPEN_DUR = 0.45;
    const CLOSE_DUR = 0.75;
    const dur = (type: 'open' | 'close') => (PREFERS_REDUCED_MOTION.matches ? 0 : (type === 'open' ? OPEN_DUR : CLOSE_DUR));

    const setupDesktop = () => {
      if (desktopAppliedRef.current) return;
      desktopAppliedRef.current = true;

      // Create containers: image area, text area, and tabs
      const contentArea = document.createElement('div');
      contentArea.className = 'industries-tabs__content-area';
      contentAreaRef.current = contentArea;

      const imageArea = document.createElement('div');
      imageArea.className = 'industries-tabs__image-area';

      const textArea = document.createElement('div');
      textArea.className = 'industries-tabs__text-area';

      const tabsList = document.createElement('div');
      tabsList.className = 'industries-tabs__tabs';
      tabsList.setAttribute('role', 'tablist');
      tabsList.setAttribute('aria-orientation', 'vertical');
      tabsListRef.current = tabsList;

      // Insert containers
      contentArea.appendChild(imageArea);
      contentArea.appendChild(textArea);
      accordionRoot.prepend(contentArea);
      accordionRoot.appendChild(tabsList);

      // Move images and texts into separate areas
      items.forEach((it, i) => {
        const imageDiv = it.querySelector('.tab-content__image');
        const textDiv = it.querySelector('.tab-content__text');
        if (imageDiv) {
          (imageDiv as HTMLElement).style.display = i === activeIndex ? 'block' : 'none';
          imageArea.appendChild(imageDiv);
        }
        if (textDiv) {
          (textDiv as HTMLElement).style.display = i === activeIndex ? 'block' : 'none';
          textArea.appendChild(textDiv);
        }
      });

      // Build tabs list on the right
      items.forEach((it, i) => {
        const header = it.querySelector('.accordion-item__header');
        const panel = it.querySelector('.accordion-item__content');
        const clone = document.createElement('button');
        clone.type = 'button';
        clone.className = 'industries-tabs__tab-clone tab-button';
        clone.innerHTML = header ? header.innerHTML : `Tab ${i + 1}`;
        if (i === activeIndex) clone.classList.add('active');
        clone.setAttribute('role', 'tab');
        clone.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false');
        if (panel && panel.id) clone.setAttribute('aria-controls', panel.id);
        clone.tabIndex = i === activeIndex ? 0 : -1;
        clone.addEventListener('click', () => {
          setActiveIndex(i);
        });
        tabsList.appendChild(clone);
      });

      // Keyboard navigation
      const getClones = () => Array.from(tabsList.querySelectorAll('.industries-tabs__tab-clone')) as HTMLElement[];
      const moveFocus = (newIndex: number) => {
        const clones = getClones();
        if (!clones.length) return;
        const max = clones.length - 1;
        const target = Math.min(Math.max(newIndex, 0), max);
        clones.forEach((b, idx) => {
          b.tabIndex = idx === target ? 0 : -1;
        });
        clones[target].focus();
      };
      tabsList.addEventListener('keydown', (e) => {
        const clones = getClones();
        if (!clones.length) return;
        const current = clones.findIndex((b) => b === document.activeElement);
        let handled = false;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          moveFocus((current + 1) % clones.length);
          handled = true;
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          moveFocus((current - 1 + clones.length) % clones.length);
          handled = true;
        } else if (e.key === 'Home') {
          moveFocus(0);
          handled = true;
        } else if (e.key === 'End') {
          moveFocus(clones.length - 1);
          handled = true;
        } else if (e.key === 'Enter' || e.key === ' ') {
          const idx = clones.findIndex((b) => b === document.activeElement);
          if (idx >= 0) {
            setActiveIndex(idx);
          }
          handled = true;
        }
        if (handled) {
          e.preventDefault();
          e.stopPropagation();
        }
      });

      // Update active state immediately after setup
      // Use the already created imageArea and textArea variables
      const images = Array.from(imageArea.querySelectorAll('.tab-content__image'));
      images.forEach((img, i) => {
        (img as HTMLElement).style.display = i === activeIndex ? 'block' : 'none';
      });
      
      const texts = Array.from(textArea.querySelectorAll('.tab-content__text'));
      texts.forEach((text, i) => {
        (text as HTMLElement).style.display = i === activeIndex ? 'block' : 'none';
      });
    };

    const teardownDesktop = () => {
      if (!desktopAppliedRef.current) return;
      desktopAppliedRef.current = false;

      // Move images and texts back to their original items
      if (contentAreaRef.current) {
        const imageArea = contentAreaRef.current.querySelector('.industries-tabs__image-area');
        const textArea = contentAreaRef.current.querySelector('.industries-tabs__text-area');
        
        if (imageArea && textArea) {
          const images = Array.from(imageArea.querySelectorAll('.tab-content__image'));
          const texts = Array.from(textArea.querySelectorAll('.tab-content__text'));
          
          items.forEach((it, i) => {
            const content = it.querySelector('.accordion-item__content');
            if (content && images[i]) {
              content.insertBefore(images[i], content.firstChild);
            }
            if (content && texts[i]) {
              content.appendChild(texts[i]);
            }
          });
        }
      }

      // Remove helper containers
      if (tabsListRef.current && tabsListRef.current.parentNode) {
        tabsListRef.current.parentNode.removeChild(tabsListRef.current);
      }
      if (contentAreaRef.current && contentAreaRef.current.parentNode) {
        contentAreaRef.current.parentNode.removeChild(contentAreaRef.current);
      }

      contentAreaRef.current = null;
      tabsListRef.current = null;
    };

    // Mobile behavior will be handled by React onClick handlers
    // No need to setup event listeners here

    const handleResize = () => {
      if (DESKTOP_MQ.matches) {
        setupDesktop();
      } else {
        teardownDesktop();
      }
    };

    // Initial setup
    handleResize();
    DESKTOP_MQ.addEventListener('change', handleResize);

    return () => {
      DESKTOP_MQ.removeEventListener('change', handleResize);
      teardownDesktop();
    };
  }, [industries, activeIndex]);

  return (
    <section className="industries-tabs section" id="industries">
      <div className="container">
        <div className="industries-tabs__header">
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="industries-tabs__intro">{subtitle}</p>}
        </div>

        <div className="industries-tabs__wrapper">
          <div className="industries-tabs__accordion" ref={accordionRef}>
            {industries.map((industry, index) => {
              const isExpanded = index === activeIndex;
              const panelId = `industry-panel-${industry.id}`;
              const buttonId = `industry-tab-${industry.id}`;

              return (
                <div
                  key={industry.id}
                  className={`accordion-item ${isExpanded ? 'active' : ''}`}
                  data-tab={industry.id}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <button
                    className={`accordion-item__header tab-button ${isExpanded ? 'active' : ''}`}
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={isExpanded}
                    onClick={(e) => handleMobileToggle(index, e)}
                  >
                    <span className="tab-button__text">
                      {industry.name}
                      <span className="visually-hidden"> IT in UAE</span>
                    </span>
                    <span className="tab-button__icon" aria-hidden="true">
                      <Image
                        src={industry.icon}
                        alt={`${industry.name} IT Solutions Icon`}
                        width={24}
                        height={24}
                      />
                    </span>
                  </button>
                  <div
                    className={`accordion-item__content tab-content ${isExpanded ? 'active' : ''}`}
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <div className="tab-content__image">
                      <Image
                        src={industry.image}
                        alt={`${industry.name} IT Solutions in Dubai, UAE - NOCKO`}
                        width={600}
                        height={400}
                        loading="lazy"
                        itemProp="image"
                      />
                    </div>
                    <div className="tab-content__text">
                      <h3 itemProp="name">
                        {industry.name}
                        <span className="visually-hidden"> IT</span> Solutions
                        <span className="visually-hidden"> in UAE</span>
                      </h3>
                      <p itemProp="description">{industry.description}</p>
                      <p>{industry.fullDescription}</p>
                      <meta itemProp="serviceType" content={industry.serviceType} />
                      <meta itemProp="areaServed" content="United Arab Emirates" />
                      <meta
                        itemProp="provider"
                        content="NOCKO Information Technology"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
