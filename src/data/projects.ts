import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "互動式天氣預報 App",
    category: "API 整合應用",
    description:
      "（開發中）預計可根據用戶位置顯示天氣資訊，並嘗試處理非同步資料與動態背景。",
    objective:
      "目標是練習 API 資料處理、非同步狀態管理，以及天氣動態對 UI 的影響。",
    stack: ["React", "Rest API", "Framer Motion", "OpenWeather"],
    metrics: [],
    image: "",
    links: {},
    tags: ["React", "Rest API", "Framer Motion"],
    readinessNote: "This project is not yet public or still in development.",
  },
  {
    title: "質感高效待辦清單",
    category: "互動介面設計",
    description: "（開發中）嘗試結合瀏覽器儲存與動畫，設計直覺的工作管理介面。",
    objective: "目標是探索極簡設計、動畫表現，以及 LocalStorage 的應用。",
    stack: ["TypeScript", "LocalStorage", "CSS Modules", "Zustand"],
    metrics: [],
    image: "",
    links: {},
    tags: ["TypeScript", "LocalStorage", "CSS Modules"],
    readinessNote: "This project is not yet public or still in development.",
  },
  {
    title: "MG MOTOR 品牌展示網站",
    category: "品牌展示與全端開發",
    description:
      "MG 汽車品牌展示網站，包含車款目錄、經銷商地圖與線上預約等功能。",
    objective:
      "以 React 17 與 CSS 技術，提升汽車品牌的數位體驗，並整合 RESTful API 實作全端功能。",
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
