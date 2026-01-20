"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}

interface MenuCategory {
  title: string;
  bg: "black" | "off-white";
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "Karena Signature",
    bg: "black",
    items: [
      {
        name: "Karena Indonesia Latte",
        price: "22 / 27",
        desc: "Secret house blend with a touch of heritage",
      },
      { name: "Karena Salted Drizzle", price: "25 / 30" },
      { name: "Karenamel Macchiato", price: "25 / 30" },
      { name: "Karena Secret", price: "25 / 30" },
      { name: "Karena Krimmy", price: "27 / 33" },
      { name: "Karena Pandan Latte", price: "27 / 33" },
      { name: "Karena Longberry", price: "22 / 27" },
    ],
  },
  {
    title: "Black / White Coffee",
    bg: "off-white",
    items: [
      { name: "Long Black", price: "20 / 24" },
      { name: "Cappuccino", price: "24 / 28" },
      { name: "Caffè Latte", price: "24 / 28" },
      { name: "Mochaccino", price: "26 / 30" },
      { name: "Vanilla Latte", price: "24 / 28" },
      { name: "Caramel Latte", price: "24 / 28" },
      { name: "Asian Dolce Latte", price: "24 / 28" },
    ],
  },
  {
    title: "Milk Based",
    bg: "black",
    items: [
      { name: "Milk Rum & Crunch", price: "27 / 32" },
      { name: "Butter Honey Crunch", price: "25 / 30" },
      { name: "Chocolate Latte", price: "25 / 30" },
      { name: "Greentea Latte", price: "25 / 30" },
      { name: "Red Velvet Latte", price: "25 / 30" },
      { name: "Midnight Latte", price: "25 / 30" },
    ],
  },
  {
    title: "Refreshing Sodas",
    bg: "off-white",
    items: [
      { name: "Infused Lemon Tea", price: "25 / 30" },
      { name: "Orange Spreach", price: "27 / 32" },
      { name: "Sparkling Berry", price: "28 / 33" },
    ],
  },
  {
    title: "Light Meals",
    bg: "black",
    items: [
      { name: "Bulgarian Fries", price: "26" },
      { name: "Fries with Sausage", price: "34" },
      { name: "Chicken Wing", price: "29" },
      { name: "Plaice Goujons", price: "39" },
    ],
  },
  {
    title: "Pasta",
    bg: "off-white",
    items: [
      { name: "Bolognaise", price: "28" },
      { name: "Pasta Bruille", price: "28" },
      { name: "Carbonara Chicken Mushroom", price: "34" },
      { name: "Creamy Spicy Tuna Mentai", price: "34.5" },
    ],
  },
  {
    title: "Healthy Food",
    bg: "black",
    items: [
      { name: "Chicken Caesar Salad", price: "39" },
      { name: "Karena Salmon Wrap", price: "39" },
    ],
  },
  {
    title: "Dessert",
    bg: "off-white",
    items: [
      { name: "Lava Cake", price: "28" },
      { name: "Waffle", price: "25" },
      { name: "Croissant Bread Pudding", price: "29" },
      { name: "Banana Nugget", price: "19" },
    ],
  },
  {
    title: "Main Course",
    bg: "black",
    items: [
      { name: "Pan Seared Dory", price: "38" },
      { name: "Pan Seared Chicken", price: "37" },
      { name: "Caramelized Chicken Lime", price: "36" },
      { name: "Chicken Curry Set", price: "37" },
      { name: "Chicken Karaage Set", price: "35" },
      { name: "Sirloin Steak", price: "71" },
      { name: "Tenderloin Steak", price: "75" },
      { name: "Nasi Goreng Nusantara", price: "28.5" },
      { name: "Nasi Goreng Katsu", price: "35" },
      { name: "Chicken Pop Corn", price: "35" },
      { name: "Crispy Dory", price: "38" },
      { name: "Crispy Chicken", price: "32" },
    ],
  },
  {
    title: "Sweet Treat",
    bg: "off-white",
    items: [
      { name: "Kwason(g) Bread Pudding", price: "29" },
      { name: "Waffle with Ice Cream", price: "27" },
      { name: "Pancake with Ice Cream", price: "28" },
      { name: "Choco Lava", price: "28" },
    ],
  },
];

export const Menu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const [activeIdx, setActiveIdx] = useState(0);
  const currentCategory = menuCategories[activeIdx];

  const handleCategoryClick = (idx: number, e: React.MouseEvent) => {
    setActiveIdx(idx);
    // Center the clicked button in the dock
    (e.currentTarget as HTMLElement).scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    // Scroll page to top of menu
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="menu" ref={containerRef} className="relative w-full flex flex-col">
      {/* Category Navigation - Floating Bottom Dock */}
      <motion.div
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0, 0.1, 0.9, 0.95],
            [0, 1, 1, 0],
          ),
          y: useTransform(
            scrollYProgress,
            [0, 0.1, 0.85, 0.95],
            [40, 0, 0, 150],
          ),
          scale: useTransform(
            scrollYProgress,
            [0, 0.1, 0.9, 0.95],
            [0.95, 1, 1, 0.95],
          ),
        }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[70] w-auto max-w-[90vw]"
      >
        {/* Mobile Scroll Indicator - Hint for Swipe */}
        <div className="flex flex-col items-center gap-1 mb-2 md:hidden">
          <span className="text-accent text-[8px] uppercase tracking-[0.4em] font-bold opacity-60">
            Slide
          </span>
          <div className="flex gap-2">
            <motion.div
              animate={{ x: [-4, 4] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-4 h-0.5 bg-accent/30 rounded-full"
            />
          </div>
        </div>

        <div
          className={cn(
            "p-2 flex items-center gap-1 overflow-x-auto no-scrollbar rounded-full transition-all duration-700 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] border",
            currentCategory.bg === "black"
              ? "bg-black/80 backdrop-blur-2xl border-white/10"
              : "bg-white/80 backdrop-blur-2xl border-black/10",
          )}
        >
          {menuCategories.map((category, idx) => {
            const isActive = activeIdx === idx;
            const isCategoryOnWhite = currentCategory.bg === "off-white";

            return (
              <button
                key={category.title}
                onClick={(e) => handleCategoryClick(idx, e)}
                className={cn(
                  "relative group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 whitespace-nowrap",
                  isActive
                    ? "text-black"
                    : isCategoryOnWhite
                      ? "text-black/40 hover:text-black"
                      : "text-white/40 hover:text-white",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-accent rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 text-[10px] font-bold tabular-nums transition-colors duration-500",
                    isActive
                      ? "text-black"
                      : isCategoryOnWhite
                        ? "text-accent group-hover:text-accent-dark"
                        : "text-accent/40 group-hover:text-accent",
                  )}
                >
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <span className="relative z-10 font-display text-xs md:text-sm uppercase tracking-widest">
                  {category.title}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Main Content Area with Seamless Transitions */}
      <div className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.section
            key={activeIdx}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative min-h-screen py-32 px-6 md:px-12 transition-colors duration-1000 overflow-hidden -mt-[48px] md:-mt-[100px] z-10",
              currentCategory.bg === "black"
                ? "bg-black text-white rounded-t-[48px] md:rounded-t-[100px]"
                : "bg-off-white text-black rounded-[48px] md:rounded-[100px]",
            )}
          >
            {/* Background Narrative Title */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.03 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
            >
              <h1 className="font-display text-[25vw] md:text-[30vw] uppercase leading-none text-current whitespace-nowrap select-none rotate-90 md:rotate-0 gpu-accelerated">
                {currentCategory.title}
              </h1>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-16 md:mb-40">
                <div className="flex flex-col gap-3 md:gap-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-accent"
                  />
                  <div className="flex items-baseline gap-3 md:gap-4">
                    <span className="text-accent text-sm md:text-2xl font-bold tabular-nums">
                      {(activeIdx + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-4xl md:text-[8vw] uppercase tracking-tighter leading-[0.85]">
                      {currentCategory.title}
                    </h2>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-handwriting text-2xl md:text-5xl text-accent -rotate-3 md:-translate-y-8"
                >
                  Selected with Care
                </motion.p>
              </div>

              {/* Pricing Legend Header - Conditional Labels */}
              <div className="flex justify-between items-end px-2 md:px-6 mb-8 pb-4">
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                    The Selection
                  </span>
                  <span className="font-display text-xs md:text-lg uppercase tracking-widest opacity-40">
                    Menu Item
                  </span>
                </div>
                <div className="flex flex-col items-end gap-0.5 md:gap-1">
                  <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                    {currentCategory.items.some((i) => i.price.includes("/"))
                      ? "Size Price"
                      : "Retail Price"}
                  </span>
                  <span className="font-display text-xs md:text-lg uppercase tracking-widest opacity-40">
                    {currentCategory.items.some((i) => i.price.includes("/"))
                      ? "Small / Large"
                      : "Default"}
                  </span>
                </div>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-2 md:gap-y-4">
                {currentCategory.items.map((item, itemIdx) => (
                  <motion.div
                    key={`${currentCategory.title}-${item.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + itemIdx * 0.05,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1] as any,
                    }}
                    className={cn(
                      "group relative flex justify-between items-start px-6 py-6 md:py-8 transition-all duration-500 rounded-[2rem] cursor-default",
                      currentCategory.bg === "black"
                        ? "hover:bg-white/[0.03]"
                        : "hover:bg-black/[0.03]",
                    )}
                  >
                    <div className="flex flex-col gap-1.5 md:gap-2 max-w-[70%]">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-[9px] md:text-[10px] opacity-30 font-bold tabular-nums">
                          {(itemIdx + 1).toString().padStart(2, "0")}
                        </span>
                        <h3 className="text-lg md:text-3xl font-display uppercase tracking-tight group-hover:text-accent transition-colors duration-500">
                          {item.name}
                        </h3>
                      </div>
                      {item.desc && (
                        <p className="pl-6 md:pl-7 text-[9px] md:text-xs uppercase tracking-widest opacity-40 font-bold leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end pt-1">
                      <span className="text-accent font-display text-xl md:text-4xl tabular-nums leading-none tracking-tighter transition-transform group-hover:scale-110">
                        {item.price}
                      </span>
                      <div
                        className={cn(
                          "w-0 h-px bg-accent group-hover:w-full transition-all duration-700 mt-1",
                        )}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Integrated Pricing Notice & Footer - Now part of the transition card */}
            <div className="mt-20 pb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  {/* Service Note Card */}
                  <div
                    className={cn(
                      "lg:col-span-7 p-8 md:p-10 rounded-[2rem] transition-all duration-700",
                      currentCategory.bg === "black"
                        ? "bg-white/[0.02]"
                        : "bg-black/[0.02]",
                    )}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <h4 className="font-display text-accent text-lg md:text-xl uppercase tracking-widest">
                        Service Notes
                      </h4>
                    </div>
                    <p
                      className={cn(
                        "text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] leading-relaxed transition-opacity duration-700",
                        currentCategory.bg === "black"
                          ? "opacity-40"
                          : "opacity-60",
                      )}
                    >
                      * All prices are in Indonesian Rupiah (IDR) and exclude
                      10% government tax. Prices displayed as Small / Large
                      where applicable. Our signature blends are roasted
                      in-house to ensure the highest quality and consistency in
                      every cup. Please inform our staff of any allergies before
                      ordering.
                    </p>
                  </div>

                  {/* Resources & Engagement */}
                  <div className="lg:col-span-5 flex flex-wrap gap-x-12 gap-y-10 pt-4 lg:pt-8">
                    <div className="flex flex-col gap-4">
                      <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
                        Administrative
                      </span>
                      <div className="flex flex-col gap-4">
                        <button className="text-current hover:text-accent transition-colors font-display uppercase tracking-[0.2em] text-xs md:text-sm flex items-center group text-left">
                          Download PDF Menu
                        </button>
                        <button className="text-current hover:text-accent transition-colors font-display uppercase tracking-[0.2em] text-xs md:text-sm flex items-center group text-left">
                          Terms of Service
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
                        Connection
                      </span>
                      <div className="flex flex-col gap-4">
                        <a
                          href="#"
                          className="text-current hover:text-accent transition-colors font-display uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-3 group"
                        >
                          <span className="w-2 h-2 rounded-full border border-current opacity-20 group-hover:bg-accent group-hover:border-accent transition-all" />
                          Instagram
                        </a>
                        <a
                          href="#"
                          className="text-current hover:text-accent transition-colors font-display uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-3 group"
                        >
                          <span className="w-2 h-2 rounded-full border border-current opacity-20 group-hover:bg-accent group-hover:border-accent transition-all" />
                          Inquiries
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
};
