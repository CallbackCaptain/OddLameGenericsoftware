import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/lib/animations";

const testimonials = [
  { image: "/testimonial-0.svg", alt: "Отзыв Виктора Романова" },
  { image: "/testimonial-1.svg", alt: "Отзыв Александра Дроздова" },
];

export const TestimonialsSection = (): JSX.Element => {
  const [page, setPage] = useState(0);

  return (
    <section id="testimonials" className="w-full px-4 md:px-10 py-10 md:py-16">
      <FadeIn>
        <div className="flex items-start justify-between mb-6 md:mb-8">
          <div>
            <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
              Отзывы клиентов
            </h2>
            <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
              Уже доверились мне
            </span>
          </div>

          <div className="hidden md:flex gap-3 mt-4">
            <motion.button
              onClick={() => setPage((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
              className="w-[50px] h-[50px] rounded-full border border-[#d3b85b] flex items-center justify-center text-[#d3b85b] transition-colors"
              whileHover={{ scale: 1.1, backgroundColor: "#d3b85b", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              &larr;
            </motion.button>
            <motion.button
              onClick={() => setPage((p) => (p === testimonials.length - 1 ? 0 : p + 1))}
              className="w-[50px] h-[50px] rounded-full bg-[#d3b85b] flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, backgroundColor: "#c4a94c" }}
              whileTap={{ scale: 0.95 }}
            >
              &rarr;
            </motion.button>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <img
              src={t.image}
              alt={t.alt}
              className="w-full h-auto rounded-[4px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
