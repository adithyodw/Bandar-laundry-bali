/*
 * BANDAR LAUNDRY EXPRESS — Home Page
 * Design Direction: Tropical Luxury Editorial
 * Assembles all sections in order with scroll reveal.
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BranchesSection from "@/components/BranchesSection";
import GallerySection from "@/components/GallerySection";
import FranchiseSection from "@/components/FranchiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramFeed from "@/components/InstagramFeed";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  // Re-run reveal on route mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <BranchesSection />
        <GallerySection />
        <FranchiseSection />
        <TestimonialsSection />
        <GoogleReviews />
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
