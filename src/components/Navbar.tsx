"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
      <div className="w-full px-6 py-6 md:px-12 md:py-10 flex justify-between items-start">
        {/* Logo Section */}
        <div className="group cursor-pointer pointer-events-auto flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:border-accent shadow-2xl shrink-0">
            <img
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/49bab24e-3063-4590-bd49-384b4e3b5168/1768888456410-b7936e3e/karenakopi_logo.jpg"
              alt="Karena Kopi Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Action Section - Desktop: Dual Locations, Mobile: Menu + Dropdown */}
        <div className="flex flex-col items-end gap-4 md:gap-6 pointer-events-auto">
          {/* DESKTOP VIEW (unchanged) */}
          <div className="hidden md:flex flex-col items-end gap-6">
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-col items-end text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold leading-relaxed text-right">
                <span className="text-accent">01 — JBC</span>
                <span>Jambi Business Center</span>
                <span>Jl. Kapt A. Bakaruddin</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jambi+Business+Center"
                target="_blank"
                className="text-accent text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors"
                rel="noreferrer"
              >
                Directions →
              </a>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-col items-end text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold leading-relaxed text-right">
                <span className="text-accent">02 — Telanaipura</span>
                <span>Jl. Prof. Dr. Sri Sudewi M.S.</span>
                <span>No.E5, Sungai Putri</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Prof.+Dr.+Sri+Sudewi+Maschun+Sopyan+No.E5+Jambi"
                target="_blank"
                className="text-accent text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors"
                rel="noreferrer"
              >
                Directions →
              </a>
            </div>
          </div>

          {/* MOBILE VIEW - TWO BUTTONS */}
          <div className="md:hidden flex items-center gap-2 relative">
            {/* Button 1: Direct to Menu */}
            <button
              onClick={() => {
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent text-black px-6 py-3 rounded-full font-bold text-[11px] uppercase tracking-wider shadow-xl shadow-accent/10 active:scale-95 transition-transform"
            >
              Explore Menu
            </button>

            {/* Button 2: Location Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-full font-bold text-[11px] uppercase tracking-wider backdrop-blur-xl border transition-all duration-300",
                  isLocationOpen
                    ? "bg-white text-black border-white"
                    : "bg-white/10 text-white border-white/10",
                )}
              >
                <MapPin className="w-4 h-4" />
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-300",
                    isLocationOpen && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence>
                {isLocationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-[240px] bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl z-[110]"
                  >
                    <div className="flex flex-col gap-8">
                      {/* Loc 1 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                          <span className="text-accent mb-1">JBC</span>
                          <span>Jambi Business Center</span>
                        </div>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Jambi+Business+Center"
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent text-[9px] uppercase tracking-widest font-bold bg-accent/10 px-4 py-2 rounded-full w-fit"
                        >
                          Directions →
                        </a>
                      </div>

                      <div className="h-px bg-white/5" />

                      {/* Loc 2 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                          <span className="text-accent mb-1">Telanaipura</span>
                          <span>No.E5, Sungai Putri</span>
                        </div>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Jl.+Prof.+Dr.+Sri+Sudewi+Maschun+Sopyan+No.E5+Jambi"
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent text-[9px] uppercase tracking-widest font-bold bg-accent/10 px-4 py-2 rounded-full w-fit"
                        >
                          Directions →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
