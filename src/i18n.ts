import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['ru', 'uz'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    timeZone,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
}); 
