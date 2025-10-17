import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}