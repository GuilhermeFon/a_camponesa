import Navigation from "@/src/components/Navigation";
import HeroSection from "@/src/components/HeroSection";
import AboutSection from "@/src/components/AboutSection";
import ProductsSection from "@/src/components/ProductSection";
import GallerySection from "@/src/components/GallerySection";
import ContactSection from "@/src/components/ContactSection";
import WhatsAppButton from "@/src/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-camponesa-creme">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
}
