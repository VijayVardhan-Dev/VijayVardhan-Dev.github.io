import { useEffect, useRef } from 'react'
import { ArrowRight, ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const navigation = [
  { heading: 'EXPLORE', links: [['About me', '#about'], ['Selected work', '#work'], ['My process', '#process']] },
  { heading: 'FOCUS AREAS', links: [['Software engineering', '#work'], ['AI & machine learning', '#work'], ['Systems & robotics', '#about']] },
]

export function ContactFooter() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia(footer)
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const paths = footer.querySelectorAll<SVGPathElement>('.footer-schematic-path')
      const title = footer.querySelector<HTMLElement>('.footer-callout-title')
      gsap.set(paths, { strokeDashoffset: 1 })
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: footer.querySelector('.footer-callout'), start: 'top 78%', end: 'top 30%', scrub: .65 },
      })
      if (title) timeline.fromTo(title, { clipPath: 'inset(0 0 100% 0)', y: 16 }, { clipPath: 'inset(0 0 0% 0)', y: 0, ease: 'none', duration: .55 }, 0)
      timeline.to(paths, { strokeDashoffset: 0, stagger: .13, ease: 'none', duration: .65 }, .14)
      return () => timeline.scrollTrigger?.kill()
    })
    return () => media.revert()
  }, [])

  return (
    <footer id="contact" ref={footerRef} className="contact-footer">
      <section className="footer-callout technical-frame" aria-labelledby="footer-title">
        <span className="frame-plus plus-top-left" aria-hidden="true">+</span><span className="frame-plus plus-top-right" aria-hidden="true">+</span>
        <div className="footer-coordinate footer-coordinate--left" aria-hidden="true">[ 04 / CONTACT ]</div>
        <div className="footer-coordinate footer-coordinate--right" aria-hidden="true">[ STATUS: OPEN TO OPPORTUNITIES ]</div>
        <div className="footer-callout-grid" aria-hidden="true"><i /><i /><i /></div>
        <div className="footer-callout-copy">
          <p className="footer-kicker"><span /> NEXT ITERATION STARTS HERE</p>
          <h2 className="footer-callout-title" id="footer-title">HAVE A GOOD<br />PROBLEM TO SOLVE<span>.</span></h2>
          <p className="footer-callout-description">I turn curious questions into useful software. Have an idea, a challenge, or an opportunity? Let’s make something that works.</p>
          <a className="footer-contact-link" href="mailto:hello@vijayvardhan.dev">
            <span>START A CONVERSATION</span><i><ArrowRight size={18} /></i>
          </a>
        </div>
        <svg className="footer-schematic" viewBox="0 0 820 250" fill="none" aria-hidden="true">
          <path className="footer-schematic-path" pathLength="1" d="M46 205H185V150H300V96H420V150H535V205H774" />
          <path className="footer-schematic-path" pathLength="1" d="M185 205V224H535V205M300 150V224M420 150V224" />
          <path className="footer-schematic-path" pathLength="1" d="M300 96V52H420V96M340 52V26H380V52M535 205V112H650V205" />
          <path className="footer-schematic-path" pathLength="1" d="M46 184H76V166H96V184H126M650 112V75H704V112" />
          <circle className="footer-schematic-node" cx="300" cy="96" r="6" /><circle className="footer-schematic-node" cx="420" cy="96" r="6" />
          <circle className="footer-schematic-node" cx="535" cy="205" r="6" /><circle className="footer-schematic-node" cx="185" cy="205" r="6" />
          <path className="footer-schematic-path footer-schematic-path--accent" pathLength="1" d="M360 25V6H388" />
        </svg>
        <span className="footer-figure-label">FIG. 04 / CONNECTION SCHEMATIC</span>
      </section>

      <section className="footer-directory technical-frame" aria-label="Portfolio links">
        <div className="footer-signature">
          <span className="footer-kicker"><span /> VIJAY VARDHAN / CSE</span>
          <p>ENGINEER<br />BUILDER<br />ALWAYS LEARNING<span>.</span></p>
          <small>Turning ideas into systems that work in the real world.</small>
        </div>
        {navigation.map((column) => (
          <nav className="footer-link-column" aria-label={column.heading} key={column.heading}>
            <h3>{column.heading}</h3>
            {column.links.map(([label, href]) => <a href={href} key={label}>{label}<ArrowUpRight size={13} /></a>)}
          </nav>
        ))}
        <div className="footer-link-column footer-connect">
          <h3>CONNECT</h3>
          <a href="mailto:hello@vijayvardhan.dev"><Mail size={14} />Email me<ArrowUpRight size={13} /></a>
          <a href="https://github.com/VijayVardhan-Dev" target="_blank" rel="noreferrer"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.05 3.24 1.56.1-.72.4-1.2.72-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>GitHub<ArrowUpRight size={13} /></a>
          <span className="footer-availability"><i /> OPEN TO COLLABORATION</span>
        </div>
      </section>

      <div className="footer-wordmark technical-frame" aria-label="Think, build, learn">
        <span className="frame-plus plus-top-left" aria-hidden="true">+</span><span className="frame-plus plus-top-right" aria-hidden="true">+</span>
        <div className="footer-wordmark-track" aria-hidden="true">
          <span>THINK / BUILD / LEARN / </span><span>THINK / BUILD / LEARN / </span>
        </div>
      </div>

      <div className="footer-legal technical-frame">
        <span>© {new Date().getFullYear()} VIJAY VARDHAN</span>
        <span>DESIGNED &amp; BUILT WITH CURIOSITY</span>
        <a href="#home">BACK TO TOP <ArrowUp size={14} /></a>
      </div>
    </footer>
  )
}
