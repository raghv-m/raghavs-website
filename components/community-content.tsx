"use client"

import { motion } from 'framer-motion'
import { MessageCircle, Github, Users, BookOpen, Code, Share2, Target, Zap } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/lib/external-links'

export function CommunityContent() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-cyber-text-primary">
            {'< COMMUNITY />'} Building Together
          </h1>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            I founded this Discord community because there was no active hub for cybersecurity professionals and learners in Edmonton, Alberta.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Discord Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 border-2 border-[rgba(88,101,242,0.3)] hover:border-[rgba(88,101,242,0.6)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-[#5865F2]" />
              <h2 className="font-heading text-2xl font-bold text-cyber-text-primary">
                Edmonton Cybersecurity Community
              </h2>
            </div>
            <p className="text-cyber-text-secondary mb-6 leading-relaxed">
              Whether you&apos;re a seasoned pro, student, or just curious about cybersecurity, join us to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                'Share knowledge & resources',
                'Collaborate on projects',
                'Network with local professionals',
                'Discuss CTF challenges',
                'Get career advice & mentorship',
                'Stay updated on local events',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-cyber-text-secondary">
                  <span className="text-cyber-accent-green">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <motion.a
              href={EXTERNAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-[#5865F2] to-[#7289DA] hover:shadow-lg hover:shadow-[#5865F2]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6" />
              Join Discord Community
            </motion.a>
            <p className="text-cyber-text-tertiary text-sm mt-4 font-mono">
              {EXTERNAL_LINKS.discord}
            </p>
          </motion.div>

          {/* GitHub Organization Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Github className="w-8 h-8 text-cyber-accent-green" />
              <h2 className="font-heading text-2xl font-bold text-cyber-text-primary">
                GitHub Organization
              </h2>
            </div>
            <p className="text-cyber-text-secondary mb-2 font-semibold text-lg">
              HomeLab-Raghav Organization
            </p>
            <p className="text-cyber-text-secondary mb-6 leading-relaxed">
              All my lab setups, notes, cheatsheets, and documentation are open source and available for the community.
            </p>
            <p className="text-cyber-text-secondary mb-4 font-semibold">What you&apos;ll find:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                'Kali Linux lab configurations',
                'TryHackMe room writeups',
                'Security tools documentation',
                'Cheat sheets for pentesting',
                'Vulnerable app setups',
                'Learning notes & resources',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-cyber-text-secondary">
                  <span className="text-cyber-accent-cyan mt-1">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <motion.a
              href={EXTERNAL_LINKS.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-[#2ea44f] to-[#238636] hover:shadow-lg hover:shadow-[#2ea44f]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-6 h-6" />
              View GitHub Organization
            </motion.a>
            <p className="text-cyber-text-tertiary text-sm mt-4 font-mono break-all">
              {EXTERNAL_LINKS.githubOrg}
            </p>
          </motion.div>

          {/* Why I Built This */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 bg-cyber-accent-purple/10 border-cyber-accent-purple/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-cyber-accent-purple" />
              <h2 className="font-heading text-2xl font-bold text-cyber-text-primary">
                Why I Built This
              </h2>
            </div>
            <p className="text-cyber-text-secondary leading-relaxed text-lg">
              Learning cybersecurity can be isolating. I wanted to create a space where Edmonton&apos;s cybersecurity community can connect, collaborate, and grow together.
            </p>
            <p className="text-cyber-text-secondary leading-relaxed mt-4 text-lg">
              If you&apos;re in Edmonton (or Alberta) and interested in cybersecurity, this is your community. Let&apos;s build something amazing together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
