'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 20 years in software engineering, I&apos;ve evolved from building foundational web applications 
              to architecting enterprise-scale cloud platforms. My career spans across shipping, entertainment, 
              and financial sectors, giving me a unique perspective on solving complex business challenges.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I specialize in technical leadership—guiding teams through digital transformation while maintaining 
              hands-on involvement in architecture and development. My approach combines strategic thinking with 
              practical execution to deliver measurable results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">20+ years software engineering experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Proven track record in technical leadership</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Expert in cloud-native architecture</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Achievements</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">Platform Modernization</h5>
                <p className="text-gray-600 text-sm">Led cloud-native platform serving 5,000+ users</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">Team Leadership</h5>
                <p className="text-gray-600 text-sm">Mentored teams of 6+ engineers across global companies</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">Performance Optimization</h5>
                <p className="text-gray-600 text-sm">Reduced deployment time by 85% through CI/CD automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}