// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow':       '#fff200',
        'brand-bg':           '#080c14',
        'brand-surface':      '#0d1220',
        'brand-border':       '#1e2a3a',
        'brand-cyan':         '#22d3ee',
        // Light-mode palette for content sections
        'brand-light-bg':     '#f8f7f4',
        'brand-light-surface':'#ffffff',
        'brand-light-border': '#e5e2db',
        'brand-text':         '#1a1f2e',
        'brand-text-muted':   '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
