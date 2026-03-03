"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { BulletList } from "@/components/ui/Cards";

const VERTICALS = [
  { title: "Business Consulting", text: "Contabilit\u00E0, payroll, fiscalit\u00E0 diretta/indiretta, CFO part-time, compliance." },
  { title: "Servizi Bancari", text: "Valutazione condizioni, treasury, lending strutturato, accesso a prodotti specialistici." },
  { title: "Digital Services", text: "Digitalizzazione processi, AI-driven reporting, cybersecurity, data management, automazione." },
  { title: "Energy Management", text: "Advisory ESG/renewables, due diligence investimenti green, bancabilit\u00E0 progetti." },
  { title: "Servizi Legali", text: "Successione, trust, protezione patrimoniale; struttura M&A e compliance." },
  { title: "Rischi & Assicurativo", text: "Asset protection, liability, soluzioni di wealth preservation/private insurance, hedging." },
  { title: "UHNWI Services", text: "Wealth tailor-made, succession planning, governance familiare, concierge/lifestyle." },
  { title: "Clienti Esteri", text: "Market entry Italia: company formation, investor visa, residenza fiscale, banking setup." },
];

export default function PartnersPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Partners"
        subtitle={"Eccellenza verticale selezionata: track record, indipendenza, allineamento culturale. Prelazione clienti Minerva e adesione integrale al Codice."}
        primaryCTA={{ label: "Leggi il Codice Minerva", href: "/ecosistema/codice-minerva" }}
      />

      <SectionBlock id="selection-criteria" title="Criteri di selezione">
        <div className="max-w-3xl mx-auto">
          <BulletList items={["Track record", "Indipendenza", "Allineamento culturale", "Sottoscrizione Codice Minerva"]} />
        </div>
      </SectionBlock>

      <SectionBlock id="verticals" title="Le 8 verticali">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VERTICALS.map((v, i) => (
            <motion.div key={v.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 border border-white/5 p-5 hover:border-minerva-gold/15 transition-all duration-500">
              <div className="w-1 h-full min-h-[40px] bg-minerva-gold/20 flex-shrink-0" />
              <div>
                <h4 className="font-titles text-sm text-white/70 mb-1">{v.title}</h4>
                <p className="text-white/30 text-xs font-sans leading-relaxed">{v.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
