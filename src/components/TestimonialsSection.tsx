import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  { quote: "Best homemade pickle I've tasted.", author: "Anitha R.", rating: 5 },
  { quote: "Tastes like my grandmother's recipe.", author: "Deepak M.", rating: 5 },
  { quote: "Perfect balance of spice and flavor.", author: "Priya S.", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="inline-block font-body text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full bg-primary/10">
            Voices
          </p>
          <h2 className="font-heading text-foreground text-4xl sm:text-6xl font-bold">
            What People Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto px-10 sm:px-14"
        >
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <blockquote className="h-full bg-card rounded-2xl p-8 shadow-md text-center flex flex-col items-center">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="font-body text-foreground text-lg italic leading-relaxed mb-4">
                      "{t.quote}"
                    </p>
                    <cite className="font-body text-muted-foreground text-sm not-italic tracking-wider uppercase mt-auto">
                      — {t.author}
                    </cite>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
