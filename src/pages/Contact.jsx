import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [state, handleSubmit] = useForm('mvzderoq')

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl text-center">
          <div className="mb-8">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">&larr; Back to Dashboard</Link>
          </div>

          <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-8">
            <div className="text-5xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-emerald-400 mb-2">Message Sent!</h1>
            <p className="text-slate-300">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">&larr; Back to Dashboard</Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-emerald-400">Contact</h1>
        <p className="text-slate-400 mb-8">Send me a message and I'll get back to you</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
                placeholder="Your name"
              />
              <ValidationError field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
                placeholder="your@email.com"
              />
              <ValidationError field="email" errors={state.errors} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
              placeholder="What's this about?"
            />
            <ValidationError field="subject" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors resize-none"
              placeholder="Your message..."
            />
            <ValidationError field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-700/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>

          {state.errors && state.errors.length > 0 && (
            <div className="p-4 rounded-lg bg-red-900/30 border border-red-500/30 text-red-400">
              Please fix the errors above and try again.
            </div>
          )}
        </form>

        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm">
            You can also email me directly at{' '}
            <a href="mailto:jpress1409@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              jpress1409@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
