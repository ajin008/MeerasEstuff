import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

const WhatsAppCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative bg-[#140E0B] text-[#F9F5EE] py-20 sm:py-28 px-6 lg:px-10 border-b border-white/10"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium tracking-[0.24em] uppercase text-secondary block mb-4"
        >
          Direct Kitchen Dispatch · Freshly Packed
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl font-medium text-white mb-6 leading-tight"
        >
          Bring Home a Jar of Our Signature{" "}
          <span className="italic font-normal text-secondary">
            Kerala Garlic Pickle
          </span>{" "}
          Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-9 leading-relaxed"
        >
          Place your order directly with our team on WhatsApp. We pack from our
          freshest cured batch and ship straight to your doorstep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={getWhatsAppUrl(
              "Hello, I want to order MeerasEstuff Signature Garlic Pickle",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-xs font-medium tracking-[0.16em] uppercase hover:bg-primary/90 transition-colors"
          >
            <span>Order Signature Garlic Pickle</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={getWhatsAppUrl(
              "Hello, I want to see the full MeerasEstuff pickle menu & price list",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 border border-white/20 text-white font-body text-xs font-medium tracking-[0.16em] uppercase hover:border-secondary hover:text-secondary transition-colors"
          >
            <span>Request Full Price List</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
