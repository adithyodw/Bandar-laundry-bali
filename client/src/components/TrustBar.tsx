/*
 * BANDAR LAUNDRY EXPRESS — Trust Bar
 * Design: Brand blue background. White text. Gold dividers.
 * Key trust signals displayed horizontally.
 */

const stats = [
  { value: "90 Min", label: "Express Turnaround" },
  { value: "9", label: "Branches in Bali" },
  { value: "3+", label: "Years of Service" },
  { value: "Digital", label: "Laundry Technology" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#1B3FA0] py-5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/15">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-3 text-center">
              <div className="text-xl md:text-2xl font-bold text-white font-['Playfair_Display']">
                {stat.value}
              </div>
              <div className="text-xs text-white/60 tracking-wide uppercase font-['Inter'] mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
