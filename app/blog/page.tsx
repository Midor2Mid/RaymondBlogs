"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of web development.",
    category: "Technology",
    slug: "future-of-ai-in-web-development",
  },
  {
    id: 2,
    title: "Mastering CSS Grid",
    excerpt: "A comprehensive guide to creating complex layouts with CSS Grid.",
    category: "CSS",
    slug: "mastering-css-grid",
  },
  {
    id: 3,
    title: "The Rise of JAMstack",
    excerpt: "Why JAMstack architecture is becoming increasingly popular among developers.",
    category: "Web Architecture",
    slug: "rise-of-jamstack",
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Tips and tricks to make your React applications lightning fast.",
    category: "React",
    slug: "optimizing-react-performance",
  },
  {
    id: 5,
    title: "Introduction to WebAssembly",
    excerpt: "Understanding the basics of WebAssembly and its potential impact.",
    category: "Web Technologies",
    slug: "introduction-to-webassembly",
  },
  {
    id: 6,
    title: "Accessibility in Modern Web Apps",
    excerpt: "Ensuring your web applications are accessible to all users.",
    category: "Accessibility",
    slug: "accessibility-in-modern-web-apps",
  },
  {
    id: 7,
    title: "The Power of TypeScript",
    excerpt: "How TypeScript can improve your JavaScript development experience.",
    category: "JavaScript",
    slug: "power-of-typescript",
  },
  {
    id: 8,
    title: "Responsive Design Best Practices",
    excerpt: "Creating websites that look great on any device.",
    category: "Design",
    slug: "responsive-design-best-practices",
  },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-900">Explore Our Blog</h1>
        <div className="relative mb-8">
          <Input
            type="search"
            placeholder="Search posts..."
            className="w-full pl-10 bg-white text-blue-900 placeholder-blue-400 border-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group perspective"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-64 bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 ease-in-out group-hover:rotate-y-12 group-hover:scale-105 group-hover:shadow-xl cursor-pointer">
                  <h2 className="text-xl font-bold mb-2 text-blue-900">{post.title}</h2>
                  <p className="text-blue-700 mb-4">{post.excerpt}</p>
                  <span className="absolute bottom-6 left-6 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500 ease-in-out"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

