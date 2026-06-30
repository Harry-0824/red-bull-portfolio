import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { siteName, siteUrl } from "@/lib/site-seo";
import type { Project, ProjectCaseStudy } from "@/types/project";

type CaseStudyProject = Project & {
  slug: string;
  caseStudy: ProjectCaseStudy;
};

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const caseStudyProjects = projects.filter(
  (project): project is CaseStudyProject =>
    Boolean(project.slug && project.caseStudy),
);

function getProjectBySlug(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const url = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} | ${siteName} Case Study`,
    description: project.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | ${siteName} Case Study`,
      description: project.description,
      url,
      type: "article",
      images: [
        {
          url: "/og/apex-flow-og.png",
          width: 1200,
          height: 630,
          alt: `${project.title} case study preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteName} Case Study`,
      description: project.description,
      images: ["/og/apex-flow-og.png"],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-rbr-navy text-white">
      <section className="border-b border-white/10 px-4 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-rbr-yellow transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Portfolio
          </Link>
          <span className="text-right text-[10px] font-black uppercase tracking-[0.28em] text-rbr-red">
            Case Study
          </span>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-rbr-red">
              {project.category}
            </p>
            <h1 className="mt-5 text-4xl font-black italic leading-tight tracking-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-rbr-red px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
                >
                  Demo <ExternalLink size={15} aria-hidden="true" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-rbr-yellow hover:text-rbr-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
                >
                  GitHub <Github size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rbr-navy/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            <InfoBlock title="Tech Stack" items={project.stack} />
            <InfoBlock
              title="Demo"
              items={[project.links.live ?? "Demo link is not available."]}
            />
            <InfoBlock
              title="GitHub"
              items={[
                project.links.github ?? "Repository link is not available.",
                ...(project.links.githubBackend
                  ? [project.links.githubBackend]
                  : []),
              ]}
            />
          </aside>

          <div className="space-y-6">
            <TextSection title="Goal" body={project.objective} />
            <ListSection title="Scope" items={project.caseStudy.scope} />
            <ListSection
              title="Architecture"
              items={project.caseStudy.architecture}
            />
            <ListSection title="Key Features" items={project.highlights} />
            <ListSection title="Problems" items={project.caseStudy.problems} />
            <ListSection
              title="Solutions"
              items={project.caseStudy.solutions}
            />
            <TextSection title="Result" body={project.result} />
          </div>
        </div>
      </section>
    </main>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <article className="border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <h2 className="text-sm font-black uppercase tracking-[0.26em] text-rbr-yellow">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-8 text-gray-300 sm:text-base">
        {body}
      </p>
    </article>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <h2 className="text-sm font-black uppercase tracking-[0.26em] text-rbr-yellow">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-8 text-gray-300">
            <span
              className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-rbr-red"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border border-white/10 bg-black/20 p-5">
      <h2 className="text-[11px] font-black uppercase tracking-[0.24em] text-rbr-red">
        {title}
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) =>
          item.startsWith("https://") ? (
            <a
              key={item}
              href={item}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-gray-200 transition hover:border-rbr-yellow hover:text-rbr-yellow"
            >
              {item}
            </a>
          ) : (
            <span
              key={item}
              className="rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-gray-200"
            >
              {item}
            </span>
          ),
        )}
      </div>
    </section>
  );
}
