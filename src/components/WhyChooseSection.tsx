import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Flame, Droplets, Package } from "lucide-react";

const features = [
  { label: "Homemade Quality", icon: Package },
  { label: "Authentic Kerala Taste", icon: Flame },
  { label: "Fresh Ingredients", icon: Droplets },
  { label: "Small Batch Preparation", icon: Leaf },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 px-6 bg-card" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Our Promise
          </p>
          <h2 className="font-heading text-foreground text-4xl sm:text-6xl font-semibold">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <span className="font-heading text-foreground text-lg sm:text-xl font-semibold block leading-tight">
                  {f.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
