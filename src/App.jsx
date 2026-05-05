import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PersonalInterests from './pages/PersonalInterests'
import MathData from './pages/MathData'
import ResumeContact from './pages/ResumeContact'
import AIIntegrations from './pages/AIIntegrations'
import AIChessTrainer from './pages/AIChessTrainer'
import MediaTracker from './pages/MediaTracker'
import SpotifyParser from './pages/SpotifyParser'
import PromptExploitGame from './pages/PromptExploitGame'
import PromptExploitSuite from './pages/PromptExploitSuite'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal-interests" element={<PersonalInterests />} />
      <Route path="/math-data" element={<MathData />} />
      <Route path="/resume-contact" element={<ResumeContact />} />
      <Route path="/ai-integrations" element={<AIIntegrations />} />
      <Route path="/ai-chess-trainer" element={<AIChessTrainer />} />
      <Route path="/media-tracker" element={<MediaTracker />} />
      <Route path="/spotify-parser" element={<SpotifyParser />} />
      <Route path="/prompt-exploit-game" element={<PromptExploitGame />} />
      <Route path="/prompt-exploit-suite" element={<PromptExploitSuite />} />
    </Routes>
  )
}
