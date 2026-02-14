import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://bunny-agency.ru'),
  title: 'Агентство OnlyFans — #1 Управление Контентом | Bunny Agency',
  description:
    'Bunny Agency — лучшее агентство OnlyFans. Управление аккаунтом, маркетинг, чат-менеджмент и защита контента. Подайте заявку сегодня!',
  keywords: [
    'агентство OnlyFans',
    'OnlyFans менеджмент',
    'OnlyFans агентство',
    'управление OnlyFans',
    'OnlyFans маркетинг',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://bunny-agency.ru',
    siteName: 'Bunny Agency Russia',
    title: 'Агентство OnlyFans — #1 Управление Контентом | Bunny Agency',
    description:
      'Bunny Agency — лучшее агентство OnlyFans. Управление аккаунтом, маркетинг, чат-менеджмент и защита контента.',
    images: [
      {
        url: 'https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp',
        width: 2048,
        height: 1117,
        alt: 'Агентство OnlyFans — Bunny Agency премиум управление',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Агентство OnlyFans — #1 Управление Контентом | Bunny Agency',
    description:
      'Bunny Agency — лучшее агентство OnlyFans. Управление, маркетинг, чат-менеджмент и защита контента.',
    images: [
      'https://bunny-agency.com/wp-content/uploads/2026/01/Our-Values-2048x1117.png.webp',
    ],
  },
  alternates: {
    canonical: 'https://bunny-agency.ru',
    languages: {
      'ru': 'https://bunny-agency.ru',
      'x-default': 'https://bunny-agency.ru',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-text-primary min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
