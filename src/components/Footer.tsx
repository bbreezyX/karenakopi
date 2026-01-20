"use client";

import React from "react";
import { Instagram, Twitter, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-24">
        {/* Left Side: Brand & Info */}
        <div className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/10 shrink-0">
              <img
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/49bab24e-3063-4590-bd49-384b4e3b5168/1768888456410-b7936e3e/karenakopi_logo.jpg"
                alt="Karena Kopi Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-widest text-white">
              Karena Kopi
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Location 1: JBC */}
            <div className="text-white/40 text-[11px] md:text-xs space-y-1.5 uppercase tracking-[0.2em] font-bold">
              <p className="text-accent">01 — JBC</p>
              <p className="text-white/60">Jambi Business Center</p>
              <p>Jl. Kapt A. Bakaruddin, Jambi</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jambi+Business+Center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-2 text-accent hover:text-white transition-colors"
              >
                Directions →
              </a>
            </div>

            {/* Location 2: Telanaipura */}
            <div className="text-white/40 text-[11px] md:text-xs space-y-1.5 uppercase tracking-[0.2em] font-bold">
              <p className="text-accent">02 — Telanaipura</p>
              <p className="text-white/60">Jl. Prof. Dr. Sri Sudewi M.S.</p>
              <p>No.E5, Sungai Putri, Jambi</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Prof.+Dr.+Sri+Sudewi+Maschun+Sopyan+No.E5+Jambi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-2 text-accent hover:text-white transition-colors"
              >
                Directions →
              </a>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-accent text-sm md:text-base uppercase tracking-[0.2em] font-bold">
              Open Daily: 08:00 — 23:00
            </p>
          </div>
        </div>

        {/* Right Side: Socials & Fine Print */}
        <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
          <div className="flex gap-8">
            <a
              href="#"
              className="text-white/30 hover:text-accent text-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-accent text-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="Tiktok"
            >
              <Twitter size={28} />
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-accent text-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="Whatsapp"
            >
              <MessageSquare size={28} />
            </a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold text-left md:text-right space-y-2">
            <p>All prices exclude 10% tax.</p>
            <p>&copy; {new Date().getFullYear()} Karena Kopi. Made by Love</p>
          </div>
        </div>
      </div>

      {/* Visual Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};
