"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

/* ═══ STATIC DATA ═══ */

const VIDEOS = [
  { src: "/videos/video-avvocato.mp4", label: "Avvocato" },
  { src: "/videos/video-commercialista.mp4", label: "Commercialista" },
  { src: "/videos/video-banker.mp4", label: "Banker" },
  { src: "/videos/video-consulente.mp4", label: "Consulente" },
  { src: "/videos/video-immobiliarista.mp4", label: "Immobiliarista" },
  { src: "/videos/video-energetico.mp4", label: "Energy & ESG" },
];

const SITE_CHAPTERS = [
  { title: "Ecosistema", text: "Il modello, la governance e il Codice che rendono Minerva un sistema.", href: "/ecosistema" },
  { title: "Servizi", text: "4 servizi core eseguiti direttamente + verticali partner + friends.", href: "/servizi" },
  { title: "Network", text: "Circle, Point Zero, Next Gen & Gen Exit, Board.", href: "/network" },
  { title: "Chi Siamo", text: "Visione, persone, complementarit\u00E0 e indirizzo.", href: "/chi-siamo" },
];

const DATA_BADGES = [
  { label: "Ricchezza famiglie italiane", value: "\u20AC11.286 mld", note: "Banca d\u2019Italia" },
  { label: "Imprese familiari che non superano 1\u00B0 passaggio", value: "70%", note: "Osservatorio AUB" },
  { label: "Eredi che cambiano consulente", value: "81%", note: "entro 1\u20132 anni" },
];

const THREE_SPHERES = [
  { title: "Famiglia", bullets: ["Governance e regole del dialogo", "Allineamento tra generazioni", "Continuit\u00E0 dei valori"] },
  { title: "Azienda", bullets: ["Capitale e crescita", "Rischi industriali e finanziari", "Passaggio generazionale operativo"] },
  { title: "Immobili & Capitale", bullets: ["Concentrazione e liquidit\u00E0", "Debito/equity e impatto fiscale", "Progettazione di liquidity events nel tempo"] },
];

const PROGRAMS = [
  { title: "Minerva Circle", text: "8\u201310 eventi annui, regola Chatham House, no selling.", href: "/network/circle" },
  { title: "Next Gen & Gen Exit", text: "Programmi intergenerazionali strutturati.", href: "/network/nextgen-genexit" },
  { title: "Minerva Board", text: "Private Investment Marketplace riservato.", href: "/network/board" },
];

const VERITAS_LETTERS = [
  { letter: "V", word: "Vision" },
  { letter: "E", word: "Excellence" },
  { letter: "R", word: "Resilience" },
  { letter: "I", word: "Integrity" },
  { letter: "T", word: "Trust" },
  { letter: "A", word: "Alignment" },
  { letter: "S", word: "Stewardship" },
];

const EPOCHE = [
  { era: "Anni \u201960", img: "/images/franchi-60.jpg", text: "Officina Franchi. Un padre e un figlio in tuta blu. Il sogno nasce tra le mani, tra i torni e il rumore dei motori." },
  { era: "Anni \u201980-90", img: "/images/franchi-80.jpg", text: "Il figlio ora porta la giacca. L\u2019officina \u00E8 diventata un\u2019azienda vera. Margini alti, reinvestimento costante, crescita." },
  { era: "Anni 2010", img: "/images/franchi-2010.jpg", text: "Franchi S.p.A. Il patriarca ha i capelli bianchi. \u00C8 solo alla scrivania. L\u2019azienda ce l\u2019ha fatta \u2014 ma chi la guider\u00E0 domani?" },
];

const RISULTATI = [
  { img: "/images/risultato-figlio.jpg", caption: "Il figlio insegue i suoi sogni a New York" },
  { img: "/images/risultato-nonni.jpg", caption: "I nonni si godono la famiglia sul lago" },
  { img: "/images/risultato-azienda.jpg", caption: "L\u2019azienda in mani sicure, pronta per il futuro" },
  { img: "/images/risultato-figlia.jpg", caption: "La figlia realizza la sua missione nel mondo" },
];

/* ═══ COMPONENT ═══ */

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const interval = setInterval(() => {
            setActiveIndex(current);
            current++;
            if (current >= VIDEOS.length) {
              clearInterval(interval);
              setTimeout(() => setActiveIndex(null), 3000);
            }
          }, 5000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-minerva-blue text-white overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <video
          src="/videos/video-hero.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-minerva-blue/70" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-minerva-gold/20 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold block mb-6 font-sans"
          >
            Minerva Partners
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-titles text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8"
          >
            Excellence through Wisdom
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white/50 text-lg md:text-xl font-sans leading-relaxed max-w-3xl mx-auto mb-12"
          >
            {"Un ecosistema indipendente che coordina patrimonio, impresa, immobili e generazioni con metodo."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Link href="/ecosistema">
              <span className="inline-block border border-minerva-gold px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-minerva-gold hover:bg-minerva-gold hover:text-minerva-blue transition-all duration-500 font-sans cursor-pointer">
                {"Entra nell\u2019Ecosistema"}
              </span>
            </Link>
            <Link href="/network/board">
              <span className="inline-block border border-white/15 px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-white/50 hover:border-minerva-gold/40 hover:text-minerva-gold transition-all duration-500 font-sans cursor-pointer">
                Accedi al Marketplace
              </span>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-white/20 text-xs font-sans tracking-wide"
          >
            Accesso riservato. Nessuna retrocessione. Compenso dal cliente.
          </motion.p>
        </div>
      </section>

      {/* ═══ SITE CHAPTERS ═══ */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold block text-center mb-6 font-sans">
            I 4 capitoli del sito
          </motion.span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CHAPTERS.map((card, i) => (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}>
                <Link href={card.href} className="block group">
                  <div className="border border-white/5 hover:border-minerva-gold/20 p-8 h-full transition-all duration-500">
                    <h3 className="font-titles text-xl mb-3 group-hover:text-minerva-gold transition-colors">{card.title}</h3>
                    <p className="text-white/40 text-sm font-sans leading-relaxed">{card.text}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENTREPRENEURIAL PARADOX (Timeline) ═══ */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-titles text-3xl md:text-5xl text-center tracking-tighter mb-6">
            Il Paradosso Imprenditoriale
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-white/40 text-base md:text-lg font-sans text-center max-w-3xl mx-auto leading-relaxed mb-16">
            {"Negli anni \u201960\u2013\u201980 l\u2019imprenditore italiano cresceva con margini superiori al 10%, filiere decisionali corte e un solo consulente di fiducia. Oggi i margini medi scendono sotto il 5%, i consulenti diventano 5\u20137, e la gestione si frammenta in silos: nessuno coordina la visione complessiva."}
          </motion.p>

          {/* Timeline 3 epoche */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {EPOCHE.map((item, i) => (
              <motion.div key={item.era}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center">
                <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                  <img src={item.img} alt={item.era} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue via-minerva-blue/40 to-transparent" />
                  <span className="absolute bottom-4 left-0 right-0 font-titles text-2xl text-minerva-gold tracking-wider">{item.era}</span>
                </div>
                <p className="text-white/40 text-sm font-sans leading-relaxed px-4">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block relative h-px w-full mb-16">
            <div className="absolute inset-0 border-t border-dashed border-minerva-gold/20" />
          </div>

          {/* Data Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {DATA_BADGES.map((badge, i) => (
              <motion.div key={badge.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center py-6">
                <span className="font-titles text-4xl md:text-5xl text-minerva-gold block">{badge.value}</span>
                <p className="text-white/40 text-xs font-sans mt-2 leading-relaxed">{badge.label}</p>
                <span className="text-white/20 text-[10px] font-sans mt-1 block">{badge.note}</span>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-white/50 text-xl md:text-2xl font-titles text-center max-w-4xl mx-auto leading-relaxed tracking-tight">
            {"Il problema non \u00E8 la mancanza di consulenti. \u00C8 la mancanza di regia."}
          </motion.p>
        </div>
      </section>

      {/* ═══ THREE SPHERES ═══ */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-titles text-3xl md:text-5xl text-center tracking-tighter mb-6">
            {"E domani? Le tre sfere che decidono tutto"}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-white/40 text-base font-sans text-center max-w-3xl mx-auto leading-relaxed mb-16">
            {"Ogni scelta impatta contemporaneamente famiglia, azienda e immobili/capitale. Se non sono allineati, il costo dell\u2019immobilit\u00E0 cresce in denaro, conflitti e valore perso."}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_SPHERES.map((sphere, i) => (
              <motion.div key={sphere.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-white/5 hover:border-minerva-gold/20 p-8 transition-all duration-500">
                <h3 className="font-titles text-xl mb-4 text-minerva-gold">{sphere.title}</h3>
                <ul className="space-y-3">
                  {sphere.bullets.map((b) => (
                    <li key={b} className="text-white/40 text-sm font-sans leading-relaxed flex items-start gap-2">
                      <span className="text-minerva-gold/40 mt-0.5 flex-shrink-0">{"\u25C7"}</span>{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HUB & SPOKE ═══ */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-titles text-3xl md:text-5xl tracking-tighter mb-8">
            Il modello Hub & Spoke
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-white/40 text-base md:text-lg font-sans leading-relaxed mb-12">
            {"Minerva non somma professionisti: li integra. L\u2019Hub interno esegue i servizi core e coordina partners e friends secondo un metodo unico, riducendo sprechi e incoerenze."}
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <img src="/images/operative.png" alt="Hub & Spoke Model" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue/80 via-transparent to-minerva-blue/40" />
          </motion.div>
        </div>
      </section>

      {/* ═══ PROFESSIONISTI ISOLATI (6 Video) ═══ */}
      <section ref={sectionRef} className="min-h-screen bg-minerva-dark py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-white/40 text-lg md:text-xl font-sans text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {"E la risposta pi\u00F9 semplice \u00E8 dotarsi di diversi specialisti che per\u00F2 vedono un pezzo del quadro\u2026"}
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none">
              <line x1="33%" y1="50%" x2="28%" y2="25%" stroke="rgba(197,160,89,0.15)" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="38%" y1="50%" x2="66%" y2="25%" stroke="rgba(197,160,89,0.15)" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="33%" y1="55%" x2="28%" y2="75%" stroke="rgba(197,160,89,0.15)" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="66%" y1="50%" x2="72%" y2="75%" stroke="rgba(197,160,89,0.15)" strokeWidth="1" strokeDasharray="6 4" />
            </svg>
            {VIDEOS.map((video, i) => (
              <motion.div key={video.src}
                animate={{
                  scale: activeIndex === i ? 1.12 : activeIndex !== null ? 0.92 : 1,
                  opacity: activeIndex === i ? 1 : activeIndex !== null ? 0.3 : 0.8,
                  zIndex: activeIndex === i ? 10 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative aspect-video overflow-hidden z-[1] ${activeIndex === i ? "ring-1 ring-minerva-gold/40" : "ring-1 ring-white/5"}`}>
                <video src={video.src} autoPlay loop muted playsInline
                  className={`w-full h-full object-cover transition-all duration-700 ${activeIndex !== null && activeIndex !== i ? "blur-[1px]" : ""}`} />
                <div className="absolute inset-0 bg-minerva-blue/30" />
                <span className="absolute bottom-3 left-4 text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans">{video.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAOS ═══ */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 relative">
        <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.5 }} className="relative max-w-2xl w-full mb-16">
          <img src="/images/caos.jpg" alt="Il caos della frammentazione" className="w-full h-auto rounded-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue via-transparent to-minerva-blue/60" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }} className="text-center max-w-3xl">
          <p className="text-white/50 text-xl md:text-2xl font-titles leading-relaxed tracking-tight">
            {"Troppi consulenti. Troppa complessit\u00E0. Nessuno che abbia la visione d\u2019insieme."}
          </p>
        </motion.div>
      </section>

      {/* ═══ MINERVA REVEAL ═══ */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-[#060a12]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 2 }} className="text-center max-w-4xl">
          <p className="text-white/60 text-xl md:text-2xl font-titles leading-relaxed tracking-tight">
            {"Ti serve qualcuno che non sostituisca i tuoi professionisti, ma che guardi il tuo patrimonio come lo vedi tu."}
          </p>
        </motion.div>
      </section>

      {/* ═══ LOGO VIDEO ═══ */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.5 }} className="flex items-center justify-center w-full">
          <div className="relative w-full max-w-3xl mx-auto">
            <video src="/videos/video-logo-minerva.mp4" autoPlay muted playsInline className="w-full h-auto" style={{ backgroundColor: "#0f1829" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 80px 40px #0f1829" }} />
          </div>
        </motion.div>
      </section>

      {/* ═══ RISULTATI FAMIGLIA ═══ */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative mb-16 overflow-hidden rounded-sm">
            <img src="/images/operative.png" alt="Il quadro completo" className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue/90 via-minerva-blue/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-[11px] tracking-[0.4em] uppercase text-minerva-gold font-sans">Il Quadro Completo</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RISULTATI.map((item, i) => (
              <motion.div key={item.caption} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8 }} className="text-center">
                <div className="relative aspect-square overflow-hidden mb-3">
                  <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-minerva-blue/70 to-transparent" />
                </div>
                <p className="text-white/30 text-xs font-sans leading-relaxed px-2">{item.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VERITAS TEASER ═══ */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-titles text-6xl md:text-8xl tracking-tighter mb-6">VERITAS</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-white/40 text-base font-sans max-w-2xl mx-auto leading-relaxed mb-12">
            {"Ogni lettera rappresenta un capitale che coltiviamo per la famiglia."}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {VERITAS_LETTERS.map((v, i) => (
              <motion.div key={v.letter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="w-20 py-6 border border-white/5 hover:border-minerva-gold/20 transition-all duration-500 text-center">
                <span className="font-titles text-2xl text-minerva-gold block">{v.letter}</span>
                <span className="text-white/40 text-[9px] font-sans block mt-1">{v.word}</span>
              </motion.div>
            ))}
          </div>
          <Link href="/ecosistema/veritas">
            <span className="inline-block text-[11px] tracking-[0.4em] uppercase text-minerva-gold/50 hover:text-minerva-gold transition-colors font-sans border-b border-minerva-gold/20 pb-1">
              Scopri VERITAS
            </span>
          </Link>
        </div>
      </section>

      {/* ═══ PROGRAMS ═══ */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold block text-center mb-6 font-sans">
            {"Programmi dell\u2019Ecosistema"}
          </motion.span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMS.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Link href={p.href} className="block group">
                  <div className="border border-white/5 hover:border-minerva-gold/20 p-8 h-full transition-all duration-500">
                    <h3 className="font-titles text-xl mb-3 group-hover:text-minerva-gold transition-colors">{p.title}</h3>
                    <p className="text-white/40 text-sm font-sans leading-relaxed">{p.text}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DISCLAIMER ═══ */}
      <section className="py-12 px-6 border-t border-white/5">
        <p className="text-white/15 text-[10px] font-sans text-center max-w-3xl mx-auto tracking-wide leading-relaxed">
          Materiale informativo. Non costituisce offerta, sollecitazione o raccomandazione.
        </p>
      </section>
    </main>
  );
}
