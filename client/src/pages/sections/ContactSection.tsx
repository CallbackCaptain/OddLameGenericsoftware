import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/animations";

export const ContactSection = (): JSX.Element => {
  const [agreed, setAgreed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const d = digits.startsWith("7") ? digits : digits.startsWith("8") ? "7" + digits.slice(1) : "7" + digits;
    let result = "+7";
    if (d.length > 1) result += " " + d.slice(1, 4);
    if (d.length > 4) result += " " + d.slice(4, 7);
    if (d.length > 7) result += " " + d.slice(7, 9);
    if (d.length > 9) result += " " + d.slice(9, 11);
    return result;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === "" || raw === "+") {
      setPhone("");
      setPhoneError("");
      return;
    }
    const formatted = formatPhone(raw);
    setPhone(formatted);
    setPhoneError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 11) {
      setPhoneError("Введите номер в формате +7 XXX XXX XX XX");
      return;
    }
    setShowSuccess(true);
    setPhone("");
    setPhoneError("");
  };

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

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <motion.input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-5 py-3.5 bg-white rounded-full [font-family:'Manrope',Helvetica] text-[15px] text-[#202020] placeholder:text-[#aeaeae] outline-none transition-shadow duration-200"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(211,184,91,0.4)" }}
              />
              <div>
                <motion.input
                  type="tel"
                  placeholder="+7 XXX XXX XX XX"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={16}
                  className={`w-full px-5 py-3.5 bg-white rounded-full [font-family:'Manrope',Helvetica] text-[15px] text-[#202020] placeholder:text-[#aeaeae] outline-none transition-shadow duration-200 ${phoneError ? "ring-2 ring-red-400" : ""}`}
                  whileFocus={{ boxShadow: phoneError ? "0 0 0 3px rgba(239,68,68,0.3)" : "0 0 0 3px rgba(211,184,91,0.4)" }}
                />
                {phoneError && (
                  <p className="[font-family:'Manrope',Helvetica] text-[12px] text-red-300 mt-1.5 ml-5">{phoneError}</p>
                )}
              </div>
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
                  disabled={!agreed}
                  className="w-full py-4 h-auto bg-[#d3b85b] hover:bg-[#c4a94c] rounded-full [font-family:'Manrope',Helvetica] font-semibold text-white text-[16px] mt-2 transition-colors duration-200 disabled:opacity-50"
                >
                  Отправить
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </FadeIn>
      </div>

      {/* Popup "Спасибо за заявку" */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowSuccess(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-white rounded-[30px] p-8 md:p-12 max-w-md w-full text-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-[#226a43] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[24px] md:text-[28px] leading-[32px] mb-3">
                Спасибо за заявку!
              </h3>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#666] text-[15px] leading-[22px] mb-8">
                Мы свяжемся с вами в ближайшее время для обсуждения вашего вопроса
              </p>
              <motion.button
                onClick={() => setShowSuccess(false)}
                className="px-8 py-3.5 bg-[#226a43] text-white rounded-full [font-family:'Manrope',Helvetica] font-semibold text-[15px] transition-colors duration-200 hover:bg-[#1b5636]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Хорошо
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
