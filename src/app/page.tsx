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
        <Hero />
        <PerformanceDashboard />
        <RaceHistory />
        <ProjectGallery />
        <ContactSection />
      </main>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs font-mono text-gray-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-2">
          <div>
            &copy; {new Date().getFullYear()} PRINC{" "}
            <span className="text-rbr-red">/ /</span> 專為速度而生
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Harry-0824"
              target="_blank"
              rel="noopener noreferrer"
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
