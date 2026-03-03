"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  size?: "lg" | "sm";
  autoPlay?: boolean;
  showText?: boolean;
  className?: string;
}

const BARS = [
  { x: 10, height: 70 },
  { x: 25, height: 80 },
  { x: 40, height: 90 },
  { x: 55, height: 80 },
  { x: 70, height: 70 },
];

const MEANDER_PATH =
  "M 5,8 L 5,2 L 12,2 L 12,8 L 19,8 L 19,2 L 26,2 L 26,8 L 33,8 L 33,2 L 40,2 L 40,8 L 47,8 L 47,2 L 54,2 L 54,8 L 61,8 L 61,2 L 68,2 L 68,8 L 75,8 L 75,2 L 82,2 L 82,8";

const TITLE = "MINERVA PARTNERS";
const CLAIM = "L'Eccellenza Senza Compromessi";

export default function MinervaLogoAnim({
  size = "lg",
  autoPlay = true,
  showText = true,
  className = "",
}: Props) {
  const w = size === "lg" ? 400 : 200;
  const scale = size === "lg" ? 1 : 0.5;

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ width: w }}
    >
      {/* SVG Logo */}
      <svg
        viewBox="0 0 90 110"
        width={90 * (size === "lg" ? 3.5 : 1.8)}
        height={110 * (size === "lg" ? 3.5 : 1.8)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Meander / Greek Key at top */}
        <motion.path
          d={MEANDER_PATH}
          stroke="#C5A059"
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="square"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            autoPlay
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        />

        {/* 5 vertical bars */}
        {BARS.map((bar, i) => (
          <motion.rect
            key={i}
            x={bar.x}
            y={110 - bar.height}
            width={8}
            height={bar.height}
            rx={1}
            fill="#C5A059"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              autoPlay ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
            }
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            style={{ originY: "100%", transformBox: "fill-box" }}
          />
        ))}

        {/* Glow pulse */}
        <motion.g
          initial={{ filter: "drop-shadow(0 0 0px rgba(197,160,89,0))" }}
          animate={
            autoPlay
              ? {
                  filter: [
                    "drop-shadow(0 0 0px rgba(197,160,89,0))",
                    "drop-shadow(0 0 20px rgba(197,160,89,0.6))",
                    "drop-shadow(0 0 4px rgba(197,160,89,0.15))",
                  ],
                }
              : {}
          }
          transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
        >
          {BARS.map((bar, i) => (
            <rect
              key={`glow-${i}`}
              x={bar.x}
              y={110 - bar.height}
              width={8}
              height={bar.height}
              rx={1}
              fill="transparent"
            />
          ))}
        </motion.g>
      </svg>

      {/* Text: MINERVA PARTNERS */}
      {showText && (
        <>
          <div
            className="flex justify-center mt-6"
            style={{ minHeight: 24 * scale }}
          >
            {TITLE.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={
                  autoPlay ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 8 }
                }
                transition={{
                  delay: 4 + i * 0.04,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="font-titles text-white/90 inline-block"
                style={{
                  fontSize: size === "lg" ? 16 : 10,
                  letterSpacing: "0.4em",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Claim */}
          <motion.span
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={
              autoPlay
                ? { opacity: 0.6, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(8px)" }
            }
            transition={{ delay: 5.5, duration: 1, ease: "easeOut" }}
            className="uppercase text-minerva-gold/60 mt-3 block text-center"
            style={{
              fontSize: size === "lg" ? 11 : 7,
              letterSpacing: "0.5em",
            }}
          >
            {CLAIM}
          </motion.span>
        </>
      )}
    </div>
  );
}
