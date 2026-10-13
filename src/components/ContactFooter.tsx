import { ArrowUpRight } from 'lucide-react'

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <p className="eyebrow text-paper/45">04 / What’s next?</p>
        <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end"><h2 className="max-w-3xl text-5xl font-semibold leading-[.95] tracking-[-.07em] md:text-8xl">Have a good one<br />in mind<span className="text-lime">?</span></h2><a className="group inline-flex items-center gap-3 border-b border-paper/30 pb-3 font-mono text-sm transition hover:border-lime" href="mailto:hello@vijayvardhan.dev">hello@vijayvardhan.dev <ArrowUpRight className="text-lime transition group-hover:translate-x-1 group-hover:-translate-y-1" size={17} /></a></div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-paper/15 pt-6 font-mono text-[10px] uppercase tracking-wide text-paper/40 md:flex-row"><span>© 2026 Vijay Vardhan</span><span>Designed & built with care</span><a href="#home" className="hover:text-paper">Back to top ↑</a></div>
      </div>
    </footer>
  )
}
