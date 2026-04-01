import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="[font-family:'Manrope',Helvetica] font-semibold text-[#226a43] text-[120px] md:text-[180px] leading-none tracking-tight"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
        >
          404
        </motion.h1>
        <motion.p
          className="[font-family:'Manrope',Helvetica] font-semibold text-[#202020] text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] mt-4 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Страница не найдена
        </motion.p>
        <motion.p
          className="[font-family:'Manrope',Helvetica] font-normal text-[#aeaeae] text-[15px] md:text-[17px] leading-[24px] mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Возможно, эта страница была удалена или вы перешли по неверной ссылке
        </motion.p>
        <motion.a
          href="/"
          className="inline-block px-8 py-3.5 bg-[#226a43] text-white rounded-full [font-family:'Manrope',Helvetica] font-semibold text-[15px] transition-colors duration-200 hover:bg-[#1b5636]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          На главную
        </motion.a>
      </motion.div>
    </div>
  );
}
