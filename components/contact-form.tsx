"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, CheckCircle, AlertCircle } from "lucide-react"
import { api } from "@/lib/api"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot - leave empty, bots often fill it
    to: "raaghvv0508@gmail.com",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.website) {
      setSubmitStatus("success")
      return
    }

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (!name || !email || !message) {
      setSubmitStatus("error")
      return
    }

    if (!EMAIL_REGEX.test(email)) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const payload = {
        name: name.slice(0, 500),
        email,
        subject: formData.subject?.trim() || 'Portfolio contact from raghv.dev',
        message: message.slice(0, 5000),
        to: formData.to,
      }
      const data = await api.contact(payload)
      if (data.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
          to: "raaghvv0508@gmail.com",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 md:p-8 font-mono"
    >
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-cyber-accent-green" />
        <h2 className="font-heading text-xl font-bold text-cyber-text-primary">
          $ send_message --to raghav
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="to" value={formData.to} />

        {/* Honeypot - hidden from users */}
        <div className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cyber-text-secondary mb-2">
            &gt; Name: *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-cyber-bg-primary/50 text-cyber-text-primary placeholder-cyber-text-tertiary focus:border-cyber-accent-cyan focus:ring-1 focus:ring-cyber-accent-cyan transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cyber-text-secondary mb-2">
            &gt; Email: *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-cyber-bg-primary/50 text-cyber-text-primary placeholder-cyber-text-tertiary focus:border-cyber-accent-cyan focus:ring-1 focus:ring-cyber-accent-cyan transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cyber-text-secondary mb-2">
            &gt; Message: *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-cyber-bg-primary/50 text-cyber-text-primary placeholder-cyber-text-tertiary focus:border-cyber-accent-cyan focus:ring-1 focus:ring-cyber-accent-cyan transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 rounded-lg font-heading font-semibold flex items-center justify-center gap-2 min-h-[48px] bg-cyber-accent-cyan/20 border border-cyber-accent-cyan/40 text-cyber-accent-cyan hover:bg-cyber-accent-cyan/30 hover:border-cyber-accent-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-accent-cyan focus-visible:outline-offset-2"
        >
          {isSubmitting ? (
            <>
              <Lock className="w-5 h-5" />
              Encrypting message...
              <span className="inline-block w-2 h-4 bg-cyber-accent-cyan animate-cursor-blink ml-1" />
            </>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              ENCRYPT & SEND
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-cyber-accent-green/10 border border-cyber-accent-green/30 text-cyber-accent-green"
            >
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Message sent. I&apos;ll get back to you soon.</span>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-cyber-accent-orange/10 border border-cyber-accent-orange/30 text-cyber-accent-orange"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>Something went wrong. Try again or email me directly.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}
