import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "NOCKO IT Support UAE",
    template: "%s | NOCKO Information Technology",
  },
  description: "Professional IT support and infrastructure services in UAE. Network setup, cloud solutions, cybersecurity, and 24/7 support for businesses in Dubai, Abu Dhabi, Sharjah.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nocko.com"),
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "NOCKO Information Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOCKO Information Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOCKO IT Support UAE",
    description: "Professional IT services in Dubai, Abu Dhabi, Sharjah",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    // После получения кода верификации от GSC, добавьте его в .env:
    // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ваш-код-верификации
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'NOCKO IT Support',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-96x96.png", sizes: "96x96" },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={montserrat.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
