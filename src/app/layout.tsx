import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Minerva Partners | L'Ecosistema",
  description: "Wealth Management e Networking Strategico. Eccellenza Senza Compromessi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="it" className="scroll-smooth">
        <body className={`${inter.variable} font-sans antialiased bg-minerva-blue text-white selection:bg-minerva-gold selection:text-white`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6af9b26c-8ed3-40f3-9e42-9cb554431e81"
        />
          <div className="noise-overlay" />
          <Navigation />
          {children}
          <VisualEditsMessenger />
        </body>
      </html>

  );
}
