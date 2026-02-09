"use client"

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Shield, Search } from 'lucide-react'
import { ProjectModal } from './project-modal'
import { projects } from '@/lib/projects-data'
import type { ProjectType } from '@/lib/projects-data'

const FILTERS: { id: 'all' | ProjectType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'security', label: 'Security' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
]

function getProjectType(project: (typeof projects)[0]): ProjectType | 'web' {
  return project.projectType ?? 'web'
}

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [filter, setFilter] = useState<'all' | ProjectType>('all')
  const [search, setSearch] = useState('')

  const filteredByType =
    filter === 'all'
      ? projects
      : projects.filter((p) => getProjectType(p) === filter)

  const filteredProjects = useMemo(() => {
    if (!search.trim()) return filteredByType
    const q = search.trim().toLowerCase()
    return filteredByType.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    )
  }, [filteredByType, search])

  const counts = {
    all: projects.length,
    security: projects.filter((p) => getProjectType(p) === 'security').length,
    web: projects.filter((p) => getProjectType(p) === 'web').length,
    mobile: projects.filter((p) => getProjectType(p) === 'mobile').length,
  }

  return (
    <div className="space-y-8">
      {/* Filter Bar: All | Security | Web Apps | Mobile + Search */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
        {FILTERS.map(({ id, label }) => {
          const count = id === 'all' ? counts.all : counts[id]
          const active = filter === id
          return (
            <motion.button
              key={id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(id)}
              className={`min-h-[44px] px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                active
                  ? 'bg-cyber-accent-cyan/20 border border-cyber-accent-cyan/50 text-cyber-accent-cyan shadow-glow-cyan'
                  : 'glass-card border border-white/10 text-cyber-text-secondary hover:text-cyber-accent-cyan hover:border-cyber-accent-cyan/30'
              }`}
            >
              <span className="text-sm md:text-base">{label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  active ? 'bg-cyber-accent-cyan/30' : 'bg-white/10'
                }`}
              >
                {count}
              </span>
            </motion.button>
          )
        })}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-text-tertiary" aria-hidden />
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card border border-white/10 bg-cyber-bg-primary/50 text-cyber-text-primary placeholder-cyber-text-tertiary focus:border-cyber-accent-cyan focus:ring-1 focus:ring-cyber-accent-cyan transition-colors text-sm font-mono"
            aria-label="Search projects"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-card group cursor-pointer overflow-hidden hover:border-cyber-accent-cyan/30 transition-all duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-t-xl border-b border-white/10">
              <div className="aspect-video bg-cyber-bg-primary/50 flex items-center justify-center">
                <Shield className="w-12 h-12 text-cyber-accent-cyan/30 group-hover:text-cyber-accent-cyan/50 transition-colors" />
              </div>
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-cyber-accent-cyan/20 text-cyber-accent-cyan border border-cyber-accent-cyan/30">
                  {getProjectType(project).toUpperCase()}
                </span>
                {project.featured && (
                  <span className="px-2 py-0.5 text-xs font-mono rounded bg-cyber-accent-green/20 text-cyber-accent-green border border-cyber-accent-green/30">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold mb-3 text-cyber-text-primary group-hover:text-cyber-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-cyber-text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded bg-cyber-bg-primary/50 border border-white/10 text-cyber-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-accent-cyan transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.live && project.live !== '' ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-accent-cyan transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                ) : null}
                <span className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-accent-cyan transition-colors text-sm">
                  <Eye className="w-4 h-4" />
                  Details
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
