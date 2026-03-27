"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { branches } from "@/lib/data";

export default function BranchesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="branches" className="py-16 md:py-24 bg-[#FAF8F4]">
      <div className="container">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4"
        >
          <div>
            <span className="section-label">Our Locations</span>
            <h2
              className="font-bold text-[#0D1B2A] leading-tight"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
              }}
            >
              Find a Branch
              <br />
              <span className="italic">Near You</span>
            </h2>
          </div>
          <div className="text-slate-500 text-sm md:text-right max-w-xs">
            <span
              className="text-[#1B3FA0] font-semibold text-2xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              9
            </span>{" "}
            branches across Denpasar and Badung, open daily 07:00 – 22:00.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
              className="branch-card bg-white p-5 md:p-6 shadow-sm border border-slate-50 hover:border-[#F5A623]/30"
            >
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F5A623] mb-2">
                {branch.area}
              </div>

              <h3
                className="text-lg font-bold text-[#0D1B2A] mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {branch.name}
              </h3>

              <div className="flex items-start gap-2.5 mb-3">
                <svg
                  className="flex-shrink-0 mt-0.5 text-[#1B3FA0]"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm text-slate-500 leading-relaxed">
                  {branch.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 mb-2">
                <svg className="flex-shrink-0 text-[#1B3FA0]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${branch.phone.replace(/-/g, "")}`} className="text-sm text-slate-500 hover:text-[#1B3FA0] transition-colors">
                  {branch.phone}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5 mb-5">
                <svg className="flex-shrink-0 text-[#25D366]" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <a href={branch.waLink} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-[#25D366] transition-colors">
                  Order via WhatsApp
                </a>
              </div>

              {/* Maps link */}
              <a
                href={branch.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors tracking-wide uppercase min-h-[44px]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Open in Google Maps
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Can&apos;t find a branch near you? We also offer pickup & delivery in selected areas.
          </p>
          <Link
            href="https://wa.me/62817334128?text=Halo%20Bandar%20Laundry%2C%20saya%20ingin%20tahu%20layanan%20pickup%20di%20area%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex"
          >
            Inquire About Pickup
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
