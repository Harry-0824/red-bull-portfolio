"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";

const skills = [
  {
    name: "React / Next.js",
    category: "Core frontend stack",
    usage: "Portfolio pages, App Router layout, and reusable page sections.",
    evidence: [
      "Builds component-based portfolio sections with clear ownership.",
      "Uses Next.js App Router patterns for page composition and deployment.",
      "Connects project storytelling with maintainable React structure.",
    ],
    icon: Code2,
    accent: "text-rbr-yellow",
  },
  {
    name: "TypeScript",
    category: "Maintainability",
    usage: "Typed project data, component props, and safer frontend contracts.",
    evidence: [
      "Models project content with explicit shared types.",
      "Keeps portfolio data predictable as sections evolve.",
      "Improves reviewability by making expected data shapes visible.",
    ],
    icon: Cpu,
    accent: "text-rbr-yellow",
  },
  {
    name: "Styling Systems",
    category: "UI implementation",
    usage: "Tailwind CSS, styled-components, SCSS, and responsive layouts.",
    evidence: [
      "Translates visual direction into reusable, responsive UI sections.",
      "Maintains high-contrast dark portfolio styling across breakpoints.",
      "Uses existing styling conventions instead of adding new UI libraries.",
    ],
    icon: Layers,
    accent: "text-rbr-yellow",
  },
  {
    name: "API Integration",
    category: "Product workflow",
    usage: "Weather data, backend API flows, and Supabase-backed app work.",
    evidence: [
      "Connects frontend screens to real API-driven project examples.",
      "Handles user-facing loading, empty, and error states where needed.",
      "Keeps data integration scoped to the target feature flow.",
    ],
    icon: Activity,
    accent: "text-rbr-red",
  },
  {
    name: "Testing / Validation",
    category: "Quality signal",
    usage: "Lint, build checks, focused UI verification, and reviewable diffs.",
    evidence: [
      "Runs repository checks before publishing implementation PRs.",
      "Uses scoped verification instead of broad, unrelated rewrites.",
      "Keeps changes small enough for practical code review.",
    ],
    icon: ShieldCheck,
    accent: "text-rbr-red",
  },
  {
    name: "Frontend Architecture",
    category: "System thinking",
    usage: "Feature boundaries, data modules, and page-level composition.",
    evidence: [
      "Separates page sections, data, and shared types where useful.",
      "Avoids speculative abstractions until they reduce real complexity.",
      "Prioritizes readable structure for future maintenance.",
    ],
    icon: BarChart3,
    accent: "text-rbr-red",
  },
];

const interviewSignals = [
  "Project-backed claims instead of subjective scores",
  "Evidence tied to portfolio, SaaS, API, UI, and validation work",
  "Readable cards for recruiter screening and technical interviews",
];

export default function PerformanceDashboard() {
  return (
    <section
      id="performance"
      className="relative bg-rbr-navy border-t border-white/5 px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-sm font-bold text-rbr-red">
              SKILLS // INTERVIEW EVIDENCE
            </span>
            <h2 className="mt-2 text-4xl font-black text-white">
              Skills Proven By Project Work
            </h2>
          </div>
          <p className="max-w-xl text-left font-mono text-sm text-gray-400 md:text-right">
            Ability is shown through shipped sections, typed data, API flows,
            validation habits, and maintainable implementation choices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex min-h-[22rem] flex-col rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:border-rbr-yellow/50 hover:bg-white/10"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-sm border border-white/10 bg-rbr-navy p-3 transition-transform group-hover:scale-105">
                    <SkillIcon className={skill.accent} aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-right font-mono text-xs font-bold uppercase text-gray-300">
                    {skill.category}
                  </span>
                </div>

                <div className="mb-5">
                  <h3 className="text-xl font-black uppercase italic text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {skill.usage}
                  </p>
                </div>

                <ul className="mt-auto space-y-3">
                  {skill.evidence.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-gray-200"
                    >
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rbr-yellow"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}

          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg bg-rbr-red p-8 text-white md:col-span-2 lg:col-span-3"
          >
            <div className="relative z-10 max-w-3xl">
              <span className="font-mono text-sm font-bold uppercase text-white/75">
                Recruiter-ready signal
              </span>
              <h3 className="mt-3 text-2xl font-black uppercase italic md:text-3xl">
                Skills are framed by evidence, not percentage scores.
              </h3>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {interviewSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-md border border-white/20 bg-black/15 p-4 text-sm font-semibold leading-6 text-white/90"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <BarChart3
              className="absolute -bottom-12 -right-8 h-56 w-56 -rotate-12 text-black/10"
              aria-hidden="true"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
