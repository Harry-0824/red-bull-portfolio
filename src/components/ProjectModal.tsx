"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Zap, ShieldCheck } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="relative w-full max-w-5xl bg-[#080808] border border-white/10 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] motion-blur-in"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div>
                <h2 className="text-3xl font-black italic italic tracking-tighter text-white uppercase">
                  {project.title}
                </h2>
                <div className="flex gap-4 mt-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    Version: 1.0.0
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-green-500 uppercase tracking-widest">
                    <ShieldCheck size={12} /> Build Status: Success
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Component Visual */}
              <div className="relative aspect-video lg:aspect-auto bg-rbr-navy overflow-hidden">
                <div className="absolute inset-0 bg-grid-glowing opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-xs italic uppercase">
                  [ Telemetry Visual: {project.title} ]
                </div>
                {/* Simulated Project Image Placeholder */}
                <div className="absolute inset-4 border border-white/5 rounded backdrop-blur-3xl flex flex-col items-center justify-center">
                  <Zap className="text-rbr-yellow mb-2 opacity-50" size={48} />
                  <span className="text-[10px] tracking-[0.3em] text-rbr-yellow/50">
                    DATA RENDERING ACTIVE
                  </span>
                </div>
              </div>

              {/* Right: Technical Details */}
              <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <section>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-rbr-red uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-rbr-red" /> Mission
                    Objective
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {project.objective}
                  </p>
                </section>

                <section>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-rbr-red uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-rbr-red" /> Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="glow-pill px-3 py-1 bg-rbr-red/5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-rbr-red uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-rbr-red" /> Performance
                    Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-white/5 p-4 rounded-sm border border-white/5 hover:border-rbr-yellow/30 transition-all"
                      >
                        <span className="block text-[10px] font-mono text-gray-500 uppercase mb-1">
                          {metric.label}
                        </span>
                        <span className="text-xl font-black italic tracking-tighter text-rbr-yellow">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Footer Buttons */}
                <div className="pt-6 flex flex-col sm:flex-row gap-4 border-t border-white/5">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-rbr-red hover:bg-red-700 text-white font-black italic uppercase text-xs py-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(224,30,34,0.3)]"
                    >
                      Launch Project <ExternalLink size={14} />
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
                            ? "Frontend Code"
                            : "Inspect Source"}{" "}
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
                          Backend Code <Github size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
