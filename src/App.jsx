import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PersonalInterests from './pages/PersonalInterests'
import MathData from './pages/MathData'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal-interests" element={<PersonalInterests />} />
      <Route path="/math-data" element={<MathData />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}
