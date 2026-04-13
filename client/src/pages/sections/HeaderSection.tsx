import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export const HeaderSection = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`w-full flex items-center justify-between px-4 md:px-10 pt-[15px] pb-3 h-auto sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Logo */}
      <motion.img
        className="w-[50px] h-[50px] md:w-[67px] md:h-[67px] object-cover flex-shrink-0"
        alt="Logo"
        src="/figmaAssets/-----1.png"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />

      {/* Navigation Links — hidden on mobile */}
      <nav className="hidden lg:flex items-center gap-[50px]">
        {navItems.map((item, idx) => (
          <motion.a
            key={item.label}
            href={`/${item.href}`}
            className="[font-family:'Manrope',Helvetica] font-semibold text-[#333333] text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap cursor-pointer relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
            whileHover={{ color: "#226a43" }}
          >
            {item.label}
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#226a43]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        ))}
      </nav>

      {/* CTA Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="outline"
          className="h-auto flex-shrink-0 px-4 py-3 md:px-[25px] md:py-5 rounded-[32px] border border-solid border-[#dcdcdc] bg-transparent hover:bg-[#226a43] hover:text-white hover:border-[#226a43] shadow-none [font-family:'Manrope',Helvetica] font-semibold text-[#333333] text-[13px] md:text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap transition-colors duration-300"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Оставить заявку
        </Button>
      </motion.div>
    </motion.header>
  );
};
