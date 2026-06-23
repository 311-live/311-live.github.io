import { Github } from 'lucide-react'
import { SITE } from '../content/siteContent'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-light-border dark:border-brand-border bg-brand-light-bg dark:bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Brand + tagline */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1">
              <span className="font-bold text-base text-brand-yellow">311</span>
              <span className="font-light text-base text-brand-text dark:text-white">-live</span>
            </div>
            <p className="text-xs text-brand-text-muted dark:text-slate-500">{SITE.footer.tagline}</p>
          </div>

          {/* Footer links + GitHub */}
          <nav className="flex items-center gap-6 flex-wrap" aria-label="Footer navigation">
            {SITE.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-brand-text-muted dark:text-slate-500 hover:text-brand-text dark:hover:text-slate-300 transition-colors"
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault()
                    scrollToId(link.href.slice(1))
                  }
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-brand-text-muted dark:text-slate-500 hover:text-brand-text dark:hover:text-slate-300 transition-colors"
              aria-label="View source on GitHub"
            >
              <Github size={13} />
              GitHub
            </a>
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-brand-light-border dark:border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-brand-text-muted dark:text-slate-600">
          <span>© {year} 311-live</span>
          <span>{SITE.footer.note}</span>
        </div>
      </div>
    </footer>
  )
}
