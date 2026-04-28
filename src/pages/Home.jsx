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
