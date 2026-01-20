"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms for the two lines
  const line1Y = useTransform(scrollY, [0, 1000], [0, 400]);
  const line2Y = useTransform(scrollY, [0, 1000], [0, 250]);
  const titleOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const words = {
    top: "Karena",
    bottom: "Kopi",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6"
    >
      <motion.div
        className="relative z-20 text-center select-none w-full max-w-[2000px] flex flex-col items-center justify-center pt-24 pb-20 md:pt-0 md:pb-0 gpu-accelerated"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ opacity: titleOpacity }}
      >
        {/* Line 1: Karena */}
        <motion.div
          style={{ y: line1Y }}
          className="relative flex justify-center perspective-1000"
        >
          <div className="flex overflow-hidden pb-2 md:pb-4">
            {words.top.split("").map((char, i) =>
              char === " " ? (
                <span key={i}>&nbsp;</span>
              ) : (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="font-display text-[26vw] md:text-[22vw] leading-[0.75] tracking-tighter text-white uppercase inline-block gpu-accelerated optimize-text"
                >
                  {char}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>

        {/* Line 2: Kopi + Overlapping Flagship (Desktop only overlap) */}
        <motion.div
          style={{ y: line2Y }}
          className="relative flex flex-col items-center mt-0 md:-mt-[5vw] perspective-1000"
        >
          {/* Overlapping Flagship Script - DESKTOP ONLY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: -8, x: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            className="hidden md:block absolute -top-[5vw] left-[15%] z-30 pointer-events-none"
          >
            <span className="font-handwriting text-accent text-7xl md:text-[10vw] lowercase leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Flagship
            </span>
          </motion.div>

          <div className="flex overflow-hidden">
            {words.bottom.split("").map((char, i) =>
              char === " " ? (
                <span key={i}>&nbsp;</span>
              ) : (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="font-display text-[26vw] md:text-[22vw] leading-[0.75] tracking-tighter text-white uppercase inline-block gpu-accelerated optimize-text"
                >
                  {char}
                </motion.span>
              ),
            )}
          </div>

          {/* MOBILE ONLY BRANDING STACK - Below Kopi */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="md:hidden flex flex-col items-center gap-6 mt-8 px-4"
          >
            <div className="flex flex-col items-center gap-1 mb-2">
              <span className="font-handwriting text-accent text-5xl lowercase leading-none">
                Flagship
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <span className="font-handwriting text-accent text-4xl lowercase leading-none">
                  Your Favorite
                </span>
                <span className="font-display text-white text-lg tracking-[0.2em] uppercase leading-tight">
                  Coffee Dealer in Town
                </span>
              </div>
              <span className="font-display text-white/20 text-xs tracking-[0.4em] uppercase mt-2">
                Est. 2020
              </span>
            </div>

            {/* Mobile-specific Scroll Hint */}
            <motion.a
              href="#menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex flex-col items-center gap-3 cursor-pointer group pointer-events-auto border-t border-white/5 pt-6"
            >
              <span className="font-display text-[9px] text-white/30 tracking-[0.4em] uppercase">
                Explore
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent overflow-hidden">
                <motion.div
                  className="w-full h-full bg-white origin-top"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Baseline Controls - Responsive Layout */}
      <div className="flex absolute bottom-[6%] md:bottom-[4%] left-0 w-full flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-20 z-40 pointer-events-none gap-8 md:gap-0">
        {/* Left: Est (Desktop Only to avoid mobile redundancy) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden md:flex items-center gap-4"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="font-display text-white/20 text-sm tracking-[0.3em] uppercase">
            Est. 2020
          </span>
        </motion.div>

        {/* Center Scroll Hint */}
        <motion.a
          href="#menu"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="hidden md:flex flex-col items-center gap-3 md:gap-4 cursor-pointer group pointer-events-auto md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0"
        >
          <span className="font-display text-[9px] md:text-[10px] text-white/30 tracking-[0.4em] uppercase transition-colors group-hover:text-accent">
            Explore
          </span>
          <div className="w-px h-12 md:h-24 bg-gradient-to-b from-accent to-transparent overflow-hidden">
            <motion.div
              className="w-full h-full bg-white origin-top"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.a>

        {/* Right: Modern Specialty Coffee */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
          className="text-right hidden md:block"
        >
          <span className="block text-white/30 font-display text-sm tracking-[0.2em] uppercase">
            Your Favorite Coffee Dealer in Town.
          </span>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};
