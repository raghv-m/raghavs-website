"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects-data'

// Calculate category counts dynamically
const getCategoryCounts = () => {
  const counts: Record<string, number> = {
    all: projects.length,
    business: 0,
    fullstack: 0,
    chat: 0,
    'ai-chatbot': 0,
    video: 0,
    portfolio: 0,
    demo: 0,
    other: 0
  }

  projects.forEach(project => {
    counts[project.category]++
  })

  return counts
}

const categoryCounts = getCategoryCounts()

const categories = [
  { id: 'all', name: 'All Projects', count: categoryCounts.all },
  { id: 'business', name: 'Business', count: categoryCounts.business },
  { id: 'fullstack', name: 'Full-Stack', count: categoryCounts.fullstack },
  { id: 'chat', name: 'Chat Apps', count: categoryCounts.chat },
  { id: 'ai-chatbot', name: 'AI Chatbots', count: categoryCounts['ai-chatbot'] },
  { id: 'video', name: 'Video Platform', count: categoryCounts.video },
  { id: 'portfolio', name: 'Portfolio', count: categoryCounts.portfolio },
  { id: 'demo', name: 'Demo/Templates', count: categoryCounts.demo },
  { id: 'other', name: 'Other', count: categoryCounts.other }
]

export function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.filter(cat => cat.count > 0).map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(category.id)}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === category.id
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
          }`}
        >
          <span className="text-sm md:text-base">{category.name}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            activeFilter === category.id
              ? 'bg-white/20'
              : 'bg-gray-300 dark:bg-dark-600'
          }`}>
            {category.count}
          </span>
        </motion.button>
      ))}
    </div>
  )
}