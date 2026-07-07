import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { products, type ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProductCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Veg", value: "veg" },
  { label: "Non-Veg", value: "non-veg" },
  { label: "Sweet & Tangy", value: "sweet-tangy" },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<ProductCategory | "all">("all");

  const filteredProducts = useMemo(
    () =>
      activeFilter === "all"
        ? products
        : products.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="products" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="inline-block font-body text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full bg-primary/10">
            Handcrafted
          </p>
          <h2 className="font-heading text-foreground text-4xl sm:text-6xl font-bold">
            Our Pickle Collection
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              className={cn(
                "px-5 py-2 rounded-full font-body text-sm font-bold uppercase tracking-wide transition-colors border-2",
                activeFilter === f.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground/70 border-border hover:border-primary hover:text-primary",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
