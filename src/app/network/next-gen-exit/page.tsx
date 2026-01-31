"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function Page() {
  return (
    <main className="min-h-screen bg-minerva-blue text-white pt-40 px-6">
      <Navigation />
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          className="font-sans text-[12px] uppercase text-minerva-gold tracking-[0.8em] block"
        >
          Il Network
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl lg:text-9xl font-titles tracking-tighter"
        >
          Next Gen <> Gen Exit
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-sans text-xl text-white/40 max-w-2xl mx-auto leading-relaxed tracking-widest uppercase"
        >
          Pianificare il passaggio generazionale.
        </motion.p>
      </div>
    </main>
  );
}
