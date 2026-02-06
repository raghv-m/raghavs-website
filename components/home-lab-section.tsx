"use client"

import { motion } from 'framer-motion'
import { Monitor, Code, BookOpen, ExternalLink } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/lib/external-links'
import Link from 'next/link'

export function HomeLabSection() {
  return (
    <section className="section-padding bg-cyber-bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-cyber-text-primary">
            {'< HOME_LAB />'} My Practice Environment
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            Hands-on practice with real tools and vulnerable systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-8 h-8 text-cyber-accent-cyan" />
            <h3 className="font-heading text-2xl font-bold text-cyber-text-primary">
              Current Setup
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-6 border-2 border-cyber-accent-cyan/30">
              <h4 className="font-heading font-semibold text-lg text-cyber-accent-cyan mb-3">Kali Linux</h4>
              <p className="text-cyber-text-secondary text-sm mb-3">Primary OS</p>
              <ul className="space-y-2 text-cyber-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-accent-green mt-1">•</span>
                  <span>Penetration testing tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-accent-green mt-1">•</span>
                  <span>CTF challenge environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-accent-green mt-1">•</span>
                  <span>Vulnerable VM testing</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 border-2 border-cyber-accent-purple/30">
              <h4 className="font-heading font-semibold text-lg text-cyber-accent-purple mb-3">Ubuntu</h4>
              <p className="text-cyber-text-secondary text-sm mb-3">Secondary System</p>
              <ul className="space-y-2 text-cyber-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-accent-green mt-1">•</span>
                  <span>Development environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-accent-green mt-1">•</span>
                  <span>Docker containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-accent-green mt-1">•</span>
                  <span>Security tool testing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-cyber-text-secondary mb-4 flex items-start gap-2">
              <BookOpen className="w-5 h-5 text-cyber-accent-green shrink-0 mt-0.5" />
              <span>All configurations, scripts, and notes documented in GitHub organization</span>
            </p>
            <Link
              href={EXTERNAL_LINKS.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyber-accent-cyan hover:underline font-medium"
            >
              View Lab Documentation
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
