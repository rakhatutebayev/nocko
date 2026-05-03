import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Compress responses
  compress: true,
  
  // Power optimization
  poweredByHeader: false,
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    silenceDeprecations: ['legacy-js-api'],
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'cms',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@nocko/ui', '@nocko/shared'],
  },

  
  // Optimize CSS loading - Next.js automatically minifies and optimizes CSS
  // To reduce render blocking, we rely on automatic CSS optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Redirects: .html duplicates, www subdomain, and legacy URLs
  async redirects() {
    return [
      // www → non-www canonical redirect
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.nocko.com' }],
        destination: 'https://nocko.com/:path*',
        permanent: true,
      },
      // .html duplicate case-study URLs
      { source: '/case-studies/gss.html', destination: '/case-studies/gss', permanent: true },
      { source: '/case-studies/solus.html', destination: '/case-studies/solus', permanent: true },
      { source: '/case-studies/scalini.html', destination: '/case-studies/scalini', permanent: true },
      // .html duplicate service URLs
      { source: '/services/managed-it.html', destination: '/services/managed-it', permanent: true },
      { source: '/services/it-amc.html', destination: '/services/it-amc', permanent: true },
      // Legacy URL → current slug
      { source: '/services/network-infrastructure', destination: '/services/structured-cabling', permanent: true },
      // RU articles → EN canonical (articles not translated, EN is canonical)
      { source: '/ru/articles/:slug*', destination: '/articles/:slug*', permanent: true },
      // .html duplicates — top-level pages
      { source: '/case-studies.html', destination: '/case-studies', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      // Legacy /articles/* short slugs → current slugs
      { source: '/articles/deployment', destination: '/articles/structured-cabling-fiber-optic', permanent: true },
      { source: '/articles/deployment.html', destination: '/articles/structured-cabling-fiber-optic', permanent: true },
      { source: '/articles/performance', destination: '/articles/structured-cabling-fluke-testing', permanent: true },
      { source: '/articles/performance.html', destination: '/articles/structured-cabling-fluke-testing', permanent: true },
      { source: '/articles/lifecycle', destination: '/articles/structured-cabling-retrofitting', permanent: true },
      { source: '/articles/lifecycle.html', destination: '/articles/structured-cabling-retrofitting', permanent: true },
      { source: '/articles/solutions', destination: '/articles/structured-cabling-industrial', permanent: true },
      { source: '/articles/solutions.html', destination: '/articles/structured-cabling-industrial', permanent: true },
      { source: '/articles/network-types', destination: '/articles/structured-cabling-wifi-heatmapping', permanent: true },
      { source: '/articles/network-types.html', destination: '/articles/structured-cabling-wifi-heatmapping', permanent: true },
      { source: '/articles/scaling', destination: '/articles/structured-cabling-physical-security', permanent: true },
      { source: '/articles/scaling.html', destination: '/articles/structured-cabling-physical-security', permanent: true },
      // Legacy /blog/* → current articles
      { source: '/blog/network-infrastructure-planning', destination: '/articles/structured-cabling-fiber-vs-cat6a', permanent: true },
      { source: '/blog/choose-it-consulting', destination: '/articles/it-consulting-guide', permanent: true },
      { source: '/blog/cybersecurity-threats', destination: '/articles/cybersecurity-guide', permanent: true },
      // Legacy /resources/* → current articles
      { source: '/resources/cybersecurity-guide', destination: '/articles/cybersecurity-guide', permanent: true },
      { source: '/resources/it-consulting-guide', destination: '/articles/it-consulting-guide', permanent: true },
      { source: '/resources/structured-cabling-guide', destination: '/articles/structured-cabling-guide', permanent: true },
      // /locations index → Dubai (main location page)
      { source: '/locations', destination: '/locations/dubai', permanent: true },
    ];
  },
  
  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/manifest.json',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/favicon.ico',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
  
  // Fix for workspace/Turbopack issue - set root directory
  transpilePackages: [],
  
  // Output configuration for Docker
  output: 'standalone',
};

export default nextConfig;
