export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full px-4 md:px-10 py-8 md:py-10 border-t border-[#e8e8e8]">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-y-4 md:gap-x-10 [font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px] leading-[20px]">
        <span>&copy; 2026 ИП Надежда Уварова. Все права защищены</span>
        <a href="#" className="hover:text-[#343434] transition-colors">
          Политика обработки персональных данных
        </a>
        <a href="#" className="hover:text-[#343434] transition-colors">
          Правила применения рекомендательных технологий
        </a>
        <a href="#" className="hover:text-[#343434] transition-colors">
          Правила использования Cookie
        </a>
        <span>Разработано студией &quot;Сопряжение&quot;</span>
      </div>
    </footer>
  );
};
