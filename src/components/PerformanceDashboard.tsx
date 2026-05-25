"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { interviewSignals, skills } from "../data/skills";

export default function PerformanceDashboard() {
  return (
    <section
      id="performance"
      className="relative bg-rbr-navy border-t border-white/5 px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-sm font-bold text-rbr-red">
              技能 // 面試證據
            </span>
            <h2 className="mt-2 text-4xl font-black text-white">
              用專案成果證明技能
            </h2>
          </div>
          <p className="max-w-xl text-left font-mono text-sm text-gray-400 md:text-right">
            能力不靠百分比說明，而是透過已完成的頁面區塊、型別化資料、API
            流程、驗證習慣與可維護的實作選擇來呈現。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex min-h-[22rem] flex-col rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:border-rbr-yellow/50 hover:bg-white/10"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-sm border border-white/10 bg-rbr-navy p-3 transition-transform group-hover:scale-105">
                    <SkillIcon className={skill.accent} aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-right font-mono text-xs font-bold uppercase text-gray-300">
                    {skill.category}
                  </span>
                </div>

                <div className="mb-5">
                  <h3 className="text-xl font-black uppercase italic text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {skill.usage}
                  </p>
                </div>

                <ul className="mt-auto space-y-3">
                  {skill.evidence.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-gray-200"
                    >
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rbr-yellow"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}

          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg bg-rbr-red p-8 text-white md:col-span-2 lg:col-span-3"
          >
            <div className="relative z-10 max-w-3xl">
              <span className="font-mono text-sm font-bold uppercase text-white/75">
                求職面試訊號
              </span>
              <h3 className="mt-3 text-2xl font-black uppercase italic md:text-3xl">
                技能呈現改用證據脈絡，不再依賴百分比分數。
              </h3>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {interviewSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-md border border-white/20 bg-black/15 p-4 text-sm font-semibold leading-6 text-white/90"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <BarChart3
              className="absolute -bottom-12 -right-8 h-56 w-56 -rotate-12 text-black/10"
              aria-hidden="true"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
