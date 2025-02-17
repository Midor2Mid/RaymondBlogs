"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of project 1" },
  { id: 2, title: "Project 2", description: "A brief description of project 2" },
  { id: 3, title: "Project 3", description: "A brief description of project 3" },
  { id: 4, title: "Project 4", description: "A brief description of project 4" },
  { id: 5, title: "Project 5", description: "A brief description of project 5" },
]

const skills = ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"]

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">My Portfolio</h1>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 ${activeProject === index ? "ring-2 ring-white" : ""}`}
                  onClick={() => setActiveProject(index)}
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Project Details</h2>
          <Card>
            <CardHeader>
              <CardTitle>{projects[activeProject].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{projects[activeProject].description}</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-white font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

