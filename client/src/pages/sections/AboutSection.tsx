import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";

const features = [
  {
    title: "Быстрое вхождение в процесс",
    description:
      "Я быстро погружаюсь в специфику и отрасль бизнеса. Это позволяет оперативно включиться в работу без длительной раскачки.",
  },
  {
    title: "Доверительные отношения",
    description:
      'Строю работу с клиентом как партнёр. Мне важна прозрачность, поэтому я всегда "на связи" — информация доступна и понятна.',
  },
  {
    title: "Безопасность и конфиденциальность",
    description:
      "Все данные клиентов находятся под надёжной защитой. Это не формальность — это то, на чём строится доверие.",
  },
];

export const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="w-full px-4 md:px-10 py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8 md:mb-12">
        <FadeIn direction="left" className="w-full md:w-[45%] flex-shrink-0">
          <motion.div
            className="rounded-[30px] md:rounded-[50px] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              className="w-full aspect-[4/3] object-cover"
              alt="Надежда Уварова"
              src="/figmaAssets/----.png"
            />
          </motion.div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="flex-1 flex flex-col justify-center">
          <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[28px] md:text-[45px] leading-[36px] md:leading-[58.5px] tracking-[0] mb-4 md:mb-6">
            Юрист, которому можно
            <br />
            доверить бизнес
          </h2>
          <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[14px] md:text-base leading-[22px] md:leading-[26px] tracking-[0]">
            Меня зовут Надежда Уварова. Более 10 лет я помогаю предпринимателям
            решать юридические вопросы — от запуска бизнеса и подготовки
            документов до сопровождения сделок и представительства в судах.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" staggerDelay={0.12}>
        {features.map((feature, idx) => (
          <StaggerItem key={idx}>
            <motion.div
              className="bg-[#f3f3f3] rounded-[20px] md:rounded-[30px] p-5 md:p-6 h-full"
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[0] mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#343434] text-[13px] md:text-[15px] leading-[20px] md:leading-[22.5px] tracking-[0]">
                {feature.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
