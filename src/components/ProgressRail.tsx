// src/components/ProgressRail.tsx
"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const ProgressRail = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-white/10 z-50">
      <motion.div 
        className="w-full bg-minerva-gold origin-top"
        style={{ scaleY }}
      />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-titles tracking-[0.2em] text-minerva-gold uppercase rotate-90">
        Nexus
      </div>
    </div>
  );
};