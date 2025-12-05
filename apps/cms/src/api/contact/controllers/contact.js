'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Strapi API отправляет данные в формате { data: { ... } }
      const requestData = ctx.request.body.data || ctx.request.body;
      const { name, email, phone, message } = requestData;

      // Логирование для отладки
      console.log('Contact form submission:', {
        body: ctx.request.body,
        requestData,
        name,
        email,
        phone,
        message,
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

          // Отправка уведомления администратору
          await transporter.sendMail({
            from: process.env.SMTP_FROM || 'Nocko.it@gmail.com',
            to: process.env.CONTACT_EMAIL || 'Nocko.it@gmail.com',
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

          // Отправка подтверждения пользователю
          await transporter.sendMail({
            from: process.env.SMTP_FROM || 'Nocko.it@gmail.com',
            to: email,
            subject: 'Thank you for contacting NOCKO',
            text: `
Dear ${name},

Thank you for contacting NOCKO Information Technology. We have received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
NOCKO IT Team
            `,
            html: `
<h2>Thank you for contacting NOCKO</h2>
<p>Dear ${name},</p>
<p>Thank you for contacting NOCKO Information Technology. We have received your message and will get back to you as soon as possible.</p>
<p><strong>Your message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
<p>Best regards,<br>NOCKO IT Team</p>
            `,
          });

          console.log('✅ Emails sent successfully');
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

