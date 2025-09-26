"use client"

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Twitter } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'raaghvv0508@gmail.com',
    link: 'mailto:raaghvv0508@gmail.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Edmonton, AB, Canada',
    link: null,
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (825) 343-1168',
    link: 'tel:+8253431168',
    color: 'from-purple-500 to-purple-600'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/raghv-m',
    icon: Github,
    color: 'hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/raghav-mahajan-17611b24b',
    icon: Linkedin,
    color: 'hover:bg-blue-600 hover:text-white'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/ragh.v_',
    icon: Instagram,
    color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/rghvm_',
    icon: Twitter,
    color: 'hover:bg-blue-400 hover:text-white'
  }
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Contact Information
        </h2>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary-600 dark:text-primary-400 hover:underline transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Connect With Me
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color}`}
            >
              <social.icon className="w-5 h-5" />
              <span className="font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Let's Work Together
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          I'm always interested in new opportunities and exciting projects. Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Available for freelance projects</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Open to full-time opportunities</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Willing to relocate for the right opportunity</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 