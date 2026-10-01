'use client';

import { useEffect, useRef, useState } from 'react';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.2708!3d25.0785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV2F2ZXogUmVzaWRlbmNlLCBXYWRpIEFsIFNhZmEgMiwgRHViYWk!5e0!3m2!1sen!2sae!4v1';

interface ContactMapProps {
  title: string;
  address: string;
  buttonLabel: string;
}

/**
 * Click-to-load Google Maps embed. No third-party request is made on initial
 * load: the iframe is injected only after the user clicks the button or the
 * placeholder scrolls into view.
 */
export default function ContactMap({ title, address, buttonLabel }: ContactMapProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaded || !ref.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div className="contact-info__map" ref={ref}>
      {loaded ? (
        <iframe
          title={title}
          src={MAP_EMBED_URL}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="contact-info__map-placeholder"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            minHeight: 300,
            padding: '24px',
            textAlign: 'center',
            background: '#f3f5f7',
            borderRadius: 8,
          }}
        >
          <p style={{ margin: 0 }}>{address}</p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setLoaded(true)}
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
}
