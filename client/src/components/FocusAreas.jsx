import { useState } from 'react';

const FocusAreas = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const areas = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <circle cx="20" cy="20" r="4" stroke="#7B6FCD" strokeWidth="1.5" />
          <path d="M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round" transform="rotate(60 20 20)" />
          <path d="M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round" transform="rotate(120 20 20)" />
          <circle cx="20" cy="4" r="2" fill="#7B6FCD" opacity="0.5" />
          <circle cx="20" cy="36" r="2" fill="#7B6FCD" opacity="0.5" />
          <circle cx="4" cy="20" r="2" fill="#7B6FCD" opacity="0.5" transform="rotate(60 20 20)" />
          <circle cx="36" cy="20" r="2" fill="#7B6FCD" opacity="0.5" transform="rotate(60 20 20)" />
          <circle cx="4" cy="20" r="2" fill="#7B6FCD" opacity="0.5" transform="rotate(120 20 20)" />
          <circle cx="36" cy="20" r="2" fill="#7B6FCD" opacity="0.5" transform="rotate(120 20 20)" />
        </svg>
      ),
      accent: '#7B6FCD',
      accentBg: 'rgba(123,111,205,0.08)',
      accentBorder: 'rgba(123,111,205,0.18)',
      accentLight: 'rgba(123,111,205,0.06)',
      title: 'Precision Oncology Research',
      description:
        'Enable early cancer detection, treatment stratification, and longitudinal monitoring through genomic precision.',
      features: [
        'Next-Generation Sequencing (NGS) for cancer profiling',
        'Liquid biopsy technologies (ctDNA, exosomes)',
        'Biomarker discovery for early detection and monitoring',
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <rect x="6" y="12" width="28" height="20" rx="3" stroke="#3A82C4" strokeWidth="1.5" />
          <path d="M13 22 L16 18 L19 23 L22 16 L25 22 L28 19" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="8" r="3" stroke="#3A82C4" strokeWidth="1.5" />
          <path d="M17 10.5 L16 12" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M23 10.5 L24 12" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      accent: '#3A82C4',
      accentBg: 'rgba(58,130,196,0.08)',
      accentBorder: 'rgba(58,130,196,0.18)',
      accentLight: 'rgba(58,130,196,0.06)',
      title: 'AI in Healthcare',
      description:
        'Accelerate diagnosis accuracy and personalize treatment using artificial intelligence.',
      features: [
        'Predictive models for cancer risk and outcomes',
        'Clinical decision support systems',
        'Real-world data analytics platforms',
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M20 6 L20 18" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="21" r="4" stroke="#D4891E" strokeWidth="1.5" />
          <path d="M8 14 L14 17.5" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 14 L26 17.5" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 28 L14 24.5" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 28 L26 24.5" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8" cy="13" r="2.5" stroke="#D4891E" strokeWidth="1.5" />
          <circle cx="32" cy="13" r="2.5" stroke="#D4891E" strokeWidth="1.5" />
          <circle cx="8" cy="29" r="2.5" stroke="#D4891E" strokeWidth="1.5" />
          <circle cx="32" cy="29" r="2.5" stroke="#D4891E" strokeWidth="1.5" />
          <circle cx="20" cy="35" r="2.5" stroke="#D4891E" strokeWidth="1.5" />
          <path d="M20 25 L20 32.5" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      accent: '#D4891E',
      accentBg: 'rgba(212,137,30,0.08)',
      accentBorder: 'rgba(212,137,30,0.18)',
      accentLight: 'rgba(212,137,30,0.06)',
      title: 'Translational Research & Clinical Partnerships',
      description:
        'Bridge the gap between scientific discovery and patient care through strategic clinical partnerships.',
      features: [
        'Partner with hospitals, diagnostic labs, and academic centers',
        'Support clinical trials and validation studies',
        'Fast-track innovations from bench to bedside',
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <circle cx="20" cy="20" r="13" stroke="#2aaa72" strokeWidth="1.5" />
          <ellipse cx="20" cy="20" rx="6" ry="13" stroke="#2aaa72" strokeWidth="1.5" />
          <path d="M7 20 Q13 17 20 20 Q27 23 33 20" stroke="#2aaa72" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 14 Q14 12 20 13 Q26 14 31 12" stroke="#2aaa72" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 26 Q14 28 20 27 Q26 26 31 28" stroke="#2aaa72" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      accent: '#2aaa72',
      accentBg: 'rgba(42,170,114,0.08)',
      accentBorder: 'rgba(42,170,114,0.18)',
      accentLight: 'rgba(42,170,114,0.06)',
      title: 'Global Health & Access',
      description:
        'Democratize access to cutting-edge cancer diagnostics globally and reduce disparities in cancer care delivery.',
      features: [
        'Develop affordable diagnostic solutions',
        'Build research capacity in India, Southeast Asia, and Africa',
        'Reduce disparities in cancer care delivery',
      ],
    },
  ];

  const partners = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <path d="M8 34 L8 16 Q8 14 10 14 L30 14 Q32 14 32 16 L32 34" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 34 L36 34" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 34 L16 24 Q16 22 18 22 L22 22 Q24 22 24 24 L24 34" stroke="#7B6FCD" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M12 19 L12 14" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M28 19 L28 14" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 10 Q20 6 26 10" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <rect x="11" y="18" width="4" height="4" rx="0.5" stroke="#7B6FCD" strokeWidth="1.2"/>
          <rect x="25" y="18" width="4" height="4" rx="0.5" stroke="#7B6FCD" strokeWidth="1.2"/>
        </svg>
      ),
      title: 'Hospitals & Cancer Centers',
      accent: '#7B6FCD',
      accentBg: 'rgba(123,111,205,0.06)',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <circle cx="20" cy="18" r="5" stroke="#3A82C4" strokeWidth="1.5"/>
          <path d="M20 6 L20 13" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 23 L20 30" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 9.5 L17 14" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M26 9.5 L23 14" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8.5 18 L15 18" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M25 18 L31.5 18" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 26.5 L17 22" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M26 26.5 L23 22" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="20" cy="18" r="2" fill="#3A82C4" opacity="0.3"/>
          <path d="M16 30 Q20 34 24 30" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      ),
      title: 'Diagnostic Laboratories',
      accent: '#3A82C4',
      accentBg: 'rgba(58,130,196,0.06)',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <rect x="6" y="14" width="28" height="20" rx="2.5" stroke="#D4891E" strokeWidth="1.5"/>
          <path d="M13 14 L13 11 Q13 8 16 8 L24 8 Q27 8 27 11 L27 14" stroke="#D4891E" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M6 22 L34 22" stroke="#D4891E" strokeWidth="1.5"/>
          <path d="M17 22 L17 26 Q17 28 20 28 Q23 28 23 26 L23 22" stroke="#D4891E" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="20" cy="25" r="1.5" fill="#D4891E" opacity="0.4"/>
        </svg>
      ),
      title: 'Biotech & Medtech',
      accent: '#D4891E',
      accentBg: 'rgba(212,137,30,0.06)',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <path d="M20 6 L22.5 13.5 L30.5 13.5 L24 18.5 L26.5 26 L20 21.5 L13.5 26 L16 18.5 L9.5 13.5 L17.5 13.5 Z" stroke="#2aaa72" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
          <path d="M14 30 L26 30" stroke="#2aaa72" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 33 L24 33" stroke="#2aaa72" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Academic Institutions',
      accent: '#2aaa72',
      accentBg: 'rgba(42,170,114,0.06)',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <path d="M20 10 C20 10 11 15.5 11 22.5 C11 27.3 15 31 20 31 C25 31 29 27.3 29 22.5 C29 15.5 20 10 20 10Z" stroke="#e05a8a" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
          <path d="M15.5 22 C15.5 22 17.5 26 20 26 C22.5 26 24.5 22 24.5 22" stroke="#e05a8a" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 31 L20 35" stroke="#e05a8a" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 34.5 L24 34.5" stroke="#e05a8a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Philanthropic Organizations',
      accent: '#e05a8a',
      accentBg: 'rgba(224,90,138,0.06)',
    },
  ];

  const collaborationAreas = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <circle cx="20" cy="16" r="5" stroke="#7B6FCD" strokeWidth="1.5"/>
          <path d="M20 8 L20 11" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 21 L20 24" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13 16 L16 16" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 16 L27 16" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="20" cy="16" r="2" fill="#7B6FCD" opacity="0.25"/>
          <path d="M12 28 C12 24 15.5 22 20 22 C24.5 22 28 24 28 28" stroke="#7B6FCD" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      accent: '#7B6FCD',
      accentBg: 'rgba(123,111,205,0.05)',
      title: 'Clinical Studies',
      desc: 'Collaborative research initiatives and trial design',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <rect x="7" y="10" width="26" height="20" rx="2.5" stroke="#3A82C4" strokeWidth="1.5"/>
          <path d="M12 18 L18 18" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 22 L22 22" stroke="#3A82C4" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 14.5 L28 14.5" stroke="#3A82C4" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
          <circle cx="27" cy="18" r="3.5" stroke="#3A82C4" strokeWidth="1.4"/>
          <path d="M27 16.5 L27 19.5 M25.5 18 L28.5 18" stroke="#3A82C4" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
      accent: '#3A82C4',
      accentBg: 'rgba(58,130,196,0.05)',
      title: 'Data Partnerships',
      desc: 'Shared datasets and analytics pipelines',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <circle cx="20" cy="20" r="13" stroke="#2aaa72" strokeWidth="1.5"/>
          <path d="M13 20 L17.5 24.5 L27 15" stroke="#2aaa72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      accent: '#2aaa72',
      accentBg: 'rgba(42,170,114,0.05)',
      title: 'Technology Validation',
      desc: 'Real-world testing and verification',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <rect x="8" y="18" width="24" height="16" rx="2" stroke="#D4891E" strokeWidth="1.5"/>
          <path d="M14 18 L14 13 Q14 8 20 8 Q26 8 26 13 L26 18" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="26" r="3" stroke="#D4891E" strokeWidth="1.5"/>
          <path d="M20 29 L20 32" stroke="#D4891E" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      accent: '#D4891E',
      accentBg: 'rgba(212,137,30,0.05)',
      title: 'Grant-Funded Research',
      desc: 'Joint funding and co-authorship',
    },
  ];

  const approaches = [
    { dot: '#7B6FCD', text: 'Translational Science' },
    { dot: '#3A82C4', text: 'Tech-Enabled Care' },
    { dot: '#2aaa72', text: 'Global-First Mindset' },
    { dot: '#D4891E', text: 'Nonprofit-Driven' },
  ];

  return (
    <>
      <style>{`
        .fa-root {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .fa-shimmer-text {
          background: linear-gradient(
            115deg,
            #7B6FCD 0%,
            #5B8DEE 22%,
            #3A82C4 38%,
            #2aaa72 55%,
            #D4891E 75%,
            #7B6FCD 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fa-shimmer 6s linear infinite;
        }

        @keyframes fa-shimmer {
          0%   { background-position: 0%   center; }
          100% { background-position: 200% center; }
        }

        .fa-bar {
          background: linear-gradient(90deg, #7B6FCD, #3A82C4, #2aaa72, #D4891E);
          background-size: 200% auto;
          animation: fa-shimmer 4s linear infinite;
        }

        .fa-accordion-panel {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition:
            grid-template-rows 0.46s cubic-bezier(0.22, 1, 0.36, 1),
            opacity            0.38s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fa-accordion-panel.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .fa-overflow { overflow: hidden; }

        .fa-card {
          transition:
            background-color 0.3s ease,
            border-color     0.3s ease,
            box-shadow       0.3s ease,
            transform        0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }
        .fa-card:hover  { transform: translateY(-2px); }
        .fa-card.active { transform: translateY(-3px); }

        .fa-chevron {
          transition:
            transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.25s ease,
            color 0.25s ease;
        }
        .fa-chevron.open { transform: rotate(180deg); }

        .fa-underline {
          transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fa-stat-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: clamp(1.5rem, 3vw, 2.5rem);
        }

        @media (max-width: 1024px) {
          .fa-stat-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .fa-stat-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
        }

        .fa-collab-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(2rem, 4vw, 3.5rem);
        }

        @media (max-width: 1024px) {
          .fa-collab-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        }
        @media (max-width: 640px) {
          .fa-collab-grid { grid-template-columns: 1fr; gap: 2rem; }
        }

        .fa-btn {
          transition: all 0.25s ease;
        }
        .fa-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }
      `}</style>

      <section
        className="fa-root relative isolate w-full"
        style={{
          background: 'linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ── Background glow blobs matching Hero/Footer theme ── */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '-20%', left: '-8%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,140,30,0.45) 0%, rgba(255,180,80,0.20) 35%, transparent 70%)', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', width: '50%', height: '60%', top: '-15%', left: '22%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,100,255,0.35) 0%, rgba(200,160,255,0.18) 40%, transparent 70%)', filter: 'blur(65px)' }} />
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '40%', right: '-8%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(50,130,255,0.40) 0%, rgba(100,170,255,0.20) 35%, transparent 70%)', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', width: '40%', height: '50%', bottom: '-10%', left: '10%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(20,90,220,0.25) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        </div>

        {/* ── Main Content Container — Fullest Width ── */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:py-44">
          
          {/* ════════════════════════════
              FOCUS AREAS SUB-SECTION
          ════════════════════════════ */}
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20 xl:gap-32">
            
            {/* Left Header Panel */}
            <div className="lg:w-5/12 xl:w-[35%]">
              <h2 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem]">
                Where <br />
                <span className="fa-shimmer-text">Research</span> <br />
                Meets <br />
                <span className="fa-shimmer-text">Real Impact</span>
              </h2>
              <div className="fa-bar mb-8 h-1.5 w-24 rounded-full" />
              <p className="max-w-md text-lg leading-relaxed text-slate-600">
                Bridging the gap between scientific discovery and clinical care through AI and genomic precision.
              </p>
            </div>

            {/* Right Accordion Panel */}
            <div className="flex flex-col gap-4 lg:w-7/12 xl:w-[65%]">
              {areas.map((area, index) => {
                const isActive = activeIndex === index;
                return (
                  <article
                    key={area.title}
                    className={`fa-card overflow-hidden rounded-3xl border backdrop-blur-3xl${isActive ? ' active' : ''}`}
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.6)',
                      borderColor: isActive ? area.accentBorder : 'rgba(255,255,255,0.8)',
                      boxShadow: isActive 
                        ? `0 25px 60px rgba(0,0,0,0.08), 0 5px 20px ${area.accentBg}` 
                        : '0 4px 20px rgba(0,0,0,0.03)',
                    }}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center gap-5 px-6 py-6 text-left outline-none sm:px-8 sm:py-8 lg:px-10 lg:py-9"
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                    >
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border sm:h-16 sm:w-16"
                        style={{ background: area.accentBg, borderColor: area.accentBorder }}
                      >
                        {area.icon}
                      </span>
                      <span className="flex-1">
                        <span className="block text-xl font-bold text-slate-900 lg:text-2xl">{area.title}</span>
                        <span
                          className="fa-underline mt-3 block h-1 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${area.accent}, transparent)`,
                            width: isActive ? '6rem' : '3rem',
                          }}
                        />
                      </span>
                      <span className={`fa-chevron flex h-10 w-10 shrink-0 items-center justify-center rounded-full${isActive ? ' open' : ''}`}
                            style={{ background: isActive ? area.accentBg : 'rgba(0,0,0,0.04)', color: isActive ? area.accent : '#94a3b8' }}>
                        <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>

                    <div className={`fa-accordion-panel${isActive ? ' open' : ''}`}>
                      <div className="fa-overflow">
                        <div className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12">
                          <div className="rounded-3xl p-6 sm:p-8" style={{ background: area.accentLight, border: `1px solid ${area.accentBorder}` }}>
                            <p className="text-lg leading-8 text-slate-600">{area.description}</p>
                            <ul className="mt-6 flex flex-col gap-4">
                              {area.features.map((f) => (
                                <li key={f} className="flex items-start gap-4 text-base text-slate-600">
                                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full" style={{ background: area.accent }} />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ════════════════════════════
              PARTNERSHIP SUB-SECTION
          ════════════════════════════ */}
          <div id="partnership" className="mt-32 pt-20 border-t border-slate-900/5 sm:mt-44 sm:pt-28">
            <div className="mb-20">
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Partnership <span className="fa-shimmer-text">Opportunities</span>
              </h2>
              <div className="fa-bar mb-8 h-1.5 w-24 rounded-full" />
              <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
                Accelerating healthcare innovation through diverse global collaborations.
              </p>
            </div>

            {/* Who We Collaborate With */}
            <div className="mb-24">
              <h3 className="mb-12 text-2xl font-bold text-slate-900 sm:text-3xl">Who We Collaborate With</h3>
              <div className="fa-stat-grid">
                {partners.map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-5 text-center group">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24" 
                         style={{ background: p.accentBg }}>
                      {p.icon}
                    </div>
                    <p className="text-base font-semibold leading-snug text-slate-700 sm:text-lg">{p.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of Collaboration */}
            <div className="mb-24">
              <h3 className="mb-12 text-2xl font-bold text-slate-900 sm:text-3xl">Areas of Collaboration</h3>
              <div className="fa-collab-grid">
                {collaborationAreas.map((area, i) => (
                  <div key={i} className="rounded-3xl p-8 transition-all duration-300 hover:translate-y-[-4px]" 
                       style={{ background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.6)' }}>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: area.accentBg }}>
                      {area.icon}
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-slate-900">{area.title}</h4>
                    <p className="text-base leading-relaxed text-slate-600">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Our Mission CTA */}
            <div className="rounded-[2.5rem] bg-white/40 p-10 backdrop-blur-md border border-white/60 sm:p-16 lg:p-20">
              <div className="max-w-4xl">
                <div className="fa-bar mb-6 h-1.5 w-20 rounded-full" />
                <h3 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">Support Our Mission</h3>
                <p className="mb-10 text-xl leading-relaxed text-slate-600 sm:text-2xl">
                  As a nonprofit, SHRI relies on strategic partnerships and philanthropic contributions to drive breakthroughs in precision cancer care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="fa-btn inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-10 py-5 text-lg font-bold text-white">
                    Become a Partner
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#contact" className="fa-btn inline-flex items-center gap-3 rounded-2xl border-2 border-slate-300 bg-white/60 px-10 py-5 text-lg font-bold text-slate-900 backdrop-blur-sm">
                    Make a Contribution
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FocusAreas;