import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import ProjectGallery from "@/components/ProjectGallery";
import RaceHistory from "@/components/RaceHistory";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-rbr-navy font-sans text-white selection:bg-rbr-red selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-md focus:bg-rbr-yellow focus:px-4 focus:py-3 focus:font-bold focus:text-black"
      >
        Skip to main content
      </a>
      <header>
        <Navbar />
      </header>
      <main id="main-content" className="flex-grow">
        <Hero />
        <AboutSection />
        <PerformanceDashboard />
        <RaceHistory />
        <ProjectGallery />
        <ContactSection />
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-xs font-mono text-gray-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6">
          <div>
            &copy; {new Date().getFullYear()} Apex Flow{" "}
            <span className="text-rbr-red">/ /</span> Frontend portfolio /
            product delivery
          </div>
          <div className="mt-2 flex gap-4">
            <a
              href="https://github.com/Harry-0824"
              target="_blank"
              rel="me noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
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
