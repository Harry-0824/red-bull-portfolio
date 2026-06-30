import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import {
  canonicalUrl,
  googleSiteVerification,
  ogImageUrl,
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
    expect(ogImageUrl).toBe(
      "https://apex-flow-portfolio.netlify.app/og/apex-flow-og.png",
    );
    expect(googleSiteVerification).toBe("google51fee8f57d8f504c");
    expect(socialProfiles).toContain(
      "https://github.com/Harry-0824",
    );
  });
});

describe("seo metadata routes", () => {
  it("provides sitemap and robots data for crawlers", () => {
    const sitemapEntries = sitemap();
    const robotsConfig = robots();
    const robotsJson = JSON.stringify(robotsConfig);

    expect(sitemapEntries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: "https://apex-flow-portfolio.netlify.app/",
        }),
        expect.objectContaining({
          url: "https://apex-flow-portfolio.netlify.app/projects/ticket-flow",
        }),
        expect.objectContaining({
          url: "https://apex-flow-portfolio.netlify.app/projects/my-brand-workspace",
        }),
        expect.objectContaining({
          url: "https://apex-flow-portfolio.netlify.app/projects/mg-motor",
        }),
        expect.objectContaining({
          url: "https://apex-flow-portfolio.netlify.app/projects/apex-flow",
        }),
      ]),
    );
    expect(robotsConfig.sitemap).toBe(`${siteUrl}/sitemap.xml`);
    expect(robotsJson).toContain("Googlebot");
    expect(robotsJson).toContain("/api/");
  });
});
