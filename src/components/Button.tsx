import { motion } from 'framer-motion'

interface ButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'secondary-light' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  icon?: React.ReactNode
}

const variantClasses: Record<string, string> = {
  primary:         'bg-brand-yellow text-brand-bg font-semibold hover:brightness-110',
  secondary:       'border border-brand-border text-slate-300 hover:border-brand-yellow hover:text-brand-yellow',
  'secondary-light':'border border-brand-light-border text-brand-text-muted hover:border-brand-yellow hover:text-brand-yellow',
  ghost:           'text-slate-400 hover:text-brand-yellow',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-sm rounded-lg',
  lg: 'px-7 py-3.5 text-base rounded-xl',
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Button({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  icon,
}: ButtonProps) {
  const base = [
    'inline-flex items-center gap-2 justify-center transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/60',
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'opacity-50 pointer-events-none' : '',
    className,
  ].join(' ')

  const motion_props = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap:   disabled ? {} : { scale: 0.97 },
  }

  const inner = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {label}
    </>
  )

  if (href?.startsWith('#')) {
    return (
      <motion.a
        {...motion_props}
        href={href}
        className={base}
        onClick={(e) => {
          e.preventDefault()
          scrollToId(href.slice(1))
          onClick?.()
        }}
      >
        {inner}
      </motion.a>
    )
  }

  if (href) {
    return (
      <motion.a
        {...motion_props}
        href={href}
        className={base}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...motion_props}
      type={type}
      className={base}
      onClick={onClick}
      disabled={disabled}
    >
      {inner}
    </motion.button>
  )
}
