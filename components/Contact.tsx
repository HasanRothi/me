'use client'

import { useState } from 'react'
import Link from 'next/link'

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

  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Get In Touch</h2>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            I&apos;m always interested in discussing new opportunities, exciting projects,
            or just having a conversation about technology. Feel free to reach out!
          </p>

          <div className="flex justify-center">
            <Link
              href="/cv"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View CV
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact