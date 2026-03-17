import { Button } from "@/components/ui/button";

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
];

const servicesRow2 = [
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

const ServiceCard = ({ service }: { service: (typeof servicesRow1)[0] }) => {
  const bgClass = service.isGreen ? "bg-[#226a43]" : "bg-[#f3f3f3]";
  const titleColor = service.isGreen ? "text-white" : "text-[#202020]";
  const textColor = service.isGreen ? "text-white" : "text-[#343434]";

  return (
    <div className="relative w-full h-full">
      {/* Card background with rounded corners */}
      <div className={`absolute inset-0 ${bgClass} rounded-[30px]`} />

      {/* White notch overlay for badge area */}
      <div className="absolute top-0 left-0 z-10 bg-white pr-[14px] pb-[14px] rounded-br-[20px] flex flex-row gap-2">
        {service.badges.map((badge, idx) => (
          <span
            key={idx}
            className="inline-flex items-center justify-center px-[15px] py-2.5 bg-[#d3b85b] rounded-[20px] [font-family:'Manrope',Helvetica] font-normal text-white text-[15px] leading-[18px] whitespace-nowrap h-[38px]"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Card content — flex layout, fills full height */}
      <div className="relative z-[1] flex flex-col h-full px-[25px] pt-[70px] pb-[25px]">
        {/* Title */}
        <h3
          className={`font-semibold ${titleColor} text-[28px] leading-[39.2px] [font-family:'Manrope',Helvetica] tracking-[0] mb-4`}
        >
          {service.title}
        </h3>

        {/* Items list */}
        <div className="flex flex-col gap-2.5 flex-1">
          {service.items.map((item, idx) => (
            <div key={idx} className="flex gap-2">
              <span
                className={`${textColor} text-[15px] leading-[22.5px] select-none`}
              >
                &bull;
              </span>
              <span
                className={`font-normal ${textColor} text-[15px] leading-[22.5px] [font-family:'Manrope',Helvetica] tracking-[0]`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Button — always at the bottom */}
        <Button className="w-full h-[63px] flex items-center justify-center gap-2.5 p-5 mt-auto bg-[#202020] rounded-[32px] hover:bg-[#333333] cursor-pointer">
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
    <section className="w-full px-10">
      {/* Header */}
      <div className="flex flex-row items-start justify-between w-full mb-[35px]">
        <div className="flex flex-col">
          <h2 className="font-semibold text-[#202020] text-[45px] leading-[58.5px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
            Услуги юриста
          </h2>
          <span className="font-semibold text-[#aeaeae] text-[45px] leading-[58.5px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]">
            Выберите подходящию
          </span>
        </div>
        <p className="w-[330px] font-normal text-[#343434] text-xl text-right leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0] mt-[14px]">
          Юридические решения для бизнеса на всех этапах работы
        </p>
      </div>

      {/* Row 1 — equal height cards */}
      <div className="grid grid-cols-3 gap-6 w-full mb-6 auto-rows-fr">
        {servicesRow1.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 gap-6 w-full pb-10 auto-rows-fr">
        {servicesRow2.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
