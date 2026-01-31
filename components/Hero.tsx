'use client'

import { useEffect, useState, useMemo } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const titles = useMemo(() => [
    'Backend Engineer',
    'GenAI Expert',
    'Software Engineer @ 10MS',
    'Go | Node | Python Developer'
  ], [])

  useEffect(() => {
    const currentTitle = titles[currentIndex]

    if (isTyping) {
      if (text.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText(currentTitle.slice(0, text.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }
  }, [text, isTyping, currentIndex, titles])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />


      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Md Riad Hasan Sarker
          </h1>

          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="text-black">
              {text}
              <span className="animate-pulse text-black">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
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

export default Hero