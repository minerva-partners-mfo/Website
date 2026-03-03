"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { BulletList, ContentParagraph } from "@/components/ui/Cards";

const VALUE_COLS = [
  { title: "Valore per il Cliente", bullets: ["Miglioramento performance", "Massima riservatezza ed etica", "Supporto di fiducia"] },
  { title: "Valore per Minerva", bullets: ["Arricchimento competenze", "Utilizzo su necessit\u00E0", "Memoria storica ricostruita"] },
  { title: "Valore per il Friend", bullets: ["Valorizzazione operato", "Massimo utilizzo network", "Riconoscimento e correttezza"] },
];

export default function FriendsPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Friends"
        subtitle={"Un anello esterno di eccellenze: flessibilit\u00E0, competenze puntuali, qualit\u00E0 e riservatezza."}
        primaryCTA={{ label: "Richiedi invito al Circle", href: "/network/circle" }}
      />

      <SectionBlock id="who-are-friends" title="Chi sono i Friends">
        <ContentParagraph>
          {"Professionisti e societ\u00E0 che operano come supporto senza vincoli di esclusiva o prelazione, previa sottoscrizione del Codice Minerva."}
        </ContentParagraph>
        <div className="max-w-3xl mx-auto mt-8">
          <BulletList items={["Specialisti su tematiche necessarie", "Originator di opportunit\u00E0", "Figure introdotte dal cliente come fiducia"]} />
        </div>
      </SectionBlock>

      <SectionBlock id="value-triangle" title="Il valore per Cliente, Minerva e Friend">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_COLS.map((col, i) => (
            <motion.div key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-white/5 hover:border-minerva-gold/20 p-8 transition-all duration-500">
              <h3 className="font-titles text-base text-minerva-gold mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.bullets.map((b) => (
                  <li key={b} className="text-white/40 text-sm font-sans leading-relaxed flex items-start gap-2">
                    <span className="text-minerva-gold/40 mt-0.5 flex-shrink-0">{"\u25C7"}</span>{b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
