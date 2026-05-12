import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/lib/animations";
import PrinciplesCard from "./PrinciplesCard";
import "./PrinciplesCard.css";

const principles = [
  { src: "/principle-1.png", alt: "01 — Информационная открытость", count: "01", title: "Информационная открытость", text: "Все действия, риски и решения объясняются простым языком. Клиент всегда понимает, что происходит, зачем и почему"  },
  { src: "/principle-2.svg", alt: "02 — Работа, рассчитанная на результат", count: "02", title: "Работа, рассчитанная на результат", text: "Каждый вопрос довожу до результата. Не перекладываю задачи на клиента и не оставляю дела «в подвешенном состоянии»" },
  { src: "/principle-3.png", alt: "03 — Бизнес-ориентированность", count: "03", title: "Бизнес-ориентированность", text: "Работаю как часть бизнеса: учитываю интересы компании, особенности всех процессов, долгосрочные цели и перспективы",  },
  { src: "/principle-4.png", alt: "04 — Защита всей вашей информации", count: "04", title: "Защита всей вашей информации", text: "Вся информация, полученная в процессе работы, остаётся только между мной и клиентом и не передаётся третьим лицам" },
];

const MobileSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden -mx-4" ref={emblaRef}>
        <div className="flex MobileSlider">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="min-w-0 pl-4"
              
            >
              <PrinciplesCard count={p.count} title={p.title} text={p.text} bol={p.count === "04"}  />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {principles.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "bg-[#226a43] w-6"
                : "bg-[#dcdcdc]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const PrinciplesSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-10 py-10 md:py-16">
      <FadeIn>
        <div className="mb-6 md:mb-8">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[130%] tracking-[0]">
            Принципы работы
          </h2>
          <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[130%] tracking-[0]">
            Фундамент наших отношений
          </span>
        </div>
      </FadeIn>

      {/* Mobile: horizontal slider */}
      <MobileSlider />

      {/* Mobile: photo with quote */}
      <div className="md:hidden mt-8">
        <div className="principles-photo__container">
          <img
            className="principles-photo__img"
            alt="Надежда Уварова"
            src="/photo-principles.png"
          />
          <div className="principles-quote">
            <p>«Юрист — это не расходы, а инвестиция в отсутствие проблем»</p>
          </div>
        </div>
      </div>

      {/* Desktop: original layout */}
      <div className="hidden md:flex principles-layout">
        {/* Карточки каскадом */}
        <div className="principles-cards">
          {principles.map((p, idx) => (
            <FadeIn key={idx} delay={idx * 0.12} className={`principles-card ${idx % 2 === 1 ? "principles-card--offset" : ""}`}>
              <motion.div
                className="principles-card__img"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <PrinciplesCard count={p.count} title={p.title} text={p.text} bol={p.count === "04"}  />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Фото с цитатой в вырезе */}
        <FadeIn direction="right" delay={0.3} className="principles-photo">
          <div className="principles-photo__container">
            <img
              className="principles-photo__img"
              alt="Надежда Уварова"
              src="/photo-principles.png"
            />
            <div className="principles-quote">
              <p>«Юрист — это не расходы, а инвестиция в отсутствие проблем»</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
