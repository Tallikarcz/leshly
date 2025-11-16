import { useEffect, useRef } from 'react'
import { ExternalLink, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'


const projects = [
  {
    year: '2024 - Present',
    title: 'UI/UX Designer at IXC Soft',
    description: 'Leading UI/UX design initiatives for enterprise software solutions. Creating user-centered designs, conducting usability testing, and collaborating with development teams to deliver intuitive interfaces.',
    tags: ['UI Design', 'UX Research', 'Figma', 'User Testing', 'Design Systems'],
    link: '#',
    status: 'Current'
  },
  {
    year: '2023 - 2024',
    title: 'UI/UX Designer at Angel Lira',
    description: 'Designed innovative digital experiences for diverse clients. Specialized in mobile app design, responsive web interfaces, and creating comprehensive design systems.',
    tags: ['Mobile Design', 'Web Design', 'Prototyping', 'Wireframing', 'Adobe XD'],
    link: '#',
    status: 'Completed'
  },
  {
    year: '2023',
    title: 'Design Portfolio Projects',
    description: 'Collection of personal and freelance projects showcasing UI/UX expertise. Including e-commerce redesigns, mobile app concepts, and dashboard interfaces.',
    tags: ['Figma', 'UI Design', 'Branding', 'Interaction Design'],
    link: '#',
    status: 'Completed'
  }
]

export function WorkSection() {
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
      id="work"
      ref={sectionRef}
      className="section-hidden min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl w-full">
        <div className="space-y-12">
          <div className="space-y-3">
            
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Work Experience</h2>
            <p className="text-lg text-muted-foreground">
              Professional journey and key projects
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden sm:block" />

            {/* Projects */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-foreground border-2 border-background hidden sm:block" />

                  <Card className="sm:ml-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-foreground/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground">
                              <Calendar className="w-3.5 h-3.5" />
                              {project.year}
                            </span>
                            
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              project.status === 'Current' 
                                ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                                : 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold group-hover:text-foreground/80 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <a
                          href={project.link}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}