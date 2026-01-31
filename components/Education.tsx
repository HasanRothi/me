'use client'

const Education = () => {
  const education = [
    {
      degree: 'Master of Engineering - Computer Science (Major in Data Science)',
      school: 'United International University',
      year: 'Jan 2024 - Jul 2025',
      grade: 'CGPA: 3.14/4.0',
      description: 'Focused on GenAI & Deep Learning projects.',
      achievements: [
        'Specialized in Big Data and Machine Learning',
        'Deep Learning and AI research projects',
        'Focus on Generative AI applications',
        'Advanced coursework in Data Science methodologies'
      ]
    },
    {
      degree: 'BSC in Information Technology (IT)',
      school: 'University of Information Technology and Sciences',
      year: 'May 2016 - May 2020',
      grade: 'CGPA: 3.61/4.0',
      description: 'Focused on competitive programming and software development fundamentals.',
      achievements: [
        'Strong foundation in C++ and competitive programming',
        'Active member of UITS Computer Club',
        'Participated in programming contests and hackathons',
        'Solid understanding of algorithms and data structures'
      ]
    }
  ]

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2" />

          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 border-4 border-white" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="card p-6 animate-slide-up">
                  {/* Year Badge */}
                  <div className="inline-block px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-semibold mb-4">
                    {edu.year}
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2">
                    {edu.degree}
                  </h3>

                  <h4 className="text-lg font-semibold text-black mb-2">
                    {edu.school}
                  </h4>

                  <div className="text-black font-medium mb-4">
                    {edu.grade}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-black mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-black mr-2 mt-1 hidden md:inline">
                            •
                          </span>
                          <span className="text-gray-700 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education