import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Garlic Pickle is extraordinary. The cloves are soft right to the center without any harsh raw bite, and the roasted spice oil tastes exactly like my grandmother's earthenware jar in Thrissur.",
    author: "Anitha R.",
    location: "Kochi, Kerala",
    product: "Meeras Special Garlic Pickle",
    rating: 5,
  },
  {
    quote:
      "We ordered the Garlic Pickle and the Hot & Sweet Dates-Lemon pickle for a family biriyani lunch. Every single guest asked where the jars came from. Truly homemade quality.",
    author: "Deepak M.",
    location: "Bengaluru",
    product: "Garlic & Dates-Lemon Pickle",
    rating: 5,
  },
  {
    quote:
      "You can immediately tell they use real cold-pressed gingelly oil and freshly ground masala. The Roasted Dry Prawn mix and Garlic Pickle have become permanent staples on our dining table.",
    author: "Priya S.",
    location: "Trivandrum, Kerala",
    product: "Garlic Pickle & Prawn Masala",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 px-6 lg:px-10 bg-background border-b border-border"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-border"
        >
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">
              05 / From Common Tables
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl text-foreground font-medium tracking-tight">
              Notes From Our{" "}
              <span className="italic font-normal text-primary">Patrons</span>
            </h2>
          </div>
          <p className="font-heading text-lg italic text-muted-foreground mt-2 md:mt-0">
            Loved by home cooks &amp; pickle connoisseurs across South India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-card border border-border p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <span className="font-body text-[10px] tracking-[0.16em] uppercase text-primary font-semibold">
                    {t.product}
                  </span>
                </div>

                <p className="font-heading text-xl sm:text-2xl text-foreground leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>

              <footer className="pt-4 border-t border-border/70 flex items-center justify-between">
                <cite className="font-body text-xs font-semibold not-italic tracking-[0.14em] uppercase text-foreground">
                  {t.author}
                </cite>
                <span className="font-body text-xs text-muted-foreground">
                  {t.location}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
