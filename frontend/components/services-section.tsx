"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Shield, Lock } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Penetration Testing',
    description: 'Ethical hacking and vulnerability discovery. Web apps, networks, and APIs tested with real-world attack simulations.',
  },
  {
    icon: Shield,
    title: 'Secure Development',
    description: 'Security-first SDLC, secure code reviews, and security training for development teams.',
  },
  {
    icon: Lock,
    title: 'Security Audits',
    description: 'Comprehensive security assessments, compliance reviews, and remediation guidance.',
  },
]

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-cyber-text-primary">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            Security services to protect your systems and build resilient applications.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="glass-card p-8 text-center group hover:border-cyber-accent-cyan/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyber-accent-cyan/10 border border-cyber-accent-cyan/20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-cyan transition-shadow">
                <service.icon className="w-8 h-8 text-cyber-accent-cyan" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-cyber-text-primary">
                {service.title}
              </h3>
              <p className="text-cyber-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-primary inline-flex font-heading">
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
