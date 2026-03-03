"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { DataBadge, ContentParagraph } from "@/components/ui/Cards";

const KPIS = [
  { label: "Ricchezza famiglie italiane", value: "\u20AC11.286 mld", note: "Banca d\u2019Italia" },
  { label: "Rapporto ricchezza/reddito", value: "8,3x", note: "Banca d\u2019Italia" },
  { label: "Quota immobiliare sul patrimonio", value: "~60%", note: "Banca d\u2019Italia" },
  { label: "Great Wealth Transfer", value: "$83.500 mld", note: "entro 2040 (stima globale)" },
  { label: "Italia: trasferimenti in arrivo", value: "180 mld \u20AC", note: "entro 2028" },
];

const MISALIGNMENT = [
  { dimension: "Orizzonte temporale", consultant: "Trimestre/Anno", client: "Generazionale (20\u201330 anni)" },
  { dimension: "Prodotti", consultant: "Logica retrocessioni", client: "Soluzioni pi\u00F9 adatte" },
  { dimension: "Complessit\u00E0", consultant: "Evitarla", client: "Affrontarla" },
  { dimension: "Eredi", consultant: "Non prioritario", client: "Critico (subito)" },
];

export default function ModelloPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Modello di Business"
        subtitle={"Pi\u00F9 consulenti non significa pi\u00F9 ordine. Minerva nasce per eliminare frammentazione e disallineamento con regole e regia unica."}
        primaryCTA={{ label: "Il Codice Minerva", href: "/ecosistema/codice-minerva" }}
        secondaryCTA={{ label: "VERITAS", href: "/ecosistema/veritas" }}
      />

      <SectionBlock id="key-numbers" eyebrow="Dati" title="I numeri che contano">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {KPIS.map((kpi, i) => (
            <DataBadge key={kpi.label} value={kpi.value} label={kpi.label} note={kpi.note} index={i} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="generational-transition" title={"Passaggio generazionale: la fragilit\u00E0 strutturale"}>
        <ContentParagraph>
          {"Il 70% delle imprese familiari non supera la transizione dalla prima alla seconda generazione; solo il 13% arriva alla terza. L\u201981% degli eredi dichiara che cambier\u00E0 consulente entro 1\u20132 anni dall\u2019eredit\u00E0. Il tema non \u00E8 \"se vendere\", ma progettare liquidity events e governance allineati a famiglia, azienda e capitale."}
        </ContentParagraph>
      </SectionBlock>

      <SectionBlock id="misalignment" title="Il disallineamento di interessi">
        <div className="max-w-4xl mx-auto">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-minerva-gold/20">
            <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/60 font-sans">Dimensione</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans text-center">Consulente tradizionale</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/60 font-sans text-center">Cliente / Famiglia</span>
          </div>
          {MISALIGNMENT.map((row, i) => (
            <motion.div key={row.dimension}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-white/5">
              <span className="font-titles text-sm text-white/60">{row.dimension}</span>
              <span className="text-white/30 text-sm font-sans text-center">{row.consultant}</span>
              <span className="text-minerva-gold/60 text-sm font-sans text-center">{row.client}</span>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="minerva-answer" title="La risposta Minerva">
        <ContentParagraph>
          {"Indipendenza assoluta (fee-only), skin in the game, visione olistica e orizzonte generazionale. Minerva \u00E8 progettata per coordinare professionisti e scelte in un quadro unico, con regole vincolanti."}
        </ContentParagraph>
      </SectionBlock>
    </main>
  );
}
