import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-turmeric text-sm tracking-[0.3em] uppercase mb-4">
            Handcrafted
          </p>
          <h2 className="font-heading text-foreground text-4xl sm:text-6xl font-light">
            Our Pickle Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
