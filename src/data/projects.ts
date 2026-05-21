import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "My Brand Workspace 工作台 SaaS",
    category: "個人品牌與接案管理系統",
    description:
      "以 React 建立給自由工作者使用的工作台 SaaS，整合專案、任務、客戶、收款紀錄、儀表板與報表等核心管理功能。",
    objective:
      "練習 SaaS 產品介面設計、CRUD 狀態管理、Supabase 資料串接與前端功能整合，打造可登入、可操作、可部署驗收的 MVP。",
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
    metrics: [],
    image: "/projects/My-Brand-Workspace.png",
    links: {
      live: "https://harry-brand-workspace.netlify.app/",
      github: "https://github.com/Harry-0824/my-brand-workspace",
    },
    tags: ["React", "TypeScript", "Supabase", "SaaS"],
  },
  {
    title: "互動式天氣預報 App",
    category: "API 串接與互動介面",
    description:
      "以 React 串接 OpenWeather API，依使用者輸入呈現即時天氣資訊與對應的動態介面狀態。",
    objective:
      "練習非同步資料處理、API 回應狀態管理與 UI 回饋設計，讓使用者能快速查詢並理解天氣結果。",
    stack: [
      "React",
      "Rest API",
      "Framer Motion",
      "OpenWeather",
      "Styled Components",
    ],
    metrics: [],
    image: "/projects/Weather-App.png",
    links: {
      live: "https://bejewelled-scone-ae225c.netlify.app/",
      github: "https://github.com/Harry-0824/weather-app",
    },
    tags: ["React", "Rest API", "Framer Motion"],
  },
  {
    title: "質感高效待辦清單",
    category: "狀態管理與任務介面",
    description:
      "任務管理工具，聚焦 JavaScript 狀態設計、瀏覽器儲存與清楚的操作回饋。",
    objective:
      "規劃以 LocalStorage 保存任務狀態，並透過簡潔互動降低新增、完成與整理任務的操作成本。",
    stack: ["JavaScript", "LocalStorage", "styled-components", "React 19"],
    metrics: [],
    image: "/projects/ToDoList.png",
    links: {
      live: "https://peaceful-genie-980c98.netlify.app/",
      github: "https://github.com/Harry-0824/To_DoList_React",
    },
    tags: ["JavaScript", "LocalStorage", "styled-components"],
  },
  {
    title: "MG MOTOR 品牌展示網站",
    category: "品牌網站與全端整合",
    description:
      "汽車品牌展示網站，整合車款目錄、經銷商地圖與線上預約流程，呈現完整前後端串接案例。",
    objective:
      "以前端頁面呈現品牌內容與主要使用流程，並透過 Node.js、Express、PostgreSQL 與 RESTful API 完成資料整合。",
    stack: [
      "React",
      "Ant Design",
      "Styled Components",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    metrics: [],
    image: "/projects/mg-motor.png",
    links: {
      live: "https://mg-motor.netlify.app/",
      github: "https://github.com/Harry-0824/MG-motor",
      githubBackend: "https://github.com/Harry-0824/my-api-project",
    },
    tags: ["Full-Stack", "Automotive UI", "API Integration"],
  },
];
