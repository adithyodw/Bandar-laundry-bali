/*
 * BANDAR LAUNDRY EXPRESS — Services Section
 * Design: White background. 4-column grid on desktop.
 * Thin line-style icons in brand blue. Gold accent on hover.
 * Elegant card layout with subtle border and hover lift.
 */

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="13"/>
        <path d="M16 8v8l4 2"/>
        <path d="M7 16a9 9 0 0 1 9-9"/>
      </svg>
    ),
    title: "Express Laundry",
    subtitle: "90 Minutes",
    desc: "Our signature service. Drop off your clothes and collect them fresh, clean, and neatly folded within 90 minutes.",
    highlight: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="20" rx="2"/>
        <circle cx="16" cy="16" r="6"/>
        <circle cx="16" cy="16" r="2"/>
        <path d="M4 10h24"/>
      </svg>
    ),
    title: "Regular Laundry",
    subtitle: "Standard Care",
    desc: "Full wash, dry, and fold service with careful attention to fabric types and garment care instructions.",
    highlight: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26h20"/>
        <path d="M8 26V14l8-8 8 8v12"/>
        <path d="M12 26v-6h8v6"/>
        <path d="M6 14h20"/>
      </svg>
    ),
    title: "Ironing Service",
    subtitle: "Crisp & Neat",
    desc: "Professional ironing for shirts, trousers, dresses, and formal wear. Delivered wrinkle-free and ready to wear.",
    highlight: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="26" height="18" rx="2"/>
        <path d="M3 14h26"/>
        <path d="M10 8V5"/>
        <path d="M22 8V5"/>
        <path d="M8 20h4"/>
        <path d="M14 20h4"/>
        <path d="M20 20h4"/>
      </svg>
    ),
    title: "Commercial Laundry",
    subtitle: "Hotels & Villas",
    desc: "Bulk laundry solutions for hotels, villas, restaurants, and spas. Reliable, consistent, and scalable to your needs.",
    highlight: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-14 reveal">
          <span className="section-label">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight font-['Playfair_Display']">
            Everything Your
            <br />
            <span className="italic">Wardrobe Needs</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card reveal p-7 border ${
                service.highlight
                  ? "bg-[#1B3FA0] border-[#1B3FA0] text-white"
                  : "bg-white border-slate-100 text-[#0D1B2A]"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className={`mb-6 ${
                  service.highlight ? "text-[#F5A623]" : "text-[#1B3FA0]"
                }`}
              >
                {service.icon}
              </div>

              {/* Subtitle */}
              <div
                className={`text-xs font-semibold tracking-[0.15em] uppercase mb-2 font-['Inter'] ${
                  service.highlight ? "text-[#F5A623]" : "text-[#F5A623]"
                }`}
              >
                {service.subtitle}
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-3 font-['Playfair_Display'] ${
                  service.highlight ? "text-white" : "text-[#0D1B2A]"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed font-['Inter'] ${
                  service.highlight ? "text-white/75" : "text-slate-500"
                }`}
              >
                {service.desc}
              </p>

              {/* Bottom rule */}
              <div
                className={`mt-6 h-px w-8 ${
                  service.highlight ? "bg-[#F5A623]" : "bg-[#1B3FA0]/20"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
