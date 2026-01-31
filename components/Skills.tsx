'use client'

import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Backend')

  const skillCategories = {
    'Backend': [
      { name: 'Go', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Node.js', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'FastAPI', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'NestJS', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
      { name: 'Express.js', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'GraphQL', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'RabbitMQ', level: 85, icon: 'https://img.icons8.com/color/48/rabbitmq.png' },
      { name: 'Microservices', level: 92, icon: 'https://img.icons8.com/fluency/48/web-services.png' }
    ],
    'Database': [
      { name: 'PostgreSQL', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Typesense', level: 85, icon: 'https://img.icons8.com/fluency/48/search.png' }
    ],
    'Cloud/DevOps': [
      { name: 'AWS', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Docker', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'OpenTelemetry', level: 82, icon: 'https://img.icons8.com/fluency/48/api.png' }
    ],
    'AI/ML': [
      { name: 'LangGraph', level: 92, icon: 'https://img.icons8.com/fluency/48/artificial-intelligence.png' },
      { name: 'OpenAI APIs', level: 88, icon: 'https://img.icons8.com/fluency/48/chatgpt.png' },
      { name: 'RAG Systems', level: 90, icon: 'https://img.icons8.com/fluency/48/artificial-intelligence.png' },
      { name: 'Vector Search', level: 88, icon: 'https://img.icons8.com/fluency/48/search.png' },
      { name: 'LLM Orchestration', level: 85, icon: 'https://img.icons8.com/fluency/48/workflow.png' },
      { name: 'Opik', level: 80, icon: 'https://img.icons8.com/fluency/48/monitoring.png' }
    ],
    'Tools': [
      { name: 'Git', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Firebase', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Kafka', level: 82, icon: 'https://img.icons8.com/color/48/apache-kafka.png' },
      { name: 'Socket.IO', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
      { name: 'Apache Airflow', level: 82, icon: 'https://img.icons8.com/fluency/48/workflow.png' },
      { name: 'ETL Pipelines', level: 88, icon: 'https://img.icons8.com/fluency/48/workflow.png' }
    ]
  }

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="max-w-6xl mx-auto overflow-x-hidden">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm flex-shrink-0 ${
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div key={skill.name} className="card p-3 sm:p-4 text-center animate-slide-up w-full overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-3 flex justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
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