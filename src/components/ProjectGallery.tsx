"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

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
            精選專案作品
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl font-bold uppercase tracking-widest text-xs">
            以 React / Next.js 前端實作為主，整理需求拆解、介面互動與資料串接的實作案例。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0 }}
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

                <p className="text-gray-400 text-sm mb-2 flex-grow leading-relaxed">
                  {project.description}
                </p>
                {project.readinessNote && (
                  <div className="mb-4">
                    <span className="block text-xs text-gray-500 font-mono leading-relaxed">
                      {project.readinessNote}
                    </span>
                  </div>
                )}

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
