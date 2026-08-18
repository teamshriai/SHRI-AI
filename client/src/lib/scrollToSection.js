/**
 * Single scroll-to-section implementation for the whole site.
 *
 * Three things make this non-trivial here:
 *
 * 1. The navbar is `position: fixed`, so a raw anchor jump or `scrollIntoView()`
 *    leaves the target's heading hidden underneath it.
 *
 * 2. About and FocusAreas carry a `translateY()` scroll-overlap transform (see
 *    App.jsx). `getBoundingClientRect()` therefore reports where they are
 *    *pinned on screen*, not where they sit in the document.
 *
 * 3. Both are also `position: sticky`, and an `offsetTop` chain is NOT immune to
 *    that: a stuck sticky element reports its *displaced* offset. Measured on
 *    #about at 1440px, the naive chain returns its true 792px only while the
 *    viewport is near the top — from the footer it returns 2971px, which is why
 *    navigating up to "About SHRI-AI" used to stop partway down the page.
 *    Neutralising `position: sticky` for one synchronous measurement returns a
 *    stable 792px from every scroll position.
 */

/** Elements between `el` and <body> whose used position is sticky. */
function stickyAncestors(el) {
  const out = [];
  for (let n = el; n && n !== document.body; n = n.parentElement) {
    const pos = getComputedStyle(n).position;
    if (pos === 'sticky' || pos === '-webkit-sticky') out.push(n);
  }
  return out;
}

function offsetChain(el) {
  let top = 0;
  for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
  return top;
}

/**
 * Document-space top of an element as it sits in static layout — unaffected by
 * transforms, and unaffected by sticky displacement.
 *
 * Sticky is switched off, measured, and switched back within a single
 * synchronous block, so the browser never paints the intermediate state. It
 * does force a reflow, which is why this is only ever called on click/resize
 * and never per scroll frame.
 */
export function documentTop(el) {
  const sticky = stickyAncestors(el);
  if (!sticky.length) return offsetChain(el);

  const prev = sticky.map((n) => n.style.position);
  sticky.forEach((n) => { n.style.position = 'static'; });
  const top = offsetChain(el);
  sticky.forEach((n, i) => { n.style.position = prev[i]; });
  return top;
}

/**
 * Height to offset by so the target clears the fixed navbar.
 *
 * Measures the navbar's *header row*, never the expanded mobile panel — the
 * panel is `max-height: 100dvh`, so including it would offset by a whole screen.
 * Uses the navbar's settled (solid) padding rather than its current on-screen
 * bottom, because it animates from 28px to 16px once scrollY > 30 and measuring
 * mid-transition skews every target.
 */
export function navbarOffset() {
  const header = document.querySelector('[data-nav-header]');
  if (!header) {
    const nav = document.querySelector('.nav-root');
    return nav ? nav.offsetHeight : 90;
  }
  const nav = document.querySelector('.nav-root');
  const padSolid = nav
    ? parseFloat(getComputedStyle(nav).getPropertyValue('--nav-pad-solid')) || 16
    : 16;
  return header.offsetHeight + padSolid * 2;
}

/** Scroll target for a section id, clamped to the document. */
export function scrollTargetFor(id) {
  const el = document.getElementById(String(id).replace('#', ''));
  if (!el) return null;
  return Math.max(0, documentTop(el) - navbarOffset());
}

/** Smooth-scroll to `#id`, accounting for the fixed navbar. */
export function scrollToSection(id) {
  const top = scrollTargetFor(id);
  if (top === null) return false;
  window.scrollTo({ top, behavior: 'smooth' });
  return true;
}
