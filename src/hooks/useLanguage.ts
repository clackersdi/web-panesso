'use client';

import { useCallback, useEffect, useState } from 'react';
import { messages, type Locale } from '@/i18n/config';

export function useLanguage() {
  const [locale, setLocale] = useState<Locale>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from localStorage or browser language
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0] as Locale;
      if (browserLang === 'en' || browserLang === 'es') {
        setLocale(browserLang);
      }
    }
    setMounted(true);
  }, []);

  const changeLanguage = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = messages[locale];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if not found
      }
    }

    return typeof value === 'string' ? value : key;
  }, [locale]);

  return { locale, changeLanguage, t, mounted };
}
