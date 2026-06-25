import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "TicketFlow 全端工單管理系統",
    category: "全端 MVP",
    description:
      "可操作的工單管理系統，前端使用 Vue 3 + Vite，後端為 ASP.NET Core Minimal API + EF Core，支援 JWT 登入流程與工單 CRUD。",
    objective:
      "建立一個能展示前後端協作、API 契約與部署流程的完整作品案例。",
    task: "定義登入、工單列表、篩選與 CRUD 流程，讓前端與 API 邏輯可以穩定串接。",
    result:
      "完成可部署的 MVP，涵蓋 Auth、Ticket CRUD 與多環境資料庫設定，並整理為可公開說明的案例。",
    highlights: [
      "前後端契約以實際畫面與 API 流程對齊，不只展示靜態 UI。",
      "保留 MVP 範圍，優先完成登入、列表與編輯等核心使用路徑。",
      "部署到 Netlify、Render 與 Supabase，補齊交付鏈路。",
    ],
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
      { label: "Scope", value: "Auth + Ticket CRUD" },
      { label: "Data Layer", value: "EF Core + RLS" },
      { label: "Deploy", value: "Netlify / Render / Supabase" },
      { label: "CI", value: "dotnet + node" },
    ],
    image: {
      src: "/window.svg",
      alt: "Preview of TicketFlow",
    },
    links: {
      live: "https://ticket-flow-harry-0824.netlify.app/",
      github: "https://github.com/Harry-0824/ticket-flow",
    },
    tags: ["Vue 3", "ASP.NET Core", "EF Core", "Supabase", "JWT", "全端"],
  },
  {
    title: "企業前端專案（公開摘要）",
    category: "企業前端專案",
    description:
      "以公開摘要方式整理內部 Web 專案經驗，聚焦 UI 實作、RWD 與 API 串接，避免揭露不可公開資訊。",
    objective:
      "在不暴露商業細節的前提下，保留前端交付能力與產品理解的證據。",
    task: "將專案拆成可公開的任務描述，交代我負責的畫面、互動與資料串接範圍。",
    result:
      "形成一個可在作品集中引用的案例摘要，讓讀者能快速理解我的角色與實作方式。",
    highlights: [
      "用公開摘要代替敏感畫面與資料，保留真實工作型態。",
      "說明 RWD、狀態處理與 API 接口整合的前端責任。",
      "避免把企業專案寫成只有技術名詞的列表。",
    ],
    stack: [
      "React",
      "JavaScript",
      "SCSS",
      "REST API",
      "GitHub Actions",
      "Firebase",
    ],
    metrics: [
      { label: "Role", value: "Frontend delivery" },
      { label: "Focus", value: "UI + API integration" },
      { label: "Context", value: "Enterprise workflow" },
    ],
    image: {
      src: "/projects/ToDoList.png",
      alt: "Preview of enterprise frontend case study",
    },
    links: {
      live: "https://bright-edu-data.web.app/",
    },
    tags: ["前端維護", "JavaScript", "企業專案", "RWD"],
  },
  {
    title: "Red Bull / Apex Flow 作品集網站",
    category: "作品集網站",
    description:
      "以 Next.js App Router、TypeScript 與 Tailwind CSS 建構的前端作品集，聚焦 SEO、可近性與高識別度視覺風格。",
    objective:
      "把前端能力、內容策略與產品敘事整合成單一作品集體驗，方便招聘與搜尋引擎理解。",
    task: "定義首頁敘事、專案展示方式、語意結構與技術 SEO 基礎設定。",
    result:
      "完成可部署的作品集網站，具備 metadata、sitemap、robots、JSON-LD 與結構化內容區塊。",
    highlights: [
      "以前端工程與內容策略一起設計，而不是只做靜態視覺頁。",
      "將專案卡、About 區塊與聯絡入口整理成可索引的資訊層。",
      "補上 technical SEO、authority signals 與可近性細節。",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Netlify",
    ],
    metrics: [
      { label: "Focus", value: "Portfolio + SEO" },
      { label: "Content", value: "Structured project storytelling" },
      { label: "Deploy", value: "Netlify" },
    ],
    image: {
      src: "/projects/AI Issue Scope Guard.png",
      alt: "Preview of Apex Flow portfolio site",
    },
    links: {
      live: "https://apex-flow-portfolio.netlify.app/",
      github: "https://github.com/Harry-0824/red-bull-portfolio",
    },
    tags: ["Next.js", "SEO", "Accessibility", "Portfolio"],
  },
  {
    title: "My Brand Workspace SaaS",
    category: "SaaS MVP",
    description:
      "面向個人品牌工作室的 SaaS MVP，整合客戶、專案、任務與收入管理，並以 Supabase 提供 Auth 與 PostgreSQL RLS。",
    objective:
      "展示我在 SaaS 資料模型、角色權限與前端測試流程上的實作能力。",
    task: "整理 CRUD、權限、儀表板與報表需求，建立可維護的 React 元件與狀態流程。",
    result:
      "完成多模組 SaaS MVP，並用 Vitest / Testing Library 補齊主要 UI 行為驗證。",
    highlights: [
      "把產品需求拆成 Projects / Clients / Tasks / Income 等核心模組。",
      "以前端測試輔助後續重構，而不是只靠手動點擊。",
      "透過 Supabase Auth 與 RLS 控制不同使用者資料邊界。",
    ],
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
      { label: "Scope", value: "Projects / Clients / Tasks / Income" },
      { label: "Security", value: "Supabase Auth / PostgreSQL RLS" },
      { label: "Quality", value: "Vitest / Testing Library" },
    ],
    image: {
      src: "/projects/My-Brand-Workspace.png",
      alt: "Preview of My Brand Workspace SaaS",
    },
    links: {
      live: "https://harry-brand-workspace.netlify.app/",
      github: "https://github.com/Harry-0824/my-brand-workspace",
    },
    tags: ["SaaS MVP", "Supabase Auth", "PostgreSQL RLS", "Dashboard"],
  },
  {
    title: "MG MOTOR React 品牌網站",
    category: "品牌網站",
    description:
      "以 React 打造的品牌網站，負責前端畫面、RWD 與後端 API 串接，支援車款內容與表單互動。",
    objective:
      "呈現我在品牌網站、互動 UI 與資料串接上的前端實作能力。",
    task: "將品牌視覺轉成可維護的元件結構，並處理 API 串接與裝置相容性。",
    result:
      "完成可部署的品牌網站，兼顧版面呈現、互動流程與實際資料輸出。",
    highlights: [
      "把品牌視覺語言轉成前端元件與可重用版型。",
      "在不同裝置下維持一致的資訊層次與 CTA 能見度。",
      "串接 Express / PostgreSQL API，讓內容不只停留在靜態展示。",
    ],
    stack: [
      "React",
      "JavaScript",
      "Styled Components",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    metrics: [
      { label: "Frontend", value: "Brand site + RWD" },
      { label: "Backend", value: "Express / PostgreSQL API" },
      { label: "Deploy", value: "Netlify" },
    ],
    image: {
      src: "/projects/mg-motor.png",
      alt: "Preview of MG MOTOR React brand site",
    },
    links: {
      live: "https://mg-motor.netlify.app/",
      github: "https://github.com/Harry-0824/MG-motor",
      githubBackend: "https://github.com/Harry-0824/mg-motor-api",
    },
    tags: ["React", "RWD", "API 串接", "品牌網站"],
  },
];
