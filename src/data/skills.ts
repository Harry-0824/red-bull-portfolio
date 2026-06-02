import {
  Activity,
  BarChart3,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";

// 技能卡片使用資料驅動，讓文字證據、分類與 icon 能在同一處維護。
export const skills = [
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

// 這組面試訊號會渲染在技能區塊的紅色總結卡，補足技能與作品證據的連結。
export const interviewSignals = [
  "用專案證據取代主觀分數",
  "證據連到作品集、SaaS、API、UI 與驗證工作",
  "卡片內容可支援履歷初篩與技術面試討論",
];
