"use client"

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, MessageSquare, Clock, TrendingUp } from 'lucide-react'

const softSkills = [
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Experienced in working with cross-functional teams, mentoring junior developers, and contributing to collaborative development environments.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Strong analytical skills to break down complex problems into manageable solutions and implement effective strategies.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Creativity',
    description: 'Constantly exploring new technologies and approaches to create innovative solutions that exceed expectations.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    description: 'Excellent verbal and written communication skills, able to explain technical concepts to both technical and non-technical stakeholders.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Proven ability to manage multiple projects simultaneously while meeting deadlines and maintaining high quality standards.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Passionate about staying updated with the latest technologies and industry trends to deliver cutting-edge solutions.',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function SoftSkills() {
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
            Soft <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Beyond technical expertise, these skills help me deliver exceptional results and work effectively in any team environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Why These Skills Matter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              In today's fast-paced development environment, technical skills alone aren't enough. 
              My combination of technical expertise and soft skills enables me to not only build great products 
              but also work effectively with teams, communicate with stakeholders, and continuously improve 
              both myself and the projects I work on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 