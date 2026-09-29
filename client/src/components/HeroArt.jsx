import { useId } from 'react';

/**
 * Vector illustrations for the home hero (Hero.jsx): one per module card and
 * a wide one for the banner. Inline SVG so they stay crisp at any size and
 * take the card's accent from CSS custom properties (--c-accent,
 * --c-accent-2, --c-accent-rgb). Motion classes (hh-art-*) are animated in
 * Hero.jsx's stylesheet and switched off under prefers-reduced-motion.
 */

const stop = (color, opacity) => ({ stopColor: color, stopOpacity: opacity });

/* Shared defs: an accent gradient in the 240-box, the same gradient in a
   24-box (for icon-scale paths drawn inside nested <svg>s), and a glow. */
const ArtDefs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-g`} gradientUnits="userSpaceOnUse" x1="30" y1="20" x2="210" y2="220">
      <stop offset="0" style={stop('var(--c-accent-2)')} />
      <stop offset="1" style={stop('var(--c-accent)')} />
    </linearGradient>
    <linearGradient id={`${id}-g24`} gradientUnits="userSpaceOnUse" x1="3" y1="2" x2="21" y2="22">
      <stop offset="0" style={stop('var(--c-accent-2)')} />
      <stop offset="1" style={stop('var(--c-accent)')} />
    </linearGradient>
    <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
      <stop offset="0" style={stop('rgb(var(--c-accent-rgb))', 0.22)} />
      <stop offset="0.6" style={stop('rgb(var(--c-accent-rgb))', 0.08)} />
      <stop offset="1" style={stop('rgb(var(--c-accent-rgb))', 0)} />
    </radialGradient>
    <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="rgb(40, 50, 90)" floodOpacity="0.14" />
    </filter>
  </defs>
);

/* A vertical DNA double helix between y0 and y1, centred on x. */
function helix(x, y0, y1, amp, turns) {
  const steps = 48;
  const a = [];
  const b = [];
  const rungs = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = y0 + (y1 - y0) * t;
    const s = Math.sin(t * turns * Math.PI * 2);
    a.push(`${(x + amp * s).toFixed(1)},${y.toFixed(1)}`);
    b.push(`${(x - amp * s).toFixed(1)},${y.toFixed(1)}`);
    if (i % 4 === 2) rungs.push([x + amp * s, x - amp * s, y]);
  }
  return { a: `M${a.join(' L')}`, b: `M${b.join(' L')}`, rungs };
}
const DNA = helix(196, 56, 184, 10, 2);

/* ── Stroke AI: brain scan ── */
const StrokeArt = ({ id }) => (
  <>
    <circle cx="120" cy="120" r="112" fill={`url(#${id}-glow)`} />
    <circle cx="120" cy="120" r="100" fill="none" style={{ stroke: 'rgb(var(--c-accent-rgb))' }} strokeOpacity="0.16" />
    <circle
      className="hh-art-spin"
      cx="120" cy="120" r="84"
      fill="none" stroke={`url(#${id}-g)`} strokeOpacity="0.55" strokeWidth="1.5"
      strokeDasharray="3 9" strokeLinecap="round"
    />
    <circle cx="120" cy="120" r="66" fill="rgba(255,255,255,0.55)" style={{ stroke: 'rgb(var(--c-accent-rgb))' }} strokeOpacity="0.2" />
    <svg x="68" y="62" width="104" height="104" viewBox="0 0 24 24" fill="none" overflow="visible">
      <g stroke={`url(#${id}-g24)`} strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18V5" />
        <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
        <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
        <path d="M18 18a4 4 0 0 0 2-7.464" />
        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
        <path d="M6 18a4 4 0 0 1-2-7.464" />
        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
      </g>
    </svg>
    {/* Detected region. */}
    <circle className="hh-art-ping" cx="146" cy="98" r="9" fill="none" stroke="#ff7a59" strokeWidth="1.5" />
    <circle cx="146" cy="98" r="4.5" fill="#ff7a59" />
    {/* ECG trace. */}
    <path
      className="hh-art-trace"
      d="M14 200 H78 l9 -16 l10 30 l11 -44 l10 38 l8 -8 H226"
      fill="none" stroke={`url(#${id}-g)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      pathLength="100"
    />
  </>
);

/* ── OncoTrace AI: ribbon, cells, DNA ── */
const OncoArt = ({ id }) => (
  <>
    <circle cx="120" cy="120" r="112" fill={`url(#${id}-glow)`} />
    <circle cx="120" cy="120" r="96" fill="none" style={{ stroke: 'rgb(var(--c-accent-rgb))' }} strokeOpacity="0.14" />
    <g className="hh-art-orbit">
      {[[120, 26, 8], [204, 146, 6], [38, 162, 6.5], [70, 48, 4]].map(([cx, cy, r]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={r} fill={`url(#${id}-g)`} fillOpacity="0.85" />
          <circle cx={cx - r * 0.3} cy={cy - r * 0.35} r={r * 0.32} fill="#fff" fillOpacity="0.7" />
        </g>
      ))}
    </g>
    <g stroke={`url(#${id}-g)`} strokeLinecap="round" fill="none">
      <path d={DNA.a} strokeWidth="2" strokeOpacity="0.7" />
      <path d={DNA.b} strokeWidth="2" strokeOpacity="0.45" />
      {DNA.rungs.map(([x1, x2, y]) => (
        <line key={y} x1={x1} y1={y} x2={x2} y2={y} strokeWidth="1.2" strokeOpacity="0.35" />
      ))}
    </g>
    <svg x="58" y="40" width="112" height="157" viewBox="4.5 1.5 15 21" overflow="visible">
      <path
        d="M12 2.6C9.3 2.6 8.1 4.8 8.1 6.75c0 2.05 1.3 4.05 2.55 5.95L6.3 19.95l2.55 1.25L12 15.75l3.15 5.45 2.55-1.25-4.35-7.25c1.25-1.9 2.55-3.9 2.55-5.95C15.9 4.8 14.7 2.6 12 2.6Zm0 2.5c1.2 0 1.8.9 1.8 1.9 0 1.2-.75 2.6-1.8 4.1-1.05-1.5-1.8-2.9-1.8-4.1 0-1 .6-1.9 1.8-1.9Z"
        fill={`url(#${id}-g24)`} fillOpacity="0.22" fillRule="evenodd"
        stroke={`url(#${id}-g24)`} strokeWidth="0.55" strokeLinejoin="round"
      />
      <path d="M10.65 12.7l2.4 4.1" stroke={`url(#${id}-g24)`} strokeWidth="0.55" strokeLinecap="round" />
    </svg>
  </>
);

/* ── SHRI HEALTH: hospital-management dashboard ── */
const HospitalBoardArt = ({ id }) => (
  <>
    <circle cx="120" cy="120" r="112" fill={`url(#${id}-glow)`} />
    <g className="hh-art-bob">
      <g filter={`url(#${id}-shadow)`}>
        <rect x="26" y="40" width="188" height="150" rx="16" fill="#fff" />
      </g>
      <rect x="26" y="40" width="188" height="150" rx="16" fill="none" style={{ stroke: 'rgb(var(--c-accent-rgb))' }} strokeOpacity="0.22" />
      <path d="M26 64 H214" style={{ stroke: 'rgb(var(--c-accent-rgb))' }} strokeOpacity="0.14" />
      {[0.55, 0.35, 0.2].map((o, i) => (
        <circle key={o} cx={42 + i * 11} cy="52" r="3.2" style={{ fill: 'rgb(var(--c-accent-rgb))' }} fillOpacity={o} />
      ))}
      {/* Hospital glyph + title. */}
      <g stroke={`url(#${id}-g)`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="40" y="76" width="30" height="24" rx="4" style={{ fill: 'rgb(var(--c-accent-rgb))' }} fillOpacity="0.1" />
        <path d="M55 81v9M50.5 85.5h9" />
      </g>
      <rect x="80" y="78" width="74" height="7" rx="3.5" fill={`url(#${id}-g)`} fillOpacity="0.75" />
      <rect x="80" y="91" width="48" height="6" rx="3" style={{ fill: 'rgb(var(--c-accent-rgb))' }} fillOpacity="0.2" />
      <circle className="hh-art-ping" cx="196" cy="87" r="6" fill="none" stroke="#2aaa72" strokeWidth="1.4" />
      <circle cx="196" cy="87" r="3.2" fill="#2aaa72" />
      {/* Bar chart. */}
      {[22, 34, 26, 42, 34].map((h, i) => (
        <rect
          key={i}
          className="hh-art-bar"
          style={{ animationDelay: `${-i * 0.6}s` }}
          x={42 + i * 14} y={176 - h} width="9" height={h} rx="2.5"
          fill={`url(#${id}-g)`} fillOpacity={0.45 + i * 0.1}
        />
      ))}
      {/* Line chart. */}
      <path d="M122 168 L138 156 L152 160 L166 140 L180 146 L198 122 V176 H122 Z" fill={`url(#${id}-g)`} fillOpacity="0.12" />
      <path d="M122 168 L138 156 L152 160 L166 140 L180 146 L198 122" fill="none" stroke={`url(#${id}-g)`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="198" cy="122" r="3.6" fill="#fff" style={{ stroke: 'var(--c-accent)' }} strokeWidth="2" />
    </g>
    {/* Floating patient record. */}
    <g className="hh-art-bob hh-art-bob--late">
      <g filter={`url(#${id}-shadow)`}>
        <rect x="120" y="178" width="104" height="38" rx="11" fill="#fff" />
      </g>
      <rect x="120" y="178" width="104" height="38" rx="11" fill="none" style={{ stroke: 'rgb(var(--c-accent-rgb))' }} strokeOpacity="0.2" />
      <circle cx="139" cy="197" r="9" style={{ fill: 'rgb(var(--c-accent-rgb))' }} fillOpacity="0.14" />
      <circle cx="139" cy="194" r="3.2" style={{ fill: 'var(--c-accent)' }} fillOpacity="0.7" />
      <path d="M133.5 202.5a5.5 4 0 0 1 11 0" style={{ fill: 'var(--c-accent)' }} fillOpacity="0.7" />
      <rect x="154" y="190" width="44" height="5" rx="2.5" style={{ fill: 'rgb(var(--c-accent-rgb))' }} fillOpacity="0.45" />
      <rect x="154" y="200" width="30" height="4.5" rx="2.25" style={{ fill: 'rgb(var(--c-accent-rgb))' }} fillOpacity="0.2" />
      <circle cx="210" cy="197" r="3.4" fill="#2aaa72" />
    </g>
  </>
);

const CARD_ART = { stroke: StrokeArt, onco: OncoArt, hospital: HospitalBoardArt };

export const CardArt = ({ kind }) => {
  const id = `ca${useId().replace(/:/g, '')}`;
  const Art = CARD_ART[kind];
  return (
    <svg className="hh-art" viewBox="0 0 240 240" aria-hidden="true" focusable="false">
      <ArtDefs id={id} />
      <Art id={id} />
    </svg>
  );
};

/* ── Banner: modern hospital with a data network ── */
const WINDOWS = [];
for (let r = 0; r < 4; r++) {
  for (let c = 0; c < 8; c++) {
    if (r === 3 && c >= 3 && c <= 4) continue; // entrance
    WINDOWS.push([214 + c * 27, 88 + r * 22]);
  }
}
const NODES = [[150, 40], [214, 22], [276, 46], [332, 18], [396, 44], [458, 24], [520, 50]];
const TREES = [[118, 186, 18], [146, 190, 13], [492, 186, 17], [522, 190, 12], [574, 188, 15]];

export const BannerArt = () => {
  const id = `ba${useId().replace(/:/g, '')}`;
  return (
    <svg className="hh-art" viewBox="0 0 640 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-wall`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e4eefb" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfe2fb" />
          <stop offset="1" stopColor="#8fb8ea" />
        </linearGradient>
        <linearGradient id={`${id}-win`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b9d4f4" />
          <stop offset="1" stopColor="#dde9fb" />
        </linearGradient>
        <linearGradient id={`${id}-cross`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6aa6e8" />
          <stop offset="1" stopColor="#2a6db5" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="rgb(40, 60, 120)" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Data network above the roofline. */}
      <g stroke="#3A82C4" strokeOpacity="0.22" strokeWidth="1">
        {NODES.slice(1).map(([x, y], i) => (
          <line key={x} x1={NODES[i][0]} y1={NODES[i][1]} x2={x} y2={y} />
        ))}
        <line x1="276" y1="46" x2="320" y2="70" />
        <line x1="396" y1="44" x2="360" y2="70" />
      </g>
      {NODES.map(([x, y], i) => (
        <circle
          key={x}
          className={i % 2 ? 'hh-art-node' : undefined}
          style={i % 2 ? { animationDelay: `${-i * 0.7}s` } : undefined}
          cx={x} cy={y} r="3.4"
          fill={['#7B6FCD', '#3A82C4', '#2aaa72', '#D4891E'][i % 4]}
          fillOpacity="0.75"
        />
      ))}

      {/* Ground shadow. */}
      <ellipse cx="340" cy="204" rx="270" ry="9" fill="#3A82C4" fillOpacity="0.1" />

      <g filter={`url(#${id}-soft)`}>
        {/* Wings. */}
        <rect x="104" y="124" width="100" height="78" rx="5" fill={`url(#${id}-wall)`} />
        <rect x="436" y="112" width="116" height="90" rx="5" fill={`url(#${id}-wall)`} />
        {/* Main block. */}
        <rect x="200" y="74" width="240" height="128" rx="6" fill={`url(#${id}-wall)`} />
      </g>
      <g fill="none" stroke="#3A82C4" strokeOpacity="0.28">
        <rect x="104" y="124" width="100" height="78" rx="5" />
        <rect x="436" y="112" width="116" height="90" rx="5" />
        <rect x="200" y="74" width="240" height="128" rx="6" />
      </g>

      {/* Windows. */}
      {WINDOWS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="18" height="13" rx="2" fill={`url(#${id}-win)`} />
      ))}
      {[0, 1].map((r) => [0, 1, 2].map((c) => (
        <rect key={`l${r}${c}`} x={116 + c * 28} y={138 + r * 24} width="18" height="12" rx="2" fill={`url(#${id}-win)`} />
      )))}
      {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (
        <rect key={`r${r}${c}`} x={448 + c * 26} y={124 + r * 22} width="16" height="12" rx="2" fill={`url(#${id}-win)`} />
      )))}

      {/* Glass entrance. */}
      <rect x="292" y="154" width="56" height="48" rx="3" fill={`url(#${id}-glass)`} />
      <path d="M306 154v48M320 154v48M334 154v48" stroke="#fff" strokeOpacity="0.6" />
      <path d="M289 154h62" stroke="#2a6db5" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />

      {/* Roof sign with a medical cross. */}
      <g filter={`url(#${id}-soft)`}>
        <rect x="282" y="46" width="76" height="30" rx="7" fill="#fff" />
      </g>
      <rect x="282" y="46" width="76" height="30" rx="7" fill="none" stroke="#3A82C4" strokeOpacity="0.3" />
      <path d="M299 53.5v15M291.5 61h15" stroke={`url(#${id}-cross)`} strokeWidth="5" strokeLinecap="round" />
      <rect x="314" y="55" width="34" height="5" rx="2.5" fill="#3A82C4" fillOpacity="0.55" />
      <rect x="314" y="64" width="22" height="4.5" rx="2.25" fill="#3A82C4" fillOpacity="0.25" />

      {/* Trees. */}
      {TREES.map(([x, y, r]) => (
        <g key={x}>
          <rect x={x - 1.5} y={y} width="3" height="14" rx="1.5" fill="#6b8f7a" />
          <circle cx={x} cy={y - r * 0.2} r={r} fill="#7cc7a0" />
          <circle cx={x - r * 0.35} cy={y - r * 0.5} r={r * 0.55} fill="#9ad6b5" />
        </g>
      ))}
      <path d="M60 202 H620" stroke="#3A82C4" strokeOpacity="0.18" />
    </svg>
  );
};
