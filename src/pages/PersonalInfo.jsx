import React from 'react'
import { Link } from 'react-router-dom'

export default function PersonalInfo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-emerald-400">Personal Info</h1>
      <p className="text-slate-400 mb-8">Contact & info coming soon...</p>
      <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">&larr; Back to Dashboard</Link>
    </div>
  )
}
