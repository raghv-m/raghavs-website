"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Lock, Copy, Check } from "lucide-react"

const email = "raaghvv0508@gmail.com"
const socialLinks = [
  { name: "GitHub", url: "https://github.com/raghv-m", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/raghav-mahajan-17611b24b", icon: Linkedin },
]

export function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="glass-card p-6 md:p-8">
        <h2 className="font-heading text-lg font-bold text-cyber-text-primary mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-accent-cyan" />
          Alternative Contact
        </h2>

        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyber-accent-cyan shrink-0" />
              <span className="text-cyber-text-secondary font-mono text-sm">{email}</span>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-cyber-text-secondary hover:text-cyber-accent-cyan hover:border-cyber-accent-cyan/30 transition-all min-h-[44px]"
              aria-label="Copy email"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex items-center gap-3 text-cyber-text-secondary">
            <MapPin className="w-5 h-5 text-cyber-accent-cyan shrink-0" />
            <span>Edmonton, AB, Canada</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map((s) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-4 py-3 flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-accent-cyan hover:border-cyber-accent-cyan/30 transition-all min-h-[44px] min-w-[44px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={s.name}
              >
                <s.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{s.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-cyber-text-tertiary text-sm">
            <Lock className="w-4 h-4 text-cyber-accent-green shrink-0" />
            PGP key available for secure communication
          </div>
        </div>
      </div>
    </motion.div>
  )
}
