import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      // Without this, core no-unused-vars doesn't see `<motion.div>` (a
      // JSXMemberExpression) as a use of `motion` — only a bare `<Foo/>`
      // counts, so every framer-motion import was flagged as unused despite
      // real, heavy use throughout Hero/Services/Team. jsx-uses-vars is what
      // teaches no-unused-vars to look inside JSX at all.
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // A single ecmaVersion, set where flat config expects it. The previous
      // config duplicated this in a nested parserOptions.ecmaVersion — the
      // two are not always merged the way you'd expect, and 'latest' in the
      // nested spot while the top-level stayed pinned at 2020 exposed the
      // scope-analysis gap above.
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      // react/recommended's version-dependent rules (e.g. no-deprecated)
      // would otherwise probe for React at lint time; pin it explicitly.
      react: { version: '19.2' },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // This is a JSX-only codebase with no PropTypes and no old-style
      // React import requirement (the new JSX transform is on by default
      // in Vite's React plugin) — both rules would otherwise fire on
      // every component in the project for conventions this repo doesn't
      // follow.
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  // Node build scripts (npm run images): Node globals, no React rules.
  {
    files: ['scripts/**/*.{js,mjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
])
