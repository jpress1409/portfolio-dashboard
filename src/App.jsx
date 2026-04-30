import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PersonalInterests from './pages/PersonalInterests'
import MathData from './pages/MathData'
import ResumeContact from './pages/ResumeContact'
import AIIntegrations from './pages/AIIntegrations'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal-interests" element={<PersonalInterests />} />
      <Route path="/math-data" element={<MathData />} />
      <Route path="/resume-contact" element={<ResumeContact />} />
      <Route path="/ai-integrations" element={<AIIntegrations />} />
    </Routes>
  )
}
