import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Fixed-feel parallax background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={aboutBg}
          alt="Hands working with spices"
          className="w-full h-full object-cover opacity-15 grayscale"
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-body text-turmeric text-sm tracking-[0.3em] uppercase mb-4"
        >
          Our Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-foreground text-4xl sm:text-6xl font-light mb-10"
        >
          The Story of MeerasEstuff
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 font-body text-muted-foreground text-base sm:text-lg leading-relaxed"
        >
          <p>
            MeerasEstuff is a small-scale homemade pickle brand based in Kerala.
            Our pickles are made with fresh ingredients, authentic spices, and
            traditional recipes that bring the true taste of Kerala to every meal.
          </p>
          <p>
            Every jar carries the warmth of a Kerala kitchen — the patience of
            sun-drying, the precision of hand-ground masala, and the love of a
            recipe perfected over generations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
