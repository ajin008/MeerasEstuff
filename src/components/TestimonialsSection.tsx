import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Best homemade pickle I've tasted.",
    author: "Anitha R.",
  },
  {
    quote: "Reminds me of my grandmother's cooking.",
    author: "Deepak M.",
  },
  {
    quote: "Perfect balance of spice and flavor.",
    author: "Priya S.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-turmeric text-sm tracking-[0.3em] uppercase mb-4">
            Voices
          </p>
          <h2 className="font-heading text-foreground text-4xl sm:text-6xl font-light">
            What People Say
          </h2>
        </motion.div>

        {/* Staggered, overlapping layout */}
        <div className="relative max-w-3xl mx-auto space-y-0">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative border-l-2 border-turmeric pl-6 sm:pl-8 py-6"
              style={{
                marginLeft: i === 0 ? "0" : i === 1 ? "15%" : "5%",
                marginTop: i > 0 ? "-0.5rem" : "0",
              }}
            >
              <p className="font-body text-foreground text-lg sm:text-xl italic leading-relaxed mb-2">
                "{t.quote}"
              </p>
              <cite className="font-body text-muted-foreground text-sm not-italic tracking-wider uppercase">
                — {t.author}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
