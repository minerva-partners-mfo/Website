"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { BulletList, ContentParagraph } from "@/components/ui/Cards";

const ACCESS_STEPS = [
  { step: "01", text: "Vai alla Bacheca Deal" },
  { step: "02", text: "Seleziona l\u2019operazione" },
  { step: "03", text: "Clicca \u201CRichiedi Accesso\u201D" },
  { step: "04", text: "Valutazione del team" },
  { step: "05", text: "Notifica esito via email" },
];

export default function BoardPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Minerva Board"
        subtitle="Private Investment Marketplace riservato: accesso progressivo, documenti protetti, governance del processo."
        primaryCTA={{ label: "Accedi al Portale", href: "https://minervapartners.it" }}
        secondaryCTA={{ label: "Richiedi accesso", href: "/chi-siamo" }}
      />

      <SectionBlock id="dashboard" title="Cosa trovi nella Dashboard">
        <div className="max-w-3xl mx-auto">
          <BulletList items={["Deal attivi", "Richieste in attesa (Pending)", "Prossimi eventi", "Nuove opportunit\u00E0 caricate"]} />
        </div>
      </SectionBlock>

      <SectionBlock id="deal-board" title="Bacheca Operazioni">
        <ContentParagraph>
          {"La bacheca \u00E8 il cuore del portale: ogni operazione \u00E8 presentata in card con settore, tipologia, descrizione, EV range e area geografica. Il titolo resta in modalit\u00E0 blind fino ad approvazione."}
        </ContentParagraph>
      </SectionBlock>

      <SectionBlock id="access-request" title="Richiedere accesso a un deal">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
          {ACCESS_STEPS.map((s, i) => (
            <motion.div key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-6 border border-white/5 hover:border-minerva-gold/15 transition-all duration-500">
              <span className="font-titles text-2xl text-minerva-gold block mb-2">{s.step}</span>
              <p className="text-white/40 text-xs font-sans leading-relaxed px-3">{s.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          {["Pending", "Approvata", "Rifiutata"].map((state) => (
            <span key={state} className="border border-white/10 px-4 py-2 text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans">
              {state}
            </span>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="deal-detail" title="Dettaglio operazione (post-approvazione)">
        <div className="max-w-3xl mx-auto">
          <BulletList items={[
            "Titolo completo",
            "Descrizione e tesi di investimento",
            "EV, ticket minimo e struttura",
            "Documentazione scaricabile (teaser, info memo, modelli)",
            "Stato e timeline",
          ]} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 border border-minerva-gold/15 p-4 text-center">
            <p className="text-white/30 text-xs font-sans">
              Riservatezza: divieto di diffusione/copia/condivisione a terzi non autorizzati.
            </p>
          </motion.div>
        </div>
      </SectionBlock>

      <SectionBlock id="propose-deal" title="Proporre una nuova operazione">
        <ContentParagraph>
          {"Form dedicato per invio al team di valutazione con campi obbligatori e allegati (PDF/Word/Excel). La proposta resta visibile solo al team Minerva fino ad approvazione e pubblicazione."}
        </ContentParagraph>
      </SectionBlock>
    </main>
  );
}
