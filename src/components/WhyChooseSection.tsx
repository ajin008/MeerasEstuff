import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Flame, Droplets, Package } from "lucide-react";

const features = [
  {
    label: "Homemade Quality",
    icon: Package,
    className: "bg-primary text-primary-foreground",
  },
  {
    label: "Authentic Kerala Taste",
    icon: Flame,
    className: "bg-secondary text-secondary-foreground",
  },
  {
    label: "Fresh Ingredients",
    icon: Droplets,
    className: "bg-accent text-accent-foreground",
  },
  {
    label: "Small Batch Preparation",
    icon: Leaf,
    className: "bg-whatsapp text-whatsapp-foreground",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 sm:py-32 px-6 bg-card" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="inline-block font-body text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full bg-primary/10">
            Our Promise
          </p>
          <h2 className="font-heading text-foreground text-4xl sm:text-6xl font-bold">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center bg-background rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${f.className}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <span className="font-heading text-foreground text-lg sm:text-xl font-bold block leading-tight">
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
