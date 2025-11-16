import { useEffect, useRef } from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    label: '@johndoe'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'John Doe'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    label: '@johndoe'
  }
]

export function ConnectSection() {
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
      id="connect"
      ref={sectionRef}
      className="section-hidden min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-3xl w-full">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
          </div>

          {/* Email */}
          <div className="space-y-6">
            <div className="p-8 rounded-lg border border-border bg-card hover:bg-accent hover:border-foreground/20 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a
                      href="mailto:john.doe@example.com"
                      className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                    >
                      john.doe@example.com
                    </a>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                >
                  <a href="mailto:john.doe@example.com">
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-lg border border-border bg-card hover:bg-accent hover:border-foreground/20 transition-all duration-300 hover:scale-105"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <svg
                          className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">{social.name}</h3>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
