import { ArrowUpRight } from 'lucide-react';

/**
 * NotchedProjectCard — ported from the 21st.dev component of the same name
 * (TypeScript + shadcn + Tailwind) to this project's plain JSX and scoped CSS.
 * Same geometry and behaviour; the shadcn theme tokens become the site's.
 *
 * A card whose cover has a rounded notch bitten out of its bottom-right
 * corner, with the "open" arrow nested inside it. The cut is concentric with
 * the arrow disc and filleted where it meets the cover's edges, so the cover
 * curves into it instead of ending on a point.
 *
 * The notch is a real cut-out — a CSS mask on the cover, not layers painted
 * in the page colour — so it works on any background, including patterns.
 * The mask is one SVG corner tile anchored bottom-right plus two plain fills
 * for the rest of the cover. Every measurement of the cut is a fixed multiple
 * of the disc D (block 1.25D, concave radius 0.75D, fillet 0.4375D), so the
 * tile is one shape scaled with D.
 *
 * Sizing follows the card's own width (it is a size container): the disc,
 * cover radius and title scale with it, so a narrow card gets a
 * proportionally smaller notch with no breakpoints.
 *
 * `accent` colours the card: the arrow disc (deepening on hover), the tags,
 * the badge dot, the rule above the title and a faint wash over the foot of
 * the photo. `tone="dark"` sets the text for a dark page. `framed` puts the
 * card in a thin rounded outline that takes the accent on hover (on light
 * pages it also gets a white surface and a soft shadow, so it never fades
 * into a white page); framed cards fill their cell's height, so a row of
 * them stays uniform.
 * `monochrome` (off by default) sets the cover in black and white until hover
 * or focus, on hover-capable devices only.
 */

/* The visible part of the cover's bottom-right corner, in units where the
   disc is 64: the block (80) with its concave corner (r 48, centred on the
   disc), and a 28 fillet at each end. The tile is block + fillet = 108. */
const CORNER_TILE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 108'%3E%3Cpath d='M0 0H108A28 28 0 0 1 80 28H76A48 48 0 0 0 28 76V80A28 28 0 0 1 0 108Z'/%3E%3C/svg%3E\")";

const CSS = `
.npc {
  --npc-muted: #eef0f4;
  --npc-chip: #f1f2f6;
  --npc-title: var(--ink);
  --npc-text: var(--ink-soft);

  container-type: inline-size;
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  outline: none;
  transition: translate 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.npc:hover { color: inherit; }
.npc:focus-visible { outline: 2px solid #3A82C4; outline-offset: 4px; }

/* Geometry, resolved against the card's width (cqi). */
.npc-media {
  --npc-disc: clamp(42px, 20cqi, 64px);
  --npc-tile: calc(var(--npc-disc) * 1.6875);
  --npc-radius: clamp(16px, 8cqi, 28px);
  position: relative;
}
.npc-cover {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--npc-radius);
  background: var(--npc-muted);
  /* The notch. The two fills overlap the tile by 1px so no seam shows. */
  -webkit-mask-image: ${CORNER_TILE}, linear-gradient(#000, #000), linear-gradient(#000, #000);
  mask-image: ${CORNER_TILE}, linear-gradient(#000, #000), linear-gradient(#000, #000);
  -webkit-mask-size: var(--npc-tile) var(--npc-tile), calc(100% - var(--npc-tile) + 1px) 100%, 100% calc(100% - var(--npc-tile) + 1px);
  mask-size: var(--npc-tile) var(--npc-tile), calc(100% - var(--npc-tile) + 1px) 100%, 100% calc(100% - var(--npc-tile) + 1px);
  -webkit-mask-position: right bottom, left top, left top;
  mask-position: right bottom, left top, left top;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
.npc-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease;
}
.npc-cover::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to top, color-mix(in srgb, var(--npc-accent, #000) 24%, transparent), transparent 48%);
  pointer-events: none;
}
.npc-badge {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-top: clamp(0.6rem, 5cqi, 1rem);
  pointer-events: none;
}
.npc-badge span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.32);
  padding: 0.22rem 0.6rem;
  font-size: 11px;
  font-weight: var(--fw-medium);
  letter-spacing: 0.01em;
  color: #fff;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}
.npc-badge span::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--npc-accent, #fff);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.55);
}

/* The arrow, nested in the notch. */
.npc-disc {
  position: absolute;
  right: 0;
  bottom: 0;
  width: var(--npc-disc);
  height: var(--npc-disc);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--npc-accent, var(--npc-chip));
  color: var(--npc-accent-fg, var(--ink));
  box-shadow: 0 10px 22px -10px color-mix(in srgb, var(--npc-accent, #000) 75%, transparent);
  transition: background-color 0.3s ease, color 0.3s ease, scale 0.3s ease, box-shadow 0.3s ease;
}
.npc-disc svg { width: 31%; height: 31%; min-width: 15px; min-height: 15px; transition: translate 0.3s ease; }
.npc:hover .npc-disc,
.npc:focus-visible .npc-disc {
  background: color-mix(in srgb, var(--npc-accent, var(--ink)) 82%, #000);
  color: var(--npc-accent-fg, #fff);
  scale: 1.06;
  box-shadow: 0 14px 28px -10px color-mix(in srgb, var(--npc-accent, #000) 85%, transparent);
}
.npc:hover .npc-disc svg,
.npc:focus-visible .npc-disc svg { translate: 2px -2px; }

.npc-rule {
  display: block;
  width: 28px;
  height: 3px;
  margin-top: clamp(0.9rem, 6cqi, 1.25rem);
  border-radius: 2px;
  background: var(--npc-accent, var(--ink));
  transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.npc:hover .npc-rule,
.npc:focus-visible .npc-rule { width: 44px; }
.npc-title {
  margin: 0.6rem 0 0;
  font-size: clamp(1.05rem, 7cqi, 1.5rem);
  font-weight: var(--fw-medium);
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--npc-title);
  transition: color 0.3s ease;
}
.npc:hover .npc-title,
.npc:focus-visible .npc-title { color: color-mix(in srgb, var(--npc-accent, var(--ink)) 85%, #000); }
.npc-desc {
  margin: 0.4rem 0 0;
  font-size: clamp(0.8rem, 5.2cqi, 0.875rem);
  font-weight: var(--fw-light);
  line-height: 1.55;
  color: var(--npc-text);
}
.npc-tags {
  list-style: none;
  margin: 0.85rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.npc-tags li {
  border-radius: 6px;
  background: color-mix(in srgb, var(--npc-accent, #8a8a9c) 11%, #fff);
  padding: 0.26rem 0.5rem;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--npc-accent, #55556a) 80%, #000);
}

/* ── Framed: a thin outline, filling the cell so rows stay uniform ──
   Light pages: a white surface with a soft shadow; on hover or focus the
   outline takes the accent and the card a faint tint and accent shadow. */
.npc--framed {
  height: 100%;
  padding: 8px 8px 16px;
  border: 1px solid var(--npc-frame, rgba(20, 20, 30, 0.2));
  border-radius: 26px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 10px 26px rgba(20, 20, 30, 0.05);
  transition: translate 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}
.npc--framed .npc-rule,
.npc--framed .npc-title,
.npc--framed .npc-desc,
.npc--framed .npc-tags { margin-inline: 6px; }
.npc--framed:hover,
.npc--framed:focus-visible {
  border-color: var(--npc-accent, currentColor);
  background: color-mix(in srgb, var(--npc-accent, #8a8a9c) 4%, #fff);
  box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 20px 44px color-mix(in srgb, var(--npc-accent, #14141e) 16%, transparent);
}

/* ── Dark pages ── */
.npc--dark {
  --npc-muted: rgba(255, 255, 255, 0.06);
  --npc-chip: rgba(255, 255, 255, 0.12);
  --npc-title: #ffffff;
  --npc-text: rgba(255, 255, 255, 0.88);
  --npc-frame: rgba(255, 255, 255, 0.55);
}
.npc--dark.npc--framed { background: rgba(255, 255, 255, 0.025); box-shadow: none; }
.npc--dark.npc--framed:hover,
.npc--dark.npc--framed:focus-visible {
  border-color: color-mix(in srgb, var(--npc-accent, currentColor) 80%, #fff);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: none;
}
.npc--dark:focus-visible { outline-color: #8cc0f0; }
.npc--dark .npc-disc { color: var(--npc-accent-fg, #fff); }
.npc--dark .npc-rule { background: var(--npc-accent, #fff); }
.npc--dark:hover .npc-title,
.npc--dark:focus-visible .npc-title { color: color-mix(in srgb, var(--npc-accent, #fff) 55%, #fff); }
.npc--dark .npc-tags li {
  background: color-mix(in srgb, var(--npc-accent, #8a8a9c) 26%, transparent);
  color: color-mix(in srgb, var(--npc-accent, #fff) 25%, #fff);
}

/* Hover-capable devices only: lift, zoom, and the optional black-and-white
   cover. */
@media (hover: hover) {
  .npc:hover { translate: 0 -4px; }
  .npc:hover .npc-img { scale: 1.04; }
  .npc--mono .npc-img { filter: grayscale(1); }
  .npc--mono:hover .npc-img,
  .npc--mono:focus-visible .npc-img { filter: grayscale(0); }
}
.npc--mono:focus-visible .npc-img { filter: grayscale(0); }

@media (prefers-reduced-motion: reduce) {
  .npc, .npc--framed, .npc-img, .npc-disc, .npc-disc svg, .npc-rule, .npc-title { transition: none; }
  .npc:hover { translate: none; }
  .npc:hover .npc-img { scale: 1; }
  .npc:hover .npc-rule, .npc:focus-visible .npc-rule { width: 28px; }
  .npc:hover .npc-disc, .npc:focus-visible .npc-disc { scale: 1; }
  .npc:hover .npc-disc svg, .npc:focus-visible .npc-disc svg { translate: none; }
}
`;

export function NotchedProjectCard({
  href,
  title,
  description,
  image,
  imageAlt = '',
  imageWidth,
  imageHeight,
  badge,
  tags = [],
  monochrome = false,
  tone = 'light',
  framed = false,
  accent,
  accentForeground,
  ariaLabel,
  className = '',
}) {
  // A card without a destination still renders, just not as a link.
  const Root = href ? 'a' : 'div';
  const rootProps = href ? { href, 'aria-label': ariaLabel } : {};
  const classes = ['npc', tone === 'dark' && 'npc--dark', framed && 'npc--framed', monochrome && 'npc--mono', className]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* React 19 hoists this and de-duplicates by href: one copy, however
          many cards render. */}
      <style href="notched-project-card" precedence="default">{CSS}</style>
      <Root
        {...rootProps}
        className={classes}
        style={{
          '--npc-accent': accent,
          // White arrow on a coloured disc unless told otherwise; ink on the
          // neutral disc when there's no accent.
          '--npc-accent-fg': accentForeground ?? (accent ? '#fff' : undefined),
        }}
      >
        <div className="npc-media">
          <div className="npc-cover">
            <img
              className="npc-img"
              src={image}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            {badge && (
              <div className="npc-badge">
                <span>{badge}</span>
              </div>
            )}
          </div>

          <span className="npc-disc" aria-hidden="true">
            <ArrowUpRight strokeWidth={2} />
          </span>
        </div>

        <span className="npc-rule" aria-hidden="true" />
        <h3 className="npc-title">{title}</h3>
        {description && <p className="npc-desc">{description}</p>}
        {tags.length > 0 && (
          <ul className="npc-tags">
            {tags.map((tag, i) => (
              <li key={`${tag}-${i}`}>{tag}</li>
            ))}
          </ul>
        )}
      </Root>
    </>
  );
}

export default NotchedProjectCard;
