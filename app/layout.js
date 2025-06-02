import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GoogleTagManager } from '@next/third-parties/google';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react"
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Ngabonziza | Portfolio",
  description: `Développeur Web Fullstack basé à Lille, je conçois des sites et applications web performants avec PHP (WordPress) et JavaScript (React, Next.js, Nuxt.js).
Je travaille sur des projets web sur-mesure : vitrine, e-commerce, dashboards, SEO, intégration d’API, optimisation performance.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth focus:scroll-auto">
      <GoogleTagManager gtmId="GTM-NSPZ3VTH" />
      <Analytics />
      <body className={`${inter.className} `}>
        <Providers>
          <ClientLayoutWrapper>
            {children}
            <SpeedInsights />
          </ClientLayoutWrapper>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="toast-container"
            toastClassName="toast"
            bodyClassName="toast-body"
          />
        </Providers>
      </body>
    </html>
  );
}
