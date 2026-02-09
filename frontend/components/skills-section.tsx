"use client"

import { motion } from 'framer-motion'
import { Shield, Code, Globe, FileCheck } from 'lucide-react'

const skillCategories = [
  {
    category: 'Security & Pentesting',
    icon: Shield,
    skills: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'OWASP ZAP', 'SQLMap', 'Nikto'],
  },
  {
    category: 'Secure Development',
    icon: Code,
    skills: ['Python', 'Bash', 'JavaScript', 'Node.js', 'API Security', 'JWT', 'OAuth', 'Cryptography'],
  },
  {
    category: 'Network & Cloud Security',
    icon: Globe,
    skills: ['TCP/IP', 'Firewalls', 'VPN', 'IDS/IPS', 'AWS Security', 'Docker', 'SSL/TLS'],
  },
  {
    category: 'Security Practices',
    icon: FileCheck,
    skills: ['Vulnerability Assessment', 'Risk Analysis', 'Security Auditing', 'SIEM', 'OWASP Top 10', 'MITRE ATT&CK'],
  },
]

export function SkillsSection() {
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
            {'< SKILLS_ARSENAL />'}
          </h2>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
            From developer to defender — security tools and methodologies I use to protect digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-cyber-accent-cyan" />
                <h3 className="font-heading text-lg font-semibold text-cyber-text-primary">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-cyber-bg-primary/50 border border-white/10 text-cyber-text-secondary hover:border-cyber-accent-cyan/40 hover:text-cyber-accent-cyan transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
