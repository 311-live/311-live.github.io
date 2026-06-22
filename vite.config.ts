import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base URL:
//   Organization site (311-live.github.io → served at root): base = '/'
//   Project site (311-live.github.io/my-repo → served under a path): base = '/my-repo/'
// Update the value below if this becomes a project-level site.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
