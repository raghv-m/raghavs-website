"use client"

import { useState, useEffect } from 'react'

const LINES = [
  { prompt: '$ whoami', output: '> Raghav Mahajan', delay: 0 },
  { prompt: '$ cat role.txt', output: '> Cybersecurity Professional', delay: 800 },
  { prompt: '$ echo $SPECIALIZATION', output: '> Penetration Testing | Threat Analysis | Secure Dev', delay: 1600 },
]

function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const handler = () => setPrefersReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return prefersReduced
}

export function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState<{ prompt: string; output: string; promptDone: boolean; outputDone: boolean }[]>([])
  const [cursorVisible, setCursorVisible] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(LINES.map((l) => ({ ...l, promptDone: true, outputDone: true })))
      return
    }
    let timeout: ReturnType<typeof setTimeout>
    const run = async () => {
      for (let i = 0; i < LINES.length; i++) {
        const { prompt, output, delay } = LINES[i]
        await new Promise((r) => { timeout = setTimeout(r, delay) })
        setVisibleLines((prev) => [...prev.slice(0, i), { prompt, output, promptDone: false, outputDone: false }])
        await new Promise((r) => { timeout = setTimeout(r, 50 * (prompt.length + 1)) })
        setVisibleLines((prev) => {
          const next = [...prev]
          next[i] = { ...next[i], promptDone: true }
          return next
        })
        await new Promise((r) => { timeout = setTimeout(r, 400) })
        setVisibleLines((prev) => {
          const next = [...prev]
          next[i] = { ...next[i], outputDone: true }
          return next
        })
        await new Promise((r) => { timeout = setTimeout(r, 600) })
      }
    }
    run()
    return () => clearTimeout(timeout)
  }, [reducedMotion])

  return (
    <div className="glass-card p-6 font-mono text-sm sm:text-base max-w-2xl w-full text-left overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-cyber-text-tertiary ml-2 text-xs">terminal</span>
      </div>
      <div className="space-y-2 min-h-[140px]">
        {visibleLines.map((line, i) => (
          <div key={i} className="space-y-0.5">
            <div className="text-cyber-text-secondary flex items-center gap-1 flex-wrap">
              <span>{line.prompt}</span>
              {i === visibleLines.length - 1 && !line.promptDone && (
                <span
                  className={`inline-block w-2 h-4 bg-cyber-accent-cyan ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transition: 'opacity 0.1s' }}
                />
              )}
            </div>
            {line.promptDone && (
              <div className="text-cyber-accent-green font-medium drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]">
                {line.output}
              </div>
            )}
          </div>
        ))}
        {visibleLines.length > 0 && visibleLines[visibleLines.length - 1].outputDone && (
          <div className="text-cyber-text-secondary flex items-center gap-1">
            <span>$</span>
            <span
              className={`inline-block w-2 h-4 bg-cyber-accent-cyan ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.1s' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
