"use client";

import { useState } from "react";
import Navigation from "@/src/components/Navigation";
import HeroSection from "@/src/components/HeroSection";
import AboutSection from "@/src/components/AboutSection";
import ProductsSection from "@/src/components/ProductSection";
import GallerySection from "@/src/components/GallerySection";
import ContactSection from "@/src/components/ContactSection";
import CallToActionSection from "@/src/components/CallToActionSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  return (
    <div className="min-h-screen bg-camponesa-creme">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <ContactSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
