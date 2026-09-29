import { useId } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import {
  Activity, ArrowRight, Brain, ChartColumn, ChevronRight, ClipboardList,
  Crosshair, Dna, HeartPulse, Radar, Scan, ScanLine, Users,
} from 'lucide-react';

/**
 * Home page hero.
 *
 * Content and structure come from the Claude Design mockup in
 * assets-src/design/Shri Health homepage mockup/ ("Shri Health Home.dc.html",
 * uploads/reference.png). The look is the site's own: a white ground, DM Sans
 * at the three system weights and the index.css
 * tokens. Card accents are the brand colours the old hero gave each
 * platform's link.
 *
 * Every illustration has its own box and never sits behind text: each card's
 * art is its own grid column beside the feature list (the reference layout),
 * and the banner's building is its own column (dropped on phones rather than
 * layered under text). Images are crops of reference.png exported at 2x
 * (public/shri-health-*.webp) and are always shown whole: object-fit contain,
 * with only a soft fade at the outer edges.
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
];

const MODULE_CARDS = [
  {
    id: 'stroke',
    title: 'Stroke AI',
    tagline: 'AI for Faster Detection and Better Outcomes',
    emblem: 'brain',
    image: '/stroke-brain.webp',
    imageSize: [425, 460],
    // A transparent cut-out: shown as-is, with no edge fade.
    cutout: true,
    features: [
      { Icon: ScanLine, label: 'CT / MRI Analysis' },
      { Icon: Crosshair, label: 'Stroke Detection' },
      { Icon: ClipboardList, label: 'AI Assessment' },
      { Icon: ChartColumn, label: 'Monitoring & Follow-up' },
    ],
    cta: 'Open Stroke AI Module',
    href: 'https://stroke-ai.org',
    external: true,
    vars: { ...accentVars('#2a6db5', '#6aa6e8', '42, 109, 181'), '--c-tint-1': '#dbe8fb', '--c-tint-2': '#f1f6ff' },
  },
  {
    id: 'oncotrace',
    title: 'OncoTrace AI',
    tagline: 'AI Imaging + NGS for Early Detection and Personalized Care',
    emblem: 'ribbon',
    image: '/oncotrace-breast.webp',
    imageSize: [358, 460],
    cutout: true,
    features: [
      { Icon: Radar, label: 'AI MRI Analysis' },
      { Icon: Scan, label: 'Mammography AI' },
      { Icon: Dna, label: 'NGS & Molecular Profiling' },
      { Icon: Activity, label: 'Risk Assessment' },
    ],
    cta: 'Open OncoTrace AI',
    href: 'https://oncotrace-ai.org',
    external: true,
    vars: { ...accentVars('#b52a6b', '#e67aa6', '181, 42, 107'), '--c-tint-1': '#fbe1ee', '--c-tint-2': '#f5ecfc' },
  },
  {
    id: 'shri-health',
    title: 'SHRI HEALTH',
    tagline: 'AI Imaging + NGS for Precision Oncology',
    emblem: 'hospital',
    image: '/shri-health-lung.webp',
    imageSize: [376, 406],
    features: [
      { Icon: ScanLine, label: 'CT Imaging AI' },
      { Icon: Dna, label: 'NGS & Molecular Profiling' },
      { Icon: Activity, label: 'Biomarker Analysis' },
      { Icon: ClipboardList, label: 'Treatment Monitoring' },
    ],
    cta: 'Open SHRI Health Module',
    href: '/dev',
    vars: { ...accentVars('#1f9163', '#5cc79a', '31, 145, 99', '#167a52'), '--c-tint-1': '#dcf2e8', '--c-tint-2': '#eef8f6' },
  },
];

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

        /* ── Banner (reference layout) ──
           A rounded card the width of the card row, not full-bleed: heading
           left, the building in its own middle column fading at both sides,
           the five points right. */
        .hh-banner {
          --bpad: clamp(1.25rem, 2vw, 1.9rem);
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
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr) auto;
          align-items: center;
          gap: clamp(1rem, 2vw, 2rem);
          min-height: clamp(170px, 11.5vw, 205px);
          padding: var(--bpad) clamp(1.5rem, 3vw, 3rem);
        }
        .hh-banner-text { min-width: 0; }
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

        /* The building is its own column — never under the heading. It
           runs the banner's full height and fades out at both sides. */
        .hh-banner-media {
          position: relative;
          align-self: stretch;
          min-height: 170px;
          margin-block: calc(-1 * var(--bpad));
        }
        /* contain, not cover: the whole building always shows. The render is
           a cut-out with a clear sky, so it fades out at the left and right
           and only along the bottom, where the road is cut straight; the
           roofline stays crisp. The two fades are intersected, and the whole
           image sits slightly translucent so it reads as part of the banner. */
        .hh-banner-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          /* Sits on the banner's bottom edge, not centred in it. */
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

        .hh-points {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .hh-point {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: var(--fs-xs);
          font-weight: var(--fw-regular);
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .hh-point span {
          flex: none;
          width: 26px;
          height: 26px;
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
          grid-template-columns: repeat(3, minmax(0, 1fr));
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
        .hh-corner:hover { transform: translateX(2px); background: var(--c-btn); color: #fff; }

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
        .hh-art { display: block; width: 100%; height: 100%; overflow: visible; }
        /* Motion for the vector illustrations in HeroArt.jsx — not used on the
           page right now (the cards show images); kept so they can be
           switched back in without redoing the art. */
        .hh-art-spin { transform-box: view-box; transform-origin: 120px 120px; animation: hhArtSpin 28s linear infinite; }
        .hh-art-orbit { transform-box: view-box; transform-origin: 120px 120px; animation: hhArtSpin 46s linear infinite; }
        @keyframes hhArtSpin { to { transform: rotate(360deg); } }
        .hh-art-ping { transform-box: fill-box; transform-origin: center; animation: hhArtPing 2.4s ease-out infinite; }
        @keyframes hhArtPing {
          0% { transform: scale(0.7); opacity: 0.9; }
          100% { transform: scale(2); opacity: 0; }
        }
        .hh-art-trace { stroke-dasharray: 100; animation: hhArtTrace 3.4s ease-in-out infinite; }
        @keyframes hhArtTrace {
          0% { stroke-dashoffset: 100; opacity: 0; }
          15% { opacity: 1; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .hh-art-bob { animation: hhArtBob 6s ease-in-out infinite; }
        .hh-art-bob--late { animation-delay: -3s; }
        @keyframes hhArtBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .hh-art-bar { transform-box: fill-box; transform-origin: bottom; animation: hhArtBar 3.2s ease-in-out infinite alternate; }
        @keyframes hhArtBar { from { transform: scaleY(0.72); } to { transform: scaleY(1); } }
        .hh-art-node { transform-box: fill-box; transform-origin: center; animation: hhArtNode 3s ease-in-out infinite; }
        @keyframes hhArtNode {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.6); opacity: 1; }
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
          box-shadow: 0 10px 22px -12px rgba(var(--c-accent-rgb), 0.8);
          transition: filter 0.25s ease, box-shadow 0.25s ease;
        }
        .hh-btn svg { transition: transform 0.25s ease; }
        .hh-btn:hover { color: #fff; filter: brightness(1.08); box-shadow: 0 14px 28px -12px rgba(var(--c-accent-rgb), 0.9); }
        .hh-btn:hover svg { transform: translateX(3px); }
        .hh-card .hh-btn {
          align-self: stretch;
          justify-content: center;
          min-height: 46px;
          border-radius: 8px;
          font-size: var(--fs-sm);
        }

        .hh-btn:focus-visible, .hh-corner:focus-visible { outline: 2px solid #3A82C4; outline-offset: 3px; }

        /* ── Desktop scale ──
           zoom sets the drawn size of everything inside (text, padding,
           icons, images) and so the containers' height; width is set
           separately as a share of the viewport. 0.84 / 91% = the earlier
           0.7 / 70% made 20% taller and 30% wider. Tablets and phones stay
           at 100% so text remains readable. */
        @media (min-width: 1101px) {
          .hh-body { zoom: 0.84; width: 91%; }
          /* Desktop banner at twice its base height; the building column
             widens so the (uncropped) image grows into the extra room. */
          .hh-banner-inner {
            /* ~2x the measured base height (1536px: 192px -> ~385px drawn). */
            min-height: clamp(400px, 30vw, 540px);
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr) auto;
          }
          .hh-points { gap: 0.9rem; }
        }

        /* ── Responsive ── */
        /* Three-up cards are narrowest here: a slimmer render column and
           icon tile keep the feature labels on one line. */
        @media (min-width: 1101px) and (max-width: 1400px) {
          .hh-card-main { grid-template-columns: minmax(0, 1fr) clamp(96px, 32%, 190px); gap: 0.5rem; }
          .hh-features li { gap: 0.7rem; font-size: var(--fs-xs); }
        }
        @media (max-width: 1100px) {
          /* Text and chips stacked left, building on the right. */
          .hh-banner-inner { grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr); }
          .hh-points { grid-column: 1; flex-direction: row; flex-wrap: wrap; }
          .hh-banner-media { grid-column: 2; grid-row: 1 / span 2; }
          .hh-modules { grid-template-columns: minmax(0, 1fr); }
          .hh-card-main { grid-template-columns: minmax(0, 1fr) clamp(150px, 36%, 300px); }
        }
        @media (max-width: 640px) {
          /* Phones: no room for a building beside the heading, so it goes
             rather than sitting under the text. */
          .hh-banner-inner { grid-template-columns: minmax(0, 1fr); }
          .hh-banner-media { display: none; }
          .hh-point { white-space: normal; }
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
          .hh-modules > .hh-card:first-child { padding-top: 0.5rem; }
          .hh-card-main { margin-right: 0; }
        }
        @media (max-width: 480px) {
          .hh-card-main { grid-template-columns: minmax(0, 1fr) 104px; }
          .hh-features li { gap: 0.7rem; font-size: var(--fs-xs); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hh-banner::after, .hh-title-em,
          .hh-art-spin, .hh-art-orbit, .hh-art-ping, .hh-art-trace,
          .hh-art-bob, .hh-art-bar, .hh-art-node { animation: none; }
          .hh-corner, .hh-btn, .hh-btn svg, .hh-feat-icon { transition: none; }
          .hh-features li:hover .hh-feat-icon { transform: none; }
          .hh-corner:hover, .hh-btn:hover svg { transform: none; }
        }
      `}</style>

      <div className="hh-root">
        <div className="hh-wrap hh-body">
          <section className="hh-banner">
            <div className="hh-banner-inner">
              <motion.div className="hh-banner-text" {...rise(0)}>
                <h1 className="hh-title">
                  AI-Powered <span className="hh-title-em">Healthcare</span>
                </h1>
                <p className="hh-sub">Intelligence across diagnosis, genomics and patient care</p>
                <p className="hh-org">
                  A California-based <span className="hh-org-em">501(c)(3)</span> nonprofit organization
                </p>
              </motion.div>
              <motion.div className="hh-banner-media" aria-hidden="true" {...rise(1)}>
                <img src="/banner-hospital.webp" alt="" draggable={false} width={1600} height={782} />
              </motion.div>
              <ul className="hh-points">
                {HERO_POINTS.map(({ Icon, label, vars }, i) => (
                  <motion.li key={label} className="hh-point" style={vars} {...rise(i + 1)}>
                    <span aria-hidden="true"><Icon size={14} strokeWidth={1.75} /></span>
                    {label}
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          <section className="hh-modules" aria-label="AI modules">
            {MODULE_CARDS.map((card, i) => {
              const linkProps = card.external
                ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: card.href };
              return (
                <motion.article
                  key={card.id}
                  className="hh-card hh-surface"
                  style={card.vars}
                  {...rise(i)}
                  whileHover={{ y: -4, transition: { duration: 0.35, ease: EASE } }}
                >
                  <div className="hh-card-head">
                    <Emblem kind={card.emblem} />
                    <div>
                      <h2 className="hh-card-title">{card.title}</h2>
                      <p className="hh-card-tagline">{card.tagline}</p>
                    </div>
                    <a
                      className="hh-corner"
                      aria-label={card.cta + (card.external ? ' (opens in new tab)' : '')}
                      {...linkProps}
                    >
                      <ChevronRight size={18} strokeWidth={1.75} aria-hidden="true" />
                    </a>
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
                  <a className="hh-btn" {...linkProps}>
                    {card.cta}
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </motion.article>
              );
            })}
          </section>

        </div>
      </div>
    </MotionConfig>
  );
};

export default Hero;
