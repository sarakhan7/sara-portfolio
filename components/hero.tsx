"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="animate-on-scroll opacity-0 text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 drop-shadow-[0_0_15px_rgba(251,111,146,0.2)] dark:drop-shadow-[0_0_15px_rgba(0,64,108,0.3)]">
        Sara Khan
      </h1>
      <p className="animate-on-scroll opacity-0 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto delay-100">
        Engineering thoughtful, impactful, and technically sound digital experiences.
      </p>
      <button
        onClick={scrollToAbout}
        className="animate-on-scroll opacity-0 absolute bottom-10 p-2 rounded-full hover:bg-accent transition-colors delay-200"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </div>
  )
}
