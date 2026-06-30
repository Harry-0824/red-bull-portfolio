import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ticket-flow",
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
    caseStudy: {
      scope: [
        "建立可登入的 ticket workflow MVP，涵蓋 ticket list、status、priority、keyword filtering 與 CRUD path。",
        "串接 Vue 3 frontend、ASP.NET Core Minimal API、EF Core data model 與 Supabase PostgreSQL deployment。",
        "補齊本地與雲端部署流程，讓作品可被 demo、review 與後續迭代。",
      ],
      architecture: [
        "Vue 3 + Vite frontend 負責列表、表單與狀態篩選互動。",
        "ASP.NET Core Minimal API 封裝 ticket endpoints、auth boundary 與 EF Core persistence。",
        "Supabase PostgreSQL 作為 production database，Render 與 Netlify 分別承載 API 與 frontend。",
      ],
      problems: [
        "早期 MVP 需要同時證明 UI、API、database 與 deployment path，容易只停留在靜態展示。",
        "Ticket filtering 與 CRUD 狀態需要前後端 schema 一致，否則 demo flow 會出現資料不一致。",
      ],
      solutions: [
        "用 typed query params 與明確 ticket fields 串起 status、priority、keyword filtering。",
        "以 EF Core migration、Supabase production database 與 CI checks 固定可重複驗證的交付流程。",
      ],
    },
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
    slug: "apex-flow",
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
    caseStudy: {
      scope: [
        "建立以 Apex Flow 為品牌語彙的 Next.js frontend portfolio。",
        "整理首頁 hero、about、performance、project gallery 與 contact flow。",
        "補齊 metadata、structured data、crawler-facing routes 與社群分享預覽。",
      ],
      architecture: [
        "Next.js App Router 管理首頁、metadata、sitemap、robots 與 project case-study routes。",
        "React component sections 分層呈現 portfolio narrative，project data 集中於 typed data file。",
        "Tailwind CSS 與既有 Red Bull-inspired token 維持高對比、動態且可維護的視覺系統。",
      ],
      problems: [
        "作品集需要同時服務求職瀏覽、SEO crawler 與社群分享情境，不能只依賴單頁視覺展示。",
        "專案卡資訊缺少可分享的 detail URL，面試或履歷連結無法直接指向特定案例。",
      ],
      solutions: [
        "以集中化 SEO constants 對齊 metadata、JSON-LD、OG image、robots 與 sitemap。",
        "新增 static case-study routes，讓每個指定作品都有固定 section 與可分享網址。",
      ],
    },
  },
  {
    slug: "my-brand-workspace",
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
    caseStudy: {
      scope: [
        "建立個人品牌營運用 SaaS MVP，涵蓋 projects、clients、tasks 與 income tracking。",
        "串接 Supabase Auth、PostgreSQL RLS 與前端 dashboard workflow。",
        "用 Vitest / Testing Library 保護主要操作流程與資料呈現。",
      ],
      architecture: [
        "React + TypeScript frontend 以 dashboard pages 管理品牌營運資料。",
        "Supabase Auth 提供登入邊界，PostgreSQL RLS 控制 user-owned records。",
        "Netlify 承載 frontend，Supabase 負責 auth、database 與資料權限。",
      ],
      problems: [
        "Freelance / personal brand workflow 同時包含專案、客戶、任務與收入，資料關聯容易分散。",
        "沒有 RLS 與測試保護時，MVP 難以說明資料隔離與可維護性。",
      ],
      solutions: [
        "將核心營運資料收斂到明確的 CRUD surfaces，讓 dashboard 可快速掃描與更新。",
        "以 Supabase Auth / RLS 建立安全邊界，並用 component tests 驗證主要 UI 狀態。",
      ],
    },
  },
  {
    slug: "mg-motor",
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
    caseStudy: {
      scope: [
        "建立 MG MOTOR 品牌展示網站，呈現車款資訊、品牌內容與 conversion-oriented CTA。",
        "完成 RWD layout、主要視覺區塊與前後端資料串接。",
        "維持可部署的 frontend / backend repository split，方便展示與維護。",
      ],
      architecture: [
        "React frontend 負責品牌頁面、車款展示與 responsive interaction。",
        "Node.js / Express API 提供資料來源，PostgreSQL 管理後端資料。",
        "Netlify 承載 frontend，backend repository 獨立維護 API service。",
      ],
      problems: [
        "品牌展示頁需要兼顧視覺吸引力、手機閱讀與 CTA 可見度。",
        "車款資料與品牌內容若完全寫死，後續調整與 API 展示價值會不足。",
      ],
      solutions: [
        "以 React component sections 拆分 hero、content、vehicle detail 與 CTA 區塊。",
        "保留 Express / PostgreSQL backend path，讓作品能展示完整資料整合能力。",
      ],
    },
  },
];
