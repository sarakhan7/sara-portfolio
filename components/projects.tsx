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
      description: "AI-powered study assistant that transforms raw notes into quizzes, vocab games, and more interactive games — complete with a smart chatbot and a clean, responsive UI.", 
      tech: ["HTML", "CSS", "JavaScript", "OpenAI API"],
      demoUrl: "https://studyfi-jda2hss1t-sarakhan7s-projects.vercel.app/",
      githubUrl: "https://github.com/sarakhan7/studyfi",
    },
    {
      title: "GlobalPulse",
      description: "Real-time global sentiment tracker that analyzes Reddit and news content using OpenAI to reveal how different regions feel about trending topics. Fully interactive dashboard with charts and filters.",
      tech: ["React", "Tailwind CSS", "Node.js", "OpenAI API", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SafeRoute",
      description: "Location-aware web app that helps users find safer walking paths based on real-time crime data. Built with Google Maps API and geolocation for personalized routing.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Google Maps API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Finder",
      description: "Minimalist recipe search tool that suggests meals based on ingredients you already have using TheMealDB API.", 
      tech: ["JavaScript", "HTML", "CSS", "TheMealDB API"],
      demoUrl: "https://recipe-finder-app-sarakhan7s-projects.vercel.app",
      githubUrl: "https://github.com/sarakhan7/RecipeFinderApp",
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
  <a
    href={project.demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    Live Demo
  </a>

  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors"
  >
    <Github className="mr-2 h-4 w-4" />
    GitHub
  </a>
</CardFooter>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
