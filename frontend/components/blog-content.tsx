"use client"

import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why I\'m Transitioning to Cybersecurity',
    excerpt: 'My journey from physical security guard and web developer to cybersecurity learner. Why I\'m making this career transition and what I hope to achieve.',
    date: 'Feb 5, 2026',
    readTime: '5 min read',
    tags: ['Journey', 'CareerTransition', 'Introduction'],
    slug: 'why-transitioning-to-cybersecurity',
  },
  {
    id: '2',
    title: 'TryHackMe: Overpass Room Writeup',
    excerpt: 'My approach to solving the Overpass room, focusing on web enumeration, privilege escalation, and key takeaways for beginners.',
    date: 'Coming Soon',
    readTime: '10 min read',
    tags: ['TryHackMe', 'Linux', 'PrivEsc'],
    slug: 'tryhackme-overpass-writeup',
  },
  {
    id: '3',
    title: 'Setting Up My Home Lab: Kali Linux & Ubuntu',
    excerpt: 'A guide to setting up a cybersecurity home lab with Kali Linux for penetration testing and Ubuntu for development. Tools, configurations, and tips.',
    date: 'Coming Soon',
    readTime: '8 min read',
    tags: ['HomeLab', 'KaliLinux', 'Setup'],
    slug: 'home-lab-setup',
  },
]

export function BlogContent() {
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
            {'< LEARNING_BLOG />'} My Cyber Journey
          </h1>
          <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto mb-4">
            Documenting my cybersecurity learning path, TryHackMe writeups, tools, and insights.
          </p>
          <p className="text-cyber-text-tertiary">
            I&apos;m learning in public. Not everything here is perfect, but it&apos;s authentic and might help someone else on their journey.
          </p>
        </motion.div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-cyber-accent-cyan/30 transition-all duration-300"
            >
              <div className="mb-4">
                <h2 className="font-heading text-2xl font-bold mb-4 text-cyber-text-primary hover:text-cyber-accent-cyan transition-colors">
                  {post.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-cyber-text-tertiary mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <p className="text-cyber-text-secondary leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-lg bg-cyber-bg-primary/50 border border-white/10 text-cyber-text-secondary font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {post.date !== 'Coming Soon' ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="ml-auto inline-flex items-center gap-2 text-cyber-accent-cyan hover:underline font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="ml-auto text-cyber-text-tertiary text-sm italic">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8"
        >
          <h2 className="font-heading text-xl font-bold mb-6 text-cyber-text-primary flex items-center gap-2">
            <Tag className="w-6 h-6 text-cyber-accent-cyan" />
            Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'TryHackMe Writeups',
              'Tool Reviews',
              'Learning Notes',
              'CTF Challenges',
              'Security News',
              'Home Lab Setup',
              'Certification Prep',
            ].map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-lg bg-cyber-bg-primary/50 border border-white/10 text-cyber-text-secondary text-sm text-center hover:border-cyber-accent-cyan/30 transition-colors cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
