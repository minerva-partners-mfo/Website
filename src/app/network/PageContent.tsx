"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionBlock from "@/components/ui/SectionBlock";

const PROGRAMS = [
  { title: "Minerva Circle", text: "8\u201310 eventi annui. Chatham House Rule. No selling.", href: "/network/circle" },
  { title: "Minerva Point Zero", text: "Club per merito, 10\u201315 membri, invito.", href: "/network/point-zero" },
  { title: "Next Gen & Gen Exit", text: "Percorsi intergenerazionali e transizione.", href: "/network/nextgen-genexit" },
  { title: "Minerva Board", text: "Private Investment Marketplace riservato.", href: "/network/board" },
];

export default function NetworkPage() {
  return (
    <main className="bg-minerva-blue text-white">
      <PageHero
        h1="Network"
        subtitle="Relazioni qualificate, programmi strutturati, riservatezza e valore condiviso."
        primaryCTA={{ label: "Minerva Circle", href: "/network/circle" }}
        secondaryCTA={{ label: "Minerva Board", href: "/network/board" }}
      />

      <SectionBlock id="programs" title="Quattro programmi">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROGRAMS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}>
              <Link href={p.href} className="block group">
                <div className="border border-white/5 hover:border-minerva-gold/20 p-8 h-full transition-all duration-500">
                  <h3 className="font-titles text-xl mb-3 group-hover:text-minerva-gold transition-colors">{p.title}</h3>
                  <p className="text-white/40 text-sm font-sans leading-relaxed">{p.text}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
