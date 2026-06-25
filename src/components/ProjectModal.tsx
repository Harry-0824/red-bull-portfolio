"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const dialogTitleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousBodyOverflowRef = useRef("");
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflowRef.current;
      previouslyFocusedElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-shell fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-rbr-navy/90 backdrop-blur-sm"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            className="modal-card relative mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-white/10 bg-[#080808] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 p-4 sm:p-6">
              <div className="min-w-0 pr-3">
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-rbr-red">
                  {project.category}
                </p>
                <h2
                  id={dialogTitleId}
                  className="mt-3 text-2xl font-black italic leading-tight text-white sm:text-3xl"
                >
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={`Close modal for ${project.title}`}
                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4 sm:p-8 lg:max-h-[70vh] lg:overflow-y-auto">
              <section>
                <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-rbr-red">
                  <span className="h-px w-4 bg-rbr-red" />
                  Overview
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {project.objective}
                </p>
              </section>

              <section className="mt-6 grid gap-6 md:grid-cols-2">
                <article>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-rbr-yellow">
                    Task
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {project.task}
                  </p>
                </article>
                <article>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-rbr-yellow">
                    Result
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {project.result}
                  </p>
                </article>
              </section>

              <section className="mt-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-rbr-red">
                  Highlights
                </h3>
                <ul className="mt-3 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-7 text-gray-300"
                    >
                      <span
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-rbr-yellow"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-rbr-red">
                  Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-rbr-red/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {project.metrics.length > 0 && (
                <section className="mt-6">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-rbr-red">
                    Metrics
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-4">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-sm border border-white/5 bg-white/5 p-3 sm:p-4"
                      >
                        <span className="block text-[10px] font-mono uppercase text-gray-500">
                          {metric.label}
                        </span>
                        <span className="mt-1 block text-lg font-black italic tracking-tighter text-rbr-yellow sm:text-xl">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.readinessNote && (
                <p className="mt-6 text-xs leading-6 text-gray-400">
                  {project.readinessNote}
                </p>
              )}

              {(project.links.live ||
                project.links.github ||
                project.links.githubBackend) && (
                <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:gap-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-rbr-red py-3 text-xs font-black uppercase italic text-white shadow-[0_0_20px_rgba(224,30,34,0.3)] transition-all hover:bg-red-700"
                    >
                      Open Live Site <ExternalLink size={14} />
                    </a>
                  )}

                  <div className="flex flex-1 flex-col gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 py-2 text-xs font-black uppercase italic text-white transition-all hover:border-white/40"
                      >
                        {project.links.githubBackend
                          ? "Frontend Repository"
                          : "Project Repository"}{" "}
                        <Github size={14} />
                      </a>
                    )}

                    {project.links.githubBackend && (
                      <a
                        href={project.links.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 py-2 text-xs font-black uppercase italic text-white transition-all hover:border-white/40"
                      >
                        Backend Repository <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
