import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Team from './components/Team';
import Careers from './components/Careers';
import Footer from './components/Footer';
import JobDetail from './components/JobDetail';
import { getRoleBySlug } from './data/roles';
import {
  ROUTE_EVENT,
  jumpTo,
  lastHomeScroll,
  readRoleSlug,
  readSectionRoute,
} from './lib/careersRoute';
import { scrollTargetFor } from './lib/scrollToSection';

function App() {
  const wrapRef  = useRef(null);
  const aboutRef = useRef(null);
  const focusRef = useRef(null);

  // ── Route ──
  // null = the site; a slug = that job's own page. See lib/careersRoute.js for
  // why this is a query parameter and not a path.
  const [roleSlug, setRoleSlug] = useState(readRoleSlug);
  // Set once the deep link has been honoured, so returning from a job page
  // restores the visitor's own scroll position instead of jumping back to the
  // section named in the URL.
  const deepLinked = useRef(false);

  useEffect(() => {
    // Custom event = an in-page navigation from a card or a Back button.
    // popstate = the browser's own back/forward.
    const sync = () => setRoleSlug(readRoleSlug());
    window.addEventListener(ROUTE_EVENT, sync);
    window.addEventListener('popstate', sync);

    // Scroll position is restored below, per view. Left on 'auto' the browser
    // would also try, and the two fight on back/forward.
    const previous = window.history.scrollRestoration;
    if (previous) window.history.scrollRestoration = 'manual';

    return () => {
      window.removeEventListener(ROUTE_EVENT, sync);
      window.removeEventListener('popstate', sync);
      if (previous) window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    const wrap  = wrapRef.current;
    const about = aboutRef.current;
    const focus = focusRef.current;
    if (!wrap || !about || !focus) return;

    let raf = null;
    let lastWrapHeight = 0;

    // ── Recalculate wrapper height whenever content changes ──
    const measure = () => {
      const aH = about.offsetHeight;
      const fH = focus.offsetHeight;
      const total = aH + fH;

      // Only update DOM if value actually changed (avoids layout thrash)
      if (total !== lastWrapHeight) {
        wrap.style.height = `${total}px`;
        lastWrapHeight = total;
      }
    };

    // ── Reposition FocusAreas based on scroll ──
    const tick = () => {
      raf = null;
      // Re-measure every tick so accordion changes are picked up
      measure();

      const rect = wrap.getBoundingClientRect();
      const aH   = about.offsetHeight;
      const s    = Math.max(0, -rect.top);
      const p    = Math.min(1, s / aH);
      focus.style.transform = `translateY(${(1 - p) * 100}%)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      measure();
      tick();
    };

    // ── Watch FocusAreas DOM for height changes (accordion expand/collapse) ──
    const resizeObserver = new ResizeObserver(() => {
      // Don't call tick() here directly — schedule via rAF to avoid
      // "ResizeObserver loop limit exceeded" warnings
      if (!raf) raf = requestAnimationFrame(tick);
    });

    // Observe both sections so any height change triggers recalculation
    resizeObserver.observe(about);
    resizeObserver.observe(focus);

    // ── Initial setup ──
    measure();
    tick();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // roleSlug: while a job page is mounted the three refs are null and this
    // effect bails out, so it has to run again when the site comes back.
  }, [roleSlug]);

  // ── Scroll position across a view change ──
  // Declared after the overlap effect on purpose: that one sets the wrapper's
  // explicit height, and without it the document is too short for the target
  // scroll offset to be reachable.
  useEffect(() => {
    if (roleSlug) {
      jumpTo(0);
      return;
    }

    // Put the visitor back on the card they came from. null means we
    // never left the site (a first load), so there is nothing to restore.
    const y = lastHomeScroll();
    if (y !== null) jumpTo(y);
  }, [roleSlug]);

  // ── Deep link into a section ──
  // /careers (linked from Stroke-AI) and /#careers both land on the Careers
  // heading. Declared after the two effects above so the wrapper already has
  // its explicit height and scrollTargetFor can measure the real document.
  useEffect(() => {
    if (roleSlug || deepLinked.current) return;
    const id = readSectionRoute();
    if (!id) return;
    deepLinked.current = true;

    // Web fonts and late images change section offsets, so the first landing
    // can be a few hundred pixels out. Land immediately, then correct once the
    // layout has settled.
    let cancelled = false;
    let landedAt = null;

    const land = () => {
      const top = scrollTargetFor(id);
      if (top === null) return;
      landedAt = top;
      jumpTo(top);
    };

    // The correction must never fight someone who has taken over. Gestures
    // cover the obvious cases; the scroll check also covers the ones that are
    // not gestures at all — a nav link clicked during the window, or a smooth
    // scroll already in flight. The dead band is wide enough that a small
    // layout shift settling underneath us does not read as a visitor.
    const stop = () => { cancelled = true; };
    const onScroll = () => {
      if (landedAt !== null && Math.abs(window.scrollY - landedAt) > 40) cancelled = true;
    };
    const opts = { passive: true };
    window.addEventListener('wheel', stop, opts);
    window.addEventListener('touchstart', stop, opts);
    window.addEventListener('keydown', stop, opts);
    window.addEventListener('scroll', onScroll, opts);

    land();
    document.fonts.ready.then(() => {
      if (!cancelled) requestAnimationFrame(() => { if (!cancelled) land(); });
    });

    return () => {
      window.removeEventListener('wheel', stop, opts);
      window.removeEventListener('touchstart', stop, opts);
      window.removeEventListener('keydown', stop, opts);
      window.removeEventListener('scroll', onScroll, opts);
    };
  }, [roleSlug]);

  if (roleSlug) {
    return <JobDetail job={getRoleBySlug(roleSlug)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      {/* ── Scroll-overlap wrapper ── */}
      <div
        ref={wrapRef}
        style={{
          position: 'relative',
          overflow: 'clip',
        }}
      >
        {/* About — sticks at top, scrolls away naturally */}
        <div
          ref={aboutRef}
          id="about"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          <About />
        </div>

        {/* FocusAreas — slides up over About as user scrolls */}
        <div
          ref={focusRef}
          id="focus"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 2,
            willChange: 'transform',
            // Prevent the sticky element itself from
            // collapsing and causing height miscalculation
            minHeight: 'max-content',
          }}
        >
          <FocusAreas />
        </div>
      </div>

      <Team />

      <Careers />

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;