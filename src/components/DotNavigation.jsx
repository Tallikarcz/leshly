import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'thoughts', label: 'Thoughts' },
  { id: 'connect', label: 'Connect' }
]

export function DotNavigation() {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.5, rootMargin: '-20% 0px -50% 0px' }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <nav
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col gap-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="group flex items-center gap-3"
              aria-label={`Go to ${label}`}
            >
              <div
                className={cn(
                  'w-2 h-2 rounded-full border-2 transition-all duration-300',
                  activeSection === id
                    ? 'bg-foreground border-foreground scale-125'
                    : 'bg-transparent border-muted-foreground hover:border-foreground hover:scale-110'
                )}
              />
              <span
                className={cn(
                  'text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0',
                  activeSection === id ? 'opacity-100 translate-x-0' : ''
                )}
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
