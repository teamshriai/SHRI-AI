/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Careers routing — one job description per page, without a router.
 * ─────────────────────────────────────────────────────────────────────────────
 * The site is a single static bundle with no server rewrite rules anywhere in
 * the repo, so a clean path such as /careers/<slug> would 404 on refresh or on
 * a shared link. A query parameter is served by index.html on every static host
 * (Vercel, Netlify, S3, GitHub Pages, nginx) with no configuration at all, so
 * job pages are addressed as:
 *
 *     /?role=<slug>
 *
 * Deep links, refresh, back and forward therefore all work. History is driven
 * with pushState + a custom event because App is the only subscriber; adding
 * react-router for two views would be heavier than the problem.
 */

const PARAM = 'role';

/**
 * Site root. Read from Vite's base rather than hardcoded, and used for every
 * URL this module writes, so that arriving on /careers does not turn a job
 * link into /careers?role=… — job pages always live at the root.
 */
const SITE_ROOT = import.meta.env.BASE_URL || '/';

/**
 * Clean paths that deep-link into a section of the single page.
 *
 * https://shri-ai.org/careers is linked from Stroke-AI, so it has to land on
 * the Careers heading rather than 404. Two halves make that work:
 *
 *   1. the host must serve index.html for the path — see public/_redirects
 *      and public/.htaccess, which cover Netlify-style and Apache hosts;
 *   2. this map tells App which section to land on once the page has mounted.
 *
 * Adding another is one entry here, nothing else. The hash form (/#careers)
 * is handled below and needs no host configuration at all.
 */
export const SECTION_ROUTES = {
  '/careers': 'careers',
};

/** App listens for this to re-read the URL after an in-page navigation. */
export const ROUTE_EVENT = 'shri:route';

/**
 * Where the home page was when the visitor opened a job, so returning puts
 * them back on the same card instead of at the top. Module-level rather than
 * sessionStorage: it only has to survive an in-session view swap, and a fresh
 * load of /?role=… correctly has nothing to restore.
 */
let homeScroll = null;

/** Current role slug from the URL, or null when we are on the site itself. */
export function readRoleSlug() {
  try {
    return new URLSearchParams(window.location.search).get(PARAM) || null;
  } catch {
    return null;
  }
}

/** Real href for a job, so a job card can be opened in a new tab or copied. */
export function roleHref(slug) {
  return SITE_ROOT + '?' + PARAM + '=' + encodeURIComponent(slug);
}

/**
 * Section id this URL asks for, or null.
 *
 * Accepts the clean path (/careers, /careers/) and the hash form (/#careers).
 * The hash accepts any id that actually exists on the page: the browser's own
 * jump ignores the fixed navbar and leaves the heading underneath it, so
 * handling it ourselves is what makes an external #-link land correctly.
 */
export function readSectionRoute() {
  try {
    // Compare only the last segment, so this keeps working if the site is ever
    // served from a sub-path.
    const path = window.location.pathname.replace(/\/+$/, '');
    const segment = path.slice(path.lastIndexOf('/')) || '/';
    if (SECTION_ROUTES[segment]) return SECTION_ROUTES[segment];

    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) return hash;

    return null;
  } catch {
    return null;
  }
}

/**
 * Jump without animation.
 *
 * index.css sets html { scroll-behavior: smooth }, which would otherwise
 * animate every view change over the whole page height — measured at 1440px,
 * opening a job page left a ~1.5s glide from 4736px down to 0. ScrollToOptions
 * behavior:'instant' would express this directly but throws on Safari below
 * 15.4 (unknown ScrollBehavior enum values are a TypeError), so the CSS
 * property is suspended for the one call instead.
 *
 * The getComputedStyle read is load-bearing, not defensive: without it Chrome
 * still resolves scroll-behavior from the stale computed value and animates
 * anyway, because setting an inline property does not by itself flush style.
 * Reading it back forces the recalculation before the scroll is requested.
 */
export function jumpTo(y) {
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  void getComputedStyle(root).scrollBehavior;
  window.scrollTo(0, y);
  root.style.scrollBehavior = prev;
}

/** Open a job page. */
export function navigateToRole(slug) {
  homeScroll = window.scrollY;
  jumpTo(0);
  window.history.pushState({ role: slug }, '', roleHref(slug));
  window.dispatchEvent(new CustomEvent(ROUTE_EVENT));
}

/** Return to the site. */
export function navigateHome() {
  window.history.pushState({ role: null }, '', SITE_ROOT);
  window.dispatchEvent(new CustomEvent(ROUTE_EVENT));
}

/** Last known home scroll position, or null if there is nothing to restore. */
export function lastHomeScroll() {
  return homeScroll;
}
