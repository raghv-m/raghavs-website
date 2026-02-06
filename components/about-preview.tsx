"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Target, Zap } from 'lucide-react'

const expertise = [
  {
    icon: Shield,
    title: 'Security Auditing',
    description: 'Vulnerability assessment and compliance reviews',
  },
  {
    icon: Lock,
    title: 'Secure Development',
    description: 'Security-first SDLC and secure coding',
  },
  {
    icon: Target,
    title: 'Threat Analysis',
    description: 'Identifying and mitigating threats',
  },
  {
    icon: Zap,
    title: 'Incident Response',
    description: 'Rapid response and recovery planning',
  },
]

export function AboutPreview() {
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
            {'< ABOUT_ME />'}
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            Transitioning from Full Stack Development to Cybersecurity — combining deep technical knowledge with security expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-cyber-accent-cyan/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-cyber-accent-cyan/10 border border-cyber-accent-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-cyan transition-shadow">
                <item.icon className="w-7 h-7 text-cyber-accent-cyan" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-cyber-text-primary">
                {item.title}
              </h3>
              <p className="text-cyber-text-secondary text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/about" className="btn-primary inline-flex items-center font-heading">
            The Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
