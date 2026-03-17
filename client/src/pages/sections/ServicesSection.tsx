import { TextReveal } from "@/lib/animations";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-10 py-8 md:py-[46px]">
      <div className="[font-family:'Manrope',Helvetica] font-semibold text-[28px] md:text-[70px] leading-[130%] md:leading-[140%] tracking-[0]">
        <TextReveal
          text="Делаем закон вашим главным"
          className="text-[#226a43]"
        />
      </div>
      <div className="md:ml-[283px] [font-family:'Manrope',Helvetica] font-semibold text-[28px] md:text-[70px] leading-[130%] md:leading-[140%] tracking-[0]">
        <TextReveal
          text="конкурентным преимуществом"
          className="text-[#202020]"
          delay={0.3}
        />
      </div>
    </section>
  );
};
