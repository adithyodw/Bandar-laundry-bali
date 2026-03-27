/*
 * BANDAR LAUNDRY EXPRESS — Testimonials Section
 * Design: Warm cream background. Clean minimal card layout.
 * Stars in gold. Focus on trust, reliability, service quality.
 */

const testimonials = [
  {
    name: "Dewi Rahayu",
    role: "Regular Customer, Denpasar",
    quote: "I have been using Bandar Laundry Express for over a year. The 90-minute service is genuinely impressive — my clothes always come back perfectly clean and neatly folded.",
    stars: 5,
  },
  {
    name: "Michael Hartmann",
    role: "Villa Guest, Bali",
    quote: "As a frequent visitor to Bali, finding a reliable laundry service was always a challenge. Bandar Laundry Express solved that completely. Professional, fast, and trustworthy.",
    stars: 5,
  },
  {
    name: "Sari Wulandari",
    role: "Hotel Manager, Badung",
    quote: "We use Bandar Laundry Express for all our hotel linen and guest laundry. Their commercial service is consistent, timely, and handled with great care. Highly recommended.",
    stars: 5,
  },
  {
    name: "Agus Pratama",
    role: "Restaurant Owner, Denpasar",
    quote: "The team at Bandar Laundry is professional and responsive. Our table linens and staff uniforms are always returned in perfect condition. A true business partner.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF8F4]">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-14 reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight font-['Playfair_Display']">
            What Our Customers
            <br />
            <span className="italic">Are Saying</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal bg-white p-7 border border-slate-100 hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6 font-['Inter'] italic">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="h-px w-8 bg-[#F5A623] mb-4" />

              {/* Author */}
              <div>
                <div className="font-semibold text-[#0D1B2A] text-sm font-['Inter']">{t.name}</div>
                <div className="text-xs text-slate-400 mt-0.5 font-['Inter']">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
