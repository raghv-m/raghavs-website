"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, ArrowRight, Shield } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-14 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cyber-text-primary mb-4">
            READY TO SECURE YOUR DIGITAL ASSETS?
          </h2>
          <p className="text-xl text-cyber-text-secondary mb-8 max-w-2xl mx-auto">
            Let&apos;s build secure, resilient systems. Whether you need a penetration test, security audit, or secure development guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center font-heading"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="btn-outline inline-flex items-center font-heading"
              >
                <Shield className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </motion.div>
          </div>

          <p className="mt-8 text-cyber-text-tertiary text-sm">
            Based in Edmonton, AB, Canada • Available for remote engagements
          </p>
        </motion.div>
      </div>
    </section>
  )
}
