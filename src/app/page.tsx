import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import RaceHistory from "@/components/RaceHistory";
import ProjectGallery from "@/components/ProjectGallery";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-rbr-navy text-white font-sans selection:bg-rbr-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PerformanceDashboard />
        <RaceHistory />
        <ProjectGallery />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs font-mono text-gray-600">
        <div className="max-w-7xl mx-auto px-6">
          &copy; 2026 PRINC <span className="text-rbr-red">//</span> 專為速度而生
        </div>
      </footer>
    </div>
  );
}

