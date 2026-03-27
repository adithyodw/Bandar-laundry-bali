import type { Metadata } from "next";
import Link from "next/link";
import { WA_LINK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Laundry Price in Bali 2025 — Complete Price Guide | Bandar Laundry Express",
  description:
    "How much does laundry cost in Bali? Complete 2025 price guide for laundry services in Bali. Bandar Laundry Express pricing: Self Service Rp 15.000 / Mesin and Drop Off Rp 45.000 / 5kg.",
};

export default function LaundryPriceBaliPage() {
  return (
    <>
      <section className="relative bg-[#0D1B2A] pt-32 pb-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg')] bg-cover bg-center" />
        <div className="relative container max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Laundry Price Bali</span>
          </nav>
          <span className="section-label">Price Guide 2025</span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Laundry Prices
            <br />
            <span className="italic text-[#F5A623]">in Bali 2025</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            A complete, transparent guide to laundry costs in Bali — from budget to premium services, what&apos;s included, and how to get the best value.
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-brand">
              <h2>How Much Does Laundry Cost in Bali?</h2>
              <p>
                Laundry prices in Bali vary significantly depending on location, service type, and quality. At Bandar Laundry Express, we keep pricing simple with two main options: Self Service and Drop Off package.
              </p>

              <h2>Bandar Laundry Express Price List (2025)</h2>
              <p>Here is our latest professional price list and service scope:</p>

              <div className="not-prose overflow-hidden border border-slate-200 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1B3FA0] text-white">
                      <th className="text-left px-4 py-3">Service</th>
                      <th className="text-left px-4 py-3">Price</th>
                      <th className="text-left px-4 py-3">Turnaround</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { service: "Self Service", price: "Rp 15.000 / Mesin", turnaround: "45 min wash + 45 min dry (~90 min)" },
                      { service: "Drop Off (Wash, Dry, Fold)", price: "Rp 45.000 / 5kg", turnaround: "Estimated 3 hours (queue based)" },
                      { service: "Dry Clean / Item Care", price: "By item and treatment", turnaround: "~2 days (item dependent)" },
                      { service: "Ironing", price: "Rp 35.000 / 5kg", turnaround: "Estimated 1 x 24 hours" },
                    ].map((row, i) => (
                      <tr key={row.service} className={i % 2 === 0 ? "bg-[#FAF8F4]" : "bg-white"}>
                        <td className="px-4 py-3 font-medium text-[#0D1B2A]">{row.service}</td>
                        <td className="px-4 py-3 text-[#1B3FA0] font-semibold">{row.price}</td>
                        <td className="px-4 py-3 text-slate-600">{row.turnaround}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Laundry Prices by Area in Bali</h2>
              <p>
                Prices can vary across different parts of Bali. Tourist-heavy areas like Seminyak, Kuta, and Canggu sometimes charge a premium. In Denpasar and suburban areas, you will generally find more competitive rates.
              </p>
              <p>
                Bandar Laundry Express maintains consistent pricing across all 9 branches regardless of location — what you pay in Denpasar is the same as what you pay in Badung.
              </p>

              <h2>Detailed Service Information</h2>
              <h3>1) Self Service (Wash Your Own)</h3>
              <ul>
                <li>Machine rental system: washer Rp 15.000 and dryer Rp 15.000 (no weight calculation).</li>
                <li>Maximum load follows the fill line marked on each machine.</li>
                <li>Includes free detergent, fragrance, and plastic packing.</li>
                <li>Estimated process: 45 minutes washing + 45 minutes drying (approximately 90 minutes total).</li>
              </ul>

              <h3>2) Drop Off (Wash, Dry, Fold - No Ironing)</h3>
              <ul>
                <li>Handled end-to-end by our laundry team.</li>
                <li>Estimated completion is approximately 3 hours, counted from receipt/processing start time (queue based).</li>
                <li>Pricing is Rp 45.000 per 5kg and applies in 5kg increments.</li>
              </ul>

              <h3>3) Dry Clean (Item Service)</h3>
              <ul>
                <li>Estimated completion is approximately 2 days, depending on item type.</li>
                <li>Handled with specific treatment methods for delicate or special-care items.</li>
              </ul>

              <h3>4) Ironing</h3>
              <ul>
                <li>Estimated completion is 1 x 24 hours, counted from receipt creation time.</li>
                <li>Pricing is Rp 35.000 per 5kg and applies in 5kg increments.</li>
              </ul>

              <h2>Tips for Getting the Best Laundry Value in Bali</h2>
              <ul>
                    <li>Use Self Service when you need fastest turnaround and direct control.</li>
                    <li>Use Drop Off for convenience and predictable all-in pricing.</li>
                <li>Ask about monthly packages if you are a long-term resident</li>
                <li>Commercial accounts at hotels and villas get the best rates</li>
              </ul>

              <div className="not-prose mt-10 bg-[#1B3FA0] p-8 text-white">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Get a Price Quote Today
                </h3>
                <p className="text-white/75 mb-5">
                  WhatsApp us with your laundry volume and we&apos;ll give you an instant, transparent quote — no surprises.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex">
                  Get a Quote on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#FAF8F4] p-5 border border-slate-200">
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-4">Price Summary</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-600">Self Service</span>
                      <span className="font-semibold text-[#1B3FA0]">Rp 15.000 / Mesin</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-600">Drop Off</span>
                      <span className="font-semibold text-[#1B3FA0]">Rp 45.000 / 5kg</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-600">Ironing</span>
                      <span className="font-semibold text-[#1B3FA0]">Rp 35.000 / 5kg</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-600">Dry Clean</span>
                      <span className="font-semibold text-[#1B3FA0]">By item</span>
                    </li>
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa w-full justify-center mt-5 block text-center">
                    Order Now
                  </a>
                </div>

                <div className="bg-white p-5 border border-slate-200">
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-4">Related</div>
                  <nav className="space-y-2">
                    <Link href="/express-laundry-bali" className="block text-sm text-[#1B3FA0] hover:text-[#F5A623] transition-colors py-1 border-b border-slate-100">Express Laundry Bali →</Link>
                    <Link href="/regular-laundry-bali" className="block text-sm text-[#1B3FA0] hover:text-[#F5A623] transition-colors py-1 border-b border-slate-100">Regular Laundry Bali →</Link>
                    <Link href="/faq-laundry-bali" className="block text-sm text-[#1B3FA0] hover:text-[#F5A623] transition-colors py-1">FAQ — Laundry Bali →</Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
