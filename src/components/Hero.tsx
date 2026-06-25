export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-rbr-navy bg-grid-glowing"
    >
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent to-rbr-navy/80" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <div className="mb-8 border border-rbr-yellow/30 bg-rbr-yellow/5 px-4 py-2 font-mono text-sm tracking-[0.2em]">
          [ <span className="font-bold text-rbr-yellow">Frontend portfolio</span>{" "}
          ]
        </div>

        <h1
          id="hero-title"
          className="mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text px-3 pb-2 text-5xl font-black italic leading-none tracking-tighter text-transparent sm:text-7xl md:text-9xl"
        >
          Apex Flow
        </h1>

        <p className="mb-4 max-w-3xl text-base font-bold uppercase tracking-[0.25em] text-gray-300 md:text-lg">
          React / Next.js / TypeScript product interfaces with strong SEO,
          accessibility, and content structure.
        </p>
        <p className="mb-8 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          把作品展示、內容策略與技術落地整合進同一個前端作品集，讓招聘方可以快速理解我處理介面、
          需求與交付品質的方式。
        </p>

        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="shimmer-effect flex items-center justify-center rounded-sm bg-rbr-red px-10 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(224,30,34,0.3)] transition-all hover:scale-105 active:scale-95"
            aria-label="Jump to projects section"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center rounded-sm border border-rbr-yellow bg-transparent px-10 py-4 text-sm font-black uppercase tracking-widest text-rbr-yellow transition-all hover:bg-rbr-yellow/10"
            aria-label="Jump to contact section"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-0 z-0 flex w-full items-end justify-between px-10 opacity-20">
        <div className="h-24 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
        <div className="h-48 w-[2px] bg-gradient-to-t from-rbr-yellow to-transparent" />
        <div className="h-32 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
      </div>
    </section>
  );
}
