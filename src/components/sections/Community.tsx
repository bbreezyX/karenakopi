"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=400",
];

export const Community = () => {
  return (
    <section className="bg-black py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="font-display text-8xl md:text-[15vw] leading-none uppercase tracking-tighter absolute inset-0 flex items-center justify-center pointer-events-none whitespace-nowrap"
          >
            Our Ritual
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold tracking-[0.5em] uppercase relative z-10"
          >
            Shared Moments
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className={`aspect-square bg-gray-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer rounded-2xl md:rounded-[2rem] 
                ${index % 4 === 1 ? "md:mt-12" : ""} 
                ${index % 4 === 3 ? "md:mt-24" : ""}
                ${index % 4 === 2 ? "md:-mt-6" : ""}
              `}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={src}
                className="w-full h-full object-cover"
                alt={`Community ${index}`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32 text-center"
        >
          <a
            href="#"
            className="inline-block border border-white/20 px-12 py-5 rounded-full hover:bg-white hover:text-black transition-all group overflow-hidden relative"
          >
            <span className="flex items-center space-x-3 font-bold uppercase tracking-[0.2em] text-[10px] relative z-10">
              <Instagram className="w-5 h-5" />
              <span>Join the community</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
