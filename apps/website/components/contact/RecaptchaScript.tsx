'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function RecaptchaScript() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    
    if (!siteKey) {
      // Если ключ не настроен, это нормально - форма будет работать без reCAPTCHA
      return;
    }

    // Проверяем, не загружен ли уже скрипт
    if (document.querySelector('script[src*="recaptcha"]')) {
      // Если скрипт уже загружен, проверяем доступность grecaptcha
      if (window.grecaptcha) {
        setIsLoaded(true);
      }
      return;
    }

    // Загружаем скрипт reCAPTCHA
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      // Ждем, пока grecaptcha станет доступным
      if (window.grecaptcha) {
        setIsLoaded(true);
      } else {
        // Если grecaptcha еще не доступен, ждем немного
        const checkInterval = setInterval(() => {
          if (window.grecaptcha) {
            setIsLoaded(true);
            clearInterval(checkInterval);
          }
        }, 100);
        
        // Таймаут на случай, если что-то пошло не так
        setTimeout(() => {
          clearInterval(checkInterval);
        }, 5000);
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
    };
    
    document.head.appendChild(script);

    return () => {
      // Очистка при размонтировании не требуется, скрипт может остаться
    };
  }, []);

  return null;
}

