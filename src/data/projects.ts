import type { Project } from "@/types/project";

// 作品資料集中管理，首頁卡片與詳細 Modal 共用同一份內容來源。
export const projects: Project[] = [
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
    image: "",
    links: {
      live: "https://bright-edu-data.web.app/",
    },
    tags: ["前端開發", "JavaScript", "響應式介面", "正式環境交付"],
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
    image: "/projects/mg-motor.png",
    links: {
      live: "https://mg-motor.netlify.app/",
      // 前後端 repo 分開呈現，Modal 會依 githubBackend 是否存在調整按鈕文案。
      github: "https://github.com/Harry-0824/MG-motor",
      githubBackend: "https://github.com/Harry-0824/my-api-project",
    },
    tags: ["React", "RWD", "API 串接", "品牌網站"],
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
    image: "/brand/apex-flow-logo.svg",
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
      "目標：持續迭代個人 SaaS 工作流產品。主要職責：CRUD 流程與狀態處理、跨頁互動設計、可部署的前端行為落地。前端價值：從產品思維到可測試介面的完整實務能力。",
    objective: "展示長期維運型 SaaS 專案中的前端主導與迭代能力。",
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
      { label: "產品方向", value: "工作流 SaaS" },
      { label: "資料層", value: "Supabase" },
      { label: "驗證方式", value: "Vitest / Testing Library" },
    ],
    image: "/projects/My-Brand-Workspace.png",
    links: {
      live: "https://harry-brand-workspace.netlify.app/",
      github: "https://github.com/Harry-0824/my-brand-workspace",
    },
    tags: ["React", "TypeScript", "Supabase", "SaaS 工作流"],
  },
  {
    title: "AI Issue Scope Guard",
    category: "AI 開發工具",
    description:
      "目標：自動檢查 PR 是否偏離 Issue 範圍。主要職責：規格比對流程設計、檢查器介面實作。前端價值：強化 AI 協作下的規格一致性與交付風險控管。",
    objective: "展示 spec-driven 開發流程與 AI 協作守門能力。",
    stack: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "Vitest",
      "GitHub API",
      "Netlify",
    ],
    metrics: [
      { label: "核心能力", value: "Issue Scope 驗證" },
      { label: "開發流程", value: "Spec-Driven Development" },
      { label: "風險控制", value: "AI Coding Guardrails" },
    ],
    image: "/projects/AI Issue Scope Guard.png",
    links: {
      live: "https://monumental-fudge-3c2f38.netlify.app/",
      github: "https://github.com/Harry-0824/ai-issue-scope-guard",
    },
    tags: ["Vue 3", "TypeScript", "GitHub API", "規格導向開發"],
  },
  {
    title: "ToDoList React",
    category: "基礎互動工具",
    description:
      "目標：完成輕量待辦管理工具。主要職責：任務狀態流與本地儲存行為實作。前端價值：展示互動流程、狀態管理與基礎持久化能力。",
    objective: "作為早期基礎專案，補充前端成長脈絡。",
    stack: ["React", "JavaScript", "LocalStorage", "styled-components"],
    metrics: [
      { label: "專案階段", value: "基礎實作" },
      { label: "資料保存", value: "LocalStorage" },
      { label: "UI 方式", value: "styled-components" },
    ],
    image: "/projects/ToDoList.png",
    links: {
      live: "https://peaceful-genie-980c98.netlify.app/",
      github: "https://github.com/Harry-0824/To_DoList_React",
    },
    tags: ["React", "JavaScript", "LocalStorage", "基礎專案"],
  },
];
