import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
