"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SolarSystem from "@/components/SolarSystem";

export default function Page() {
  return (
    <main className="min-h-screen bg-minerva-blue text-white pt-40 px-6 overflow-hidden">
      <Navigation />
      <div className="max-w-7xl mx-auto text-center space-y-20">
        <div className="space-y-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            className="font-sans text-[12px] uppercase text-minerva-gold tracking-[0.8em] block"
          >
            L'Ecosistema
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-titles tracking-tighter"
          >
            Ecosistema
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-xl text-white/40 max-w-2xl mx-auto leading-relaxed tracking-widest uppercase"
          >
            Tutto ruota intorno al cliente.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="w-full"
        >
          <SolarSystem />
        </motion.div>
      </div>
    </main>
  );
}
