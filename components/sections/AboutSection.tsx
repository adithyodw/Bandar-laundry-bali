"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ABOUT_DIGITAL_LAUNDRY_SLIDES } from "@/lib/about-digital";
import { appleEase } from "@/lib/motion-easing";

const slides = [...ABOUT_DIGITAL_LAUNDRY_SLIDES];
const CAROUSEL_INTERVAL_MS = 7400;
const crossfade = {
  duration: 0.78,
  ease: appleEase,
};

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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReduced || paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [prefersReduced, paused]);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F4] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image catalog — Apple-style crossfade, minimal chrome */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: appleEase }}
            className="relative max-w-sm mx-auto lg:mx-0 w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="relative aspect-[4/5] rounded-[1.35rem] overflow-hidden bg-neutral-200/80 shadow-[0_16px_48px_-12px_rgba(13,27,42,0.18)] ring-1 ring-black/[0.05]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Bandar Laundry Express locations"
            >
              {slides.map((slide, i) => (
                <motion.div
                  key={slide.src}
                  initial={false}
                  animate={{
                    opacity: prefersReduced ? (i === 0 ? 1 : 0) : i === index ? 1 : 0,
                  }}
                  transition={crossfade}
                  className="absolute inset-0"
                  style={{ zIndex: i === index ? 2 : 1 }}
                  aria-hidden={i === index ? undefined : true}
                >
                  <Image
                    src={slide.src}
                    alt={`Bandar Laundry Express — Bali digital laundry ${i + 1} of ${slides.length}`}
                    fill
                    className="object-cover scale-[1.01]"
                    sizes="(max-width: 1024px) 90vw, 420px"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
            </div>

            {slides.length > 1 && !prefersReduced && (
              <div
                className="mt-5 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Slide indicators"
              >
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className="h-1.5 rounded-full transition-[width,background-color,opacity] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3FA0] focus-visible:ring-offset-2"
                    style={{
                      width: i === index ? 22 : 6,
                      backgroundColor:
                        i === index ? "rgba(27, 63, 160, 0.9)" : "rgba(13, 27, 42, 0.18)",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          <div>
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.72, ease: appleEase, delay: 0.04 }}
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
                  initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.52, ease: appleEase, delay: i * 0.06 }}
                  className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-md bg-[#1B3FA0]/6 flex items-center justify-center text-[#1B3FA0]">
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
