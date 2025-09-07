import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ThemeSwitcher from "./components/ui/ThemeSwitcher";
import CookieConsent from "./components/ui/CookieConsent";
import { ThemedErrorBoundary } from "./components/ErrorBoundary";
import WebVitals from "./components/WebVitals";

// Optimized font loading with display swap for better performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Gretchen Kubacky - The Irreverent Transpersonal Psychologist",
    template: "%s | Dr. Gretchen Kubacky"
  },
  description: "Where Clinical Psychology Meets Mystical Wisdom. Licensed California Psychologist offering therapy, transpersonal wellness, and community healing.",
  keywords: ["psychologist", "transpersonal psychology", "PCOS", "therapy", "energy healing", "California", "mental health", "spiritual wellness", "reiki", "clinical psychology", "Dr. Gretchen Kubacky", "licensed psychologist", "trauma therapy", "women's health", "holistic healing"],
  authors: [{ name: "Dr. Gretchen Kubacky", url: "https://gretchenkubacky.com" }],
  creator: "Dr. Gretchen Kubacky",
  publisher: "Dr. Gretchen Kubacky",
  category: "Healthcare",
  classification: "Mental Health Services",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gretchenkubacky.com",
    title: "Dr. Gretchen Kubacky - The Irreverent Transpersonal Psychologist",
    description: "Where Clinical Psychology Meets Mystical Wisdom. Licensed California Psychologist offering therapy, transpersonal wellness, and community healing.",
    siteName: "Dr. Gretchen Kubacky",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Gretchen Kubacky - Clinical Psychology & Transpersonal Wellness",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gretchenkubacky",
    title: "Dr. Gretchen Kubacky - The Irreverent Transpersonal Psychologist",
    description: "Where Clinical Psychology Meets Mystical Wisdom. Licensed California Psychologist offering therapy, transpersonal wellness, and community healing.",
    images: ["/og-image.jpg"],
    creator: "@gretchenkubacky",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  alternates: {
    canonical: "https://gretchenkubacky.com",
    languages: {
      'en-US': 'https://gretchenkubacky.com',
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dmSerif.variable}`}>
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance and UX meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Structured Data for Healthcare */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Gretchen Kubacky",
              "alternateName": "The Irreverent Transpersonal Psychologist",
              "description": "Licensed California Psychologist offering clinical psychology services and transpersonal wellness programs",
              "url": "https://gretchenkubacky.com",
              "telephone": "+1-XXX-XXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "California",
                "addressCountry": "US"
              },
              "medicalSpecialty": [
                "Clinical Psychology",
                "Transpersonal Psychology",
                "PCOS Treatment",
                "Trauma Therapy"
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Insurance",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://twitter.com/gretchenkubacky",
                "https://linkedin.com/in/gretchenkubacky"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemedErrorBoundary>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow" id="main-content" role="main">
                {children}
              </main>
              <Footer />
              <ThemeSwitcher />
              <CookieConsent />
              <WebVitals />
            </div>
          </ThemeProvider>
        </ThemedErrorBoundary>
      </body>
    </html>
  );
}
