"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const OctagonNode = ({ label, href, radius, angle, rotationDuration, reverse = false, delay = 0 }: { 
  label: string; 
  href: string; 
  radius: number; 
  angle: number;
  rotationDuration: number;
  reverse?: boolean;
  delay?: number;
}) => {
  // Convert polar to cartesian for initial placement
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className="absolute pointer-events-auto z-30"
      style={{ 
        left: `calc(50% + ${x}px)`, 
        top: `calc(50% + ${y}px)`, 
        transform: "translate(-50%, -50%)" 
      }}
    >
      {/* Counter-rotation to keep the node upright */}
      <motion.div
        animate={{ rotate: reverse ? 360 : -360 }}
        transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col items-center"
      >
        <Link href={href} className="group flex flex-col items-center">
          <div className="relative">
            {/* Octagon Shape */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(197, 160, 89, 0.3)", 
                  "0 0 30px rgba(197, 160, 89, 0.6)", 
                  "0 0 10px rgba(197, 160, 89, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 bg-minerva-dark border border-minerva-gold/40 flex items-center justify-center group-hover:border-minerva-gold transition-colors duration-500"
              style={{ 
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-minerva-gold/20 via-transparent to-minerva-gold/10 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 border border-minerva-gold/20 flex items-center justify-center" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}>
                 <div className="w-2 h-2 bg-minerva-gold rounded-full group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
            
            {/* Outer Ring Glow */}
            <div className="absolute inset-[-10px] rounded-full border border-minerva-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_10s_linear_infinite]" />
          </div>

          <div className="mt-4 px-4 py-1.5 bg-minerva-dark/90 backdrop-blur-md border border-minerva-gold/20 rounded-sm group-hover:border-minerva-gold/50 transition-all duration-500 shadow-2xl">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white font-bold whitespace-nowrap">
              {label}
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const ConcentricRing = ({ radius, opacity = 0.1, delay = 0, duration = 60, reverse = false }: { 
  radius: number; 
  opacity?: number; 
  delay?: number;
  duration?: number;
  reverse?: boolean;
}) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: 1, 
      opacity,
      rotate: reverse ? -360 : 360
    }}
    transition={{ 
      scale: { duration: 2, delay, ease: "easeOut" },
      opacity: { duration: 2, delay, ease: "easeOut" },
      rotate: { duration, repeat: Infinity, ease: "linear" }
    }}
    className="absolute rounded-full border border-minerva-gold/30 pointer-events-none"
    style={{ 
      width: radius * 2, 
      height: radius * 2,
      boxShadow: "inset 0 0 50px rgba(197, 160, 89, 0.05)"
    }}
  >
     {/* Subtle dash effect on ring */}
     <div className="absolute inset-0 rounded-full border border-dashed border-white/5" />
  </motion.div>
);

const RotatingStarField = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 pointer-events-none"
    >
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
          className="absolute w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_8px_white]"
          style={{ 
            left: `${50 + (Math.random() - 0.5) * 120}%`, 
            top: `${50 + (Math.random() - 0.5) * 120}%` 
          }}
        />
      ))}
    </motion.div>
  );
};

export default function SolarSystem() {
  const hubRotation = 40;
  const partnersRotation = 60;
  const friendsRotation = 80;

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Star Field */}
      <RotatingStarField />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* The Rings */}
        <ConcentricRing radius={140} delay={0.2} opacity={0.15} duration={hubRotation} />
        <ConcentricRing radius={260} delay={0.4} opacity={0.1} duration={partnersRotation} reverse />
        <ConcentricRing radius={380} delay={0.6} opacity={0.05} duration={friendsRotation} />

        {/* Central Hub: Cliente */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-50 flex flex-col items-center"
        >
          <div className="relative group">
            <div className="absolute inset-[-60px] bg-minerva-gold/20 rounded-full blur-[80px] group-hover:bg-minerva-gold/30 transition-colors duration-1000" />
            
            <div className="w-40 h-40 rounded-full border border-minerva-gold/40 flex items-center justify-center bg-minerva-dark/80 backdrop-blur-3xl relative overflow-hidden shadow-[0_0_100px_rgba(197,160,89,0.2)]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#C5A059_0%,transparent_20%,#C5A059_40%,transparent_60%,#C5A059_80%,transparent_100%)] opacity-30 blur-[20px]"
              />
              
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-minerva-dark via-minerva-gold/30 to-white/10 flex items-center justify-center relative z-10">
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5">
                  <span className="text-white font-titles text-xs tracking-[0.5em] uppercase font-bold">Cliente</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nodes positioned on rotating containers */}
        
        {/* Orbit 1: Hub */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: hubRotation, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <OctagonNode 
            label="Minerva Hub" 
            href="/servizi/minerva-hub" 
            radius={140} 
            angle={-60} 
            rotationDuration={hubRotation}
            delay={0.8}
          />
          {/* Connection Line */}
          <div className="absolute w-[140px] h-[1px] bg-gradient-to-r from-minerva-gold/30 to-transparent left-1/2 top-1/2 origin-left -translate-y-1/2" style={{ transform: `rotate(${-60}deg)` }} />
        </motion.div>

        {/* Orbit 2: Partners */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: partnersRotation, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <OctagonNode 
            label="Partners" 
            href="/servizi/partners" 
            radius={260} 
            angle={30} 
            rotationDuration={partnersRotation}
            reverse
            delay={1.0}
          />
          {/* Connection Line */}
          <div className="absolute w-[260px] h-[1px] bg-gradient-to-r from-minerva-gold/30 to-transparent left-1/2 top-1/2 origin-left -translate-y-1/2" style={{ transform: `rotate(${30}deg)` }} />
        </motion.div>

        {/* Orbit 3: Friends */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: friendsRotation, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <OctagonNode 
            label="Friends" 
            href="/servizi/friends" 
            radius={380} 
            angle={160} 
            rotationDuration={friendsRotation}
            delay={1.2}
          />
          {/* Connection Line */}
          <div className="absolute w-[380px] h-[1px] bg-gradient-to-r from-minerva-gold/30 to-transparent left-1/2 top-1/2 origin-left -translate-y-1/2" style={{ transform: `rotate(${160}deg)` }} />
        </motion.div>

      </div>
    </div>
  );
}
