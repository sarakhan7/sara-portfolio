"use client"

import { useEffect, useRef } from "react"

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null)

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

    const elements = skillsRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Firebase",
    "MongoDB",
    "Git",
    "Tailwind CSS",
    "Redux",
    "REST API",
    "GraphQL",
    "Figma",
  ]

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-4 bg-secondary/20 dark:bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="animate-on-scroll opacity-0 text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 px-4 py-2 rounded-full bg-card dark:bg-card/50 border border-border hover:border-primary/50 hover:shadow-md dark:hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
