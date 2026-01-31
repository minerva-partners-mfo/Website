"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ProgressRail from "@/components/ProgressRail";
import Credibility from "@/components/Credibility";
import Navigation from "@/components/Navigation";
import SolarSystem from "@/components/SolarSystem";

const SCENES = [
  {
    title: "Eccellenza Senza Compromessi.",
    text: "Benvenuti in Minerva Partners.",
    subtext: "SCORRI PER SCOPRIRE IL NOSTRO METODO."
  },
  {
    title: "Chiarire, studiare, agire.",
    text: "Trasformiamo il patrimonio in una visione di lungo periodo, valorizzando ciò che è stato costruito e progettando ciò che verrà.",
    subtext: "Il Caos Prima dell’Ordine."
  },
  {
    title: "L’Ecosistema Minerva",
    text: "Non abbiamo solo dei servizi à-la-carte, ma possiamo attingere da un patrimonio di eccellenze che sono in grado di allineare la visione della famiglia con gli obiettivi aziendali. Garantendo il meglio, sempre.",
      subtext: "Hub, Partners & Friends in azione."
  },
  {
    title: "Ci mettiamo in gioco al tuo fianco.",
    text: "Investiamo con te, non su di te. Il Fondo Minerva: l'unica garanzia che conta è metterci i propri soldi.",
    subtext: "QUESTO PERCHÉ CI CREDIAMO DAVVERO."
  },
  {
    title: "Entra nel Network",
    text: "LA RICCHEZZA SI VALORIZZA ANCHE DALLA CONOSCENZA. ABBATTERE BARRIERE PER MIGLIORARE.",
    subtext: "MINERVA CIRCLE ACCESS",
    isCTA: true
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [introStep, setIntroStep] = useState(0); // 0: Video, 1: Manifesto, 2: Content

  useEffect(() => {
    // Timeout di sicurezza ridotto per non far aspettare l'utente se il video ha problemi
    if (introStep === 0) {
      const timer = setTimeout(() => {
        setIntroStep(1);
      }, 8000); 
      return () => clearTimeout(timer);
    }
    
    if (introStep === 2) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute("data-index") || "0");
              setActiveSection(index);
            }
          });
        },
        { threshold: 0.5 }
      );

      document.querySelectorAll(".snap-section").forEach((section) => {
        observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [introStep]);

  return (
    <main className="relative bg-minerva-blue text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {introStep === 0 && (
          <motion.div
            key="video-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(40px)", scale: 1.1 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
          >
              <video
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => setIntroStep(1)}
                onError={() => setIntroStep(1)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://player.vimeo.com/progressive_redirect/playback/716172551/rendition/1080p/file.mp4?loc=external&signature=44865187747e8e50f58039c381c15f9b4c46f3a5a415a77f0a9071c3c3a647b7" type="video/mp4" />
                <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-gold-dust-particles-background-loop-21782-large.mp4" type="video/mp4" />
              </video>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={() => setIntroStep(1)}
              className="absolute bottom-12 right-12 z-20 group flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 px-10 py-4 rounded-full hover:bg-minerva-gold/20 transition-all duration-500"
            >
              <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-white group-hover:text-minerva-gold transition-colors">
                Entra nel Mondo Minerva
              </span>
              <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-minerva-gold transition-all duration-500" />
            </motion.button>
          </motion.div>
        )}

        {introStep === 1 && (
          <motion.div
            key="manifesto-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[1000] bg-minerva-blue flex flex-col items-center justify-center px-6 overflow-y-auto py-20"
          >
            <div className="max-w-3xl text-center space-y-12">
              <motion.span 
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 0.6, letterSpacing: "0.8em" }}
                transition={{ duration: 2 }}
                className="font-sans text-[12px] uppercase text-minerva-gold block"
              >
                Il Manifesto
              </motion.span>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="font-sans text-xl md:text-2xl leading-relaxed text-white/80 tracking-wide"
              >
                Il mondo cambia rapidamente... <br />
                Ma il costo dell&apos;immobilità è altissimo.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="font-sans text-base md:text-lg text-white/50 leading-relaxed"
              >
                Minerva Partners nasce per colmare questo vuoto. <br />
                Diamo ordine alla complessità, riduciamo sprechi e abilitiamo valore.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="pt-12"
              >
                <button 
                  onClick={() => setIntroStep(2)}
                  className="group relative border border-minerva-gold px-16 py-6 transition-all duration-700"
                >
                  <span className="relative z-10 font-sans text-[11px] tracking-[0.6em] uppercase text-minerva-gold group-hover:text-minerva-blue transition-colors">
                    Esplora l&apos;Ecosistema
                  </span>
                  <div className="absolute inset-0 bg-minerva-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {introStep === 2 && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="snap-container relative"
          >
            
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-gold-dust-particles-background-loop-21782-large.mp4" type="video/mp4" />
                </video>
              <div className="absolute inset-0 bg-minerva-blue/60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f1829_100%)]" />
            </div>

            <ProgressRail totalSections={SCENES.length + 2} activeSection={activeSection} />

            {SCENES.map((scene, idx) => (
              <section key={idx} data-index={idx} className="snap-section flex flex-col items-center justify-center text-center px-6">
                <div className="max-w-5xl">
                  {scene.isCTA ? (
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="relative">
                      <motion.span className="font-sans text-[19px] uppercase text-minerva-gold mb-8 block">{scene.subtext}</motion.span>
                      <h2 className="text-5xl md:text-8xl lg:text-9xl mb-16 font-titles tracking-tighter leading-none text-white">{scene.title}</h2>
                      <p className="font-sans text-lg md:text-xl text-white/40 mb-16 max-w-2xl mx-auto tracking-widest uppercase">{scene.text}</p>
                      <button className="relative group overflow-hidden border border-minerva-gold px-24 py-8 transition-all duration-700">
                        <span className="relative z-10 font-sans text-[10px] tracking-[0.8em] uppercase text-minerva-gold group-hover:text-minerva-blue transition-colors duration-700">Contattaci Ora</span>
                        <div className="absolute inset-0 bg-minerva-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 0.6, y: 0 }} transition={{ duration: 1.5 }} className="font-sans text-[19px] uppercase text-minerva-gold mb-10 block">{scene.subtext}</motion.span>
                      <motion.h1 initial={{ opacity: 0, filter: "blur(30px)", y: 50 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 2.2 }} className="text-4xl md:text-7xl lg:text-9xl mb-14 leading-[1] font-titles text-white tracking-tight">{scene.title}</motion.h1>
                      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 0.8, y: 0 }} transition={{ duration: 1.2, delay: 0.8 }} className="font-sans text-base md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wider text-white/60 mb-12">{scene.text}</motion.p>
                      
                      {idx === 2 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="w-full max-w-screen-xl mx-auto overflow-visible"
                        >
                          <SolarSystem />
                        </motion.div>
                      )}
                    </>
                  )}
                </div>
              </section>
            ))}

            <div data-index={SCENES.length}>
              <Credibility />
            </div>

            <footer data-index={SCENES.length + 1} className="snap-section flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden bg-minerva-dark">
              <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
                <Link href="/" className="mb-24">
                  <motion.img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6af9b26c-8ed3-40f3-9e42-9cb554431e81/Gemini_Generated_Image_qddqdzqddqdzqddq-1769454284267.png?width=8000&height=8000&resize=contain"
                    alt="Minerva Partners Logo"
                    className="h-12 w-auto object-contain"
                  />
                </Link>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full text-center md:text-left mb-32">
                  <div className="flex flex-col gap-8">
                    <span className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold font-bold">Sede</span>
                    <p className="text-[12px] tracking-widest leading-relaxed text-white/50 uppercase">Via Roggia Vignola, 9<br />Treviglio (BG)</p>
                  </div>
                  <div className="flex flex-col gap-8 items-center">
                    <span className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold font-bold">Contatti</span>
                    <p className="text-[12px] tracking-widest leading-relaxed text-white/50 uppercase">info@minervapartners.it<br />+39 0363 49160</p>
                  </div>
                  <div className="flex flex-col gap-8 items-end">
                    <span className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold font-bold">Legal</span>
                    <div className="flex flex-col gap-3 items-end">
                      <Link href="#" className="text-[11px] tracking-widest text-white/40 hover:text-minerva-gold transition-colors uppercase">Privacy Policy</Link>
                      <Link href="#" className="text-[11px] tracking-widest text-white/40 hover:text-minerva-gold transition-colors uppercase">Cookie Policy</Link>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-white/5 mb-16" />
                <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-white/20">© 2026 Minerva Partners. Eccellenza Senza Compromessi.</p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
