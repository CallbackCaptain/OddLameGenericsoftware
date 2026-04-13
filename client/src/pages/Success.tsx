import { motion } from "framer-motion";
import { HeaderSection } from "./sections/HeaderSection";

const Success = () => {
  return (
    <div className="bg-white w-full min-w-[330px] max-w-[4000px]">
      <HeaderSection />

      <main
        className="max-[1023px]:flex flex-col items-center relative px-4 md:px-10"
      >
        <motion.div 
          className="max-[1024px]:static absolute top-4 left-4 md:top-6 md:left-10 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-[45px] max-[1380px]:text-[32px] max-[1024px]:text-[28px] font-semibold leading-none">
            Спасибо за заявку!
          </h1>
          <h2 className="text-[45px] max-[1380px]:text-[32px] max-[1024px]:text-[28px] font-semibold text-[#AEAEAE]">
            Теперь ваш бизнес под защитой
          </h2>
        </motion.div>

        <motion.img
          className="max-[1023px]:hidden"
          width="100%"
          src="/success.png"
          alt="Success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
        />

        <div className="max-[1023px]:block hidden max-w-[500px] w-[100%] relative">
          <motion.img
            className="mt-5" width="100%" src="/success_m.png" alt="Success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
          />

          <a
            className="max-[410px]:px-5 max-[410px]:py-4 max-[410px]:text-[14px] absolute bottom-0 right-0 text-center text-[20px] flex-shrink-0 px-[5%] py-[5%] rounded-[32px] border border-[#dcdcdc] bg-[#D3B85B] hover:text-black hover:bg-white font-semibold text-white text-[15px] whitespace-nowrap transition-colors duration-300"
            href="/"
          >
            На главную
          </a>

          <ul className="absolute -translate-y-[-100%] w-[100%] pt-5 bottom-0 text-right text-[#787878]">
            <li className="text-[13px]">© 2025 ИП Надежда Уварова. Все права защищены</li>
            <li className="mt-[12px]">
              <a className="text-[13px] underline underline-offset-2 decoration-[0.5px]" href="">
                Политика обработки персональных данных
              </a>
            </li>
            <li className="mt-[12px]">
              <a className="text-[13px] underline underline-offset-2 decoration-[0.5px]" href="">
                Правила применения рекомендательных технологий
              </a>
            </li>
            <li className="mt-[12px]">
              <a className="text-[13px] underline underline-offset-2 decoration-[0.5px]" href="">
                Правила использования Cookie
              </a>
            </li>
            <li className="mt-[12px]">
              <a className="text-[13px] underline underline-offset-2 decoration-[0.5px]" href="">
                Разработано студией "Сопряжение"
              </a>
            </li>
          </ul>
        </div>

        <div
          className="max-[1023px]:hidden bottom-0 w-[100%] -translate-y-full flex items-end justify-between flex-wrap gap-4"
        >
          <ul className="max-[1180px]:mb-[-30px] grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-[#787878]">
            <li className="max-[1180px]:text-[10px] max-[1380px]:text-[11px]">© 2025 ИП Надежда Уварова. Все права защищены</li>
            <li>
              <a className="max-[1180px]:text-[10px]  max-[1380px]:text-[11px] underline underline-offset-2 decoration-[0.5px]" href="">
                Политика обработки персональных данных
              </a>
            </li>
            <li>
              <a className="max-[1180px]:text-[10px] max-[1380px]:text-[11px] underline underline-offset-2 decoration-[0.5px]" href="">
                Правила применения рекомендательных технологий
              </a>
            </li>
            <li>
              <a className="max-[1180px]:text-[10px] max-[1380px]:text-[11px] underline underline-offset-2 decoration-[0.5px]" href="">
                Правила использования Cookie
              </a>
            </li>
            <li>
              <a className="max-[1180px]:text-[10px] max-[1380px]:text-[11px] underline underline-offset-2 decoration-[0.5px]" href="">
                Разработано студией "Сопряжение"
              </a>
            </li>
          </ul>

          <a
            className="min-[1500px]:text-[20px] min-[1500px]:px-[1.5%] min-[1500px]:py-[2%] max-[1120px]:text-[10px] max-[1250px]:text-[12px] text-[15px] flex-shrink-0 px-5 py-3 md:px-[25px] md:py-5 rounded-[32px] border border-[#dcdcdc] bg-[#D3B85B] hover:text-black hover:bg-white font-semibold text-white text-[15px] whitespace-nowrap transition-colors duration-300"
            href="/"
          >
            На главную
          </a>

        </div>
      </main>
    </div>
  );
};

export default Success;
