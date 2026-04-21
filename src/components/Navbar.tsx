"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "效能指標", id: "performance" },
    { name: "專案展示", id: "projects" },
    { name: "數據統計", id: "stats" },
    { name: "聯絡我", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-rbr-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-black italic tracking-tighter text-white"
        >
          PRINC<span className="text-rbr-red text-2xl">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 lg:gap-14 xl:gap-20">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-base xl:text-lg font-extrabold uppercase tracking-widest text-gray-200 hover:text-rbr-yellow transition-colors px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-rbr-navy"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-rbr-navy"
          >
            {isMenuOpen ? (
              <X className="text-rbr-red w-7 h-7" />
            ) : (
              <Menu className="text-rbr-yellow w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-rbr-navy border-b border-white/5 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-extrabold uppercase tracking-widest text-gray-200 hover:text-rbr-yellow transition-colors py-3 px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-rbr-navy border-b border-white/10 last:border-0"
                  tabIndex={0}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Racing Line Animation */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-[3px] bg-rbr-red"
      />
    </nav>
  );
};

export default Navbar;
