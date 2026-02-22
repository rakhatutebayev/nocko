'use client';

import { FormEvent, useState } from 'react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  title = 'Get in Touch',
  subtitle = "Ready to transform your business? Let's talk.",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-form section" id="contact">
      <div className="container">
        <h2 className="contact-form__title">{title}</h2>
        {subtitle && <p className="contact-form__subtitle">{subtitle}</p>}

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form__input"
              required
              aria-required="true"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form__input"
              required
              aria-required="true"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label htmlFor="phone" className="form__label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form__input"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              className="form__textarea"
              rows={5}
              required
              aria-required="true"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="form__message form__message--success">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form__message form__message--error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="form__submit btn btn--primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}






