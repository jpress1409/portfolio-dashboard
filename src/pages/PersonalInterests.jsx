import React from 'react'
import { Link } from 'react-router-dom'
import InProgressBanner from '../components/InProgressBanner'

const projects = [
  {
    label: 'Pokemon Damage Calculator',
    url:"https://pokemon-damage-calc.onrender.com/",
  },
  {
    label: 'NFL Stat Tracker',
    url: "https://nfl-stat-tracker-se89.onrender.com/",
  },
  {
    label: 'AI Chess Trainer',
    url: '/ai-chess-trainer',
  },
  {
    label: 'Media Tracker',
    url: '/media-tracker',
  },
]

export default function PersonalInterests() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pt-16">
      <InProgressBanner />
      <div className="absolute top-6 right-8 flex gap-4">
        <a
          href="https://github.com/jpress1409/pokemon-damage-calc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
          title="Pokemon Damage Calculator"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://github.com/jpress1409/nfl-stat-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
          title="NFL Stat Tracker"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-2 text-slate-300">Personal Interests</h1>
      <p className="text-slate-400 mb-10">Personal projects made for fun</p>

      <div className="flex flex-col gap-4 w-full max-w-md mb-10">
        {projects.map((project) => (
          <a
            key={project.label}
            href={project.url ?? '#'}
            target={project.url && project.url.startsWith('http') ? '_blank' : undefined}
            rel={project.url && project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`
              flex items-center gap-4 px-6 py-4 rounded-xl border border-slate-600/30
              bg-slate-800/50 text-white font-semibold text-lg
              transition-all duration-200
              ${project.url
                ? 'hover:bg-slate-700/50 hover:border-slate-500/70 hover:shadow-lg hover:shadow-slate-500/20 cursor-pointer'
                : 'opacity-50 cursor-not-allowed'}
            `}
          >
            {project.label}
            {!project.url && (
              <span className="ml-auto text-xs text-slate-400/60 font-normal">Coming soon</span>
            )}
          </a>
        ))}
      </div>

      <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">&larr; Back to Dashboard</Link>
    </div>
  )
}
