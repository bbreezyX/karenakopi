"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
      <div className="w-full px-6 py-6 md:px-12 md:py-10 flex justify-between items-start">
        {/* Logo Section - Logo + Text */}
        <div className="group cursor-pointer pointer-events-auto flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:border-accent shadow-2xl shrink-0">
            <img
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/49bab24e-3063-4590-bd49-384b4e3b5168/1768888456410-b7936e3e/karenakopi_logo.jpg"
              alt="Karena Kopi Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Action Section - Cornered */}
        <div className="flex flex-col items-end gap-4 md:gap-6 pointer-events-auto">
          {/* Location 1: Jambi Business Center */}
          <div className="hidden md:flex flex-col items-end gap-2">
            <div className="flex flex-col items-end text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold leading-relaxed text-right">
              <span className="text-accent">01 — JBC</span>
              <span>Jambi Business Center</span>
              <span>Jl. Kapt A. Bakaruddin</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jambi+Business+Center"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors"
            >
              Directions →
            </a>
          </div>

          {/* Location 2: Telanaipura */}
          <div className="hidden md:flex flex-col items-end gap-2">
            <div className="flex flex-col items-end text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold leading-relaxed text-right">
              <span className="text-accent">02 — Telanaipura</span>
              <span>Jl. Prof. Dr. Sri Sudewi M.S.</span>
              <span>No.E5, Sungai Putri</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Prof.+Dr.+Sri+Sudewi+Maschun+Sopyan+No.E5+Jambi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors"
            >
              Directions →
            </a>
          </div>

          {/* Mobile: Combined Button */}
          <div className="md:hidden flex gap-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jambi+Business+Center"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-4 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-tight hover:bg-white transition-all duration-500"
            >
              JBC
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Prof.+Dr.+Sri+Sudewi+Maschun+Sopyan+No.E5+Jambi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-4 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-tight hover:bg-accent hover:text-black transition-all duration-500"
            >
              Telanaipura
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
