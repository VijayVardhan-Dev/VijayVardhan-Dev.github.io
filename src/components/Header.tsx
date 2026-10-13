import { ArrowRight } from 'lucide-react'

const links = [
  ['Projects', '#work'],
  ['Expertise', '#about'],
  ['Lab notes', '#work'],
  ['About me', '#about'],
]

export function Header() {
  return (
    <header className="folio-header technical-frame">
      <a href="#home" className="brand" aria-label="Vijay Vardhan home">
        <span className="brand-mark">W</span>
        <span className="brand-copy"><strong>Vijay Vardhan</strong><small>Engineer · Builder · Learner</small></span>
      </a>
      <nav className="folio-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a className="talk-link" href="mailto:hello@vijayvardhan.dev">Let’s talk <ArrowRight size={16} /></a>
    </header>
  )
}
