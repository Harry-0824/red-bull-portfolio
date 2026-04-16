"use client";

import { motion } from "framer-motion";
import { Gauge, Cpu, Code2, Layers, BarChart3, Activity } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 95, icon: <Code2 className="text-rbr-yellow" /> },
  { name: "TypeScript", level: 90, icon: <Cpu className="text-rbr-yellow" /> },
  { name: "Tailwind CSS", level: 98, icon: <Layers className="text-rbr-yellow" /> },
  { name: "Performance Optimization", level: 92, icon: <Activity className="text-rbr-red" /> },
  { name: "System Architecture", level: 85, icon: <BarChart3 className="text-rbr-red" /> },
];

export default function PerformanceDashboard() {
  return (
    <section id="performance" className="py-24 px-4 bg-rbr-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-rbr-red font-mono font-bold tracking-tighter">PHASE 2 // 遙測數據</span>
            <h2 className="text-4xl font-black mt-2">技術性能指標</h2>
          </div>
          <div className="text-right font-mono text-sm text-gray-500">
            系統狀態：<span className="text-green-500">已優化</span><br />
            運行時間：99.9% 上線率
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
                  <div className="text-xs font-mono text-gray-500">動力等級</div>
                  <div className="text-2xl font-black text-rbr-yellow italic">{skill.level}%</div>
                </div>
              </div>
              
              <div className="mb-2 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>{skill.name}</span>
                <span>狀態：正常</span>
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
              <h3 className="text-2xl font-black mb-2 uppercase italic">精益求精的成長心態</h3>
              <p className="text-white/80 max-w-md font-medium">
                專注於基礎概念的紮實理解，並以極致效能為目標持續優化程式碼品質。每一行代碼都是為了更好的用戶體驗。
              </p>
            </div>
            <div className="mt-8 flex items-baseline gap-2 relative z-10 text-white">
              <span className="text-6xl font-black italic tracking-tighter">100%</span>
              <span className="text-sm font-bold uppercase">對新技術的學習熱情</span>
            </div>
            
            {/* Background Accent */}
            <BarChart3 className="absolute -right-10 -bottom-10 w-64 h-64 text-black/10 -rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

