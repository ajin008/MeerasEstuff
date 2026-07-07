import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const TradeEnquirySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trade" className="py-24 sm:py-32 px-6 bg-card" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-accent-foreground mb-6">
          <Handshake className="w-8 h-8" />
        </div>

        <p className="inline-block font-body text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full bg-primary/10">
          For Businesses
        </p>

        <h2 className="font-heading text-foreground text-4xl sm:text-5xl font-bold mb-6">
          Trade & Dealer Enquiries
        </h2>

        <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
          Want to stock MeerasEstore pickles at your store, or explore
          bulk/wholesale orders? We welcome enquiries from retailers,
          distributors, and dealers looking to bring authentic Kerala
          pickles to their customers.
        </p>

        <a
          href={getWhatsAppUrl(
            "Hello, I'm interested in a trade/dealer enquiry for MeerasEstore products. Could you share more details on bulk and wholesale pricing?",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 bg-whatsapp text-whatsapp-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Trade Enquiry on WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default TradeEnquirySection;
