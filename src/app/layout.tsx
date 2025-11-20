import type { Metadata } from "next";
import { Inter, Roboto} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional for Tailwind
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Omobayode Festus — Senior Frontend Engineer | React • Next.js • TypeScript',
  description: 'Senior Frontend Engineer from Lagos, Nigeria. Specializes in React, Next.js, TypeScript, performance optimization, cross-border e-commerce, fintech, and scalable frontend architecture.',
  keywords: [
    'Senior Frontend Engineer',
    'Frontend Developer Nigeria',
    'React Developer',
    'Next.js Engineer',
    'TypeScript Developer',
    'Remote Frontend Engineer',
    'Performance Optimization',
    'Cross-border E-commerce',
    'Fintech Dashboard',
    'Senior React Developer'
  ],
  authors: [{ name: 'Omobayode Festus', url: 'https://www.linkedin.com/in/omobayode-osinubi-7a564a189/' }],
  openGraph: {
    title: 'Omobayode Festus — Senior Frontend Engineer | React • Next.js • TypeScript',
    description: 'Senior Frontend Engineer from Lagos, Nigeria. Specializes in React, Next.js, TypeScript, performance optimization, cross-border e-commerce, fintech, and scalable frontend architecture.',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Omobayode Festus Portfolio',
    images: [
      {
        url: 'https://your-portfolio-domain.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omobayode Festus — Senior Frontend Engineer | React • Next.js • TypeScript',
    description: 'Senior Frontend Engineer from Lagos, Nigeria. Specializes in React, Next.js, TypeScript, performance optimization, cross-border e-commerce, fintech, and scalable frontend architecture.',
    images: ['https://your-portfolio-domain.com/og-image.png'],
    site: '@Omobayode6',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
