"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'all', name: 'All Projects', count: 7 },
  { id: 'fullstack', name: 'Full Stack', count: 2 },
  { id: 'web', name: 'Web Apps', count: 3 },
  { id: 'mobile', name: 'Mobile Apps', count: 1 },
  { id: 'frontend', name: 'Frontend', count: 1 }
]

export function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === category.id
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
          }`}
        >
          <span>{category.name}</span>
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