import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { motion, MotionConfig } from 'framer-motion';
import {
  ArrowUp, ClipboardPlus, FlaskConical, Moon, PackageCheck, Pill, Stethoscope, Sun,
} from 'lucide-react';
import { BUILD_VERSION } from '../lib/buildVersion';
import { NotchedProjectCard } from './ui/NotchedProjectCard';

/**
 * /dev — SHRI-Health, a product of SHRI-AI: a launcher for the platform's
 * five module demos.
 *
 * Built from the home page's own vocabulary so it reads as the same site:
 * the home page's font only (DM Sans via --font-sans) and the index.css
 * tokens, a gradient title, quick links to each demo, and module cards in
 * each module's colour.
 *
 * Each module is a NotchedProjectCard (components/ui): a photo cover with
 * the open arrow nested in a notch, and the whole card as one link. The
 * photos are Unsplash (Unsplash License, no attribution required), cropped
 * to 4:3 and saved as 1200x900 WebP in public/shri-health/; their Unsplash
 * IDs are noted beside each module.
 *
 * Demo URLs end in a slash: each demo is served as a directory, and the bare
 * path would cost a redirect before the page starts loading.
 *
 * Theme: this page alone switches between dark (the default) and light with
 * the moon/sun button in the bar. Dark is the base token set on .sh-root and
 * light overrides it on .sh-root[data-theme='light'], so a missing attribute
 * still gives the designed dark page. The choice is kept in localStorage
 * under a namespaced key (the /dev/<module>/ demos share this origin), and
 * index.html applies it before first paint so the page never flashes the
 * wrong colour — keep THEME_KEY and THEME_BG in sync with that script.
 */

const THEME_KEY = 'shri-health:theme';
const THEME_BG = { dark: '#07080b', light: '#ffffff' };
const isTheme = (value) => value === 'dark' || value === 'light';

// Storage can be missing or throw (blocked site data, private modes), and
// the stored value can be anything; neither may ever break the page.
function readStoredTheme() {
  try {
    const value = window.localStorage.getItem(THEME_KEY);
    return isTheme(value) ? value : 'dark';
  } catch {
    return 'dark';
  }
}
function writeStoredTheme(value) {
  try {
    window.localStorage.setItem(THEME_KEY, value);
  } catch {
    // Blocked or full: the switch still works for this visit.
  }
}

const MODULES = [
  {
    id: 'care-entry',
    image: '/shri-health/care-entry.webp', // Unsplash 1519494026892-80bbd2d6fd0d
    imageAlt: 'A hospital reception desk with floor signage',
    label: 'Care Entry',
    desc: 'Patient registration, intake and visit check-in.',
    points: ['Patient registration', 'Triage & vitals', 'Appointment scheduling'],
    Icon: ClipboardPlus,
    accent: '#b52a6b',
    accentRgb: '181, 42, 107',
    demoUrl: 'https://www.shri-ai.org/dev/care-entry/',
  },
  {
    id: 'doctor',
    image: '/shri-health/clinician.webp', // Unsplash 1666214280557-f1b5022eb634
    imageAlt: 'Two clinicians reviewing a scan on a monitor',
    label: 'Clinician',
    desc: 'Patient records, consultations and care notes.',
    points: ['Electronic health records', 'Consultation notes', 'Orders & prescriptions'],
    Icon: Stethoscope,
    accent: '#3A82C4',
    accentRgb: '58, 130, 196',
    demoUrl: 'https://www.shri-ai.org/dev/clinician/',
  },
  {
    id: 'pharma',
    image: '/shri-health/pharmacy.webp', // Unsplash 1631549916768-4119b2e5f926
    imageAlt: 'Blister packs of assorted tablets and capsules',
    label: 'Pharmacy',
    desc: 'Prescriptions, dispensing and medicine stock.',
    points: ['e-Prescriptions', 'Dispensing', 'Stock & expiry alerts'],
    Icon: Pill,
    accent: '#7B6FCD',
    accentRgb: '123, 111, 205',
    demoUrl: 'https://www.shri-ai.org/dev/pharmacy/',
  },
  {
    id: 'laboratory',
    image: '/shri-health/lab.webp', // Unsplash 1582719471384-894fbb16e074
    imageAlt: 'A scientist working at a laboratory microscope',
    label: 'Lab',
    desc: 'Samples, tests and result reporting.',
    points: ['Sample tracking', 'Test orders', 'Result reporting'],
    Icon: FlaskConical,
    accent: '#1f9163',
    accentRgb: '31, 145, 99',
    demoUrl: 'https://www.shri-ai.org/dev/laboratory/',
  },
  {
    id: 'procurement',
    image: '/shri-health/procurement.webp', // Unsplash 1553413077-190dd305871c
    imageAlt: 'A warehouse aisle with stocked shelves',
    label: 'Procurement',
    desc: 'Purchase orders, vendors and supply tracking.',
    points: ['Purchase orders', 'Vendor management', 'Inventory tracking'],
    Icon: PackageCheck,
    accent: '#a8690f',
    accentRgb: '168, 105, 15',
    demoUrl: 'https://www.shri-ai.org/dev/procurement/',
  },
];

const byId = Object.fromEntries(MODULES.map((m) => [m.id, m]));

/* How a visit moves through the platform, left to right. */
const FLOW = [
  { modules: ['care-entry'], label: 'Care Entry', note: 'Registration & triage' },
  { modules: ['doctor'], label: 'Clinician', note: 'Consultation & orders' },
  { modules: ['pharma', 'laboratory'], label: 'Pharmacy & Lab', note: 'Dispensing & tests' },
  { modules: ['procurement'], label: 'Procurement', note: 'Stock & suppliers' },
];

const EASE = [0.22, 1, 0.36, 1];
// One shared object: re-renders on a theme switch hand framer the same
// props, and once:true means nothing already shown replays.
const RISE = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: EASE },
};

/* The light token set, used by the light theme and by print (paper is
   white whatever the screen theme). */
const LIGHT_TOKENS = `
          color-scheme: light;
          --sh-bg: ${THEME_BG.light};
          --sh-text: var(--ink);
          --sh-soft: var(--ink-soft);
          --sh-muted: var(--ink-muted);
          --sh-line: rgba(20, 20, 30, 0.08);
          --sh-glow-blue: rgba(58, 130, 196, 0.1);
          --sh-glow-violet: rgba(123, 111, 205, 0.09);
          --sh-glow-green: rgba(31, 145, 99, 0.07);
          --sh-bar-bg: rgba(255, 255, 255, 0.88);
          --sh-foot-bg: rgba(255, 255, 255, 0.6);
          --sh-btn-line: rgba(20, 20, 30, 0.16);
          --sh-btn-hover-bg: #f4f5f8;
          --sh-btn-hover-line: rgba(20, 20, 30, 0.26);
          --sh-chip-bg: #ffffff;
          --sh-chip-line: rgba(20, 20, 30, 0.12);
          --sh-title-g1: #7B6FCD;
          --sh-title-g2: #3A82C4;
          --sh-title-g3: #a8690f;
          --sh-scrollbar: rgba(20, 20, 30, 0.25);
          --sh-track-opacity: 0.55;
          --sh-focus: #3A82C4;
          --sh-theme-icon: #a8690f;`;

/* Colours that mix with each element's own module colour (--m on a chip,
   --ic on a step icon) can't be page-level tokens — a custom property
   resolves var() where it is declared — so light restates those rules. */
const LIGHT_MODULE_RULES = (scope) => `
        ${scope} .sh-chip svg { color: var(--m); }
        ${scope} .sh-chip:hover { border-color: rgba(var(--m-rgb), 0.5); background: color-mix(in srgb, var(--m) 8%, #fff); }
        ${scope} .sh-step-icons svg { color: var(--ic); }`;

const CSS = `
        .sh-root {
          /* Dark — the designed default. */
          color-scheme: dark;
          --sh-bg: ${THEME_BG.dark};
          --sh-text: #ffffff;
          --sh-soft: rgba(255, 255, 255, 0.9);
          --sh-muted: rgba(255, 255, 255, 0.72);
          --sh-line: rgba(255, 255, 255, 0.1);
          --sh-glow-blue: rgba(58, 130, 196, 0.16);
          --sh-glow-violet: rgba(123, 111, 205, 0.13);
          --sh-glow-green: rgba(31, 145, 99, 0.08);
          --sh-bar-bg: rgba(7, 8, 11, 0.72);
          --sh-foot-bg: rgba(7, 8, 11, 0.6);
          --sh-btn-line: rgba(255, 255, 255, 0.18);
          --sh-btn-hover-bg: rgba(255, 255, 255, 0.08);
          --sh-btn-hover-line: rgba(255, 255, 255, 0.3);
          --sh-chip-bg: rgba(255, 255, 255, 0.05);
          --sh-chip-line: rgba(255, 255, 255, 0.35);
          --sh-title-g1: #b3a8f5;
          --sh-title-g2: #74b6ee;
          --sh-title-g3: #f2b766;
          --sh-scrollbar: rgba(255, 255, 255, 0.25);
          --sh-track-opacity: 0.8;
          --sh-focus: #8cc0f0;
          --sh-theme-icon: #a9c9f5;
          /* Slimmer side margins than the rest of the site, so the page's
             containers use as much of the screen as possible. */
          --sh-gutter: clamp(0.9rem, 2.5vw, 2.5rem);

          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          /* Soft colour glows over the theme's base colour. It scrolls with
             the page (no background-attachment: fixed), so it costs nothing
             to paint and behaves the same on iOS. */
          background:
            radial-gradient(ellipse 50% 38% at 0% 0%, var(--sh-glow-blue), transparent 70%),
            radial-gradient(ellipse 45% 34% at 100% 0%, var(--sh-glow-violet), transparent 70%),
            radial-gradient(ellipse 60% 40% at 50% 100%, var(--sh-glow-green), transparent 70%),
            var(--sh-bg);
          font-family: var(--font-sans);
          color: var(--sh-text);
        }
        .sh-root[data-theme='light'] {${LIGHT_TOKENS}
        }
        ${LIGHT_MODULE_RULES(".sh-root[data-theme='light']")}

        /* A theme switch applies in one step: transitions are held for the
           frame of the switch, so nothing (card titles, frames, buttons)
           fades in late. The toggle's own icons are the one exception. */
        .sh-root[data-theme-switching] *:not(.sh-theme-icon),
        .sh-root[data-theme-switching] *::before,
        .sh-root[data-theme-switching] *::after { transition: none !important; }
        /* The browser's cross-fade between the two themes, where supported. */
        ::view-transition-old(root),
        ::view-transition-new(root) { animation-duration: 0.3s; }

        .sh-wrap { width: min(100%, 1920px); margin-inline: auto; }

        /* ── Top bar ── */
        .sh-bar {
          position: sticky;
          top: 0;
          z-index: 10;
          padding: 0 var(--sh-gutter);
          background: var(--sh-bar-bg);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          backdrop-filter: blur(14px) saturate(140%);
          border-bottom: 1px solid var(--sh-line);
        }
        .sh-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 66px;
        }
        .sh-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          color: var(--sh-text);
          text-decoration: none;
          min-width: 0;
        }
        .sh-brand:hover { color: var(--sh-text); }
        .sh-brand img { width: 35px; height: 35px; object-fit: contain; display: block; flex: none; border-radius: 8px; background: #fff; padding: 2px; }
        .sh-brand b {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 1rem;
          font-weight: var(--fw-medium);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        /* ── Theme switch ──
           The icon shows the current theme: a moon while dark, a sun while
           light. Both are drawn in the same spot and cross-fade with a small
           turn; the button's label names the action. */
        .sh-theme {
          position: relative;
          flex: none;
          display: inline-grid;
          place-items: center;
          width: 40px;
          height: 40px;
          padding: 0;
          border-radius: 50%;
          /* Full shorthand: Tailwind's preflight leaves buttons border-less
             and without a pointer cursor. */
          border: 1px solid var(--sh-btn-line);
          background: transparent;
          color: var(--sh-theme-icon);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }
        /* A 44px hit area around the 40px circle. */
        .sh-theme::before { content: ''; position: absolute; inset: -2px; border-radius: 50%; }
        .sh-theme-icon {
          grid-area: 1 / 1;
          display: block;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sh-theme-sun { opacity: 0; transform: rotate(-90deg) scale(0.5); }
        .sh-root[data-theme='light'] .sh-theme-moon { opacity: 0; transform: rotate(90deg) scale(0.5); }
        .sh-root[data-theme='light'] .sh-theme-sun { opacity: 1; transform: none; }
        @media (hover: hover) {
          .sh-theme:hover { background: var(--sh-btn-hover-bg); border-color: var(--sh-btn-hover-line); }
        }
        .sh-theme:active { transform: scale(0.94); }

        .sh-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(2.25rem, 4vw, 3.25rem);
          padding: clamp(1.25rem, 2.5vw, 2rem) var(--sh-gutter) clamp(2.5rem, 5vw, 3.5rem);
        }

        /* ── Intro ──
           No box and no picture: the heading and quick-launch row sit
           straight on the page, aligned with the sections below. */
        .sh-banner-text {
          min-width: 0;
          padding-block: clamp(1rem, 2.4vw, 1.75rem) 0;
        }
        .sh-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.55rem 0.9rem;
          margin: 0 0 0.85rem;
        }
        .sh-maker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          letter-spacing: 0.01em;
          color: var(--sh-soft);
        }
        .sh-maker img { width: 22px; height: 22px; object-fit: contain; display: block; border-radius: 5px; background: #fff; padding: 1px; }
        .sh-title {
          margin: 0;
          font-size: clamp(2.5rem, 4.4vw, 3.6rem);
          font-weight: var(--fw-light);
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: var(--sh-text);
          outline: none;
        }
        .sh-title-em {
          font-weight: var(--fw-regular);
          background: linear-gradient(135deg, var(--sh-title-g1) 0%, var(--sh-title-g2) 50%, var(--sh-title-g3) 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shGradient 8s ease infinite;
        }
        @keyframes shGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .sh-lede {
          margin: 0.75rem 0 0;
          max-width: 48ch;
          font-size: var(--fs-lead);
          font-weight: var(--fw-light);
          line-height: var(--lh-body);
          color: var(--sh-soft);
        }
        .sh-quick-label {
          margin: 1.5rem 0 0.6rem;
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: var(--sh-muted);
        }
        .sh-quick {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .sh-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 40px;
          padding: 0 0.9rem;
          background: var(--sh-chip-bg);
          border: 1px solid var(--sh-chip-line);
          border-radius: 10px;
          color: var(--sh-text);
          font-size: var(--fs-sm);
          font-weight: var(--fw-medium);
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }
        .sh-chip svg { flex: none; color: color-mix(in srgb, var(--m) 70%, #fff); }
        .sh-chip:hover {
          color: var(--sh-text);
          border-color: color-mix(in srgb, var(--m) 70%, #fff);
          background: color-mix(in srgb, var(--m) 18%, transparent);
        }
        .sh-chip:active { transform: scale(0.98); }

        /* ── Section heading ── */
        .sh-head { margin: 0 0 1.25rem; }
        .sh-kicker {
          margin: 0 0 0.4rem;
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: var(--sh-muted);
        }
        .sh-heading {
          margin: 0;
          font-size: clamp(1.45rem, 2.4vw, 1.9rem);
          font-weight: var(--fw-light);
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: var(--sh-text);
        }

        /* ── Module cards: one row, always ──
           Desktop: five cards side by side. Narrower screens: the same
           single row becomes a native swipe row that snaps card by card,
           bleeding to the screen edges so the next card peeks in. Vertical
           padding keeps the hover lift and disc glow unclipped. */
        .sh-modules {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(0.75rem, 1vw, 1.1rem);
          padding-block: 8px 12px;
        }
        /* Each cell is a flex box so its framed card fills the full row
           height: every card the same size whatever its text. */
        .sh-module { min-width: 0; display: flex; }
        .sh-module > .npc { flex: 1; }
        /* Below ~210px a card gets cramped, so the row turns into a swipe row
           before that happens. */
        @media (max-width: 1199px) {
          .sh-modules {
            display: flex;
            /* Start-aligned: centring overflowing content would push the
               first cards past the scroll origin, out of reach. */
            justify-content: flex-start;
            gap: 1rem;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            margin-inline: calc(-1 * var(--sh-gutter));
            padding: 8px var(--sh-gutter) 18px;
            scroll-padding-inline: var(--sh-gutter);
            scrollbar-width: thin;
            scrollbar-color: var(--sh-scrollbar) transparent;
          }
          .sh-module { flex: 0 0 clamp(250px, 74vw, 300px); scroll-snap-align: start; }
        }

        /* ── How it works ── */
        .sh-flow { padding-top: clamp(1.75rem, 3vw, 2.25rem); border-top: 1px solid var(--sh-line); }
        .sh-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.75rem, 1.6vw, 1.25rem);
        }
        .sh-step { position: relative; min-width: 0; padding-top: 1.2rem; }
        /* A coloured track, one segment per step, blending into the next. */
        .sh-step::before {
          content: '';
          position: absolute;
          inset: 0 0 auto;
          height: 2px;
          background: linear-gradient(90deg, var(--s-a), var(--s-b));
          opacity: var(--sh-track-opacity);
        }
        .sh-step::after {
          content: '';
          position: absolute;
          top: -3px;
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--s-a);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--s-a) 30%, transparent);
        }
        .sh-step-icons { display: flex; gap: 0.4rem; line-height: 0; margin-bottom: 0.55rem; }
        .sh-step-icons svg { color: color-mix(in srgb, var(--ic) 70%, #fff); }
        .sh-step-label { display: block; font-size: 0.95rem; font-weight: var(--fw-medium); color: var(--sh-text); }
        .sh-step-note { display: block; margin-top: 0.15rem; font-size: var(--fs-sm); font-weight: var(--fw-light); color: var(--sh-muted); }

        /* ── Footer ── */
        .sh-foot { padding: 0 var(--sh-gutter); border-top: 1px solid var(--sh-line); background: var(--sh-foot-bg); }
        .sh-foot-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem 1.5rem;
          padding: 1.1rem 0;
          font-size: 0.78rem;
          color: var(--sh-muted);
        }
        .sh-foot a {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          min-height: 32px;
          color: var(--sh-soft);
          text-decoration: none;
        }
        .sh-foot a:hover { color: var(--sh-text); }

        /* One focus ring for every link and button on the page, cards
           included, in the theme's own colour. */
        .sh-root a:focus-visible, .sh-root button:focus-visible { outline: 2px solid var(--sh-focus); outline-offset: 3px; }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .sh-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 1.5rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sh-title-em { animation: none; }
          .sh-chip, .sh-theme, .sh-theme-icon { transition: none; }
          .sh-chip:active, .sh-theme:active { transform: none; }
          ::view-transition-group(*),
          ::view-transition-old(*),
          ::view-transition-new(*) { animation: none !important; }
        }

        /* Paper is white: print the light theme whatever the screen shows. */
        @media print {
          .sh-root, .sh-root[data-theme] {${LIGHT_TOKENS}
          }
          ${LIGHT_MODULE_RULES('.sh-root')}
          .sh-theme { display: none; }
          .sh-root .npc--dark {
            --npc-title: var(--ink);
            --npc-text: var(--ink-soft);
            --npc-frame: rgba(20, 20, 30, 0.2);
          }
          .sh-root .npc--dark.npc--framed { background: #fff; }
          .sh-root .npc--dark .npc-tags li {
            background: color-mix(in srgb, var(--npc-accent, #8a8a9c) 11%, #fff);
            color: color-mix(in srgb, var(--npc-accent, #55556a) 80%, #000);
          }
        }
`;

const ShriHealth = () => {
  const titleRef = useRef(null);
  const rootRef = useRef(null);
  const metaRef = useRef(null);
  // Lazy: the first render already has the visitor's theme, so there's no
  // flash of the other one (this page renders on the client only).
  const [theme, setTheme] = useState(readStoredTheme);
  const isDark = theme === 'dark';
  const switchLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'SHRI-Health | SHRI-AI';
    titleRef.current?.focus({ preventScroll: true });
    return () => { document.title = previousTitle; };
  }, []);

  // The page's surroundings follow its theme: the body behind it (so iOS
  // overscroll never flashes another colour), the root colour-scheme (the
  // main scrollbar) and the mobile browser's chrome. (1) Note what was
  // there on mount and put it back on unmount; it must run before (2).
  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousBg = body.style.backgroundColor;
    const previousScheme = html.style.colorScheme;
    let meta = document.querySelector('meta[name="theme-color"]');
    const created = !meta;
    const previousContent = meta ? meta.getAttribute('content') : null;
    if (created) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    metaRef.current = meta;
    return () => {
      body.style.backgroundColor = previousBg;
      html.style.colorScheme = previousScheme;
      if (created) meta.remove();
      else if (previousContent === null) meta.removeAttribute('content');
      else meta.setAttribute('content', previousContent);
      metaRef.current = null;
    };
  }, []);

  // (2) Apply the current theme to them.
  useLayoutEffect(() => {
    document.body.style.backgroundColor = THEME_BG[theme];
    document.documentElement.style.colorScheme = theme;
    metaRef.current?.setAttribute('content', THEME_BG[theme]);
  }, [theme]);

  // Keep other open /dev tabs in step when the theme changes in one.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== THEME_KEY && event.key !== null) return;
      setTheme(isTheme(event.newValue) ? event.newValue : 'dark');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = () => {
    // Worked out once, so storage and state always agree.
    const next = isDark ? 'light' : 'dark';
    writeStoredTheme(next);
    const root = rootRef.current;
    const commit = () => {
      root?.setAttribute('data-theme-switching', '');
      flushSync(() => setTheme(next));
      if (root) {
        // Apply the new theme while transitions are held, then release them.
        void getComputedStyle(root).color;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => root.removeAttribute('data-theme-switching'));
        });
      }
    };
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion && typeof document.startViewTransition === 'function') {
      // Called as a method, callback form: the browser cross-fades a
      // snapshot of the old theme into the new one.
      document.startViewTransition(commit);
    } else {
      commit();
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <style>{CSS}</style>

      <div className="sh-root" id="sh-top" ref={rootRef} data-theme={theme}>
        <header className="sh-bar">
          <div className="sh-wrap sh-bar-inner">
            <a className="sh-brand" href="/" aria-label="SHRI-AI home">
              <img src="/shri-ai-logo.webp" alt="" draggable={false} />
              <b>SHRI-Health</b>
            </a>
            <button
              type="button"
              className="sh-theme"
              onClick={toggleTheme}
              aria-label={switchLabel}
              title={switchLabel}
            >
              <Moon className="sh-theme-icon sh-theme-moon" size={18} strokeWidth={1.8} aria-hidden="true" />
              <Sun className="sh-theme-icon sh-theme-sun" size={18} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </header>

        <main className="sh-main">
          <motion.section className="sh-wrap" aria-labelledby="sh-title" {...RISE}>
            <div className="sh-banner-text">
              <div className="sh-meta">
                <span className="sh-maker">
                  <img src="/shri-ai-logo.webp" alt="" draggable={false} />
                  A product of SHRI-AI
                </span>
              </div>
              <h1 className="sh-title" id="sh-title" ref={titleRef} tabIndex={-1}>
                SHRI-<span className="sh-title-em">Health</span>
              </h1>
              <p className="sh-lede">
                One connected care platform for care entry, clinicians, pharmacy,
                laboratory and procurement management.
              </p>
              <p className="sh-quick-label" id="sh-quick-label">Open a demo</p>
              <ul className="sh-quick" aria-labelledby="sh-quick-label">
                {MODULES.filter((m) => m.demoUrl).map(({ id, label, Icon, accent, accentRgb, demoUrl }) => (
                  <li key={id}>
                    <a className="sh-chip" href={demoUrl} style={{ '--m': accent, '--m-rgb': accentRgb }}>
                      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <section className="sh-wrap" aria-labelledby="sh-modules-heading">
            <div className="sh-head">
              <p className="sh-kicker">Modules</p>
              <h2 className="sh-heading" id="sh-modules-heading">Open a module</h2>
            </div>

            {/* The row animates in as a whole: cards waiting off-screen in the
                swipe row would otherwise never be "in view" to appear. */}
            <motion.div className="sh-modules" {...RISE}>
              {MODULES.map(({ id, label, desc, points, image, imageAlt, accent, demoUrl }) => (
                <div key={id} className="sh-module">
                  <NotchedProjectCard
                    href={demoUrl || undefined}
                    ariaLabel={`Open the ${label} demo`}
                    title={label}
                    description={desc}
                    image={image}
                    imageAlt={imageAlt}
                    imageWidth={1200}
                    imageHeight={900}
                    badge={demoUrl ? undefined : 'Coming soon'}
                    tags={points}
                    accent={accent}
                    tone={theme}
                    framed
                  />
                </div>
              ))}
            </motion.div>
          </section>

          <motion.section className="sh-wrap sh-flow" aria-labelledby="sh-flow-heading" {...RISE}>
            <div className="sh-head">
              <p className="sh-kicker">How it works</p>
              <h2 className="sh-heading" id="sh-flow-heading">From registration to results</h2>
            </div>
            <ol className="sh-steps">
              {FLOW.map((step, i) => {
                const first = byId[step.modules[0]];
                const next = FLOW[i + 1] ? byId[FLOW[i + 1].modules[0]] : first;
                return (
                  <li key={step.label} className="sh-step" style={{ '--s-a': first.accent, '--s-b': next.accent }}>
                    <span className="sh-step-icons" aria-hidden="true">
                      {step.modules.map((mid) => {
                        const { Icon, accent } = byId[mid];
                        return <Icon key={mid} size={22} strokeWidth={1.7} style={{ '--ic': accent }} />;
                      })}
                    </span>
                    <span className="sh-step-label">{step.label}</span>
                    <span className="sh-step-note">{step.note}</span>
                  </li>
                );
              })}
            </ol>
          </motion.section>
        </main>

        <footer className="sh-foot">
          <div className="sh-wrap sh-foot-inner">
            <span>SHRI-Health is a product of SHRI-AI, Senus Healthcare Research Institute · {BUILD_VERSION}</span>
            <a href="#sh-top">
              Back to top
              <ArrowUp size={13} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
};

export default ShriHealth;
