// src/components/BlindCard.tsx
"use client";
import { useState } from "react";

export const BlindCard = ({ title, sector }: { title: string, sector: string }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="relative border border-white/10 p-8 bg-minerva-blue/20 overflow-hidden group">
      <div className={!isUnlocked ? "blur-xl select-none" : "blur-0 transition-all duration-1000"}>
        <h4 className="font-titles text-xl text-minerva-gold mb-2">{title}</h4>
        <p className="text-sm uppercase tracking-widest">{sector}</p>
        {/* Dati sensibili qui */}
      </div>
      
      {!isUnlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-minerva-dark/40">
          <button 
            onClick={() => setIsUnlocked(true)}
            className="px-6 py-2 border border-minerva-gold text-minerva-gold font-titles text-xs tracking-widest uppercase hover:bg-minerva-gold hover:text-minerva-dark transition-all"
          >
            Richiedi Accesso NDA
          </button>
        </div>
      )}
    </div>
  );
};