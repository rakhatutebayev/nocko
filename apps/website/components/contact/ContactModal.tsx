'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { submitContact } from '@/lib/api/strapi';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Закрытие по ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Фокус на первом поле при открытии
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      // Небольшая задержка для анимации
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Проверка монтирования для портала
  useEffect(() => {
    setMounted(true);
  }, []);

  // Блокировка скролла body при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const phone = (formData.get('phone') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();
    
    // Валидация на клиенте
    if (!name || !email || !message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message)');
      setIsSubmitting(false);
      return;
    }
    
    // Email валидация
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const result = await submitContact({
        name,
        email,
        phone: phone || undefined,
        message,
      });
      
      if (result.success) {
        setSubmitStatus('success');
        // Закрываем модальное окно через 2 секунды после успешной отправки
        setTimeout(() => {
          // Сброс формы через ref
          if (formRef.current) {
            formRef.current.reset();
          }
          onClose();
          setSubmitStatus('idle');
          setErrorMessage('');
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div 
      className="contact-modal" 
      role="dialog" 
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={handleOverlayClick}
    >
      <div className="contact-modal__overlay"></div>
      <div 
        className="contact-modal__content" 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Close contact form"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <h2 id="contact-modal-title" className="contact-modal__title">
          Get in Touch
        </h2>
        <p className="contact-modal__subtitle">
          Ready to transform your business? Let's talk.
        </p>
        
        <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__group">
            <label htmlFor="modal-name" className="form__label">
              Name *
            </label>
            <input
              ref={firstInputRef}
              type="text"
              id="modal-name"
              name="name"
              className="form__input"
              required
              aria-required="true"
              autoComplete="name"
            />
            <span className="form__error" role="alert"></span>
          </div>
          
          <div className="form__group">
            <label htmlFor="modal-email" className="form__label">
              Email *
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              className="form__input"
              required
              aria-required="true"
              autoComplete="email"
            />
            <span className="form__error" role="alert"></span>
          </div>
          
          <div className="form__group">
            <label htmlFor="modal-phone" className="form__label">
              Phone
            </label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              className="form__input"
              autoComplete="tel"
            />
            <span className="form__error" role="alert"></span>
          </div>
          
          <div className="form__group">
            <label htmlFor="modal-message" className="form__label">
              Message *
            </label>
            <textarea
              id="modal-message"
              name="message"
              className="form__textarea"
              rows={5}
              required
              aria-required="true"
            ></textarea>
            <span className="form__error" role="alert"></span>
          </div>
          
          {submitStatus === 'success' && (
            <div className="form__success" role="alert">
              <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form__error-message" role="alert">
              <p>{errorMessage || 'An error occurred. Please try again.'}</p>
            </div>
          )}
          
          <button
            type="submit"
            className="form__submit btn btn--primary"
            disabled={isSubmitting || submitStatus === 'success'}
          >
            {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

