import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/Organization">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Link href="/" className="footer__logo" itemProp="url">
              <Image
                src="/images/logo-white.svg"
                alt="NOCKO Information Technology - IT Support & Solutions in UAE"
                width={120}
                height={40}
                itemProp="logo"
              />
            </Link>
            <p className="footer__tagline" itemProp="description">
              Leading IT Company in Dubai | Expert IT Solutions & Consulting for Businesses in UAE
            </p>
            <div className="footer__contact" itemScope itemType="https://schema.org/PostalAddress">
              <p className="footer__address">
                <span itemProp="addressLocality">Dubai</span>,{' '}
                <span itemProp="addressCountry">United Arab Emirates</span>
              </p>
              <p className="footer__phone">
                <a href="tel:+971542448888" itemProp="telephone">
                  +971 54 244 8888
                </a>
              </p>
              <p className="footer__email">
                <a href="mailto:info@nocko.ae" itemProp="email">
                  info@nocko.ae
                </a>
              </p>
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__menu">
              <li>
                <Link href="#features">Why Choose Us</Link>
              </li>
              <li>
                <Link href="#services">IT Services</Link>
              </li>
              <li>
                <Link href="/locations/dubai">IT Company in Dubai</Link>
              </li>
              <li>
                <Link href="#clients">Our Clients</Link>
              </li>
              <li>
                <Link href="#industries">Industries</Link>
              </li>
              <li>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">IT Services</h4>
            <ul className="footer__menu">
              <li>
                <Link href="/services/it-support">IT Support & Maintenance</Link>
              </li>
              <li>
                <Link href="/services/structured-cabling">Network & Infrastructure</Link>
              </li>
              <li>
                <Link href="/services/cybersecurity">Cybersecurity & Data Protection</Link>
              </li>
              <li>
                <Link href="/services/cloud">Cloud Solutions</Link>
              </li>
              <li>
                <Link href="/services/it-consulting">IT Consulting</Link>
              </li>
            </ul>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Industries</h4>
            <ul className="footer__menu">
              <li>
                <Link href="#industries">Healthcare & Clinics</Link>
              </li>
              <li>
                <Link href="#industries">Financial Services</Link>
              </li>
              <li>
                <Link href="#industries">Education & E-Learning</Link>
              </li>
              <li>
                <Link href="#industries">Hospitality & Retail</Link>
              </li>
              <li>
                <Link href="#industries">Corporate & Enterprise</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; <span itemProp="copyrightYear">{currentYear}</span>{' '}
            <span itemProp="name">NOCKO Information Technology</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



