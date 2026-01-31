'use client'

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="max-w-4xl mx-auto">
        <div className="card p-8 animate-slide-up">
          <h3 className="text-2xl font-bold mb-4 text-black text-center">
            Backend Engineer & GenAI Expert
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            Backend Engineer with 5+ years building scalable systems across EdTech, E-commerce, and News Portal.
            Currently at 10 Minute School. Working in backend and GenAI systems.
          </p>

          <div className="flex justify-center">
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-black mb-2">5+</div>
              <div className="text-sm text-gray-700">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About