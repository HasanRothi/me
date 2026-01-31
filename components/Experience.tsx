'use client'

import { useState } from 'react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      company: '10 Minute School',
      position: 'Software Engineer - Specialist (L3)',
      duration: 'Feb 2025 - Present',
      description: [
        'Owned end-to-end architecture of TenTen AI, an LLM-powered GenAI product serving 5K+ active learners',
        'Architected and led development of ClassRoomOS from scratch, powering offline education centers',
        'Built scalable ETL pipelines for large-scale user and learning data analytics',
        'Implemented distributed observability across microservices using OpenTelemetry',
        'Collaborated cross-functionally with product, academic, and operations teams'
      ],
      technologies: ['Go', 'Python', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'RabbitMQ', 'AWS', 'PGVector', 'LangGraph', 'OpenTelemetry', 'Opik']
    },
    {
      company: '10 Minute School',
      position: 'Software Engineer - Senior Executive (L2)',
      duration: 'Jan 2023 - Jan 2025',
      description: [
        'Designed and implemented comprehensive Course ERP system for streamlined operations',
        'Introduced efficient course search using Typesense as ElasticSearch alternative',
        'Integrated Firebase Cloud Messaging for real-time in-app notifications',
        'Developed live class updates and Superchat using Firebase RealtimeDB',
        'Implemented ETL processes with Apache Airflow for MongoDB and Postgres analytics',
        'Built scalable order and enrollment modules for smooth user transactions'
      ],
      technologies: ['Go', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis', 'Typesense', 'RabbitMQ', 'Docker', 'Kubernetes']
    },
    {
      company: 'Walton Group',
      position: 'Senior Software Engineer',
      duration: 'Oct 2022 - Jan 2023',
      description: [
        'Contributed to microservice within Walton Plaza ecosystem focusing on Inventory Management',
        'Developed real-time order update functionalities using GraphQL and Kafka',
        'Built scalable backend services with Node.js, MongoDB, and GraphQL',
        'Ensured seamless communication across distributed services'
      ],
      technologies: ['Node.js', 'MongoDB', 'GraphQL', 'Kafka']
    },
    {
      company: 'Sayburgh Solutions (SomoyTV)',
      position: 'Senior Software Engineer - Full Stack',
      duration: 'Jan 2022 - Sep 2022',
      description: [
        'Developed SomoyTV, Somoy School (EdTech) & Somoy VOD Platform',
        'Implemented resumable video uploads and AWS S3 image uploads',
        'Developed dynamic MongoDB queries and reusable backend components',
        'Built dynamic filters improving maintainability across admin panels'
      ],
      technologies: ['Node.js', 'Express.js', 'NestJS', 'Vue.js', 'Nuxt.js', 'MongoDB', 'GraphQL', 'REST API', 'AWS']
    },
    {
      company: 'Sayburgh Solutions (SomoyNews)',
      position: 'Associate Software Engineer',
      duration: 'Nov 2020 - Dec 2021',
      description: [
        'Developed SomoyNews.TV platform with optimized database performance',
        'Enhanced search functionality for better user discovery',
        'Handled multilingual news content through efficient database structuring',
        'Built real-time breaking news system using GraphQL Subscriptions over Redis',
        'Developed dynamic caching system with TTL logic for improved performance'
      ],
      technologies: ['Node.js', 'Express.js', 'Vue.js', 'Nuxt.js', 'MongoDB', 'GraphQL', 'Redis', 'Socket.IO', 'AWS']
    }
  ]

  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Experience</h2>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Company Tabs */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 text-left p-4 border-l-2 md:border-l-4 transition-all duration-300 ${
                    activeTab === index
                      ? 'border-black bg-gray-100 text-black'
                      : 'border-gray-200 text-gray-600 hover:border-black hover:text-black'
                  }`}
                >
                  <div className="whitespace-nowrap md:whitespace-normal">
                    <div className="font-semibold text-sm">{exp.company}</div>
                    <div className="text-xs mt-1 opacity-75">{exp.duration}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="md:w-2/3 md:pl-8">
            <div className="card p-8 animate-slide-up">
              <h3 className="text-xl font-bold text-black mb-2">
                {experiences[activeTab].position}
              </h3>
              <h4 className="text-lg font-semibold text-black mb-1">
                {experiences[activeTab].company}
              </h4>
              <p className="text-gray-500 mb-6">
                {experiences[activeTab].duration}
              </p>

              <ul className="space-y-3 mb-6">
                {experiences[activeTab].description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-black mr-3 mt-1.5">
                      ▸
                    </span>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div>
                <h5 className="font-semibold text-black mb-3">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience