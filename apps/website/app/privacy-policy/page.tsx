import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Privacy Policy | NOCKO Information Technology',
  description: 'Privacy Policy for NOCKO Information Technology. Learn how we collect, use, and protect your personal data in accordance with UAE data protection laws.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocko.com';

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${baseUrl}/privacy-policy` },
          ],
        }}
      />
      <HeaderWrapper />
      <main className="main" role="main">
        <section className="section section--light" style={{ paddingTop: '6rem' }}>
          <div className="container">
            <div className="section__content" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 className="section__title">Privacy Policy</h1>
              <p className="section__text" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Last updated: January 2025
              </p>

              <h2>1. Introduction</h2>
              <p>NOCKO Information Technology LLC (&quot;NOCKO&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you use our website at nocko.com or engage our IT services.</p>

              <h2>2. Data We Collect</h2>
              <p>We may collect the following categories of personal data:</p>
              <ul>
                <li><strong>Contact information</strong>: name, email address, phone number, company name</li>
                <li><strong>Technical data</strong>: IP address, browser type, pages visited, time on site (via analytics)</li>
                <li><strong>Communication records</strong>: messages sent via our contact form or email</li>
                <li><strong>Business information</strong>: details you share when requesting IT services</li>
              </ul>

              <h2>3. How We Use Your Data</h2>
              <p>We use collected data to:</p>
              <ul>
                <li>Respond to your enquiries and provide IT support services</li>
                <li>Send service-related communications and updates</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations under UAE law</li>
              </ul>
              <p>We do not sell, rent, or trade your personal data to third parties.</p>

              <h2>4. Legal Basis for Processing</h2>
              <p>We process your data on the basis of:</p>
              <ul>
                <li><strong>Contractual necessity</strong>: to deliver IT services you have requested</li>
                <li><strong>Legitimate interests</strong>: to respond to enquiries and improve our services</li>
                <li><strong>Consent</strong>: where you have opted in to receive marketing communications</li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>We retain personal data for as long as necessary to fulfil the purposes described in this policy, or as required by UAE law. Client data is retained for a minimum of 5 years following the end of a service engagement.</p>

              <h2>6. Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Our systems are protected by industry-standard security controls.</p>

              <h2>7. Your Rights</h2>
              <p>Under applicable data protection laws, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p>To exercise these rights, contact us at <a href="mailto:info@nocko.com">info@nocko.com</a>.</p>

              <h2>8. Cookies</h2>
              <p>Our website uses cookies and similar technologies to analyse traffic and improve user experience. You can control cookie settings through your browser. We use Google Analytics (with IP anonymisation) to understand site usage.</p>

              <h2>9. Third-Party Services</h2>
              <p>We may use third-party services including Google Analytics, Microsoft 365, and cloud hosting providers. These services process data in accordance with their own privacy policies. Data may be transferred to servers outside the UAE in connection with these services.</p>

              <h2>10. Contact</h2>
              <p>For privacy-related queries, contact NOCKO Information Technology at:</p>
              <address style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
                Office R20-42, Wavez Residence, Wadi Al Safa 2<br />
                Dubai, United Arab Emirates<br />
                Email: <a href="mailto:info@nocko.com">info@nocko.com</a><br />
                Phone: <a href="tel:+971542448888">+971 54 244 8888</a>
              </address>

              <h2>11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page indicates when the policy was last revised. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
