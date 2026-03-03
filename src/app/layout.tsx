import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minerva Partners | Excellence Without Compromise",
  description: "Premium wealth management and strategic networking ecosystem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${lora.variable} bg-minerva-dark text-white antialiased`}>
      <body className="font-sans selection:bg-minerva-gold/30">
        <Navigation />
        {children}
      </body>
    </html>
  );
}