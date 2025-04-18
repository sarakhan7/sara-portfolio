"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const aboutRef = useRef<HTMLElement>(null)

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

    const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Clean Code",
      description: "Passionate about writing maintainable, efficient, and well-documented code.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Problem Solver",
      description: "Analytical thinker who enjoys tackling complex challenges with creative solutions.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies to enhance my skill set.",
    },
  ]

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 bg-secondary/20 dark:bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="animate-on-scroll opacity-0 text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="animate-on-scroll opacity-0 mb-12 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            I'm a motivated computer science major focused on building real-world applications with clean design
            and functional architecture. My goal is to create digital experiences that are not only visually appealing
            but also technically sound and user-friendly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="animate-on-scroll opacity-0 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/5 bg-card dark:bg-card/50"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-secondary/30 dark:bg-secondary/20">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
