"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

interface ImageWithFallbackProps {
  src: string;
  alt: string;
}

function ImageWithFallback({ src, alt }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-gray-600 opacity-60">
        <ImageIcon size={48} className="mb-2" />
        <span className="text-xs font-mono">暫無圖片</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain object-center rounded shadow-lg"
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority
      onError={() => setError(true)}
    />
  );
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const dialogTitleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousBodyOverflowRef = useRef<string>("");
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-rbr-navy/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            tabIndex={-1}
            className="modal-card relative mx-auto w-full max-w-5xl h-[calc(100dvh-1rem)] sm:h-auto sm:max-h-[calc(100dvh-2rem)] bg-[#080808] border border-white/10 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] motion-blur-in flex flex-col"
          >
            <div className="modal-card__header p-4 sm:p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div className="min-w-0 pr-3">
                <h2
                  id={dialogTitleId}
                  className="modal-card__title text-2xl sm:text-3xl font-black italic tracking-tighter text-white uppercase leading-tight"
                >
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="關閉專案詳細資訊視窗"
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 flex-1">
              <div className="modal-card__image relative h-40 sm:h-52 lg:h-auto lg:aspect-auto bg-rbr-navy overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-glowing opacity-20" />
                {project.image ? (
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} 專案截圖`}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full text-gray-600 opacity-60">
                    <ImageIcon size={48} className="mb-2" />
                    <span className="text-xs font-mono">暫無圖片</span>
                  </div>
                )}
              </div>

              <div className="modal-card__content p-4 sm:p-8 space-y-4 sm:space-y-8 lg:max-h-[70vh] lg:overflow-y-auto custom-scrollbar min-h-0">
                <section>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-rbr-red uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-rbr-red" /> 專案目標
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {project.objective}
                  </p>
                </section>

                {project.readinessNote && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 font-mono leading-relaxed">
                      {project.readinessNote}
                    </p>
                  </div>
                )}

                <section>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-rbr-red uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-rbr-red" /> 技術堆疊
                  </h4>
                  <div className="modal-card__stack flex flex-wrap gap-1.5 sm:gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="glow-pill px-2.5 sm:px-3 py-1 bg-rbr-red/5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {project.metrics.length > 0 && (
                  <section>
                    <h4 className="text-[10px] font-black tracking-[0.2em] text-rbr-red uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-rbr-red" /> 成果指標
                    </h4>
                    <div className="modal-card__metrics grid grid-cols-2 gap-2 sm:gap-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="bg-white/5 p-3 sm:p-4 rounded-sm border border-white/5 hover:border-rbr-yellow/30 transition-all"
                        >
                          <span className="block text-[10px] font-mono text-gray-500 uppercase mb-1">
                            {metric.label}
                          </span>
                          <span className="text-lg sm:text-xl font-black italic tracking-tighter text-rbr-yellow">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {(project.links.live ||
                  project.links.github ||
                  project.links.githubBackend) && (
                  <div className="modal-card__actions pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 border-t border-white/5">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-rbr-red hover:bg-red-700 text-white font-black italic uppercase text-xs py-3 sm:py-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(224,30,34,0.3)]"
                      >
                        查看網站 <ExternalLink size={14} />
                      </a>
                    )}

                    {(project.links.github || project.links.githubBackend) && (
                      <div className="flex-1 flex flex-col gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full border border-white/20 hover:border-white/40 text-white font-black italic uppercase text-xs py-2 rounded-sm flex items-center justify-center gap-2 transition-all"
                          >
                            {project.links.githubBackend
                              ? "前端原始碼"
                              : "查看原始碼"}{" "}
                            <Github size={14} />
                          </a>
                        )}

                        {project.links.githubBackend && (
                          <a
                            href={project.links.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full border border-white/20 hover:border-white/40 text-white font-black italic uppercase text-xs py-2 rounded-sm flex items-center justify-center gap-2 transition-all"
                          >
                            後端原始碼 <Github size={14} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
