import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Footer from './components/Footer';

function App() {
  const wrapRef  = useRef(null);
  const aboutRef = useRef(null);
  const focusRef = useRef(null);

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
  }, []);

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

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;