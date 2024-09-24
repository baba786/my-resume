import React from 'react';
import { Mail } from 'lucide-react'

export default function MinimalistResume() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-8">
          <header className="mb-8 border-b pb-4">
            <h1 className="text-4xl font-bold text-gray-800 font-serif text-center">Sudhanshu Gautam</h1>
            <p className="text-2xl text-gray-600 mt-2 font-serif text-center">UX/UI Designer</p>
            <div className="flex items-center justify-center mt-4">
              <Mail className="w-5 h-5 text-gray-600 mr-2" />
              <a href="mailto:sudhanshu9252@gmail.com" className="text-gray-600 hover:text-blue-600 transition duration-300">sudhanshu9252@gmail.com</a>
            </div>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-serif border-b pb-2">Professional Summary</h2>
            <p className="text-gray-600">
              Lead UX/UI Designer with 8+ years of experience in creating user-centric digital experiences. Expertise in design research, usability testing, and AI integration for enhanced design processes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-serif border-b pb-2">Core Competencies</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "UX Design", "UI Design", "User Research", "Interaction Design",
                "Prototyping", "Accessibility", "Team Leadership", "Agile", "AI Integration"
              ].map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif border-b pb-2">Professional Experience</h2>
            {[
              {
                title: "Lead UX Designer",
                company: "Wikimedia Foundation",
                period: "2020 - Present",
                responsibilities: [
                  "Lead UX/UI initiatives for Wikipedia",
                  "Conduct user research and usability testing",
                  "Implement AI-powered design tools"
                ]
              },
              {
                title: "Senior UX Designer",
                company: "Noora Health",
                period: "2016 - 2020",
                responsibilities: [
                  "Designed health information IVR service",
                  "Led design team and mentored designers",
                  "Integrated AI-driven analytics tools"
                ]
              },
              {
                title: "Interaction Designer",
                company: "Copenhagen Institute of Interaction Design",
                period: "2015",
                responsibilities: [
                  "Designed user-centric products and services",
                  "Applied design thinking methodologies"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 font-serif">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="mb-1">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-serif border-b pb-2">Education</h2>
            <div className="text-gray-600">
              <p className="mb-2"><span className="font-semibold">Master's in Interaction Design</span> - Copenhagen Institute of Interaction Design, 2015</p>
              <p><span className="font-semibold">BTech in Industrial Electronics</span> - Engineering College Bikaner, 2010</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-serif border-b pb-2">Technical Skills</h2>
            <p className="text-gray-600">
              <span className="font-semibold">Design:</span> Sketch, Figma, Adobe XD | 
              <span className="font-semibold"> Prototyping:</span> Axure RP, Principle | 
              <span className="font-semibold"> Research:</span> UserTesting, Hotjar | 
              <span className="font-semibold"> Collaboration:</span> Jira, Trello | 
              <span className="font-semibold"> Programming:</span> HTML, CSS, JavaScript (basic) | 
              <span className="font-semibold"> AI Tools:</span> Various
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}