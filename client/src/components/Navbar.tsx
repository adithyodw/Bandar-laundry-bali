/*
 * BANDAR LAUNDRY EXPRESS — Navbar
 * Design: Transparent on hero, white with shadow on scroll.
 * Brand blue logo text, gold hover on nav links.
 */

import { useEffect, useState } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-logo_110b4814.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Branches", href: "#branches" },
  { label: "Gallery", href: "#gallery" },
  { label: "Kemitraan", href: "#franchise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3"
        >
          <img
            src={LOGO_URL}
            alt="Bandar Laundry Express"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-slate-700 hover:text-[#F5A623]"
                  : "text-white/90 hover:text-[#F5A623]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#franchise")}
            className="btn-gold text-xs px-5 py-2.5"
          >
            Hubungi Kami
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-slate-800" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-slate-800" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-slate-800" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium text-slate-700 hover:text-[#1B3FA0] py-3 border-b border-slate-50 last:border-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#franchise")}
              className="btn-gold mt-3 text-center"
            >
              Hubungi Kami
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
