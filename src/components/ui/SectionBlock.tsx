"use client";

import { motion } from "framer-motion";

interface SectionBlockProps {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionBlock({
  eyebrow,
  title,
  children,
  className = "",
  id,
}: SectionBlockProps) {
  return (
    <section id={id} className={`py-24 md:py-32 px-6 border-t border-white/5 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-minerva-gold block text-center mb-6 font-sans"
          >
            {eyebrow}
          </motion.span>
        )}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-titles text-3xl md:text-5xl text-center tracking-tighter mb-12"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
