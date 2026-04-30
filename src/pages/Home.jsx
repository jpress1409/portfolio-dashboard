import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import InProgressBanner from '../components/InProgressBanner'

const tiles = [
  {
    to: '/personal-interests',
    label: 'Personal Interests',
    description: 'Personal projects made for fun',
    color: 'from-slate-700 to-slate-900',
    border: 'border-slate-600/30',
    hover: 'hover:border-slate-500/70 hover:shadow-slate-500/20',
  },
  {
    to: '/math-data',
    label: 'Math & Data',
    description: 'Calculators, converters & business tools',
    color: 'from-indigo-700 to-indigo-900',
    border: 'border-indigo-600/30',
    hover: 'hover:border-indigo-500/70 hover:shadow-indigo-500/20',
  },
  {
    to: '/resume-contact',
    label: 'Resume & Contact',
    description: 'My experience, skills & contact info',
    color: 'from-teal-700 to-teal-900',
    border: 'border-teal-600/30',
    hover: 'hover:border-teal-500/70 hover:shadow-teal-500/20',
  },
  {
    to: '/ai-integrations',
    label: 'AI Integrations',
    description: 'AI projects and integrations',
    color: 'from-zinc-700 to-zinc-900',
    border: 'border-zinc-600/30',
    hover: 'hover:border-zinc-500/70 hover:shadow-zinc-500/20',
  },
]

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = []
    let isFinishing = false

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0f0'
      ctx.font = fontSize + 'px monospace'

      let allOffScreen = true

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] * fontSize < canvas.height) {
          allOffScreen = false
        }
        
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (!isFinishing && drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      if (isFinishing && allOffScreen) {
        clearInterval(interval)
      }
    }

    const interval = setInterval(draw, 50)

    // Stop generating new characters after 3 seconds, let existing ones finish falling
    const timeout = setTimeout(() => {
      isFinishing = true
    }, 3000)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative pt-16">
      <InProgressBanner />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: '#000' }}
      />
      <div className="absolute top-6 right-8">
        <a
          href="https://github.com/jpress1409/portfolio-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-white">Portfolio</h1>
        <p className="text-slate-400 mb-14 text-lg">Select a section to explore</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {tiles.map((tile) => (
          <Link
            key={tile.to}
            to={tile.to}
            className={`
              group relative flex flex-col justify-end
              rounded-2xl border ${tile.border} ${tile.hover}
              bg-gradient-to-br ${tile.color}
              p-8 min-h-52
              shadow-lg hover:shadow-xl
              transition-all duration-300 ease-out
              hover:-translate-y-1
            `}
          >
            <span className="text-2xl font-bold text-white leading-tight">{tile.label}</span>
            <span className="text-sm text-white/60 mt-1">{tile.description}</span>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}
