import type React from "react"
import { getMessages } from "next-intl/server"
import { ClientLayout } from "@/components/client-layout"
import "@/app/globals.css"

export const metadata = {
  title: "Schweizer Psychology - Professional Psychological Services",
  description: "Professional psychological services to help you improve your mental health and wellbeing.",
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "ru" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Asegurar que el locale tiene un valor por defecto en caso de ser undefined
  const locale = params?.locale || 'en';
  
  try {
    // Envolvemos en try/catch para manejar posibles errores
    const messages = await getMessages({ locale })

    return (
      <html lang={locale} suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </head>
        <body>
          <ClientLayout locale={locale} messages={messages}>
            {children}
          </ClientLayout>
        </body>
      </html>
    )
  } catch (error) {
    console.error("Error loading messages:", error);
    
    // Fallback con mensajes vacíos si hay error
    return (
      <html lang={locale} suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </head>
        <body>
          <ClientLayout locale={locale} messages={{}}>
            {children}
          </ClientLayout>
        </body>
      </html>
    )
  }
}

