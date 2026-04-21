'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

function detectDefaultLang() {
  if (typeof window === 'undefined') return 'fr';
  const saved = localStorage.getItem('lang');
  if (saved === 'fr' || saved === 'en') return saved;
  const browser = navigator.language || navigator.languages?.[0] || 'fr';
  return browser.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    setLang(detectDefaultLang());
  }, []);

  const toggle = () => {
    const next = lang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('lang', next);
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
