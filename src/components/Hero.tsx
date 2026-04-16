"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-rbr-navy bg-grid-glowing">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-rbr-navy/80 z-0" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Status Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 font-mono text-sm tracking-[0.2em] border border-rbr-yellow/30 px-4 py-2 bg-rbr-yellow/5"
        >
          [ <span className="text-rbr-yellow font-bold">系統狀態：全速運行中</span> ]
        </motion.div>

        {/* Headline */}
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          PRINC
        </h1>

        {/* Sub-headline / Slogan */}
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base max-w-lg mb-12">
          前端工程師，熱衷於以紮實的基礎與極速的學習力打造流暢的網頁介面。
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shimmer-effect px-10 py-4 bg-rbr-red text-white font-black italic tracking-widest uppercase text-sm rounded-sm shadow-[0_0_20px_rgba(224,30,34,0.3)] transition-all"
        >
          查看我的專案
        </motion.button>
      </motion.div>

      {/* Decorative Racing Lines */}
      <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 items-end opacity-20 z-0 pointer-events-none">
        <div className="h-24 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
        <div className="h-48 w-[2px] bg-gradient-to-t from-rbr-yellow to-transparent" />
        <div className="h-32 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
