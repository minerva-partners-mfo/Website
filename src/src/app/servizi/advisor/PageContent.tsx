"use client";

import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";
import { BulletList, ContentParagraph } from "@/components/ui/Cards";

export default function AdvisorPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Advisor"
        subtitle={"Origination e connessioni con regole chiare: l\u2019execution \u00E8 gestita secondo Codice e governance."}
        primaryCTA={{ label: "Proponi un Deal", href: "/network/board" }}
      />

      <SectionBlock id="role" title={"Cosa fa l\u2019Advisor"}>
        <div className="max-w-3xl mx-auto">
          <BulletList items={["Segnala opportunit\u00E0", "Facilita introduzioni", "Contribuisce al deal flow"]} />
        </div>
      </SectionBlock>

      <SectionBlock id="boundaries" title="Cosa non fa">
        <div className="max-w-3xl mx-auto">
          <BulletList items={["Non gestisce l\u2019execution", "Non opera senza mandato", "Non bypassa regole di riservatezza"]} />
        </div>
      </SectionBlock>

      <SectionBlock id="remuneration" title="Regole di remunerazione">
        <ContentParagraph>
          {"La quota di origination \u00E8 regolata dal Codice di Remunerazione; l\u2019execution pesa sempre pi\u00F9 dell\u2019origination."}
        </ContentParagraph>
        <div className="text-center mt-8">
          <Link href="/ecosistema/codice-minerva">
            <span className="inline-block text-[11px] tracking-[0.4em] uppercase text-minerva-gold/50 hover:text-minerva-gold transition-colors font-sans border-b border-minerva-gold/20 pb-1">
              Leggi il Codice
            </span>
          </Link>
        </div>
      </SectionBlock>
    </main>
  );
}
