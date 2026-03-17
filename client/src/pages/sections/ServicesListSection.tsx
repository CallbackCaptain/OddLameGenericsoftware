import { Button } from "@/components/ui/button";

// Service card data
const servicesRow1 = [
  {
    id: 1,
    badges: ["Абонентское обслуживание"],
    title: (
      <>
        Сопровождение <br />
        бизнеса
      </>
    ),
    titleColor: "text-[#202020]",
    textColor: "text-[#333333]",
    bg: "bg-[url(/figmaAssets/subtract-3.svg)]",
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
    titleColor: "text-white",
    textColor: "text-white",
    bg: "bg-[url(/figmaAssets/subtract-1.svg)]",
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
    titleColor: "text-[#202020]",
    textColor: "text-[#333333]",
    bg: "bg-[url(/figmaAssets/subtract-1.svg)]",
    items: [
      "анализ ситуации и разработка стратегии судебной защиты",
      "подготовку исковых заявлений, отзывов, ходатайств и других документов",
      "участие в различных судебных заседаниях любой инстанции",
      "сопровождение исполнения судебных решений и работы с приставами",
    ],
  },
];

const servicesRow2 = [
  {
    id: 4,
    badges: ["Абонентское обслуживание"],
    title: "Регистрация и запуск бизнеса",
    titleColor: "text-[#202020]",
    textColor: "text-[#333333]",
    bg: "bg-[url(/figmaAssets/subtract-3.svg)]",
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
    titleColor: "text-[#202020]",
    textColor: "text-[#333333]",
    bg: "bg-[url(/figmaAssets/subtract.svg)]",
    bgOffset: true,
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
    titleColor: "text-white",
    textColor: "text-white",
    bg: "bg-[url(/figmaAssets/subtract-1.svg)]",
    items: [
      "анализ возможности получения субсидий и грантов",
      "подбор подходящих программ господдержки",
      "подготовка и проверка пакета документов",
      "сопровождение подачи заявок",
      "взаимодействие с государственными органами",
    ],
  },
];

const ServiceCard = ({ service }: { service: (typeof servicesRow1)[0] }) => {
  return (
    <div
      className={`w-full h-[523px] flex flex-col ${service.bg} bg-[100%_100%] p-0`}
    >
      {/* Badges */}
      <div className="flex flex-row gap-2 flex-wrap">
        {service.badges.map((badge, idx) => (
          <span
            key={idx}
            className="inline-flex items-center justify-center gap-2.5 px-[15px] py-2.5 bg-[#d3b85b] rounded-[20px] [font-family:'Manrope',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[18px] whitespace-nowrap h-[38px]"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Title */}
      <div
        className={`ml-[25px] w-[387px] mt-[70px] font-semibold ${service.titleColor} text-[28px] leading-[39.2px] [font-family:'Manrope',Helvetica] tracking-[0]`}
      >
        {service.title}
      </div>

      {/* Items list */}
      <div className="flex ml-[25px] w-[387px] relative mt-[15px] flex-col items-start gap-2.5 flex-1">
        {service.items.map((item, idx) => (
          <div
            key={idx}
            className={`relative self-stretch font-normal ${service.textColor} text-[15px] leading-[22.5px] [font-family:'Manrope',Helvetica] tracking-[0]`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="ml-[25px] w-[387px] mb-0">
        <Button
          className="w-full h-[63px] flex items-center justify-center gap-2.5 p-5 bg-[#202020] rounded-[32px] hover:bg-[#333333] cursor-pointer"
          asChild={false}
        >
          <span className="font-medium text-white text-[15px] leading-[22.5px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
            Заказать услугу
          </span>
          <img
            className="w-[23px] h-[23px]"
            alt="Arrow up right"
            src="/figmaAssets/arrow-up-right.svg"
          />
        </Button>
      </div>
    </div>
  );
};

export const ServicesListSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-0">
      {/* Header */}
      <div className="relative w-full mb-[93px]">
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[#202020] text-[45px] leading-[58.5px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
              Услуги юриста
            </h2>
            <span className="font-semibold text-[#aeaeae] text-[45px] leading-[58.5px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
              Выберите подходящию
            </span>
          </div>
          <p className="w-[330px] font-normal text-[#333333] text-xl text-right leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0] mt-[14px]">
            Юридические решения для бизнеса на всех этапах работы
          </p>
        </div>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-3 gap-[12px] w-full mb-[12px]">
        {servicesRow1.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 gap-[12px] w-full">
        {servicesRow2.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
