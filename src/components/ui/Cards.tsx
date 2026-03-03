"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── InfoCard ── */
interface InfoCardProps {
  title: string;
  text: string;
  href?: string;
  sub?: string;
  bullets?: string[];
  index?: number;
  className?: string;
  goldBorder?: boolean;
}

export function InfoCard({
  title,
  text,
  href,
  sub,
  bullets,
  index = 0,
  className = "",
  goldBorder = false,
}: InfoCardProps) {
  const inner = (
    <div
      className={`border ${goldBorder ? "border-minerva-gold/30 bg-gradient-to-b from-minerva-gold/8 to-transparent" : "border-white/5 hover:border-minerva-gold/20"} p-8 h-full transition-all duration-500 group ${className}`}
    >
      {sub && (
        <span className="text-[10px] tracking-[0.3em] uppercase text-minerva-gold/50 font-sans block mb-2">
          {sub}
        </span>
      )}
      <h3 className="font-titles text-lg md:text-xl mb-3 group-hover:text-minerva-gold transition-colors">
        {title}
      </h3>
      <p className="text-white/40 text-sm font-sans leading-relaxed">{text}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="text-white/30 text-xs font-sans leading-relaxed flex items-start gap-2">
              <span className="text-minerva-gold/40 mt-1 flex-shrink-0">{"\u25C7"}</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.8 }}
    >
      {href ? (
        <Link href={href} className="block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.div>
  );
}

/* ── DataBadge ── */
interface DataBadgeProps {
  value: string;
  label: string;
  note?: string;
  index?: number;
}

export function DataBadge({ value, label, note, index = 0 }: DataBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="py-6 text-center"
    >
      <span className="font-titles text-3xl md:text-5xl text-minerva-gold block">
        {value}
      </span>
      <p className="text-white/40 text-xs font-sans mt-2 leading-relaxed">{label}</p>
      {note && (
        <span className="text-white/20 text-[10px] font-sans mt-1 block">{note}</span>
      )}
    </motion.div>
  );
}

/* ── BulletList ── */
interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`space-y-3 ${className}`}
    >
      {items.map((item, i) => (
        <li key={i} className="text-white/40 text-sm font-sans leading-relaxed flex items-start gap-3">
          <span className="text-minerva-gold/50 mt-0.5 flex-shrink-0">{"\u25C7"}</span>
          {item}
        </li>
      ))}
    </motion.ul>
  );
}

/* ── ContentParagraph ── */
interface ContentParagraphProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

export function ContentParagraph({ children, className = "", center = true }: ContentParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`text-white/40 text-base md:text-lg font-sans leading-relaxed max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {children}
    </motion.p>
  );
}

/* ── GoldHighlight ── */
export function Gold({ children }: { children: React.ReactNode }) {
  return <span className="text-minerva-gold">{children}</span>;
}

/* ── Disclaimer ── */
export function Disclaimer({ text }: { text: string }) {
  return (
    <section className="py-12 px-6 border-t border-white/5">
      <p className="text-white/15 text-[10px] font-sans text-center max-w-3xl mx-auto tracking-wide leading-relaxed">
        {text}
      </p>
    </section>
  );
}
