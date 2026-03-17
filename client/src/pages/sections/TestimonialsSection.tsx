import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/lib/animations";

const testimonials = [
  {
    text: "Обращались к Надежде по поводу налоговой проверки. Всё объяснила простыми словами, подготовила документы и сопровождала до самого решения. Проверка закончилась без штрафов, хотя изначально сумма была внушительная. Спокойная, чёткая и надёжная — теперь на абонентском сопровождении у неё постоянно!",
    name: "Виктор Романов",
    role: "предприниматель в сфере торговли",
    date: "10.11.2025",
  },
  {
    text: "Мы работаем в быстро меняющейся сфере, и юрист нам нужен не для «пожаров», а для стратегии. Надежда помогла выстроить договорную базу, проверила контрагентов и сократила юридические риски. Главное — с ней всегда понятно, что и зачем делается. Экономим время и нервы",
    name: "Александр Дроздов",
    role: "основатель IT-компании",
    date: "02.08.2025",
  },
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
            className="border border-[#e8e8e8] rounded-[20px] md:rounded-[30px] p-5 md:p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ borderColor: "#226a43", boxShadow: "0 4px 20px rgba(34,106,67,0.08)" }}
          >
            <span className="[font-family:'Manrope',Helvetica] font-bold text-[#226a43] text-[40px] md:text-[50px] leading-[30px] mb-4">
              &ldquo;
            </span>

            <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] tracking-[0] flex-1 mb-6">
              {t.text}
            </p>

            <div className="flex items-end justify-between">
              <div>
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[15px] md:text-[17px] leading-[22px]">
                  {t.name}
                </div>
                <div className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px] leading-[20px]">
                  {t.role}
                </div>
              </div>
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                {t.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
