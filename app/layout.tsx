import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portfolio & Blog",
  description: "Showcase of my work and thoughts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              My Site
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-primary text-primary-foreground p-4 mt-8">
          <div className="container mx-auto text-center">
            © {new Date().getFullYear()} My Portfolio & Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'