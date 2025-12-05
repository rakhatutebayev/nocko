import Link from 'next/link';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <HeaderWrapper />
      <main className="main" role="main">
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
              <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
              <p style={{ marginBottom: '2rem', color: '#666' }}>
                The page you are looking for does not exist.
              </p>
              <Link href="/" className="btn btn--primary">
                Go to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

