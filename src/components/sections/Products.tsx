"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ETHIOPIA GUJI",
    desc: "Notes of Jasmine, Peach & Bergamot",
    price: "240",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    offset: false,
  },
  {
    id: 2,
    name: "THE FOUNDER'S",
    desc: "Dark Chocolate, Caramel, Full Bodied",
    price: "210",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
    offset: true,
  },
  {
    id: 3,
    name: "BLACK CONCENTRATE",
    desc: "12-Hour Steep, Ultra-Smooth",
    price: "185",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
    offset: false,
  },
];

export const Products = () => {
  return (
    <section
      id="products"
      className="bg-off-white text-black py-24 md:py-48 px-6 md:px-12 rounded-t-[4rem] relative z-20 -mt-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl md:text-[10vw] leading-[0.9] uppercase tracking-tighter"
          >
            Taste the
            <br />
            Ritual.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 md:mt-0"
          >
            <button className="group flex items-center space-x-4">
              <span className="font-bold uppercase tracking-[0.2em] text-[10px]">
                Full Inventory
              </span>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${product.offset ? "md:mt-16" : ""}`}
            >
              <div className="aspect-[4/5] bg-white rounded-[40px] p-8 mb-8 flex items-center justify-center relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={product.image}
                  className="w-full h-full object-contain"
                  alt={product.name}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                  <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1 uppercase">
                    {product.name}
                  </h3>
                  <p className="font-serif-italic text-sm text-gray-500">
                    {product.desc}
                  </p>
                </div>
                <span className="text-xl font-medium tracking-tighter">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
