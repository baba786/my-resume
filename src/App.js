import { Mail, Briefcase, GraduationCap, Code, Globe, Award } from 'lucide-react'

export default function MinimalistResume() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white font-sans">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 font-serif">Sudhanshu Gautam</h1>
        <p className="text-xl text-gray-600 mt-1 font-serif">UX/UI Designer</p>
        <div className="flex items-center mt-2">
          <Mail className="w-4 h-4 text-gray-600 mr-2" />
          <a href="mailto:sudhanshu9252@gmail.com" className="text-gray-600 hover:text-blue-600">sudhanshu9252@gmail.com</a>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">Professional Summary</h2>
        <p className="text-gray-600 text-sm">
          Lead UX/UI Designer with 8+ years of experience in creating user-centric digital experiences. Expertise in design research, usability testing, and AI integration for enhanced design processes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">Core Competencies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "UX Design", "UI Design", "User Research", "Interaction Design",
            "Prototyping", "Accessibility", "Team Leadership", "Agile", "AI Integration"
          ].map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 font-serif">Professional Experience</h2>
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
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 font-serif">{job.title}</h3>
            <p className="text-gray-600 text-sm">{job.company} | {job.period}</p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">Education</h2>
        <div className="text-sm text-gray-600">
          <p>Master's in Interaction Design - Copenhagen Institute of Interaction Design, 2015</p>
          <p>BTech in Industrial Electronics - Engineering College Bikaner, 2010</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">Technical Skills</h2>
        <p className="text-sm text-gray-600">
          Design: Sketch, Figma, Adobe XD | Prototyping: Axure RP, Principle | Research: UserTesting, Hotjar | 
          Collaboration: Jira, Trello | Programming: HTML, CSS, JavaScript (basic) | AI Tools: Various
        </p>
      </section>
    </div>
  )
}