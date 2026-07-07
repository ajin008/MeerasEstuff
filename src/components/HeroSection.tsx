import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const marqueeItems = [
  "HANDMADE IN KERALA",
  "NO PRESERVATIVES",
  "SMALL BATCH",
  "AUTHENTIC RECIPES",
];

const HeroSection = () => {
  return (
    <section id="home" className="relative flex flex-col overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Kerala spices on rustic wood"
            className="w-full h-full object-cover"
          />
          {/* Bold diagonal chili-red to turmeric-gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block font-body text-white text-xs font-bold tracking-[0.3em] uppercase mb-6 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30"
          >
            🌶 MeerasEstore · Kerala, India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-heading text-white text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] mb-8 drop-shadow-lg"
          >
            Authentic Kerala Pickles Made With Love
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-body text-white/90 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Traditional homemade pickles crafted with fresh ingredients and
            authentic Kerala recipes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#products"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full shadow-lg transition-transform hover:scale-105"
            >
              View Products
            </a>
            <a
              href={getWhatsAppUrl("Hello, I want to order MeerasEstore pickles")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-whatsapp text-whatsapp-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee trust strip */}
      <div className="relative bg-foreground py-3 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="font-body text-background text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mx-6 flex items-center gap-6"
              >
                {item}
                <span className="text-secondary">✦</span>
              </span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
