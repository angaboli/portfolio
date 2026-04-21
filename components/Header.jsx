'use client';
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/locales/translations";

export default function Header() {
  const { lang, toggle } = useLanguage();
  const t = translations[lang];

  return (
    <header className="sticky w-full items-center flex left-0 top-0 z-50 shadow-md bg-bkgEnd/80 backdrop-blur-lg">
      <div className="container mx-auto p-4 flex justify-between items-center h-16">
        <a href="/" className="p-1.5">
          <span className="subtitle">{`< />`}</span>
        </a>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-secondary text-lg items-center">{t.nav.blog}</Link>
          <button
            onClick={toggle}
            className="text-sm font-semibold px-2.5 py-1 rounded-lg bg-accent/20 text-secondary hover:bg-accent/40 transition-colors duration-200"
            aria-label="Switch language"
          >
            {t.header.langToggle}
          </button>
          <ThemeSwitch className="cursor-pointer text-secondary" />
        </div>
      </div>
    </header>
  );
}