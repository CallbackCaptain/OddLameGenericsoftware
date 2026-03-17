import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/lib/animations";

const faqData = [
  {
    question: "Что входит в абонентское сопровождение бизнеса?",
    answer:
      "В сопровождение входит консультационная и документальная поддержка: проверка договоров, составление документов, защита интересов, представление в судах и налоговых органах, контроль рисков и помощь в управленческих решениях",
  },
  {
    question: "Можно ли получить помощь разово, без абонентского обслуживания?",
    answer:
      "Да, вы можете заказать любую услугу разово — консультацию, составление договора, представительство в суде и т.д.",
  },
  {
    question: "С какими отраслями вы работаете?",
    answer:
      "Я работаю с бизнесом из различных отраслей: торговля, IT, производство, услуги, строительство и другие.",
  },
  {
    question: "Как быстро вы отвечаете на запрос клиента?",
    answer:
      "Обычно я отвечаю в течение 1-2 часов в рабочее время. Для клиентов на абонентском обслуживании — приоритетная связь.",
  },
];

export const FAQSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="w-full px-4 md:px-10 py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <FadeIn direction="left" className="md:w-[35%] flex-shrink-0">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0] mb-6 md:mb-10">
            Часто задаваемые
            <br />
            вопросы
          </h2>

          <div className="hidden md:block">
            <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[17px] leading-[24px] mb-1">
              Есть другие вопросы?
            </p>
            <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[15px] leading-[22px] mb-4">
              Вы можете задать свой вопрос лично мне
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#d3b85b] rounded-full [font-family:'Manrope',Helvetica] font-medium text-white text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: "#c4a94c" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Задать вопрос
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15} className="flex-1">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border-b border-[#e8e8e8]">
              <motion.button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] tracking-[0] pr-4">
                  {faq.question}
                </span>
                <motion.span
                  className="flex-shrink-0 text-[#202020] text-[24px] md:text-[28px] leading-none"
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 md:pb-6">
                      <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] tracking-[0]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </FadeIn>

        <div className="md:hidden">
          <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[17px] leading-[24px] mb-1">
            Есть другие вопросы?
          </p>
          <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[14px] leading-[22px] mb-4">
            Вы можете задать свой вопрос лично мне
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#d3b85b] rounded-full [font-family:'Manrope',Helvetica] font-medium text-white text-[15px]"
          >
            Задать вопрос
          </a>
        </div>
      </div>
    </section>
  );
};
