/*
 * BANDAR LAUNDRY EXPRESS — Instagram Feed Section
 * Design: Clean grid displaying live Instagram posts from @bandarlaundryexpress
 * Uses Instagram's embed API for real-time content.
 */

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // If script already loaded, process embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="instagram" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-14 reveal">
          <span className="section-label">Follow Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight font-['Playfair_Display']">
            Latest from Instagram
            <br />
            <span className="italic">@bandarlaundryexpress</span>
          </h2>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Instagram embed posts */}
          <blockquote
            className="instagram-media reveal"
            data-instgrm-permalink="https://www.instagram.com/bandarlaundryexpress/"
            data-instgrm-version="14"
          />
          <blockquote
            className="instagram-media reveal"
            data-instgrm-permalink="https://www.instagram.com/bandarlaundryexpress/"
            data-instgrm-version="14"
          />
          <blockquote
            className="instagram-media reveal"
            data-instgrm-permalink="https://www.instagram.com/bandarlaundryexpress/"
            data-instgrm-version="14"
          />
        </div>

        {/* CTA to Instagram */}
        <div className="mt-12 text-center reveal">
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
            Follow us on Instagram for daily updates
          </a>
        </div>
      </div>

      <style>{`
        .instagram-media {
          background: #FFF;
          border: 0;
          border-radius: 3px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.1);
          margin: 1px;
          max-width: 100%;
          min-width: 100%;
          padding: 0;
        }
      `}</style>
    </section>
  );
}
