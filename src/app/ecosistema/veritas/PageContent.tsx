"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

const VERITAS_DATA = [
  { letter: "V", word: "Vision", it: "Visione", text: "Pianificazione successoria, Next Gen, chiarezza degli obiettivi e delle priorit\u00E0 familiari.", bullets: ["Roadmap generazionale", "Allineamento obiettivi", "Decisioni coerenti nel tempo"] },
  { letter: "E", word: "Excellence", it: "Eccellenza", text: "Standard qualitativi, selezione rigorosa di clienti/Friends e disciplina dell\u2019Investment Committee.", bullets: ["Qualit\u00E0 prima di quantit\u00E0", "IC e governance", "Selezione network"] },
  { letter: "R", word: "Resilience", it: "Resilienza", text: "Diversificazione e costruzione di strutture che reggono cicli, shock e transizioni.", bullets: ["Protezione da concentrazioni", "Gestione rischio", "Strutture sostenibili"] },
  { letter: "I", word: "Integrity", it: "Integrit\u00E0", text: "Indipendenza, trasparenza, fee-only. Nessuna retrocessione, nessun prodotto spinto.", bullets: ["Trasparenza costi", "Conflitti gestiti", "Allineamento etico"] },
  { letter: "T", word: "Trust", it: "Tutela", text: "Community e riservatezza come asset: Circle, regole chiare, fiducia prima di tutto.", bullets: ["Riservatezza", "Chatham House Rule", "Relazioni tra pari"] },
  { letter: "A", word: "Alignment", it: "Allineamento", text: "Coinvestimento e responsabilit\u00E0 condivisa: skin in the game, club deal con processo disciplinato.", bullets: ["Coinvestimento", "IC approval", "Processo strutturato"] },
  { letter: "S", word: "Stewardship", it: "Salvaguardia", text: "Governance familiare e continuit\u00E0: preservare valore e identit\u00E0 lungo generazioni.", bullets: ["Governance", "Passaggi generazionali", "Continuit\u00E0"] },
];

export default function VeritasPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="VERITAS"
        subtitle={"Oltre il capitale finanziario: un framework che integra valori, metodo e continuit\u00E0 generazionale."}
        primaryCTA={{ label: "Scopri l\u2019Ecosistema", href: "/ecosistema" }}
      />

      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          {/* Large animated title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 md:gap-4 mb-20"
          >
            {VERITAS_DATA.map((v, i) => (
              <motion.span
                key={v.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="font-titles text-5xl md:text-8xl text-minerva-gold cursor-pointer hover:text-white transition-colors duration-500"
              >
                {v.letter}
              </motion.span>
            ))}
          </motion.div>

          {/* 7 expanding cards */}
          <div className="space-y-4">
            {VERITAS_DATA.map((v, i) => (
              <motion.div
                key={v.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-white/5 hover:border-minerva-gold/20 transition-all duration-500"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-titles text-3xl md:text-4xl text-minerva-gold">{v.letter}</span>
                    <div>
                      <span className="font-titles text-lg md:text-xl block">{v.word}</span>
                      <span className="text-white/30 text-xs font-sans">{v.it}</span>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: expanded === i ? 45 : 0 }}
                    className="text-minerva-gold/40 text-2xl"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 border-t border-white/5">
                        <p className="text-white/40 text-sm font-sans leading-relaxed mt-6 mb-4 max-w-2xl">
                          {v.text}
                        </p>
                        <ul className="space-y-2">
                          {v.bullets.map((b) => (
                            <li key={b} className="text-white/30 text-xs font-sans leading-relaxed flex items-start gap-2">
                              <span className="text-minerva-gold/40 mt-0.5 flex-shrink-0">{"\u25C7"}</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
