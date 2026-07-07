import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const WhatsAppCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-gradient-cta py-24 sm:py-32 px-6 overflow-hidden" ref={ref}>
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-24 -right-10 w-80 h-80 rounded-full bg-secondary/20" />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-white text-4xl sm:text-6xl font-bold mb-6"
        >
          Order Fresh Homemade Pickles Directly From Us
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          href={getWhatsAppUrl("Hello, I want to order MeerasEstore pickles")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-whatsapp text-whatsapp-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full shadow-xl transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Chat on WhatsApp to Order
        </motion.a>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
