import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";

const allServices = [
  { id: 1, src: "/service-1.svg", alt: "Сопровождение бизнеса" },
  { id: 2, src: "/service-2.svg", alt: "Сопровождение налоговых проверок" },
  { id: 3, src: "/service-3.svg", alt: "Представление интересов юридических лиц в суде" },
  { id: 4, src: "/service-4.svg", alt: "Регистрация и запуск бизнеса" },
  { id: 5, src: "/service-5.svg", alt: "Разработка и ведение документации" },
  { id: 6, src: "/service-6.svg", alt: "Получение субсидий и господдержки" },
];

const ServiceCard = ({ service }: { service: (typeof allServices)[0] }) => {
  return (
    <motion.div
      className="relative w-full h-full"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <img
        src={service.src}
        alt={service.alt}
        className="w-full h-auto block"
      />
      {/* Clickable button overlay positioned over the button area in the SVG */}
      <a
        href="#contact"
        className="absolute left-[5.7%] right-[5.7%] bottom-[4.8%] h-[12%] rounded-[31.5px] cursor-pointer"
        aria-label={`Заказать: ${service.alt}`}
      />
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
      <div className="overflow-hidden -mx-4" ref={emblaRef}>
        <div className="flex">
          {allServices.map((service) => (
            <div
              key={service.id}
              className="flex-[0_0_85%] min-w-0 pl-4"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 pb-8">
        {allServices.map((_, idx) => (
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
        className="hidden md:grid grid-cols-3 gap-6 w-full pb-10"
        staggerDelay={0.1}
      >
        {allServices.map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
