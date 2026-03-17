import { HeaderSection } from "./sections/HeaderSection";
import { IntroTextSection } from "./sections/IntroTextSection";
import { ServicesListSection } from "./sections/ServicesListSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatsSection } from "./sections/StatsSection";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] relative">
      {/* Header */}
      <HeaderSection />

      {/* Hero Section */}
      <section className="w-full relative">
        <div className="flex flex-row items-start w-full px-10 pt-8">
          {/* Left: Main photo */}
          <div className="flex-shrink-0">
            <img
              className="w-[553px] h-[505px] object-cover"
              alt="Image"
              src="/figmaAssets/----.png"
            />
          </div>

          {/* Middle: "Обо мне" button + IntroTextSection stacked */}
          <div className="flex flex-col items-start ml-0">
            {/* "Обо мне" circular button */}
            <div className="relative w-[99px] h-[97px] flex-shrink-0 ml-[-10px]">
              <div className="absolute top-0 left-0 w-[97px] h-[97px] bg-[#202020] rounded-full" />
              <div className="absolute top-8 left-[18px] [font-family:'Manrope',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[18px] whitespace-nowrap">
                Обо мне
              </div>
              <img
                className="absolute top-14 left-10 w-[18px] h-[18px]"
                alt="Arrow up right"
                src="/figmaAssets/arrow-up-right.svg"
              />
            </div>

            {/* IntroTextSection placed below the button in the middle column */}
            <div className="mt-0">
              <IntroTextSection />
            </div>
          </div>

          {/* Right: Quote text */}
          <div className="flex-1 flex justify-end">
            <div className="w-[445px] [font-family:'Manrope',Helvetica] font-normal text-[#333333] text-xl text-right tracking-[0] leading-[30px]">
              «Моя задача — чтобы проблемы бизнеса решались, а не обсуждались»
            </div>
          </div>
        </div>

        {/* Tagline below the hero row */}
        <div className="w-[783px] ml-[617px] mt-4 pb-8 [font-family:'Manrope',Helvetica] font-normal text-[#333333] text-xl leading-[30px] tracking-[0]">
          Партнёрский подход к каждому делу — защищаю ваш бизнес,
          <br />
          как свой собственный
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Services List Section */}
      <ServicesListSection />
    </div>
  );
};
