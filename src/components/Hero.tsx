import { ArrowRight } from 'lucide-react'

const topics = [
  'Software development',
  'Artificial intelligence',
  'Robotics',
  'Embedded systems',,
  'DSA & problem solving',
  'Open source',
  'Experiments',
]

export function Hero() {
  return (
    <section id="home" className="hero-layout">
      <div className="hero-art-panel technical-frame">
        <span className="frame-plus plus-top-left">+</span><span className="frame-plus plus-top-right">+</span>
        <span className="frame-plus plus-bottom-left">+</span><span className="frame-plus plus-bottom-right">+</span>
        <div className="hero-guides" aria-hidden="true"><i /><i /><i /></div>
        <img className="hero-illustration" src="/images/hero-illustration.png" alt="Illustration of an engineering student working at a laptop, surrounded by books and robotics projects" />
      </div>

      <div className="hero-intro technical-frame">
        <div className="hero-headline">
          <h1>Engineering ideas<br />into real-world systems.</h1>
          <p>Building software, AI &amp; intelligent machines.</p>
        </div>
        <div className="hero-description">
          <p>I’m an engineering student exploring software development, artificial intelligence, robotics, and electronics. I turn ideas into practical projects through code, circuits, and experimentation.</p>
        </div>
        <a className="explore-link" href="#work"><span>Explore my work <ArrowRight size={16} /></span><small>Check out my projects,<br />experiments, and more.</small></a>
      </div>

      <div className="topic-strip technical-frame" aria-label="Areas of interest">
        <span className="frame-plus plus-top-left">+</span><span className="frame-plus plus-top-right">+</span>
        {topics.map((topic) => <span className="topic" key={topic}>{topic}</span>)}
      </div>
    </section>
  )
}
