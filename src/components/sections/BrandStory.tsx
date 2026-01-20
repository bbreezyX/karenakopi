"use client";

import React from "react";
import { motion } from "framer-motion";

export const BrandStory = () => {
  return (
    <section
      id="story"
      className="relative bg-black overflow-hidden py-24 md:py-0"
    >
      {/* Background Text Decor */}
      <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="font-display text-[40vw] uppercase leading-none">
          Ritual
        </span>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        <div className="w-full md:w-1/2 text-white p-8 md:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block">
              Our Philosophy
            </span>
            <h2 className="font-serif-italic text-4xl md:text-[4.5vw] leading-[1.1] mb-12">
              &quot;Coffee is more than a drink; it is the silent curator of
              human connection and the catalyst for every enduring ritual.&quot;
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center space-x-6 mb-12"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden grayscale border border-white/10 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/1674611675874.jpg"
                  className="w-full h-full object-cover"
                  alt="Founder"
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-sm tracking-widest uppercase">
                Fuad Firdaus
              </p>
              <p className="text-[10px] opacity-40 uppercase font-bold tracking-[0.2em] mt-1 text-accent">
                Founder & Head Roaster
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm leading-relaxed"
            >
              For us, coffee is an intentional act. We meticulously source and
              roast in surgical batches, ensuring each cup serves as a profound
              motive—because every significant moment deserves an equally
              significant ritual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="border-l border-white/10 pl-8 hidden md:block"
            >
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-4">
                The Standard
              </p>
              <ul className="space-y-2 text-[10px] uppercase font-bold tracking-[0.1em]">
                <li>• Direct Trade Sourcing</li>
                <li>• Micro-Batch Roasting</li>
                <li>• Seasonal Curation</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-0">
          <div className="relative overflow-hidden h-[60vh] md:min-h-[80vh] group rounded-[3rem] md:rounded-[4rem] border border-white/10">
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              src="/cafeinterior.jpeg"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-2000 ease-in-out"
              alt="Cafe Interior"
            />

            {/* Overlay Floating Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -10, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-8 right-8 md:top-12 md:right-12 w-20 h-20 md:w-24 md:h-24 border border-accent/30 rounded-full flex flex-col items-center justify-center p-4 backdrop-blur-sm bg-black/20"
            >
              <span className="font-display text-[7px] md:text-[8px] text-accent font-bold uppercase tracking-wider text-center leading-tight">
                Flagship <br /> Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-12 md:right-auto"
            >
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-5 md:p-10 max-w-[280px] md:max-w-sm rounded-[1.5rem] md:rounded-[2.5rem]">
                <span className="text-accent text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-2 md:mb-4 block">
                  The Space
                </span>
                <h4 className="text-xl md:text-3xl font-display mb-3 md:mb-6 uppercase tracking-tighter leading-none">
                  Minimalism in <br className="hidden md:block" /> Motion
                </h4>
                <p className="text-[10px] md:text-xs text-white/50 mb-5 md:mb-8 leading-relaxed max-w-[200px] md:max-w-none">
                  Small-batch roasting & minimal design in Jambi.
                </p>
                <a
                  href="#visit"
                  className="group flex items-center space-x-3 text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em]"
                >
                  <span>Explore</span>
                  <div className="w-8 h-[1px] bg-accent group-hover:w-12 transition-all duration-500" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
