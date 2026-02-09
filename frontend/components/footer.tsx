"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail, MapPin, Lock } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/raghv-m', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/raghav-mahajan-17611b24b', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/ragh.v_/', icon: Instagram },
  { name: 'Email', href: 'mailto:raaghvv0508@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cyber-bg-secondary/80 backdrop-blur-glass">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-xl text-cyber-text-primary"
            >
              <span className="text-cyber-accent-cyan">R</span>_MAHAJAN
            </motion.div>
            <p className="text-cyber-text-secondary text-sm">
              Cybersecurity professional — securing the digital frontier with penetration testing, audits, and secure development.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-cyber-text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Projects', 'Blog', 'Community', 'Certifications', 'Photography', 'Contact'].map((label) => (
                <li key={label}>
                  <Link
                    href={label === 'About' ? '/about' : `/${label.toLowerCase()}`}
                    className="text-cyber-text-secondary hover:text-cyber-accent-cyan transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-cyber-text-primary">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-lg glass-card text-cyber-text-secondary hover:text-cyber-accent-cyan hover:border-cyber-accent-cyan/30 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-cyber-text-tertiary text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              Edmonton, AB, Canada
            </p>
            <p className="text-cyber-text-tertiary text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 shrink-0" />
              PGP key available for secure communication
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-cyber-text-tertiary">
            © {new Date().getFullYear()} Raghav Mahajan. All rights reserved.
          </p>
          <p className="text-xs text-cyber-text-tertiary mt-1">
            Securing the digital frontier from Edmonton, AB
          </p>
        </div>
      </div>
    </footer>
  )
}
