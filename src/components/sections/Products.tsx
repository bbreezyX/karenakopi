"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ETHIOPIA GUJI",
    desc: "Single Origin • 250g Matte Bag • Jasmine & Peach",
    price: "240",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    offset: false,
    tag: "The Bean",
  },
  {
    id: 2,
    name: "KARENA CONCENTRATE",
    desc: "12-Hour Ritual • Amber Glass • Small Batch",
    price: "185",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
    offset: true,
    tag: "The Bottle",
  },
  {
    id: 3,
    name: "MATTE NOIR CUP",
    desc: "Hand-Crafted Ceramic • Debossed K Logo",
    price: "215",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
    offset: false,
    tag: "The Object",
  },
];

export const Products = () => {
  return (
    <section
      id="products"
      className="bg-off-white text-black py-24 md:py-48 px-6 md:px-12 rounded-t-[4rem] relative z-20 -mt-10 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <span className="font-display text-[30vw] uppercase leading-none text-black whitespace-nowrap gpu-accelerated">
          Inventory
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Luxury Retail
            </span>
            <h2 className="font-display text-7xl md:text-[10vw] leading-[0.9] uppercase tracking-tighter">
              Taste the <br /> Ritual.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 md:mt-0"
          >
            <button className="group flex items-center space-x-6">
              <span className="font-bold uppercase tracking-[0.3em] text-[10px]">
                Full Collection
              </span>
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${product.offset ? "md:mt-24" : ""}`}
            >
              <div className="aspect-[4/5] bg-white rounded-[3rem] p-10 mb-8 flex items-center justify-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-1000">
                {/* Product Tag */}
                <div className="absolute top-8 left-8 z-20">
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-black/5 bg-white/50 backdrop-blur-md">
                    {product.tag}
                  </span>
                </div>

                <motion.img
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={product.image}
                  className="w-full h-full object-contain relative z-10"
                  alt={product.name}
                />

                {/* Hover Action */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] z-20 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-3"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Quick Add</span>
                  </motion.button>
                </div>
              </div>

              <div className="flex justify-between items-start px-4">
                <div className="max-w-[70%]">
                  <h3 className="text-2xl font-display tracking-tight mb-2 uppercase group-hover:text-accent group-hover:bg-black group-hover:px-2 transition-all inline-block">
                    {product.name}
                  </h3>
                  <p className="font-serif-italic text-sm text-black/40 leading-relaxed italic">
                    {product.desc}
                  </p>
                </div>
                <div className="flex flex-col items-end pt-1">
                  <span className="text-2xl font-display tracking-tighter">
                    {product.price}
                  </span>
                  <span className="text-[8px] font-bold uppercase opacity-30 tracking-widest">
                    k / bag
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
