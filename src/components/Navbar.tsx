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
          <div className="hidden md:flex flex-col items-end text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold leading-relaxed text-right">
            <span>Jambi Business Center</span>
            <span>Jl. Kapt A. Bakaruddin</span>
          </div>
          <a
            href="https://maps.app.goo.gl/wwZfKuU8bVu7pDX67"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-tighter hover:bg-white transition-all duration-500 transform hover:-translate-y-1 shadow-2xl shadow-accent/20"
          >
            Get Directions
          </a>
        </div>
      </div>
    </nav>
  );
};
