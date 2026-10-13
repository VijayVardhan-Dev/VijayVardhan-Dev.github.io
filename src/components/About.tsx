import { useEffect, useRef } from 'react'
import { ArrowRight, BrainCircuit, CodeXml, Network } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const expertise = [
  { title: 'Web development', detail: 'React · Next.js · Tailwind · Node.js', Icon: CodeXml },
  { title: 'AI & machine learning', detail: 'Python · ML models · LLMs', Icon: BrainCircuit },
  { title: 'Data structures & algorithms', detail: 'Python · Problem solving · LeetCode', Icon: Network },
]

const themes = ['Ideas', 'Code', 'Models', 'Websites', 'Problem solving', 'Continuous learning']

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia(section)
    media.add(
      {
        reducedMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reducedMotion } = context.conditions as {
          reducedMotion: boolean
        }
        if (reducedMotion) {
          section.classList.add('about-section--static-color')
          return () => section.classList.remove('about-section--static-color')
        }

        const reveals = [
          { region: '.about-region-atmosphere', from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)', at: 0 },
          { region: '.about-region-architecture', from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)', at: 0.12 },
          { region: '.about-region-character', from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)', at: 0.24 },
          { region: '.about-region-laptop', from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)', at: 0.38 },
          { region: '.about-region-books', from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)', at: 0.47 },
          { region: '.about-region-desk', from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)', at: 0.58 },
        ]
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: imageRef.current ?? section,
            start: 'top 86%',
            end: () => `+=${Math.max((imageRef.current?.offsetHeight ?? section.offsetHeight) * 0.75, window.innerHeight * 0.65)}`,
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        })

        reveals.forEach(({ region, from, to, at }) => {
          const wipe = section.querySelector<HTMLElement>(`${region} .about-color-wipe`)
          if (!wipe) return
          timeline.fromTo(wipe, { clipPath: from }, { clipPath: to, duration: 0.42, ease: 'none' }, at)
        })

        return () => section.classList.remove('about-section--static-color')
      },
    )

    return () => media.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="about-section technical-frame">
      <div className="about-image-wrap" ref={imageRef}>
        <img
          className="about-image about-image-outline"
          src="/images/about-outline.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="about-image about-image-color-static"
          src="/images/about-image.png"
          alt="Engineering student studying at a laptop, surrounded by books, design sketches, and electronics"
          loading="lazy"
        />
        <div className="about-color-regions" aria-hidden="true">
          <div className="about-color-region about-region-atmosphere"><div className="about-color-wipe"><img src="/images/about-image.png" alt="" /></div></div>
          <div className="about-color-region about-region-architecture"><div className="about-color-wipe"><img src="/images/about-image.png" alt="" /></div></div>
          <div className="about-color-region about-region-character"><div className="about-color-wipe"><img src="/images/about-image.png" alt="" /></div></div>
          <div className="about-color-region about-region-laptop"><div className="about-color-wipe"><img src="/images/about-image.png" alt="" /></div></div>
          <div className="about-color-region about-region-books"><div className="about-color-wipe"><img src="/images/about-image.png" alt="" /></div></div>
          <div className="about-color-region about-region-desk"><div className="about-color-wipe"><img src="/images/about-image.png" alt="" /></div></div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-main">
          <div className="about-meta"><p className="about-kicker"><span /> About me</p><span className="about-count">01 / 06</span></div>
          <h2 className="about-title">A  CSE  student<br />who builds.</h2>
          <p className="about-lede">Exploring AI, web development and DSA<br className="desktop-break" /> through real projects.</p>

          <div className="about-stats" aria-label="At a glance">
            <div><strong>10+</strong><span>Projects</span></div>
            <div><strong>100+</strong><span>LeetCode problems</span></div>
            <div><strong>2</strong><span>Domains<small>AI &amp; ML, web development</small></span></div>
          </div>

          <a className="about-cta" href="#contact">More about me <ArrowRight size={17} /></a>
        </div>

        <div id="expertise" className="expertise-panel">
          <div className="expertise-heading"><h3><span /> What I work with</h3><span className="expertise-arrows" aria-hidden="true">←　→</span></div>
          <div className="expertise-grid">
            {expertise.map(({ title, detail, Icon }) => (
              <article className="expertise-item" key={title}>
                <Icon size={32} strokeWidth={1.8} aria-hidden="true" />
                <h4>{title}</h4>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="about-topics" aria-label="Interests">
            {themes.map((theme) => <span key={theme}>{theme}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
