export const CTASection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-10 py-10 md:py-16">
      <div className="[font-family:'Manrope',Helvetica] font-semibold tracking-[0]">
        <div className="text-[#226a43] text-[28px] md:text-[70px] leading-[130%] md:leading-[140%]">
          Запишитесь на консультацию
        </div>
        <div className="md:ml-[283px] text-[#202020] text-[28px] md:text-[70px] leading-[130%] md:leading-[140%]">
          и защитите свой бизнес
        </div>
        <div className="md:ml-[140px] flex items-center gap-4 text-[#202020] text-[28px] md:text-[70px] leading-[130%] md:leading-[140%]">
          уже сегодня
          <a
            href="#contact"
            className="inline-flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex-shrink-0"
          >
            <img
              className="w-[24px] h-[24px] md:w-[36px] md:h-[36px]"
              alt="Arrow"
              src="/figmaAssets/arrow-up-right.svg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
