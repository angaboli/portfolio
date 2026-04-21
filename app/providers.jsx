'use client';

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" themes={['light', 'dark']} enableSystem>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}