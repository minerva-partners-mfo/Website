"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Manifesto() {
  return (
    <main className="min-h-screen bg-minerva-blue text-white overflow-hidden relative">
      <Navigation />
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(197,160,89,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(197,160,89,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-[12px] tracking-[0.8em] uppercase text-minerva-gold mb-12 block">
            Il Manifesto
          </span>
          
          <h1 className="text-4xl md:text-6xl font-titles mb-20 leading-tight tracking-tight">
            Eccellenza, Riservatezza, <br />
            <span className="text-minerva-gold italic">Valore nel Tempo.</span>
          </h1>

          <div className="space-y-12 font-sans text-lg md:text-xl leading-relaxed text-white/70 tracking-wide">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Il mondo cambia rapidamente: mercati volatili, regole in evoluzione, tecnologie che trasformano settori e passaggi generazionali imminenti. Cambia anche il modo in cui famiglie e imprenditori scelgono dove vivere, investire e strutturarsi.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              In questo scenario, le famiglie imprenditoriali affrontano una complessità crescente, e spesso la risposta è moltiplicare il numero di professionisti, banche, consulenti. Il risultato ottenuto però è: frammentazione, decisioni incoerenti, assenza di una visione d&apos;insieme e questo determina ancora più insicurezza, che rende inerte l&apos;imprenditore nel da farsi.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-white font-medium"
            >
              Ma, il costo dell&apos;immobilità è altissimo: decisioni sbagliate, successioni non pianificate, opportunità perse, patrimoni erosi da inefficienze fiscali e operative, continuità dei valori compromessa. Chi non agisce oggi, paga domani, in denaro, conflitti familiari e valore.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Minerva Partners nasce per colmare questo vuoto. Non siamo un semplice Multiclient Family Office indipendente. Vogliamo dare una visione complessiva del patrimonio, coordinando ed eseguendo direttamente ciò che sappiamo fare e, tramite partner selezionati che condividono i nostri valori, dando tutti i servizi necessari, spesso partecipando anche alle iniziative proposte.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="text-minerva-gold"
            >
              Diamo ordine alla complessità, riduciamo sprechi e abilitiamo valore con un unico metodo di lavoro, massima responsabilità verso il cliente e i più alti standard di riservatezza, trasparenza ed eccellenza.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-24"
          >
            <Link 
              href="/"
              className="group inline-flex items-center gap-6 border border-white/10 px-12 py-5 hover:border-minerva-gold transition-all duration-700 relative overflow-hidden"
            >
              <span className="relative z-10 font-sans text-[11px] tracking-[0.5em] uppercase text-white group-hover:text-minerva-blue transition-colors duration-700">
                Scopri l&apos;Ecosistema
              </span>
              <div className="absolute inset-0 bg-minerva-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-10">
        <h2 className="font-titles text-[15vw] whitespace-nowrap select-none pointer-events-none">
          MINERVA PARTNERS
        </h2>
      </div>
    </main>
  );
}
