import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="absolute -inset-4 bg-secondary/30 rounded-3xl -rotate-3 -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10" />
          <img
            src={aboutBg}
            alt="Hands working with spices"
            className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
        </motion.div>

        {/* Text side */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block font-body text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full bg-primary/10"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-foreground text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
          >
            The Story of{" "}
            <span className="text-primary">MeerasEstore</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="font-body text-foreground text-lg sm:text-xl font-semibold italic leading-relaxed border-l-4 border-secondary pl-5">
              "Every jar carries the warmth of a Kerala kitchen."
            </p>
            <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
              MeerasEstore is a small-scale homemade pickle brand based in Kerala.
              Our pickles are made with fresh ingredients, authentic spices, and
              traditional recipes that bring the true taste of Kerala to every meal.
            </p>
            <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
              The patience of sun-drying, the precision of hand-ground masala,
              and the love of a recipe perfected over generations — all in
              every jar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
