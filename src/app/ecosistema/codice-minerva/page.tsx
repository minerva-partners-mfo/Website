"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const CODES = [
{
  id: "01",
  title: "Codice Etico",
  description: "Definisce i principi cardine di tutto l'ecosistema: riservatezza e trasparenza.",
  details: "Il Codice Etico rappresenta il pilastro fondamentale della nostra Confederazione. Ogni partecipante, dai Partner interni ai Friends esterni, si impegna formalmente a mantenere i più alti standard di integrità. La riservatezza non è solo un dovere legale, ma un impegno morale verso il patrimonio della famiglia."
},
{
  id: "02",
  title: "Codice di Remunerazione",
  description: "Regole di distribuzione compensi visibili anche al cliente. Etico e trasparente, ma semplice.",
  details: "Eliminiamo le asimmetrie informative. Il cliente ha sempre piena visibilità su come vengono distribuiti i compensi all'interno dell'ecosistema. Questo approccio 'fair' garantisce che ogni player sia incentivato esclusivamente a creare valore per il progetto, eliminando conflitti di interesse nascosti."
},
{
  id: "03",
  title: "Codice Operativo",
  description: "Processi, procedure e standard di attività previsti per ogni player coinvolto.",
  details: "L'eccellenza richiede metodo. Il Codice Operativo stabilisce standard tecnici rigorosi per ogni fase dell'intervento. Dalla gestione documentale alla reportistica, ogni azione è codificata per garantire continuità, precisione e qualità costante nel tempo."
}];


export default function CodiceMinerva() {
  const [expanded, setExpanded] = useState<string | null>("01");

  return (
    <main className="relative bg-minerva-blue text-white min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Visual Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale brightness-50">

          <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-person-writing-on-a-paper-34440-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-minerva-blue via-transparent to-minerva-blue" />
      </div>

      <div className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 1 }}
              className="font-sans text-[12px] uppercase text-minerva-gold tracking-[0.8em] block mb-8">

              L'Ecosistema
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-titles tracking-tighter mb-12">

              Il Codice di Minerva.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-sans text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed tracking-wider">

              Oltre alle competenze, integriamo la Salvaguardia.
            </motion.p>
          </div>

          {/* Accordion Section */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {CODES.map((code, idx) =>
            <motion.div
              key={code.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`group border-b border-white/10 overflow-hidden transition-all duration-500 ${expanded === code.id ? 'bg-white/5 backdrop-blur-md' : 'hover:bg-white/2'}`}>

                <button
                onClick={() => setExpanded(expanded === code.id ? null : code.id)}
                className="w-full flex items-center justify-between py-12 px-8 text-left outline-none">

                  <div className="flex items-center gap-12">
                    <span className="font-sans text-minerva-gold/40 text-sm tracking-widest">{code.id}</span>
                    <h2 className={`text-2xl md:text-4xl font-titles tracking-tight transition-colors duration-500 ${expanded === code.id ? 'text-minerva-gold' : 'text-white'}`}>
                      {code.title}
                    </h2>
                  </div>
                  <motion.div
                  animate={{ rotate: expanded === code.id ? 45 : 0 }}
                  className="text-minerva-gold">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded === code.id &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>

                      <div className="px-20 pb-16 space-y-8">
                        <p className="font-sans text-lg text-white/80 leading-relaxed italic border-l border-minerva-gold/30 pl-8">
                          {code.description}
                        </p>
                        <p className="font-sans text-base text-white/50 leading-relaxed max-w-2xl tracking-wide">
                          {code.details}
                        </p>
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-32 text-center">

            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-white/30 !whitespace-pre-line">CHIUNQUE INTERAAGISCE CON MINERVA OPERA PREVIA SOTTOSCRIZIONE DEL CODICE.

            </p>
          </motion.div>
        </div>
      </div>

      <footer className="py-20 px-6 bg-minerva-dark/50 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <Link href="/">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6af9b26c-8ed3-40f3-9e42-9cb554431e81/Gemini_Generated_Image_qddqdzqddqdzqddq-1769454284267.png"
              alt="Logo"
              className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity" />

          </Link>
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-white/20 italic">
            "Non chiederti cosa ognuno può fare per te, ma cosa tutti insieme possono fare per il patrimonio."
          </p>
        </div>
      </footer>
    </main>);

}