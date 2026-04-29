import React from 'react'
import { Link } from 'react-router-dom'

const tiles = [
  {
    to: '/personal-interests',
    label: 'Personal Interests',
    description: 'Personal projects made for fun',
    color: 'from-violet-600 to-violet-900',
    border: 'border-violet-500/30',
    hover: 'hover:border-violet-400/70 hover:shadow-violet-500/20',
    icon: '🎨',
  },
  {
    to: '/math-data',
    label: 'Math & Data',
    description: 'Calculators, converters & business tools',
    color: 'from-sky-600 to-sky-900',
    border: 'border-sky-500/30',
    hover: 'hover:border-sky-400/70 hover:shadow-sky-500/20',
    icon: '📊',
  },
  {
    to: '/contact',
    label: 'Contact',
    description: 'Get in touch with me',
    color: 'from-emerald-600 to-emerald-900',
    border: 'border-emerald-500/30',
    hover: 'hover:border-emerald-400/70 hover:shadow-emerald-500/20',
    icon: '✉️',
  },
  {
    to: '/resume',
    label: 'Resume',
    description: 'My experience & skills',
    color: 'from-amber-600 to-amber-900',
    border: 'border-amber-500/30',
    hover: 'hover:border-amber-400/70 hover:shadow-amber-500/20',
    icon: '📄',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
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
            <span className="text-4xl mb-4 select-none">{tile.icon}</span>
            <span className="text-2xl font-bold text-white leading-tight">{tile.label}</span>
            <span className="text-sm text-white/60 mt-1">{tile.description}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
