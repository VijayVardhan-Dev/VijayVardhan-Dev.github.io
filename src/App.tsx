import { About } from './components/About'
import { ContactFooter } from './components/ContactFooter'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectGrid } from './components/ProjectGrid'
import { Workflow } from './components/Workflow'


function App() {
  return (
    <main className="folio-shell min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Workflow />
      <ProjectGrid />
      <ContactFooter />
    </main>
  )
}

export default App
