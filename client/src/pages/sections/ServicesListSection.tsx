import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";

const allServices = [
  {
    id: 1,
    badges: ["Абонентское обслуживание"],
    title: (
      <>
        Сопровождение <br />
        бизнеса
      </>
    ),
    isGreen: false,
    items: [
      "регулярные консультации по правовым вопросам бизнеса",
      "проверка и подготовка договоров, коммерческих предложений, внутренних документов",
      "анализ контрагентов и помощь в снижении рисков перед сделкой",
      "юридическое сопровождение сделок и переговоров",
    ],
  },
  {
    id: 2,
    badges: ["Разовая услуга"],
    title: "Сопровождение налоговых проверок",
    isGreen: true,
    items: [
      "анализ документов и выявление налоговых рисков",
      "подготовку компании к камеральной или выездной проверке",
      "взаимодействие с налоговыми инспекторами",
      "подготовку пояснений, возражений, пояснительных записок",
    ],
  },
  {
    id: 3,
    badges: ["Разовая услуга"],
    title: "Представление интересов юридических лиц в суде",
    isGreen: false,
    items: [
      "анализ ситуации и разработка стратегии судебной защиты",
      "подготовку исковых заявлений, отзывов, ходатайств и других документов",
      "участие в различных судебных заседаниях любой инстанции",
      "сопровождение исполнения судебных решений и работы с приставами",
    ],
  },
  {
    id: 4,
    badges: ["Абонентское обслуживание"],
    title: "Регистрация и запуск бизнеса",
    isGreen: false,
    items: [
      "консультация по выбору организационно-правовой формы (ИП, ООО)",
      "подготовка и подача документов для регистрации бизнеса",
      "разработка учредительных документов",
      "помощь с открытием расчетного счёта",
      "первичная правовая настройка деятельности",
    ],
  },
  {
    id: 5,
    badges: ["Разовая услуга", "Абонентское обслуживание"],
    title: "Разработка и ведение документации",
    isGreen: false,
    items: [
      "разработка договоров под конкретную деятельность бизнеса",
      "подготовка внутренних регламентов и положений",
      "адаптация документов под требования законодательства",
      "внесение изменений и актуализация документации",
    ],
  },
  {
    id: 6,
    badges: ["Разовая услуга"],
    title: (
      <>
        Получение субсидий <br />и господдержки
      </>
    ),
    isGreen: true,
    items: [
      "анализ возможности получения субсидий и грантов",
      "подбор подходящих программ господдержки",
      "подготовка и проверка пакета документов",
      "сопровождение подачи заявок",
      "взаимодействие с государственными органами",
    ],
  },
];

const ServiceCard = ({ service }: { service: (typeof allServices)[0] }) => {
  const bgClass = service.isGreen ? "bg-[#226a43]" : "bg-[#f3f3f3]";
  const titleColor = service.isGreen ? "text-white" : "text-[#202020]";
  const textColor = service.isGreen ? "text-white" : "text-[#343434]";

  return (
    <motion.div
      className="relative w-full h-full"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={`absolute inset-0 ${bgClass} rounded-[20px] md:rounded-[30px] transition-shadow duration-300`} />

      {/* White notch overlay for badge area */}
      <div className="absolute top-0 left-0 z-10 bg-white pr-[10px] pb-[10px] md:pr-[14px] md:pb-[14px] rounded-br-[16px] md:rounded-br-[20px] flex flex-row gap-1.5 md:gap-2">
        {service.badges.map((badge, idx) => (
          <span
            key={idx}
            className="inline-flex items-center justify-center px-3 md:px-[15px] py-2 md:py-2.5 bg-[#d3b85b] rounded-[16px] md:rounded-[20px] [font-family:'Manrope',Helvetica] font-normal text-white text-[12px] md:text-[15px] leading-[16px] md:leading-[18px] whitespace-nowrap h-[30px] md:h-[38px]"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Card content */}
      <div className="relative z-[1] flex flex-col h-full px-4 md:px-[25px] pt-[52px] md:pt-[70px] pb-4 md:pb-[25px]">
        <h3
          className={`font-semibold ${titleColor} text-[22px] md:text-[28px] leading-[30px] md:leading-[39.2px] [font-family:'Manrope',Helvetica] tracking-[0] mb-3 md:mb-4`}
        >
          {service.title}
        </h3>

        <div className="flex flex-col gap-2 md:gap-2.5 flex-1">
          {service.items.map((item, idx) => (
            <div key={idx} className="flex gap-2">
              <span className={`${textColor} text-[13px] md:text-[15px] leading-[20px] md:leading-[22.5px] select-none`}>
                &bull;
              </span>
              <span className={`font-normal ${textColor} text-[13px] md:text-[15px] leading-[20px] md:leading-[22.5px] [font-family:'Manrope',Helvetica] tracking-[0]`}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 md:pt-6">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full h-[50px] md:h-[63px] flex items-center justify-center gap-2.5 p-4 md:p-5 bg-[#202020] rounded-[24px] md:rounded-[32px] hover:bg-[#333333] cursor-pointer transition-colors duration-200">
              <span className="font-medium text-white text-[13px] md:text-[15px] leading-[22.5px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
                Заказать услугу
              </span>
              <img className="w-[18px] h-[18px] md:w-[23px] md:h-[23px]" alt="Arrow" src="/figmaAssets/arrow-up-right.svg" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesListSection = (): JSX.Element => {
  return (
    <section id="services" className="w-full px-4 md:px-10">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full mb-6 md:mb-[35px]">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] [font-family:'Manrope',Helvetica] tracking-[0]">
              Услуги юриста
            </h2>
            <span className="font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] [font-family:'Manrope',Helvetica] tracking-[0]">
              Выберите подходящию
            </span>
          </div>
          <p className="hidden md:block w-[330px] font-normal text-[#343434] text-xl text-right leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0] mt-[14px]">
            Юридические решения для бизнеса на всех этапах работы
          </p>
        </div>
      </FadeIn>

      {/* Cards grid */}
      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full pb-8 md:pb-10 auto-rows-fr"
        staggerDelay={0.1}
      >
        {allServices.map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
