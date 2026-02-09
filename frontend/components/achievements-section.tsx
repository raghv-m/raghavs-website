"use client"

import { motion } from 'framer-motion'
import { Briefcase, Code, Users, Award, TrendingUp, CheckCircle } from 'lucide-react'

const metrics = [
  {
    icon: Briefcase,
    value: '15+',
    label: 'Live Projects',
    description: 'Production websites & applications'
  },
  {
    icon: Users,
    value: '8+',
    label: 'Happy Clients',
    description: 'Including local Edmonton businesses'
  },
  {
    icon: Code,
    value: '50K+',
    label: 'Lines of Code',
    description: 'Written across all projects'
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Performance Boost',
    description: 'Average load time improvement'
  }
]

const achievements = [
  'Delivered 15+ production websites for local Edmonton businesses',
  'Built full-stack applications serving 1000+ users',
  'Reduced client website load times by up to 40%',
  'Implemented secure authentication systems with JWT & OAuth',
  'Graduated from NAIT Software Engineering program (2024)',
  'Proficient in React, Node.js, Next.js, Flutter, MongoDB',
  'Experienced with Agile development and Git workflows',
  'Strong focus on mobile-first, responsive design'
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function AchievementsSection() {
  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-800 border border-gray-200 dark:border-dark-700"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <metric.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Measurable results and professional milestones
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center"
          >
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Currently Available for Hire</h3>
            <p className="text-lg mb-6 opacity-90">
              Open to freelance projects and full-time opportunities in Edmonton and remote
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

