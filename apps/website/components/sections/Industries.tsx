'use client';

import { useState } from 'react';
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="industries-tabs section" id="industries">
      <div className="container">
        <div className="industries-tabs__header">
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="industries-tabs__intro">{subtitle}</p>}
        </div>

        <div className="industries-tabs__wrapper">
          <div className="industries-tabs__accordion">
            {industries.map((industry) => {
              const isExpanded = expandedId === industry.id;
              const panelId = `industry-panel-${industry.id}`;
              const buttonId = `industry-tab-${industry.id}`;

              return (
                <div
                  key={industry.id}
                  className="accordion-item"
                  data-tab={industry.id}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <button
                    className="accordion-item__header tab-button"
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={isExpanded}
                    onClick={() => toggleAccordion(industry.id)}
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
                    className={`accordion-item__content tab-content ${isExpanded ? 'is-expanded' : ''}`}
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



