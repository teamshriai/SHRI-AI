import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

/**
 * Clean URLs that must resolve on a plain static host.
 *
 * https://shri-ai.org/careers is linked from Stroke-AI. The site is served by
 * nginx with no SPA fallback, so that path returned 404: public/_redirects and
 * public/.htaccess only cover Netlify-style and Apache hosts, and nginx reads
 * neither. Rather than depend on a server change, the build writes a real
 * dist/careers/index.html — nginx then serves it as the directory index, and
 * App reads the path and lands on the Careers heading.
 *
 * It is a copy of the generated index.html, made after the bundle is written,
 * so the hashed asset URLs inside it can never go stale. Asset paths are
 * absolute (base '/'), so the copy works from a nested directory.
 *
 * Adding a clean URL is one entry here plus one in SECTION_ROUTES
 * (src/lib/careersRoute.js).
 */
const CLEAN_PATHS = ['careers']

function cleanPathCopies() {
  let outDir
  return {
    name: 'shri-clean-path-copies',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const source = resolve(outDir, 'index.html')
      if (!existsSync(source)) return
      for (const path of CLEAN_PATHS) {
        const dir = resolve(outDir, path)
        mkdirSync(dir, { recursive: true })
        copyFileSync(source, resolve(dir, 'index.html'))
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cleanPathCopies(),
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
