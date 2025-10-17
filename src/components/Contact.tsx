'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "bvelarde@gmail.com",
      href: "mailto:bvelarde@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+852 53273869",
      href: "tel:+85253273869"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hong Kong S.A.R",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/benjievelarde",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub", 
      href: "https://github.com/bjvelarde",
      color: "hover:text-gray-800"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          I'm currently available for new opportunities and would love to discuss how I can contribute to your team.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With over 20 years of experience in software engineering and technical leadership, 
              I'm ready to bring my expertise in modern web technologies, cloud architecture, 
              and team leadership to your organization.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-3 bg-gray-800 rounded-lg text-gray-300 ${social.color} transition-all hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Availability</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Immediately Available</span>
                </div>
                <p className="text-blue-100">
                  Ready to start new projects and take on technical leadership roles.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Open To:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Technical Lead / Engineering Manager roles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Senior Full-Stack Developer positions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Cloud Architecture & DevOps roles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    On-site in Hong Kong or remote opportunities
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-blue-500">
                <p className="text-blue-100 text-sm">
                  Feel free to reach out for consulting, full-time positions, or to discuss 
                  how we can work together to build amazing software solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}