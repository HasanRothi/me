'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hasantechnologist@gmail.com',
      link: 'mailto:hasantechnologist@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'md-riad-hasan-sarker',
      link: 'https://linkedin.com/in/md-riad-hasan-sarker'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/HasanRothi',
      link: 'https://github.com/HasanRothi'
    },
    {
      icon: '🌍',
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Get In Touch</h2>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always interested in discussing new opportunities, exciting projects,
            or just having a conversation about technology. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-black mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                >
                  <span className="text-3xl mr-4">{info.icon}</span>
                  <div>
                    <h4 className="font-semibold text-black group-hover:text-black">
                      {info.title}
                    </h4>
                    <p className="text-gray-700">
                      {info.value}
                    </p>
                  </div>
                  {info.link.startsWith('http') && (
                    <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact