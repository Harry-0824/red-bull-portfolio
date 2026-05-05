"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    lap: "LAP 2022 - 2023",
    role: "自我實踐與技術啟蒙",
    company: "學習與個人專案",
    achievements: [
      "建立 HTML5、CSS3 與 JavaScript (ES6+) 基礎，理解網頁結構、樣式與互動邏輯。",
      "完成多個 Side Projects，練習響應式版面、資料呈現與基本使用流程設計。",
      "開始使用 React，熟悉元件拆分、props 傳遞與狀態管理的開發模式。",
    ],
    alignment: "right",
  },
  {
    lap: "LAP 2023 - 2024",
    role: "測試工程師",
    company: "緲思網路科技有限公司",
    achievements: [
      "負責產品手動測試與 Bug 追蹤，培養對介面細節、流程斷點與使用情境的敏感度。",
      "與前端團隊協作回報可重現問題，提供具體畫面、步驟與改善建議。",
      "使用 XMind 規劃測試流程與問題脈絡，提升需求理解與跨部門溝通效率。",
      "持續進修 HTML、CSS、JavaScript 與 React，將測試視角轉化為前端開發判斷。",
    ],
    alignment: "left",
  },
  {
    lap: "LAP 2025 - PRESENT",
    role: "前端工程師",
    company: "伊利諾芝加哥教育股份公司",
    achievements: [
      "參與官方網站建置與優化，改善 SEO 表現、LCP 載入速度與主要頁面可讀性。",
      "開發並維護內部 UI 元件，兼顧互動效果、可重用性與無障礙細節。",
      "整理前端開發流程與維護規範，協助提升專案穩定性與後續交接效率。",
    ],
    alignment: "right",
  },
];

const RaceHistory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="stats"
      ref={containerRef}
      className="py-24 bg-rbr-navy relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black italic tracking-tighter inline-block border-b-4 border-rbr-red text-white uppercase">
            Career Timeline
          </h2>
          <p className="text-gray-400 mt-4 font-bold uppercase tracking-widest text-xs">
            從測試思維到前端開發的實作累積。
          </p>
        </div>

        <div className="relative">
          {/* The Track (Animated Line) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block">
            <motion.div
              className="w-full bg-rbr-red origin-top"
              style={{ scaleY: pathLength, height: "100%" }}
            />
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center justify-between group"
              >
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-rbr-navy border-2 border-rbr-yellow rounded-full z-10 hidden md:block group-hover:shadow-[0_0_15px_#FCD700] transition-shadow duration-300" />

                {/* Card Container */}
                <div
                  className={`w-full md:w-[45%] ${milestone.alignment === "left" ? "md:text-right" : "md:ml-auto"}`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: milestone.alignment === "left" ? -50 : 50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-rbr-yellow/30 transition-colors"
                  >
                    <span className="text-rbr-yellow font-mono text-sm font-bold tracking-widest mb-2 block uppercase">
                      {milestone.lap}
                    </span>
                    <h3 className="text-2xl font-black text-white italic mb-1 uppercase tracking-tighter">
                      {milestone.role}
                    </h3>
                    <h4 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">
                      @ {milestone.company}
                    </h4>

                    <ul
                      className={`space-y-3 text-sm text-gray-300 font-medium ${milestone.alignment === "left" ? "md:flex md:flex-col md:items-end" : ""}`}
                    >
                      {milestone.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex gap-3">
                          {milestone.alignment === "right" && (
                            <span className="text-rbr-red text-lg leading-none">
                              /
                            </span>
                          )}
                          <span>{achievement}</span>
                          {milestone.alignment === "left" && (
                            <span className="text-rbr-red text-lg leading-none hidden md:block">
                              /
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceHistory;
