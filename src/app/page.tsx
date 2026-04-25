import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsBento from "@/components/SkillsBento";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* ScrollyCanvas contains the 500vh scroll container */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      
      {/* Content below the scroll animation */}
      <div className="relative z-20 bg-[#121212]">
        <SkillsBento />
        <Experience />
        <Projects />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-white/40 text-sm bg-[#121212] border-t border-white/5 relative z-20">
        <p>© {new Date().getFullYear()} Kanuri Durga Prasad. All rights reserved.</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a href="mailto:k.durgaprasad2382@gmail.com" className="hover:text-white transition-colors">Contact</a>
          <span>|</span>
          <a href="https://youtube.com/@unique.cineai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@unique.cineai</a>
        </div>
      </footer>
    </main>
  );
}
