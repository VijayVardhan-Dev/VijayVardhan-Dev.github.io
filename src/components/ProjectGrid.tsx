import { ArrowRight } from 'lucide-react'

const projects = [
  {
    name: 'Legal Metrology Scopilot',
    shortName: 'Legal Metrology Scopilot',
    image: '/images/legal.jpg',
    description: 'AI-powered compliance checker for packaged commodities using OCR and computer vision.',
    tags: ['Python', 'FastAPI', 'React', 'PaddleOCR', 'PostgreSQL'],
  },
  {
    name: 'AgroNet',
    shortName: 'AgroNet',
    image: '/images/agronet.jpg',
    description: 'Smart agriculture platform for crop monitoring and environmental insights using IoT and AI.',
    tags: ['React', 'Node.js', 'Python', 'IoT', 'Machine Learning'],
  },
  {
    name: 'AptConnect',
    shortName: 'AptConnect',
    image: '/images/aptconnect.jpg',
    description: 'Campus placement and networking platform to connect students, companies, and opportunities.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
  },
]

const themes = ['Projects', 'AI / ML', 'Web development', 'Real world problems', 'Open source', 'Continuous learning']

export function ProjectGrid() {
  return (
    <section id="work" className="projects-section technical-frame">
      <div className="projects-overview">
        <div className="projects-heading">
          <p className="projects-kicker"><span /> Projects</p>
          <h2>Ideas turned into<br />real-world projects.</h2>
        </div>
        <div className="projects-summary">
          <span className="projects-count">02 / 06</span>
          <p>A collection of projects where I apply software, AI, and technology to solve real-world problems.</p>
          <a href="#project-list">View all projects <ArrowRight size={17} /></a>
        </div>
      </div>

      <div className="project-list" id="project-list">
        {projects.map((project, index) => (
          <article className="portfolio-project" key={project.name}>
            <div className="portfolio-project-label"><span>{project.shortName}</span><span>[0{index + 1}]</span></div>
            <img className="portfolio-project-image" src={project.image} alt={`${project.name} project illustration`} loading="lazy" />
            <div className="portfolio-project-copy">
              <div className="portfolio-project-title"><h3>{project.name}</h3><ArrowRight size={21} aria-hidden="true" /></div>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label={`${project.name} technologies`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-topics" aria-label="Project themes">
        {themes.map((theme) => <span key={theme}>{theme}</span>)}
      </div>
    </section>
  )
}
