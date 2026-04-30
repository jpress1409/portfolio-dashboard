import React from 'react'

export default function InProgressBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-amber-600/90 backdrop-blur-sm border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 py-2 text-center">
        <p className="text-white text-sm font-medium">
          🚧 This site is currently under active development. Some features may be incomplete.
        </p>
      </div>
    </div>
  )
}
