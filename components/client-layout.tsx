'use client'

import { NextIntlClientProvider, IntlErrorCode } from "next-intl"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { useEffect, useState } from "react"

// Fecha fija para evitar problemas de hidratación
const FIXED_DATE = new Date("2024-01-01T00:00:00.000Z");

// Manejador de errores para next-intl
function onError(error: any) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Los mensajes faltantes son esperados y solo deben registrar un error
    console.error(error);
  } else {
    // Otros errores indican un error en la aplicación
    console.error("Intl Error:", error);
  }
}

// Fallback para mensajes que no pueden ser resueltos
function getMessageFallback({ namespace, key, error }: any) {
  const path = [namespace, key].filter((part) => part != null).join('.');
  
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return path;
  } else {
    return path;
  }
}

export function ClientLayout({ 
  children, 
  locale, 
  messages 
}: { 
  children: React.ReactNode, 
  locale: string, 
  messages: any 
}) {
  // Usar un estado para evitar la hidratación automática hasta que el componente esté montado
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Configuración para NextIntlClientProvider para evitar problemas de hidratación
  const timeZone = 'UTC'; // Usar UTC como zona horaria estándar

  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone={timeZone}
      now={FIXED_DATE} // Usar una fecha fija para evitar inconsistencias
      onError={onError}
      getMessageFallback={getMessageFallback}
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }
        },
        number: {
          decimal: {
            style: 'decimal'
          }
        }
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
        <div className="min-h-screen bg-background text-foreground font-body antialiased dark">
          {/* Usamos Header siempre, independientemente del estado de mounted */}
          <Header />
          
          <main>
            {/* Contenido principal de la aplicación */}
            {children}
          </main>
          
          {/* Solo renderizamos el WhatsAppFloat cuando estamos en el cliente */}
          {mounted && <WhatsAppFloat />}
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
} 