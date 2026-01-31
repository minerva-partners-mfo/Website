"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SolarSystem from "@/components/SolarSystem";

export default function Page() {
  return (
    <main className="min-h-screen bg-minerva-blue text-white overflow-hidden">
      <Navigation />
      
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a2a44_0%,#0f1829_100%)] opacity-50" />
      </div>

      <div className="relative z-10 pt-40 px-6">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            className="font-sans text-[12px] uppercase text-minerva-gold tracking-[0.8em] block mb-8"
          >
            L&apos;Ecosistema
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="text-5xl md:text-8xl font-titles tracking-tighter mb-10"
          >
            Modello di Business
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-base md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed tracking-[0.2em] uppercase"
          >
            L&apos;architettura strategica che abilita valore nel tempo. <br />
            Al centro di tutto, il vostro obiettivo.
          </motion.p>
        </div>

        {/* Solar System Visualization */}
        <div className="relative py-20">
          <SolarSystem />
        </div>

        {/* Footer/CTA space */}
        <div className="max-w-4xl mx-auto text-center pb-32 mt-20">
          <div className="w-full h-[1px] bg-white/5 mb-16" />
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-white/20">
            Minerva Partners. Eccellenza Senza Compromessi.
          </p>
        </div>
      </div>
    </main>
  );
}
