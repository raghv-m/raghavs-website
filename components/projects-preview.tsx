"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Shield } from 'lucide-react'

const featuredProjects = [
  {
    title: 'ImmigrateX',
    description: 'Immigration platform with secure auth, data encryption, and input validation.',
    tech: ['Flutter', 'Firebase'],
    badge: 'Secure Web App',
    github: 'https://github.com/raghv-m/immigratex',
    demo: '#',
  },
  {
    title: 'Chattr',
    description: 'Real-time chat with E2E encryption, XSS protection, and rate limiting.',
    tech: ['Flutter', 'Firebase'],
    badge: 'Secure Web App',
    github: 'https://github.com/raghv-m/chattr',
    demo: '#',
  },
  {
    title: '3D Chess',
    description: 'Interactive 3D game with CSRF protection and secure WebSocket handling.',
    tech: ['Next.js', 'Three.js'],
    badge: 'Web App',
    github: 'https://github.com/raghv-m/3d-chess',
    demo: '#',
  },
]

export function ProjectsPreview() {
  return (
    <section className="section-padding bg-cyber-bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-cyber-text-primary">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            Security-focused applications and client work — secure development in practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover:border-cyber-accent-cyan/30 transition-all duration-300"
            >
              <div className="aspect-video bg-cyber-bg-primary/50 border-b border-white/10 relative flex items-center justify-center">
                <Shield className="w-12 h-12 text-cyber-accent-cyan/30 group-hover:text-cyber-accent-cyan/50 transition-colors" />
                <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-mono rounded bg-cyber-accent-cyan/20 text-cyber-accent-cyan border border-cyber-accent-cyan/30">
                  {project.badge}
                </span>
                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-card text-cyber-text-secondary hover:text-cyber-accent-cyan transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-card text-cyber-text-secondary hover:text-cyber-accent-cyan transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 text-cyber-text-primary group-hover:text-cyber-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyber-text-secondary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-cyber-bg-primary/50 border border-white/10 text-cyber-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/projects" className="btn-primary inline-flex items-center font-heading">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
