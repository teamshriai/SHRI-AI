import { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ClipboardPlus, FlaskConical, Layers, MonitorPlay,
  PackageCheck, Pill, Sparkles, Stethoscope,
} from 'lucide-react';

/**
 * /dev — product page for SHRI-Health, a product of SHRI-AI: an intro banner,
 * the platform's five modules and a short strip showing how they connect.
 *
 * Every module carries a demoUrl and links straight to its live demo. The
 * whole card is the link: the "View Demo" action stretches over the card
 * (.sh-demo::after), so the card keeps its own heading and list and there is
 * still one tab stop per module. A module whose demoUrl is null shows "Demo
 * coming soon" in place instead of leading to a dead page.
 *
 * Demo URLs end in a slash: each demo is served as a directory, and the bare
 * path would cost a redirect before the page starts loading.
 */

const MODULES = [
  {
    id: 'care-entry',
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
    label: 'Doctor',
    desc: 'Patient records, consultations and care notes.',
    points: ['Electronic health records', 'Consultation notes', 'Orders & prescriptions'],
    Icon: Stethoscope,
    accent: '#3A82C4',
    accentRgb: '58, 130, 196',
    demoUrl: 'https://www.shri-ai.org/dev/clinician/',
  },
  {
    id: 'pharma',
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

/* The patient's path through the platform, left to right. Each step's track
   blends from its own accent into the next step's. */
const FLOW = [
  { key: 'entry', modules: ['care-entry'], label: 'Care Entry', note: 'Registration & triage' },
  { key: 'doctor', modules: ['doctor'], label: 'Doctor', note: 'Consultation & orders' },
  { key: 'fulfil', modules: ['pharma', 'laboratory'], label: 'Pharmacy & Lab', note: 'Dispensing & tests' },
  { key: 'supply', modules: ['procurement'], label: 'Procurement', note: 'Stock & suppliers' },
];

const FACTS = [
  { Icon: Layers, label: '5 connected modules', a: '#5c9bd6', b: '#3A82C4', rgb: '58, 130, 196' },
  { Icon: MonitorPlay, label: 'Live demos', a: '#9c92e0', b: '#7B6FCD', rgb: '123, 111, 205' },
  { Icon: Sparkles, label: 'Built by SHRI-AI', a: '#5cc79a', b: '#1f9163', rgb: '31, 145, 99' },
];

const EASE = [0.22, 1, 0.36, 1];
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: i * 0.07, ease: EASE },
});

const ShriHealth = () => {
  const [requested, setRequested] = useState(() => new Set());
  const titleRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'SHRI-Health | SHRI-AI';
    titleRef.current?.focus({ preventScroll: true });
    return () => { document.title = previousTitle; };
  }, []);

  const request = (id) => setRequested((prev) => new Set(prev).add(id));

  return (
    <MotionConfig reducedMotion="user">
      <style>{`
        .sh-root {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          /* Soft washes in the site's accent colours, low enough to stay a
             white page. */
          background:
            radial-gradient(ellipse 55% 42% at 6% 0%, rgba(58, 130, 196, 0.1), transparent 70%),
            radial-gradient(ellipse 50% 38% at 96% 6%, rgba(123, 111, 205, 0.09), transparent 70%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(31, 145, 99, 0.07), transparent 70%),
            var(--surface);
          font-family: var(--font-sans);
          color: var(--ink);
        }

        /* ── Top bar ── */
        .sh-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem var(--gutter);
          border-bottom: 1px solid rgba(20, 20, 30, 0.07);
        }
        .sh-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--ink);
          text-decoration: none;
          min-width: 0;
        }
        .sh-brand img { width: 35px; height: 35px; object-fit: contain; display: block; flex-shrink: 0; }
        .sh-brand span {
          font-size: 0.95rem;
          font-weight: var(--fw-medium);
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .sh-back {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.52rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(20, 20, 30, 0.14);
          color: var(--ink);
          text-decoration: none;
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .sh-back:hover { background: #f2f1ee; border-color: rgba(20, 20, 30, 0.24); }

        .sh-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(3rem, 6vw, 4.75rem);
          padding: clamp(1.5rem, 4vw, 3rem) var(--gutter) clamp(3rem, 6vw, 5rem);
        }
        .sh-wrap {
          width: min(100%, 1280px);
          margin-inline: auto;
        }

        /* ── Intro: text left, the building right ── */
        .sh-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
          gap: clamp(1rem, 3vw, 3rem);
          min-height: clamp(300px, 28vw, 420px);
        }
        .sh-intro-text {
          align-self: center;
          min-width: 0;
        }
        .sh-eyebrow {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1f9163;
          font-weight: var(--fw-medium);
          margin: 0 0 1.1rem;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          background: rgba(31, 145, 99, 0.08);
        }
        .sh-title {
          font-weight: 300;
          font-size: clamp(2.6rem, 6vw, 4.25rem);
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin: 0 0 1.1rem;
          outline: none;
        }
        /* Same gradient as "Healthcare" in the home hero, held still. */
        .sh-title-em {
          font-weight: var(--fw-regular);
          background: linear-gradient(135deg, #7B6FCD 0%, #3A82C4 50%, #D4891E 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sh-lede {
          font-weight: 300;
          font-size: clamp(0.98rem, 1.4vw, 1.12rem);
          line-height: 1.65;
          color: var(--ink-muted);
          max-width: 46ch;
          margin: 0;
        }
        .sh-facts {
          list-style: none;
          margin: clamp(1.4rem, 2.4vw, 1.9rem) 0 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.6rem;
        }
        .sh-fact {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: var(--fs-xs);
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .sh-fact span {
          flex: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: linear-gradient(145deg, var(--f-a), var(--f-b));
          box-shadow: 0 4px 10px -4px rgba(var(--f-rgb), 0.65);
        }
        /* The building fills its column, shown whole, fading out left, right
           and along the cut bottom edge — as in the home banner. */
        .sh-intro-media {
          position: relative;
          min-height: 220px;
        }
        .sh-intro-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: 50% 100%;
          opacity: 0.85;
          -webkit-mask-image:
            linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%),
            linear-gradient(180deg, #000 0%, #000 80%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%),
            linear-gradient(180deg, #000 0%, #000 80%, transparent 100%);
          mask-composite: intersect;
        }

        /* ── Section headings ── */
        .sh-head { margin: 0 0 clamp(1.25rem, 2.4vw, 1.75rem); }
        .sh-kicker {
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: #9a9aab;
          margin: 0 0 0.55rem;
        }
        .sh-heading {
          font-weight: var(--fw-light);
          font-size: clamp(1.45rem, 2.6vw, 2rem);
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: var(--ink);
          margin: 0;
        }

        /* ── Module cards ── */
        .sh-modules {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(0.85rem, 1.4vw, 1.15rem);
        }
        .sh-module {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          overflow: hidden;
          padding: calc(clamp(1.3rem, 2vw, 1.6rem) + 5px) clamp(1.15rem, 1.6vw, 1.4rem) clamp(1.15rem, 1.6vw, 1.4rem);
          text-align: left;
          background:
            linear-gradient(to bottom, rgba(var(--m-accent-rgb), 0.06), rgba(var(--m-accent-rgb), 0) 45%),
            #fff;
          border: 1px solid rgba(20, 20, 30, 0.08);
          border-radius: 0;
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 10px 26px rgba(20, 20, 30, 0.05);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .sh-module::before {
          content: '';
          position: absolute;
          inset: 0 0 auto;
          height: 5px;
          background: var(--m-accent);
        }
        .sh-module:hover,
        .sh-module:focus-within {
          border-color: rgba(var(--m-accent-rgb), 0.3);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 20px 44px rgba(var(--m-accent-rgb), 0.16);
        }
        .sh-module-num {
          position: absolute;
          top: calc(5px + clamp(1.05rem, 1.6vw, 1.3rem));
          right: clamp(1.05rem, 1.5vw, 1.3rem);
          font-size: 0.74rem;
          font-weight: var(--fw-medium);
          letter-spacing: 0.08em;
          font-variant-numeric: tabular-nums;
          color: rgba(var(--m-accent-rgb), 0.6);
        }
        /* Free-standing icon, no tile. */
        .sh-module-icon {
          display: inline-flex;
          line-height: 0;
          color: var(--m-accent);
          margin-bottom: 1rem;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sh-module:hover .sh-module-icon { transform: scale(1.08); }
        .sh-module-label {
          font-size: clamp(1.05rem, 1.3vw, 1.18rem);
          font-weight: var(--fw-medium);
          letter-spacing: -0.015em;
          line-height: 1.25;
          margin: 0 0 0.4rem;
          overflow-wrap: anywhere;
        }
        .sh-module-desc {
          font-size: 0.84rem;
          font-weight: 300;
          color: var(--ink-muted);
          line-height: 1.55;
          margin: 0 0 1rem;
        }
        .sh-module-points {
          list-style: none;
          margin: 0 0 1.35rem;
          padding: 0;
          display: grid;
          gap: 0.45rem;
        }
        .sh-module-points li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          line-height: 1.35;
          color: var(--ink-soft);
        }
        .sh-module-points li::before {
          content: '';
          flex: none;
          width: 10px;
          height: 2px;
          background: linear-gradient(90deg, var(--m-accent), rgba(var(--m-accent-rgb), 0.35));
        }
        .sh-demo {
          margin-top: auto;
          align-self: stretch;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          min-height: 42px;
          padding: 0.65rem 1rem;
          border-radius: 0;
          border: 0;
          font: inherit;
          font-size: 0.8rem;
          font-weight: var(--fw-medium);
          color: #fff;
          background: var(--m-accent);
          text-decoration: none;
          cursor: pointer;
          /* Hover brightens with an inset white wash, never \`filter\`: a filter
             would make this button the containing block of its ::after and
             shrink the card-wide click area to the button itself. */
          box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0);
          transition: box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        /* Stretched link: a click anywhere on the card is a click on this. */
        .sh-demo::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .sh-demo svg { transition: transform 0.25s ease; }
        .sh-module:hover .sh-demo,
        .sh-module:focus-within .sh-demo { box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.12); }
        .sh-module:hover .sh-demo svg,
        .sh-module:focus-within .sh-demo svg { transform: translateX(3px); }
        .sh-demo[data-soon='true'] {
          color: color-mix(in srgb, var(--m-accent) 72%, #000);
          background: rgba(var(--m-accent-rgb), 0.12);
          cursor: default;
        }
        .sh-module:hover .sh-demo[data-soon='true'] { box-shadow: none; }
        .sh-demo[data-soon='true']::after { cursor: default; }
        /* The button's own label already changes, so the status line is
           for screen readers only. */
        .sh-note {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }

        /* ── How it connects ── */
        .sh-flow {
          padding-top: clamp(2rem, 4vw, 3rem);
          border-top: 1px solid rgba(20, 20, 30, 0.07);
        }
        .sh-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.75rem, 1.6vw, 1.25rem);
        }
        .sh-step {
          position: relative;
          min-width: 0;
          padding-top: 1.35rem;
        }
        /* The track: one segment per step, blending into the next step's
           colour, with a dot where the step begins. */
        .sh-step::before {
          content: '';
          position: absolute;
          inset: 0 0 auto;
          height: 2px;
          background: linear-gradient(90deg, var(--s-a), var(--s-b));
          opacity: 0.55;
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
        }
        .sh-step-icons {
          display: flex;
          gap: 0.45rem;
          line-height: 0;
          margin-bottom: 0.7rem;
        }
        .sh-step-label {
          display: block;
          font-size: 0.95rem;
          font-weight: var(--fw-medium);
          letter-spacing: -0.01em;
          color: var(--ink);
        }
        .sh-step-note {
          display: block;
          margin-top: 0.2rem;
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--ink-muted);
        }
        .sh-flow-text {
          margin: clamp(1.4rem, 2.4vw, 1.9rem) 0 0;
          max-width: 72ch;
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.65;
          color: var(--ink-muted);
        }

        .sh-demo:focus-visible, .sh-back:focus-visible, .sh-brand:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
        }

        .sh-foot {
          padding: 1.25rem var(--gutter);
          text-align: center;
          font-size: 0.75rem;
          color: #9a9aab;
          border-top: 1px solid rgba(20, 20, 30, 0.06);
        }

        /* Five in a row needs ~200px per card for its button and points; below
           that the grid drops to two columns and the page narrows with it. */
        @media (max-width: 1200px) {
          .sh-section, .sh-flow { width: min(100%, 760px); }
          .sh-modules { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          /* Five cards in two columns: the first spans the row, so it reads
             1 + 2 + 2 rather than leaving the last card on its own. */
          .sh-module:first-child { grid-column: 1 / -1; }
        }
        @media (min-width: 561px) and (max-width: 1200px) {
          /* The wide first card sets its points out in a row. */
          .sh-module:first-child .sh-module-points {
            grid-auto-flow: column;
            justify-content: start;
            gap: 0.45rem 1.5rem;
          }
        }
        @media (max-width: 1000px) {
          .sh-intro { grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr); }
        }
        @media (max-width: 640px) {
          /* Phones: no room beside the heading, so the building goes rather
             than sitting under the text. */
          .sh-intro { grid-template-columns: minmax(0, 1fr); min-height: 0; }
          .sh-intro-media { display: none; }
          .sh-fact { white-space: normal; }
          /* The track turns vertical: a line down the left of each step. */
          .sh-steps { grid-template-columns: minmax(0, 1fr); gap: 0; }
          .sh-step { padding: 0 0 1.35rem 1.4rem; }
          .sh-step::before {
            inset: 0 auto 0 3px;
            width: 2px;
            height: auto;
            background: linear-gradient(180deg, var(--s-a), var(--s-b));
          }
          .sh-step::after { top: 0; left: 0; }
          .sh-step:last-child { padding-bottom: 0; }
          .sh-step:last-child::before { display: none; }
        }
        @media (max-width: 560px) {
          .sh-modules { grid-template-columns: minmax(0, 1fr); }
        }
        @media (max-width: 380px) {
          .sh-brand span { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sh-module, .sh-back, .sh-demo, .sh-demo svg, .sh-module-icon { transition: none; }
          .sh-module:hover .sh-module-icon,
          .sh-module:hover .sh-demo svg,
          .sh-module:focus-within .sh-demo svg { transform: none; }
        }
      `}</style>

      <div className="sh-root">
        <header className="sh-bar">
          <a className="sh-brand" href="/" aria-label="SHRI-AI home">
            <img src="/shri-ai-logo.webp" alt="" draggable={false} />
            <span>SHRI-AI</span>
          </a>
          <a className="sh-back" href="/">
            <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
            Back to SHRI-AI
          </a>
        </header>

        <main className="sh-main">
          <section className="sh-wrap sh-intro">
            <motion.div className="sh-intro-text" {...rise(0)}>
              <p className="sh-eyebrow">A product of SHRI-AI</p>
              <h1 className="sh-title" ref={titleRef} tabIndex={-1}>
                SHRI-<span className="sh-title-em">Health</span>
              </h1>
              <p className="sh-lede">
                One connected care platform for care entry, doctors, pharmacy,
                laboratory and procurement management.
              </p>
              <ul className="sh-facts">
                {FACTS.map(({ Icon, label, a, b, rgb }) => (
                  <li key={label} className="sh-fact" style={{ '--f-a': a, '--f-b': b, '--f-rgb': rgb }}>
                    <span aria-hidden="true"><Icon size={13} strokeWidth={2} /></span>
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="sh-intro-media" aria-hidden="true" {...rise(1)}>
              <img src="/banner-hospital.webp" alt="" draggable={false} width={1600} height={782} />
            </motion.div>
          </section>

          <section className="sh-wrap sh-section" aria-labelledby="sh-modules-heading">
            <motion.div className="sh-head" {...rise(0)}>
              <p className="sh-kicker">Platform modules</p>
              <h2 className="sh-heading" id="sh-modules-heading">Open any module to try its live demo</h2>
            </motion.div>

            <div className="sh-modules">
              {MODULES.map(({ id, label, desc, points, Icon, accent, accentRgb, demoUrl }, i) => {
                const soon = requested.has(id);
                return (
                  <motion.article
                    key={id}
                    className="sh-module"
                    style={{ '--m-accent': accent, '--m-accent-rgb': accentRgb }}
                    {...rise(i)}
                    whileHover={{ y: -4, transition: { duration: 0.35, ease: EASE } }}
                  >
                    <span className="sh-module-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="sh-module-icon" aria-hidden="true">
                      <Icon size={28} strokeWidth={1.6} />
                    </span>
                    <h3 className="sh-module-label">{label}</h3>
                    <p className="sh-module-desc">{desc}</p>
                    <ul className="sh-module-points">
                      {points.map((point) => <li key={point}>{point}</li>)}
                    </ul>

                    {demoUrl ? (
                      <a className="sh-demo" href={demoUrl} aria-label={`View ${label} demo`}>
                        View Demo
                        <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                      </a>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="sh-demo"
                          data-soon={soon}
                          aria-label={`View ${label} demo`}
                          onClick={() => request(id)}
                        >
                          {soon ? 'Demo coming soon' : 'View Demo'}
                          {!soon && <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />}
                        </button>
                        <p className="sh-note" role="status" aria-live="polite">
                          {soon && 'Demo launching soon.'}
                        </p>
                      </>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </section>

          <motion.section className="sh-wrap sh-flow" aria-labelledby="sh-flow-heading" {...rise(0)}>
            <div className="sh-head">
              <p className="sh-kicker">How it connects</p>
              <h2 className="sh-heading" id="sh-flow-heading">From registration to results</h2>
            </div>
            <ol className="sh-steps">
              {FLOW.map((step, i) => {
                const first = byId[step.modules[0]];
                const next = FLOW[i + 1] ? byId[FLOW[i + 1].modules[0]] : first;
                return (
                  <li
                    key={step.key}
                    className="sh-step"
                    style={{ '--s-a': first.accent, '--s-b': next.accent }}
                  >
                    <span className="sh-step-icons" aria-hidden="true">
                      {step.modules.map((mid) => {
                        const { Icon, accent } = byId[mid];
                        return <Icon key={mid} size={24} strokeWidth={1.6} color={accent} />;
                      })}
                    </span>
                    <span className="sh-step-label">{step.label}</span>
                    <span className="sh-step-note">{step.note}</span>
                  </li>
                );
              })}
            </ol>
            <p className="sh-flow-text">
              Patients are registered and checked in at Care Entry, seen by the doctor, and
              served by the pharmacy and the lab, while procurement keeps medicines and
              supplies stocked.
            </p>
          </motion.section>
        </main>

        <footer className="sh-foot">
          SHRI-Health is a product of SHRI-AI, Senus Healthcare Research Institute.
        </footer>
      </div>
    </MotionConfig>
  );
};

export default ShriHealth;
