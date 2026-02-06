"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Loader2, Calendar, ExternalLink, FolderOpen, Award, Target } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/lib/external-links'

const completed = [
  { 
    name: 'Google Cybersecurity Professional Certificate', 
    issuer: 'Coursera / Google', 
    year: '2025', 
    verifyUrl: EXTERNAL_LINKS.drive,
  },
]

const inProgress = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', progress: 80, target: 'Q2 2026', status: 'Exam scheduled' },
]

const planned = [
  'CEH (Certified Ethical Hacker)',
  'CompTIA CySA+',
  'OSCP (Offensive Security Certified Professional)',
  'GIAC GPEN',
]

const timeline = [
  { year: '2024', event: 'NAIT Diploma', completed: true },
  { year: '2025', event: 'Started Cybersecurity', completed: true },
  { year: '2025', event: 'Google Cyber Certificate', completed: true },
  { year: '2026', event: 'Security+ (planned)', completed: false },
  { year: '2026', event: 'CEH (planned)', completed: false },
]

export function CertificationsContent() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-cyber-text-primary">
            {'< CERTIFICATIONS & LEARNING_PATH />'}
          </h1>
          <p className="text-xl text-cyber-text-secondary max-w-2xl mx-auto">
            I&apos;m transparent about where I am in my cybersecurity journey. All certificates and course completions are stored in my Google Drive for verification.
          </p>
        </motion.div>

        {/* Google Drive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.a
            href={EXTERNAL_LINKS.drive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-heading font-bold text-lg text-white bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:shadow-lg hover:shadow-[#4285F4]/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FolderOpen className="w-7 h-7" />
            View All Certifications & Credentials
          </motion.a>
          <p className="text-cyber-text-tertiary text-sm mt-4 font-mono break-all max-w-2xl mx-auto">
            {EXTERNAL_LINKS.drive}
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Completed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="font-heading text-xl font-bold text-cyber-accent-green mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              COMPLETED
            </h2>
            <ul className="space-y-4">
              {completed.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl bg-cyber-bg-primary/50 border border-white/10"
                >
                  <div>
                    <span className="font-heading font-semibold text-cyber-text-primary flex items-center gap-2">
                      <Award className="w-5 h-5 text-cyber-accent-green" />
                      {cert.name}
                    </span>
                    <p className="text-cyber-text-tertiary text-sm mt-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Issued: {cert.year} • {cert.issuer}
                    </p>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyber-accent-cyan hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* In Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="font-heading text-xl font-bold text-cyber-accent-cyan mb-6 flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              IN PROGRESS
            </h2>
            <ul className="space-y-6">
              {inProgress.map((cert) => (
                <li key={cert.name} className="p-4 rounded-xl bg-cyber-bg-primary/50 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <span className="font-heading font-semibold text-cyber-text-primary flex items-center gap-2">
                        <Target className="w-5 h-5 text-cyber-accent-cyan" />
                        {cert.name}
                      </span>
                      <p className="text-cyber-text-tertiary text-sm mt-1">
                        {cert.issuer} • Target: {cert.target} • Status: {cert.status}
                      </p>
                    </div>
                    <span className="text-cyber-accent-cyan text-sm font-mono">{cert.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-cyber-bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cert.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyber-accent-cyan to-cyber-accent-purple shadow-glow-cyan"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Planned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="font-heading text-xl font-bold text-cyber-text-secondary mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              PLANNED
            </h2>
            <ul className="space-y-2">
              {planned.map((name) => (
                <li
                  key={name}
                  className="py-2 px-4 rounded-lg text-cyber-text-secondary border border-white/5 hover:border-cyber-accent-purple/20 transition-colors"
                >
                  • {name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learning Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="font-heading text-xl font-bold text-cyber-text-primary mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-cyber-accent-purple" />
              Learning Timeline
            </h2>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${item.completed ? 'bg-cyber-accent-green' : 'bg-cyber-text-tertiary'}`} />
                    {index < timeline.length - 1 && (
                      <div className={`w-0.5 h-12 ${item.completed ? 'bg-cyber-accent-green/30' : 'bg-cyber-text-tertiary/30'}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-heading font-semibold text-cyber-text-primary">{item.year}</p>
                    <p className="text-cyber-text-secondary">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
