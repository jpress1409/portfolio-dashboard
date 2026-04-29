import React from 'react'
import { Link } from 'react-router-dom'

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-8">
          <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">&larr; Back to Dashboard</Link>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-amber-400">Page Under Construction</h1>
        <p className="text-slate-400 mb-12 text-lg">We're building something awesome!</p>

        <div className="mb-12">
          <div className="text-8xl animate-bounce mb-4">👷</div>
          <div className="text-6xl animate-pulse">🔨</div>
        </div>

        <div className="aspect-video w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-slate-700/50">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XfR9iY5y94s"
            title="Land Down Under by Men at Work"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="bg-slate-900"
          />
        </div>
      </div>
    </div>
  )
}
