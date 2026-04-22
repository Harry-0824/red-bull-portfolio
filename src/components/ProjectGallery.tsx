"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "互動式天氣預報 App",
    category: "API 整合應用",
    description:
      "根據用戶位置顯示及時天氣資訊，學習處理非同步資料請求與動態背景變換。",
    objective:
      "解決複雜 API 資料處理與非同步狀態管理的挑戰，並實作根據天氣動態變動的沉浸式 UI。",
    stack: ["React", "Rest API", "Framer Motion", "OpenWeather"],
    metrics: [
      { label: "API Response Time", value: "120ms" },
      { label: "Interaction Latency", value: "16ms" },
    ],
    image: "/weather-preview.jpg",
    links: {}, // 無真實連結則不顯示
    tags: ["React", "Rest API", "Framer Motion"],
  },
  {
    title: "質感高效待辦清單",
    category: "互動介面設計",
    description:
      "結合瀏覽器儲存技術，打造具備流暢動畫與直覺操作的日常工作管理工具。",
    objective:
      "探索極簡主義設計與高性能動畫的結合，利用 LocalStorage 確保在離線狀態下也能提供毫秒級響應。",
    stack: ["TypeScript", "LocalStorage", "CSS Modules", "Zustand"],
    metrics: [
      { label: "Bundle Size (Gzipped)", value: "12KB" },
      { label: "Render Consistency", value: "60FPS" },
    ],
    image: "/todo-preview.jpg",
    links: {}, // 無真實連結則不顯示
    tags: ["TypeScript", "LocalStorage", "CSS Modules"],
  },
  {
    title: "MG MOTOR 品牌展示網站",
    category: "品牌展示與全端開發",
    description:
      "為 MG 汽車打造的高級品牌展示門戶，整合動態車款目錄、經銷商地圖與線上預約系統。",
    objective:
      "利用 React 17 與高級 CSS 技術，將汽車品牌的數位體驗提升至 F1 級別的標準，並整合 RESTful API 實現全端功能。",
    stack: [
      "React",
      "Ant Design",
      "Styled Components",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    metrics: [
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Conversion Rate", value: "+24%" },
    ],
    image: "/projects/mg-motor.png",
    links: {
      live: "https://mg-motor.netlify.app/",
      github: "https://github.com/Harry-0824/MG-motor",
      githubBackend: "https://github.com/Harry-0824/my-api-project",
    },
    tags: ["Full-Stack", "Automotive UI", "API Integration"],
  },
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-4 bg-rbr-navy">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black italic tracking-tighter mb-4 inline-block border-b-4 border-rbr-red text-white">
            大獎賽專案集
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl font-bold uppercase tracking-widest text-xs">
            由空氣動力學效率驅動的精確工程應用程式精選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project)}
              className="relative group cursor-pointer"
            >
              {/* Carbon Fiber Background Effect */}
              <div className="absolute inset-0 bg-[#080808] border border-white/5 rounded-xl overflow-hidden shadow-2xl transition-all group-hover:border-rbr-red/50">
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), 
                                     repeating-linear-gradient(45deg, #000 25%, #151515 25%, #151515 75%, #000 75%, #000)`,
                    backgroundSize: "4px 4px",
                    backgroundPosition: "0 0, 2px 2px",
                  }}
                />
              </div>

              <div className="relative p-8 h-full flex flex-col text-white">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold tracking-widest text-rbr-red uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github
                          size={18}
                          className="text-white hover:text-rbr-yellow"
                        />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <ExternalLink
                          size={18}
                          className="text-white hover:text-rbr-yellow"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-3 group-hover:text-rbr-yellow transition-colors italic">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-sm font-mono text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover racing stripe */}
              <motion.div
                initial={{ height: 0 }}
                whileHover={{ height: "4px" }}
                className="absolute bottom-0 left-0 right-0 bg-rbr-red rounded-b-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
