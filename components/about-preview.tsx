"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Globe, Smartphone, Database } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Expert in React, Node.js, and modern web technologies',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Flutter expertise for cross-platform mobile applications',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Experience with MongoDB, MySQL, and cloud databases',
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'Proficient in JavaScript, TypeScript, and modern frameworks',
  },
]

export function AboutPreview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Full Stack Developer with a strong foundation in software engineering and a love for creating impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
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
          <Link href="/about" className="btn-primary inline-flex items-center">
            Learn More About Me
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 