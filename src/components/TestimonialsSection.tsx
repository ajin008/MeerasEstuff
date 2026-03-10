import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { quote: "Best homemade pickle I've tasted.", author: "Anitha R." },
  { quote: "Tastes like my grandmother's recipe.", author: "Deepak M." },
  { quote: "Perfect balance of spice and flavor.", author: "Priya S." },
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
          <p className="font-body text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Voices
          </p>
          <h2 className="font-heading text-foreground text-4xl sm:text-6xl font-semibold">
            What People Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-card rounded-lg p-8 shadow-sm text-center"
            >
              <p className="font-body text-foreground text-lg italic leading-relaxed mb-4">
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
