interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  /** Extra inner-wrapper classes (e.g. for max-width overrides) */
  innerClassName?: string
}

export default function Section({ id, className = '', innerClassName = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        'py-20 lg:py-32',
        // scroll-mt accounts for the fixed navbar height
        'scroll-mt-20',
        className,
      ].join(' ')}
    >
      <div className={['max-w-7xl mx-auto px-6 lg:px-8', innerClassName].join(' ')}>
        {children}
      </div>
    </section>
  )
}
