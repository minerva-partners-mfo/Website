"use client";

import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { ContentParagraph, BulletList } from "@/components/ui/Cards";

export default function ServiziPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Servizi"
        subtitle={"Un\u2019offerta su tre livelli: Core (execution diretta), Partner (verticali specialistiche), Friends (eccellenze attivabili). Un\u2019unica regia."}
        primaryCTA={{ label: "Servizi Core", href: "/servizi/minerva-hub" }}
        secondaryCTA={{ label: "Verticali Partner", href: "/servizi/partners" }}
      />

      <SectionBlock id="three-levels" title="Tre livelli, un metodo">
        <ContentParagraph>
          {"Il team Minerva chiarisce il quadro, definisce cosa fare e come fare, esegue ci\u00F2 che sa fare meglio e crea la soluzione con partner/friends."}
        </ContentParagraph>
      </SectionBlock>

      <SectionBlock id="what-changes" title="Cosa cambia rispetto al mercato">
        <div className="max-w-3xl mx-auto">
          <BulletList items={[
            "Riduzione della frammentazione: una regia unica.",
            "Indipendenza: non vendiamo prodotti.",
            "Accesso a competenze verticali selezionate.",
          ]} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <Link href="/servizi/minerva-hub">
            <span className="inline-block border border-minerva-gold px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-minerva-gold hover:bg-minerva-gold hover:text-minerva-blue transition-all duration-500 font-sans">Minerva Hub</span>
          </Link>
          <Link href="/servizi/partners">
            <span className="inline-block border border-white/15 px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-white/50 hover:border-minerva-gold/40 hover:text-minerva-gold transition-all duration-500 font-sans">Partners</span>
          </Link>
          <Link href="/servizi/friends">
            <span className="inline-block border border-white/15 px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-white/50 hover:border-minerva-gold/40 hover:text-minerva-gold transition-all duration-500 font-sans">Friends</span>
          </Link>
        </div>
      </SectionBlock>
    </main>
  );
}
