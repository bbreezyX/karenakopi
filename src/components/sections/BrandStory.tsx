"use client";

import React from "react";
import { motion } from "framer-motion";

export const BrandStory = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 bg-black text-white p-12 md:p-24 flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif-italic text-4xl md:text-[5vw] leading-tight mb-12"
        >
          "Coffee is more than a drink; it's the bridge to the conversations
          that change the world."
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center space-x-4 mb-8"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              alt="Founder"
            />
          </div>
          <div>
            <p className="font-bold text-sm tracking-widest uppercase">
              Arya Wijaya
            </p>
            <p className="text-[10px] opacity-40 uppercase font-bold tracking-[0.1em]">
              Founder & Head Roaster
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm leading-relaxed max-w-md"
        >
          At Karena Kopi, we believe every cup has a &apos;why&apos;. Whether
          it&apos;s the energy to create, the space to connect, or the moment of
          solace—we provide the sensory catalyst. Our beans are ethically
          sourced and roasted in small batches to preserve the delicate
          narrative of their origin.
        </motion.p>
      </div>

      <div className="w-full md:w-1/2 bg-white relative overflow-hidden h-[60vh] md:h-auto group">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1442512595632-7b6169bc06f1?auto=format&fit=crop&q=80&w=1000"
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          alt="Cafe Interior"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-12 left-12"
        >
          <div className="bg-black text-white p-8 max-w-xs border border-white/10 backdrop-blur-md bg-opacity-80">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
              The Space
            </span>
            <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
              Minimalism in Motion
            </h4>
            <a
              href="#"
              className="text-[10px] uppercase font-bold border-b border-accent pb-1 hover:text-accent transition-all tracking-[0.2em]"
            >
              Explore Interior
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
