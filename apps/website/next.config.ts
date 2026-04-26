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
  
  // Redirects mapping thin content articles to new Pillar Guides
  async redirects() {
    return [
      ...['cloud-cost-optimization', 'cloud-data-management', 'cloud-infrastructure', 'cloud-migration', 'cloud-multi-hybrid', 'cloud-security-compliance'].map(slug => ({
        source: `/articles/${slug}`,
        destination: '/articles/cloud-infrastructure-guide',
        permanent: true,
      })),
      ...['cybersecurity-compliance', 'cybersecurity-data-protection', 'cybersecurity-firewall', 'cybersecurity-incident-response', 'cybersecurity-monitoring', 'cybersecurity-protection'].map(slug => ({
        source: `/articles/${slug}`,
        destination: '/articles/cybersecurity-guide',
        permanent: true,
      })),
      ...['managed-it-backup', 'managed-it-cost', 'managed-it-infrastructure', 'managed-it-monitoring', 'managed-it-scalable', 'managed-it-security', 'it-support-24-7', 'it-support-helpdesk', 'it-support-monitoring', 'it-support-onsite', 'it-support-optimization', 'it-support-remote'].map(slug => ({
        source: `/articles/${slug}`,
        destination: '/articles/managed-it-services-guide',
        permanent: true,
      })),

      ...['it-amc-comprehensive', 'it-amc-costs', 'it-amc-hardware', 'it-amc-maintenance-visits', 'it-amc-priority', 'it-amc-updates', 'deployment', 'lifecycle', 'performance'].map(slug => ({
        source: `/articles/${slug}`,
        destination: '/articles/structured-cabling-guide',
        permanent: true,
      })),
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
    ];
  },
  
  // Fix for workspace/Turbopack issue - set root directory
  transpilePackages: [],
  
  // Output configuration for Docker
  output: 'standalone',
};

export default nextConfig;
