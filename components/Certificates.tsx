'use client'

import { useState } from 'react'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'MongoDB Python Developer Path',
      issuer: 'MongoDB',
      date: '2025',
      type: 'Database',
      certificateUrl: 'https://learn.mongodb.com/c/MDB0aleuocgfn',
      description: 'Comprehensive certification covering MongoDB development with Python, including Atlas Vector Search and AI applications.',
      skills: ['MongoDB', 'MongoDB Atlas Vector Search', 'Python', 'Database Design', 'AI Integration', 'NoSQL'],
      icon: '🍃'
    },
    {
      id: 2,
      title: 'Building AI Apps on AWS Learning Badge Path',
      issuer: 'MongoDB',
      date: '2025',
      type: 'AI/ML',
      certificateUrl: 'https://learn.mongodb.com/c/MDB4wfmtp4qd9',
      description: 'Specialized training in building AI applications on AWS using MongoDB Atlas Vector Search and Amazon Bedrock.',
      skills: ['Amazon Bedrock', 'MongoDB Atlas Vector Search', 'AWS', 'AI Applications'],
      icon: '🤖'
    }
  ]

  const certTypes = ['All', 'Cloud Architecture', 'Machine Learning', 'Programming', 'DevOps', 'AI/ML']
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredCerts = activeFilter === 'All'
    ? certificates
    : certificates.filter(cert => cert.type === activeFilter)

  return (
    <section id="certificates" className="section-container">
      <h2 className="section-title">Certificates & Credentials</h2>

      <div className="max-w-6xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === type
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              className="card p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cert.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.type === 'Database' ? 'bg-gray-100 text-black' :
                  cert.type === 'AI/ML' ? 'bg-gray-100 text-gray-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {cert.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-black mb-2">
                {cert.title}
              </h3>

              <p className="text-black font-semibold mb-1">
                {cert.issuer}
              </p>

              <p className="text-gray-500 text-sm mb-3">
                Issued: {cert.date}
              </p>

              {selectedCert === cert.id && (
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 mb-2">
                      CERTIFICATE:
                    </p>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black hover:text-gray-700 underline break-all"
                    >
                      View Certificate
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">
                      SKILLS COVERED:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-black rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  Click for details
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                    selectedCert === cert.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certificates