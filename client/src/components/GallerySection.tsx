/*
 * BANDAR LAUNDRY EXPRESS — Gallery Section
 * Design: White background. Editorial asymmetric grid.
 * Uploaded store photo + generated images.
 * Hover zoom animation on all gallery items.
 */

const STORE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-hero-bg-KwCFy4qmDuMRyRFtgQMXbw.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-about-img-4vFHLe9vbvRbEbaKU34zBB.webp";
const MACHINES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-gallery-machines-GjxuSiEEZH3rcCbAEinE2T.webp";
const PROCESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-gallery-process-ek5PpppnEkTKfYsXfds2kA.webp";

const galleryItems = [
  { src: STORE_IMG, alt: "Bandar Laundry Express store interior with branded washing machines", span: "lg:col-span-2 lg:row-span-2" },
  { src: MACHINES_IMG, alt: "Professional washing machines at Bandar Laundry Express", span: "" },
  { src: PROCESS_IMG, alt: "Professional laundry attendant folding garments", span: "" },
  { src: ABOUT_IMG, alt: "Freshly laundered white garments neatly folded", span: "" },
  { src: HERO_IMG, alt: "Bandar Laundry Express premium store ambiance", span: "lg:col-span-2" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-14 reveal">
          <span className="section-label">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight font-['Playfair_Display']">
            A Glimpse Inside
            <br />
            <span className="italic">Our World</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base leading-relaxed font-['Inter']">
            Cleanliness, professionalism, and a commitment to quality — visible in every corner of every branch.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery-item reveal overflow-hidden bg-slate-100 ${item.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center reveal">
          <a
            href="https://www.instagram.com/bandarlaundryexpress/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors font-['Inter'] tracking-wide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow us on Instagram @bandarlaundryexpress
          </a>
        </div>
      </div>
    </section>
  );
}
