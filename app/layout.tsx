import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QBS Звонки — AI-анализ звонков и транскрибация для бизнеса",
    template: "%s | QBS Звонки"
  },
  description: "Автоматическая расшифровка звонков, оценка качества работы менеджеров и AI-рекомендации. Дашборд для отдела продаж, банков и колл-центров.",
  keywords: ["анализ звонков", "транскрибация", "AI для продаж", "контроль качества", "запись звонков", "речевая аналитика", "speech analytics", "колл-центр", "CRM интеграция"],
  authors: [{ name: "QBS Звонки" }],
  creator: "QBS Звонки",
  publisher: "QBS Звонки",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://qbs-calls.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    title: 'QBS Звонки — AI-анализ звонков и транскрибация для бизнеса',
    description: 'Автоматическая расшифровка звонков, оценка качества работы менеджеров и AI-рекомендации. Дашборд для отдела продаж, банков и колл-центров.',
    siteName: 'QBS Звонки',
    images: [
      {
        url: '/screenshots/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'QBS Звонки - Дашборд анализа звонков',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QBS Звонки — AI-анализ звонков и транскрибация для бизнеса',
    description: 'Автоматическая расшифровка звонков, оценка качества работы менеджеров и AI-рекомендации.',
    images: ['/screenshots/dashboard.png'],
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
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
