export type Project = {
  title: string
  description: string
  type: string
  href: string
  artLabel: string
  theme: string
}

export const projects: Project[] = [
  { title: 'A space to think', description: 'A calmer way to capture and connect ideas.', type: 'Product · 2026', href: 'mailto:hello@vijayvardhan.dev?subject=A%20space%20to%20think', artLabel: 'FORM / FUNCTION', theme: 'project-sage' },
  { title: 'Good things grow', description: 'A digital home for a more considered future.', type: 'Web · 2025', href: 'mailto:hello@vijayvardhan.dev?subject=Good%20things%20grow', artLabel: 'GROW WITH CARE', theme: 'project-peach' },
  { title: 'Field notes', description: 'Bringing the outdoors a little closer.', type: 'Identity · 2025', href: 'mailto:hello@vijayvardhan.dev?subject=Field%20notes', artLabel: 'OUTSIDE / OFTEN', theme: 'project-blue' },
  { title: 'Moving pieces', description: 'Making complex work feel simple and clear.', type: 'Frontend · 2024', href: 'mailto:hello@vijayvardhan.dev?subject=Moving%20pieces', artLabel: 'LESS, BUT BETTER', theme: 'project-yellow' },
]
