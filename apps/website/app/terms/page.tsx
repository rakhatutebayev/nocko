import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Terms of Service | NOCKO Information Technology',
  description: 'Terms of Service for NOCKO Information Technology. Governing terms for use of our website and IT services in Dubai and the UAE.',
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: `${baseUrl}/terms` },
          ],
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <section className="section section--light" style={{ paddingTop: '6rem' }}>
          <div className="container">
            <div className="section__content" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 className="section__title">Terms of Service</h1>
              <p className="section__text" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Last updated: January 2025
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>By accessing nocko.com or engaging NOCKO Information Technology LLC (&quot;NOCKO&quot;) for IT services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>

              <h2>2. Services</h2>
              <p>NOCKO provides professional IT services including IT support, managed IT services, network infrastructure, cloud solutions, cybersecurity, and IT consulting to businesses in the UAE. Specific service terms, scope, and pricing are defined in individual service agreements or statements of work.</p>

              <h2>3. Use of Website</h2>
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul>
                <li>Attempt to gain unauthorised access to any part of our systems</li>
                <li>Transmit any malicious code, viruses, or harmful content</li>
                <li>Use the site in any way that violates applicable UAE laws or regulations</li>
                <li>Reproduce, republish, or redistribute content without our written permission</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>All content on nocko.com — including text, images, logos, and code — is the property of NOCKO Information Technology LLC or its licensors and is protected by UAE and international copyright law. You may not reproduce or distribute this content without express written permission.</p>

              <h2>5. Service Agreements</h2>
              <p>IT services are provided under separate written agreements that govern scope, pricing, SLAs, liability, and termination. In the event of conflict between these Terms and a signed service agreement, the service agreement prevails.</p>

              <h2>6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by UAE law, NOCKO is not liable for any indirect, incidental, or consequential damages arising from use of our website or services. Our total liability for direct damages shall not exceed the value of fees paid in the preceding 3 months.</p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>Our website is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the site will be error-free, uninterrupted, or free from security vulnerabilities.</p>

              <h2>8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of those sites.</p>

              <h2>9. Governing Law</h2>
              <p>These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>

              <h2>10. Changes to Terms</h2>
              <p>We reserve the right to update these Terms at any time. The &quot;Last updated&quot; date reflects the most recent revision. Continued use of our website following changes constitutes your acceptance of the updated Terms.</p>

              <h2>11. Contact</h2>
              <p>For questions about these Terms, contact us at:</p>
              <address style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
                Office R20-42, Wavez Residence, Wadi Al Safa 2<br />
                Dubai, United Arab Emirates<br />
                Email: <a href="mailto:info@nocko.com">info@nocko.com</a><br />
                Phone: <a href="tel:+971542448888">+971 54 244 8888</a>
              </address>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
