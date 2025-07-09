"use client"

import { motion } from 'framer-motion'
import { Calendar, GraduationCap, Code, Briefcase } from 'lucide-react'

const timelineData = [
  {
    year: '2024',
    title: 'NAIT Graduation',
    description: 'Graduated with a degree in Software Development, specializing in full-stack development and modern web technologies.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2024',
    title: 'ImmigrateX - Capstone Project',
    description: 'Developed a comprehensive immigration platform using Flutter and Firebase, helping newcomers navigate the immigration process.',
    icon: Code,
    type: 'project'
  },
  {
    year: '2023-2024',
    title: 'Freelance Development',
    description: 'Worked on various client projects, building web applications and mobile apps using React, Node.js, and Flutter.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2023',
    title: 'Chattr - Chat Application',
    description: 'Built a real-time chat application with Flutter and Firebase, featuring modern UI and seamless messaging.',
    icon: Code,
    type: 'project'
  },
  {
    year: '2023',
    title: '3D Chess Game',
    description: 'Created an interactive 3D chess game using Next.js and Three.js, demonstrating 3D web development skills.',
    icon: Code,
    type: 'project'
  },
  {
    year: '2022-2023',
    title: 'Boston Pizza - Software Developer',
    description: 'Improved POS systems and led digital menu projects, gaining experience in business software development.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2022',
    title: 'Bat-APP Development',
    description: 'Built a comprehensive application using React, MongoDB, and Node.js for data management and user interaction.',
    icon: Code,
    type: 'project'
  },
  {
    year: '2021',
    title: 'RaghavTube - YouTube Clone',
    description: 'Developed a YouTube clone using React, showcasing video streaming and content management capabilities.',
    icon: Code,
    type: 'project'
  },
  {
    year: '2020-2021',
    title: 'Freelance Projects',
    description: 'Started taking on freelance projects, building websites and applications for various clients.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2019',
    title: 'Started Programming Journey',
    description: 'Began learning programming fundamentals and web development, setting the foundation for a career in software development.',
    icon: Code,
    type: 'education'
  }
]

export function Timeline() {
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
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From learning to code to building impactful applications - here's my path in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400" />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-dark-700 border-4 border-primary-500 rounded-full z-10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'education' 
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : item.type === 'project'
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                          : 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                      }`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 