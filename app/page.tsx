import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ansh Raj.
      </footer>
    </main>
  );
}
