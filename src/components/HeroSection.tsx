import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { flagshipProduct } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowUpRight, Sparkles } from "lucide-react";

const provenanceItems = [
  "SUN-CURED IN KERALA",
  "STONE-GROUND SPICES",
  "COLD-PRESSED GINGELLY OIL",
  "ZERO SYNTHETIC PRESERVATIVES",
  "SMALL-BATCH HEIRLOOM RECIPES",
];

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-[#140E0B] text-[#F9F5EE] overflow-hidden">
      {/* Subtle atmospheric spice background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Stone mortar and hand-ground Kerala spices"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#140E0B] via-[#140E0B]/85 to-[#140E0B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140E0B] via-transparent to-[#140E0B]/60" />
      </div>

      {/* Main Editorial Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Story & Typography (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 border border-secondary/40 bg-secondary/10 px-3.5 py-1.5 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-body text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">
                House Flagship · Aged Kerala Garlic Pickle
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading text-4xl sm:text-6xl lg:text-[64px] font-medium leading-[1.06] tracking-tight text-[#F9F5EE] mb-6"
            >
              The Art of Slow-Cured{" "}
              <span className="italic font-normal text-secondary">
                Kerala Garlic
              </span>{" "}
              &amp; Heirloom Preserves.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-white/75 text-sm sm:text-base max-w-xl leading-relaxed mb-9"
            >
              At <strong className="text-white font-medium">MeerasEstuff</strong>, our
              signature{" "}
              <span className="text-secondary">
                Veluthulli Achar (Whole Garlic Pickle)
              </span>{" "}
              is crafted in small earthen batches—mellowing whole, plump garlic
              cloves in cold-pressed gingelly oil, roasted Kashmiri chillies, and
              hand-pounded Malabar spices.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href={getWhatsAppUrl(
                  `Hello, I want to order your flagship ${flagshipProduct.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-body text-xs font-medium tracking-[0.16em] uppercase hover:bg-primary/90 transition-colors"
              >
                <span>Order Signature Garlic Pickle</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#signature-garlic"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/90 font-body text-xs font-medium tracking-[0.16em] uppercase hover:border-secondary hover:text-secondary transition-colors"
              >
                <span>Explore the Tasting Notes</span>
              </a>
            </motion.div>

            {/* Editorial Metadata Ledger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg"
            >
              <div>
                <p className="font-heading text-2xl sm:text-3xl text-secondary font-medium">
                  100%
                </p>
                <p className="font-body text-[11px] uppercase tracking-[0.14em] text-white/60 mt-0.5">
                  Whole Clove Garlic
                </p>
              </div>
              <div>
                <p className="font-heading text-2xl sm:text-3xl text-secondary font-medium">
                  Small Batch
                </p>
                <p className="font-body text-[11px] uppercase tracking-[0.14em] text-white/60 mt-0.5">
                  Home-Kitchen Cured
                </p>
              </div>
              <div>
                <p className="font-heading text-2xl sm:text-3xl text-secondary font-medium">
                  9 Varieties
                </p>
                <p className="font-body text-[11px] uppercase tracking-[0.14em] text-white/60 mt-0.5">
                  Veg &amp; Coastal Non-Veg
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Featured Flagship Garlic Pickle Showcase Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-[#1E1511] border border-white/15 p-5 sm:p-6">
              {/* Top corner stamp */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div>
                  <span className="font-body text-[10px] tracking-[0.22em] uppercase text-secondary block">
                    BATCH NO. 01 · HOUSE SIGNATURE
                  </span>
                  <span className="font-heading text-lg text-white/90 italic">
                    വെളുത്തുള്ളി അച്ചാർ
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary/15 border border-secondary/40 text-secondary font-body text-[10px] tracking-[0.15em] uppercase">
                  <Sparkles className="w-3 h-3" /> Most Loved
                </span>
              </div>

              {/* Product Image Frame */}
              <div className="relative aspect-[4/4] overflow-hidden bg-[#F5EFE6] mb-5">
                <img
                  src={flagshipProduct.image}
                  alt={flagshipProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption & Direct Order */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-heading text-2xl text-white font-medium leading-tight">
                    Meeras Special Garlic Pickle
                  </h2>
                  <p className="font-body text-xs text-white/60 mt-1">
                    {flagshipProduct.tastingNotes}
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl(
                    `Hello, I want to order ${flagshipProduct.name}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground font-body text-[11px] font-semibold tracking-[0.14em] uppercase hover:bg-secondary/90 transition-colors"
                >
                  <span>Order Jar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Provenance Ticker Bar */}
      <div className="relative border-t border-white/10 bg-[#0F0A08] py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] font-body tracking-[0.22em] uppercase text-white/55">
          {provenanceItems.map((item, idx) => (
            <span key={item} className="flex items-center gap-4">
              <span>{item}</span>
              {idx < provenanceItems.length - 1 && (
                <span className="text-secondary/60 hidden md:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
