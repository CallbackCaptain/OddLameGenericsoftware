import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/lib/animations";

const statsData = [
  {
    bg: "bg-[#f3f3f3]",
    valueColor: "text-[#202020]",
    descColor: "text-[#343434]",
    valueParts: [
      { text: "10+", size: "text-[40px] md:text-[50px] leading-[46px] md:leading-[57.5px]" },
      { text: "лет", size: "text-xl md:text-2xl leading-[23px] md:leading-[27.6px]" },
    ],
    valueAlign: "items-end",
    description: "практики в сопровождении юридических лиц",
    mobileOrder: "order-1 md:order-none",
    mobileSpan: "col-span-1",
  },
  {
    bg: "bg-[#226a43]",
    valueColor: "text-white",
    descColor: "text-white",
    valueParts: [
      { text: "до", size: "text-xl md:text-2xl leading-[23px] md:leading-[27.6px]" },
      { text: "30%", size: "text-[40px] md:text-[50px] leading-[46px] md:leading-[57.5px]" },
    ],
    valueAlign: "items-start",
    description: "экономии за счёт грамотной правовой стратегии",
    mobileOrder: "order-2 md:order-none",
    mobileSpan: "col-span-1",
  },
  {
    bg: "bg-[#202020]",
    valueColor: "text-white",
    descColor: "text-white",
    valueParts: [
      { text: "100+", size: "text-[40px] md:text-[50px] leading-[46px] md:leading-[57.5px]" },
      { text: "дел", size: "text-xl md:text-2xl leading-[23px] md:leading-[27.6px]" },
    ],
    valueAlign: "items-end",
    description: "экономии за счёт грамотной правовой стратегии",
    mobileOrder: "order-3 md:order-none",
    mobileSpan: "col-span-2 md:col-span-1",
  },
];

export const StatsSection = (): JSX.Element => {
  return (
    <StaggerContainer
      className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 px-4 md:px-10 mt-6 md:mt-10 min-[1350px]:-mt-[132px] md:max-w-full min-[1350px]:max-w-[60%] relative z-10"
      staggerDelay={0.15}
    >
      {statsData.map((stat, index) => (
        <StaggerItem
          key={index}
          className={`${stat.mobileOrder} ${stat.mobileSpan}`}
        >
          <Card
            className={`${stat.bg} rounded-[20px] md:rounded-[32px] border-0 shadow-none h-full transition-transform duration-300 hover:scale-[1.02]`}
          >
            <CardContent className="flex flex-col items-start justify-center gap-2 md:gap-3 p-4 md:p-[30px] h-auto md:h-[129px]">
              <div className={`flex ${stat.valueAlign} gap-2 md:gap-2.5`}>
                {stat.valueParts.map((part, partIndex) => (
                  <span
                    key={partIndex}
                    className={`font-semibold ${stat.valueColor} ${part.size} whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]`}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
              <p
                className={`font-normal ${stat.descColor} text-[13px] md:text-[15px] leading-[20px] md:leading-[22.5px] [font-family:'Manrope',Helvetica] tracking-[0]`}
              >
                {stat.description}
              </p>
            </CardContent>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};
