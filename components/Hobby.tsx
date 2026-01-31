'use client'

const Hobby = () => {
  const hobbies = [
    {
      title: 'Photography',
      icon: '📸',
      description: 'Capturing moments and exploring the world through the lens. I especially enjoy landscape and street photography.',
      gallery: ['🌄', '🏙️', '🌅', '🌙'],
      skills: ['Composition', 'Lighting', 'Post-processing', 'Storytelling']
    },
    {
      title: 'Open Source',
      icon: '🔮',
      description: 'Contributing to open-source projects and building tools that help the developer community.',
      gallery: ['⚡', '🛠️', '🔧', '💡'],
      skills: ['GitHub', 'Collaboration', 'Documentation', 'Community Building']
    },
    {
      title: 'Watching Movies',
      icon: '🎞️',
      description: 'Exploring different genres and storytelling techniques. Enjoy both classic films and modern cinema.',
      gallery: ['🎬', '🍿', '🎥', '🏠'],
      skills: ['Cultural Awareness', 'Storytelling Appreciation', 'Critical Analysis', 'Relaxation']
    },
    {
      title: 'Reading',
      icon: '📚',
      description: 'Passionate about technology books, sci-fi novels, and industry publications to stay current with trends.',
      gallery: ['🔬', '🚀', '💻', '🧠'],
      skills: ['Research', 'Critical Thinking', 'Knowledge Synthesis', 'Continuous Learning']
    },
    {
      title: 'Traveling',
      icon: '✈️',
      description: 'Exploring new cultures, meeting people, and gaining different perspectives from around the world.',
      gallery: ['🗺️', '🏔️', '🏖️', '🏛️'],
      skills: ['Adaptability', 'Cultural Awareness', 'Planning', 'Independence']
    }
  ]

  return (
    <section id="hobby" className="section-container">
      <h2 className="section-title">Hobbies & Interests</h2>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Beyond coding, I&apos;m passionate about various activities that keep me creative,
            inspired, and constantly learning. These hobbies often influence my approach to problem-solving.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="card p-6 text-center transition-all duration-300"
            >
              <div className="text-4xl mb-3">{hobby.icon}</div>
              <h3 className="font-semibold text-black text-sm mb-2">{hobby.title}</h3>
              <p className="text-gray-700 text-xs">{hobby.description.slice(0, 50)}...</p>
            </div>
          ))}
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 card p-8">
          <h3 className="text-2xl font-bold text-center text-black mb-8">
            My Philosophy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-semibold text-black mb-2">Balance</h4>
              <p className="text-gray-700 text-sm">
                Maintaining a healthy work-life balance through diverse interests and activities
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="font-semibold text-black mb-2">Growth</h4>
              <p className="text-gray-700 text-sm">
                Every hobby teaches something new that can be applied to professional challenges
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-semibold text-black mb-2">Connection</h4>
              <p className="text-gray-700 text-sm">
                Building relationships and learning from people with different perspectives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobby