// Navbar.jsx
import { useState, useEffect, useRef, useCallback } from 'react';

const dropdownItems = {
  'Focus Areas': [
    { name: 'Clinical Research', href: '#focus' },
    { name: 'Public Health', href: '#focus' },
    { name: 'Biomedical Science', href: '#focus' },
    { name: 'Health Policy', href: '#focus' },
  ],
  'Collaboration': [
    { name: 'Academic Partners', href: '#collaboration' },
    { name: 'Industry Partners', href: '#collaboration' },
    { name: 'Government Bodies', href: '#collaboration' },
    { name: 'NGO Network', href: '#collaboration' },
  ],
  'Partnership': [
    { name: 'Strategic Alliance', href: '#partnership' },
    { name: 'Funding Partners', href: '#partnership' },
    { name: 'Global Network', href: '#partnership' },
    { name: 'Become a Partner', href: '#partnership' },
  ],
};

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Focus Areas', href: '#focus', hasDropdown: true },
  { name: 'Collaboration', href: '#collaboration', hasDropdown: true },
  { name: 'Programs', href: '#programs', hasDropdown: true },
  { name: 'Partnership', href: '#partnership', hasDropdown: true },
  { name: 'Contact', href: '#footer' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const navRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsSmall(window.innerWidth < 640);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
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

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navHeight = navRef.current?.offsetHeight || 90;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleDropdownEnter = (name) => {
    clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(prev => prev === name ? null : name);
  };

  const isTransparent = !scrolled && !isOpen;
  const mode = isTransparent ? 'transparent-mode' : 'solid-mode';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&family=Inter:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Root nav ── */
        .nav-root {
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
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.022em;
          line-height: 1.1;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-subtitle {
          font-family: 'Inter', sans-serif;
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
          padding: 10px 18px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
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
        .nav-link.transparent-mode {
          color: #2d2d38;
        }
        .nav-link.transparent-mode:hover {
          color: #1a1a24;
          background: rgba(45, 45, 56, 0.07);
        }
        .nav-link.solid-mode {
          color: #2d2d38;
        }
        .nav-link.solid-mode:hover {
          color: #1a1a24;
          background: rgba(0, 0, 0, 0.045);
        }

        /* ── Chevron ── */
        .nav-chevron {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          color: rgba(45, 45, 56, 0.42);
          transition:
            transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            color     0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-chevron.open { transform: rotate(180deg); }

        /* ── Dropdown panel ── */
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          min-width: 240px;
          background: rgba(255,255,255,0.99);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          box-shadow:
            0 10px 40px rgba(0,0,0,0.11),
            0 2px 10px rgba(0,0,0,0.06);
          padding: 8px;
          transform-origin: top left;
          transition:
            opacity   0.28s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          opacity: 0;
          transform: translateY(-8px) scale(0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        .dropdown-panel.open {
          pointer-events: auto;
          opacity: 1;
          transform: translateY(0px) scale(1);
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 11px 18px;
          border-radius: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #4a4a5a;
          text-decoration: none;
          letter-spacing: -0.006em;
          transition:
            background 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            color      0.2s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .dropdown-item:hover {
          background: rgba(0,0,0,0.045);
          color: #1a1a24;
        }

        /* ── CTA button ── */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -0.012em;
          text-decoration: none;
          cursor: pointer;
          border: none;
          white-space: nowrap;
          transition:
            background  0.35s cubic-bezier(0.4, 0, 0.2, 1),
            color       0.35s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow  0.35s cubic-bezier(0.4, 0, 0.2, 1),
            transform   0.22s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cta-btn.transparent-mode {
          background: rgba(255,255,255,0.88);
          color: #2d2d38;
          box-shadow: 0 2px 14px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9);
        }
        .cta-btn.transparent-mode:hover {
          background: rgba(255,255,255,1);
          box-shadow: 0 5px 24px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,1);
          transform: translateY(-1px);
        }
        .cta-btn.solid-mode {
          background: #1a1a24;
          color: #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.18);
        }
        .cta-btn.solid-mode:hover {
          background: #2d2d38;
          box-shadow: 0 5px 20px rgba(0,0,0,0.22);
          transform: translateY(-1px);
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
          font-family: 'DM Sans', sans-serif;
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

        .mobile-sub-panel {
          overflow: hidden;
          transition:
            max-height 0.34s cubic-bezier(0.4, 0, 0.2, 1),
            opacity    0.30s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-sub-panel.open   { max-height: 400px; opacity: 1; }
        .mobile-sub-panel.closed { max-height: 0;      opacity: 0; }

        .mobile-sub-item {
          display: block;
          padding: 12px 16px;
          border-radius: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #666;
          text-decoration: none;
          letter-spacing: -0.006em;
          transition:
            background 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            color      0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-sub-item:hover {
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
        {/* ── Inner container ── */}
        <div style={{
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
              src="/logo.png" 
              alt="SHRI Logo" 
              className="logo-img"
            />

            <div style={{ lineHeight: 1 }}>
              <div className={`logo-title ${mode}`}>SHRI AI</div>
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
              gap: 2,
              flex: 1,
              justifyContent: 'center',
            }}>
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.name)}
                  onMouseLeave={() => link.hasDropdown && handleDropdownLeave()}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`nav-link ${mode}`}
                      >
                        {link.name}
                        <svg
                          className={`nav-chevron ${openDropdown === link.name ? 'open' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div
                        className={`dropdown-panel ${openDropdown === link.name ? 'open' : ''}`}
                        onMouseEnter={() => clearTimeout(dropdownTimerRef.current)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {(dropdownItems[link.name] || []).map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="dropdown-item"
                            onClick={(e) => handleNavClick(e, item.href)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className={`nav-link ${mode}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ── Right: CTA + Hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            {!isMobile && (
              <a
                href="#footer"
                onClick={(e) => handleNavClick(e, '#footer')}
                className={`cta-btn ${mode}`}
              >
                Support Our Mission
              </a>
            )}

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
              padding: '12px clamp(16px,4vw,56px) 20px',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {navLinks.map((link, idx) => (
                  <div key={link.name}>
                    {idx > 0 && <div className="mobile-divider" />}

                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(link.name)}
                          className="mobile-link"
                        >
                          <span>{link.name}</span>
                          <svg
                            style={{
                              width: 18,
                              height: 18,
                              color: 'rgba(45,45,56,0.38)',
                              transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
                              transform: mobileDropdown === link.name
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                              flexShrink: 0,
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <div className={`mobile-sub-panel ${mobileDropdown === link.name ? 'open' : 'closed'}`}>
                          <div style={{
                            paddingLeft: 14,
                            marginLeft: 14,
                            marginBottom: 8,
                            borderLeft: '2px solid rgba(0,0,0,0.07)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                          }}>
                            {(dropdownItems[link.name] || []).map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="mobile-sub-item"
                                onClick={(e) => handleNavClick(e, item.href)}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="mobile-link"
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div style={{
                marginTop: 16,
                paddingTop: 16,
                borderTop: '1px solid rgba(0,0,0,0.06)',
              }}>
                <a
                  href="#footer"
                  onClick={(e) => handleNavClick(e, '#footer')}
                  className="cta-btn solid-mode"
                  style={{ width: '100%', padding: '16px 28px' }}
                >
                  Support Our Mission
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;