const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-rbr-navy bg-grid-glowing"
    >
      {/* 背景漸層 */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-rbr-navy/80 z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* 狀態標籤 */}
        <div className="mb-8 font-mono text-sm tracking-[0.2em] border border-rbr-yellow/30 px-4 py-2 bg-rbr-yellow/5">
          [{" "}
          <span className="text-rbr-yellow font-bold">
            系統狀態：全速運行中
          </span>{" "}
          ]
        </div>

        {/* 主標題 */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          PRINC
        </h1>

        {/* 標語 */}
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base max-w-lg mb-8">
          前端工程師 / UI 開發者，專注於高效能互動、F1 賽車美學與資料視覺化。
        </p>

        {/* CTA 區塊 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a
            href="#projects"
            className="shimmer-effect px-10 py-4 bg-rbr-red text-white font-black italic tracking-widest uppercase text-sm rounded-sm shadow-[0_0_20px_rgba(224,30,34,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="查看我的專案"
          >
            查看我的專案
          </a>

          <a
            href="#contact"
            className="px-10 py-4 border border-rbr-yellow text-rbr-yellow font-black italic tracking-widest uppercase text-sm rounded-sm bg-transparent hover:bg-rbr-yellow/10 transition-all flex items-center justify-center"
            aria-label="聯絡我"
          >
            聯絡我
          </a>
        </div>
      </div>

      {/* 裝飾賽車線條 */}
      <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 items-end opacity-20 z-0 pointer-events-none">
        <div className="h-24 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
        <div className="h-48 w-[2px] bg-gradient-to-t from-rbr-yellow to-transparent" />
        <div className="h-32 w-[2px] bg-gradient-to-t from-rbr-red to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
