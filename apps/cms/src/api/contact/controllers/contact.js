'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');

// Rate limiting storage (в продакшене лучше использовать Redis)
const rateLimitStore = new Map();

// Очистка старых записей каждые 5 минут
setInterval(() => {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.firstRequest > oneHour) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

// Функция проверки rate limit
function checkRateLimit(ip) {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const maxRequests = 5; // Максимум 5 запросов в час
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, {
      firstRequest: now,
      requests: 1,
      lastRequest: now,
    });
    return true;
  }
  
  const data = rateLimitStore.get(ip);
  
  // Если прошло больше часа, сбрасываем счетчик
  if (now - data.firstRequest > oneHour) {
    rateLimitStore.set(ip, {
      firstRequest: now,
      requests: 1,
      lastRequest: now,
    });
    return true;
  }
  
  // Проверяем количество запросов
  if (data.requests >= maxRequests) {
    return false;
  }
  
  // Обновляем данные
  data.requests++;
  data.lastRequest = now;
  return true;
}

// Функция проверки на спам
function checkSpamContent(message, name, email) {
  const spamKeywords = [
    'viagra', 'cialis', 'casino', 'poker', 'lottery', 'winner',
    'click here', 'buy now', 'limited time', 'act now',
    'free money', 'get rich', 'work from home', 'make money fast',
    'bitcoin', 'crypto', 'investment opportunity', 'guaranteed',
    'no credit check', 'debt consolidation', 'weight loss',
    'lose weight', 'miracle', 'guarantee', 'risk free'
  ];
  
  const text = `${message} ${name} ${email}`.toLowerCase();
  
  for (const keyword of spamKeywords) {
    if (text.includes(keyword)) {
      return true;
    }
  }
  
  // Проверка на множественные ссылки
  const urlRegex = /https?:\/\/[^\s]+/g;
  const urls = message.match(urlRegex);
  if (urls && urls.length > 2) {
    return true;
  }
  
  // Проверка на повторяющиеся символы
  if (/(.)\1{10,}/.test(message)) {
    return true;
  }
  
  return false;
}

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Получаем IP адрес клиента
      const clientIp = ctx.request.ip || 
                       ctx.request.headers['x-forwarded-for']?.split(',')[0] || 
                       ctx.request.connection?.remoteAddress || 
                       'unknown';
      
      // Проверка rate limiting
      if (!checkRateLimit(clientIp)) {
        console.warn(`Rate limit exceeded for IP: ${clientIp}`);
        return ctx.tooManyRequests('Too many requests. Please try again later.');
      }
      
      // Strapi API отправляет данные в формате { data: { ... } }
      const requestData = ctx.request.body.data || ctx.request.body;
      const { name, email, phone, message, website, recaptchaToken } = requestData;

      // Проверка honeypot поля
      if (website && website.trim() !== '') {
        console.warn(`Spam detected (honeypot) from IP: ${clientIp}`);
        return ctx.badRequest('Spam detected');
      }

      // Логирование для отладки
      console.log('Contact form submission:', {
        ip: clientIp,
        name,
        email,
        phone,
        messageLength: message?.length,
      });

      // Валидация
      if (!name || !email || !message) {
        console.error('Validation failed:', { name, email, message });
        return ctx.badRequest('Name, email, and message are required');
      }

      // Email валидация
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return ctx.badRequest('Invalid email format');
      }
      
      // Проверка reCAPTCHA, если токен предоставлен
      if (recaptchaToken) {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (secretKey) {
          try {
            const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(recaptchaToken)}&remoteip=${encodeURIComponent(clientIp)}`,
            });
            
            const recaptchaData = await recaptchaResponse.json();
            
            if (!recaptchaData.success) {
              console.warn(`reCAPTCHA verification failed from IP: ${clientIp}`, recaptchaData);
              return ctx.badRequest('reCAPTCHA verification failed');
            }
            
            // Проверяем score (для reCAPTCHA v3, score от 0.0 до 1.0)
            // Score ниже 0.5 считается подозрительным
            if (recaptchaData.score !== undefined && recaptchaData.score < 0.5) {
              console.warn(`Low reCAPTCHA score (${recaptchaData.score}) from IP: ${clientIp}`);
              return ctx.badRequest('reCAPTCHA verification failed');
            }
          } catch (recaptchaError) {
            console.error('reCAPTCHA verification error:', recaptchaError);
            // Если reCAPTCHA не настроена или произошла ошибка, продолжаем без неё
            // Но логируем предупреждение
            console.warn('Continuing without reCAPTCHA verification due to error');
          }
        }
      }
      
      // Проверка на спам в содержимом
      if (checkSpamContent(message, name, email)) {
        console.warn(`Spam content detected from IP: ${clientIp}, Email: ${email}`);
        return ctx.badRequest('Spam detected in message content');
      }

      // Сохранение в базу данных
      let contactEntry;
      try {
        contactEntry = await strapi.entityService.create('api::contact.contact', {
          data: {
            name,
            email,
            phone: phone || null,
            message,
            publishedAt: new Date(),
          },
        });
        console.log('Contact entry created:', contactEntry.id);
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Продолжаем даже если не удалось сохранить в БД
      }

      // Отправка email через nodemailer напрямую (асинхронно, не блокируем ответ)
      const sendEmails = async () => {
        try {
          // Получаем список получателей из переменных окружения
          // Формат: CONTACT_RECIPIENTS="email1@example.com,email2@example.com"
          let recipients = ['Nocko.it@gmail.com']; // Значение по умолчанию
          
          const envRecipients = process.env.CONTACT_RECIPIENTS;
          if (envRecipients) {
            recipients = envRecipients
              .split(',')
              .map(email => email.trim())
              .filter(email => email && email.length > 0);
          }
          
          console.log('📧 Recipients:', recipients);

          // Фильтруем получателей - убираем email отправителя
          recipients = recipients.filter(recipient => recipient && recipient.toLowerCase() !== email.toLowerCase());

          if (recipients.length === 0) {
            console.warn('No recipients found after filtering, skipping email send');
            return;
          }

          // Создаем transporter для Gmail SMTP
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587', 10),
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USER || 'Nocko.it@gmail.com',
              pass: process.env.SMTP_PASS || 'vpuwzxeupxijxsss',
            },
          });

          // Отправка уведомления всем получателям
          await transporter.sendMail({
            from: process.env.SMTP_FROM || 'Nocko.it@gmail.com',
            to: recipients.join(', '), // Отправляем всем получателям
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message:
${message}

---
This email was sent from the NOCKO website contact form.
            `,
            html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
<hr>
<p><em>This email was sent from the NOCKO website contact form.</em></p>
            `,
          });

          console.log(`✅ Email sent successfully to: ${recipients.join(', ')}`);
        } catch (emailError) {
          console.error('Email sending error:', emailError);
        }
      };

      // Отправляем email асинхронно, не блокируя ответ
      sendEmails().catch(err => console.error('Email sending failed:', err));

      // Возвращаем успешный ответ сразу
      return ctx.created({
        message: 'Contact form submitted successfully',
        data: {
          id: contactEntry?.id || null,
        },
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return ctx.internalServerError('An error occurred while processing your request');
    }
  },
}));

