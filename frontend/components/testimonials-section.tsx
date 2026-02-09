"use client"

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'EZ Plumbing Inc',
    role: 'Business Owner',
    company: 'EZ Plumbing Inc',
    image: '/testimonials/ez-plumbing.jpg',
    content: 'Raghav delivered a professional website that perfectly represents our business. The mobile experience is excellent and we\'ve seen a significant increase in customer inquiries.',
    rating: 5,
    project: 'Business Website'
  },
  {
    name: 'Mr. Rooter Plumbing',
    role: 'Marketing Manager',
    company: 'Mr. Rooter Plumbing Edmonton',
    image: '/testimonials/mr-rooter.jpg',
    content: 'Outstanding work! The website is fast, professional, and exactly what we needed. Raghav understood our requirements and delivered beyond expectations.',
    rating: 5,
    project: 'Service Website'
  },
  {
    name: 'Fatima\'s Kitchen',
    role: 'Restaurant Owner',
    company: 'Fatima\'s Kitchen',
    image: '/testimonials/fatimas-kitchen.jpg',
    content: 'Our new website beautifully showcases our menu and makes it easy for customers to find us. The online ordering integration works flawlessly!',
    rating: 5,
    project: 'Restaurant Website'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about working together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-900/30">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-dark-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-1">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to start your project?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  )
}

