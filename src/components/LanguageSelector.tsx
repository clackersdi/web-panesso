'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageSelector() {
  const { locale, changeLanguage, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 text-xs uppercase tracking-widest font-nunito font-semibold transition-colors ${
          locale === 'es'
            ? 'text-panesso-white border-b-2 border-panesso-white'
            : 'text-panesso-light-gray hover:text-panesso-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-xs uppercase tracking-widest font-nunito font-semibold transition-colors ${
          locale === 'en'
            ? 'text-panesso-white border-b-2 border-panesso-white'
            : 'text-panesso-light-gray hover:text-panesso-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
