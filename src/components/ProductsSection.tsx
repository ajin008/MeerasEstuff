import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { products, type ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProductCategory | "all"; count: number }[] = [
  { label: "Complete Pantry", value: "all", count: products.length },
  {
    label: "Vegetarian & Garlic",
    value: "veg",
    count: products.filter((p) => p.category === "veg").length,
  },
  {
    label: "Coastal & Meat",
    value: "non-veg",
    count: products.filter((p) => p.category === "non-veg").length,
  },
  {
    label: "Sweet & Tangy",
    value: "sweet-tangy",
    count: products.filter((p) => p.category === "sweet-tangy").length,
  },
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
    <section id="products" className="py-24 sm:py-32 px-6 lg:px-10 bg-card/50 border-b border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header & Filter Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-6 border-b border-border"
        >
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">
              02 / Small-Batch Pantry
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl text-foreground font-medium tracking-tight">
              The Complete{" "}
              <span className="italic font-normal text-primary">
                MeerasEstuff
              </span>{" "}
              Collection
            </h2>
          </div>

          {/* Minimal Tab Filter */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                className={cn(
                  "px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.14em] transition-all border",
                  activeFilter === f.value
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-foreground/75 border-border hover:border-foreground/50",
                )}
              >
                <span>{f.label}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({f.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
