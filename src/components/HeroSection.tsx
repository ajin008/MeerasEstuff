import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Kerala spices on rustic wood"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: Spice Red to Turmeric Gold */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-secondary text-sm tracking-[0.3em] uppercase mb-6"
        >
          MeerasEstuff · Kerala, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-primary-foreground text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] mb-8"
        >
          Authentic Kerala Pickles Made With Love
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-primary-foreground/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Traditional homemade pickles crafted with fresh ingredients and authentic Kerala recipes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-lg transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            View Products
          </a>
          <a
            href="https://wa.me/75231593218"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-lg transition-colors hover:bg-primary-foreground/10"
          >
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
