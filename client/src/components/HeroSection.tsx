/*
 * BANDAR LAUNDRY EXPRESS — Hero Section
 * Design: Full-bleed store photo with dark gradient overlay.
 * Light text on dark background. Gold CTA button.
 * Uploaded store image as primary hero visual.
 */

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay — dark left, lighter right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/65 to-[#0D1B2A]/20" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />

      {/* Content */}
      <div className="relative container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs font-semibold tracking-[0.2em] uppercase font-['Inter']">
              Bali's First Digital Laundry
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 font-['Playfair_Display']">
            Premium Laundry
            <br />
            <span className="italic text-[#F5A623]">Service in Bali</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 font-['Inter'] max-w-lg">
            Fast, Clean, Reliable — Your Trusted Laundry Partner. 
            Done in 90 minutes across 9 branches in Bali.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#branches")}
              className="btn-gold"
            >
              Find Nearest Branch
            </button>
            <button
              onClick={() => scrollTo("#franchise")}
              className="btn-outline-white"
            >
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 border-t border-white/20 pt-8">
            {[
              { value: "90 Min", label: "Express Turnaround" },
              { value: "9", label: "Branches in Bali" },
              { value: "100%", label: "Digital Service" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white font-['Playfair_Display']">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 font-['Inter'] tracking-wide mt-1 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase font-['Inter'] animate-pulse">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/40 animate-bounce" style={{ animationDuration: '2s' }}>
          <path d="M8 0v16M1 9l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
