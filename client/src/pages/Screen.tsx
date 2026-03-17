import { motion } from "framer-motion";
import { FadeIn } from "@/lib/animations";
import { HeaderSection } from "./sections/HeaderSection";
import { ServicesListSection } from "./sections/ServicesListSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatsSection } from "./sections/StatsSection";
import { AboutSection } from "./sections/AboutSection";
import { CasesSection } from "./sections/CasesSection";
import { CTASection } from "./sections/CTASection";
import { PrinciplesSection } from "./sections/PrinciplesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <HeaderSection />

      {/* Hero Section */}
      <section className="w-full px-4 md:px-10 mt-6 md:mt-12">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Title — mobile only */}
          <motion.div
            className="md:hidden [font-family:'Manrope',Helvetica] font-normal text-[36px] leading-[42px] tracking-[0] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#202020]">Бизнес-юрист </span>
            <span className="font-semibold text-[#226a43]">
              Надежда Уварова
            </span>
          </motion.div>

          {/* Photo + "Обо мне" button */}
          <motion.div
            className="relative flex-shrink-0 w-full md:w-[38%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="absolute inset-0 rounded-[30px] md:rounded-[50px] overflow-hidden">
              <motion.img
                className="w-full h-full object-cover"
                alt="Надежда Уварова"
                src="/figmaAssets/----.png"
                style={{ transform: "scaleX(-1)" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="w-full aspect-[553/505]" />

            <motion.div
              className="absolute top-0 right-0 z-10 w-[70px] h-[70px] md:w-[97px] md:h-[97px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <div className="absolute -inset-[6px] md:-inset-[8px] bg-white rounded-full" />
              <motion.a
                href="#about"
                className="relative z-[1] flex flex-col items-center justify-center w-full h-full bg-[#202020] rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "#226a43" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[12px] md:text-[15px] leading-[18px]">
                  Обо мне
                </span>
                <img
                  className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] mt-1"
                  alt="Arrow"
                  src="/figmaAssets/arrow-up-right.svg"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <div className="flex-1 flex flex-col">
            <motion.div
              className="mt-4 md:mt-0 md:self-end [font-family:'Manrope',Helvetica] font-normal text-[#343434] text-base md:text-xl md:text-right leading-[26px] md:leading-[30px] tracking-[0] max-w-[445px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              «Моя задача — чтобы проблемы бизнеса решались, а не обсуждались»
            </motion.div>

            <motion.div
              className="hidden md:block mt-auto [font-family:'Manrope',Helvetica] font-normal text-[80px] leading-[92px] tracking-[0]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-[#202020]">Бизнес-юрист </span>
              <span className="font-semibold text-[#226a43]">
                Надежда Уварова
              </span>
            </motion.div>

            <motion.div
              className="mt-3 [font-family:'Manrope',Helvetica] font-normal text-[#343434] text-base md:text-xl leading-[26px] md:leading-[30px] tracking-[0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Партнёрский подход к каждому делу — защищаю ваш бизнес,
              <br className="hidden md:block" />
              как свой собственный
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ServicesSection />
      <ServicesListSection />
      <AboutSection />
      <CasesSection />
      <CTASection />
      <PrinciplesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
