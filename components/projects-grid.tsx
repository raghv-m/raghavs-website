"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { ProjectModal } from './project-modal'

const projects = [
  {
    id: 1,
    title: 'ImmigrateX',
    description: 'A comprehensive immigration platform helping newcomers navigate the immigration process with step-by-step guidance and document management.',
    image: '/api/placeholder/400/300',
    category: 'fullstack',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    github: 'https://github.com/raghv-m/immigratex',
    live: 'https://immigratex.vercel.app',
    featured: true,
    details: {
      overview: 'ImmigrateX is a comprehensive immigration platform designed to help newcomers navigate the complex immigration process. The application provides step-by-step guidance, document management, and personalized recommendations based on user profiles.',
      features: [
        'User authentication and profile management',
        'Step-by-step immigration process guidance',
        'Document upload and management system',
        'Real-time progress tracking',
        'Multi-language support',
        'Admin dashboard for content management'
      ],
      challenges: [
        'Complex immigration rule integration',
        'Secure document handling',
        'Multi-platform compatibility',
        'Real-time data synchronization'
      ],
      solutions: [
        'Implemented robust document encryption',
        'Used Firebase for real-time updates',
        'Created responsive design for all devices',
        'Built comprehensive admin panel'
      ]
    }
  },
  {
    id: 2,
    title: 'Chattr',
    description: 'Real-time chat application with modern UI, seamless messaging, and user authentication built with Flutter and Firebase.',
    image: '/api/placeholder/400/300',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore'],
    github: 'https://github.com/raghv-m/chattr',
    live: "",
    featured: true,
    details: {
      overview: 'Chattr is a modern real-time chat application that provides seamless messaging experience with features like user authentication, real-time updates, and intuitive UI design.',
      features: [
        'Real-time messaging',
        'User authentication',
        'Profile management',
        'Message history',
        'Push notifications',
        'Dark/Light theme'
      ],
      challenges: [
        'Real-time data synchronization',
        'Cross-platform compatibility',
        'Message delivery reliability',
        'UI/UX optimization'
      ],
      solutions: [
        'Implemented Firebase Realtime Database',
        'Used Flutter for cross-platform development',
        'Added message acknowledgment system',
        'Created intuitive chat interface'
      ]
    }
  },
  {
    id: 3,
    title: '3D Chess Game',
    description: 'Interactive 3D chess game built with Next.js and Three.js, featuring realistic 3D graphics and smooth gameplay.',
    image: '/api/placeholder/400/300',
    category: 'web',
    technologies: ['Next.js', 'Three.js', 'React', 'TypeScript'],
    github: 'https://github.com/raghv-m/3d-chess',
    live: 'https://3d-chess.vercel.app',
    featured: false,
    details: {
      overview: 'A fully interactive 3D chess game that brings the classic game to life with modern web technologies. Features realistic 3D graphics, smooth animations, and intuitive controls.',
      features: [
        '3D chess board and pieces',
        'Real-time game logic',
        'Move validation',
        'Game state management',
        'Responsive design',
        'Touch controls for mobile'
      ],
      challenges: [
        '3D graphics optimization',
        'Complex chess logic implementation',
        'Cross-browser compatibility',
        'Mobile performance'
      ],
      solutions: [
        'Used Three.js for efficient 3D rendering',
        'Implemented modular chess engine',
        'Added progressive enhancement',
        'Optimized for mobile devices'
      ]
    }
  },
  {
    id: 4,
    title: 'Bat-APP',
    description: 'Comprehensive data management application built with React, MongoDB, and Node.js for efficient data handling.',
    image: '/api/placeholder/400/300',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/raghv-m/bat-app',
    live: 'https://bat-app.vercel.app',
    featured: false,
    details: {
      overview: 'Bat-APP is a comprehensive data management system that provides efficient data handling, user management, and analytics capabilities for businesses.',
      features: [
        'User authentication and authorization',
        'Data CRUD operations',
        'Advanced search and filtering',
        'Data visualization',
        'Export functionality',
        'Admin dashboard'
      ],
      challenges: [
        'Large dataset handling',
        'Real-time data updates',
        'User permission management',
        'Data security'
      ],
      solutions: [
        'Implemented pagination and lazy loading',
        'Used WebSocket for real-time updates',
        'Created role-based access control',
        'Added data encryption'
      ]
    }
  },
  {
    id: 5,
    title: 'RaghavTube',
    description: 'YouTube clone built with React, featuring video streaming, user channels, and content management.',
    image: '/api/placeholder/400/300',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/raghv-m/raghavtube',
    live: 'https://raghavtube.vercel.app',
    featured: false,
    details: {
      overview: 'RaghavTube is a YouTube-inspired video streaming platform that demonstrates modern web development techniques and video handling capabilities.',
      features: [
        'Video upload and streaming',
        'User channels and subscriptions',
        'Comments and likes system',
        'Video recommendations',
        'Search functionality',
        'Responsive design'
      ],
      challenges: [
        'Video processing and optimization',
        'Real-time comments system',
        'Recommendation algorithm',
        'Scalable architecture'
      ],
      solutions: [
        'Implemented video compression',
        'Used WebSocket for real-time features',
        'Created content-based recommendations',
        'Built microservices architecture'
      ]
    }
  },
  {
    id: 6,
    title: 'Astroeasy',
    description: 'Astrology web application providing personalized horoscopes and astrological insights with modern UI.',
    image: '/api/placeholder/400/300',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/raghv-m/astroeasy',
    live: 'https://astroeasy.vercel.app',
    featured: false,
    details: {
      overview: 'Astroeasy is an astrology web application that provides personalized horoscopes, birth charts, and astrological insights with a modern and intuitive interface.',
      features: [
        'Personalized horoscopes',
        'Birth chart generation',
        'Astrological calculations',
        'Daily predictions',
        'User profiles',
        'Compatibility matching'
      ],
      challenges: [
        'Complex astrological calculations',
        'Data accuracy and validation',
        'User data privacy',
        'Real-time calculations'
      ],
      solutions: [
        'Implemented precise astronomical algorithms',
        'Added comprehensive data validation',
        'Used encryption for user data',
        'Optimized calculation performance'
      ]
    }
  },
  {
    id: 7,
    title: 'Digital Marketing UI',
    description: 'Modern marketing dashboard with analytics, campaign management, and responsive design built with HTML/CSS.',
    image: '/api/placeholder/400/300',
    category: 'frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    github: 'https://github.com/raghv-m/digital-marketing-ui',
    live: 'https://digital-marketing-ui.vercel.app',
    featured: false,
    details: {
      overview: 'A modern digital marketing dashboard that provides comprehensive analytics, campaign management tools, and beautiful data visualization for marketing professionals.',
      features: [
        'Analytics dashboard',
        'Campaign management',
        'Data visualization',
        'Responsive design',
        'Interactive charts',
        'Export functionality'
      ],
      challenges: [
        'Complex data visualization',
        'Responsive design implementation',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      solutions: [
        'Used Chart.js for data visualization',
        'Implemented mobile-first design',
        'Optimized CSS and JavaScript',
        'Added progressive enhancement'
      ]
    }
  }
]

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
        {['all', 'fullstack', 'web', 'mobile', 'frontend'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
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
                <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                  {project.title}
                </span>
              </div>
              {project.featured && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
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
              <div className="flex gap-3">
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
                {project.live && (
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