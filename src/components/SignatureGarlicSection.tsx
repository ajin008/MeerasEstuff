import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { flagshipProduct } from "@/data/products";
import garlicShowcaseImg from "@/assets/garlic-showcase.jpg";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowUpRight, Check } from "lucide-react";

const tastingPillars = [
  {
    label: "The Clove",
    title: "Hand-Peeled Whole Hill Garlic",
    detail:
      "We select firm, small-clove garlic bursting with natural allicin oil—never machine-crushed—so every bite retains a tender, mellow snap.",
  },
  {
    label: "The Masala",
    title: "Sun-Dried Kashmiri Chilli & Mustard",
    detail:
      "Stone-ground red chillies, crackled brown mustard seeds, roasted fenugreek (uluva), and fresh curry leaves plucked from local homesteads.",
  },
  {
    label: "The Cure",
    title: "Slow-Matured in Cold-Pressed Gingelly Oil",
    detail:
      "Cured slowly so the sharp raw bite of garlic transforms into a deep, savoury, tangy reduction that coats every grain of steamed rice.",
  },
];

const pairings = [
  "Steamed Kerala Matta Rice & Moru Curry",
  "Malabar Thalassery Dum Biriyani",
  "Hot Phulkas, Chapathi & Parotta",
  "Comforting Curd Rice & Kanji",
];

const SignatureGarlicSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="signature-garlic"
      ref={ref}
      className="py-24 sm:py-32 px-6 lg:px-10 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-border">
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">
              01 / The House Signature
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl text-foreground font-medium tracking-tight">
              Why Our{" "}
              <span className="italic font-normal text-primary">
                Garlic Pickle
              </span>{" "}
              Is Our Most Requested Jar
            </h2>
          </div>
          <p className="font-heading text-lg sm:text-xl italic text-muted-foreground mt-3 md:mt-0">
            വെളുത്തുള്ളി അച്ചാർ · Crafted in Kerala
          </p>
        </div>

        {/* Main Asymmetric Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Visual Showcase (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="bg-card border border-border p-4 sm:p-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1D1511] border border-border/60">
                <img
                  src={garlicShowcaseImg}
                  alt="MeerasEstuff Signature Garlic Pickle"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-foreground/90 backdrop-blur-sm text-background px-3 py-1 font-body text-[10px] font-medium tracking-[0.2em] uppercase">
                  #1 Bestseller · 100% Vegetarian
                </div>
              </div>

              {/* Tasting Profile Matrix */}
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border mt-5 pt-4 text-center">
                <div className="px-2">
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted-foreground block">
                    Spice Heat
                  </span>
                  <span className="font-heading text-lg font-semibold text-foreground">
                    Medium-Warm
                  </span>
                </div>
                <div className="px-2">
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted-foreground block">
                    Texture
                  </span>
                  <span className="font-heading text-lg font-semibold text-foreground">
                    Whole Clove
                  </span>
                </div>
                <div className="px-2">
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted-foreground block">
                    Oil Base
                  </span>
                  <span className="font-heading text-lg font-semibold text-foreground">
                    Pure Gingelly
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Anatomy & Tasting Notes (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-foreground leading-snug mb-4">
                “A great garlic pickle requires patience—the cloves must lose
                their raw sharpness and absorb the roasted spice oil until they
                melt on the tongue.”
              </p>
              <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                Most commercial garlic pickles rush the curing process with harsh
                synthetic acids. At{" "}
                <strong className="text-foreground font-medium">
                  MeerasEstuff
                </strong>
                , we prepare our{" "}
                <strong className="text-foreground font-medium">
                  Meeras Special Garlic Pickle
                </strong>{" "}
                the traditional Kerala home way—slowly maturing whole cloves in
                small batches so the roasted fenugreek, mustard, and Kashmiri
                chilli infuse right to the heart of every clove.
              </p>
            </div>

            {/* 3 Anatomy Pillars */}
            <div className="grid sm:grid-cols-3 gap-5 pt-4 border-t border-border">
              {tastingPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="bg-card/60 border border-border p-5"
                >
                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-primary block mb-1.5">
                    0{index + 1} · {pillar.label}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Culinary Pairings & Direct Order Bar */}
            <div className="bg-card border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-2.5">
                  Recommended Table Pairings
                </span>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {pairings.map((pairing) => (
                    <li
                      key={pairing}
                      className="font-body text-xs text-foreground flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{pairing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0">
                <a
                  href={getWhatsAppUrl(
                    `Hello, I want to order your flagship ${flagshipProduct.name}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground font-body text-xs font-medium tracking-[0.16em] uppercase hover:bg-primary/90 transition-colors"
                >
                  <span>Order Garlic Pickle</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignatureGarlicSection;
