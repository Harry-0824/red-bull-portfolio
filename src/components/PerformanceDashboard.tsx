"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";

const skills = [
  {
    name: "React / Next.js",
    category: "核心前端技術",
    usage: "用於作品集頁面、App Router 版面與可重用頁面區塊。",
    evidence: [
      "以元件化方式拆分作品集區塊，讓每個區塊責任清楚。",
      "使用 Next.js App Router 組合頁面結構與部署流程。",
      "把專案敘事和可維護的 React 結構連在一起。",
    ],
    icon: Code2,
    accent: "text-rbr-yellow",
  },
  {
    name: "TypeScript",
    category: "可維護性",
    usage: "用於型別化專案資料、元件 props 與前端資料契約。",
    evidence: [
      "用明確型別描述專案內容與共用資料結構。",
      "讓作品集資料在區塊調整時仍維持可預測。",
      "把資料形狀寫清楚，降低 review 與維護成本。",
    ],
    icon: Cpu,
    accent: "text-rbr-yellow",
  },
  {
    name: "樣式系統",
    category: "UI 實作",
    usage: "使用 Tailwind CSS、styled-components、SCSS 與響應式版面。",
    evidence: [
      "把視覺方向轉成可重用、可響應的 UI 區塊。",
      "在不同斷點維持深色、高對比的作品集風格。",
      "優先沿用既有樣式做法，不額外加入 UI library。",
    ],
    icon: Layers,
    accent: "text-rbr-yellow",
  },
  {
    name: "API 整合",
    category: "產品流程",
    usage: "用於天氣資料、後端 API 流程與 Supabase 資料串接。",
    evidence: [
      "把前端畫面接到真實 API 驅動的專案案例。",
      "在需要時處理使用者看得到的 loading、empty、error state。",
      "讓資料整合集中在目標功能流程，避免擴散到無關區塊。",
    ],
    icon: Activity,
    accent: "text-rbr-red",
  },
  {
    name: "測試 / 驗證",
    category: "品質訊號",
    usage: "使用 lint、build、聚焦 UI 驗證與可 review 的 diff。",
    evidence: [
      "在送出實作 PR 前執行 repo 檢查。",
      "用聚焦驗證取代大範圍、無關的重寫。",
      "把變更維持在 code review 能有效檢查的大小。",
    ],
    icon: ShieldCheck,
    accent: "text-rbr-red",
  },
  {
    name: "前端架構",
    category: "系統思維",
    usage: "用於功能邊界、資料模組與頁面層級組合。",
    evidence: [
      "在有實際幫助時拆分頁面區塊、資料與共用型別。",
      "避免沒有必要的抽象，等它能降低複雜度時才加入。",
      "優先維持清楚結構，方便後續維護與交接。",
    ],
    icon: BarChart3,
    accent: "text-rbr-red",
  },
];

const interviewSignals = [
  "用專案證據取代主觀分數",
  "證據連到作品集、SaaS、API、UI 與驗證工作",
  "卡片內容可支援履歷初篩與技術面試討論",
];

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
            能力不靠百分比說明，而是透過已完成的頁面區塊、型別化資料、
            API 流程、驗證習慣與可維護的實作選擇來呈現。
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
