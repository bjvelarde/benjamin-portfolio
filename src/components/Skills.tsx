'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    category: "Backend & Cloud",
    technologies: ["Node.js", "Azure", "AWS", "Docker", "Microservices", "REST APIs"]
  },
  {
    category: "Leadership & Methods",
    technologies: ["Technical Leadership", "System Architecture", "Agile/Scrum", "CI/CD", "Mentoring", "Project Delivery"]
  }
]

const certifications = [
  {
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft Certified",
    color: "blue",
    badge: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg"
  },
  {
    title: "Azure DevOps Engineer Expert", 
    issuer: "Microsoft Certified",
    color: "green",
    badge: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg"
  },
  {
    title: "Azure Developer Associate",
    issuer: "Microsoft Certified", 
    color: "purple",
    badge: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
  },
  {
    title: "Azure Administrator Associate",
    issuer: "Microsoft Certified",
    color: "orange",
    badge: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
  }
]

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-50 text-blue-800 border-blue-200'
    case 'green':
      return 'bg-green-50 text-green-800 border-green-200'
    case 'purple':
      return 'bg-purple-50 text-purple-800 border-purple-200'
    case 'orange':
      return 'bg-orange-50 text-orange-800 border-orange-200'
    default:
      return 'bg-gray-50 text-gray-800 border-gray-200'
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.technologies.map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-sm"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Azure Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 rounded-lg border-2 ${getColorClasses(cert.color)} transition-transform hover:scale-105 flex items-center gap-4`}
              >
                <div className="flex-shrink-0">
                  <img 
                    src={cert.badge} 
                    alt={`${cert.title} badge`}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                  <p className="text-sm opacity-80">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}