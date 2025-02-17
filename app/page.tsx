"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { FaFacebook, FaStackOverflow, FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useParticles } from "./hooks/useParticles"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "TailwindCSS",
  "Python",
  "Docker",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
]

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(0)
  const controls = useAnimation()
  const particlesRef = useParticles()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
      transition: { duration: 0.5, times: [0, 0.5, 1] },
    })
  }, [controls])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      <canvas ref={particlesRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold mb-4 text-center"
        >
          John Doe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl mb-8 text-center max-w-2xl"
        >
          Full Stack Developer & Creative Problem Solver
        </motion.p>

        <motion.div animate={controls} className="text-3xl font-bold mb-12 h-12 flex items-center justify-center">
          {skills[activeSkill]}
        </motion.div>

        <div className="flex space-x-4 mb-12">
          <Button asChild variant="outline" className="bg-white text-purple-900 hover:bg-purple-100">
            <a href="/john-doe-cv.pdf" download>
              Download CV
            </a>
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Contact Me</Button>
        </div>

        <div className="flex space-x-6">
          {[FaFacebook, FaStackOverflow, FaGithub, FaLinkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Icon className="text-3xl" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current text-purple-800 opacity-25"
          ></path>
        </svg>
      </div>
    </div>
  )
}

