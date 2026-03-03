"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { BulletList, ContentParagraph } from "@/components/ui/Cards";

const ETHICAL_BULLETS = [
  "Integrit\u00E0: nessun vantaggio economico giustifica compromissioni etiche.",
  "Trasparenza: costi dichiarati proattivamente.",
  "Conflitti: dichiarazione, valutazione IC, disclosure al cliente, documentazione; sanzioni severe.",
  "Riservatezza: condivisione solo \u201Cneed to know\u201D.",
  "Eccellenza: \u201Cabbastanza buono\u201D non \u00E8 accettabile.",
];

const REMUNERATION = [
  { role: "Origination", share: "10\u201335%", note: "varia per complessit\u00E0" },
  { role: "Execution", share: "40\u201380%", note: "sempre > origination" },
  { role: "Orig + Exec", share: "60\u201385%", note: "non somma aritmetica" },
];

const TIERS = [
  { name: "Tier 1", text: "Rischio alto: reputazionale/legale o >1M \u20AC. Approvazione IC obbligatoria." },
  { name: "Tier 2", text: "Rischio medio: 100k\u20131M \u20AC. Review Equity Partner, notifica IC." },
  { name: "Tier 3", text: "Rischio basso: <100k \u20AC. Gestione autonoma Partner." },
];

export default function CodiceMinervaPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Codice Minerva"
        subtitle={"Non \u00E8 una promessa. \u00C8 un vincolo operativo sottoscritto da Equity Partner, Partner e Friends prima di operare."}
        primaryCTA={{ label: "Scopri VERITAS", href: "/ecosistema/veritas" }}
      />

      <SectionBlock id="ethical-code" title="Codice Etico">
        <div className="max-w-3xl mx-auto">
          <BulletList items={ETHICAL_BULLETS} />
        </div>
      </SectionBlock>

      <SectionBlock id="remuneration-code" title="Codice di Remunerazione">
        <div className="max-w-3xl mx-auto">
          <div className="hidden md:grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-minerva-gold/20">
            <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/60 font-sans">Ruolo</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/60 font-sans text-center">Quota</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans text-center">Nota</span>
          </div>
          {REMUNERATION.map((row, i) => (
            <motion.div key={row.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-white/5">
              <span className="font-titles text-sm text-white/60">{row.role}</span>
              <span className="text-minerva-gold text-sm font-sans text-center font-medium">{row.share}</span>
              <span className="text-white/30 text-sm font-sans text-center">{row.note}</span>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="operational-code" title="Codice Operativo">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TIERS.map((tier, i) => (
            <motion.div key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-minerva-gold/15 p-6 text-center hover:border-minerva-gold/30 transition-all duration-500">
              <span className="font-titles text-2xl text-minerva-gold block mb-3">{tier.name}</span>
              <p className="text-white/40 text-sm font-sans leading-relaxed">{tier.text}</p>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
