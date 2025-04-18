"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null)

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

    const elements = projectsRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const projects = [
    {
      title: "StudyFi",
      description: "A productivity app combining pomodoro timer with lo-fi music for focused study sessions.",
      tech: ["React", "Firebase", "Tailwind CSS", "Web Audio API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "GlobalPulse",
      description: "Real-time news aggregator with customizable feeds and sentiment analysis.",
      tech: ["Next.js", "TypeScript", "MongoDB", "NLP API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SafeRoute",
      description: "Mobile app providing safe walking routes based on crime data and street lighting.",
      tech: ["React Native", "Node.js", "Express", "Google Maps API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Finder",
      description: "Web app that suggests recipes based on ingredients you already have at home.",
      tech: ["JavaScript", "HTML/CSS", "Spoonacular API", "LocalStorage"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="animate-on-scroll opacity-0 text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="animate-on-scroll opacity-0 overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 bg-card dark:bg-card/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/30 text-foreground dark:bg-secondary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
