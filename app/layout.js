import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from '@/components/NavBar'

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Ngabonziza || Portfolio",
  description: "FullStack web developer on PHP and JS with 3 years of experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
