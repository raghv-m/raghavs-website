"use client"

import { motion } from 'framer-motion'
import { Download, Mail, MapPin, GraduationCap } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Raghav</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full Stack Developer passionate about creating innovative digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  RM
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Raghav Mahajan
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Professional Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with a strong foundation in software engineering and a love for creating impactful digital solutions. 
                Graduated from NAIT in 2024 with expertise in the MERN stack, Flutter, Java, and Firebase.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in software development has been driven by curiosity and a desire to solve real-world problems through innovative technology. 
                I specialize in building scalable web applications, mobile apps, and creating seamless user experiences.
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                  <p className="font-semibold text-gray-900 dark:text-white">NAIT Graduate, 2024</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Edmonton, AB</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-semibold text-gray-900 dark:text-white">raaghvv0508@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <Download className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Resume</p>
                  <a
                    href="/cvRM.pdf"
                    download="Raghav_Mahajan_Resume.pdf"
                    className="font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Download PDF
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 