'use client'

import { useState } from 'react'

const Volunteering = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const volunteeringExperience = [
    {
      id: 1,
      title: 'Joint Secretary',
      organization: 'UITS Computer Club',
      period: 'Apr 2019 - Nov 2020',
      duration: '1 yr 8 mos',
      category: 'Science and Technology',
      description: 'Led and organized technology-focused events, workshops, and programming competitions at the university level. Helped bridge the gap between academic learning and practical technology skills.',
      responsibilities: [
        'Organized programming contests and hackathons',
        'Conducted workshops on competitive programming',
        'Mentored junior students in C++ and algorithms',
        'Coordinated technology events and seminars',
        'Built partnerships with tech companies for events',
        'Managed club activities and member engagement'
      ],
      impact: [
        'Increased club membership by 40% during tenure',
        'Organized 5+ major programming competitions',
        'Mentored 50+ students in competitive programming',
        'Established annual hackathon tradition'
      ],
      skills: ['Leadership', 'Event Management', 'Mentoring', 'Competitive Programming', 'C++', 'Team Coordination'],
      icon: '🏆',
      achievements: [
        'Successfully organized inter-university programming contest',
        'Introduced algorithmic problem-solving workshops',
        'Created study groups for competitive programming',
        'Established connections with industry professionals'
      ]
    },
    {
      id: 2,
      title: 'Trainer',
      organization: 'UITS IT Programmers Community',
      period: 'Jan 2020 - Mar 2020',
      duration: '3 mos',
      category: 'Education & Training',
      description: 'Provided specialized training in competitive programming, focusing on data structures and algorithms using C and C++.',
      responsibilities: [
        'Delivered lectures on data structures and algorithms',
        'Created practice problems and solutions',
        'Conducted hands-on coding sessions',
        'Evaluated student progress and provided feedback',
        'Organized mock programming contests'
      ],
      impact: [
        'Trained 30+ students in competitive programming',
        'Improved students\' problem-solving skills',
        'Prepared students for national programming contests',
        'Built foundation for algorithmic thinking'
      ],
      skills: ['Teaching', 'C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'Curriculum Development'],
      icon: '👨‍🏫',
      achievements: [
        'Developed comprehensive training curriculum',
        'Achieved 85% student satisfaction rate',
        'Students won positions in university contests',
        'Created reusable learning materials'
      ]
    }
  ]

  return (
    <section id="volunteering" className="section-container">
      <h2 className="section-title">Volunteering & Community Service</h2>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Passionate about giving back to the tech community through mentoring, organizing events,
            and sharing knowledge with aspiring developers.
          </p>
        </div>

        {/* Volunteering Experiences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {volunteeringExperience.map((experience, index) => (
            <div
              key={experience.id}
              className="card p-8 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{experience.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      {experience.title}
                    </h3>
                    <p className="text-black font-semibold">
                      {experience.organization}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {experience.category}
                </span>
              </div>

              {/* Period & Duration */}
              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <span>{experience.period}</span>
                <span>{experience.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {experience.description}
              </p>

              {/* Key Responsibilities */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.slice(0, isExpanded ? undefined : 3).map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{responsibility}</span>
                    </li>
                  ))}
                </ul>
                {experience.responsibilities.length > 3 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-black text-sm mt-2 hover:underline"
                  >
                    {isExpanded ? 'Show Less' : `Show ${experience.responsibilities.length - 3} More`}
                  </button>
                )}
              </div>

              {/* Impact & Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">
                  Impact & Achievements:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experience.impact.map((impact, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-gray-100 rounded-lg">
                      <span className="text-black mr-2">✓</span>
                      <span className="text-gray-700 text-sm font-medium">{impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div>
                <h4 className="font-semibold text-black mb-3">
                  Skills Gained:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-black mb-2">80+</div>
            <div className="text-gray-700 text-sm">Students Mentored</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-black mb-2">5+</div>
            <div className="text-gray-700 text-sm">Events Organized</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-black mb-2">2+</div>
            <div className="text-gray-700 text-sm">Years of Service</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-black mb-2">40%</div>
            <div className="text-gray-700 text-sm">Club Growth</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Volunteering