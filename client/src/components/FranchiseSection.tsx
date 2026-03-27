import React from 'react';
/*
 * BANDAR LAUNDRY EXPRESS — Franchise / Kemitraan Section
 * Design: Brand blue (#1B3FA0) background with Bali aerial photo overlay.
 * Light text on dark. Gold CTA buttons. Prominent WhatsApp CTA.
 * Premium investment opportunity aesthetic.
 */

const FRANCHISE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-franchise-bg-ZJsEoXt3jr4AZGoRweuEhB.webp";

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Proven Business Model",
    desc: "Operating successfully across 9 branches with a replicable system and strong unit economics.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "High Market Demand",
    desc: "Bali's booming tourism and hospitality industry creates consistent, year-round demand for premium laundry services.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Scalable & Profitable",
    desc: "Digital-first operations mean lower overhead, faster ROI, and the ability to scale efficiently across multiple locations.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Full Support System",
    desc: "Comprehensive training, operational guidance, branding materials, and ongoing support from our experienced team.",
  },
];

export default function FranchiseSection() {
  const waLink = "https://wa.me/6281290271990?text=Halo%20Bandar%20Laundry%20Express%2C%20saya%20tertarik%20dengan%20program%20kemitraan%20franchise.";

  return (
    <section id="franchise" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FRANCHISE_BG})` }}
      />
      <div className="absolute inset-0 bg-[#1B3FA0]/88" />

      {/* Content */}
      <div className="relative container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — Main pitch */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase font-['Inter']">
                Kemitraan &amp; Franchise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-['Playfair_Display']">
              Build Your Own
              <br />
              <span className="italic text-[#F5A623]">Bandar Laundry</span>
            </h2>
            <p className="text-white/75 leading-relaxed mb-4 text-base md:text-lg font-['Inter']">
              Join a growing network of successful laundry entrepreneurs across Bali. 
              Bandar Laundry Express offers a complete franchise package built on a 
              proven digital-first model with strong brand recognition.
            </p>
            <p className="text-white/75 leading-relaxed mb-10 text-base md:text-lg font-['Inter']">
              Whether you are an experienced investor or a first-time business owner, 
              our team will guide you every step of the way — from site selection to 
              grand opening and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* WhatsApp — primary CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold text-sm tracking-wide uppercase px-7 py-4 hover:bg-[#1ebe5a] transition-colors font-['Inter']"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Chat via WhatsApp
              </a>

              <a
                href="mailto:adithyodw@gmail.com"
                className="inline-flex items-center justify-center gap-3 border border-white/40 text-white font-semibold text-sm tracking-wide uppercase px-7 py-4 hover:bg-white/10 hover:border-white transition-colors font-['Inter']"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send an Email
              </a>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-white/15 flex flex-col sm:flex-row gap-6 text-sm text-white/60 font-['Inter']">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:adithyodw@gmail.com" className="text-white hover:text-[#F5A623] transition-colors">
                  adithyodw@gmail.com
                </a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-1">WhatsApp</div>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F5A623] transition-colors">
                  +62 812-9027-1990
                </a>
              </div>
            </div>
          </div>

          {/* Right — Benefits */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5A623] mb-6 font-['Inter']">
              Why Partner With Us
            </div>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 p-5 bg-white/8 border border-white/10 hover:bg-white/12 transition-colors"
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5A623]/15 flex items-center justify-center text-[#F5A623]">
                    {b.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1.5 font-['Inter']">{b.title}</div>
                    <div className="text-sm text-white/60 leading-relaxed font-['Inter']">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
