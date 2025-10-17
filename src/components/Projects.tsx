'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Ship, Castle, TrendingUp } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: "Cloud-Native Platform Modernization",
    company: "Anglo-Eastern Ship Management",
    description: "Led the architecture and implementation of a cloud-native microservices platform serving 5,000+ users, consolidating 12 legacy applications. Improved developer productivity by 25% and reduced state-related bugs by 40%.",
    detailedDescription: "Transformed legacy monolithic architecture into a modern microservices platform using React, TypeScript, and Node.js. Implemented comprehensive CI/CD pipelines reducing deployment time from 2 hours to 15 minutes.",
    tools: ["React.js", "TypeScript", "Node.js", "Azure", "Microservices", "GitHub Actions"],
    role: "Technical Lead",
    achievements: [
      "Consolidated 12 legacy applications into unified platform",
      "Reduced deployment time by 85%",
      "Improved team productivity by 25%",
      "40% reduction in state-related bugs"
    ],
    icon: <Ship className="w-16 h-16 text-blue-600" />,
    demo: "",
    code: ""
  },
  {
    id: 2,
    name: "Disney Profile & Membership System",
    company: "Hong Kong Disneyland",
    description: "Built high-availability Profile System supporting 2 million+ Magic Access members with 99.9% uptime. Pioneered first React.js application in Disney APAC.",
    detailedDescription: "Developed and maintained the core membership platform for Hong Kong Disneyland, integrating with enterprise systems and ensuring high availability for park operations.",
    tools: ["React.js", "Next.js", "TypeScript", "Node.js", "AWS", "REST APIs"],
    role: "Senior Web Developer",
    achievements: [
      "Supported 2M+ Magic Access members",
      "99.9% system uptime",
      "First React.js app in Disney APAC",
      "65% faster guest check-in"
    ],
    icon: <Castle className="w-16 h-16 text-purple-600" />,
    demo: "",
    code: ""
  },
  {
    id: 3,
    name: "Financial Comparison Platform",
    company: "MoneyHero (Compare Asia Group)",
    description: "Contributed to large-scale financial comparison platforms serving 1M+ monthly users. Built AWS serverless data capture system processing 50,000+ daily transactions.",
    detailedDescription: "Worked on MoneyHero financial comparison platform, implementing serverless architecture and high-reliability data processing systems for financial services.",
    tools: ["Laravel", "CodeIgniter", "AWS Lambda", "API Gateway", "DynamoDB"],
    role: "Senior Developer",
    achievements: [
      "Served 1M+ monthly users",
      "99.99% system reliability",
      "50,000+ daily transactions",
      "30% increase in lead conversion"
    ],
    icon: <TrendingUp className="w-16 h-16 text-green-600" />,
    demo: "",
    code: ""
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          A selection of projects showcasing my technical leadership and full-stack expertise
        </motion.p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              {/* Project Image with Icon */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl h-80 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mb-6 flex justify-center">
                      {project.icon}
                    </div>
                    <p className="text-gray-600 font-semibold text-lg">{project.company}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.detailedDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{project.role}</span>
                    <div className="flex gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.code && (
                        <a
                          href={project.code}
                          className="flex items-center gap-1 text-gray-600 hover:text-gray-700 font-medium"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}