"use client";

import React from "react";
import { motion } from "framer-motion";

const POINTS = [
  "DISCIPLINA E METODO",
  "Network selezionato",
  "Esecuzione e governance",
  "RISERVATEZZA E DEDIZIONE"
];

export default function Credibility() {
  return (
    <section className="snap-section flex items-center justify-center bg-transparent">
      <div className="max-w-5xl w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl mb-24 text-center font-titles text-white"
        >
          Il nostro Impegno: il modello VERITAS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {POINTS.map((point, idx) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex items-start gap-8 border-l border-minerva-gold/20 pl-8 py-4 group hover:border-minerva-gold transition-colors duration-500"
            >
              <span className="font-titles text-minerva-gold text-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                0{idx + 1}
              </span>
              <p className="font-sans text-[19px] tracking-[0.3em] uppercase text-white/60 leading-relaxed group-hover:text-white transition-colors duration-500">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
