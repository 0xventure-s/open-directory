import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next'
import "./globals.css";
import { General } from "../config/font";


export const metadata: Metadata = {
  title: "Ar/acc",
  description: "Momento del Aceleracionismo Argentino",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="public/open-directory.vercel.app_.png" />
        <meta property="og:title" content="Ar/acc" />
        <meta property="og:description" content="Aceleracionismo Argentino" />
      </head>
      <body
        className={` ${General.className} antialiased`}
      >
        {children}
        <Analytics />
        
      </body>
      
    </html>
  );
}
