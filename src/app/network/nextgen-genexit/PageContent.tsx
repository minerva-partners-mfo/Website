"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { ContentParagraph } from "@/components/ui/Cards";

const NEXTGEN_LEVELS = [
  { title: "INTRO (18\u201325)", text: "Literacy finanziaria e cultura del capitale." },
  { title: "DEVELOP (23\u201330)", text: "Mentorship strutturata e casi pratici." },
  { title: "LEAD (28\u201340)", text: "Leadership familiare, governance e decisioni." },
];

export default function NextGenGenExitPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Next Gen & Gen Exit"
        subtitle={"La ricchezza si trasferisce. La continuit\u00E0 si costruisce con metodo, governance e dialogo tra generazioni."}
        primaryCTA={{ label: "Richiedi informazioni", href: "/chi-siamo" }}
      />

      <SectionBlock id="nextgen-levels" title="Next Gen (3 livelli)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {NEXTGEN_LEVELS.map((level, i) => (
            <motion.div key={level.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-minerva-gold/15 p-6 text-center hover:border-minerva-gold/30 transition-all duration-500">
              <span className="font-titles text-2xl text-minerva-gold block mb-3">{`0${i + 1}`}</span>
              <h3 className="font-titles text-base text-white/70 mb-2">{level.title}</h3>
              <p className="text-white/40 text-sm font-sans leading-relaxed">{level.text}</p>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="genexit" title="Gen Exit (65+)">
        <ContentParagraph>
          {"Programma di transizione 12\u201324 mesi: patrimoniale (ottimizzazione passaggio), personale (nuova identit\u00E0 e ruolo), relazionale (dialogo con nuova generazione)."}
        </ContentParagraph>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {[
            { title: "Patrimoniale", text: "Ottimizzazione del passaggio" },
            { title: "Personale", text: "Nuova identit\u00E0 e ruolo" },
            { title: "Relazionale", text: "Dialogo con nuova generazione" },
          ].map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/5 p-6 text-center hover:border-minerva-gold/15 transition-all duration-500">
              <h4 className="font-titles text-sm text-minerva-gold mb-2">{item.title}</h4>
              <p className="text-white/30 text-xs font-sans">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
