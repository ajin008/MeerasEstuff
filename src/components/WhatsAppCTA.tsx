import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhatsAppCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-primary py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-primary-foreground text-4xl sm:text-6xl font-semibold mb-6"
        >
          Order Fresh Homemade Pickles Directly From Us
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="https://wa.me/9496987436"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-lg transition-opacity hover:opacity-90"
        >
          Chat on WhatsApp to Order
        </motion.a>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
