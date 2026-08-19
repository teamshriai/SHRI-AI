import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Surfaced in the footer. Injected at build time so the "last updated" line
  // is accurate on every deploy instead of being a hardcoded string someone has
  // to remember to bump. Exposed through import.meta.env (rather than a bare
  // global) so it needs no eslint globals entry.
  define: {
    'import.meta.env.VITE_BUILD_DATE': JSON.stringify(
      new Date().toISOString().slice(0, 10)
    ),
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.version),
  },
})
