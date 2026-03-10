import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { label: "HOMEMADE", sublabel: "Quality" },
  { label: "AUTHENTIC", sublabel: "Kerala Taste" },
  { label: "FRESH", sublabel: "Ingredients" },
  { label: "SMALL BATCH", sublabel: "Preparation" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-spice-brown py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-turmeric text-sm tracking-[0.3em] uppercase mb-4">
            Our Promise
          </p>
          <h2 className="font-heading text-spice-brown-foreground text-4xl sm:text-6xl font-light">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <span className="font-heading text-spice-brown-foreground text-3xl sm:text-5xl font-light block leading-none">
                {f.label}
              </span>
              <span className="font-body text-turmeric text-xs tracking-[0.2em] uppercase mt-2 block">
                {f.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
