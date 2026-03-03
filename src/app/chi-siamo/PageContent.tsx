"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { ContentParagraph, BulletList } from "@/components/ui/Cards";

const PROFILES = [
  {
    name: "Enrico Vigan\u00F2",
    role: "Equity Partner",
    bio: "Dottore Commercialista, ruoli di governance (C.d.A., CFO holding e S.p.A., collegi sindacali). Formazione: Bergamo (EADAP), Bocconi, Rotterdam School of Management.",
  },
  {
    name: "Marco Vittoni",
    role: "Equity Partner",
    bio: "Esperto di M&A e corporate finance, circa 50 deal conclusi; supporta imprenditori, famiglie e investitori nelle decisioni industriali e patrimoniali. Formazione: Bocconi, Parma, eMBA Lisbona.",
  },
];

export default function ChiSiamoPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Chi Siamo"
        subtitle={"Non un\u2019azienda che fa soldi. Un\u2019istituzione che costruisce continuit\u00E0 e impatto positivo sulle famiglie che serve."}
        primaryCTA={{ label: "Contattaci", href: "/chi-siamo#contacts" }}
        secondaryCTA={{ label: "Il nostro Codice", href: "/ecosistema/codice-minerva" }}
      />

      {/* AT A GLANCE */}
      <SectionBlock id="at-a-glance" title="At a glance">
        <ContentParagraph>
          {"Mercati volatili, regole in evoluzione, tecnologie trasformative e passaggi generazionali imminenti aumentano la complessit\u00E0. Molte famiglie rispondono moltiplicando banche e consulenti, ottenendo frammentazione e immobilit\u00E0. Minerva nasce per dare una visione complessiva e coordinare l\u2019ecosistema di competenze, intervenendo direttamente dove eccelle, con standard di riservatezza, trasparenza ed eccellenza."}
        </ContentParagraph>
      </SectionBlock>

      {/* POSITIONING */}
      <SectionBlock id="positioning" title={"Cosa Minerva non \u00E8 / Cosa Minerva \u00E8"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 p-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans block mb-4">
              {"Cosa Minerva non \u00E8"}
            </span>
            <ul className="space-y-3">
              {["Non \u00E8 una banca", "Non \u00E8 consulenza a spot", "Non \u00E8 family office captive", "Non \u00E8 holding di consulenti"].map((item) => (
                <li key={item} className="text-white/40 text-sm font-sans leading-relaxed flex items-start gap-2">
                  <span className="text-white/20 mt-0.5 flex-shrink-0">{"\u2715"}</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-minerva-gold/20 p-8 bg-gradient-to-b from-minerva-gold/5 to-transparent">
            <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/60 font-sans block mb-4">
              {"Cosa Minerva \u00E8"}
            </span>
            <ul className="space-y-3">
              {["Un sistema", "Un integratore", "Un moltiplicatore", "Un framework generazionale"].map((item) => (
                <li key={item} className="text-white/50 text-sm font-sans leading-relaxed flex items-start gap-2">
                  <span className="text-minerva-gold/60 mt-0.5 flex-shrink-0">{"\u25C7"}</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionBlock>

      {/* MANAGEMENT */}
      <SectionBlock id="management" title="Management">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {PROFILES.map((profile, i) => (
            <motion.div key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-white/5 p-8 hover:border-minerva-gold/15 transition-all duration-500">
              <h3 className="font-titles text-xl mb-1">{profile.name}</h3>
              <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/50 font-sans block mb-4">{profile.role}</span>
              <p className="text-white/40 text-sm font-sans leading-relaxed">{profile.bio}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-minerva-gold/15 p-6 max-w-2xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/50 font-sans block mb-2">
            {"Complementarit\u00E0"}
          </span>
          <p className="text-white/40 text-sm font-sans leading-relaxed">
            {"Visione fiscale e governance + visione finanziaria e strategica. Entrambi figli di imprenditori."}
          </p>
        </motion.div>
      </SectionBlock>

      {/* GROWTH PHILOSOPHY */}
      <SectionBlock id="growth-philosophy" title="Filosofia di crescita">
        <div className="max-w-3xl mx-auto">
          <BulletList items={[
            "Qualit\u00E0 prima di quantit\u00E0",
            "Profondit\u00E0 prima di ampiezza",
            "Sostenibilit\u00E0 prima di velocit\u00E0",
            "Reputazione prima di ricavi",
          ]} />
        </div>
      </SectionBlock>

      {/* CONTACTS TEASER */}
      <section id="contacts" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-titles text-3xl md:text-5xl tracking-tighter mb-6">
            Contatti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-base font-sans leading-relaxed mb-12">
            {"Per una conversazione riservata e un primo inquadramento, contattaci."}
          </motion.p>

          {/* Minimal contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="Nome e Cognome"
              className="w-full bg-transparent border border-white/10 px-5 py-3 text-sm font-sans text-white/60 placeholder:text-white/20 focus:border-minerva-gold/40 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white/10 px-5 py-3 text-sm font-sans text-white/60 placeholder:text-white/20 focus:border-minerva-gold/40 focus:outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="Telefono"
              className="w-full bg-transparent border border-white/10 px-5 py-3 text-sm font-sans text-white/60 placeholder:text-white/20 focus:border-minerva-gold/40 focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Messaggio"
              rows={4}
              className="w-full bg-transparent border border-white/10 px-5 py-3 text-sm font-sans text-white/60 placeholder:text-white/20 focus:border-minerva-gold/40 focus:outline-none transition-colors resize-none"
            />
            <button className="w-full border border-minerva-gold px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-minerva-gold hover:bg-minerva-gold hover:text-minerva-blue transition-all duration-500 font-sans">
              Invia
            </button>
          </motion.div>

          <p className="text-white/15 text-[10px] font-sans mt-8 tracking-wide leading-relaxed">
            I dati saranno trattati nel rispetto della normativa vigente. Nessuna comunicazione commerciale non richiesta.
          </p>
        </div>
      </section>
    </main>
  );
}
