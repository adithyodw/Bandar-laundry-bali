/*
 * BANDAR LAUNDRY EXPRESS — About Section
 * Design: Warm cream background. Asymmetric 60/40 split.
 * Left: text content. Right: editorial photo of folded laundry.
 * Brand blue accents on key stats.
 */

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-about-img-4vFHLe9vbvRbEbaKU34zBB.webp";

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "90-Minute Express",
    desc: "Bali's fastest digital laundry — your garments cleaned, dried, and ready in just 90 minutes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Professional Garment Care",
    desc: "Advanced machines and trained staff ensure every item is treated with precision and care.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "9 Branches Across Bali",
    desc: "Strategically located across Denpasar and Badung, always close to where you are.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F4]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3 reveal">
            <span className="section-label">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight mb-6 font-['Playfair_Display']">
              Bali's First Digital
              <br />
              <span className="italic">Laundry Experience</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg font-['Inter']">
              Bandar Laundry Express was founded with a singular vision: to bring a premium, 
              hassle-free laundry experience to the people of Bali. As the island's first 
              digital laundry service, we combine cutting-edge technology with genuine care 
              for every garment entrusted to us.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10 text-base md:text-lg font-['Inter']">
              Whether you are a local resident, a visiting traveler, or a hospitality business 
              seeking a reliable commercial laundry partner — Bandar Laundry Express delivers 
              consistency, speed, and quality that you can trust.
            </p>

            {/* Highlights */}
            <div className="space-y-5">
              {highlights.map((h, i) => (
                <div key={h.title} className="flex items-start gap-4 p-3 rounded-sm hover:bg-slate-50 transition-colors duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1B3FA0]/10 flex items-center justify-center text-[#1B3FA0]">
                    {h.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D1B2A] mb-1 font-['Inter']">{h.title}</div>
                    <div className="text-sm text-slate-500 leading-relaxed font-['Inter']">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — 2 cols */}
          <div className="lg:col-span-2 reveal">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#F5A623]/30 rounded-sm" />
              <img
                src={ABOUT_IMG}
                alt="Freshly laundered garments — Bandar Laundry Express"
                className="w-full h-[480px] object-cover rounded-sm shadow-xl relative z-10"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-[#1B3FA0] text-white px-5 py-4 shadow-lg">
                <div className="text-2xl font-bold font-['Playfair_Display']">9+</div>
                <div className="text-xs tracking-widest uppercase font-['Inter'] text-white/80">Branches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
