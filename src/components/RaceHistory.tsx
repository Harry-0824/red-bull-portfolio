"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { milestones } from "@/data/milestones";

const RaceHistory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // 追蹤時間軸區塊在視窗中的捲動進度，用來驅動中線填滿動畫。
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // 用 spring 平滑 scrollYProgress，避免線條高度隨捲動產生生硬跳動。
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
          {/* 桌面版中線代表職涯賽道，scaleY 會隨區塊捲動進度向下延伸。 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block">
            <motion.div
              className="w-full bg-rbr-red origin-top"
              style={{ scaleY: pathLength, height: "100%" }}
            />
          </div>

          <div className="space-y-12">
            {/* 每個 milestone 依 alignment 決定左右位置，形成交錯時間軸。 */}
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center justify-between group"
              >
                {/* 節點只在桌面版顯示，對齊中央賽道並提供 hover 焦點。 */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-rbr-navy border-2 border-rbr-yellow rounded-full z-10 hidden md:block group-hover:shadow-[0_0_15px_#FCD700] transition-shadow duration-300" />

                {/* alignment 會同時影響卡片位置與文字方向，讓資料層控制版面節奏。 */}
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
                      {/* achievements 逐項渲染，左右兩側用不同斜線位置維持時間軸視覺平衡。 */}
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
