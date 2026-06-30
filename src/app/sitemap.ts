import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { canonicalUrl, siteUrl } from "@/lib/site-seo";

const lastModified = new Date("2026-06-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyRoutes = projects
    .filter((project) => project.slug && project.caseStudy)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: canonicalUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...caseStudyRoutes,
  ];
}
