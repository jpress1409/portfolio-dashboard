import React from 'react'
import { Link } from 'react-router-dom'

const resumeData = {
  name: 'Joseph Pressley',
  title: 'Security Analyst',
  contact: 'Pittsburgh, PA | jpress1409@gmail.com',
  summary: 'Cybersecurity analyst with experience in AI security, governance, and risk assessment across model evaluation, enterprise AI onboarding, policy development, and prompt-based testing. Skilled in Python automation, agent-aware workflow support, executive-facing HTML/reporting, and self-service prompt injection evaluation.',
  experience: [
    {
      company: 'BNY',
      role: 'Cybersecurity Analyst',
      period: 'July 2025 – Present',
      bullets: [
        'Evaluated Skild.AI for the Eliza Robotics initiative from a security perspective by reviewing risks related to model behavior, system usage, and control expectations, helping inform whether the platform was appropriate for enterprise use and what safeguards would be needed before adoption.',
        'Created the first draft of an AI Security Policy and supported development of an AI Risk Assessment Methodology to improve consistency in evaluating AI use cases and control expectations.',
        'Supported risk assessment activities during onboarding of Enterprise ChatGPT by identifying security considerations, reviewing proposed usage patterns, and helping stakeholders make more informed adoption decisions with clearer understanding of residual risk and required controls.',
        'Expanded work around AI security findings into reporting materials tailored for executive audiences, including clear summaries of key risks, implications, and recommended next steps to improve decision-making and visibility.',
        'Contributed to initiatives involving agent-based capabilities and workflow integration, including familiarity with how agents can be incorporated into business processes to automate actions, support self-service experiences, and improve control-aware adoption of AI tools.',
      ],
    },
    {
      company: 'BNY',
      role: 'Cybersecurity Intern',
      period: 'Jan 2025 – July 2025',
      bullets: [
        'Built a Python-based testing script that automatically ran more than 20,000 prompts across Azure Content Safety, Calypso AI, and Protect AI proof-of-concepts, then parsed and structured results for comparative analysis of detection quality, control coverage, and operational gaps.',
        'Automated collection and parsing of large prompt-test outputs into usable result sets, reducing manual review effort and making it easier for stakeholders to identify trends, compare vendor performance, and determine which solutions were most viable for BNY use cases.',
        'Began development of an initiative to identify gaps in AI-related policies, helping surface where existing governance materials did not fully address emerging AI risks and creating a foundation for stronger policy coverage.',
        'Supported development of self-service tooling related to prompt injection testing, helping enable more repeatable evaluation of model resilience and improving the organization\'s ability to assess AI security issues earlier in the workflow.',
        'Contributed to work involving AI agents and workflow integration by exploring how AI capabilities could be embedded into practical processes while maintaining attention to security, usability, and governance considerations.',
      ],
    },
    {
      company: 'Chick-fil-A McKnight Rd',
      role: 'Supervisor',
      period: 'Oct 2017 – Jan 2025',
      bullets: [
        'Led operations, trained staff, and strengthened communication, teamwork, adaptability, and accountability in a high-volume environment.',
        'Managed service quality and inventory support while mentoring new team members and improving day-to-day execution.',
      ],
    },
    {
      company: 'Year Up',
      role: 'Professional Training Program',
      period: '',
      bullets: [
        'Developed professional communication, presentation, teamwork, and problem-solving skills for cross-functional environments.',
      ],
    },
  ],
  skills: [
    'Python, Java, SQL | Flask, REST APIs, JSON-based pipelines',
    'AI threat modeling, control coverage analysis, AI risk assessment, prompt injection testing',
    'Policy-to-system mapping, secure AI lifecycle, agent-based workflow concepts, executive HTML/reporting',
    'Secure SDLC, input validation, system hardening | Git, Microsoft Office Suite, Teams, Zoom',
  ],
}

export default function Resume() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen p-8">
      <div className="absolute top-6 right-8 no-print">
        <a
          href="https://github.com/jpress1409/portfolio-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 flex items-center justify-between no-print">
          <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">&larr; Back to Dashboard</Link>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors text-sm"
          >
            Export as PDF
          </button>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">{resumeData.name}</h1>
          <h2 className="text-2xl text-amber-400 mb-2">{resumeData.title}</h2>
          <p className="text-slate-400">{resumeData.contact}</p>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-amber-400 mb-4 uppercase tracking-wider">Professional Summary</h3>
          <p className="text-slate-300 leading-relaxed">{resumeData.summary}</p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-amber-400 mb-6 uppercase tracking-wider">Experience</h3>
          <div className="space-y-8">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-amber-500/30 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                  <span className="text-slate-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-amber-400 font-medium mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-slate-300 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-amber-400 mb-4 uppercase tracking-wider">Skills</h3>
          <ul className="space-y-2">
            {resumeData.skills.map((skill, idx) => (
              <li key={idx} className="text-slate-300 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
