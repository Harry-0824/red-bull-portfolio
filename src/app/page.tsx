import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import RaceHistory from "@/components/RaceHistory";
import ProjectGallery from "@/components/ProjectGallery";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-rbr-navy text-white font-sans selection:bg-rbr-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {/* 首頁用固定區塊順序組成作品集敘事：入口、技能證據、經歷、作品與聯絡方式。 */}
        <Hero />
        <PerformanceDashboard />
        <RaceHistory />
        <ProjectGallery />
        <ContactSection />
      </main>

      {/* 年份即時計算，避免每年手動更新頁尾。 */}
      <footer className="py-12 border-t border-white/5 text-center text-xs font-mono text-gray-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-2">
          <div>
            &copy; {new Date().getFullYear()} Apex Flow{" "}
            <span className="text-rbr-red">/ /</span> 前端作品集 / 持續優化中
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Harry-0824"
              target="_blank"
              rel="me noopener noreferrer"
              className="hover:text-white underline underline-offset-2"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
