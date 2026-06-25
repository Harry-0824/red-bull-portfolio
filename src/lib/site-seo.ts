export const siteName = "Apex Flow";

export const siteUrl = "https://apex-flow-portfolio.netlify.app";

export const canonicalUrl = `${siteUrl}/`;

export const authorName = "Harry-0824";

export const siteDescription =
  "Apex Flow 是一個以 Next.js、React、TypeScript 與 Tailwind CSS 打造的 Red Bull 風格作品集，聚焦作品展示、技術能力與聯絡入口。";

export const socialProfiles = ["https://github.com/Harry-0824"];

export const ogImageUrl = `${siteUrl}/brand/apex-flow-logo.svg`;

export const siteMetadata = {
  title: "Apex Flow | Red Bull 風格作品集",
  description: siteDescription,
};

export const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${canonicalUrl}#person`,
      name: authorName,
      url: canonicalUrl,
      image: ogImageUrl,
      sameAs: socialProfiles,
      jobTitle: "Frontend Developer",
      description: siteDescription,
    },
    {
      "@type": "ProfilePage",
      "@id": `${canonicalUrl}#profile-page`,
      name: siteName,
      url: canonicalUrl,
      description: siteDescription,
      inLanguage: "zh-TW",
      mainEntity: {
        "@id": `${canonicalUrl}#person`,
      },
    },
  ],
} as const;
