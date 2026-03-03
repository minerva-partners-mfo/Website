"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TEAM = [
  {
    name: "Enrico Viganò",
    role: "Equity Partner & Co-Founder",
    photo: "/images/team/enrico.jpg",
    bio: [
      "Dottore Commercialista, Founder di Minerva Partners e dello Studio Professionale Viganò. Ricopre ruoli di governance come membro di CdA e CFO di Holding di investimento.",
      "Laureato in Economia Aziendale all\u2019Università di Bergamo, con triennale in Bocconi e esperienza internazionale alla Rotterdam School of Management.",
    ],
  },
  {
    name: "Marco Vittoni",
    role: "Equity Partner & Co-Founder",
    photo: "/images/team/marco.jpg",
    bio: [
      "Esperto di M&A, corporate finance e advisory strategico per PMI e Mid Cap. Ha operato in diverse banche di investimento tra Italia e Svizzera, concludendo con successo circa 50 deals.",
      "Laureato in Management alla Bocconi, con triennale a Parma e eMBA presso l\u2019Universidade Católica Portuguesa di Lisbona.",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-minerva-blue text-white pt-40 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-12 mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            className="font-sans text-[12px] uppercase text-minerva-gold tracking-[0.8em] block"
          >
            Management
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-titles tracking-tighter"
          >
            Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-xl text-white/40 uppercase tracking-widest"
          >
            Le Persone Dietro la Visione
          </motion.p>
        </div>

        <div className="space-y-12 mb-32">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="border border-white/5 bg-minerva-dark/30 p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10">
                <div className="relative w-full md:w-[280px] h-[350px] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="font-titles text-3xl">{member.name}</h3>
                  <span className="text-minerva-gold text-[11px] tracking-[0.4em] uppercase mt-1 block">
                    {member.role}
                  </span>
                  <div className="text-white/50 text-base leading-relaxed mt-6 font-sans space-y-4">
                    {member.bio.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/5 pt-16 pb-32"
        >
          <h2 className="font-titles text-3xl tracking-tight mb-8">
            La Visione
          </h2>
          <p className="font-sans text-lg text-white/50 max-w-3xl leading-relaxed tracking-wide">
            {"Non abbiamo costruito Minerva per essere grandi. L'abbiamo costruita per essere i migliori. Un gruppo ristretto di persone straordinarie che condividono valori, ambizione e integrità."}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
