// ─────────────────────────────────────────────────────────────────────────────
// Central content file for 311-live landing page.
// Edit copy, links, and configuration values here — components import from
// this file rather than hardcoding anything.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  // ── Brand ─────────────────────────────────────────────────────────────────
  product: {
    name: '311-live',
    tagline: 'Mobile-first AI civic reporting for urban service systems.',
    url: 'https://311-live.github.io',
    github: 'https://github.com/311-live',
  },

  // ── Navbar ────────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: 'About',        href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Product',      href: '#product' },
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
  },

  // ── About / origin section ────────────────────────────────────────────────
  about: {
    eyebrow: 'The Project',
    headline: 'Making the invisible visible',
    body1:
      'NYC 311 handles over 37 million contacts annually. Every report still asks a resident to translate a messy real-world situation into a rigid form. Critical context is lost. Issues go under-reported.',
    body2:
      '311 Live closes that gap. Residents speak and show their issue via phone camera to a live AI agent, which asks follow-up questions and auto-generates a clear, contextualized 311 service request: no forms, no ambiguity.',
    dtprNote:
      'Built on the DTPR communications standard, the system shows residents exactly what data is being collected, how the AI interprets it, and how the report is routed to city agencies.',
    stat: {
      value: '37M+',
      label: 'annual NYC 311 contacts, each one asking a resident to translate reality into a form',
    },
    bullets: [
      'Voice and camera input: no typing required',
      'Live AI agent with real-time follow-up questions',
      'DTPR-compliant transparency layer built in',
    ],
  },

  // ── Product / capabilities section ────────────────────────────────────────
  features: {
    sectionTitle: 'From conversation to civic action',
    cards: [
      {
        title: 'Multimodal AI Intake',
        description:
          'Residents describe issues via voice and phone camera. The live AI agent listens, sees, and asks follow-up questions to capture full context.',
        icon: 'Mic',
      },
      {
        title: 'Structured Report Generation',
        description:
          'Converts an open-ended conversation into a clear, categorized 311 service request: no forms, no ambiguity, no missing details.',
        icon: 'FileText',
      },
      {
        title: 'DTPR Transparency Layer',
        description:
          'Shows residents exactly what data is collected, how the AI interprets the situation, and which agencies will act on the report.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Post-Submission Data Chain',
        description:
          'After submission, residents see a full data chain: what was inferred, what category was selected, what agency received it, and what happens next.',
        icon: 'GitBranch',
      },
    ],
  },

  // ── How It Works section ──────────────────────────────────────────────────
  howItWorks: {
    sectionTitle: 'One conversation. A complete report.',
    steps: [
      {
        number: '01',
        headline: 'Raises the phone',
        body: 'The resident raises their phone and shows the issue as it is happening.',
      },
      {
        number: '02',
        headline: 'Sees and listens',
        body: '311 Live reads the scene and hears the resident at the same time.',
      },
      {
        number: '03',
        headline: 'Asks the right questions',
        body: 'It asks targeted follow-up questions about access and impact.',
      },
      {
        number: '04',
        headline: 'Routed report',
        body: 'A complete report, suggested to the right department.',
      },
    ],
    impact: [
      {
        title: 'Better intake',
        body: 'Removes incomplete, error-prone submissions that manual entry produces.',
      },
      {
        title: 'Better routing confidence',
        body: '311 Live suggests which department should handle the report, reducing misrouting and follow-up clarification.',
      },
      {
        title: 'Better resident trust',
        body: 'Residents see how their report is understood before anything is sent.',
      },
    ],
  },

  // ── Demo section ──────────────────────────────────────────────────────────
  demo: {
    sectionTitle: 'Product demo',
    description:
      'See how a resident reports a flooding issue near a school crosswalk: from opening the app to a fully structured 311 report, entirely through voice and camera.',
    videoPath: '/demo-video.mp4',
    posterPath: '/demo-poster.png',
    embedUrl: null as string | null,
    badges: [
      { label: 'Live agent',  dot: '#22d3ee', pos: 'top-5 left-5'    },
      { label: 'Auto-report', dot: '#fff200', pos: 'bottom-6 left-5'  },
      { label: 'NYC pilot',   dot: '#94a3b8', pos: 'bottom-6 right-5' },
    ],
    tags: ['Voice + camera', 'Live AI agent', 'Auto-report', 'DTPR transparency'],
  },

  // ── Partnership section ───────────────────────────────────────────────────
  partnership: {
    sectionTitle: 'Built for pilot exploration with civic and research partners',
    body: 'We are looking to collaborate with city agencies, civic technology teams, urban researchers, and public-sector innovation groups interested in using AI-powered intake as a tool for better 311 data and community transparency.',
    modes: [
      {
        number: '01',
        title: 'Public-sector pilot',
        description:
          'Partner with city agencies to test AI-assisted 311 intake against operational workflows and service delivery metrics.',
        icon: 'Building2',
      },
      {
        number: '02',
        title: 'Academic / research collaboration',
        description:
          'Work with urban researchers and civic data scientists to study how multimodal AI changes the quality and equity of 311 reporting.',
        icon: 'BookOpen',
      },
      {
        number: '03',
        title: 'Data storytelling / public dashboard',
        description:
          'Surface community-level insights for civic journalism, policy communication, and public transparency.',
        icon: 'Newspaper',
      },
    ],
    cta: { label: 'Discuss a Pilot', href: '#contact' },
  },

  // ── Team section ──────────────────────────────────────────────────────────
  team: {
    sectionTitle: 'The team',
    body: 'A multidisciplinary team working at the intersection of urban planning, data science, and civic technology in New York City.',
    members: [
      {
        name: 'Eric Huang',
        role: 'Data Scientist',
        org: 'NYU MSDS',
        linkedin: 'https://linkedin.com/in/zikang-huang/',
        photo: '/team/eric.png',
      },
      {
        name: 'Bruce Zhang',
        role: 'Data Scientist',
        org: 'NYU MSDS',
        linkedin: 'https://www.linkedin.com/in/yiwen-zhang-6a873421a/',
        photo: '/team/bruce.png',
      },
      {
        name: 'Tiffany Luo',
        role: 'Urban Planner & Civic Strategist',
        org: 'AICP, LEED AP',
        linkedin: 'https://www.linkedin.com/in/yueqi-tiffany-luo/',
        photo: '/team/tiffany.png',
      },
      {
        name: 'Shuai Wang',
        role: 'Urban Technology Analyst',
        org: 'Mobility & Smart Cities',
        linkedin: 'https://www.linkedin.com/in/shuaiws',
        photo: '/team/shuai.png',
      },
    ],
  },

  // ── Contact section ───────────────────────────────────────────────────────
  contact: {
    sectionTitle: 'Get in touch',
    body: 'For pilot conversations, research collaboration, or demo access, contact the 311-live team.',
    email: 'yueqiluo0110@gmail.com',
    // Formspree endpoint — sign up at formspree.io, create a form, paste the URL here.
    // Example: 'https://formspree.io/f/xabc1234'
    // Leave '' to fall back to mailto: link.
    formEndpoint: '',
    appointmentUrl: 'https://calendly.com/yueqiluo0110/30min',
    appointmentLabel: 'Schedule a conversation',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Mobile-first AI civic reporting for urban service systems.',
    note: 'Built as an exploratory civic technology project, MakeShift 2026.',
    links: [
      { label: 'About',       href: '#about' },
      { label: 'Demo',        href: '#demo' },
      { label: 'Partnership', href: '#partnership' },
      { label: 'Contact',     href: '#contact' },
    ],
  },
}
