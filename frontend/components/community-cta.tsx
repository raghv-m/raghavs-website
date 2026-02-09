"use client"

import { motion } from 'framer-motion'
import { MessageCircle, Github, ArrowRight } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/lib/external-links'
import Link from 'next/link'

export function CommunityCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-cyber-text-primary">
            Join The Community
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-2xl mx-auto">
            Connect with Edmonton&apos;s cybersecurity community and access open-source learning resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Discord Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-2 border-[rgba(88,101,242,0.3)] hover:border-[rgba(88,101,242,0.6)] transition-all duration-300 text-center"
          >
            <MessageCircle className="w-12 h-12 text-[#5865F2] mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3 text-cyber-text-primary">
              Discord Community
            </h3>
            <p className="text-cyber-text-secondary mb-6">
              Connect with Edmonton cyber pros, share knowledge, and collaborate on projects.
            </p>
            <motion.a
              href={EXTERNAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-[#5865F2] to-[#7289DA] hover:shadow-lg hover:shadow-[#5865F2]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 hover:border-cyber-accent-green/30 transition-all duration-300 text-center"
          >
            <Github className="w-12 h-12 text-cyber-accent-green mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3 text-cyber-text-primary">
              GitHub Organization
            </h3>
            <p className="text-cyber-text-secondary mb-6">
              Learn together with shared resources, lab setups, and documentation.
            </p>
            <motion.a
              href={EXTERNAL_LINKS.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-[#2ea44f] to-[#238636] hover:shadow-lg hover:shadow-[#2ea44f]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
