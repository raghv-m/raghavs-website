"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog', isNew: true },
  { name: 'Community', href: '/community', isNew: true },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Photography', href: '/photography' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card border-b border-white/10 shadow-glass' : 'bg-cyber-bg-primary/80 backdrop-blur-glass border-b border-white/5'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-heading font-bold text-lg text-cyber-text-primary tracking-wider"
            >
              <span className="text-cyber-accent-cyan">R</span>_MAHAJAN
            </motion.span>
            <span className="inline-block w-2 h-4 bg-cyber-accent-cyan animate-cursor-blink group-hover:opacity-80" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                  pathname === item.href
                    ? 'text-cyber-accent-cyan'
                    : 'text-cyber-text-secondary hover:text-cyber-accent-cyan'
                }`}
              >
                /{item.name.toLowerCase().replace(/\s/g, '')}
                {item.isNew && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[0.65rem] font-bold rounded bg-gradient-to-r from-cyber-accent-cyan to-cyber-accent-green text-cyber-bg-primary">
                    NEW
                  </span>
                )}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-accent-cyan rounded-full -z-10"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-cyber-text-secondary hover:text-cyber-accent-cyan hover:border-cyber-accent-cyan/30 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
                    pathname === item.href
                      ? 'text-cyber-accent-cyan bg-cyber-accent-cyan/10 border border-cyber-accent-cyan/20'
                      : 'text-cyber-text-secondary hover:text-cyber-accent-cyan hover:bg-white/5 border border-transparent'
                  }`}
                >
                  /{item.name.toLowerCase().replace(/\s/g, '')}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
