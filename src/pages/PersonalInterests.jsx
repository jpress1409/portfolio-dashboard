import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    label: 'Pokemon Damage Calculator',
    url:"https://pokemon-damage-calc.onrender.com/",
    icon: '⚡',
  },
  {
    label: 'NFL Stat Tracker',
    url: "https://nfl-stat-tracker-se89.onrender.com/",
    icon: '🏈',
  },
]

export default function PersonalInterests() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-2 text-violet-400">Personal Interests</h1>
      <p className="text-slate-400 mb-10">Personal projects made for fun</p>

      <div className="flex flex-col gap-4 w-full max-w-md mb-10">
        {projects.map((project) => (
          <a
            key={project.label}
            href={project.url ?? '#'}
            target={project.url ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`
              flex items-center gap-4 px-6 py-4 rounded-xl border border-violet-500/30
              bg-violet-900/30 text-white font-semibold text-lg
              transition-all duration-200
              ${project.url
                ? 'hover:bg-violet-700/50 hover:border-violet-400/70 hover:shadow-lg hover:shadow-violet-500/20 cursor-pointer'
                : 'opacity-50 cursor-not-allowed'}
            `}
          >
            <span className="text-2xl">{project.icon}</span>
            {project.label}
            {!project.url && (
              <span className="ml-auto text-xs text-violet-400/60 font-normal">Coming soon</span>
            )}
          </a>
        ))}
      </div>

      <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">&larr; Back to Dashboard</Link>
    </div>
  )
}
