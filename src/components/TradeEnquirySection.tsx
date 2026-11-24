import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const TradeEnquirySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trade"
      className="py-24 sm:py-28 px-6 lg:px-10 bg-card border-b border-border"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto bg-background border border-border p-8 sm:p-14 grid lg:grid-cols-12 gap-10 items-center"
      >
        <div className="lg:col-span-8">
          <span className="font-body text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">
            06 / Retail, Export &amp; Hospitality
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl text-foreground font-medium mb-4 leading-tight">
            Stock{" "}
            <span className="italic font-normal text-primary">
              MeerasEstuff
            </span>{" "}
            at Your Boutique Grocer or Restaurant
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
            We partner with specialty food stores, Kerala supermarkets,
            boutique hotels, and catering kitchens looking for authentic,
            small-batch{" "}
            <strong className="text-foreground font-medium">
              Garlic Pickle
            </strong>{" "}
            and coastal preserves. Custom bulk jars and wholesale trade pricing
            available on request.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end">
          <a
            href={getWhatsAppUrl(
              "Hello, I'm interested in a trade/dealer enquiry for MeerasEstuff products (including Signature Garlic Pickle). Could you share wholesale details?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-foreground text-background font-body text-xs font-medium tracking-[0.16em] uppercase hover:bg-primary transition-colors"
          >
            <span>Request Trade Ledger</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <span className="font-body text-[11px] text-muted-foreground tracking-wide">
            Direct dispatch from Kerala · Pan-India &amp; Gulf inquiries welcome
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default TradeEnquirySection;
