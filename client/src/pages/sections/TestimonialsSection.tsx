import { useState } from "react";

const testimonials = [
  {
    text: "Обращались к Надежде по поводу налоговой проверки. Всё объяснила простыми словами, подготовила документы и сопровождала до самого решения. Проверка закончилась без штрафов, хотя изначально сумма была внушительная. Спокойная, чёткая и надёжная — теперь на абонентском сопровождении у неё постоянно!",
    name: "Виктор Романов",
    role: "предприниматель в сфере торговли",
    date: "10.11.2025",
  },
  {
    text: "Мы работаем в быстро меняющейся сфере, и юрист нам нужен не для «пожаров», а для стратегии. Надежда помогла выстроить договорную базу, проверила контрагентов и сократила юридические риски. Главное — с ней всегда понятно, что и зачем делается. Экономим время и нервы",
    name: "Александр Дроздов",
    role: "основатель IT-компании",
    date: "02.08.2025",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-full px-4 md:px-10 py-10 md:py-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-6 md:mb-8">
        <div>
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
            Отзывы клиентов
          </h2>
          <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
            Уже доверились мне
          </span>
        </div>

        {/* Navigation arrows */}
        <div className="hidden md:flex gap-3 mt-4">
          <button
            onClick={() =>
              setCurrentSlide((p) =>
                p === 0 ? testimonials.length - 1 : p - 1,
              )
            }
            className="w-[50px] h-[50px] rounded-full border border-[#d3b85b] flex items-center justify-center text-[#d3b85b] hover:bg-[#d3b85b] hover:text-white transition-colors"
          >
            &larr;
          </button>
          <button
            onClick={() =>
              setCurrentSlide((p) =>
                p === testimonials.length - 1 ? 0 : p + 1,
              )
            }
            className="w-[50px] h-[50px] rounded-full bg-[#d3b85b] flex items-center justify-center text-white hover:bg-[#c4a94c] transition-colors"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="border border-[#e8e8e8] rounded-[20px] md:rounded-[30px] p-5 md:p-8 flex flex-col"
          >
            {/* Quote mark */}
            <span className="[font-family:'Manrope',Helvetica] font-bold text-[#226a43] text-[40px] md:text-[50px] leading-[30px] mb-4">
              &ldquo;
            </span>

            {/* Text */}
            <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] tracking-[0] flex-1 mb-6">
              {t.text}
            </p>

            {/* Author */}
            <div className="flex items-end justify-between">
              <div>
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[15px] md:text-[17px] leading-[22px]">
                  {t.name}
                </div>
                <div className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px] leading-[20px]">
                  {t.role}
                </div>
              </div>
              <span className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[13px] md:text-[14px]">
                {t.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
