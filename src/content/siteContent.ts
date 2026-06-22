// ─────────────────────────────────────────────────────────────────────────────
// Central content file for 311-live landing page.
// Edit copy, links, and configuration values here — components import from
// this file rather than hardcoding anything.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  // ── Brand ─────────────────────────────────────────────────────────────────
  product: {
    name: '311-live',
    tagline: 'Civic data intelligence for urban service systems.',
    url: 'https://311-live.github.io',
  },

  // ── Navbar ────────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: 'Product',     href: '#product' },
      { label: 'Demo',        href: '#demo' },
      { label: 'Partnership', href: '#partnership' },
      { label: 'Contact',     href: '#contact' },
    ],
    cta: { label: 'Request a Pilot', href: '#contact' },
  },

  // ── Hero section ──────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Live Civic Intelligence',
    headline: 'Live civic signals for urban service intelligence',
    subtitle:
      '311-live transforms public service requests into real-time spatial intelligence for monitoring neighborhood conditions, operational pressure, and emerging urban issues.',
    ctas: [
      { label: 'View Demo',        href: '#demo' },
      { label: 'Request a Pilot',  href: '#contact' },
    ],
    // Fake-but-plausible placeholder values for the live dashboard mockup.
    // No real data is fetched — these are UI placeholders.
    liveStats: [
      { value: '2,847', label: 'Requests Today' },
      { value: '23',    label: 'Active Hotspots' },
      { value: 'Noise / DOB', label: 'Top Category' },
      { value: '4.2h',  label: 'Avg Response' },
    ],
    categories: [
      { name: 'Noise',      pct: 34, color: '#fff200' },
      { name: 'Streets',    pct: 21, color: '#22d3ee' },
      { name: 'Housing',    pct: 18, color: '#94a3b8' },
      { name: 'Sanitation', pct: 14, color: '#64748b' },
    ],
  },

  // ── Product / capabilities section ────────────────────────────────────────
  features: {
    sectionTitle: 'From service requests to operational intelligence',
    cards: [
      {
        title: 'Live 311 Monitoring',
        description:
          'Track service request activity by time, category, and geography.',
        icon: 'Activity',
      },
      {
        title: 'Spatial Hotspot Detection',
        description:
          'Identify emerging clusters of complaints and neighborhood-level service pressure.',
        icon: 'MapPin',
      },
      {
        title: 'Category Intelligence',
        description:
          'Compare signals across noise, sanitation, housing, streets, public safety, and infrastructure.',
        icon: 'BarChart2',
      },
      {
        title: 'Research-ready Exports',
        description:
          'Generate cleaned spatial-temporal datasets for civic analytics, policy research, and pilot evaluation.',
        icon: 'Download',
      },
    ],
  },

  // ── Demo section ──────────────────────────────────────────────────────────
  demo: {
    sectionTitle: 'Product demo',
    description:
      'The demo shows how 311-live can surface live complaint patterns, spatial hotspots, and category-level trends for public-sector monitoring and pilot exploration.',
    // Local video file — place your demo video at public/demo-video.mp4
    videoPath: '/demo-video.mp4',
    // Poster image — place a preview frame at public/demo-poster.png
    posterPath: '/demo-poster.png',
    // To switch to a YouTube or Vimeo embed instead of local video, set this
    // to the embed URL. Example: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
    // Set to null to use the local video file above.
    embedUrl: null as string | null,
  },

  // ── Partnership section ───────────────────────────────────────────────────
  partnership: {
    sectionTitle: 'Built for pilot exploration with civic and research partners',
    body: 'We are looking to collaborate with city agencies, civic technology teams, urban researchers, and public-sector innovation groups interested in using 311 data as a live signal for neighborhood conditions, service demand, and infrastructure stress.',
    modes: [
      {
        title: 'Public-sector pilot',
        description:
          'Partner with city agencies to test 311 monitoring against operational workflows and service delivery metrics.',
        icon: 'Building2',
      },
      {
        title: 'Academic / research collaboration',
        description:
          'Work with urban researchers and civic data scientists to study neighborhood service patterns and policy implications.',
        icon: 'BookOpen',
      },
      {
        title: 'Data storytelling / public dashboard',
        description:
          'Surface community-level insights for civic journalism, policy communication, and public transparency.',
        icon: 'Newspaper',
      },
    ],
    cta: { label: 'Discuss a Pilot', href: '#contact' },
  },

  // ── Contact section ───────────────────────────────────────────────────────
  contact: {
    sectionTitle: 'Get in touch',
    body: 'For pilot conversations, research collaboration, or demo access, contact the 311-live team.',
    // Replace with your actual email address
    email: 'bruceywzhang@gmail.com',
    // Form submission endpoint — supports Formspree, Tally, or any JSON POST API.
    // Leave empty ('') to fall back to a mailto: link instead.
    // Formspree example: 'https://formspree.io/f/YOUR_FORM_ID'
    formEndpoint: '',
    // Scheduling / appointment link — Google Meet, Calendly, Cal.com, etc.
    appointmentUrl: 'https://calendar.google.com/',
    appointmentLabel: 'Schedule a conversation',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Civic data intelligence for urban service systems.',
    note: 'Built as an exploratory civic technology project.',
    links: [
      { label: 'Demo',        href: '#demo' },
      { label: 'Partnership', href: '#partnership' },
      { label: 'Contact',     href: '#contact' },
    ],
  },
}
