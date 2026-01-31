"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const VERITAS_VALUES = [
  {
    letter: "V",
    word: "Visione",
    description: "Capacità di guardare oltre l'orizzonte immediato per anticipare i cambiamenti e progettare il futuro del patrimonio.",
    color: "from-blue-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
  },
  {
    letter: "E",
    word: "Eccellenza",
    description: "Standard qualitativi senza compromessi in ogni fase operativa, dalla strategia all'esecuzione tecnica.",
    color: "from-amber-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1518455027359-f3f816b1a22a?auto=format&fit=crop&q=80&w=2070"
  },
  {
    letter: "R",
    word: "Resilienza",
    description: "Strutturazione di patrimoni capaci di resistere agli urti dei mercati e alle complessità del passaggio generazionale.",
    color: "from-slate-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=2070"
  },
  {
    letter: "I",
    word: "Integrità",
    description: "Onestà intellettuale e allineamento etico assoluto tra gli interessi del cliente e l'operato di Minerva.",
    color: "from-emerald-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070"
  },
  {
    letter: "T",
    word: "Tutela",
    description: "Protezione attiva degli asset e della riservatezza familiare attraverso strumenti di governance evoluti.",
    color: "from-cyan-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
  },
  {
    letter: "A",
    word: "Allineamento",
    description: "Sincronizzazione perfetta tra obiettivi aziendali, patrimoniali e aspirazioni personali dei membri della famiglia.",
    color: "from-indigo-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
  },
  {
    letter: "S",
    word: "Salvaguardia",
    description: "Il settimo valore: la cura costante per la stabilità e la crescita armonica dell'intero ecosistema familiare.",
    color: "from-minerva-gold/20 to-transparent",
    image: "https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?auto=format&fit=crop&q=80&w=2070"
  }
];

export default function ModelloVeritas() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(1);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-minerva-blue text-white min-h-screen overflow-x-hidden">
      <div className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              className="font-sans text-[12px] uppercase text-minerva-gold tracking-[0.8em] block mb-8"
            >
              L'Ecosistema
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-titles tracking-tighter mb-12"
            >
              Il Modello VERITAS.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-sans text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed tracking-wider"
            >
              Il modello FISHES identifica sei forme di capitale. <br className="hidden md:block" />
              Minerva aggiunge un 7° valore fondamentale: la <span className="text-minerva-gold">Salvaguardia</span>.
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div 
                key="intro-letters"
                exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center gap-8 py-20"
              >
                {VERITAS_VALUES.map((v, idx) => (
                  <motion.span
                    key={v.letter}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.8 }}
                    className="text-6xl md:text-9xl font-titles text-minerva-gold/80"
                  >
                    {v.letter}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="veritas-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col gap-2"
              >
                {VERITAS_VALUES.map((v, idx) => (
                  <VeritasRow key={v.letter} value={v} index={idx} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

function VeritasRow({ value, index }: { value: typeof VERITAS_VALUES[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-white/5 border-y border-white/5 backdrop-blur-md h-32 md:h-40 flex items-center transition-all duration-700 hover:bg-white/[0.08]"
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
        <img src={value.image} alt="" className="w-full h-full object-cover grayscale" />
        <div className={`absolute inset-0 bg-gradient-to-r ${value.color}`} />
      </div>

      <div className="relative z-10 w-full px-8 md:px-20 flex items-center">
        <div className="flex items-center gap-12 md:gap-24 w-full">
          <span className="text-6xl md:text-8xl font-titles text-minerva-gold/20 group-hover:text-minerva-gold transition-all duration-700 w-24 md:w-32 text-center flex-shrink-0">
            {value.letter}
          </span>
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 flex-grow">
            <h2 className="text-2xl md:text-5xl font-titles tracking-tight group-hover:text-minerva-gold transition-colors duration-500 whitespace-nowrap">
              {value.word}
            </h2>
            <p className="font-sans text-sm md:text-lg text-white/30 group-hover:text-white/60 transition-colors duration-700 max-w-3xl tracking-wide leading-relaxed">
              {value.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative side bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-minerva-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
    </motion.div>
  );
}
