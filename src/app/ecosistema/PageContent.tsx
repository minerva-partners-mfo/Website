"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { InfoCard, BulletList, ContentParagraph } from "@/components/ui/Cards";

const LEVELS = [
  { title: "Equity Partners", sub: "Core Leadership", text: "Definiscono la visione, siedono nell\u2019IC, investono capitale proprio (skin in the game).", bullets: ["Decisioni finali", "Controllo rischio/etica", "Impegno strutturale"] },
  { title: "Partners", sub: "Verticali Specialistiche", text: "8 specialisti verticali selezionati, con prelazione clienti e Codice vincolante.", bullets: ["Verticali specialistiche", "Contributo attivo", "Standard condivisi"] },
  { title: "Friends", sub: "Eccellenze Attivabili", text: "Professionisti esterni di eccellenza attivabili su bisogno, senza prelazione.", bullets: ["Competenze puntuali", "Circle e Club Deal", "Codice sottoscritto"] },
  { title: "Advisors", sub: "Origination", text: "Origination e connessioni. Nessuna execution.", bullets: ["Segnalazione operazioni", "Introduzioni", "Ruolo circoscritto"] },
];

export default function EcosistemaPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Ecosistema"
        subtitle={"Minerva Partners \u00E8 un ecosistema multilivello progettato per dare regia alla complessit\u00E0: indipendenza totale, standard vincolanti, visione generazionale."}
        primaryCTA={{ label: "Approfondisci il Modello", href: "/ecosistema/modello" }}
        secondaryCTA={{ label: "Leggi il Codice Minerva", href: "/ecosistema/codice-minerva" }}
      />

      <SectionBlock id="why-exist" title={"Perch\u00E9 esistiamo"}>
        <ContentParagraph>
          {"L\u2019imprenditore \u00E8 circondato da 5\u20137 professionisti competenti che raramente dialogano tra loro. La conseguenza \u00E8 frammentazione, decisioni incoerenti e immobilit\u00E0. Minerva nasce per essere l\u2019integratore che guarda il quadro completo."}
        </ContentParagraph>
      </SectionBlock>

      <SectionBlock id="levels" title={"I livelli dell\u2019Ecosistema"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEVELS.map((level, i) => (
            <InfoCard key={level.title} title={level.title} sub={level.sub} text={level.text} bullets={level.bullets} index={i} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock id="governance-ic" title="Governance e Investment Committee">
        <ContentParagraph>
          {"Ogni decisione rilevante viene validata da un Investment Committee con composizione definita. Le decisioni sono verbalizzate e archiviate secondo standard di controllo."}
        </ContentParagraph>
      </SectionBlock>

      {/* CTAs */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/ecosistema/veritas">
            <span className="inline-block border border-minerva-gold px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-minerva-gold hover:bg-minerva-gold hover:text-minerva-blue transition-all duration-500 font-sans">
              Scopri VERITAS
            </span>
          </Link>
          <Link href="/network/board">
            <span className="inline-block border border-white/15 px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-white/50 hover:border-minerva-gold/40 hover:text-minerva-gold transition-all duration-500 font-sans">
              Vai al Marketplace
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
