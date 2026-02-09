"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const MESSAGES = [
  "Loading encryption keys...",
  "Establishing secure connection...",
  "Validating credentials...",
  "Initializing systems...",
  "Bypassing firewall...",
  "Decrypting payload...",
]

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState(MESSAGES[0])

  const handleSkip = () => {
    if (typeof window !== "undefined") sessionStorage.setItem("cyber-loading-seen", "true")
    setVisible(false)
  }

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("cyber-loading-seen") === "true"
    if (hasSeen) {
      setVisible(false)
      return
    }

    const duration = 800 // Reduced from 2000ms to 800ms (2.5x faster)
    const steps = 40
    const stepMs = duration / steps
    const stepValue = 100 / steps
    let step = 0

    const progressInterval = setInterval(() => {
      step++
      setProgress(Math.min(step * stepValue, 100))
      if (step % 5 === 0) {
        setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)])
      }
      if (step >= steps) clearInterval(progressInterval)
    }, stepMs)

    const hideTimer = setTimeout(() => {
      if (typeof window !== "undefined") sessionStorage.setItem("cyber-loading-seen", "true")
      setVisible(false)
    }, duration)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cyber-bg-primary font-mono"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="w-full max-w-md px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyber-accent-green text-sm mb-4 text-center"
            >
              {message}
            </motion.div>
            <div className="h-1.5 w-full rounded-full bg-cyber-bg-secondary overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-accent-cyan to-cyber-accent-green"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-cyber-text-tertiary text-xs"
              >
                {Math.round(progress)}%
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={handleSkip}
                className="text-cyber-accent-cyan text-xs hover:underline focus:outline-none focus:ring-2 focus:ring-cyber-accent-cyan focus:ring-offset-2 focus:ring-offset-cyber-bg-primary rounded px-2 py-1"
              >
                Skip →
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
