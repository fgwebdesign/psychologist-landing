import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Definimos los locales permitidos
const locales = ['en', 'es', 'ru'];
const defaultLocale = 'en';

// Crear el middleware de internacionalización
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

// Exportar la configuración de middleware
export default function middleware(request: NextRequest) {
  // Si la ruta es la raíz (/), redirigir a /en
  if (request.nextUrl.pathname === '/') {
    return Response.redirect(new URL('/en', request.url));
  }

  return intlMiddleware(request);
}

// Configurar los patrones de coincidencia
export const config = {
  // Matcher ignorando archivos estáticos y API routes
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 