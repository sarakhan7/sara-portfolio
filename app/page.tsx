import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground">
        Designed and developed by Sara Khan | © 2025
      </footer>
      <ScrollToTop />
    </main>
  )
}
