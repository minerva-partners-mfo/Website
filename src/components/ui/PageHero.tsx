"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroCTA {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  h1: string;
  subtitle: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  microcopy?: string;
  hasVideo?: boolean;
  videoSrc?: string;
}

export default function PageHero({
  eyebrow,
  h1,
  subtitle,
  primaryCTA,
  secondaryCTA,
  microcopy,
  hasVideo,
  videoSrc,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background video or gradient */}
      {hasVideo && videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-minerva-blue via-minerva-blue to-[#060a12]" />
      )}
      <div className="absolute inset-0 bg-minerva-blue/60" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-minerva-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-minerva-gold/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold block mb-6 font-sans"
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-titles text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8"
        >
          {h1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white/50 text-lg md:text-xl font-sans leading-relaxed max-w-3xl mx-auto mb-12"
        >
          {subtitle}
        </motion.p>

        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <span className="inline-block border border-minerva-gold px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-minerva-gold hover:bg-minerva-gold hover:text-minerva-blue transition-all duration-500 font-sans cursor-pointer">
                  {primaryCTA.label}
                </span>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <span className="inline-block border border-white/15 px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-white/50 hover:border-minerva-gold/40 hover:text-minerva-gold transition-all duration-500 font-sans cursor-pointer">
                  {secondaryCTA.label}
                </span>
              </Link>
            )}
          </motion.div>
        )}

        {microcopy && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-white/20 text-xs font-sans tracking-wide"
          >
            {microcopy}
          </motion.p>
        )}
      </div>
    </section>
  );
}
