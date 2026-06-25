const focusPoints = [
  "把視覺稿轉成可維護的 React / Next.js 元件與互動流程。",
  "在作品案例裡清楚交代任務、技術決策與交付結果。",
  "兼顧 SEO、可近性與前端體驗，而不是只追求畫面完成。",
];

const quickFacts = [
  { label: "Primary Stack", value: "React / Next.js / TypeScript" },
  { label: "Focus", value: "Product UI, SEO, Accessibility" },
  { label: "Collaboration", value: "Issue-driven delivery with small diffs" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-white/5 bg-rbr-navy px-4 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-rbr-red">
            Positioning
          </span>
          <h2
            id="about-title"
            className="mt-4 text-3xl font-black italic tracking-tight text-white md:text-5xl"
          >
            About Apex Flow
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300">
            Frontend developer focused on React, Next.js, and shipping polished
            product experiences.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Apex Flow 用作品集的形式整理我在前端開發上的實作脈絡，包含產品介面、資料串接、
            SEO 基礎與可近性細節。每個案例都以實際交付為核心，說明我如何拆解需求、
            定義優先順序，並把設計方向轉成可部署的網站體驗。
          </p>

          <ul className="mt-8 space-y-4" aria-label="Frontend focus points">
            {focusPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-7 text-gray-200 md:text-base"
              >
                <span
                  className="mt-3 h-2 w-2 shrink-0 rounded-full bg-rbr-yellow"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="grid gap-4 self-start">
          {quickFacts.map((fact) => (
            <article
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-6"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-rbr-yellow">
                {fact.label}
              </p>
              <p className="mt-3 text-lg font-bold text-white">{fact.value}</p>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
