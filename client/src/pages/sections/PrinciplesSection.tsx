import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";

const principles = [
  {
    num: "01",
    title: "Информационная открытость",
    description:
      "Все действия ясны и прозрачны. Объясняю простыми словами, без лишней юридической терминологии.",
    isGreen: true,
  },
  {
    num: "02",
    title: "Работа, рассчитанная на результат",
    description:
      "Не ограничиваюсь стандартными решениями. Разрабатываю стратегию, направленную на максимальный эффект.",
    isGreen: false,
  },
  {
    num: "03",
    title: "Бизнес-ориентированность",
    description:
      "Работаю так, чтобы юристка стала инструментом для роста вашего бизнеса, а не просто формальным сопровождением.",
    isGreen: true,
  },
  {
    num: "04",
    title: "Защита всей вашей информации",
    description:
      "Гарантирую полную конфиденциальность данных и всей деловой информации.",
    isGreen: false,
  },
];

export const PrinciplesSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-10 py-10 md:py-16">
      <FadeIn>
        <div className="mb-6 md:mb-8">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
            Принципы работы
          </h2>
          <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#aeaeae] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0]">
            Фундамент наших отношений
          </span>
        </div>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 flex-1"
          staggerDelay={0.12}
        >
          {principles.map((p) => (
            <StaggerItem key={p.num}>
              <motion.div
                className={`rounded-[20px] md:rounded-[30px] p-5 md:p-6 h-full ${
                  p.isGreen ? "bg-[#226a43]" : "bg-[#f3f3f3]"
                }`}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className={`[font-family:'Manrope',Helvetica] font-semibold text-[13px] md:text-[15px] leading-[18px] ${
                    p.isGreen ? "text-white/60" : "text-[#aeaeae]"
                  }`}
                >
                  {p.num}
                </span>
                <h3
                  className={`[font-family:'Manrope',Helvetica] font-semibold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[0] mt-3 mb-2 ${
                    p.isGreen ? "text-white" : "text-[#202020]"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`[font-family:'Manrope',Helvetica] font-normal text-[13px] md:text-[15px] leading-[20px] md:leading-[22.5px] tracking-[0] ${
                    p.isGreen ? "text-white/80" : "text-[#343434]"
                  }`}
                >
                  {p.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="right" delay={0.3} className="w-full md:w-[40%] flex flex-col gap-4">
          <motion.div
            className="rounded-[30px] md:rounded-[50px] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              className="w-full aspect-[3/4] object-cover"
              alt="Надежда Уварова"
              src="/figmaAssets/----.png"
            />
          </motion.div>
          <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[14px] md:text-base leading-[22px] md:leading-[26px] tracking-[0] italic">
            «Юрист — это не расходы, а инвестиция в отсутствие проблем»
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
