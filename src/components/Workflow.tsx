import { useEffect, useRef } from 'react'
import { ArrowRight, Braces, CodeXml, Lightbulb, Rocket } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const stages = [
  {
    number: '01', label: 'DEFINE', title: 'Start with the real problem.',
    description: 'Understand the need before choosing the solution.',
    details: ['Identify the core problem', 'Define the requirements', 'Set a clear objective'], Icon: Lightbulb, visual: 'discovery',
    image: '/images/define.png',
  },
  {
    number: '02', label: 'DESIGN', title: 'Plan before you build.',
    description: 'Shape the idea into a clear system with the right tools and architecture.',
    details: ['Sketch the experience', 'Choose the tech stack', 'Map data and components'], Icon: Braces, visual: 'architecture',
    image: '/images/design.png',
  },
  {
    number: '03', label: 'BUILD', title: 'Turn the plan into working software.',
    description: 'Build in small iterations. Connect the pieces. Make each feature work.',
    details: ['Implement core features', 'Integrate the system', 'Track changes with Git'], Icon: CodeXml,
    visual: 'build', image: '/images/build.png',
  },
  {
    number: '04', label: 'VALIDATE', title: 'Test it. Refine it. Ship it.',
    description: 'Verify the important paths, fix edge cases, and prepare the project for real use.',
    details: ['Test key scenarios', 'Fix and refine', 'Deploy and document'], Icon: Rocket, visual: 'ship',
    image: '/images/validate.png',
  },
]

export function Workflow() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia(section)
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const openerTitle = section.querySelector<HTMLElement>('.workflow-opener h2')
      const openerNext = section.querySelector<HTMLElement>('.workflow-intro-next')
      const opening = gsap.timeline({
        scrollTrigger: {
          trigger: '.workflow-opener', start: 'top top', end: () => `+=${window.innerHeight * 2}`,
          pin: true, scrub: .55, invalidateOnRefresh: true,
        },
      })
      if (openerTitle) {
        opening.fromTo(openerTitle, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .2, ease: 'none' }, 1)
        opening.to(openerTitle, { autoAlpha: 0, y: -12, duration: .18, ease: 'none' }, 1.38)
      }
      if (openerNext) {
        opening.fromTo(openerNext, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .2, ease: 'none' }, 1.62)
      }
    })
    media.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)', () => {
      const panels = gsap.utils.toArray<HTMLElement>('.workflow-stage')
      const visuals = gsap.utils.toArray<HTMLElement>('.workflow-visual')
      const progress = section.querySelector<HTMLElement>('.workflow-progress-fill')
      gsap.set(panels.slice(1), { autoAlpha: 0, y: 24 })
      gsap.set(visuals.slice(1), { autoAlpha: 0, scale: .97 })
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.querySelector('.workflow-sequence'),
          start: 'top top', end: () => `+=${window.innerHeight * stages.length}`,
          pin: true, scrub: .6, invalidateOnRefresh: true,
        },
      })
      stages.forEach((_, index) => {
        const position = index
        timeline.to(progress, { scaleX: (index + 1) / stages.length, duration: .18, ease: 'none' }, position)
        if (index > 0) {
          timeline.to(panels[index - 1], { autoAlpha: 0, y: -18, duration: .18 }, position)
          timeline.to(visuals[index - 1], { autoAlpha: 0, scale: 1.02, duration: .18 }, position)
          timeline.fromTo(panels[index], { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: .22 }, position + .12)
          timeline.fromTo(visuals[index], { autoAlpha: 0, scale: .97 }, { autoAlpha: 1, scale: 1, duration: .22 }, position + .12)
        }
      })
      return () => timeline.scrollTrigger?.kill()
    })
    media.add('(max-width: 760px) and (prefers-reduced-motion: no-preference)', () => {
      const mobileStages = gsap.utils.toArray<HTMLElement>('.workflow-stage')
      mobileStages.forEach((stage) => {
        gsap.fromTo(stage, { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1, y: 0, duration: .55, ease: 'power2.out',
          scrollTrigger: { trigger: stage, start: 'top 82%', toggleActions: 'play none none reverse' },
        })
      })
    })
    return () => media.revert()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="workflow-section">
      <div className="workflow-opener technical-frame">
        <span className="frame-plus plus-top-left" aria-hidden="true">+</span><span className="frame-plus plus-top-right" aria-hidden="true">+</span>
        <div className="workflow-opener-copy">
          <h2>FROM PROBLEM TO PRODUCT<span>.</span></h2>
          <p className="workflow-intro-next">Every project starts with a question. I explore it, build a solution, and refine it through testing.</p>
        </div>
      </div>

      <div className="workflow-sequence technical-frame" id="workflow-sequence">
        <div className="workflow-progress" aria-hidden="true"><span className="workflow-progress-fill" /></div>
        <div className="workflow-visuals" aria-label="Project workflow diagrams">
          {stages.map((stage) => (
            <WorkflowVisual stage={stage} key={stage.number} />
          ))}
        </div>
        <div className="workflow-copy">
          <div className="workflow-copy-head"><span>HOW I BUILD</span><span>SCROLL / 0{stages.length}</span></div>
          {stages.map(({ number, label, title, description, details, Icon }) => (
            <article className="workflow-stage" key={number}>
              <div className="workflow-mobile-visual"><WorkflowVisual stage={stages[Number(number) - 1]} /></div>
              <div className="workflow-stage-label"><span>{number}</span><span>/</span><span>{label}</span></div>
              <h3>{title}</h3>
              <p className="workflow-description">{description}</p>
              <ul>{details.map((detail) => <li key={detail}><span>+</span>{detail}</li>)}</ul>
              <div className="workflow-stage-icon"><Icon size={23} strokeWidth={1.5} /><span>ENGINEERING NOTE {number}</span><ArrowRight size={16} /></div>
            </article>
          ))}
          <div className="workflow-copy-foot"><span>THINK → BUILD → LEARN</span><span>04 STEPS</span></div>
        </div>
      </div>
    </section>
  )
}

function WorkflowVisual({ stage }: { stage: typeof stages[number] }) {
  return (
    <div className={`workflow-visual workflow-visual--${stage.visual}`} aria-hidden="true">
      <span className="workflow-visual-tag">FIELD NOTES / {stage.number}</span>
      <img className="workflow-step-image" src={stage.image} alt="" loading="lazy" />
      <span className="workflow-coordinate">FIG. {stage.number} / PROCESS STUDY</span>
    </div>
  )
}
