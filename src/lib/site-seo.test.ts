import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  canonicalUrl,
  siteDescription,
  siteName,
  siteUrl,
  socialProfiles,
} from "./site-seo";

describe("site seo data", () => {
  it("exposes the canonical site metadata", () => {
    expect(siteName).toBe("Apex Flow");
    expect(siteUrl).toBe("https://apex-flow-portfolio.netlify.app");
    expect(canonicalUrl).toBe("https://apex-flow-portfolio.netlify.app/");
    expect(siteDescription).toContain("Apex Flow");
    expect(socialProfiles).toContain(
      "https://github.com/Harry-0824",
    );
  });
});

describe("static seo files", () => {
  it("provides a sitemap and robots file for crawlers", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    const robots = readFileSync("public/robots.txt", "utf8");

    expect(sitemap).toContain("<loc>https://apex-flow-portfolio.netlify.app/</loc>");
    expect(sitemap).toContain("<lastmod>");
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Disallow: /api/");
    expect(robots).toContain("Sitemap: https://apex-flow-portfolio.netlify.app/sitemap.xml");
  });
});
