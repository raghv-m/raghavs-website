"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { ProjectModal } from './project-modal'
import { projects } from '@/lib/projects-data'

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'business', label: 'Business' },
          { id: 'fullstack', label: 'Full-Stack' },
          { id: 'chat', label: 'Chat Apps' },
          { id: 'ai-chatbot', label: 'AI Chatbots' },
          { id: 'video', label: 'Video Platform' },
          { id: 'portfolio', label: 'Portfolio' },
          { id: 'demo', label: 'Demo/Templates' },
          { id: 'other', label: 'Other' }
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            {category.label}
          </button>
        ))}
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
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card group hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-xl">
              <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-400 text-center px-4">
                  {project.title}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                {project.featured && (
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                {project.status === 'development' && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    In Dev
                  </div>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.live && project.live !== '' ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-gray-400 dark:text-gray-600 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Mobile/Backend</span>
                  </span>
                )}
                <button
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Details</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
} 