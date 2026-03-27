import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { AOSInit } from '@/components/aos-init';
import { SplashScreen } from '@/components/splash-screen';
import { CookieConsent } from '@/components/cookie-consent';
import './globals.css';

export const metadata: Metadata = {
  title: 'U.C.A.G - Union des Congolais Anciens de Grèce',
  description: 'Le pont culturel et académique entre la République Démocratique du Congo et la Grèce. Rayonner la coopération, unir l\'excellence.',
  keywords: ['UCAG', 'Congolais', 'Grèce', 'Union', 'Culture', 'Académique', 'RDC', 'Congo'],
  authors: [{ name: 'U.C.A.G' }],
  creator: 'U.C.A.G',
  publisher: 'U.C.A.G',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ucag.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'U.C.A.G',
    title: 'U.C.A.G - Union des Congolais Anciens de Grèce',
    description: 'Le pont culturel et académique entre la République Démocratique du Congo et la Grèce',
    images: [
      {
        url: '/UCAG.png',
        width: 1200,
        height: 630,
        alt: 'U.C.A.G Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U.C.A.G - Union des Congolais Anciens de Grèce',
    description: 'Le pont culturel et académique entre la République Démocratique du Congo et la Grèce',
    images: ['/UCAG.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col overflow-x-hidden'
        )}
      >
        <SplashScreen />
        <CookieConsent />
        <AOSInit />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
