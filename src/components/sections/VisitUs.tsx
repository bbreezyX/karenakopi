"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const VisitUs = () => {
  return (
    <section
      id="visit"
      aria-labelledby="visit-us-title"
      className="bg-background py-24 md:py-48 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                The Destination
              </span>
              <h2
                id="visit-us-title"
                className="font-display text-6xl md:text-[8vw] leading-[0.9] uppercase tracking-tighter mb-12"
              >
                Visit the <br /> Flagship.
              </h2>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-start space-x-6"
              >
                <div
                  className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-2">
                    Location
                  </h3>
                  <p className="text-xl font-medium max-w-xs leading-snug">
                    Jl. Kapten Pattimura Blok E2 No.23-25, Simpang III Sipin,
                    Kota Baru District, Jambi City, Jambi 36361, Indonesia
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-start space-x-6"
              >
                <div
                  className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                      Ritual Hours
                    </h3>
                    <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-accent/20 border border-accent/20">
                      <div
                        className="w-1 h-1 rounded-full bg-accent animate-pulse"
                        aria-hidden="true"
                      />
                      <span className="text-[8px] font-bold uppercase text-accent tracking-widest leading-none">
                        Brewing Now
                      </span>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    <p className="text-sm font-medium">Mon — Fri</p>
                    <p className="text-sm text-foreground/60">07:00 — 21:00</p>
                    <p className="text-sm font-medium">Sat — Sun</p>
                    <p className="text-sm text-foreground/60">08:00 — 22:00</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-start space-x-6"
              >
                <div
                  className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-2">
                    Connect
                  </h3>
                  <p className="text-xl font-medium">+62 812 3456 7890</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mt-2 group focus-visible-ring rounded"
                    aria-label="Say hello on WhatsApp - opens in new tab"
                  >
                    <MessageCircle className="w-3 h-3" aria-hidden="true" />
                    <span className="border-b border-transparent group-hover:border-accent transition-all">
                      SAY HELLO ON WHATSAPP
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] relative group"
          >
            <div
              className="absolute inset-0 border border-foreground/10 rounded-[4rem] group-hover:border-accent/40 transition-colors duration-700"
              aria-hidden="true"
            />
            <div className="absolute inset-4 overflow-hidden rounded-[3rem]">
              <Image
                src="/visit-us.jpeg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale brightness-75 dark:brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                alt="Karena Kopi flagship storefront at Jambi Business Center featuring modern architecture with large windows and warm interior lighting"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <p
                  className="font-handwriting text-accent text-3xl md:text-5xl lowercase mb-2"
                  aria-hidden="true"
                >
                  Find us here
                </p>
                <p className="font-display text-foreground text-base md:text-xl uppercase tracking-widest">
                  Jambi Business Center
                </p>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Karena+Kopi+Jambi+Business+Center"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full flex items-center justify-center p-4 text-background text-center shadow-2xl shadow-accent/20 focus-visible-ring"
              aria-label="Get directions to Karena Kopi on Google Maps - opens in new tab"
            >
              <span className="font-display text-[8px] md:text-[10px] font-bold uppercase leading-tight">
                Get <br /> Directions
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
