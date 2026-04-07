import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Быстрое вовлечение в процесс",
    description: "Я оперативно погружаюсь в специфику бизнеса, без затяжных этапов",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Доверительные отношения",
    description: "Говорю прямо о шансах, сроках и стоимости. Никаких скрытых платежей и ложных обещаний",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Безопасность и конфиденциальность",
    description: "Никаких утечек информации. Всё, что вы доверили мне — останется между нами",
  },
];

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
  <motion.div
    className="about-card h-full"
    whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="about-card__icon">{feature.icon}</div>
    <h3 className="about-card__title">{feature.title}</h3>
    <p className="about-card__desc">{feature.description}</p>
  </motion.div>
);

const FeaturesSlider = () => {
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
    <div className="about-section__slider">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-stretch">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex-[0_0_80%] min-w-0 sm:flex-[0_0_60%] md:flex-[0_0_45%] ${idx < features.length - 1 ? "pr-4" : ""}`}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {features.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "bg-[#226a43] w-6" : "bg-[#dcdcdc] w-2"
            }`}
            aria-label={`Слайд ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__container">
        {/* Top row: photo + text */}
        <div className="about-section__top">
          <FadeIn direction="left" className="about-section__photo-wrap">
            <img
              src="/photo-about.png"
              alt="Надежда Уварова — юрист"
              className="about-section__photo about-section__photo--desktop"
            />
            <img
              src="/photo-about-mobile.png"
              alt="Надежда Уварова — юрист"
              className="about-section__photo about-section__photo--mobile"
            />
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="about-section__text">
            <h2 className="about-section__title">
              Юрист, которому можно доверить бизнес
            </h2>
            <p className="about-section__desc">
              Меня зовут Надежда Уварова. Более 10 лет я оказываю юридическое
              сопровождение предпринимателям и компаниям — от запуска бизнеса и
              первых шагов стартапа до сопровождения уже работающих организаций
            </p>
          </FadeIn>
        </div>

        {/* Cards row — desktop grid (≥1100px) */}
        <StaggerContainer className="about-section__cards" staggerDelay={0.1}>
          {features.map((feature, idx) => (
            <StaggerItem key={idx}>
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Slider — shown below 1100px */}
        <FeaturesSlider />
      </div>
    </section>
  );
};
