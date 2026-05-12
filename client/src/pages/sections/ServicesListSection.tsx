import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Card, cards } from "./data";
import "./styles.css"

export const ServiceCard = ({ card, isMob }: { card: Card, isMob?: boolean }) => {
  const { tegs, wtags, rad, title, discription, background, color, mob } = card

  console.log(mob, isMob)

  const isMobail = isMob && mob  

  return (
    <motion.div
      className="relative w-full h-full text-white serviceCard"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ background, color, }}
    >
      
      <div
        className="serviceCard__tags"
        style={isMobail ? {
          width: mob.wtags,
          height: 145
        } : { width: wtags }}
      />

      <div
        className="serviceCard__rl"
        style={isMobail ? {
          top: 42,
        } : {}}
      />

      <div
        className="serviceCard__rr"
        style={{ left: isMobail ? mob.rad : rad }}
      />

      <div
        className="serviceCard__itemsv"
        style={isMobail ? {
          flexDirection: "column",
          gap: 8
        } : {}}
      >
        {tegs.map((tag) => (
          <div
            className="serviceCard__itemv"
            kay={tag}
          >
              {tag}
          </div>
        ))}
      </div>

      <div className="serviceCard__content">
        <h4 className="serviceCard__title">{title}</h4>

        <ul className="serviceCard__discription">
          {discription.map(item => (
            <li className="serviceCard__item" kye={item}>
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="serviceCard__action"
          aria-label={`Заказать: услугу`}
        >
          <span>Заказать услугу</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path d="M6.70703 16.2918L16.2904 6.7085M16.2904 6.7085H6.70703M16.2904 6.7085V16.2918" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

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
      <div className="overflowX-hidden -mx-4" ref={emblaRef}>
        <div className="flex">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-[0_0_85%] min-w-[336px] pl-4"
            >
              <ServiceCard card={card} isMob />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 pb-8">
        {cards.map(({ id }) => (
          <button
            key={id}
            onClick={() => emblaApi?.scrollTo(id)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === id
                ? "bg-[#226a43] w-6"
                : "bg-[#dcdcdc]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const ServicesListSection = (): JSX.Element => {
  return (
    <section id="services" className="w-full px-4 md:px-10">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full mb-6 md:mb-[35px]">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] [font-family:'Manrope',Helvetica] tracking-[0]">
              Услуги юриста
            </h2>
            <span className="font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] [font-family:'Manrope',Helvetica] tracking-[0]">
              Выберите подходящию
            </span>
          </div>
          <p className="hidden md:block w-[330px] font-normal text-[#343434] text-xl text-right leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0] mt-[14px]">
            Юридические решения для бизнеса на всех этапах работы
          </p>
        </div>
      </FadeIn>

      {/* Mobile: horizontal slider */}
      <MobileSlider />

      {/* Desktop: 3-col grid */}
      <StaggerContainer
        className="hidden md:grid card1:grid-cols-1 card2:grid-cols-2 card3:grid-cols-3 gap-6 w-full pb-10"
        staggerDelay={0.1}
      >
        {cards.map((card) => (
          <StaggerItem key={card.id}>
            <ServiceCard card={card} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
