'use client'

import Link from 'next/link'

export default function CVPage() {
  const printCV = () => {
    window.print()
  }

  const downloadPDF = () => {
    // Set document title for PDF filename
    const originalTitle = document.title
    document.title = 'md_riad_hasan_sarker_cv'

    // Trigger print dialog
    window.print()

    // Restore original title after a delay
    setTimeout(() => {
      document.title = originalTitle
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with navigation and buttons */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10 print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center text-black hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>

          <button
            onClick={downloadPDF}
            className="p-2 text-black hover:text-gray-600 transition-colors"
            title="Download CV as PDF"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>
      </header>

      {/* CV Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 print:px-4 print:py-2">
        <div className="bg-white rounded-lg shadow-sm p-8 print:shadow-none print:p-4">

          {/* Header */}
          <div className="text-center mb-6 print:mb-4">
            <h1 className="text-4xl font-bold text-black mb-3 print:text-3xl print:mb-2">Md Riad Hasan Sarker</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 print:text-xs print:gap-3">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hasantechnologist@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm2 10a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                </svg>
                +8801626919489
              </span>
              <a href="https://github.com/HasanRothi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                github.com/HasanRothi
              </a>
              <a href="https://linkedin.com/in/md-riad-hasan-sarker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                linkedin.com/in/md-riad-hasan-sarker
              </a>
              <a href="https://hasanrothi.github.io/me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                hasanrothi.github.io/me
              </a>
            </div>
          </div>

          {/* Skills */}
          <section className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1 print:text-base print:mb-2">Skills</h2>
            <div className="space-y-1 text-sm print:text-xs print:space-y-0.5">
              <div>
                <span className="font-bold text-black">Languages:</span> Go, Node.js, Python
              </div>
              <div>
                <span className="font-bold text-black">Technologies & Tools:</span> AWS, Docker, Kubernetes, PostgreSQL, MongoDB, Redis, GraphQL, RabbitMQ, Firebase, LangGraph, OpenAI APIs, PGVector, OpenTelemetry, Kafka, Socket.IO, Apache Airflow, FastAPI, NestJS, Express.js
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1 print:text-base print:mb-2">Work Experience</h2>

            {/* 10 Minute School - Combined */}
            <div className="mb-4 print:mb-3">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-black text-base print:text-sm">10 Minute School, Dhaka</h3>
                </div>
                <span className="text-gray-600 text-sm print:text-xs">Jan 2023 - Present</span>
              </div>
              <p className="text-gray-600 italic text-sm print:text-xs mb-2 print:mb-1">Software Engineer - Specialist (L3)</p>
              <ul className="list-disc list-inside text-sm print:text-xs space-y-0.5 print:space-y-0 mb-1">
                <li>Owned end-to-end architecture of TenTen AI, an LLM-powered GenAI product serving 5K+ active learners</li>
                <li>Architected and led development of ClassRoomOS from scratch, powering offline education centers</li>
                <li>Built scalable ETL pipelines for large-scale user and learning data analytics</li>
                <li>Implemented distributed observability across microservices using OpenTelemetry</li>
                <li>Designed and implemented comprehensive Course ERP system for streamlined operations</li>
                <li>Introduced efficient course search using Typesense as ElasticSearch alternative</li>
                <li>Integrated Firebase Cloud Messaging for real-time in-app notifications</li>
                <li>Go, Python, Node.js, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, RabbitMQ, AWS, PGVector, LangGraph, OpenTelemetry, Opik, Typesense, Firebase</li>
              </ul>
            </div>

            {/* Walton Group */}
            <div className="mb-4 print:mb-3">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-black text-base print:text-sm">Walton Group, Dhaka</h3>
                </div>
                <span className="text-gray-600 text-sm print:text-xs">Oct 2022 - Jan 2023</span>
              </div>
              <p className="text-gray-600 italic text-sm print:text-xs mb-2 print:mb-1">Senior Software Engineer</p>
              <ul className="list-disc list-inside text-sm print:text-xs space-y-0.5 print:space-y-0 mb-1">
                <li>Contributed to microservice within Walton Plaza ecosystem focusing on Inventory Management</li>
                <li>Developed real-time order update functionalities using GraphQL and Kafka</li>
                <li>Built scalable backend services with Node.js, MongoDB, and GraphQL</li>
                <li>Node.js, MongoDB, GraphQL, Kafka</li>
              </ul>
            </div>

            {/* Sayburgh Solutions - Combined */}
            <div className="mb-4 print:mb-3">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-black text-base print:text-sm">Sayburgh Solutions, Dhaka</h3>
                </div>
                <span className="text-gray-600 text-sm print:text-xs">Nov 2020 - Sep 2022</span>
              </div>
              <p className="text-gray-600 italic text-sm print:text-xs mb-2 print:mb-1">Senior Software Engineer - Full Stack</p>
              <ul className="list-disc list-inside text-sm print:text-xs space-y-0.5 print:space-y-0 mb-1">
                <li>Developed SomoyNews.TV platform with optimized database performance</li>
                <li>Enhanced search functionality for better user discovery</li>
                <li>Built real-time breaking news system using GraphQL Subscriptions over Redis</li>
                <li>Developed SomoyTV, Somoy School (EdTech) & Somoy VOD Platform</li>
                <li>Implemented resumable video uploads and AWS S3 image uploads</li>
                <li>Node.js, Express.js, NestJS, Vue.js, Nuxt.js, MongoDB, GraphQL, REST API, AWS, Redis, Socket.IO</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-5 print:mb-3">
            <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1 print:text-base print:mb-2">Education</h2>

            {/* Master's Degree */}
            <div className="flex justify-between items-start mb-3 print:mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-black text-base print:text-sm">United International University</h3>
                <p className="text-gray-600 text-sm print:text-xs">Master of Engineering - Computer Science (Major in Data Science)</p>
                <p className="text-xs print:text-2xs mt-1 leading-tight print:leading-tight">
                  Focused on GenAI & Deep Learning projects. Specialized in Big Data and Machine Learning
                </p>
              </div>
              <div className="text-right ml-4">
                <span className="text-gray-600 text-sm print:text-xs">Jan 2024 - Jul 2025</span>
                <p className="font-bold text-black text-sm print:text-xs italic">CGPA: 3.14/4.0</p>
              </div>
            </div>

            {/* Bachelor's Degree */}
            <div className="flex justify-between items-start mb-2 print:mb-1">
              <div className="flex-1">
                <h3 className="font-bold text-black text-base print:text-sm">University of Information Technology and Sciences</h3>
                <p className="text-gray-600 text-sm print:text-xs">BSC in Information Technology (IT)</p>
                <p className="text-xs print:text-2xs mt-1 leading-tight print:leading-tight">
                  Focused on competitive programming and software development fundamentals
                </p>
              </div>
              <div className="text-right ml-4">
                <span className="text-gray-600 text-sm print:text-xs">May 2016 - May 2020</span>
                <p className="font-bold text-black text-sm print:text-xs italic">CGPA: 3.61/4.0</p>
              </div>
            </div>
          </section>

          {/* Project Work */}
          <section className="mb-5 print:mb-3">
            <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1 print:text-base print:mb-2">Project Work</h2>
            <ul className="list-disc list-inside text-sm print:text-xs space-y-1 print:space-y-0">
              <li>
                <strong>TenTen AI (2025):</strong> End-to-end LLM-powered GenAI product serving 5K+ active learners. Go, Python, LangGraph, PGVector, PostgreSQL.
              </li>
              <li>
                <strong>ClassRoomOS (2025):</strong> Backend platform for large-scale offline education centers. Go, PostgreSQL, Redis, Docker, Kubernetes.
              </li>
              <li>
                <strong>Click Tube Native App (2021):</strong> Native mobile application with React Native. React Native, JavaScript.
              </li>
              <li>
                <strong>E-Shop Backend (2021):</strong> Complete e-commerce backend API. NestJS, MongoDB, TypeScript, REST API.
              </li>
              <li>
                <strong>SomoyNews.TV Platform (2020-2021):</strong> News platform with real-time breaking news. Node.js, Vue.js, MongoDB, GraphQL.
              </li>
            </ul>
          </section>

          {/* Competitive Programming */}
          <section className="mb-5 print:mb-3">
            <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1 print:text-base print:mb-2">Competitive Programming</h2>
            <ul className="list-disc list-inside text-sm print:text-xs space-y-0.5 print:space-y-0">
              <li><strong>Problem Solving:</strong> BeeCrowd (216), Vjudge (95), Codeforces (85), LeetCode (57), HackerRank (1361 Hackos), LightOJ (17), UVA (5)</li>
              <li><strong>Contest Achievements:</strong> Runner Up in UITS Zero one fest4 (2019), Runner Up in Inter university programming contest (2019)</li>
              <li><strong>Regional Participation:</strong> 37th place in Ahmed Zobayer Inter university contest (2018), 87th place in BSCCL inter university contest (2018)</li>
            </ul>
          </section>

        </div>
      </main>

      {/* Print styles */}
      <style jsx>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }

          @page :first {
            @top-left { content: ""; }
            @top-right { content: ""; }
            @top-center { content: ""; }
            @bottom-left { content: ""; }
            @bottom-right { content: ""; }
            @bottom-center { content: ""; }
          }

          @page :left {
            @top-left { content: ""; }
            @top-right { content: ""; }
            @top-center { content: ""; }
            @bottom-left { content: ""; }
            @bottom-right { content: ""; }
            @bottom-center { content: ""; }
          }

          @page :right {
            @top-left { content: ""; }
            @top-right { content: ""; }
            @top-center { content: ""; }
            @bottom-left { content: ""; }
            @bottom-right { content: ""; }
            @bottom-center { content: ""; }
          }

          body {
            background: white !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:shadow-none {
            box-shadow: none !important;
          }

          .print\\:p-6 {
            padding: 1.5rem !important;
          }

          .print\\:px-0 {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          main {
            max-width: none !important;
          }

          /* Override colors for print */
          h1, h2, h3, .font-bold {
            color: #1C033C !important;
          }

          /* Ensure proper spacing */
          section {
            page-break-inside: avoid;
          }

          ul {
            page-break-inside: auto;
          }

          li {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  )
}