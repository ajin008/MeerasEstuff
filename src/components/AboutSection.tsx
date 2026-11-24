import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";

const processSteps = [
  {
    step: "I",
    title: "Sun-Drying & Hand Peeling",
    text: "Every garlic bulb, raw mango, and coastal catch is sorted by hand and sun-Rested to draw out excess moisture before curing.",
  },
  {
    step: "II",
    title: "Stone-Pounded Malabar Spice",
    text: "Whole Kashmiri chillies, brown mustard, fenugreek, and black pepper are freshly roasted and ground in small batches.",
  },
  {
    step: "III",
    title: "Slow Maturation in Gingelly Oil",
    text: "Preserved naturally in pure cold-pressed sesame oil and aged vinegar—never rushed with synthetic stabilizers.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 lg:px-10 bg-background border-b border-border overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section Index */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-border">
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">
              03 / Provenance &amp; Craft
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl text-foreground font-medium tracking-tight">
              The Kitchen Behind{" "}
              <span className="italic font-normal text-primary">
                MeerasEstuff
              </span>
            </h2>
          </div>
          <p className="font-heading text-lg italic text-muted-foreground mt-2 md:mt-0">
            Heirloom recipes from our home in Kerala
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Photo Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="bg-card border border-border p-4">
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={aboutBg}
                  alt="Hand-grinding roasted spices in a traditional Kerala stone mortar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 flex items-center justify-between text-[11px] font-body text-muted-foreground tracking-[0.14em] uppercase">
                <span>Fig 01. Hand-Ground Turmeric &amp; Chilli</span>
                <span>Kerala, India</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Copy & 3-Step Process Ledger (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <blockquote className="font-heading text-2xl sm:text-3xl italic text-foreground leading-snug border-l-2 border-primary pl-5">
              “Every jar carries the unhurried warmth of a Kerala kitchen—where
              spices are roasted by aroma, not by a factory timer.”
            </blockquote>

            <div className="space-y-4 font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-foreground font-medium">
                  MeerasEstuff
                </strong>{" "}
                began with a simple conviction: true Kerala achar cannot be
                mass-produced. Whether it is our signature{" "}
                <strong className="text-foreground font-medium">
                  Whole Garlic Pickle (Veluthulli Achar)
                </strong>
                , our festive Sadya cut-mango, or our coastal roasted dry prawn
                masala, every batch is cooked in small quantities using fresh
                produce and cold-pressed oils.
              </p>
              <p>
                We rely on time, sun, rock salt, and the natural preservative
                power of pure gingelly oil and roasted spices—delivering the
                exact depth of flavor you remember from a traditional ancestral
                dining table.
              </p>
            </div>

            {/* Numbered Craft Ledger */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              {processSteps.map((s) => (
                <div key={s.step}>
                  <span className="font-heading text-2xl italic text-primary block mb-1">
                    {s.step}.
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1.5">
                    {s.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
