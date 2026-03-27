/*
 * BANDAR LAUNDRY EXPRESS — Branches Section
 * Design: Warm cream background. 3-column grid of branch cards.
 * Each card has gold left border, branch name, address, and Google Maps link.
 * Map pin icon in brand blue.
 */

const branches = [
  {
    name: "Kebo Iwa",
    area: "Denpasar Barat",
    address: "Jl. Kebo Iwa Utara No. 125, Denpasar Barat",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Kebo+Iwa+Utara+No.+125+Denpasar+Barat+Bali",
  },
  {
    name: "Gunung Agung",
    area: "Denpasar Barat",
    address: "Jl. Gunung Agung No. 235, Denpasar Barat",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Gunung+Agung+No.+235+Denpasar+Barat+Bali",
  },
  {
    name: "Antasura",
    area: "Denpasar",
    address: "Jl. Antasura No. 86, Denpasar (depan Br. Pengukuh)",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Antasura+No.+86+Denpasar+Bali",
  },
  {
    name: "Bedugul",
    area: "Denpasar Selatan",
    address: "Jl. Bedugul Sidakarya No. 20C, Denpasar Selatan",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Bedugul+Sidakarya+No.+20C+Denpasar+Selatan+Bali",
  },
  {
    name: "Tukad Badung",
    area: "Denpasar Selatan",
    address: "Jl. Tukad Badung No. 500X, Denpasar Selatan",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Tukad+Badung+No.+500X+Denpasar+Selatan+Bali",
  },
  {
    name: "Padma / Tonja",
    area: "Denpasar Utara",
    address: "Jl. Padma No. 20, Tonja, Denpasar Utara",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Padma+No.+20+Tonja+Denpasar+Utara+Bali",
  },
  {
    name: "Monang Maning",
    area: "Denpasar",
    address: "Jl. Gunung Rinjani No. 18, Monang Maning, Denpasar",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Gunung+Rinjani+No.+18+Monang+Maning+Denpasar+Bali",
  },
  {
    name: "Gunung Sanghyang",
    area: "Badung",
    address: "Jl. Gunung Sanghyang No. 17, Badung",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Gunung+Sanghyang+No.+17+Badung+Bali",
  },
  {
    name: "Buana Raya",
    area: "Denpasar",
    address: "Jl. Buana Raya, Denpasar",
    phone: "0817-334-128",
    maps: "https://maps.google.com/?q=Jl.+Buana+Raya+Denpasar+Bali",
  },
];

export default function BranchesSection() {
  return (
    <section id="branches" className="py-20 md:py-28 bg-[#FAF8F4]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6 reveal">
          <div>
            <span className="section-label">Our Locations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight font-['Playfair_Display']">
              Find a Branch
              <br />
              <span className="italic">Near You</span>
            </h2>
          </div>
          <div className="text-slate-500 font-['Inter'] text-sm md:text-right max-w-xs">
            <span className="text-[#1B3FA0] font-semibold text-2xl font-['Playfair_Display']">9</span> branches across Denpasar and Badung, open daily 07:00 – 22:00.
          </div>
        </div>

        {/* Branch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {branches.map((branch, i) => (
            <div
              key={branch.name}
              className="branch-card reveal bg-white p-6 shadow-sm border border-slate-50 hover:border-[#F5A623]/30"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Area badge */}
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F5A623] mb-2 font-['Inter']">
                {branch.area}
              </div>

              {/* Branch name */}
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3 font-['Playfair_Display']">
                {branch.name}
              </h3>

              {/* Address */}
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm text-slate-500 leading-relaxed font-['Inter']">
                  {branch.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 mb-5">
                <svg
                  className="flex-shrink-0 text-[#1B3FA0]"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-sm text-slate-500 font-['Inter']">{branch.phone}</span>
              </div>

              {/* Maps link */}
              <a
                href={branch.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors tracking-wide uppercase font-['Inter']"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Open in Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
