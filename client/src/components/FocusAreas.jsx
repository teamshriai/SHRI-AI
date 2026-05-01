import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FocusAreas = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const areas = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform="rotate(60 20 20)" />
          <path d="M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform="rotate(120 20 20)" />
          <circle cx="20" cy="4" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="20" cy="36" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="4" cy="20" r="2" fill="currentColor" opacity="0.5" transform="rotate(60 20 20)" />
          <circle cx="36" cy="20" r="2" fill="currentColor" opacity="0.5" transform="rotate(60 20 20)" />
          <circle cx="4" cy="20" r="2" fill="currentColor" opacity="0.5" transform="rotate(120 20 20)" />
          <circle cx="36" cy="20" r="2" fill="currentColor" opacity="0.5" transform="rotate(120 20 20)" />
        </svg>
      ),
      accent: '#7B6FCD',
      accentRgb: '123,111,205',
      number: '01',
      title: 'Precision Oncology Research',
      subtitle: 'Genomic Intelligence',
      description: 'Enable early cancer detection, treatment stratification, and longitudinal monitoring through genomic precision.',
      features: [
        'Next-Generation Sequencing (NGS) for cancer profiling',
        'Liquid biopsy technologies (ctDNA, exosomes)',
        'Biomarker discovery for early detection and monitoring',
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <rect x="6" y="12" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 22 L16 18 L19 23 L22 16 L25 22 L28 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 10.5 L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M23 10.5 L24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      accent: '#3A82C4',
      accentRgb: '58,130,196',
      number: '02',
      title: 'AI in Healthcare',
      subtitle: 'Intelligent Diagnostics',
      description: 'Accelerate diagnosis accuracy and personalize treatment using artificial intelligence.',
      features: [
        'Predictive models for cancer risk and outcomes',
        'Clinical decision support systems',
        'Real-world data analytics platforms',
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M20 6 L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="21" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 14 L14 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 14 L26 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 28 L14 24.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 28 L26 24.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="29" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="29" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="35" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 25 L20 32.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      accent: '#D4891E',
      accentRgb: '212,137,30',
      number: '03',
      title: 'Translational Research',
      subtitle: 'Bench to Bedside',
      description: 'Bridge the gap between scientific discovery and patient care through strategic clinical partnerships.',
      features: [
        'Partner with hospitals, diagnostic labs, and academic centers',
        'Support clinical trials and validation studies',
        'Fast-track innovations from bench to bedside',
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="20" cy="20" rx="6" ry="13" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 20 Q13 17 20 20 Q27 23 33 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 14 Q14 12 20 13 Q26 14 31 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 26 Q14 28 20 27 Q26 26 31 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      accent: '#2aaa72',
      accentRgb: '42,170,114',
      number: '04',
      title: 'Global Health & Access',
      subtitle: 'Democratising Care',
      description: 'Democratize access to cutting-edge cancer diagnostics globally and reduce disparities in cancer care delivery.',
      features: [
        'Develop affordable diagnostic solutions',
        'Build research capacity in India, Southeast Asia, and Africa',
        'Reduce disparities in cancer care delivery',
      ],
    },
  ];

  const collaborationAreas = [
    { title: 'Clinical Studies', desc: 'Collaborative research initiatives and trial design', accent: '#7B6FCD', accentRgb: '123,111,205' },
    { title: 'Data Partnerships', desc: 'Shared datasets and analytics pipelines', accent: '#3A82C4', accentRgb: '58,130,196' },
    { title: 'Technology Validation', desc: 'Real-world testing and verification', accent: '#2aaa72', accentRgb: '42,170,114' },
    { title: 'Grant-Funded Research', desc: 'Joint funding and co-authorship', accent: '#D4891E', accentRgb: '212,137,30' },
  ];

  /* ─── shared style helpers ─── */
  const dmSans = { fontFamily: "'DM Sans', sans-serif" };
  const monoNum = {
    ...dmSans,
    fontWeight: 300,
    fontSize: '0.68rem',
    letterSpacing: '0.12em',
    opacity: 0.35,
    marginRight: '1.25rem',
    minWidth: '2rem',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .fa2-root {
          font-family: 'DM Sans', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .fa2-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 0;
        }

        .fa2-hero-em {
          font-style: italic;
          letter-spacing: -0.01em;
        }

        .fa2-shimmer {
          background: linear-gradient(
            110deg,
            #7B6FCD 0%, #a58de8 18%, #3A82C4 36%,
            #2aaa72 52%, #D4891E 70%, #e05a8a 85%, #7B6FCD 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fa2-shimmer-anim 8s linear infinite;
        }

        @keyframes fa2-shimmer-anim {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        /* ── accordion shell ── */
        .fa2-accordion {
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 20px 60px rgba(0,0,0,0.04);
        }

        .fa2-accordion-item {
          border-bottom: 1px solid rgba(0,0,0,0.07);
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease;
        }
        .fa2-accordion-item:last-child { border-bottom: none; }

        .fa2-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          outline: none;
          position: relative;
          padding: clamp(1.2rem, 2.5vw, 1.75rem) clamp(1.25rem, 3vw, 2.5rem);
        }
        .fa2-accordion-btn:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: -2px;
        }

        /* ── partner pills ── */
        .fa2-partner-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.1rem;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
          border: 1px solid transparent;
          background: #fff;
        }

        /* ── collab grid ── */
        .fa2-collab-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .fa2-collab-card {
          padding: 2.2rem 2rem;
          border-right: 1px solid rgba(0,0,0,0.07);
          background: #fff;
          transition: background-color 0.2s ease;
        }
        .fa2-collab-card:last-child { border-right: none; }

        /* ── CTA ── */
        .fa2-cta-block {
          background: #0a0a0a;
          padding: clamp(2.5rem, 5vw, 5rem) clamp(1.75rem, 5vw, 4rem);
        }
        .fa2-cta-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: center;
        }
        .fa2-cta-btns {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex-shrink: 0;
        }
        .fa2-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.9rem 2rem;
          background: #fff;
          color: #0a0a0a;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          border: none;
          cursor: pointer;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .fa2-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.9rem 2rem;
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-weight: 400;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        /* ── misc ── */
        .fa2-divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.07);
        }
        .fa2-partners-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .fa2-focus-grid {
          display: grid;
          grid-template-columns: clamp(200px, 28%, 320px) 1fr;
          gap: clamp(3rem, 5vw, 7rem);
          align-items: start;
        }
        .fa2-sticky-left { position: sticky; top: 6rem; }

        /* ── responsive ── */
        @media (max-width: 768px) {
          .fa2-focus-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .fa2-sticky-left { position: static; }
          .fa2-cta-inner   { grid-template-columns: 1fr; }
          .fa2-cta-btns    { flex-direction: row; flex-wrap: wrap; }
          .fa2-collab-grid { grid-template-columns: repeat(2, 1fr); }
          .fa2-collab-card:nth-child(odd)  { border-right: 1px solid rgba(0,0,0,0.07); }
          .fa2-collab-card:nth-child(even) { border-right: none; }
          .fa2-collab-card:nth-child(1),
          .fa2-collab-card:nth-child(2)    { border-bottom: 1px solid rgba(0,0,0,0.07); }
        }
        @media (max-width: 480px) {
          .fa2-collab-grid { grid-template-columns: 1fr; }
          .fa2-collab-card { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.07); }
          .fa2-collab-card:last-child { border-bottom: none; }
        }
      `}</style>

      <section
        className="fa2-root relative w-full"
        style={{ background: '#f8f7f5', minHeight: '100vh' }}
      >
        <div
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 4rem)',
            position: 'relative',
            zIndex: 1,
          }}
        >

          {/* ═══════════════════════════════════
              SECTION 1 — FOCUS AREAS
          ═══════════════════════════════════ */}
          <div className="fa2-focus-grid">

            {/* Left sticky header */}
            <motion.div
              className="fa2-sticky-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                ...dmSans,
                fontWeight: 300,
                letterSpacing: '0.18em',
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '2rem',
              }}>
                Research Focus
              </p>

              <h2
                className="fa2-hero-title"
                style={{ fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)', color: '#0a0a0a', marginBottom: '2rem' }}
              >
                Where{' '}
                <span className="fa2-hero-em fa2-shimmer">science</span>
                <br />
                meets{' '}
                <span className="fa2-hero-em fa2-shimmer">impact</span>
              </h2>

              <div style={{ width: '2rem', height: '1px', background: '#0a0a0a', marginBottom: '1.5rem' }} />
            </motion.div>

            {/* Right accordion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="fa2-accordion">
                {areas.map((area, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={area.title}
                      className="fa2-accordion-item"
                      style={{ background: isActive ? '#fff' : '#fdfdfd' }}
                    >
                      {/* Animated accent bar */}
                      <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: 2,
                          background: area.accent,
                          transformOrigin: 'top',
                          zIndex: 2,
                        }}
                      />

                      <button
                        type="button"
                        className="fa2-accordion-btn"
                        onClick={() => setActiveIndex(isActive ? null : index)}
                      >
                        {/* Number */}
                        <span style={monoNum}>{area.number}</span>

                        {/* Icon */}
                        <motion.span
                          animate={{ color: isActive ? area.accent : '#bbb' }}
                          transition={{ duration: 0.25 }}
                          style={{ display: 'flex', alignItems: 'center', marginRight: '1.25rem', flexShrink: 0 }}
                        >
                          {area.icon}
                        </motion.span>

                        {/* Title + subtitle */}
                        <span style={{ flex: 1, minWidth: 0 }}>
                          <span style={{
                            ...dmSans,
                            display: 'block',
                            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                            fontWeight: 500,
                            color: isActive ? '#0a0a0a' : '#444',
                            letterSpacing: '-0.01em',
                            transition: 'color 0.2s ease',
                            lineHeight: 1.3,
                          }}>
                            {area.title}
                          </span>
                          <span style={{
                            ...dmSans,
                            display: 'block',
                            fontSize: '0.68rem',
                            color: '#bbb',
                            fontWeight: 300,
                            letterSpacing: '0.1em',
                            marginTop: '0.25rem',
                            textTransform: 'uppercase',
                          }}>
                            {area.subtitle}
                          </span>
                        </span>

                        {/* Plus / cross icon */}
                        <motion.span
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 28,
                            height: 28,
                            flexShrink: 0,
                            marginLeft: '1rem',
                            color: isActive ? area.accent : '#ccc',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </motion.span>
                      </button>

                      {/* Expandable panel */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.3 },
                            }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{
                              paddingLeft: 'clamp(1.25rem, 3vw, 2.5rem)',
                              paddingRight: 'clamp(1.25rem, 3vw, 2.5rem)',
                              paddingBottom: 'clamp(1.5rem, 3vw, 2.25rem)',
                            }}>
                              <p style={{
                                ...dmSans,
                                fontSize: '0.875rem',
                                color: '#666',
                                lineHeight: 1.7,
                                fontWeight: 300,
                                marginBottom: '1.25rem',
                                maxWidth: '58ch',
                              }}>
                                {area.description}
                              </p>

                              <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                {area.features.map((f, fi) => (
                                  <motion.div
                                    key={f}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: fi * 0.07 + 0.1, duration: 0.4 }}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: '1rem',
                                      padding: '0.9rem 0',
                                      borderBottom: fi < area.features.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                                      ...dmSans,
                                      fontSize: '0.875rem',
                                      color: '#555',
                                      fontWeight: 400,
                                      lineHeight: 1.55,
                                    }}
                                  >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '0.18rem' }}>
                                      <path d="M9 12l2 2 4-4" stroke={area.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                      <circle cx="12" cy="12" r="9" stroke={area.accent} strokeWidth="1.5" opacity="0.3" />
                                    </svg>
                                    {f}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ── Divider ── */}
          <div className="fa2-divider" style={{ margin: 'clamp(4rem, 8vw, 7rem) 0' }} />

          {/* ═══════════════════════════════════
              SECTION 2 — PARTNERSHIPS
          ═══════════════════════════════════ */}

          {/* Heading */}
          <motion.div
            id="partnership"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}
          >
            <h2
              className="fa2-hero-title"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#0a0a0a', marginBottom: '1rem' }}
            >
              Partnership{' '}
              <span className="fa2-hero-em fa2-shimmer">Opportunities</span>
            </h2>
            <p style={{ ...dmSans, fontSize: '0.875rem', color: '#888', fontWeight: 300, maxWidth: '50ch', lineHeight: 1.7 }}>
              Accelerating healthcare innovation through diverse global collaborations.
            </p>
          </motion.div>

          {/* Areas of Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}
          >
            <p style={{ ...dmSans, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#bbb', fontWeight: 300, marginBottom: '1.25rem' }}>
              Areas of Collaboration
            </p>
            <div className="fa2-collab-grid">
              {collaborationAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  className="fa2-collab-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  whileHover={{ backgroundColor: `rgba(${area.accentRgb}, 0.03)` }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div style={{ width: 28, height: 2, background: area.accent, marginBottom: '1.5rem', borderRadius: 1 }} />
                  <h4 style={{ ...dmSans, fontSize: '0.95rem', fontWeight: 500, color: '#0a0a0a', letterSpacing: '-0.01em', marginBottom: '0.5rem', marginTop: 0 }}>
                    {area.title}
                  </h4>
                  <p style={{ ...dmSans, fontSize: '0.8rem', color: '#999', fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
                    {area.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="fa2-cta-block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="fa2-cta-inner">
              <div>
                <p style={{ ...dmSans, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontWeight: 300, marginBottom: '1rem', marginTop: 0 }}>
                  Support Our Mission
                </p>
                <h3
                  className="fa2-hero-title"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', color: '#fff', marginBottom: '0.75rem' }}
                >
                  Drive breakthroughs in{' '}
                  <span className="fa2-hero-em" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    precision cancer care
                  </span>
                </h3>
                <p style={{ ...dmSans, fontSize: '0.85rem', color: 'rgba(255,255,255,0.38)', fontWeight: 300, lineHeight: 1.7, maxWidth: '55ch', margin: 0 }}>
                  As a nonprofit, SHRI relies on strategic partnerships and philanthropic contributions.
                </p>
              </div>

              <div className="fa2-cta-btns">
                <motion.a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    window.dispatchEvent(new CustomEvent('open-contact-form'));
                  }}
                  className="fa2-btn-primary"
                  whileHover={{ backgroundColor: '#f0f0f0', y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.18 }}
                >
                  Become a Partner
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    window.dispatchEvent(new CustomEvent('open-contact-form'));
                  }}
                  className="fa2-btn-secondary"
                  whileHover={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)', y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.18 }}
                >
                  Make a Contribution
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default FocusAreas;