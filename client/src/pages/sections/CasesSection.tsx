import { useState } from "react";

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
    tab: 0,
  },
  {
    title: "Успешная защита при налоговой проверке",
    description:
      "Доначисление более 5 млн рублей. Полная подготовка документации. Представительство в ИФНС. Результат — снижение доначислений на 90%.",
    tab: 0,
  },
  {
    title: "Разработка договора с иностранным партнёром",
    description:
      "Клиент планировал выход на рынок Казахстана. Подготовка и адаптация контракта к законодательству РК. Результат — подписание контракта.",
    tab: 3,
  },
];

export const CasesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full px-4 md:px-10 py-10 md:py-16">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
          Кейсы
        </h2>
        <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
          Решённые задачи
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 md:px-5 py-2.5 md:py-3 rounded-full [font-family:'Manrope',Helvetica] font-medium text-[13px] md:text-[15px] leading-[18px] transition-colors whitespace-nowrap ${
              activeTab === idx
                ? "bg-[#226a43] text-white"
                : "bg-[#f3f3f3] text-[#343434] hover:bg-[#e8e8e8]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Case cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {cases.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#f3f3f3] rounded-[20px] md:rounded-[30px] overflow-hidden"
          >
            {/* Placeholder image area */}
            <div className="w-full aspect-[16/10] bg-[#d9d9d9]" />
            <div className="p-4 md:p-6">
              <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[0] mb-2">
                {item.title}
              </h3>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[13px] md:text-[15px] leading-[20px] md:leading-[22.5px] tracking-[0]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
