import { motion } from "framer-motion";
import type { Product, ProductCategory } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

const categoryLabels: Record<ProductCategory, { label: string; dotColor: string }> = {
  veg: { label: "Vegetarian", dotColor: "bg-accent" },
  "non-veg": { label: "Coastal & Meat", dotColor: "bg-primary" },
  "sweet-tangy": { label: "Sweet & Tangy", dotColor: "bg-secondary" },
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  const whatsappUrl = getWhatsAppUrl(`Hello, I want to order ${product.name}`);
  const cat = categoryLabels[product.category];

  // Flagship Garlic Pickle gets a prominent editorial 2-column showcase card
  if (product.isFlagship) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="sm:col-span-2 lg:col-span-3 bg-[#18110E] text-[#F9F5EE] border border-foreground/20 overflow-hidden grid md:grid-cols-12"
      >
        {/* Image Frame (5 cols) */}
        <div className="md:col-span-5 relative aspect-square md:aspect-auto bg-[#F5EFE6] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1 font-body text-[10px] font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3 h-3" />
            <span>{product.badge || "House Signature"}</span>
          </div>
        </div>

        {/* Editorial Details (7 cols) */}
        <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
              <span className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Flagship Release · {cat.label}
              </span>
              {product.malayalamName && (
                <span className="font-heading text-sm italic text-white/65">
                  {product.malayalamName}
                </span>
              )}
            </div>

            <h3 className="font-heading text-2xl sm:text-4xl font-medium text-white mb-3 leading-tight">
              {product.name}
            </h3>

            <p className="font-body text-white/75 text-sm sm:text-base leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Tasting & Pairing Ledger */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-8">
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/45 block mb-1">
                  Flavor Profile
                </span>
                <span className="font-body text-xs text-secondary font-medium">
                  {product.tastingNotes}
                </span>
              </div>
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/45 block mb-1">
                  Best Paired With
                </span>
                <span className="font-body text-xs text-white/85">
                  {product.pairing}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <span className="font-heading text-base italic text-white/70">
              {product.tagline}
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-secondary text-secondary-foreground font-body text-xs font-semibold tracking-[0.16em] uppercase hover:bg-secondary/90 transition-colors"
            >
              <span>Order Signature Jar</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-background border border-border flex flex-col justify-between hover:border-foreground/40 transition-colors duration-300"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="px-5 py-3 border-b border-border flex items-center justify-between text-[10px] font-body tracking-[0.18em] uppercase text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className={cn("w-1.5 h-1.5 rounded-full", cat.dotColor)} />
            {cat.label}
          </span>
          {product.badge ? (
            <span className="text-primary font-semibold">{product.badge}</span>
          ) : (
            <span>Small Batch</span>
          )}
        </div>

        {/* Square Image Container */}
        <div className="relative aspect-square overflow-hidden bg-card border-b border-border">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Editorial Body */}
        <div className="p-5 sm:p-6">
          {product.malayalamName && (
            <p className="font-heading text-xs italic text-muted-foreground mb-1">
              {product.malayalamName}
            </p>
          )}
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-2 leading-snug">
            {product.name}
          </h3>
          <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
            {product.description}
          </p>
        </div>
      </div>

      {/* Bottom Spec & Order Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-border/70 bg-card/40">
        <div className="mb-3.5">
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted-foreground block">
            Tasting Notes
          </span>
          <span className="font-body text-xs font-medium text-foreground">
            {product.tastingNotes}
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-between px-4 py-2.5 border border-foreground/20 bg-background text-foreground font-body text-[11px] font-medium tracking-[0.16em] uppercase group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors"
        >
          <span>Inquire &amp; Order</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.article>
  );
};

export default ProductCard;
