"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ProgressRailProps {
  totalSections: number;
  activeSection: number;
}

export default function ProgressRail({ totalSections, activeSection }: ProgressRailProps) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-6">
      <div className="relative w-[1px] h-48 bg-white/10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-minerva-gold origin-top"
          style={{ scaleY }}
        />
      </div>
      
      <div className="flex flex-col gap-4">
        {Array.from({ length: totalSections }).map((_, idx) => (
          <div
            key={idx}
            className={`w-1 h-1 rounded-full transition-all duration-500 ${
              activeSection === idx ? "bg-minerva-gold scale-150 shadow-[0_0_10px_rgba(197,160,89,0.5)]" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
