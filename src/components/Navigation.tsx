"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
  {
    title: "L'Ecosistema",
    href: "/ecosistema",
    links: [
      { label: "Modello di business", href: "/ecosistema/modello-business" },
      { label: "Codice Minerva", href: "/ecosistema/codice-minerva" },
      { label: "Modello VERITAS", href: "/ecosistema/modello-veritas" },
    ],
  },
  {
    title: "I Servizi",
    href: "/servizi",
    links: [
      { label: "Minerva Hub", href: "/servizi/minerva-hub" },
      { label: "Partners", href: "/servizi/partners" },
      { label: "Friends", href: "/servizi/friends" },
      { label: "Advisor", href: "/servizi/advisor" },
    ],
  },
  {
    title: "Il Network",
    href: "/network",
    links: [
      { label: "Minerva Circle", href: "/network/minerva-circle" },
      { label: "Minerva P0", href: "/network/minerva-p0" },
      { label: "Minerva Next Gen <> Gen Exit", href: "/network/next-gen-exit" },
    ],
  },
  {
    title: "Chi Siamo",
    href: "/chi-siamo",
    links: [
      { label: "Il Manifesto", href: "/chi-siamo/manifesto" },
      { label: "Management", href: "/chi-siamo/management" },
      { label: "Contatti", href: "/chi-siamo/contatti" },
    ],
  },
];

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-minerva-blue/60 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center group">
          <motion.img 
            src="/images/logo_piccolo.jpg" 
            alt="Minerva Partners Logo" 
            className="h-10 w-auto object-contain brightness-100 contrast-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-10">
          {MENU_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="relative h-16 flex items-center group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={item.href}>
                <motion.span 
                  className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/60 group-hover:text-minerva-gold transition-colors duration-500"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  {item.title}
                </motion.span>
              </Link>
              
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[64px] left-1/2 -translate-x-1/2 w-80 bg-minerva-dark/98 backdrop-blur-3xl border border-white/10 p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]"
                  >
                    <div className="flex flex-col gap-5">
                      {item.links.map((link, lIdx) => (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: lIdx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-minerva-gold transition-all duration-300 hover:translate-x-3 inline-block whitespace-nowrap"
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div 
                className="absolute bottom-3 left-0 h-[1px] bg-minerva-gold"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "circOut" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="relative group overflow-hidden border border-minerva-gold/30 px-8 py-2.5 transition-all duration-500 hover:border-minerva-gold">
          <span className="relative z-10 font-sans text-[9px] tracking-[0.5em] uppercase text-minerva-gold group-hover:text-minerva-blue transition-colors duration-500">
            Area Riservata
          </span>
          <div className="absolute inset-0 bg-minerva-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
        </button>
      </div>
    </nav>
  );
}
