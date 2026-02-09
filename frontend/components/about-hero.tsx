"use client"

import { motion } from 'framer-motion'
import { Download, Mail, MapPin, GraduationCap, Shield, Code, BookOpen, Target } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="section-padding bg-cyber-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-cyber-text-primary">
            The Journey: <span className="gradient-text">From Physical Security to Cyber Defense</span>
          </h1>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto mb-4">
            <span className="text-cyber-accent-cyan font-semibold">Current Status:</span> Cybersecurity Learner & Enthusiast
          </p>
          <p className="text-lg text-cyber-text-tertiary max-w-2xl mx-auto">
            Combining physical security experience, software development skills, and freelance web development to build expertise in digital defense.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* My Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="font-heading text-2xl font-bold mb-6 text-cyber-text-primary flex items-center gap-3">
              <Shield className="w-6 h-6 text-cyber-accent-cyan" />
              My Background
            </h2>
            <div className="space-y-4 text-cyber-text-secondary leading-relaxed">
              <div>
                <p className="font-semibold text-cyber-accent-green mb-2">Security Experience:</p>
                <p>Working as a Tactical Security Guard and Screening Officer at Impact Security since April 2023, handling access control, incident reporting, and loss prevention. I understand security from a physical perspective - controlling access points, monitoring threats, and responding to incidents.</p>
              </div>
              <div>
                <p className="font-semibold text-cyber-accent-green mb-2">Development Foundation:</p>
                <p>Graduated from NAIT&apos;s Digital Media & IT program (Software Development). Freelance web developer since August 2022, building websites and software solutions for small businesses.</p>
              </div>
              <div>
                <p className="font-semibold text-cyber-accent-green mb-2">The Connection:</p>
                <p>Physical security taught me threat assessment and risk management. Software development gave me technical skills. Now I&apos;m merging both into cybersecurity.</p>
              </div>
            </div>
          </motion.div>

          {/* Why Cybersecurity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <h2 className="font-heading text-2xl font-bold mb-6 text-cyber-text-primary flex items-center gap-3">
              <Target className="w-6 h-6 text-cyber-accent-purple" />
              Why Cybersecurity?
            </h2>
            <p className="text-cyber-text-secondary leading-relaxed mb-4">
              While working in physical security, I realized the digital world faces the same challenges - unauthorized access, threat detection, incident response - but at a much larger scale. My web development work exposed me to vulnerabilities firsthand: insecure authentication, injection attacks, weak encryption. I became fascinated with not just building systems, but <span className="font-semibold text-cyber-accent-cyan">securing</span> them.
            </p>
            <p className="text-cyber-text-secondary leading-relaxed">
              I&apos;m not claiming to be an expert. I&apos;m a learner, actively building my skills and pursuing this career transition with dedication.
            </p>
          </motion.div>

          {/* Current Learning Path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h2 className="font-heading text-2xl font-bold mb-6 text-cyber-text-primary flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-cyber-accent-green" />
              Current Learning Path (2025-2026)
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-cyber-accent-green mb-3 flex items-center gap-2">
                  📚 Active Training:
                </p>
                <ul className="space-y-2 text-cyber-text-secondary ml-6 list-disc">
                  <li><span className="font-semibold">TryHackMe</span> - Hands-on cybersecurity training and CTF challenges</li>
                  <li><span className="font-semibold">Google Cybersecurity Professional Certificate</span> (Coursera) - Foundational security concepts and practices</li>
                  <li><span className="font-semibold">Self-Study</span> - OWASP Top 10, Linux command line, networking fundamentals, Python scripting</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-cyber-accent-cyan mb-3 flex items-center gap-2">
                  🔧 Home Lab Setup:
                </p>
                <ul className="space-y-2 text-cyber-text-secondary ml-6 list-disc">
                  <li><span className="font-semibold">Kali Linux</span> - Primary penetration testing environment</li>
                  <li><span className="font-semibold">Ubuntu</span> - Secondary system for development and practice</li>
                  <li>Running vulnerable VMs and CTF challenges locally</li>
                  <li>Documenting everything in my GitHub organization</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-cyber-accent-purple mb-3 flex items-center gap-2">
                  🎯 Target Certifications:
                </p>
                <ul className="space-y-2 text-cyber-text-secondary ml-6 list-disc">
                  <li><span className="font-semibold">CompTIA Security+</span> (Currently preparing - planned exam Q2 2026)</li>
                  <li><span className="font-semibold">CEH (Certified Ethical Hacker)</span> (Future goal)</li>
                  <li><span className="font-semibold">CompTIA CySA+</span> (Future goal)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Career Goal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-8 border-2 border-cyber-accent-cyan/30"
          >
            <h2 className="font-heading text-2xl font-bold mb-4 text-cyber-accent-cyan">
              Career Goal: SOC Analyst Level 1
            </h2>
            <p className="text-cyber-text-secondary leading-relaxed mb-4">
              My immediate goal is to break into cybersecurity as a <span className="font-semibold text-cyber-accent-cyan">Security Operations Center (SOC) Analyst Level 1</span>. This role aligns perfectly with my background:
            </p>
            <ul className="space-y-2 text-cyber-text-secondary ml-6 list-disc">
              <li>Security monitoring (similar to physical surveillance)</li>
              <li>Incident detection and response (like incident reporting in security work)</li>
              <li>Threat analysis (risk assessment skills transfer)</li>
              <li>Technical implementation (leveraging development background)</li>
            </ul>
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8"
          >
            <h2 className="font-heading text-2xl font-bold mb-6 text-cyber-text-primary flex items-center gap-3">
              <Code className="w-6 h-6 text-cyber-accent-green" />
              What I Bring to the Table
            </h2>
            <ul className="space-y-3 text-cyber-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-cyber-accent-green mt-1">✓</span>
                <span>Real security experience (access control, threat assessment, incident response)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-accent-green mt-1">✓</span>
                <span>Strong technical foundation (web development, software engineering)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-accent-green mt-1">✓</span>
                <span>Self-directed learner (proven by freelance career and current training)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-accent-green mt-1">✓</span>
                <span>Practical understanding of how systems work (because I&apos;ve built them)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-accent-green mt-1">✓</span>
                <span>Unique perspective bridging physical and digital security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-accent-green mt-1">✓</span>
                <span>Active community builder (founded Edmonton cybersecurity Discord)</span>
              </li>
            </ul>
          </motion.div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass-card p-8 bg-cyber-accent-green/10 border-cyber-accent-green/30"
          >
            <h2 className="font-heading text-xl font-bold mb-4 text-cyber-accent-green">
              Current Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-cyber-accent-green text-xl">✅</span>
                <span className="text-cyber-text-secondary">Actively learning and training daily</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyber-accent-green text-xl">✅</span>
                <span className="text-cyber-text-secondary">Building hands-on projects to demonstrate skills</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyber-accent-green text-xl">✅</span>
                <span className="text-cyber-text-secondary">No certifications yet, but preparing diligently</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyber-accent-green text-xl">✅</span>
                <span className="text-cyber-text-secondary">Open to junior roles, internships, or entry-level positions</span>
              </div>
              <div className="flex items-center gap-3 md:col-span-2">
                <MapPin className="w-5 h-5 text-cyber-accent-green" />
                <span className="text-cyber-text-secondary">Based in Edmonton, AB - Available for remote or on-site work</span>
              </div>
            </div>
          </motion.div>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-cyber-accent-cyan shrink-0" />
              <div>
                <p className="text-sm text-cyber-text-tertiary">Education</p>
                <p className="font-semibold text-cyber-text-primary">NAIT Graduate, 2024</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <MapPin className="w-6 h-6 text-cyber-accent-cyan shrink-0" />
              <div>
                <p className="text-sm text-cyber-text-tertiary">Location</p>
                <p className="font-semibold text-cyber-text-primary">Edmonton, AB</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <Mail className="w-6 h-6 text-cyber-accent-cyan shrink-0" />
              <div>
                <p className="text-sm text-cyber-text-tertiary">Email</p>
                <a href="mailto:raaghvv0508@gmail.com" className="font-semibold text-cyber-accent-cyan hover:underline">
                  raaghvv0508@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <Download className="w-6 h-6 text-cyber-accent-cyan shrink-0" />
              <div>
                <p className="text-sm text-cyber-text-tertiary">Resume</p>
                <a
                  href="/cvRM.pdf"
                  download="Raghav_Mahajan_Resume.pdf"
                  className="font-semibold text-cyber-accent-cyan hover:underline"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
