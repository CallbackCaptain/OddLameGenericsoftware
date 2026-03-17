import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/animations";

export const ContactSection = (): JSX.Element => {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="w-full px-4 md:px-10 py-10 md:py-16">
      <FadeIn>
        <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0] mb-8 md:mb-10">
          Безопасность вашего
          <br />
          бизнеса начинается здесь
        </h2>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <FadeIn direction="left" className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div>
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                Юр. информация
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[24px] mt-2">
                ИП Надежда Уварова
                <br />
                ИНН 0000000000
              </p>
            </div>
            <div>
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                Адрес
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[24px] mt-2">
                г. Иркутск, ул. Ямская, д. 20,
                <br />
                офис 1
              </p>
            </div>
            <div>
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                Номер телефона
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[24px] mt-2">
                +7 (000) 000-00-00
              </p>
            </div>
            <div>
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                E-mail
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[24px] mt-2">
                example@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="#"
              className="flex items-center gap-3 px-5 py-3 bg-[#f3f3f3] rounded-full [font-family:'Manrope',Helvetica] font-medium text-[#202020] text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: "#e8e8e8" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[20px]">&#9992;</span>
              Telegram
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 px-5 py-3 bg-[#f3f3f3] rounded-full [font-family:'Manrope',Helvetica] font-medium text-[#202020] text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: "#e8e8e8" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[20px]">&#9742;</span>
              WhatsApp
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="w-full md:w-[45%]">
          <motion.div
            className="bg-[#226a43] rounded-[20px] md:rounded-[30px] p-6 md:p-8"
            whileHover={{ boxShadow: "0 12px 40px rgba(34,106,67,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] tracking-[0] mb-6">
              Заполните форму и передайте решение правовых задач профессионалу
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <motion.input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-5 py-3.5 bg-white rounded-full [font-family:'Manrope',Helvetica] text-[15px] text-[#202020] placeholder:text-[#aeaeae] outline-none transition-shadow duration-200"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(211,184,91,0.4)" }}
              />
              <motion.input
                type="tel"
                placeholder="Номер телефона"
                className="w-full px-5 py-3.5 bg-white rounded-full [font-family:'Manrope',Helvetica] text-[15px] text-[#202020] placeholder:text-[#aeaeae] outline-none transition-shadow duration-200"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(211,184,91,0.4)" }}
              />
              <motion.input
                type="text"
                placeholder="Вопрос / комментарий"
                className="w-full px-5 py-3.5 bg-white rounded-full [font-family:'Manrope',Helvetica] text-[15px] text-[#202020] placeholder:text-[#aeaeae] outline-none transition-shadow duration-200"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(211,184,91,0.4)" }}
              />

              <label className="flex items-start gap-3 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-5 h-5 mt-0.5 accent-[#d3b85b] rounded flex-shrink-0"
                />
                <span className="[font-family:'Manrope',Helvetica] font-normal text-white/80 text-[13px] leading-[18px]">
                  Я даю согласие на обработку своих персональных данных на условиях
                  политики обработки персональных данных
                </span>
              </label>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full py-4 h-auto bg-[#d3b85b] hover:bg-[#c4a94c] rounded-full [font-family:'Manrope',Helvetica] font-semibold text-white text-[16px] mt-2 transition-colors duration-200"
                >
                  Отправить
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};
