"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const images = [
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzePZCVtlsX2bX9kEGGKD89PvVRe4fU4GCgNGVv-wxkgnjoM8E2uNB7tPFTLMlgYgyzvKK-lqX9byV6WnFtBqx4YwgRTv4RAEMuFxwJWx1SBfMv3fE53Tcqg0fC55cFDTgMMYI9=s2000",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyIKFRq5BTLNsOruitg_zUPXNbJtvpZeWu1lvhiK8yDauakVhTnUGo4QbZ41PV6UraWNmmln8e1YSVLLSQy1_ENMlvUcb84LPC6Xva4HMYTxW3uuLv4R5mjLXaK_e9A7KILBKcgRz9jeYrG=s2000",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwPOK7SDqRGZ8pRHPPRhPxXJzAd00WV3c6RnO1N4AamZ719fvQ4itlZ720nx3_ru8AGzaJ3QbQjpL6V9WS9Jx0VHmBxzC3aXnJG6wDNnh5dmXXV4r8ponYmiL_K-ID24MuWaK3QPDj-fZM=s2000",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz8c0E6h039voCBOJlAjGoVGS4xpcQbNF7klBb31TCc0GQuB4zflD0ci1yNRXNo4pq7c4E-ToFDAnRV-vHrT2_6MgStZtAw2zrOzapCucAEsOoAqxMFTLgmPciVgMtCa2DidlfaXsyRCDc=s2000",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwEYnDIIvIVH7OaYla0nIDxOCeM0TvgMbxU7mQiU83BXznvIe42Lgu73ESUfHkMpb8nJdkaN1yh8X0e1RiDzaJGxDDO0Xsf3RQTnD1XDSMcYRxjtPTl1aRp6E5sVRG3nXfL0-TqBA=s2000",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzdUz4JhiTyQAgfLc3fbv8o6SMX8tMviQ_9K4oS0Y9JM3aDFdcX_n8XYFhAPrbQRfnCTu_oGG-K-R4vXp3ARE47CSJznhJ-pPRljr8MpUrF3xGYt4s15JomBkbPJDqppkXdnqyryw=s2000",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwN_X_mAnF8U5_mY_U0n6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6=s2000", // Fallback pattern
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-X_mAnF8U5_mY_U0n6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6=s2000", // Fallback pattern
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
            href="https://www.instagram.com/karena.kopi/"
            target="_blank"
            rel="noreferrer"
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
