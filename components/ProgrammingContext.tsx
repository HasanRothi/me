'use client'

const ProgrammingContext = () => {
  const contests = [
    {
      year: '2019',
      university: 'UITS',
      rank: 'Runner Up',
      contestName: 'UITS Zero one fest4',
      description: 'Inter university programming contest'
    },
    {
      year: '2019',
      university: 'UITS',
      rank: 'Runner Up',
      contestName: 'Inter university programming contest',
      description: 'Inter university programming contest'
    },
    {
      year: '2018',
      university: 'UITS',
      rank: '37th',
      contestName: 'Ahmed Zobayer Inter university programming contest',
      description: 'Inter university programming contest'
    },
    {
      year: '2018',
      university: 'NSU',
      rank: '87th',
      contestName: 'BSCCL inter university programming contest',
      description: 'Inter university programming contest'
    }
  ]

  const platforms = [
    { name: 'Leetcode', count: '57', label: 'Solved', url: 'https://leetcode.com/u/Rothi/' },
    { name: 'BeeCrowd', count: '216', label: 'Solved', url: 'https://judge.beecrowd.com/en/profile/142673' },
    { name: 'Codeforces', count: '85', label: 'Solved', url: 'http://codeforces.com/profile/Rothi' },
    { name: 'Vjudge', count: '95', label: 'Solved', url: 'https://vjudge.net/user/Rothi' },
    { name: 'HackerRank', count: '1361', label: 'Hackos', url: 'https://www.hackerrank.com/profile/RotHi' },
    { name: 'LightOJ', count: '17', label: 'Solved', url: 'https://lightoj.com/user/hasanrothi99' },
    { name: 'UVA', count: '5', label: 'Solved', url: '#' }
  ]

  return (
    <section id="programming-context" className="section-container">
      <h2 className="section-title">Competitive Programming</h2>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            My competitive programming experience during university helped build strong algorithmic thinking
            and problem-solving skills that form the foundation of my software development approach.
          </p>
        </div>

        {/* Contest Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contests.map((contest, index) => (
            <div key={index} className="card p-6 text-center transform transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h4 className="text-sm font-bold text-black mb-2 min-h-[2.5rem] flex items-center justify-center">{contest.contestName}</h4>
              <p className="text-black font-semibold mb-1 text-sm">{contest.university} • {contest.year}</p>
              <p className="text-gray-600 text-sm mb-3 font-semibold">{contest.rank}</p>
              <p className="text-gray-700 text-xs leading-relaxed">{contest.description}</p>
            </div>
          ))}
        </div>

        {/* Problem Solving Platforms */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Problem Solving</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target={platform.url !== '#' ? '_blank' : undefined}
                rel={platform.url !== '#' ? 'noopener noreferrer' : undefined}
                className="card p-4 text-center transform transition-all duration-300 hover:scale-105 cursor-pointer block"
              >
                <h4 className="text-sm font-bold text-black mb-1 hover:text-gray-700">{platform.name}</h4>
                <div className="text-lg font-bold text-black mb-1">{platform.count}</div>
                <p className="text-gray-600 text-xs">{platform.label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgrammingContext