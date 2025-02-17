import { notFound } from "next/navigation"

const posts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    content:
      "Artificial Intelligence is rapidly changing the landscape of web development. From AI-powered design tools to intelligent chatbots, the integration of AI is making web development more efficient and user-centric. This post explores the current trends and future possibilities of AI in web development, including automated coding, personalized user experiences, and predictive analytics.",
    category: "Technology",
    slug: "future-of-ai-in-web-development",
  },
  {
    id: 2,
    title: "Mastering CSS Grid",
    content:
      "CSS Grid has revolutionized web layout design, offering unprecedented control and flexibility. This comprehensive guide walks you through the fundamentals of CSS Grid, from basic concepts to advanced techniques. Learn how to create complex, responsive layouts with ease, and discover tips and tricks for maximizing the potential of this powerful CSS module.",
    category: "CSS",
    slug: "mastering-css-grid",
  },
  {
    id: 3,
    title: "The Rise of JAMstack",
    content:
      "JAMstack (JavaScript, APIs, and Markup) is gaining popularity among developers for its simplicity, performance, and scalability. This article delves into the principles behind JAMstack, its benefits, and real-world applications. Discover how this modern web development architecture is changing the way we build and deploy websites and applications.",
    category: "Web Architecture",
    slug: "rise-of-jamstack",
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    content:
      "Performance is crucial for providing a smooth user experience in React applications. This post covers various techniques to optimize your React apps, including code splitting, memoization, and efficient state management. Learn how to identify and resolve common performance bottlenecks, and discover tools for measuring and monitoring your app's performance.",
    category: "React",
    slug: "optimizing-react-performance",
  },
  {
    id: 5,
    title: "Introduction to WebAssembly",
    content:
      "WebAssembly is a game-changing technology that allows high-performance code to run in web browsers. This introductory guide explains what WebAssembly is, how it works, and its potential applications. Explore the benefits of WebAssembly, its relationship with JavaScript, and how it's shaping the future of web development.",
    category: "Web Technologies",
    slug: "introduction-to-webassembly",
  },
  {
    id: 6,
    title: "Accessibility in Modern Web Apps",
    content:
      "Creating accessible web applications is not just a legal requirement, but a moral imperative. This comprehensive post covers the importance of web accessibility, common accessibility issues, and practical strategies for making your web apps more inclusive. Learn about ARIA attributes, keyboard navigation, and tools for testing and improving accessibility.",
    category: "Accessibility",
    slug: "accessibility-in-modern-web-apps",
  },
  {
    id: 7,
    title: "The Power of TypeScript",
    content:
      "TypeScript has become an essential tool for many JavaScript developers. This post explores how TypeScript can improve your development experience, catch errors early, and make your code more maintainable. Learn about TypeScript's key features, best practices, and how to integrate it into your existing JavaScript projects.",
    category: "JavaScript",
    slug: "power-of-typescript",
  },
  {
    id: 8,
    title: "Responsive Design Best Practices",
    content:
      "In today's multi-device world, responsive design is more important than ever. This article covers best practices for creating websites that look great and function well on any device. Learn about fluid grids, flexible images, media queries, and mobile-first design. Discover tools and techniques for testing and optimizing your responsive layouts.",
    category: "Design",
    slug: "responsive-design-best-practices",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">{post.title}</h1>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <div className="prose prose-blue max-w-none">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

