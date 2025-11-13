"use client"

import { motion } from 'framer-motion'
import { Code, Smartphone, Globe, Database, Zap, Users } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description: 'Professional business websites built with modern technologies. Mobile-first, SEO-optimized, and conversion-focused.',
    examples: 'EZ Plumbing, Mr. Rooter, Fatima\'s Kitchen'
  },
  {
    icon: Code,
    title: 'Full-Stack Web Apps',
    description: 'Scalable web applications with React, Node.js, and MongoDB. From concept to deployment.',
    examples: 'RBAC systems, Chat applications, Admin dashboards'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps using Flutter. Native performance with a single codebase.',
    examples: 'iOS & Android apps, Progressive Web Apps'
  },
  {
    icon: Database,
    title: 'Backend APIs',
    description: 'RESTful APIs and backend services with Node.js, Express, and MongoDB. Secure and scalable.',
    examples: 'Authentication, Database design, API integration'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your existing website. Improve load times, SEO rankings, and user experience.',
    examples: 'Code splitting, Image optimization, Caching'
  },
  {
    icon: Users,
    title: 'Consulting & Support',
    description: 'Technical consulting, code reviews, and ongoing maintenance for your projects.',
    examples: 'Architecture planning, Bug fixes, Feature additions'
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function ServicesSection() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full-stack development services for businesses in Edmonton and beyond. 
            From simple websites to complex web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-medium">Examples:</span> {service.examples}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Need something specific? Let's discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

