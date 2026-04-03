import React from 'react';

interface Emirate {
  name: string;
  hubs: string[];
}

interface ServiceGeoProps {
  title?: string;
  description?: string;
  emirates: Emirate[];
  terms: string[];
  footerNote?: string;
}

const ServiceGeo: React.FC<ServiceGeoProps> = ({
  title = "Serving Businesses Throughout the UAE",
  description = "NOCKO provides comprehensive IT solutions for corporate offices and enterprises across the Emirates.",
  emirates,
  terms,
  footerNote = "Certified Infrastructure"
}) => {
  return (
    <section className="service-geo section">
      <div className="service-geo__container">
        <h2 className="section__title service-geo__title">{title}</h2>
        <p className="service-geo__description">{description}</p>
        
        <div className="service-geo__grid">
          {emirates.map((emirate, idx) => (
            <div key={idx} className="geo-card">
              <div className="geo-card__header">
                <svg 
                  className="geo-card__icon" 
                  width="24"
                  height="24"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="geo-card__name">{emirate.name}</h3>
              </div>
              
              {emirate.hubs && emirate.hubs.length > 0 && (
                <div className="geo-card__hubs">
                  {emirate.hubs.map((hub, hubIdx) => (
                    <span key={hubIdx} className="geo-card__hub-tag">
                      {hub}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>


        <div className="service-geo__terms">
          {terms.map((term, termIdx) => (
            <span key={termIdx}>
              {term} {termIdx < terms.length - 1 ? '• ' : ''}
            </span>
          ))}
          <span>• {footerNote}</span>
        </div>
      </div>
    </section>
  );
};

export default ServiceGeo;
