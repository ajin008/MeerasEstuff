import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const message = `Hello, I want to order ${product.name}`;
  const whatsappUrl = `https://wa.me/919496987436?text=${encodeURIComponent(
    message
  )}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="font-heading text-foreground text-xl font-semibold mb-1">
          {product.name}
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-primary text-primary-foreground font-body text-xs font-bold tracking-wider uppercase rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
