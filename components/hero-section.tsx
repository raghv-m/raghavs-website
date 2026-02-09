"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Mail, Shield, Github, Linkedin } from 'lucide-react'
import { TerminalHero } from './terminal-hero'
import { TypewriterEffect } from './typewriter-effect'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/raghv-m', label: 'GitHub', Icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/raghav-mahajan-17611b24b', label: 'LinkedIn', Icon: Linkedin },
]

const stats = [
  { value: 50, suffix: '+', label: 'THM Rooms' },
  { value: 300, suffix: '+', label: 'Learning Hrs' },
  { value: 3, suffix: '', label: 'Cert Prep' },
  { value: 150, suffix: '+', label: 'Community' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    if (!mounted) return
    const duration = 1500
    const steps = 30
    const step = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value, mounted])
  return <>{count}{suffix}</>
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(26,15,46,0.4)_0%,transparent_70%)]" />

      <div className="relative z-10 container-custom section-padding text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <TerminalHero />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-cyber-text-primary tracking-tight"
        >
          <span className="gradient-text">SECURING THE DIGITAL FRONTIER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-cyber-text-secondary mb-2 min-h-[2rem]"
        >
          <TypewriterEffect
            words={[
              'SOC Analyst in Training',
              'TryHackMe Enthusiast',
              'Community Builder',
              'Security Researcher',
              'Open Source Contributor',
            ]}
            loop={true}
            typeSpeed={80}
            deleteSpeed={40}
            delayBetweenWords={2500}
            className="text-cyber-accent-cyan font-semibold"
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-cyber-text-tertiary text-sm md:text-base mb-10 max-w-2xl mx-auto"
        >
          Learning in public, building in the open, growing together with Edmonton&apos;s cybersecurity community
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link href="/projects" className="btn-primary inline-flex items-center font-heading">
              <Shield className="w-5 h-5 mr-2" />
              View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="btn-outline inline-flex items-center font-heading">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              className="glass-card px-6 py-4 min-w-[100px] text-center"
            >
              <div className="font-heading font-bold text-2xl md:text-3xl text-cyber-accent-cyan">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-cyber-text-tertiary text-xs md:text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center gap-4 mt-10"
        >
          {socialLinks.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-xl glass-card text-cyber-text-secondary hover:text-cyber-accent-cyan hover:border-cyber-accent-cyan/30 transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <s.Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyber-text-tertiary"
        >
          <ArrowDown className="w-6 h-6" aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  )
}
