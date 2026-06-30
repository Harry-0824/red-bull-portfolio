"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectOpen = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-rbr-navy px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2
            id="projects-title"
            className="mb-4 inline-block border-b-4 border-rbr-red text-4xl font-black italic tracking-tighter text-white"
          >
            精選專案作品
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-gray-400 md:text-base">
            以可公開的前端案例整理產品定位、任務拆解、技術選型與交付結果，讓每個專案不只展示畫面，也能說明實作深度。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-2xl transition-all hover:border-rbr-red/60"
            >
              <div className="flex flex-1 flex-col p-6 text-white">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="rounded-full border border-rbr-red/30 bg-rbr-red/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-rbr-red">
                    {project.category}
                  </span>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repository for ${project.title}`}
                        className="text-gray-300 transition hover:text-rbr-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live site for ${project.title}`}
                        className="text-gray-300 transition hover:text-rbr-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-black italic text-white transition-colors group-hover:text-rbr-yellow">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {project.description}
                </p>

                <dl className="mt-6 grid gap-4 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-rbr-yellow">
                      Task
                    </dt>
                    <dd className="mt-2 leading-7 text-gray-300">{project.task}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-rbr-yellow">
                      Result
                    </dt>
                    <dd className="mt-2 leading-7 text-gray-300">
                      {project.result}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 space-y-3 text-sm text-gray-200">
                  {project.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex gap-3 leading-7">
                      <span
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-rbr-red"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={
                    project.slug && project.caseStudy
                      ? "mt-6 grid gap-3 sm:grid-cols-2"
                      : "mt-6 grid gap-3"
                  }
                >
                  <button
                    type="button"
                    onClick={() => handleProjectOpen(project)}
                    className="inline-flex items-center justify-center rounded-sm bg-rbr-red px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-rbr-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                  </button>
                  {project.slug && project.caseStudy && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center rounded-sm border border-white/20 px-4 py-3 text-center text-sm font-black uppercase leading-5 tracking-[0.2em] text-white transition hover:border-rbr-yellow hover:text-rbr-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
                      aria-label={`Open case study for ${project.title}`}
                    >
                      Case Study
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
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
