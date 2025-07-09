"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-yellow-300">Amazing</span> Together
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            I'm always excited to work on new projects and collaborate with innovative teams. 
            Whether you have a specific project in mind or just want to chat about technology, 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="mailto:raaghvv0508@gmail.com" 
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
            >
              raaghvv0508@gmail.com
            </a>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              Based in Edmonton, AB • Available for remote work worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 