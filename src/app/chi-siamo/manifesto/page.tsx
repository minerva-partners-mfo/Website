"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function Manifesto() {
  return (
    <main className="min-h-screen bg-minerva-blue text-white pt-32 pb-20 px-6">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 0.6, letterSpacing: "0.8em" }}
              transition={{ duration: 2 }}
              className="font-sans text-[12px] uppercase text-minerva-gold block"
            >
              Chi Siamo
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-titles tracking-tighter">Il Manifesto</h1>
          </div>

          <div className="space-y-12 font-sans text-lg md:text-xl leading-relaxed text-white/70 tracking-wide font-light">
            <p>
              Il mondo cambia rapidamente: mercati volatili, regole in evoluzione, tecnologie che trasformano settori e passaggi generazionali imminenti. Cambia anche il modo in cui famiglie e imprenditori scelgono dove vivere, investire e strutturarsi.
            </p>
            
            <p>
              In questo scenario, le famiglie imprenditoriali affrontano una complessità crescente, e spesso la risposta è moltiplicare il numero di professionisti, banche, consulenti. Il risultato ottenuto però è: <span className="text-white/90">frammentazione, decisioni incoerenti, assenza di una visione d&apos;insieme</span> e questo determina ancora più insicurezza, che rende inerte l&apos;imprenditore nel da farsi.
            </p>

            <blockquote className="border-l-2 border-minerva-gold pl-8 py-4 my-12 italic text-minerva-gold/90 text-2xl md:text-3xl font-titles">
              &quot;Ma, il costo dell&apos;immobilità è altissimo: decisioni sbagliate, successioni non pianificate, opportunità perse, patrimoni erosi da inefficienze fiscali e operative.&quot;
            </blockquote>

            <p>
              Chi non agisce oggi, paga domani, in denaro, conflitti familiari e valore.
            </p>

            <p>
              Minerva Partners nasce per colmare questo vuoto. Non siamo un semplice Multiclient Family Office indipendente. Vogliamo dare una <span className="text-white/90">visione complessiva del patrimonio</span>, coordinando ed eseguendo direttamente ciò che sappiamo fare e, tramite partner selezionati che condividono i nostri valori, dando tutti i servizi necessari, spesso partecipando anche alle iniziative proposte.
            </p>

            <p className="text-white/90 font-medium pt-8">
              Diamo ordine alla complessità, riduciamo sprechi e abilitiamo valore con un unico metodo di lavoro, massima responsabilità verso il cliente e i più alti standard di riservatezza, trasparenza ed eccellenza.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
