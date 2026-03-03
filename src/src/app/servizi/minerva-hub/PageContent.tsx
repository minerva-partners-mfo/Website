"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";

const SERVICES = [
  { id: "ma-investments", title: "M&A & Investments", text: "Operazioni buy-side e sell-side, aggregazioni e alleanze industriali, interventi sul capitale. Oltre 50 deal conclusi. Selezioniamo solo operazioni con senso strategico.", bullets: ["Approccio disciplinato", "Coerenza con obiettivi familiari", "Processo governato"] },
  { id: "real-estate", title: "Real Estate Advisory", text: "Operazioni immobiliari off-market di alta qualit\u00E0, anche complesse. Analisi mix ottimale rendimento/debito/equity e impatto fiscale.", bullets: ["Off-market", "Strutturazione", "Focus qualit\u00E0"] },
  { id: "strategy", title: "Strategy Consulting", text: "Analisi leve industriali e piani industriali pre-fundraising e pre-M&A. Non slide da dimenticare: piani che si eseguono, con responsabilit\u00E0 operativa.", bullets: ["Leve ricavi/costi/margini", "Processi e operativit\u00E0", "Allineamento obiettivi"] },
  { id: "wealth", title: "Wealth Management", text: "Assessment patrimoniale completo, architettura aperta, selezione gestori e monitoraggio continuo con reporting consolidato. Modello fee-based con retrocessioni girate al cliente.", bullets: ["Liquidi/illiquidi", "Trasparenza costi", "Reporting"] },
];

export default function MinervaHubPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Minerva Hub"
        subtitle={"Quattro servizi core eseguiti direttamente: responsabilit\u00E0 totale, disciplina di processo, coordinamento dell\u2019ecosistema."}
        primaryCTA={{ label: "Parla con il Team", href: "/chi-siamo" }}
        secondaryCTA={{ label: "Accedi al Marketplace", href: "/network/board" }}
      />

      {SERVICES.map((service, i) => (
        <SectionBlock key={service.id} id={service.id} title={service.title}>
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-base md:text-lg font-sans leading-relaxed text-center mb-8"
            >
              {service.text}
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              {service.bullets.map((b, j) => (
                <motion.span key={b}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.1 }}
                  className="border border-minerva-gold/15 px-5 py-2 text-xs font-sans text-minerva-gold/60 hover:border-minerva-gold/30 transition-all duration-500"
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </div>
        </SectionBlock>
      ))}
    </main>
  );
}
