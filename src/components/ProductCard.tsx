import { motion } from "framer-motion";
import type { Product, ProductCategory } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "./icons/WhatsAppIcon";

interface ProductCardProps {
  product: Product;
  index: number;
}

const categoryStyles: Record<ProductCategory, { label: string; className: string }> = {
  veg: { label: "Veg", className: "bg-accent text-accent-foreground" },
  "non-veg": { label: "Non-Veg", className: "bg-primary text-primary-foreground" },
  "sweet-tangy": { label: "Sweet & Tangy", className: "bg-secondary text-secondary-foreground" },
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  const whatsappUrl = getWhatsAppUrl(`Hello, I want to order ${product.name}`);
  const badge = categoryStyles[product.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-border"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <span
          className={cn(
            "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md",
            badge.className,
          )}
        >
          {badge.label}
        </span>
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="font-heading text-foreground text-xl font-bold mb-1">
          {product.name}
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-whatsapp text-whatsapp-foreground font-body text-xs font-bold tracking-wider uppercase rounded-full transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
