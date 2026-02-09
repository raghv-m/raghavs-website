"use client"

import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  words: string[]
  loop?: boolean
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
  className?: string
}

export function TypewriterEffect({
  words,
  loop = true,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  className = '',
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delayBetweenWords)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting && currentText === currentWord) {
      setIsPaused(true)
      return
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => {
        if (prev === words.length - 1) {
          return loop ? 0 : prev
        }
        return prev + 1
      })
      return
    }

    const timeout = setTimeout(
      () => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1)
          }
          return currentWord.substring(0, prev.length + 1)
        })
      },
      isDeleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, loop, typeSpeed, deleteSpeed, delayBetweenWords])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

