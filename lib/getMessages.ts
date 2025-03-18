// lib/getMessages.ts
import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({ locale = 'en' }) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    locale
  };
});