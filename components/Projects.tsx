'use client'

import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'TenTen AI',
      category: 'GenAI Product',
      period: 'Feb 2025 - Present',
      status: 'Production',
      description: 'End-to-end LLM-powered GenAI product serving 5K+ active learners at 10 Minute School. Built from scratch and scaled to handle high-volume AI interactions in production.',
      keyFeatures: [
        'LLM orchestration with LangGraph',
        'Vector search using PGVector',
        'Production-scale AI interactions',
        'Real-time learning analytics',
        'Multi-model AI integration'
      ],
      techStack: ['Go', 'Python', 'LangGraph', 'PGVector', 'PostgreSQL', 'OpenTelemetry', 'Opik'],
      impact: '5K+ active learners, High-volume production traffic',
      image: '🤖',
      github: '',
      demo: ''
    },
    {
      id: 2,
      title: 'ClassRoomOS',
      category: 'Backend Platform',
      period: 'Feb 2025 - Present',
      status: 'Development',
      description: 'Backend platform designed to power large-scale offline education centers for 10 Minute School. Architected and led development from ground up.',
      keyFeatures: [
        'Microservices architecture',
        'Real-time attendance tracking',
        'Course management system',
        'Student progress analytics',
        'Multi-center coordination'
      ],
      techStack: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'RabbitMQ'],
      impact: 'Powers offline education centers nationwide',
      image: '🏫',
      github: '',
      demo: ''
    },
    {
      id: 3,
      title: 'Click Tube Native App',
      category: 'Mobile Application',
      period: 'Nov 2021 - Present',
      status: 'Personal Project',
      description: 'Native mobile application built with React Native, featuring modern UI/UX and cross-platform compatibility.',
      keyFeatures: [
        'Cross-platform mobile app',
        'Modern React Native architecture',
        'Responsive design',
        'Native performance optimization',
        'User-friendly interface'
      ],
      techStack: ['React Native', 'JavaScript', 'Mobile Development', 'Cross-platform'],
      impact: 'Personal project showcasing mobile development skills',
      image: '📱',
      github: 'https://github.com/rothi/click-tube-native',
      demo: ''
    },
    {
      id: 4,
      title: 'E-Shop Backend',
      category: 'E-commerce API',
      period: 'Nov 2021 - Present',
      status: 'Personal Project',
      description: 'Complete e-commerce backend API built with NestJS and MongoDB, featuring modern architecture and scalable design patterns.',
      keyFeatures: [
        'RESTful API architecture',
        'Product catalog management',
        'Order processing system',
        'User authentication & authorization',
        'Inventory management'
      ],
      techStack: ['NestJS', 'MongoDB', 'TypeScript', 'REST API', 'Authentication'],
      impact: 'Demonstrates full-stack e-commerce development expertise',
      image: '🛒',
      github: 'https://github.com/rothi/eshop-backend',
      demo: ''
    },
    {
      id: 5,
      title: 'SomoyNews.TV Platform',
      category: 'News Platform',
      period: 'Nov 2020 - Dec 2021',
      status: 'Production',
      description: 'Complete news platform with multilingual support, real-time breaking news, and advanced caching system.',
      keyFeatures: [
        'Multilingual news content',
        'Real-time breaking news with GraphQL Subscriptions',
        'Dynamic caching with Redis TTL',
        'Advanced search functionality',
        'Content management system'
      ],
      techStack: ['Node.js', 'Vue.js', 'MongoDB', 'GraphQL', 'Redis', 'Socket.IO'],
      impact: 'Served thousands of daily news readers',
      image: '📰',
      github: '',
      demo: 'https://somoynews.tv'
    },
    {
      id: 6,
      title: 'SomoyTV & Somoy School',
      category: 'EdTech & Media',
      period: 'Jan 2022 - Sep 2022',
      status: 'Production',
      description: 'Educational technology platform and video streaming service with resumable uploads and dynamic content management.',
      keyFeatures: [
        'Resumable video uploads',
        'AWS S3 integration',
        'Dynamic content queries',
        'Admin panel with filters',
        'Video streaming optimization'
      ],
      techStack: ['Node.js', 'NestJS', 'Vue.js', 'MongoDB', 'AWS S3', 'Video Streaming'],
      impact: 'Educational content delivery to thousands of students',
      image: '🎓',
      github: '',
      demo: ''
    }
  ]

  const categories = ['All', 'GenAI Product', 'Backend Platform', 'Mobile Application', 'E-commerce API', 'News Platform', 'EdTech & Media']
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">Featured Projects</h2>

      <div className="max-w-6xl mx-auto overflow-x-hidden">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm flex-shrink-0 ${
                activeFilter === category
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card p-4 sm:p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 animate-slide-up w-full overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(selectedProject === project.id ? 0 : project.id)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{project.image}</span>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Production' ? 'bg-green-100 text-green-700' :
                    project.status === 'Development' ? 'bg-gray-100 text-black' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Title & Category */}
              <h3 className="text-xl font-bold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-black font-semibold text-sm mb-2">
                {project.category}
              </p>
              <p className="text-gray-500 text-sm mb-3">
                {project.period}
              </p>

              {/* Project Description */}
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Expand/Collapse Indicator */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  Click for details
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                    selectedProject === project.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expanded Content */}
              {selectedProject === project.id && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-black mr-2 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-black mb-2 text-sm">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-black rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="font-semibold text-black mb-1 text-sm">
                      Impact:
                    </h4>
                    <p className="text-gray-700 text-sm italic">
                      {project.impact}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 bg-gray-800 text-white rounded text-xs hover:bg-gray-700 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 bg-black text-white rounded text-xs hover:bg-gray-800 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">6+</div>
            <div className="text-gray-700">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">5K+</div>
            <div className="text-gray-700">Users Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-700">Production Ready</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">GenAI</div>
            <div className="text-gray-700">Latest Focus</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects