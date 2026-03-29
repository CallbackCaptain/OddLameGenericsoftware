import { motion } from "framer-motion";
import { FadeIn } from "@/lib/animations";

const principles = [
  { src: "/principle-1.png", alt: "01 — Информационная открытость" },
  { src: "/principle-2.svg", alt: "02 — Работа, рассчитанная на результат" },
  { src: "/principle-3.png", alt: "03 — Бизнес-ориентированность" },
  { src: "/principle-4.png", alt: "04 — Защита всей вашей информации" },
];

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

      <div className="principles-layout">
        {/* Карточки каскадом */}
        <div className="principles-cards">
          {principles.map((p, idx) => (
            <FadeIn key={idx} delay={idx * 0.12} className={`principles-card ${idx % 2 === 1 ? "principles-card--offset" : ""}`}>
              <motion.img
                src={p.src}
                alt={p.alt}
                className="principles-card__img"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              />
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
