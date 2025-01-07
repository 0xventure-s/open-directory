import type { Metadata } from "next";

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
      <body
        className={` ${General.className} antialiased`}
      >
        {children}
        
      </body>
      
    </html>
  );
}
