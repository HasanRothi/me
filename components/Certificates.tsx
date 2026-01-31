'use client'

import { useState } from 'react'

const Certificates = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const certificatesPerPage = 3

  const certificates = [
    {
      id: 1,
      title: 'MongoDB Python Developer Path',
      issuer: 'MongoDB',
      date: 'Jun 2025',
      type: 'Database',
      certificateUrl: 'https://learn.mongodb.com/c/MDB0aleuocgfn',
      description: 'MongoDB Python Developer Path certification covering comprehensive MongoDB development with Python.',
      skills: ['MongoDB', 'MongoDB Atlas Vector Search', 'PyMongoArrow', 'MongoDB Transactions', 'MongoDB Aggregation', 'MongoDB Indexes', 'MongoDB Compass', 'MongoDB Atlas'],
      icon: '🍃'
    },
    {
      id: 2,
      title: 'Building AI Apps on AWS Learning Badge Path',
      issuer: 'MongoDB',
      date: 'Jun 2025',
      type: 'AI/ML',
      certificateUrl: 'https://learn.mongodb.com/c/MDB4wfmtp4qd9',
      description: 'Building AI Apps on AWS Learning Badge Path certification.',
      skills: ['Amazon Bedrock', 'MongoDB Atlas Vector Search', 'Retrieval-Augmented Generation (RAG)'],
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Building GenAI Apps Learning Badge Path',
      issuer: 'MongoDB',
      date: 'Jun 2025',
      type: 'AI/ML',
      certificateUrl: 'https://learn.mongodb.com/c/MDB9zme9jby88',
      description: 'Building GenAI Apps Learning Badge Path certification.',
      skills: ['MongoDB Atlas Vector Search', 'Retrieval-Augmented Generation (RAG)', 'Vector Embeddings'],
      icon: '🧠'
    },
    {
      id: 4,
      title: 'Redis Query Engine',
      issuer: 'Redis',
      date: 'Jun 2025',
      type: 'Database',
      certificateUrl: '#',
      description: 'Redis Query Engine certification covering Redis full-text search capabilities.',
      skills: ['Redis full-text search'],
      icon: '🔍'
    },
    {
      id: 5,
      title: 'Redis for Python developers',
      issuer: 'Redis',
      date: 'Jun 2025',
      type: 'Programming',
      certificateUrl: '#',
      description: 'Redis for Python developers certification.',
      skills: ['Redis', 'Python'],
      icon: '🐍'
    },
    {
      id: 6,
      title: 'Redis for AI',
      issuer: 'Redis',
      date: 'Jun 2025',
      type: 'AI/ML',
      certificateUrl: '#',
      description: 'Redis for AI certification covering vector databases and AI applications.',
      skills: ['Vector Databases', 'Vector Embeddings', 'Retrieval-Augmented Generation (RAG)'],
      icon: '🔮'
    },
    {
      id: 7,
      title: 'Ethical Hacker',
      issuer: 'Cisco',
      date: 'Feb 2025',
      type: 'Security',
      certificateUrl: '#',
      description: 'Ethical Hacker certification covering penetration testing and security assessments.',
      skills: ['SQL Injection', 'Penetration Testing'],
      icon: '🔒'
    },
    {
      id: 8,
      title: 'Python Core',
      issuer: 'Sololearn',
      date: 'Nov 2024',
      type: 'Programming',
      certificateUrl: '#',
      description: 'Python Core certification covering fundamental Python programming concepts.',
      skills: ['Python (Programming Language)'],
      icon: '🐍'
    },
    {
      id: 9,
      title: 'Python and SQL for Data Science',
      issuer: 'Scaler',
      date: 'Oct 2024',
      type: 'Data Science',
      certificateUrl: '#',
      description: 'Python and SQL for Data Science certification.',
      skills: ['Python (Programming Language)', 'NumPy', 'Panda', 'Matplotlib', 'SQL'],
      icon: '📊'
    },
    {
      id: 10,
      title: 'Data Science Course - Mastering the Fundamentals',
      issuer: 'Scaler',
      date: 'Aug 2024',
      type: 'Data Science',
      certificateUrl: '#',
      description: 'Data Science Course covering fundamental data science concepts and tools.',
      skills: ['Python (Programming Language)', 'NumPy', 'Panda', 'Matplotlib', 'Data Scraping'],
      icon: '📈'
    },
    {
      id: 11,
      title: 'Building Neo4j Applications with Go',
      issuer: 'Neo4j',
      date: 'Nov 2023',
      type: 'Programming',
      certificateUrl: '#',
      description: 'Building Neo4j Applications with Go certification.',
      skills: ['Go (Programming Language)'],
      icon: '🔗'
    },
    {
      id: 12,
      title: 'Building Neo4j Applications with Node.js',
      issuer: 'Neo4j',
      date: 'Nov 2023',
      type: 'Programming',
      certificateUrl: '#',
      description: 'Building Neo4j Applications with Node.js certification.',
      skills: ['Node.js', 'Express.js'],
      icon: '🔗'
    },
    {
      id: 13,
      title: 'Graph Data Modeling Fundamentals',
      issuer: 'Neo4j',
      date: 'Sep 2023',
      type: 'Database',
      certificateUrl: '#',
      description: 'Graph Data Modeling Fundamentals certification.',
      skills: ['Graph Databases', 'Data Modeling'],
      icon: '📊'
    },
    {
      id: 14,
      title: 'Building Neo4j Applications with TypeScript',
      issuer: 'Neo4j',
      date: 'Aug 2023',
      type: 'Programming',
      certificateUrl: '#',
      description: 'Building Neo4j Applications with TypeScript certification.',
      skills: ['TypeScript', 'Neo4j'],
      icon: '🔗'
    },
    {
      id: 15,
      title: 'Cypher Fundamentals',
      issuer: 'Neo4j',
      date: 'Aug 2023',
      type: 'Database',
      certificateUrl: '#',
      description: 'Cypher Fundamentals certification covering Neo4j query language.',
      skills: ['Cypher', 'Graph Queries'],
      icon: '🔍'
    },
    {
      id: 16,
      title: 'Neo4j Fundamentals',
      issuer: 'Neo4j',
      date: 'Aug 2023',
      type: 'Database',
      certificateUrl: '#',
      description: 'Neo4j Fundamentals certification covering graph database basics.',
      skills: ['Neo4j', 'Graph Databases'],
      icon: '🔗'
    },
    {
      id: 17,
      title: 'Golang',
      issuer: 'Sololearn',
      date: 'Jan 2023',
      type: 'Programming',
      certificateUrl: '#',
      description: 'Golang certification covering Go programming language fundamentals.',
      skills: ['Go (Programming Language)'],
      icon: '🐹'
    },
    {
      id: 18,
      title: 'M103: Basic Cluster Administration',
      issuer: 'MongoDB',
      date: 'Jan 2023',
      type: 'DevOps',
      certificateUrl: 'https://learn.mongodb.com/c/MDB9yq1prok4v',
      description: 'M103: Basic Cluster Administration certification.',
      skills: ['MongoDB', 'Database Administration'],
      icon: '⚙️'
    },
    {
      id: 19,
      title: 'M312: Diagnostics and Debugging',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'DevOps',
      certificateUrl: 'https://learn.mongodb.com/c/MDBt920jlkf4c',
      description: 'M312: Diagnostics and Debugging certification.',
      skills: ['MongoDB', 'Debugging', 'Performance Tuning'],
      icon: '🔧'
    },
    {
      id: 20,
      title: 'A131: Intro to MongoDB Charts',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'Data Science',
      certificateUrl: 'https://learn.mongodb.com/c/MDBentltq61xj',
      description: 'A131: Intro to MongoDB Charts certification.',
      skills: ['MongoDB', 'Data Visualization'],
      icon: '📊'
    },
    {
      id: 21,
      title: 'M150: MongoDB Authentication & Authorization',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'Security',
      certificateUrl: 'https://learn.mongodb.com/c/MDBtxva9vsm3r',
      description: 'M150: MongoDB Authentication & Authorization certification.',
      skills: ['MongoDB', 'Authentication', 'Authorization'],
      icon: '🔐'
    },
    {
      id: 22,
      title: 'M100: MongoDB for SQL Pros',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'Database',
      certificateUrl: 'https://learn.mongodb.com/c/MDBibqwdgqfrw',
      description: 'M100: MongoDB for SQL Pros certification.',
      skills: ['MongoDB', 'SQL', 'NoSQL'],
      icon: '🗄️'
    },
    {
      id: 23,
      title: 'M201: MongoDB Performance',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'DevOps',
      certificateUrl: 'https://learn.mongodb.com/c/MDBagxz6mj3ic',
      description: 'M201: MongoDB Performance certification.',
      skills: ['MongoDB', 'Performance Optimization'],
      icon: '🚀'
    },
    {
      id: 24,
      title: 'A300: MongoDB Atlas Security',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'Security',
      certificateUrl: 'https://learn.mongodb.com/c/MDBholgunlih3',
      description: 'A300: MongoDB Atlas Security certification.',
      skills: ['MongoDB Atlas', 'Cloud Security'],
      icon: '☁️'
    },
    {
      id: 25,
      title: 'M112: MongoDB Diagnostic Thinking',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'DevOps',
      certificateUrl: 'https://learn.mongodb.com/c/MDBtlcghm431b',
      description: 'M112: MongoDB Diagnostic Thinking certification.',
      skills: ['MongoDB', 'Troubleshooting'],
      icon: '🔍'
    },
    {
      id: 26,
      title: 'MongoDB Node.js Developer Path',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'Programming',
      certificateUrl: 'https://learn.mongodb.com/c/MDBki9ftidil5',
      description: 'MongoDB Node.js Developer Path certification.',
      skills: ['MongoDB', 'Node.js', 'JavaScript'],
      icon: '💚'
    },
    {
      id: 27,
      title: 'M320: MongoDB Data Modeling',
      issuer: 'MongoDB',
      date: 'Dec 2022',
      type: 'Database',
      certificateUrl: 'https://learn.mongodb.com/c/MDBu0eafupwhh',
      description: 'M320: MongoDB Data Modeling certification.',
      skills: ['MongoDB', 'Data Modeling', 'Schema Design'],
      icon: '🏗️'
    },
    {
      id: 28,
      title: 'M121: The MongoDB Aggregation Framework',
      issuer: 'MongoDB',
      date: 'Nov 2022',
      type: 'Database',
      certificateUrl: '#',
      description: 'M121: The MongoDB Aggregation Framework certification.',
      skills: ['MongoDB', 'Aggregation Framework'],
      icon: '⚡'
    },
    {
      id: 29,
      title: 'Personal Finance',
      issuer: '10 Minute School',
      date: 'Oct 2022',
      type: 'Business',
      certificateUrl: '#',
      description: 'Personal Finance certification.',
      skills: ['Financial Planning', 'Investment'],
      icon: '💰'
    },
    {
      id: 30,
      title: 'M001: Mongodb Basics',
      issuer: 'MongoDB',
      date: 'Oct 2022',
      type: 'Database',
      certificateUrl: '#',
      description: 'M001: MongoDB Basics certification covering fundamental MongoDB concepts.',
      skills: ['MongoDB', 'NoSQL Basics'],
      icon: '🌱'
    }
  ]

  const certTypes = ['All', 'Database', 'Programming', 'AI/ML', 'Security', 'DevOps', 'Data Science', 'Business']
  const [activeFilter, setActiveFilter] = useState('All')

  // Filter logic
  const filteredCerts = activeFilter === 'All'
    ? certificates
    : certificates.filter(cert => cert.type === activeFilter)

  // Pagination logic
  const totalPages = Math.ceil(filteredCerts.length / certificatesPerPage)
  const startIndex = (currentPage - 1) * certificatesPerPage
  const currentCerts = filteredCerts.slice(startIndex, startIndex + certificatesPerPage)

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  return (
    <section id="certificates" className="section-container">
      <h2 className="section-title">Certificates</h2>

      <div className="max-w-7xl mx-auto">

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {certTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleFilterChange(type)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
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
        {currentCerts.length > 0 ? (
          <div className="space-y-4 mb-8">
            {currentCerts.map((cert, index) => (
              <div
                key={cert.id}
                className="card p-4 transform transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Mobile Layout - Icon on top */}
                <div className="block md:hidden">
                  <div className="text-center mb-4">
                    <span className="text-3xl">{cert.icon}</span>
                    <div className="mt-2">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                        {cert.type}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-bold text-black mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-black font-medium text-sm mb-3">
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.certificateUrl !== '#' && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-black hover:text-gray-700 underline inline-block mb-3"
                      >
                        View Certificate →
                      </a>
                    )}
                  </div>

                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">
                      SKILLS:
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

                {/* Desktop Layout - Side by side */}
                <div className="hidden md:flex items-start gap-4">
                  {/* Left section - Icon and Type */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span className="text-3xl">{cert.icon}</span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {cert.type}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-black mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-black font-medium text-sm">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      {cert.certificateUrl !== '#' && (
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-black hover:text-gray-700 underline flex-shrink-0"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>

                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {cert.description}
                    </p>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-2">
                        SKILLS:
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No certificates found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-white border border-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-white border border-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Certificates