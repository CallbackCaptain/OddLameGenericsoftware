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
      <section className="w-full px-4 md:px-10 mt-6 md:mt-12 relative">
        <div className="flex flex-col md:flex-row">
          {/* Left column — text + buttons */}
          <div className="flex-1 flex flex-col order-2 md:order-1 md:max-w-[57.6%]">
            {/* Title */}
            <motion.div
              className="mt-4 md:mt-0 [font-family:'Manrope',Helvetica] font-normal text-[36px] md:text-[80px] leading-[42px] md:leading-[115%] tracking-[0]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-[#202020]">Бизнес-юрист </span>
              <span className="font-semibold text-[#226a43]">
                Надежда Уварова
              </span>
            </motion.div>

            {/* Description */}
            <motion.div
              className="mt-6 md:mt-10 [font-family:'Manrope',Helvetica] font-normal text-[#343434] text-base md:text-xl leading-[26px] md:leading-[150%] tracking-[0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Партнёрский подход к каждому делу — защищаю ваш бизнес,
              <br className="hidden md:block" />
              как свой собственный
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 mt-6 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#services"
                className="flex items-center justify-center px-[25px] py-[20px] bg-[#D3B85B] rounded-[32px] [font-family:'Manrope',Helvetica] font-semibold text-white text-[15px] leading-[150%] whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Услуги юриста
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center justify-center px-[25px] py-[20px] bg-[#202020] rounded-[32px] [font-family:'Manrope',Helvetica] font-semibold text-white text-[15px] leading-[150%] whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Консультация
              </motion.a>
            </motion.div>
          </div>

          {/* Right column — photo */}
          <motion.div
            className="relative flex-shrink-0 w-full md:w-[35%] order-1 md:order-2 md:ml-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              className="w-full h-auto block"
              alt="Надежда Уварова"
              src="/figmaAssets/hero-photo-main.png"
            />

            {/* Quote in the top-left cutout — 308/674 = 45.7% of photo width */}
            <motion.div
              className="absolute top-2 md:top-4 left-[-30px] md:left-[-60px] w-[65%] pt-2 pr-4 text-right"
              style={{ height: "14.8%" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[13px] md:text-[16px] leading-[20px] md:leading-[150%] tracking-[0]">
                «Моя задача — чтобы проблемы бизнеса решались, а&nbsp;не&nbsp;обсуждались»
              </p>
            </motion.div>

            {/* "Обо мне" button — bottom right */}
            <motion.div
              className="absolute bottom-[6px] right-[4px] md:bottom-[8px] md:right-[6px] z-10 w-[70px] h-[70px] md:w-[97px] md:h-[97px]"
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
