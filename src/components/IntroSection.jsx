import { useEffect, useRef } from 'react'
import { MapPin, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'


const focusAreas = ['UI Design', 'UX Research', 'Figma', 'Prototyping', 'User Testing']

export function IntroSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible')
          entry.target.classList.remove('section-hidden')
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="section-hidden min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-3xl w-full">
        <div className="space-y-8">
          {/* Name and Status */}
          <div className="space-y-4">
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Leshly Ontiveros
            </h1>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Available for work
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Brazil</span>
              </div>
            </div>
          </div>

          {/* Description */}
          
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            UI/UX Designer creating intuitive and beautiful digital experiences. 
            Passionate about user-centered design and crafting interfaces that delight users.
          </p>

          {/* Focus Areas */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span>Focus areas</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge
                  key={area}
                  variant="outline"
                  className="text-sm px-4 py-2 hover:bg-accent transition-all duration-300 hover:scale-105"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}