"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Primary"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-rbr-navy/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Apex Flow homepage"
          className="flex items-center gap-2 text-xl font-black italic tracking-tighter text-white"
        >
          <Image
            src="/brand/apex-flow-logo.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            priority
            sizes="28px"
          />
          <span>Apex Flow</span>
        </Link>

        <div className="hidden gap-10 md:flex lg:gap-14 xl:gap-20">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="rounded px-2 py-1 text-base font-extrabold uppercase tracking-widest text-gray-200 transition-colors hover:text-rbr-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-rbr-navy xl:text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="rounded p-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-rbr-navy"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-rbr-red" />
            ) : (
              <Menu className="h-7 w-7 text-rbr-yellow" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/5 bg-rbr-navy shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded border-b border-white/10 px-2 py-3 text-base font-extrabold uppercase tracking-widest text-gray-200 transition-colors hover:text-rbr-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-rbr-navy last:border-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
        className="absolute bottom-0 left-0 h-[3px] w-full bg-rbr-red"
      />
    </nav>
  );
}
