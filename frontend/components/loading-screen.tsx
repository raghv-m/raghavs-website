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

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("cyber-loading-seen") === "true"
    if (hasSeen) {
      setVisible(false)
      return
    }

    const duration = 2000
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyber-text-tertiary text-xs mt-2 text-center"
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
