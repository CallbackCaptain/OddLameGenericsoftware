import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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

      {/* CTA Button — desktop only */}
      <motion.div
        className="hidden lg:block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="outline"
          className="h-auto flex-shrink-0 px-[25px] py-5 rounded-[32px] border border-solid border-[#dcdcdc] bg-transparent hover:bg-[#226a43] hover:text-white hover:border-[#226a43] shadow-none [font-family:'Manrope',Helvetica] font-semibold text-[#333333] text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap transition-colors duration-300"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Оставить заявку
        </Button>
      </motion.div>

      {/* Burger — visible below lg */}
      <button
        type="button"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-[12px] bg-[#202020] flex-shrink-0"
      >
        <span className="sr-only">Меню</span>
        <span className="relative w-5 h-4 block">
          <motion.span
            className="absolute left-0 right-0 h-[2px] bg-white rounded-full"
            animate={menuOpen ? { top: 7, rotate: 45 } : { top: 0, rotate: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="absolute left-0 right-0 top-[7px] h-[2px] bg-white rounded-full"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute left-0 right-0 h-[2px] bg-white rounded-full"
            animate={menuOpen ? { top: 7, rotate: -45 } : { top: 14, rotate: 0 }}
            transition={{ duration: 0.25 }}
          />
        </span>
      </button>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-white z-[60] flex flex-col px-4 pt-[15px] pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header inside menu */}
            <div className="flex items-center justify-between">
              <img
                className="w-[64px] h-[64px] object-cover flex-shrink-0"
                alt="Logo"
                src="/figmaAssets/-----1.png"
              />
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setMenuOpen(false)}
                className="relative w-12 h-12 flex items-center justify-center rounded-[12px] bg-[#202020] flex-shrink-0"
              >
                <span className="sr-only">Закрыть</span>
                <span className="relative w-5 h-5 block">
                  <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-white rounded-full rotate-45" />
                  <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-white rounded-full -rotate-45" />
                </span>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-[25px] mt-[35px]">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[24px] leading-[130%]"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.04, duration: 0.25 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom actions */}
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 px-[35px] h-[58px] bg-[#f3f3f3] rounded-[50px] [font-family:'Manrope',Helvetica] font-medium text-[#343434] text-[15px]"
              >
                <svg width="28" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.98-1.73 6.64-2.87 7.97-3.43 3.79-1.58 4.58-1.85 5.09-1.86.11 0 .37.03.53.17.14.12.18.28.2.45-.01.06.01.24 0 .46z" fill="#D4B85C" />
                </svg>
                Telegram
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-[35px] h-[58px] bg-[#f3f3f3] rounded-[50px] [font-family:'Manrope',Helvetica] font-medium text-[#343434] text-[15px]"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#D4B85C" />
                </svg>
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="h-[51px] bg-[#D3B85B] rounded-[32px] [font-family:'Manrope',Helvetica] font-semibold text-white text-[14px] leading-[150%]"
              >
                Оставить заявку
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
