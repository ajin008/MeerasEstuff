import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index % 3 * 0.15 }}
      className="group"
    >
      {/* Image container — "silhouette reveal" on hover */}
      <div className="relative aspect-square overflow-hidden bg-foreground/5 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover brightness-[0.3] group-hover:brightness-100 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
        />
        {/* Warm light overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-turmeric/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Text — fades in on hover */}
      <div className="transition-opacity duration-500 opacity-60 group-hover:opacity-100">
        <h3 className="font-heading text-foreground text-xl font-normal mb-1">
          {product.name}
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-3 leading-relaxed">
          {product.description}
        </p>
        <a
          href="https://wa.me/75231593218"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-primary text-xs font-bold tracking-wider uppercase hover:underline"
        >
          Order on WhatsApp →
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
