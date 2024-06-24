import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GoogleTagManager } from '@next/third-parties/google';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react"

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Ngabonziza | Portfolio",
  description: "FullStack web developer on PHP and JS with 3 years of experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth focus:scroll-auto">
      <GoogleTagManager gtmId="GTM-NSPZ3VTH" />
      <Analytics />
      <body className={`${inter.className} `}>
        <Providers>
          {children}
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
