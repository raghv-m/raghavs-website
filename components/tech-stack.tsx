"use client"

import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiFirebase, SiFlutter, SiPython,
  SiDocker, SiGit, SiTailwindcss, SiHtml5, SiCss3, SiAngular,
  SiMysql, SiPostgresql, SiFigma, SiPostman
} from 'react-icons/si'

const techStack = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'TypeScript', icon: SiTypescript, level: 90 },
      { name: 'Python', icon: SiPython, level: 80 },
      { name: 'Dart', icon: SiFlutter, level: 85 },
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 90 },
      { name: 'Angular', icon: SiAngular, level: 80 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss3, level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 90 },
      { name: 'Express.js', icon: SiExpress, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'MySQL', icon: SiMysql, level: 80 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
      { name: 'Firebase', icon: SiFirebase, level: 90 },
    ]
  },
  {
    category: 'Mobile & Tools',
    skills: [
      { name: 'Flutter', icon: SiFlutter, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'Figma', icon: SiFigma, level: 80 },
      { name: 'Postman', icon: SiPostman, level: 85 },
    ]
  }
]

export function TechStack() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-12">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                      <skill.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 