import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";

const tabs = [
  "Налоговые проверки",
  "Представление интересов в суде",
  "Субсидии и господдержка",
  "Другое",
];

const cases = [
  {
    title: "Абонентское сопровождение сети магазинов",
    description:
      "Разработка типовых договоров для сети розничных магазинов. Настройка системы контроля контрагентов. Мат.проверка системы учета.",
    image: "/case-3.png",
  },
  {
    title: "Успешная защита при налоговой проверке",
    description:
      "Доначисление более 5 млн рублей. Полная подготовка документации. Представительство в ИФНС. Результат — снижение доначислений на 90%.",
    image: "/case-1.jpg",
  },
  {
    title: "Разработка договора с иностранным партнёром",
    description:
      "Клиент планировал выход на рынок Казахстана. Подготовка и адаптация контракта к законодательству РК. Результат — подписание контракта.",
    image: "/case-2.jpg",
  },
];

export const CasesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cases" className="w-full px-4 md:px-10 py-10 md:py-16">
      <FadeIn>
        <div className="mb-6 md:mb-8">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
            Кейсы
          </h2>
          <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
            Решённые задачи
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 md:px-5 py-2.5 md:py-3 rounded-full [font-family:'Manrope',Helvetica] font-medium text-[13px] md:text-[15px] leading-[18px] whitespace-nowrap transition-colors duration-300 ${
                activeTab === idx
                  ? "bg-[#226a43] text-white"
                  : "bg-[#f3f3f3] text-[#343434]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#f3f3f3] rounded-[20px] md:rounded-[30px] overflow-hidden"
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full aspect-[16/10] bg-[#d9d9d9] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[0] mb-2">
                  {item.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[13px] md:text-[15px] leading-[20px] md:leading-[22.5px] tracking-[0]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
