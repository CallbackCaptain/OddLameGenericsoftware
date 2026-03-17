import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    bg: "bg-[#226a43]",
    valueColor: "text-white",
    labelColor: "text-white",
    descColor: "text-white",
    valueParts: [
      { text: "100+", size: "text-[50px] leading-[57.5px]" },
      { text: "дел", size: "text-2xl leading-[27.6px]" },
    ],
    valueAlign: "items-end",
    description: "экономии за счёт грамотной правовой стратегии",
    widthClass: "w-[40%]",
  },
  {
    bg: "bg-[#f2f2f2]",
    valueColor: "text-[#202020]",
    labelColor: "text-[#202020]",
    descColor: "text-[#333333]",
    valueParts: [
      { text: "10+", size: "text-[50px] leading-[57.5px]" },
      { text: "лет", size: "text-2xl leading-[27.6px]" },
    ],
    valueAlign: "items-end",
    description: "практики в сопровождении юридических лиц",
    widthClass: "flex-1",
  },
  {
    bg: "bg-[#202020]",
    valueColor: "text-white",
    labelColor: "text-white",
    descColor: "text-white",
    valueParts: [
      { text: "до", size: "text-2xl leading-[27.6px]" },
      { text: "30%", size: "text-[50px] leading-[57.5px]" },
    ],
    valueAlign: "items-start",
    description: "экономии за счёт грамотной стратегии",
    widthClass: "flex-1",
  },
];

export const StatsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-stretch gap-6 px-10">
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className={`${stat.bg} ${stat.widthClass} rounded-[32px] border-0 shadow-none`}
        >
          <CardContent className="flex flex-col items-start justify-center gap-3 p-[30px] h-[129px]">
            {/* Stat value row */}
            <div className={`flex ${stat.valueAlign} gap-2.5`}>
              {stat.valueParts.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className={`font-semibold ${stat.valueColor} ${part.size} whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]`}
                >
                  {part.text}
                </span>
              ))}
            </div>

            {/* Stat description */}
            <p
              className={`font-normal ${stat.descColor} text-[15px] leading-[22.5px] whitespace-nowrap [font-family:'Manrope',Helvetica] tracking-[0]`}
            >
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
