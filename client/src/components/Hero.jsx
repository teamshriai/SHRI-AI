import { useId } from 'react';
import { m, MotionConfig } from 'framer-motion';
import {
  Activity, ArrowRight, Brain, ChartColumn, ChevronRight, ClipboardList,
  Crosshair, Dna, HeartPulse, Radar, Scan, ScanLine, Users,
} from 'lucide-react';

/**
 * Home page hero.
 *
 * Content and structure come from the "Shri Health Home" Claude Design
 * mockup. The look is the site's own: a white ground, DM Sans at the three
 * system weights and the index.css tokens. Card accents are the brand colours
 * the old hero gave each platform's link.
 *
 * SHRI Health, the hospital platform and the current priority, leads the
 * platforms as a full-width featured card with its own dark look and
 * problem-first copy; Stroke AI and OncoTrace AI follow as two equal cards.
 *
 * Every illustration has its own box and never sits behind text: each card's
 * art is its own grid column beside the feature list (the reference layout),
 * and the banner's small building photo has its own zone at the right.
 * Images are exported at 2x into public/ and are always shown whole: object-
 * fit contain, with only a soft fade at the outer edges (or a drop shadow,
 * for transparent cut-outs).
 */

/* ── Emblems ──
   Fine line art with a two-stop accent gradient. The gradient lives in a
   zero-size sibling <svg> so it can also colour lucide icons (their stroke is
   the `color` prop). userSpaceOnUse keeps the gradient continuous across a
   drawing's separate paths instead of restarting on each path's own box. */

const RibbonArt = ({ paint }) => (
  <svg viewBox="4.5 1.5 15 21" width="46" height="46" fill="none" aria-hidden="true">
    <path
      d="M12 2.6C9.3 2.6 8.1 4.8 8.1 6.75c0 2.05 1.3 4.05 2.55 5.95L6.3 19.95l2.55 1.25L12 15.75l3.15 5.45 2.55-1.25-4.35-7.25c1.25-1.9 2.55-3.9 2.55-5.95C15.9 4.8 14.7 2.6 12 2.6Zm0 2.5c1.2 0 1.8.9 1.8 1.9 0 1.2-.75 2.6-1.8 4.1-1.05-1.5-1.8-2.9-1.8-4.1 0-1 .6-1.9 1.8-1.9Z"
      fill={paint}
      fillOpacity="0.18"
      fillRule="evenodd"
      stroke={paint}
      strokeWidth="1.35"
      strokeLinejoin="round"
    />
    {/* The fold where the two tails cross. */}
    <path d="M10.65 12.7l2.4 4.1" stroke={paint} strokeWidth="1.35" strokeLinecap="round" />
  </svg>
);

/* Hospital management: the building with a cross on its roof sign, a window
   grid and entrance — the SHRI HEALTH platform's mark. */
const HospitalArt = ({ paint }) => (
  <svg viewBox="1.5 1.5 21 21" width="46" height="46" fill="none" aria-hidden="true">
    <g stroke={paint} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 21V10.5A1.5 1.5 0 0 1 6 9h12a1.5 1.5 0 0 1 1.5 1.5V21"
        fill={paint}
        fillOpacity="0.14"
      />
      <rect x="8.5" y="2.75" width="7" height="6.25" rx="1.3" fill="#fff" />
      <path d="M12 4.1v3.5M10.25 5.85h3.5" />
      <path d="M7.25 12.25h2M14.75 12.25h2M7.25 15.25h2M14.75 15.25h2" />
      <path d="M10.4 21v-2.9a1.6 1.6 0 0 1 3.2 0V21" />
      <path d="M2.5 21h19" />
    </g>
  </svg>
);

const Emblem = ({ kind, className = '' }) => {
  const id = useId().replace(/:/g, '');
  const paint = `url(#${id})`;
  const art = {
    brain: <Brain size={46} strokeWidth={1.2} color={paint} aria-hidden="true" />,
    ribbon: <RibbonArt paint={paint} />,
    hospital: <HospitalArt paint={paint} />,
  }[kind];
  return (
    <span className={`hh-emblem ${className}`} aria-hidden="true">
      <svg width="0" height="0" style={{ position: 'absolute' }} focusable="false">
        <defs>
          <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="3" y1="2" x2="21" y2="22">
            <stop offset="0" style={{ stopColor: 'var(--c-accent-2)' }} />
            <stop offset="1" style={{ stopColor: 'var(--c-accent)' }} />
          </linearGradient>
        </defs>
      </svg>
      {art}
    </span>
  );
};

/* Accent set: stroke/fill colour, a lighter partner for gradients, the RGB
   triplet for alpha tints, and a button colour dark enough for white text. */
const accentVars = (accent, accent2, rgb, btn = accent) => ({
  '--c-accent': accent,
  '--c-accent-2': accent2,
  '--c-accent-rgb': rgb,
  '--c-btn': btn,
});

const PALETTE = [
  accentVars('#7B6FCD', '#a99ff0', '123, 111, 205'),
  accentVars('#3A82C4', '#7fb3e6', '58, 130, 196'),
  accentVars('#2aaa72', '#6fd1a4', '42, 170, 114'),
  accentVars('#D4891E', '#f0b866', '212, 137, 30'),
  accentVars('#b52a6b', '#e67aa6', '181, 42, 107'),
];

const HERO_POINTS = [
  { Icon: Crosshair, label: 'Early Detection', vars: PALETTE[1] },
  { Icon: Dna, label: 'Precision Diagnosis', vars: PALETTE[0] },
  { Icon: ChartColumn, label: 'Genomic Insights', vars: PALETTE[2] },
  { Icon: HeartPulse, label: 'Better Outcomes', vars: PALETTE[4] },
  { Icon: Users, label: 'Accessible to All', vars: PALETTE[3] },
  { Icon: Activity, label: 'Real-time Monitoring', vars: accentVars('#1f9e9a', '#6fd3cf', '31, 158, 154') },
];

const MODULE_CARDS = [
  {
    id: 'stroke',
    title: 'Stroke AI',
    tagline: 'AI for Faster Detection and Better Outcomes',
    emblem: 'brain',
    image: '/images/home/stroke-brain.webp',
    imageSize: [425, 460],
    // A transparent cut-out: shown as-is, with no edge fade.
    cutout: true,
    features: [
      { Icon: ScanLine, label: 'CT / MRI Analysis' },
      { Icon: Crosshair, label: 'Stroke Detection' },
      { Icon: ClipboardList, label: 'AI Assessment' },
      { Icon: ChartColumn, label: 'Monitoring & Follow-up' },
    ],
    cta: 'Stroke AI Platform',
    href: 'https://stroke-ai.org',
    external: true,
    vars: { ...accentVars('#2a6db5', '#6aa6e8', '42, 109, 181'), '--c-tint-1': '#dbe8fb', '--c-tint-2': '#f1f6ff' },
  },
  {
    id: 'oncotrace',
    title: 'OncoTrace AI',
    tagline: 'AI Imaging + NGS for Early Detection and Personalized Care',
    emblem: 'ribbon',
    image: '/images/home/oncotrace-breast.webp',
    imageSize: [358, 460],
    cutout: true,
    features: [
      { Icon: Radar, label: 'AI MRI Analysis' },
      { Icon: Scan, label: 'Mammography AI' },
      { Icon: Dna, label: 'NGS & Molecular Profiling' },
      { Icon: Activity, label: 'Risk Assessment' },
    ],
    cta: 'OncoTrace AI',
    href: 'https://oncotrace-ai.org',
    external: true,
    vars: { ...accentVars('#b52a6b', '#e67aa6', '181, 42, 107'), '--c-tint-1': '#fbe1ee', '--c-tint-2': '#f5ecfc' },
  },
];

/* SHRI Health: the hospital platform, featured ahead of the others. The
   paragraph names the problems hospitals have today, then what the platform
   does about them. The photo is the SHRI-Health page's own
   (image-src/shri-health). */
const FEATURED = {
  title: 'SHRI Health',
  subtitle: 'The Intelligent Hospital Platform',
  tagline: 'Connected Care. One Unified Experience.',
  para:
    'Built to raise the quality of care and the productivity of every team. Hospitals lose hours to registration queues, paperwork, orders lost between departments ' +
    'and medicines that run out or expire. SHRI Health connects every department, so patients ' +
    "register once, doctors spend more time with patients than on forms, pharmacy and lab work " +
    "straight from the doctor's orders, and stock is tracked before it runs short.",
  photo: 'clinician',
  cta: 'Explore SHRI Health',
  href: '/dev',
  vars: accentVars('#1f9163', '#5cc79a', '31, 145, 99', '#167a52'),
};
const featuredPhoto = (name) => ({
  src: `/images/shri-health/${name}.webp`,
  srcSet: `/images/shri-health/${name}-640.webp 640w, /images/shri-health/${name}.webp 1200w`,
});

const EASE = [0.22, 1, 0.36, 1];
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, delay: i * 0.09, ease: EASE },
});

const Hero = () => {
  return (
    <MotionConfig reducedMotion="user">
      <style>{`
        .hh-root {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          font-family: var(--font-sans);
          color: var(--ink);
          padding: clamp(96px, 9vw, 124px) 0 var(--section-pad-y);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .hh-root *, .hh-root *::before, .hh-root *::after { box-sizing: border-box; }

        .hh-wrap {
          position: relative;
          z-index: 1;
          /* Near full width like the reference layout, with a gutter wide
             enough that the containers breathe against the viewport edge. */
          margin: 0 auto;
          padding-inline: clamp(18px, 4.5vw, 84px);
        }

        /* Shared frosted surface. */
        .hh-surface {
          background: rgba(255, 255, 255, 0.66);
          -webkit-backdrop-filter: blur(14px) saturate(125%);
          backdrop-filter: blur(14px) saturate(125%);
          border: 1px solid rgba(20, 20, 40, 0.07);
          border-radius: 22px;
          box-shadow:
            inset 0 0 0 1px rgba(20, 20, 40, 0.03),
            0 1px 2px rgba(20, 20, 40, 0.04),
            0 26px 50px -30px rgba(40, 40, 90, 0.25);
        }

        /* ── Banner ──
           A rounded card the width of the card row, not full-bleed, in three
           zones: heading left, the six points as a centred 3 + 3 grid, and a
           small photo of the Indo States Health centre at the right, centred
           top to bottom. The equal side columns keep the points at the
           banner's true centre. Below 1280px the grid needs the full width,
           so it moves under the heading and photo. */
        .hh-banner {
          --bpad: clamp(1.25rem, 2vw, 1.9rem);
          --bpad-x: clamp(1.5rem, 3vw, 3rem);
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(20, 20, 40, 0.07);
          background: linear-gradient(90deg, rgba(221, 234, 251, 0.92) 0%, rgba(233, 242, 253, 0.84) 45%, rgba(242, 238, 252, 0.8) 100%);
          -webkit-backdrop-filter: blur(14px) saturate(125%);
          backdrop-filter: blur(14px) saturate(125%);
          box-shadow:
            inset 0 0 0 1px rgba(20, 20, 40, 0.03),
            0 1px 2px rgba(20, 20, 40, 0.04),
            0 26px 50px -30px rgba(40, 60, 120, 0.3);
        }
        /* Animated brand hairline along the banner's lower edge. */
        .hh-banner::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, #7B6FCD, #3A82C4, #2aaa72, #D4891E, #b52a6b, #7B6FCD);
          background-size: 200% 100%;
          animation: hhSlide 10s linear infinite;
          opacity: 0.55;
        }
        @keyframes hhSlide { to { background-position: 200% 0; } }

        .hh-banner-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
          grid-template-areas: "text points media";
          align-items: center;
          gap: clamp(1.25rem, 2.5vw, 2.5rem);
          min-height: clamp(170px, 11.5vw, 205px);
          padding: var(--bpad) var(--bpad-x);
        }
        .hh-banner-text { grid-area: text; min-width: 0; }
        .hh-title {
          margin: 0;
          font-size: var(--fs-h2);
          font-weight: var(--fw-light);
          letter-spacing: var(--ls-display);
          line-height: var(--lh-display);
          color: var(--ink);
        }
        .hh-title-em {
          font-weight: var(--fw-regular);
          background: linear-gradient(135deg, #7B6FCD 0%, #3A82C4 50%, #D4891E 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hhGradient 8s ease infinite;
        }
        @keyframes hhGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .hh-sub {
          margin: 0.75rem 0 0;
          font-size: var(--fs-lead);
          font-weight: var(--fw-light);
          line-height: var(--lh-body);
          color: var(--ink-soft);
        }
        /* Organisation status: stands out through weight, ink colour and the
           gradient on 501(c)(3), not a box. */
        .hh-org {
          margin: clamp(0.9rem, 1.4vw, 1.25rem) 0 0;
          font-size: var(--fs-body);
          font-weight: var(--fw-medium);
          line-height: 1.4;
          letter-spacing: -0.005em;
          color: var(--ink);
        }
        .hh-org-em {
          background: linear-gradient(135deg, #7B6FCD 0%, #3A82C4 55%, #D4891E 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* The building: a small photo in its own zone at the right,
           centred top to bottom. */
        .hh-banner-media {
          grid-area: media;
          justify-self: end;
          align-self: center;
          width: clamp(220px, 22vw, 400px);
        }
        /* The photo (the Indo States Health centre) is a cut-out with the sky
           removed, so it fades out at the left and right and only along the
           bottom, where the grounds are cut straight; the roofline stays
           crisp. The two fades are intersected, and it sits very slightly
           translucent so it reads as part of the banner. Its height follows
           from the width/height attributes, so nothing shifts as it loads.
           Source: UN_USED_FILES/client/assets-src/indostates-cutout-full.png,
           cropped to 2585x1173 at (169, 226) and exported at 1600w (q76) and
           800w (q80). */
        .hh-banner-media img {
          display: block;
          width: 100%;
          height: auto;
          opacity: 0.95;
          -webkit-mask-image:
            linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%),
            linear-gradient(180deg, #000 0%, #000 80%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%),
            linear-gradient(180deg, #000 0%, #000 80%, transparent 100%);
          mask-composite: intersect;
        }

        .hh-points {
          grid-area: points;
          justify-self: center;
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, max-content);
          justify-content: center;
          gap: 1rem clamp(1.5rem, 2.4vw, 2.5rem);
        }
        .hh-point {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          font-size: var(--fs-body);
          font-weight: var(--fw-regular);
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .hh-point span {
          flex: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: linear-gradient(145deg, var(--c-accent-2), var(--c-accent));
          box-shadow: 0 4px 10px -4px rgba(var(--c-accent-rgb), 0.65);
        }

        /* ── Body ── */
        .hh-body {
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 3.6vw, 3.5rem);
        }

        /* ── Module cards (reference layout) ──
           Header row, then a two-column middle — feature list left, render
           right — then a full-width button. The render has its own grid
           column and bleeds only to the card's right edge, so it can never
           sit under text at any width. */
        .hh-modules {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1.5rem, 2.6vw, 2.75rem);
        }
        .hh-card {
          --pad: clamp(1.1rem, 1.5vw, 1.55rem);
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          padding: var(--pad);
          /* Crisper corners than the shared 22px surface. */
          border-radius: 12px;
          background:
            radial-gradient(ellipse 55% 65% at 88% 55%, rgba(var(--c-accent-rgb), 0.16), transparent 70%),
            linear-gradient(110deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.64) 45%, var(--c-tint-1) 100%);
          transition: box-shadow 0.4s ease;
        }
        .hh-card:hover {
          box-shadow:
            inset 0 0 0 1px rgba(20, 20, 40, 0.03),
            0 1px 2px rgba(20, 20, 40, 0.04),
            0 34px 64px -30px rgba(var(--c-accent-rgb), 0.45);
        }
        .hh-card-head { display: flex; align-items: flex-start; gap: 1.1rem; }
        .hh-card-head > div { flex: 1; min-width: 0; padding-top: 0.15rem; }
        /* The emblem stands in open space — no tile around it; a soft accent
           shadow under the strokes gives it depth instead. */
        .hh-emblem {
          flex: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          filter: drop-shadow(0 6px 10px rgba(var(--c-accent-rgb), 0.28));
        }
        .hh-card-title {
          margin: 0;
          font-size: clamp(1.2rem, 1.55vw, 1.55rem);
          font-weight: var(--fw-medium);
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--c-btn);
        }
        .hh-card-tagline {
          margin: 0.35rem 0 0;
          font-size: var(--fs-sm);
          font-weight: var(--fw-light);
          line-height: 1.45;
          color: var(--ink-soft);
        }
        .hh-corner {
          flex: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--c-accent);
          background: #fff;
          box-shadow: 0 1px 2px rgba(20, 20, 40, 0.06), 0 6px 16px -8px rgba(var(--c-accent-rgb), 0.55);
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        /* Decorative only: the whole card is the link (see .hh-btn::after),
           so the chevron reacts to the card rather than being its own target. */
        .hh-card:hover .hh-corner,
        .hh-card:focus-within .hh-corner { transform: translateX(2px); background: var(--c-btn); color: #fff; }

        .hh-card-main {
          flex: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) clamp(110px, 40%, 270px);
          align-items: center;
          gap: 0.75rem;
          margin: 1.25rem calc(-1 * var(--pad)) 1.35rem 0;
        }
        .hh-features {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          min-width: 0;
        }
        .hh-features li {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          min-width: 0;
          font-size: var(--fs-sm);
          font-weight: var(--fw-regular);
          line-height: 1.35;
          color: var(--ink-soft);
        }
        /* Feature icons stand free — no tile — in the card's accent. */
        .hh-feat-icon {
          flex: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          color: var(--c-accent);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hh-features li:hover .hh-feat-icon { transform: scale(1.12); }
        /* The image box takes the image's own proportions (height auto), so
           nothing is cropped; the elliptical fade only softens the outer rim
           where the source was cut from the reference, never the subject. */
        .hh-card-img {
          position: relative;
          align-self: center;
          justify-self: center;
          width: 100%;
          max-width: 240px;
        }
        .hh-card-img img {
          display: block;
          width: auto;
          max-width: 100%;
          height: auto;
          /* A shared height cap keeps the three cards level even though the
             images differ slightly in proportion. */
          max-height: 210px;
          margin-inline: auto;
          -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 82%, transparent 100%);
          mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 82%, transparent 100%);
        }
        /* A transparent cut-out has no rectangular edge to soften, so it
           skips the fade and takes a soft accent shadow instead. */
        .hh-card-img img.is-cutout {
          -webkit-mask-image: none;
          mask-image: none;
          filter: drop-shadow(0 14px 22px rgba(var(--c-accent-rgb), 0.28));
        }
        .hh-btn {
          margin-top: auto;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          min-height: 44px;
          padding: 0.75rem 1.4rem;
          border: 0;
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0)),
            var(--c-btn);
          color: #fff;
          font-family: var(--font-sans);
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          letter-spacing: 0.01em;
          text-decoration: none;
          /* Hover brightens with an inset white wash, never \`filter\`: a filter
             would make this button the containing block of its ::after and
             shrink the card-wide click area to the button itself. */
          box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0), 0 10px 22px -12px rgba(var(--c-accent-rgb), 0.8);
          transition: box-shadow 0.25s ease;
        }
        .hh-btn svg { transition: transform 0.25s ease; }
        .hh-card:hover .hh-btn,
        .hh-card:focus-within .hh-btn { color: #fff; box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.1), 0 14px 28px -12px rgba(var(--c-accent-rgb), 0.9); }
        .hh-card:hover .hh-btn svg,
        .hh-card:focus-within .hh-btn svg { transform: translateX(3px); }
        /* Stretched link: the button's overlay covers the whole card, so a
           click anywhere on it follows the button. The card stays an article
           with its own heading and list; there is still one tab stop. */
        .hh-card .hh-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .hh-card .hh-btn {
          align-self: stretch;
          justify-content: center;
          min-height: 46px;
          border-radius: 8px;
          font-size: var(--fs-sm);
        }

        .hh-btn:focus-visible { outline: 2px solid #3A82C4; outline-offset: 3px; }

        /* ── Featured: SHRI Health ──
           Its own surface (deep hospital green, white type), not a variant of
           .hh-card, so the phone rule that unboxes the cards leaves it be.
           Text left; one photo fills the right side edge to edge and fades
           into the green, so the card reads as a single scene rather than
           framed pieces. The card itself is the link (one element, one tab
           stop, clickable edge to edge, photo included); the white pill is
           only its visual button. */
        .hh-feature {
          grid-column: 1 / -1;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
          align-items: stretch;
          border-radius: 20px;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: box-shadow 0.3s ease;
          background:
            radial-gradient(ellipse 60% 80% at 85% 40%, rgba(92, 199, 154, 0.32), transparent 70%),
            radial-gradient(ellipse 50% 60% at 0% 100%, rgba(58, 130, 196, 0.22), transparent 70%),
            linear-gradient(135deg, #0d3a2b 0%, #12573f 55%, #1f9163 100%);
          box-shadow:
            0 1px 2px rgba(10, 40, 30, 0.2),
            0 40px 70px -36px rgba(13, 58, 43, 0.75);
        }
        .hh-feature::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, #7B6FCD, #3A82C4, #2aaa72, #D4891E, #b52a6b, #7B6FCD);
          background-size: 200% 100%;
          animation: hhSlide 10s linear infinite;
          opacity: 0.8;
        }
        .hh-feature-text {
          position: relative;
          z-index: 1;
          min-width: 0;
          padding: clamp(1.75rem, 3.4vw, 3.5rem);
          padding-right: 0;
        }
        .hh-feature-head { display: flex; align-items: center; gap: 1rem; }
        .hh-feature-head .hh-emblem {
          padding: 0.55rem;
          border-radius: 14px;
          background: #fff;
          filter: none;
          box-shadow: 0 10px 24px -12px rgba(0, 0, 0, 0.5);
        }
        .hh-feature-title {
          margin: 0;
          font-size: clamp(2rem, 3.4vw, 3.1rem);
          font-weight: var(--fw-medium);
          letter-spacing: -0.03em;
          line-height: 1.02;
        }
        .hh-feature-subtitle {
          margin: 0.3rem 0 0;
          font-size: clamp(1.05rem, 1.5vw, 1.35rem);
          font-weight: var(--fw-regular);
          line-height: 1.3;
          color: #c9f1de;
        }
        /* The tagline is the card's statement: larger, with a mint rule. */
        .hh-feature-tagline {
          margin: 1.6rem 0 0;
          padding-left: 1rem;
          border-left: 3px solid #5cc79a;
          font-size: clamp(1.2rem, 1.9vw, 1.65rem);
          font-weight: var(--fw-light);
          letter-spacing: -0.015em;
          line-height: 1.25;
        }
        .hh-feature-para {
          margin: 1.25rem 0 0;
          max-width: 62ch;
          font-size: var(--fs-body);
          font-weight: var(--fw-light);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.86);
        }
        .hh-feature .hh-btn {
          margin-top: 1.75rem;
          min-height: 48px;
          padding: 0.8rem 1.6rem;
          background: #fff;
          color: #12573f;
          font-size: var(--fs-sm);
          box-shadow: inset 0 0 0 999px rgba(31, 145, 99, 0), 0 14px 30px -14px rgba(0, 0, 0, 0.6);
        }
        .hh-feature:hover,
        .hh-feature:focus-visible {
          box-shadow:
            0 1px 2px rgba(10, 40, 30, 0.2),
            0 48px 80px -36px rgba(13, 58, 43, 0.9);
        }
        .hh-feature:focus-visible { outline: 3px solid #3A82C4; outline-offset: 4px; }
        .hh-feature:hover .hh-btn,
        .hh-feature:focus-visible .hh-btn {
          color: #0d3a2b;
          box-shadow: inset 0 0 0 999px rgba(31, 145, 99, 0.08), 0 18px 34px -14px rgba(0, 0, 0, 0.7);
        }
        .hh-feature:hover .hh-btn svg,
        .hh-feature:focus-visible .hh-btn svg { transform: translateX(3px); }
        .hh-feature-photo {
          position: relative;
          min-height: 360px;
        }
        .hh-feature-photo img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 30% 50%;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.55) 22%, #000 48%);
          mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.55) 22%, #000 48%);
        }

        /* ── Desktop scale ──
           zoom sets the drawn size of everything inside (text, padding,
           icons, images) and so the containers' height; width is set
           separately as a share of the viewport. 0.84 / 91% = the earlier
           0.7 / 70% made 20% taller and 30% wider. Tablets and phones stay
           at 100% so text remains readable. */
        @media (min-width: 1101px) {
          .hh-body { zoom: 0.84; width: 91%; }
          .hh-banner-inner { min-height: clamp(280px, 20vw, 360px); }
        }
        /* Narrower desktops: heading and photo on top, the 3 + 3 grid
           centred below them. */
        @media (min-width: 1101px) and (max-width: 1279px) {
          .hh-banner-inner {
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-areas: "text media" "points points";
            row-gap: 1.75rem;
          }
        }

        /* ── Responsive ── */
        /* Three-up cards are narrowest here: a slimmer render column and
           icon tile keep the feature labels on one line. */
        @media (min-width: 1101px) and (max-width: 1400px) {
          .hh-card-main { grid-template-columns: minmax(0, 1fr) clamp(96px, 32%, 190px); gap: 0.5rem; }
          .hh-features li { gap: 0.7rem; font-size: var(--fs-xs); }
        }
        @media (max-width: 1100px) {
          /* Tablets: heading with the small photo at its right, then the
             points as a centred 3 + 3 grid of pills across the banner. */
          .hh-banner-inner {
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-areas: "text media" "points points";
            row-gap: 1.5rem;
          }
          .hh-banner-media { width: clamp(200px, 30vw, 300px); }
          .hh-points { justify-self: stretch; gap: 0.6rem; }
          .hh-point {
            padding: 0.45rem 1rem 0.45rem 0.45rem;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.6);
            box-shadow: inset 0 0 0 1px rgba(20, 20, 40, 0.06);
          }
          .hh-point span { width: 30px; height: 30px; }
          .hh-modules { grid-template-columns: minmax(0, 1fr); }
          .hh-card-main { grid-template-columns: minmax(0, 1fr) clamp(150px, 36%, 300px); }
          /* Featured: the photo on top, fading down into the text. */
          .hh-feature { grid-template-columns: minmax(0, 1fr); }
          .hh-feature-text { padding: 0 clamp(1.25rem, 4vw, 2.5rem) clamp(1.75rem, 4vw, 2.5rem); }
          .hh-feature-photo { order: -1; min-height: 0; height: clamp(190px, 42vw, 340px); }
          .hh-feature-photo img {
            object-position: 50% 30%;
            -webkit-mask-image: linear-gradient(180deg, #000 45%, transparent 100%);
            mask-image: linear-gradient(180deg, #000 45%, transparent 100%);
          }
        }
        /* Three pills no longer fit across: two per row. */
        @media (max-width: 820px) {
          .hh-points { grid-template-columns: repeat(2, max-content); }
        }
        @media (max-width: 640px) {
          /* Phones: one column: heading, the points as centred pills, then
             the small photo at the right. */
          .hh-banner-inner {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: "text" "points" "media";
            row-gap: 1.25rem;
          }
          .hh-banner-media { width: min(70%, 260px); }
          /* Phones: the three modules drop their card box and read as one
             flowing list, split by hairlines. Everything inside is as-is. */
          .hh-modules { gap: 0; }
          .hh-card.hh-surface,
          .hh-card.hh-surface:hover {
            background: none;
            border: 0;
            border-radius: 0;
            box-shadow: none;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            overflow: visible;
            padding: 1.75rem 0;
          }
          .hh-card + .hh-card { border-top: 1px solid rgba(20, 20, 40, 0.08); }
          .hh-feature + .hh-card { padding-top: 2rem; }
          .hh-feature { margin-bottom: 0.5rem; border-radius: 16px; }
          .hh-feature .hh-btn { align-self: stretch; justify-content: center; width: 100%; }
          .hh-card-main { margin-right: 0; }
        }
        @media (max-width: 560px) {
          /* Small phones: one compact column of equal-width pills (the
             widest sets the width), centred, so six points stay tidy. */
          .hh-points { grid-template-columns: max-content; gap: 0.45rem; }
          .hh-point { padding: 0.35rem 1rem 0.35rem 0.35rem; }
          .hh-point span { width: 28px; height: 28px; }
        }
        @media (max-width: 480px) {
          .hh-card-main { grid-template-columns: minmax(0, 1fr) 104px; }
          .hh-features li { gap: 0.7rem; font-size: var(--fs-xs); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hh-banner::after, .hh-feature::after, .hh-title-em { animation: none; }
          .hh-corner, .hh-btn, .hh-btn svg, .hh-feat-icon { transition: none; }
          .hh-features li:hover .hh-feat-icon { transform: none; }
          .hh-card:hover .hh-corner, .hh-card:focus-within .hh-corner,
          .hh-card:hover .hh-btn svg, .hh-card:focus-within .hh-btn svg,
          .hh-feature:hover .hh-btn svg, .hh-feature:focus-visible .hh-btn svg { transform: none; }
        }
      `}</style>

      <div className="hh-root">
        <div className="hh-wrap hh-body">
          <section className="hh-banner">
            <div className="hh-banner-inner">
              <m.div className="hh-banner-text" {...rise(0)}>
                <h1 className="hh-title">
                  AI-Powered <span className="hh-title-em">Healthcare</span>
                </h1>
                <p className="hh-sub">Intelligence across diagnosis, genomics and patient care</p>
                <p className="hh-org">
                  A California-based <span className="hh-org-em">501(c)(3)</span> nonprofit organization
                </p>
              </m.div>
              <m.div className="hh-banner-media" aria-hidden="true" {...rise(1)}>
                {/* Fetched first (it is in the first view on every screen), at the
                    width it is shown: about 22% of the screen on desktop, 30% on
                    tablets, up to 260px on phones. */}
                <img
                  src="/images/home/banner-indostates.webp"
                  srcSet="/images/home/banner-indostates-800.webp 800w, /images/home/banner-indostates.webp 1600w"
                  sizes="(max-width: 640px) 260px, (max-width: 1100px) 30vw, 22vw"
                  alt=""
                  width={1600}
                  height={726}
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                />
              </m.div>
              <ul className="hh-points">
                {HERO_POINTS.map(({ Icon, label, vars }, i) => (
                  <m.li key={label} className="hh-point" style={vars} {...rise(i + 1)}>
                    <span aria-hidden="true"><Icon size={17} strokeWidth={1.75} /></span>
                    {label}
                  </m.li>
                ))}
              </ul>
            </div>
          </section>

          <section className="hh-modules" aria-label="AI platforms">
            <m.a
              className="hh-feature"
              href={FEATURED.href}
              aria-label={`${FEATURED.cta}: ${FEATURED.subtitle}`}
              style={FEATURED.vars}
              {...rise(0)}
              whileHover={{ y: -4, transition: { duration: 0.35, ease: EASE } }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="hh-feature-text">
                <div className="hh-feature-head">
                  <Emblem kind="hospital" />
                  <div>
                    <h2 className="hh-feature-title">{FEATURED.title}</h2>
                    <p className="hh-feature-subtitle">{FEATURED.subtitle}</p>
                  </div>
                </div>
                <p className="hh-feature-tagline">{FEATURED.tagline}</p>
                <p className="hh-feature-para">{FEATURED.para}</p>
                <span className="hh-btn" aria-hidden="true">
                  {FEATURED.cta}
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>
              <div className="hh-feature-photo" aria-hidden="true">
                <img
                  {...featuredPhoto(FEATURED.photo)}
                  sizes="(max-width: 1100px) 92vw, 42vw"
                  alt=""
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            </m.a>

            {MODULE_CARDS.map((card, i) => {
              const linkProps = card.external
                ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: card.href };
              return (
                <m.article
                  key={card.id}
                  className="hh-card hh-surface"
                  style={card.vars}
                  {...rise(i + 1)}
                  whileHover={{ y: -4, transition: { duration: 0.35, ease: EASE } }}
                >
                  <div className="hh-card-head">
                    <Emblem kind={card.emblem} />
                    <div>
                      <h2 className="hh-card-title">{card.title}</h2>
                      <p className="hh-card-tagline">{card.tagline}</p>
                    </div>
                    <span className="hh-corner" aria-hidden="true">
                      <ChevronRight size={18} strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="hh-card-main">
                    <ul className="hh-features">
                      {card.features.map(({ Icon, label }) => (
                        <li key={label}>
                          <span className="hh-feat-icon" aria-hidden="true">
                            <Icon size={20} strokeWidth={1.6} />
                          </span>
                          {label}
                        </li>
                      ))}
                    </ul>
                    <div className="hh-card-img" aria-hidden="true">
                      <img
                        className={card.cutout ? 'is-cutout' : undefined}
                        src={card.image}
                        alt=""
                        loading="lazy"
                        draggable={false}
                        width={card.imageSize[0]}
                        height={card.imageSize[1]}
                      />
                    </div>
                  </div>
                  <a
                    className="hh-btn"
                    aria-label={card.cta + (card.external ? ' (opens in new tab)' : '')}
                    {...linkProps}
                  >
                    {card.cta}
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </m.article>
              );
            })}
          </section>

        </div>
      </div>
    </MotionConfig>
  );
};

export default Hero;
