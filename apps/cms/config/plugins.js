"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'users-permissions': {
        enabled: true,
        config: {
            jwt: {
                expiresIn: '7d',
            },
        },
    },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: parseInt(process.env.SMTP_PORT || '587', 10),
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER || 'Nocko.it@gmail.com',
                    pass: process.env.SMTP_PASS || 'vpuwzxeupxijxsss',
                },
            },
            settings: {
                defaultFrom: process.env.SMTP_FROM || 'Nocko.it@gmail.com',
                defaultReplyTo: process.env.SMTP_REPLY_TO || 'Nocko.it@gmail.com',
            },
        },
    },
};
