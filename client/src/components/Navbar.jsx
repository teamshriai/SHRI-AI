// Navbar.jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { scrollToSection, documentTop, navbarOffset } from '../lib/scrollToSection';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About SHRI-AI', href: '#about' },
  { name: 'Focus Area', href: '#focus' },
  { name: 'Collaborating Organizations', href: '#partnership' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact', triggerForm: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 1180);
      setIsSmall(window.innerWidth < 1200);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Active-section tracking ──
  // Section tops are measured once (and on resize) rather than every frame:
  // documentTop() neutralises sticky positioning, which forces a reflow and
  // must never run per scroll event. The scroll handler then only compares
  // cached numbers, so it stays cheap.
  useEffect(() => {
    let tops = [];
    let raf = null;

    const measure = () => {
      tops = navLinks
        .map(({ href }) => {
          const el = document.getElementById(href.slice(1));
          return el ? { id: href.slice(1), top: documentTop(el) } : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);
    };

    const update = () => {
      raf = null;
      if (!tops.length) return;
      // Probe just below the navbar: the section under the navbar's lower edge
      // is the one the reader is actually looking at.
      const probe = window.scrollY + navbarOffset() + 8;
      const docEl = document.documentElement;
      const atBottom = window.scrollY + window.innerHeight >= docEl.scrollHeight - 2;

      let current = tops[0].id;
      if (atBottom) {
        current = tops[tops.length - 1].id;
      } else {
        for (const t of tops) if (t.top <= probe) current = t.id;
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { measure(); onScroll(); };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // Re-measure once webfonts and images have settled, since they shift heights.
    const settle = setTimeout(onResize, 1200);
    if (document.fonts?.ready) document.fonts.ready.then(onResize).catch(() => {});

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const handleNavClick = useCallback((e, href, triggerForm = false) => {
    e.preventDefault();
    setIsOpen(false);
    if (scrollToSection(href) && triggerForm) {
      window.dispatchEvent(new CustomEvent('open-contact-form'));
    }
  }, []);

  const isTransparent = !scrolled && !isOpen;
  const mode = isTransparent ? 'transparent-mode' : 'solid-mode';

  return (
    <>
      <style>{`

        /* ── Root nav ── */
        .nav-root {
          /* Consumed by lib/scrollToSection so the scroll offset matches the
             navbar's settled (solid) height rather than its transparent one. */
          --nav-pad-solid: 16px;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition:
            background 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            padding    0.38s cubic-bezier(0.4, 0, 0.2, 1),
            backdrop-filter 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-root.transparent {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          padding: 28px 0;
        }
        .nav-root.solid {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 6px 30px rgba(0,0,0,0.05);
          padding: 16px 0;
        }

        /* ── Logo ── */
        .logo-img {
          width: 42px;
          height: 42px;
          object-fit: contain;
          flex-shrink: 0;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-img:hover {
          opacity: 0.85;
        }
        
        .logo-title {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.022em;
          line-height: 1.1;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-subtitle {
          font-family: var(--font-sans);
          font-size: 12px;
          letter-spacing: 0.04em;
          line-height: 1.4;
          margin-top: 4px;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-title.transparent-mode   { color: #2d2d38; }
        .logo-subtitle.transparent-mode { color: rgba(45,45,56,0.52); }
        .logo-title.solid-mode          { color: #1a1a24; }
        .logo-subtitle.solid-mode       { color: #888; }

        /* ── Nav links ── */
        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 10px clamp(8px, 1vw, 18px);
          border-radius: 10px;
          font-family: var(--font-sans);
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 400;
          letter-spacing: -0.012em;
          cursor: pointer;
          border: none;
          background: transparent;
          text-decoration: none;
          white-space: nowrap;
          transition:
            color      0.35s cubic-bezier(0.4, 0, 0.2, 1),
            background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 1200px) {
          .nav-link { padding: 10px 12px; }
        }
        .nav-link.transparent-mode {
          color: #2d2d38;
        }
        .nav-link.transparent-mode:hover {
          color: #1a1a24;
          background: rgba(45, 45, 56, 0.13);
        }
        .nav-link.solid-mode {
          color: #2d2d38;
        }
        .nav-link.solid-mode:hover {
          color: #1a1a24;
          background: rgba(0, 0, 0, 0.10);
        }

        /* ── Active-section underline ──
         * Drawn on an inner span so it hugs the label text exactly rather than
         * the link's padding box. Animated with scaleX (compositor-only) and
         * deliberately NOT paired with a font-weight change: bolding the active
         * link would change its text width and shift the whole row on every
         * scroll boundary. */
        .nav-link-label {
          position: relative;
          display: inline-block;
        }
        .nav-link-label::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          height: 1.5px;
          border-radius: 2px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link.active .nav-link-label::after {
          transform: scaleX(1);
        }
        .nav-link.active {
          color: #14141e;
        }

        /* Mobile: a left accent bar reads better than an underline on a
           full-width row, and costs no layout shift. */
        .mobile-link {
          position: relative;
        }
        .mobile-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 2px;
          height: 0;
          background: #14141e;
          border-radius: 2px;
          transform: translateY(-50%);
          transition: height 0.32s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-link.active::before {
          height: 60%;
        }
        .mobile-link.active {
          color: #14141e;
          background: rgba(0, 0, 0, 0.045);
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link-label::after,
          .mobile-link::before {
            transition: none;
          }
        }

        /* ── Hamburger ── */
        .hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 11px;
          border: none;
          cursor: pointer;
          transition:
            background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            color      0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hamburger-btn.transparent-mode {
          background: transparent;
          color: #2d2d38;
        }
        .hamburger-btn.transparent-mode:hover {
          background: rgba(45,45,56,0.08);
        }
        .hamburger-btn.solid-mode {
          background: transparent;
          color: #2d2d38;
        }
        .hamburger-btn.solid-mode:hover {
          background: rgba(0,0,0,0.05);
        }

        /* ── Mobile panel ── */
        .mobile-panel {
          overflow: hidden;
          transition:
            max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1),
            opacity    0.36s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255,255,255,0.98);
          border-top: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 30px rgba(0,0,0,0.07);
        }
        .mobile-panel.open   { max-height: 100dvh; opacity: 1; }
        .mobile-panel.closed { max-height: 0;       opacity: 0; }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 14px;
          border-radius: 12px;
          font-family: var(--font-sans);
          font-size: 17px;
          font-weight: 400;
          color: #2d2d38;
          letter-spacing: -0.012em;
          text-decoration: none;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          transition:
            background 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            color      0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-link:hover {
          background: rgba(0,0,0,0.04);
          color: #1a1a24;
        }

        .mobile-divider {
          height: 1px;
          background: rgba(0,0,0,0.055);
          margin: 4px 0;
        }
      `}</style>

      <nav
        ref={navRef}
        className={`nav-root ${isTransparent ? 'transparent' : 'solid'}`}
      >
        {/* ── Inner container (header row) ── */}
        <div ref={headerRef} data-nav-header style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}>

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 13,
              flexShrink: 0,
              textDecoration: 'none',
            }}
          >
            <img 
              src="/logo.webp" 
              alt="SHRI Logo" 
              className="logo-img"
            />

            <div style={{ lineHeight: 1 }}>
              <div className={`logo-title ${mode}`}>SHRI-AI.org</div>
              {!isSmall && (
                <div className={`logo-subtitle ${mode}`}>
                  Senus Healthcare Research Institute
                </div>
              )}
            </div>
          </a>

          {/* ── Desktop Nav Links ── */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(4px, 0.8vw, 16px)',
              flex: '1 1 auto',
              justifyContent: 'center',
              padding: '0 20px',
            }}>
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`nav-link ${mode}${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={(e) => handleNavClick(e, link.href, link.triggerForm)}
                  >
                    <span className="nav-link-label">{link.name}</span>
                  </a>
                );
              })}
            </div>
          )}

          {/* ── Right: Hamburger (mobile only) ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            {isMobile && (
              <button
                onClick={() => setIsOpen(prev => !prev)}
                className={`hamburger-btn ${mode}`}
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
              >
                <svg
                  style={{
                    width: 24,
                    height: 24,
                    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ── Mobile Menu Panel ── */}
        {isMobile && (
          <div className={`mobile-panel ${isOpen ? 'open' : 'closed'}`}>
            <div style={{
              maxWidth: 1400,
              margin: '0 auto',
              padding: '12px clamp(20px, 4vw, 56px) 20px',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {navLinks.map((link, idx) => (
                  <div key={link.name}>
                    {idx > 0 && <div className="mobile-divider" />}
                    <a
                      href={link.href}
                      className={`mobile-link${activeId === link.href.slice(1) ? ' active' : ''}`}
                      aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
                      onClick={(e) => handleNavClick(e, link.href, link.triggerForm)}
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;