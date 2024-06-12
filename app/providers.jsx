'use client';

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return <ThemeProvider attribute="class" defaultTheme="system" themes={['light', 'dark']} enableSystem>
    {children}
  </ThemeProvider>
}