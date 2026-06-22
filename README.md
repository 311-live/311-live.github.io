# 311-live

Public-facing landing page for **311-live** — civic data intelligence for urban service systems.

Live site: https://311-live.github.io

---

## Local development

**Prerequisites:** Node.js 18 or later, npm 9 or later.

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:5173
npm run dev

# Type-check + production build (output → dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## Deploy to GitHub Pages

The repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that
builds and deploys automatically on every push to `main`.

**One-time setup (do this once in the GitHub UI):**

1. Go to **Settings → Pages** in your repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push any commit to `main` — the workflow will run and publish to
   `https://311-live.github.io`.

> If this ever becomes a *project* site (e.g. `https://311-live.github.io/my-project`),
> update `base` in `vite.config.ts` from `'/'` to `'/my-project/'`.

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first run walks you through auth & project setup)
vercel

# Production deploy
vercel --prod
```

Vercel auto-detects Vite. No extra config needed.

---

## Deploy to Netlify

1. Push the repo to GitHub.
2. Connect it at [app.netlify.com](https://app.netlify.com) → "Import from Git".
3. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
4. Deploy.

Or use the CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

---

## Editing content

All copy, links, and configuration values live in one file:

```
src/content/siteContent.ts
```

Edit there; components pull values from it automatically. Key fields:

| Field | Where | What to update |
|---|---|---|
| `contact.email` | `siteContent.ts` | Your actual contact email |
| `contact.formEndpoint` | `siteContent.ts` | Formspree / Tally endpoint URL |
| `contact.appointmentUrl` | `siteContent.ts` | Calendly / Cal.com / Google Meet link |
| `demo.embedUrl` | `siteContent.ts` | YouTube/Vimeo embed URL (or leave `null` for local file) |
| `demo.videoPath` | `siteContent.ts` | Path to local video (default `/demo-video.mp4`) |

---

## Replacing assets

| Asset | Path | Notes |
|---|---|---|
| Logo / favicon | `public/logo.svg` | Replaces the placeholder SVG; used as browser tab icon |
| Demo video | `public/demo-video.mp4` | Drop the file here; update path in `siteContent.ts` if needed |
| Demo poster | `public/demo-poster.png` | Thumbnail shown before the video plays |

---

## Tech stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev) — icons
- GitHub Actions — CI/CD to GitHub Pages
