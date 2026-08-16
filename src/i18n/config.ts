import es from './es.json';
import en from './en.json';

export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;

export type Locale = (typeof locales)[number];

export const messages = {
  es,
  en,
};

export type Messages = typeof messages.es;
