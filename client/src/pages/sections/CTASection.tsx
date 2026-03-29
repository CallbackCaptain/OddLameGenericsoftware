import { motion } from "framer-motion";
import { TextReveal } from "@/lib/animations";

export const CTASection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-10 py-10 md:py-16">
      <div className="[font-family:'Manrope',Helvetica] font-semibold tracking-[0]">
        <div className="text-[#226a43] text-[28px] md:text-[70px] leading-[130%] md:leading-[140%]">
          <TextReveal text="Запишитесь на консультацию" />
        </div>
        <div className="md:ml-[283px] text-[#202020] text-[28px] md:text-[70px] leading-[130%] md:leading-[140%]">
          <TextReveal text="и защитите свой бизнес" delay={0.25} />
        </div>
        <div className="md:ml-[140px] flex items-center gap-4 text-[#202020] text-[28px] md:text-[70px] leading-[130%] md:leading-[140%]">
          <TextReveal text="уже сегодня" delay={0.5} />
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex-shrink-0 mt-[0.2em]"
            whileHover={{ scale: 1.2, rotate: 45 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <svg className="w-[28px] h-[28px] md:w-[60px] md:h-[60px]" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7188 45.2828L45.2848 14.7168M45.2848 14.7168H14.7188M45.2848 14.7168V45.2828" stroke="#226A43" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
