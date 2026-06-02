const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-rbr-navy bg-grid-glowing"
    >
      {/* 背景漸層負責壓暗格線，讓主標題和 CTA 在第一屏保持清楚。 */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-rbr-navy/80 z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* 狀態標籤先交代目前可合作狀態，作為作品集第一個可掃描訊號。 */}
        <div className="mb-8 font-mono text-sm tracking-[0.2em] border border-rbr-yellow/30 px-4 py-2 bg-rbr-yellow/5">
          [{" "}
          <span className="text-rbr-yellow font-bold">
            可接案與合作討論中
          </span>{" "}
          ]
        </div>

        {/* 主標題 */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter mb-6 px-3 pb-2 leading-none bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Apex Flow
        </h1>

        {/* 標語 */}
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base max-w-lg mb-8">
          前端工程師，專注於 React / Next.js、TypeScript、互動介面與前端效能優化。
        </p>

        {/* CTA 連到同頁錨點，讓訪客可快速跳到作品或聯絡區塊。 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a
            href="#projects"
            className="shimmer-effect px-10 py-4 bg-rbr-red text-white font-black italic tracking-widest uppercase text-sm rounded-sm shadow-[0_0_20px_rgba(224,30,34,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="查看專案"
          >
            查看專案
          </a>

          <a
            href="#contact"
            className="px-10 py-4 border border-rbr-yellow text-rbr-yellow font-black italic tracking-widest uppercase text-sm rounded-sm bg-transparent hover:bg-rbr-yellow/10 transition-all flex items-center justify-center"
            aria-label="聯絡合作"
          >
            聯絡合作
          </a>
        </div>
      </div>

      {/* 裝飾賽車線條只提供品牌氛圍，pointer-events 關閉以免干擾點擊。 */}
      <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 items-end opacity-20 z-0 pointer-events-none">
        <div className="h-24 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
        <div className="h-48 w-[2px] bg-gradient-to-t from-rbr-yellow to-transparent" />
        <div className="h-32 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
