"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { HERO_BG } from "@/lib/data";

const pillars = [
  { icon: "⚡", title: "Express Speed", desc: "Clean, folded, and ready in 90 minutes." },
  { icon: "✨", title: "Premium Quality", desc: "Hotel-grade cleaning with premium detergents." },
  { icon: "📱", title: "Digital First", desc: "Order, track, and pay — all via WhatsApp." },
  { icon: "🌿", title: "Eco-Friendly", desc: "Responsible cleaning, gentle on fabrics and Bali." },
];

export default function AboutSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F4] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image — fade+y only (no x to avoid horizontal overflow on mobile) */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 w-full"
          >
            <div className="absolute inset-0 border-2 border-[#F5A623] translate-x-3 translate-y-3 -z-10" aria-hidden="true" />
            <Image
              src={HERO_BG}
              alt="Bandar Laundry Express — Bali's premium laundry service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
              loading="lazy"
            />
          </motion.div>

          <div>
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65 }}
            >
              <span className="section-label">Our Story</span>
              <h2
                className="font-bold text-[#0D1B2A] leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.75rem, 5vw, 3rem)",
                }}
              >
                Bali&apos;s First
                <br />
                <span className="italic">Digital Laundry</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                Bandar Laundry Express was founded with a simple mission: to bring
                reliable, fast, and premium laundry service to Bali&apos;s residents
                and travelers. We are proud to be Bali&apos;s first fully digital
                laundry brand.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                What started as a single branch in Denpasar has grown to 9
                locations across the island. Our digital-first approach means you
                can order, track, and pay entirely through WhatsApp — no apps to
                download, no complicated systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-sm"
                >
                  <span className="text-xl flex-shrink-0" aria-hidden="true">{pillar.icon}</span>
                  <div>
                    <div className="font-semibold text-[#0D1B2A] text-sm mb-1">{pillar.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
