export const defaultLocale = 'en'
export const locales = ['en', 'es', 'ru']

export function getLocalePartsFrom({ pathname }) {
  const segments = pathname.split('/')
  const locale = segments[1]

  if (locales.includes(locale)) {
    return {
      locale,
      pathname: segments.slice(2).join('/') || '/'
    }
  }
  
  return {
    locale: defaultLocale,
    pathname
  }
} 