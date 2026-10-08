import { useEffect, useRef } from 'react';
import { m, MotionConfig } from 'framer-motion';
import {
  BellRing, CalendarClock, ClipboardPlus, FlaskConical, PackageCheck, Pill, Stethoscope,
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
 * photos are from Pexels and Unsplash (both licences: free for commercial
 * use, no attribution required), built by `npm run images` into 1200x900 and 640x480 WebP in
 * public/images/shri-health/. image-src/shri-health/sources.json records each
 * photo's source, photographer and licence, and is the place to swap one.
 *
 * Demo URLs end in a slash: each demo is served as a directory, and the bare
 * path would cost a redirect before the page starts loading.
 *
 * The page is light only, like the rest of the site.
 */

/* Both built sizes of a card photo, for <img srcset>. */
const photo = (name) => ({
  image: `/images/shri-health/${name}.webp`,
  imageSrcSet: `/images/shri-health/${name}-640.webp 640w, /images/shri-health/${name}.webp 1200w`,
});
// The card photo's rendered width: a fixed ~300px card in the swipe row
// below 1200px, about a fifth of the screen above it.
const PHOTO_SIZES = '(max-width: 1199px) 300px, 19vw';

const MODULES = [
  {
    id: 'care-entry',
    ...photo('care-entry'), // Pexels 7108329, Pavel Danilyuk
    imageAlt: 'A receptionist helping two patients at a bright clinic reception desk',
    label: 'Care Entry',
    desc: 'Patient registration, intake and visit check-in.',
    Icon: ClipboardPlus,
    accent: '#b52a6b',
    demoUrl: 'https://www.shri-ai.org/dev/care-entry/',
  },
  {
    id: 'doctor',
    ...photo('clinician'), // Pexels 39192356, Vitaly Gariev
    imageAlt: "A doctor with a stethoscope measuring a senior patient's blood pressure at a clinic desk",
    label: 'Clinician',
    desc: 'Patient records, consultations and care notes.',
    Icon: Stethoscope,
    accent: '#3A82C4',
    demoUrl: 'https://www.shri-ai.org/dev/clinician/',
  },
  {
    id: 'pharma',
    ...photo('pharmacy'), // Unsplash 1642055514517-7b52288890ec, Árpád Czapp
    imageAlt: 'Pharmacy aisles with shelves fully stocked with medicine boxes',
    label: 'Pharmacy',
    desc: 'Prescriptions, dispensing and medicine stock.',
    Icon: Pill,
    accent: '#7B6FCD',
    demoUrl: 'https://www.shri-ai.org/dev/pharmacy/',
  },
  {
    id: 'laboratory',
    ...photo('lab'), // Pexels 4031692, Edward Jenner
    imageAlt: 'A laboratory scientist in a white coat and blue gloves at a lab bench with glassware',
    label: 'Lab',
    desc: 'Samples, tests and result reporting.',
    Icon: FlaskConical,
    accent: '#1f9163',
    demoUrl: 'https://www.shri-ai.org/dev/laboratory/',
  },
  {
    id: 'procurement',
    ...photo('procurement'), // Pexels 31112245, EqualStock IN
    imageAlt: 'A worker managing stock in a medical supply warehouse aisle lined with blue bins',
    label: 'Procurement',
    desc: 'Purchase orders, vendors and supply tracking.',
    Icon: PackageCheck,
    accent: '#a8690f',
    demoUrl: 'https://www.shri-ai.org/dev/procurement/',
  },
];

const byId = Object.fromEntries(MODULES.map((m) => [m.id, m]));

/* How a visit moves through the platform, left to right: the four modules,
   with reminders and follow-up as steps of their own after pharmacy and lab.
   Module steps take their icons and colour from the module; the two extra
   steps carry their own. */
const FLOW = [
  { modules: ['care-entry'], label: 'Care Entry', note: 'Registration & triage' },
  { modules: ['doctor'], label: 'Clinician', note: 'Consultation & orders' },
  { modules: ['pharma', 'laboratory'], label: 'Pharmacy & Lab', note: 'Dispensing & tests' },
  { icons: [{ Icon: BellRing, accent: '#0e94b0' }], label: 'Reminders', note: 'Appointments, refills & results' },
  { icons: [{ Icon: CalendarClock, accent: '#e2683c' }], label: 'Follow-up', note: 'Visits & check-ins' },
  { modules: ['procurement'], label: 'Procurement', note: 'Stock & suppliers' },
].map((step) => ({ ...step, icons: step.icons ?? step.modules.map((id) => byId[id]) }));

const EASE = [0.22, 1, 0.36, 1];
// One shared object for every section's entrance; once:true means nothing
// already shown replays.
const RISE = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: EASE },
};

const CSS = `
        .sh-root {
          color-scheme: light;
          --sh-bg: #ffffff;
          --sh-text: var(--ink);
          --sh-soft: var(--ink-soft);
          --sh-muted: var(--ink-muted);
          --sh-line: rgba(20, 20, 30, 0.08);
          --sh-glow-blue: rgba(58, 130, 196, 0.1);
          --sh-glow-violet: rgba(123, 111, 205, 0.09);
          --sh-glow-green: rgba(31, 145, 99, 0.07);
          --sh-bar-bg: rgba(255, 255, 255, 0.88);
          --sh-foot-bg: rgba(255, 255, 255, 0.6);
          --sh-title-g1: #7B6FCD;
          --sh-title-g2: #3A82C4;
          --sh-title-g3: #a8690f;
          --sh-scrollbar: rgba(20, 20, 30, 0.25);
          --sh-track-opacity: 0.55;
          --sh-focus: #3A82C4;
          /* Slimmer side margins than the rest of the site, so the page's
             containers use as much of the screen as possible. */
          --sh-gutter: clamp(0.9rem, 2.5vw, 2.5rem);

          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          /* Soft colour glows over the white base. It scrolls with
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
          min-height: calc(var(--sh-plate) + 20px);
        }
        /* Brands: SHRI-AI (home) at the left, the partner, Indo States
           Health, in the right-most corner; both plain, straight on the bar.
           Every size follows --sh-plate (50px: a 46px SHRI-AI mark and a
           38px-tall partner logo). */
        .sh-bar { --sh-plate: 50px; }
        .sh-brands { display: flex; align-items: center; gap: 0.875rem; min-width: 0; }
        .sh-brand,
        .sh-partner {
          flex: none;
          display: inline-flex;
          align-items: center;
          height: var(--sh-plate);
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .sh-brand { width: var(--sh-plate); justify-content: center; }
        .sh-brand img {
          display: block;
          width: calc(var(--sh-plate) - 4px);
          height: calc(var(--sh-plate) - 4px);
          object-fit: contain;
        }
        .sh-partner img { display: block; width: auto; height: calc(var(--sh-plate) * 0.762); }
        @media (hover: hover) {
          .sh-brand:hover,
          .sh-partner:hover { opacity: 0.8; }
        }
        .sh-wordmark {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 1.375rem;
          font-weight: var(--fw-medium);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

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
        /* A slightly shorter card than the component's default: a 16:11
           photo instead of 4:3 (the 4:3 images just lose a sliver top and
           bottom) and a little less frame padding. */
        .sh-module .npc-cover { aspect-ratio: 16 / 11; }
        .sh-module .npc--framed { padding: 7px 7px 14px; }
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
          grid-template-columns: repeat(6, minmax(0, 1fr));
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
        .sh-step-icons svg { color: var(--ic); }
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

        /* One focus ring for every link and button on the page, cards
           included. */
        .sh-root a:focus-visible, .sh-root button:focus-visible { outline: 2px solid var(--sh-focus); outline-offset: 3px; }

        /* ── Responsive ── */
        /* Narrow screens: the H1 already names the page, so the wordmark
           makes room, and the logos scale with the width so both always fit
           on one line (full size from 360px). */
        @media (max-width: 540px) {
          .sh-wordmark { display: none; }
          .sh-bar { --sh-plate: clamp(40px, 14vw, 50px); }
        }
        @media (max-width: 1023px) {
          .sh-steps { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 1.5rem; }
        }
        @media (max-width: 640px) {
          .sh-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 1.5rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sh-title-em { animation: none; }
          .sh-brand, .sh-partner { transition: none; }
        }

`;

const ShriHealth = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'SHRI-Health | SHRI-AI';
    titleRef.current?.focus({ preventScroll: true });
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <style>{CSS}</style>

      <div className="sh-root">
        <header className="sh-bar">
          <div className="sh-wrap sh-bar-inner">
            <div className="sh-brands">
              <a className="sh-brand" href="/" aria-label="SHRI-AI home">
                <img src="/images/brand/shri-ai-logo.webp" alt="" width={46} height={46} draggable={false} />
              </a>
              <b className="sh-wordmark">SHRI-Health</b>
            </div>
            <a
              className="sh-partner"
              href="https://indostates.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Indo States Health (opens in a new tab)"
            >
              <img
                src="/images/shri-health/logo-indostates.webp"
                alt="Indo States Health"
                width={156}
                height={38}
                draggable={false}
              />
            </a>
          </div>
        </header>

        <main className="sh-main">
          <m.section className="sh-wrap" aria-labelledby="sh-title" {...RISE}>
            <div className="sh-banner-text">
              <div className="sh-meta">
                <span className="sh-maker">
                  <img src="/images/brand/shri-ai-logo.webp" alt="" draggable={false} />
                  A initiative of SHRI-AI
                </span>
              </div>
              <h1 className="sh-title" id="sh-title" ref={titleRef} tabIndex={-1}>
                SHRI-<span className="sh-title-em">Health</span>
              </h1>
              <p className="sh-lede">
                One connected care platform for care entry, clinicians, pharmacy,
                laboratory and procurement management.
              </p>
            </div>
          </m.section>

          <section className="sh-wrap" aria-labelledby="sh-modules-heading">
            <div className="sh-head">
              <p className="sh-kicker">Modules</p>
              <h2 className="sh-heading" id="sh-modules-heading">Open a module</h2>
            </div>

            {/* The row animates in as a whole: cards waiting off-screen in the
                swipe row would otherwise never be "in view" to appear. */}
            <m.div className="sh-modules" {...RISE}>
              {MODULES.map(({ id, label, desc, image, imageSrcSet, imageAlt, accent, demoUrl }) => (
                <div key={id} className="sh-module">
                  <NotchedProjectCard
                    href={demoUrl || undefined}
                    ariaLabel={`Open the ${label} demo`}
                    title={label}
                    description={desc}
                    image={image}
                    imageSrcSet={imageSrcSet}
                    imageSizes={PHOTO_SIZES}
                    imageAlt={imageAlt}
                    imageWidth={1200}
                    imageHeight={900}
                    badge={demoUrl ? undefined : 'Coming soon'}
                    accent={accent}
                    framed
                  />
                </div>
              ))}
            </m.div>
          </section>

          <m.section className="sh-wrap sh-flow" aria-labelledby="sh-flow-heading" {...RISE}>
            <div className="sh-head">
              <p className="sh-kicker">How it works</p>
              <h2 className="sh-heading" id="sh-flow-heading">From registration to follow-up</h2>
            </div>
            <ol className="sh-steps">
              {FLOW.map((step, i) => {
                const accent = step.icons[0].accent;
                const nextAccent = (FLOW[i + 1] ?? FLOW[0]).icons[0].accent;
                return (
                  <li key={step.label} className="sh-step" style={{ '--s-a': accent, '--s-b': nextAccent }}>
                    <span className="sh-step-icons" aria-hidden="true">
                      {step.icons.map(({ Icon, accent: ic }, j) => (
                        <Icon key={`${step.label}-${j}`} size={22} strokeWidth={1.7} style={{ '--ic': ic }} />
                      ))}
                    </span>
                    <span className="sh-step-label">{step.label}</span>
                    <span className="sh-step-note">{step.note}</span>
                  </li>
                );
              })}
            </ol>
          </m.section>
        </main>

        <footer className="sh-foot">
          <div className="sh-wrap sh-foot-inner">
            <span>SHRI-Health is a product of SHRI-AI, Senus Healthcare Research Institute · {BUILD_VERSION}</span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
};

export default ShriHealth;
