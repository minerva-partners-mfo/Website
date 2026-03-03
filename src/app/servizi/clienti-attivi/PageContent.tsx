"use client";

import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { BulletList, ContentParagraph } from "@/components/ui/Cards";

export default function ClientiAttiviPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Clienti Attivi"
        subtitle={"In Minerva il cliente \u00E8 parte attiva: propone, contribuisce, partecipa in un ambiente riservato e ad alto contenuto."}
        primaryCTA={{ label: "Scopri il Network", href: "/network" }}
        secondaryCTA={{ label: "Vai al Marketplace", href: "/network/board" }}
      />

      <SectionBlock id="active-meaning" title="Cosa significa essere attivi">
        <div className="max-w-3xl mx-auto">
          <BulletList items={[
            "Partecipare a Circle e format strutturati.",
            "Accedere a opportunit\u00E0 validate dall\u2019IC.",
            "Confrontarsi tra pari: appartenenza e continuit\u00E0.",
          ]} />
        </div>
      </SectionBlock>

      <SectionBlock id="premium-experience" title={"Un\u2019esperienza premium, non \u201Cintrattenimento\u201D"}>
        <ContentParagraph>
          {"Deal Night e deep dive tematici sono progettati per creare qualit\u00E0 decisionale: contenuto vero, regole chiare, nessun selling e massima riservatezza."}
        </ContentParagraph>
      </SectionBlock>
    </main>
  );
}
