import type React from "react"
import { getMessages } from "next-intl/server"
import { ClientLayout } from "@/components/client-layout"
import "@/app/globals.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://schweizerpsychology.com'),
  title: {
    template: '%s | Schweizer Psychology',
    default: 'Schweizer Psychology - Professional Psychological Support Worldwide'
  },
  description: 'Clinical psychologist providing evidence-based therapy and psychological services in London, Moscow, Montevideo, and Buenos Aires. Online therapy and counselling available worldwide in English and Spanish.',
  keywords: [
    'clinical psychologist',
    'psychotherapy',
    'psychology',
    'psicología',
    'психология',
    'counselling',
    'counseling',
    'psychological counselling',
    'online therapy',
    'psychological services',
    'mental health',
    'London psychologist',
    'Moscow psychologist',
    'Montevideo psychologist',
    'Buenos Aires psychologist',
    'Argentina psychologist',
    'evidence-based therapy',
    'CBT therapy',
    'psychological support',
    'international therapy',
    'multilingual psychologist',
    'NHS experience',
    'mental health services',
    'counselling psychology',
    'psychology services',
    'psychological assessment',
    'mental health counselling',
    'online counselling',
    'therapy services'
  ],
  authors: [{ name: 'Martin Schweizer' }],
  creator: 'Martin Schweizer',
  publisher: 'Schweizer Psychology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'ru_RU'],
    url: 'https://schweizerpsychology.com',
    siteName: 'Schweizer Psychology',
    title: 'Schweizer Psychology - Professional Psychological Support Worldwide',
    description: 'Clinical psychologist providing evidence-based therapy and psychological services in London, Moscow, Montevideo, and Buenos Aires. Online therapy and counselling available worldwide in English and Spanish.',
    images: [
      {
        url: 'https://schweizerpsychology.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Schweizer Psychology - Professional Psychological Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schweizer Psychology - Professional Psychological Support',
    description: 'Evidence-based therapy, counselling and psychological services worldwide',
    images: ['https://schweizerpsychology.com/twitter-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://schweizerpsychology.com',
    languages: {
      'en-US': 'https://schweizerpsychology.com/en',
      'es-ES': 'https://schweizerpsychology.com/es',
      'ru-RU': 'https://schweizerpsychology.com/ru'
    }
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
  category: 'Healthcare',
  other: {
    'geo.region': ['GB-LND', 'RU-MOW', 'UY-MO', 'AR-C'],
    'geo.placename': 'London, Moscow, Montevideo, Buenos Aires',
    'geo.position': ['51.5074;-0.1278', '55.7558;37.6173', '-34.9011;-56.1645', '-34.6037;-58.3816'],
    'ICBM': ['51.5074, -0.1278', '55.7558, 37.6173', '-34.9011, -56.1645', '-34.6037, -58.3816']
  }
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "ru" }]
}

// Definimos los locales permitidos
const locales = ['en', 'es', 'ru'];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validamos el locale de manera asíncrona
  const validLocale = locales.includes(params.locale) ? params.locale : 'en';
  
  try {
    const messages = await getMessages({ locale: validLocale })

    return (
      <html lang={validLocale} suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="alternate" href="https://schweizerpsychology.com/en" hrefLang="en" />
          <link rel="alternate" href="https://schweizerpsychology.com/es" hrefLang="es" />
          <link rel="alternate" href="https://schweizerpsychology.com/ru" hrefLang="ru" />
          <link rel="alternate" href="https://schweizerpsychology.com" hrefLang="x-default" />
        </head>
        <body>
          <ClientLayout locale={validLocale} messages={messages}>
            {children}
          </ClientLayout>
        </body>
      </html>
    )
  } catch (error) {
    console.error("Error loading messages:", error);
    
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="alternate" href="https://schweizerpsychology.com/en" hrefLang="en" />
          <link rel="alternate" href="https://schweizerpsychology.com/es" hrefLang="es" />
          <link rel="alternate" href="https://schweizerpsychology.com/ru" hrefLang="ru" />
          <link rel="alternate" href="https://schweizerpsychology.com" hrefLang="x-default" />
        </head>
        <body>
          <ClientLayout locale="en" messages={{}}>
            {children}
          </ClientLayout>
        </body>
      </html>
    )
  }
}

