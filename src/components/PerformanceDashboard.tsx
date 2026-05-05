"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Layers, BarChart3, Activity } from "lucide-react";

const skills = [
  {
    name: "React / Next.js",
    level: 95,
    icon: <Code2 className="text-rbr-yellow" />,
  },
  {
    name: "TypeScript",
    level: 70,
    status: "學習中",
    icon: <Cpu className="text-rbr-yellow" />,
  },
  {
    name: "Styled Components / SCSS",
    level: 98,
    icon: <Layers className="text-rbr-yellow" />,
  },
  {
    name: "Tailwind CSS",
    level: 70,
    status: "學習中",
    icon: <Layers className="text-rbr-yellow" />,
  },
  {
    name: "Performance Optimization",
    level: 92,
    icon: <Activity className="text-rbr-red" />,
  },
  {
    name: "System Architecture",
    level: 85,
    icon: <BarChart3 className="text-rbr-red" />,
  },
];

export default function PerformanceDashboard() {
  return (
    <section
      id="performance"
      className="py-24 px-4 bg-rbr-navy border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-rbr-red font-mono font-bold tracking-tighter">
              SKILLS // 技術能力
            </span>
            <h2 className="text-4xl font-black mt-2">核心前端能力</h2>
          </div>
          <div className="text-left md:text-right font-mono text-sm text-gray-500">
            專注方向：<span className="text-green-500">前端開發</span>
            <br />
            工作方式：重視可維護性
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg group hover:border-rbr-yellow/50 hover:bg-white/10 transition-all cursor-crosshair"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-rbr-navy rounded-sm border border-white/10 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-gray-500">熟悉度</div>
                  <div className="text-2xl font-black text-rbr-yellow italic">
                    {skill.level}%
                  </div>
                </div>
              </div>

              <div className="mb-2 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>{skill.name}</span>
                <span>{skill.status ?? "可應用"}</span>
              </div>

              <div className="h-2 bg-rbr-navy border border-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-rbr-red to-rbr-yellow"
                />
              </div>
            </motion.div>
          ))}

          {/* Large Dashboard Metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-rbr-red p-8 rounded-lg flex flex-col justify-between overflow-hidden relative"
          >
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-black mb-2 uppercase italic">
                以可維護性與使用體驗為核心
              </h3>
              <p className="text-white/80 max-w-md font-medium">
                重視元件結構、資料流與程式碼可讀性，讓介面不只完成需求，也能支撐後續維護與迭代。
              </p>
            </div>
            <div className="mt-8 flex items-baseline gap-2 relative z-10 text-white">
              <span className="text-6xl font-black italic tracking-tighter">
                100%
              </span>
              <span className="text-sm font-bold uppercase">
                持續學習與改善
              </span>
            </div>

            {/* Background Accent */}
            <BarChart3 className="absolute -right-10 -bottom-10 w-64 h-64 text-black/10 -rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
