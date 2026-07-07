import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TradeEnquirySection from "@/components/TradeEnquirySection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <TradeEnquirySection />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
