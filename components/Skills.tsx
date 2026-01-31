'use client'

import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Backend')

  const skillCategories = {
    'Backend': [
      { name: 'Go', level: 95, icon: '🔵' },
      { name: 'Node.js', level: 92, icon: '🟢' },
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'NestJS', level: 88, icon: '🏰' },
      { name: 'Express.js', level: 90, icon: '🚀' },
      { name: 'GraphQL', level: 85, icon: '📊' }
    ],
    'AI/ML': [
      { name: 'LangGraph', level: 92, icon: '🕸️' },
      { name: 'PGVector', level: 90, icon: '🔍' },
      { name: 'OpenAI APIs', level: 88, icon: '🤖' },
      { name: 'RAG Systems', level: 90, icon: '📚' },
      { name: 'Vector Search', level: 88, icon: '🎯' },
      { name: 'LLM Orchestration', level: 85, icon: '🎼' }
    ],
    'Database': [
      { name: 'PostgreSQL', level: 95, icon: '🐘' },
      { name: 'MongoDB', level: 92, icon: '🍃' },
      { name: 'Redis', level: 90, icon: '💎' },
      { name: 'Typesense', level: 85, icon: '🔍' },
      { name: 'PGVector', level: 88, icon: '📊' },
      { name: 'Apache Airflow', level: 82, icon: '🌪️' }
    ],
    'Cloud/DevOps': [
      { name: 'AWS', level: 90, icon: '☁️' },
      { name: 'Docker', level: 95, icon: '🐳' },
      { name: 'Kubernetes', level: 88, icon: '⚓' },
      { name: 'RabbitMQ', level: 85, icon: '🐰' },
      { name: 'OpenTelemetry', level: 82, icon: '📡' },
      { name: 'Microservices', level: 92, icon: '🔧' }
    ],
    'Tools': [
      { name: 'Git', level: 95, icon: '📚' },
      { name: 'Firebase', level: 88, icon: '🔥' },
      { name: 'Kafka', level: 82, icon: '📡' },
      { name: 'Socket.IO', level: 85, icon: '🔌' },
      { name: 'Opik', level: 80, icon: '👁️' },
      { name: 'ETL Pipelines', level: 88, icon: '⚙️' }
    ]
  }

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="max-w-6xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div key={skill.name} className="card p-4 text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-3">
                <span className="text-3xl">{skill.icon}</span>
              </div>
              <h3 className="text-sm font-semibold text-black">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
      </div>
    </section>
  )
}

export default Skills