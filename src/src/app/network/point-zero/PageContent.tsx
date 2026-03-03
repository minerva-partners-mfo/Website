"use client";

import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { ContentParagraph, BulletList } from "@/components/ui/Cards";

export default function PointZeroPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Minerva Point Zero"
        subtitle="Un club esclusivo per merito: disciplina, riservatezza, contributo reale."
        primaryCTA={{ label: "Candidatura su invito", href: "/chi-siamo" }}
      />

      <SectionBlock id="principle" title="Non basta il patrimonio">
        <ContentParagraph>
          {"L\u2019accesso \u00E8 su invito e per merito: contano valori, contributo, presenza."}
        </ContentParagraph>
      </SectionBlock>

      <SectionBlock id="rules" title="Regole ferree">
        <div className="max-w-3xl mx-auto">
          <BulletList items={["Riservatezza assoluta", "Presenza obbligatoria", "Contributo attivo", "Onest\u00E0 e confronto reale"]} />
        </div>
      </SectionBlock>
    </main>
  );
}
