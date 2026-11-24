import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Small-Batch Kitchen Curing",
    subtitle: "Never Factory Mass-Produced",
    description:
      "Each batch is cooked in controlled kitchen quantities so the tempering of mustard, curry leaves, and asafoetida stays aromatic and evenly infused.",
  },
  {
    number: "02",
    title: "Whole Hill Garlic & Fresh Catch",
    subtitle: "Uncompromised Raw Ingredients",
    description:
      "From crisp, oil-rich whole garlic cloves to coastal dry prawns and hand-cut Sadya mangoes, we source produce at peak seasonal maturity.",
  },
  {
    number: "03",
    title: "Cold-Pressed Gingelly Oil",
    subtitle: "Natural Preservation",
    description:
      "We preserve our pickles the time-honored way—using pure sesame oil, rock salt, and spice reductions rather than artificial chemical thickeners.",
  },
  {
    number: "04",
    title: "Authentic Kerala Lineage",
    subtitle: "True Sadya & Malabar Balance",
    description:
      "Balanced for the South Indian palate: deep roasted heat, bright tamarind and citrus tang, and the unmistakable warmth of roasted fenugreek.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-us"
      className="py-24 sm:py-28 px-6 lg:px-10 bg-[#18110E] text-[#F9F5EE] border-b border-white/10"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/15"
        >
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.24em] uppercase text-secondary block mb-2">
              04 / The Standard
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl text-white font-medium tracking-tight">
              What Sets{" "}
              <span className="italic font-normal text-secondary">
                MeerasEstuff
              </span>{" "}
              Apart
            </h2>
          </div>
          <p className="font-heading text-lg italic text-white/65 mt-2 md:mt-0">
            Four non-negotiable rules in our spice pantry
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 sm:p-8 border-r border-b border-white/15 flex flex-col justify-between bg-[#1D1511]/60 hover:bg-[#231915] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-3xl italic text-secondary">
                    {p.number}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.18em] uppercase text-white/45">
                    Pillar
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-medium text-white mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-[11px] uppercase tracking-[0.16em] text-secondary mb-4">
                  {p.subtitle}
                </p>
              </div>
              <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
