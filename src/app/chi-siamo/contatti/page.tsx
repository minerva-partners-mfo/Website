"use client";

import React from "react";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  { label: "Sede", value: "Via Roggia Vignola, 9 — Treviglio (BG), Italia" },
  { label: "Email", value: "info@minervapartners.it" },
  { label: "Telefono", value: "+39 0363 49160" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-minerva-blue text-white overflow-hidden">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="/images/room.jpg"
          alt="Sede Minerva Partners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-minerva-blue/30 via-minerva-blue/60 to-minerva-blue" />
      </div>
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <div className="text-center space-y-12 mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            className="font-sans text-[12px] uppercase text-minerva-gold tracking-[0.8em] block"
          >
            Contatti
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-titles tracking-tighter"
          >
            Contatti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-xl text-white/40 uppercase tracking-widest"
          >
            Entra in Contatto
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-32">
          {/* Colonna sinistra — Informazioni */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="font-sans text-white/50 leading-relaxed tracking-wide mb-12">
              {"Minerva prende il nome dalla divinità romana della saggezza e della strategia: l'obiettivo è progettare soluzioni su misura per l'imprenditore e la sua famiglia, mettendo al centro preservazione e crescita del patrimonio nel tempo e attraverso le generazioni."}
            </p>

            {CONTACT_INFO.map((c) => (
              <div key={c.label} className="mb-8">
                <span className="text-[11px] tracking-[0.4em] uppercase text-minerva-gold mb-2 block">
                  {c.label}
                </span>
                <span className="text-white/60 text-base block">
                  {c.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Colonna destra — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nome e Cognome"
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-minerva-gold outline-none transition-colors placeholder:text-white/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-minerva-gold outline-none transition-colors placeholder:text-white/20"
                />
              </div>
              <div>
                <textarea
                  placeholder="Il tuo messaggio"
                  rows={4}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-minerva-gold outline-none transition-colors placeholder:text-white/20 resize-none"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 accent-minerva-gold"
                />
                <label htmlFor="privacy" className="font-sans text-sm text-white/40 leading-relaxed cursor-pointer">
                  Ho letto e accetto la Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-minerva-gold text-minerva-blue py-4 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-minerva-gold/80 transition-colors mt-6"
              >
                Invia Richiesta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
