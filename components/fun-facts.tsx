"use client"

import { motion } from 'framer-motion'
import { Coffee, Code2, Lightbulb, Music, Camera, Rocket } from 'lucide-react'

const facts = [
  {
    icon: Coffee,
    title: 'Coffee Enthusiast',
    description: 'Fueled by coffee and curiosity. My best code is written between 9 PM and 2 AM with a fresh cup nearby.'
  },
  {
    icon: Code2,
    title: '50K+ Lines of Code',
    description: 'Written across 15+ production projects. Every line is a lesson learned and a problem solved.'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'I love tackling complex challenges. The harder the problem, the more satisfying the solution.'
  },
  {
    icon: Music,
    title: 'Music While Coding',
    description: 'Lo-fi beats and instrumental music keep me in the zone during long coding sessions.'
  },
  {
    icon: Camera,
    title: 'Photography Hobbyist',
    description: 'When I\'m not coding, I\'m capturing moments through my lens. Check out my photography page!'
  },
  {
    icon: Rocket,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies. Currently diving deeper into AI/ML and cloud architecture.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

export function FunFacts() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fun <span className="gradient-text">Facts</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A few things that make me, well... me!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <fact.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {fact.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

