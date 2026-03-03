"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { BulletList } from "@/components/ui/Cards";

const FORMATS = [
  { title: "Deal Night", text: "Opportunit\u00E0 selezionate, discussione e Q&A strutturato." },
  { title: "Fundraising Support", text: "Confronto su strutture, capitale e scenari." },
  { title: "Thematic Deep Dive", text: "Verticali: real estate, successioni, AI, energy, ecc." },
  { title: "Networking Dinner", text: "Relazione, non vendita." },
];

export default function CirclePage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Minerva Circle"
        subtitle="Eventi strutturati ad alto contenuto: dialogo reale tra pari, riservatezza assoluta, nessun selling."
        primaryCTA={{ label: "Richiedi invito", href: "/chi-siamo" }}
      />

      <SectionBlock id="formats" title={"Format annuali (8\u201310 eventi)"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {FORMATS.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/5 hover:border-minerva-gold/20 p-6 transition-all duration-500">
              <h3 className="font-titles text-base text-minerva-gold mb-2">{f.title}</h3>
              <p className="text-white/40 text-sm font-sans leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="rules" title="Regole del Circle">
        <div className="max-w-3xl mx-auto">
          <BulletList items={["Chatham House Rule", "No selling", "Partecipazione selettiva", "Riservatezza come standard"]} />
        </div>
      </SectionBlock>
    </main>
  );
}
