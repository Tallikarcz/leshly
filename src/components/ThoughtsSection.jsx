import { useEffect, useRef } from 'react'
import { ArrowUpRight, Clock } from 'lucide-react'

const thoughts = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Lessons learned from architecting large-scale React applications with TypeScript and modern state management.',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    link: '#'
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends in web development, from AI integration to edge computing and beyond.',
    date: 'Dec 28, 2024',
    readTime: '8 min read',
    link: '#'
  },
  {
    title: 'TypeScript Best Practices',
    excerpt: 'A comprehensive guide to writing maintainable TypeScript code with practical examples and patterns.',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    link: '#'
  },
  {
    title: 'Performance Optimization Techniques',
    excerpt: 'Deep dive into modern web performance optimization strategies that actually make a difference.',
    date: 'Nov 22, 2024',
    readTime: '7 min read',
    link: '#'
  }
]

export function ThoughtsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible')
          entry.target.classList.remove('section-hidden')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="thoughts"
      ref={sectionRef}
      className="section-hidden min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl w-full">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Recent Thoughts</h2>
            <p className="text-lg text-muted-foreground">
              Writing about development, design, and technology
            </p>
          </div>

          <div className="space-y-4">
            {thoughts.map((thought, index) => (
              <a
                key={index}
                href={thought.link}
                className="group block p-6 rounded-lg border border-border bg-card hover:bg-accent hover:border-foreground/20 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-foreground/80 transition-colors flex-1">
                      {thought.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {thought.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">{thought.date}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {thought.readTime}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
