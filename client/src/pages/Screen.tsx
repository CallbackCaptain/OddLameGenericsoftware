import { HeaderSection } from "./sections/HeaderSection";
import { ServicesListSection } from "./sections/ServicesListSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatsSection } from "./sections/StatsSection";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      {/* Header */}
      <HeaderSection />

      {/* Hero Section */}
      <section className="w-full px-10 mt-4">
        <div className="flex flex-row gap-8">
          {/* Left: Photo + "Обо мне" button */}
          <div className="relative flex-shrink-0 w-[38%]">
            <img
              className="w-full aspect-[553/505] object-cover rounded-[50px]"
              alt="Надежда Уварова"
              src="/figmaAssets/----.png"
              style={{ transform: "scaleX(-1)" }}
            />
            {/* "Обо мне" circular button — top-right of photo */}
            <a
              href="#about"
              className="absolute top-0 -right-[10px] flex flex-col items-center justify-center w-[97px] h-[97px] bg-[#202020] rounded-full z-10"
            >
              <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[15px] leading-[18px]">
                Обо мне
              </span>
              <img
                className="w-[18px] h-[18px] mt-1"
                alt="Arrow"
                src="/figmaAssets/arrow-up-right.svg"
              />
            </a>
          </div>

          {/* Right: Quote + Title + Tagline */}
          <div className="flex-1 flex flex-col">
            {/* Quote — top right */}
            <div className="self-end [font-family:'Manrope',Helvetica] font-normal text-[#343434] text-xl text-right leading-[30px] tracking-[0] max-w-[445px]">
              «Моя задача — чтобы проблемы бизнеса решались, а не обсуждались»
            </div>

            {/* Main title */}
            <div className="mt-auto [font-family:'Manrope',Helvetica] font-normal text-[80px] leading-[92px] tracking-[0]">
              <span className="text-[#202020]">Бизнес-юрист </span>
              <span className="font-semibold text-[#226a43]">
                Надежда Уварова
              </span>
            </div>

            {/* Tagline */}
            <div className="mt-3 [font-family:'Manrope',Helvetica] font-normal text-[#343434] text-xl leading-[30px] tracking-[0]">
              Партнёрский подход к каждому делу — защищаю ваш бизнес,
              <br />
              как свой собственный
            </div>
          </div>
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
