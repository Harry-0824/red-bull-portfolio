import type { Project } from "@/types/project";

// 作品資料集中管理，首頁卡片與詳細 Modal 共用同一份內容來源。
export const projects: Project[] = [
  {
    title: "TicketFlow 全端工單管理系統",
    category: "全端 MVP",
    description:
      "可操作的票務/工單管理系統，前端 Vue 3 + Vite，後端 ASP.NET Core Minimal API + EF Core，資料庫 SQLite / Supabase PostgreSQL 切換。自建 register / login / JWT，不走第三方 Auth。",
    objective:
      "展示從需求拆分、前後端 API contract、到部署上線的完整交付流程，是面試時最具說服力的主力專案。",
    stack: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "ASP.NET Core",
      "EF Core",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
    ],
    metrics: [
      { label: "核心流程", value: "Auth + Ticket CRUD" },
      { label: "資料隔離", value: "EF Core + RLS" },
      { label: "部署", value: "Netlify / Render / Supabase" },
      { label: "CI", value: "GitHub Actions dotnet + node" },
    ],
    links: {
      live: "https://ticket-flow-harry-0824.netlify.app/",
      github: "https://github.com/Harry-0824/ticket-flow",
    },
    tags: ["Vue 3", "ASP.NET Core", "EF Core", "Supabase", "JWT", "全端"],
  },
  {
    title: "企業前端專案（公開摘要）",
    category: "商業前端專案",
    description:
      "目標：交付並維護正式上線的 Web 介面。主要職責：實作可重用 UI、優化 RWD 與互動流程、對接後端 API 規格。前端價值：在時程內維持一致體驗與可維護品質。",
    objective:
      "此項目僅提供可公開的通用摘要，不揭露任何公司私有資訊或內部素材。",
    stack: [
      "React",
      "JavaScript",
      "SCSS",
      "RESTful API",
      "GitHub Actions",
      "Firebase",
    ],
    metrics: [
      { label: "專案型態", value: "正式環境前端" },
      { label: "主要職責", value: "UI 與 API 串接" },
      { label: "公開範圍", value: "通用摘要" },
    ],
    links: {
      live: "https://bright-edu-data.web.app/",
    },
    tags: ["前端開發", "JavaScript", "響應式介面", "正式環境交付"],
  },
  {
    title: "Red Bull / Apex Flow 作品集網站",
    category: "個人作品集",
    description:
      "目標：以高辨識度版面清楚呈現前端作品。主要職責：區塊設計落地、專案卡片與互動流程實作、資料驅動內容維護。前端價值：兼顧視覺層次、互動體驗與內容可維護性。",
    objective: "讓訪客可快速理解專案重點、責任範圍與技術能力。",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Netlify",
    ],
    metrics: [
      { label: "主要用途", value: "個人作品展示" },
      { label: "前端重點", value: "資訊呈現與互動體驗" },
      { label: "部署平台", value: "Netlify" },
    ],
    links: {
      live: "https://apex-flow-portfolio.netlify.app/",
      github: "https://github.com/Harry-0824/red-bull-portfolio",
    },
    tags: ["Next.js", "作品集", "前端敘事", "品牌化介面"],
  },
  {
    title: "My Brand Workspace SaaS",
    category: "SaaS 產品",
    description:
      "為自由工作者打造的私人工作區 SaaS MVP，整合專案、客戶、任務與收入紀錄 CRUD，並以真實資料驅動 Dashboard 與 Reports 檢視日常營運狀態。產品同時納入登入門檻、Supabase Auth 與 PostgreSQL RLS 資料隔離，完整呈現可部署的 SaaS 核心流程。",
    objective:
      "強化作品集中的 SaaS case study 表達，呈現從使用者問題、權限控管到資料驅動介面的完整產品落地能力。",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Styled Components",
      "Supabase",
      "Vitest",
      "Testing Library",
      "Netlify",
    ],
    metrics: [
      { label: "核心流程", value: "Projects / Clients / Tasks / Income CRUD" },
      { label: "權限與資料", value: "Supabase Auth / PostgreSQL RLS" },
      { label: "品質與部署", value: "Vitest / Testing Library / Netlify" },
    ],
    links: {
      live: "https://harry-brand-workspace.netlify.app/",
      github: "https://github.com/Harry-0824/my-brand-workspace",
    },
    tags: ["SaaS MVP", "Supabase Auth", "PostgreSQL RLS", "Dashboard / Reports"],
  },
  {
    title: "MG MOTOR React 品牌網站",
    category: "品牌網站",
    description:
      "目標：打造品牌導向的汽車官網體驗。主要職責：前端頁面實作、RWD 版型調整、以及 API 串接內容呈現。前端價值：展示 React 實務開發與真實整合情境下的交付能力。",
    objective: "呈現從品牌視覺落地到資料串接的完整前端實作流程。",
    stack: [
      "React",
      "JavaScript",
      "Styled Components",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    metrics: [
      { label: "核心方向", value: "品牌網站 + RWD" },
      { label: "資料整合", value: "Express / PostgreSQL API" },
      { label: "展示環境", value: "Netlify" },
    ],
    links: {
      live: "https://mg-motor.netlify.app/",
      github: "https://github.com/Harry-0824/MG-motor",
      githubBackend: "https://github.com/Harry-0824/mg-motor-api",
    },
    tags: ["React", "RWD", "API 串接", "品牌網站"],
  },
];
