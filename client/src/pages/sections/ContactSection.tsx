import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/animations";
import { useLocation } from "wouter";

export const ContactSection = (): JSX.Element => {
  const [agreed, setAgreed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [location, setLocation] = useLocation()

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

    setLocation("/success");
    setPhone("");
    setPhoneError("");
  };

  return (
    <>
    <section id="contact" className="w-full px-4 md:px-10 pt-10 md:pt-16 pb-6 md:pb-8">
      <FadeIn>
        <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0] mb-8 md:mb-10">
          Безопасность вашего
          <br />
          бизнеса начинается здесь
        </h2>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <FadeIn direction="left" className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-0">
            <div className="py-5 border-b border-[#e0e0e0]">
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                Юр. информация
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[26px] mt-2">
                ИП Надежда Уварова
                <br />
                ИНН 0000000000
              </p>
            </div>
            <div className="py-5 border-b border-[#e0e0e0]">
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                Адрес
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[26px] mt-2">
                г. Иркутск, ул. Ямская, д. 20,
                <br />
                офис 1
              </p>
            </div>
            <div className="py-5">
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                Номер телефона
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[26px] mt-2">
                +7 (000) 000-00-00
              </p>
            </div>
            <div className="py-5">
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                E-mail
              </span>
              <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[16px] md:text-[18px] leading-[26px] mt-2">
                example@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <motion.a
              href="#"
              className="flex items-center gap-3 px-6 py-3.5 bg-[#f3f3f3] rounded-full [font-family:'Manrope',Helvetica] font-medium text-[#202020] text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: "#e8e8e8" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.98-1.73 6.64-2.87 7.97-3.43 3.79-1.58 4.58-1.85 5.09-1.86.11 0 .37.03.53.17.14.12.18.28.2.45-.01.06.01.24 0 .46z" fill="#d3b85b"/>
              </svg>
              Telegram
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 px-6 py-3.5 bg-[#f3f3f3] rounded-full [font-family:'Manrope',Helvetica] font-medium text-[#202020] text-[15px]"
              whileHover={{ scale: 1.05, backgroundColor: "#e8e8e8" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#d3b85b"/>
              </svg>
              WhatsApp
            </motion.a>
          </div>

          {/* Footer */}
          <div className="mt-10 md:mt-14 pt-8 border-t border-[#e8e8e8]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 [font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px] leading-[20px]">
              <span>&copy; 2026 ИП Надежда Уварова. Все права защищены</span>
              <a href="#" className="hover:text-[#343434] transition-colors">
                Политика обработки персональных данных
              </a>
              <a href="#" className="hover:text-[#343434] transition-colors">
                Правила применения рекомендательных технологий
              </a>
              <a href="#" className="hover:text-[#343434] transition-colors">
                Правила использования Cookie
              </a>
              <span>Разработано студией &quot;Сопряжение&quot;</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="w-full md:w-[50%]">
          <motion.div
            className="relative bg-[#226a43] rounded-[20px] md:rounded-[30px] p-6 md:p-8 md:pb-10 md:pr-[270px] lg:pr-[330px] overflow-visible"
            whileHover={{ boxShadow: "0 12px 40px rgba(34,106,67,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] tracking-[0] mb-6 relative z-10 md:mr-[-140px] lg:mr-[-180px]">
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

            <img
              src="/bot_form_pic.png"
              alt="Юрист"
              className="hidden md:block absolute right-0 bottom-0 w-[280px] lg:w-[340px] h-auto object-contain"
            />
          </motion.div>
        </FadeIn>
      </div>
    </section>

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
    </>
  );
};
