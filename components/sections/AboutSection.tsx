"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { HERO_BG } from "@/lib/data";

// Professional inline SVG icons — no emojis
const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const IconLeaf = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const pillars = [
  { Icon: IconClock, title: "Express Speed", desc: "Clean, folded, and ready in 90 minutes." },
  { Icon: IconStar,  title: "Premium Quality", desc: "Hotel-grade cleaning with premium detergents." },
  { Icon: IconPhone, title: "Digital First", desc: "Order, track, and pay — all via WhatsApp." },
  { Icon: IconLeaf,  title: "Eco-Friendly", desc: "Responsible cleaning, gentle on fabrics and Bali." },
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
              {pillars.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-sm"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-sm bg-[#1B3FA0]/6 flex items-center justify-center text-[#1B3FA0]">
                    <Icon />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D1B2A] text-sm mb-1">{title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
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
