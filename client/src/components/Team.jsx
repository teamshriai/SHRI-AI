import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 'sena',
    initials: 'SP',
    name: 'Sena Palanisami',
    role: 'Chairman & CEO, ViSolve',
    bio: 'Founder of ViSolve, Senas.net Pvt. Ltd · Ex-Chairman of OpenEMR',
    image: '/Sena-Palanisami.webp',
    cardSummary: 'Chairman & CEO of ViSolve, advancing interoperable healthcare technology.',
    objectPosition: '50% 22%',
    accent: '#7B6FCD',
    accentSoft: 'rgba(123, 111, 205, 0.12)',
    summary:
      'Technology entrepreneur and software product leader with more than 30 years of experience in software product development, international R&D operations, partnerships, and customer engagement.',
    sections: [
      {
        heading: 'Professional Overview',
        paragraphs: [
          "He founded the ViSolve US operation in 1998 and became Chairman and CEO of ViSolve in 2001. Under his leadership, he has guided the company's overall strategy and overseen operations, administration, finance, sales, and marketing, growing ViSolve into a 50+ member, multimillion-dollar organization.",
        ],
      },
      {
        heading: 'Healthcare & Technology Leadership',
        paragraphs: [
          'Sena has a strong commitment to using information technology to enable better healthcare anytime, anywhere in the world. His entrepreneurial and strategic leadership has driven the development of customized and interoperable technology solutions designed to help communities reduce healthcare costs, improve efficiency, and enhance care.',
          'He is also a board member of an open-source EHR community and an active member of HIMSS, with a strong interest in open source, AI, security, and healthcare technology.',
        ],
      },
      {
        heading: 'Earlier Career & Education',
        paragraphs: [
          'Before ViSolve, Sena spent nearly 20 years at Hewlett-Packard, progressing from software development engineering into leadership roles across Development, Operations, Advanced Product Planning, Business Development, and Customer Support. At HP, he was also involved in establishing international software operations in Australia and India.',
          "Sena holds a Master's degree in Mathematics and a Master's degree in Computer Science from the University of Minnesota, Minneapolis.",
        ],
      },
    ],
  },
  {
    id: 'manoj',
    initials: 'MM',
    name: 'Manoj Mittal',
    role: 'Group Vice President, FP&A — Gartner',
    bio: 'Finance leader specializing in FP&A, M&A, and corporate growth strategy.',
    image: '/manoj.webp',
    cardSummary: 'Group Vice President, FP&A at Gartner, with expertise in corporate strategy.',
    objectPosition: '50% 30%',
    accent: '#D4891E',
    accentSoft: 'rgba(212, 137, 30, 0.12)',
    summary:
      'Senior business and technology executive based in Palo Alto, California, with extensive experience in strategy, corporate development, financial planning, executive communication, deal structures, and strategic negotiations.',
    sections: [
      {
        heading: 'Professional Overview',
        paragraphs: [
          'He has held senior leadership positions at Gartner, along with earlier experience at HP and Troba.',
        ],
      },
      {
        heading: 'Professional Experience',
        paragraphs: ['Manoj has been with Gartner in senior leadership roles for more than two decades:'],
        list: [
          'Group Vice President, FP&A — 2017–Present',
          'Managing Vice President, Strategy & Corporate Development — 2007–2017',
          'Director, Strategy & Corporate Development — 2001–2007',
        ],
        footer:
          'His career combines strategic planning, corporate development, financial leadership, and executive-level decision-making.',
      },
      {
        heading: 'Education',
        list: [
          'MBA in Finance, General — Harvard Business School',
          'MS in Computer Science — University of Wisconsin',
          'B.Tech in Mechanical Engineering — Indian Institute of Technology, Delhi',
        ],
      },
      {
        heading: 'Core Expertise',
        list: [
          'Strategy',
          'Corporate Development',
          'Executive-Level Communication',
          'Strategic Negotiations',
          'Deal Structures',
          'Financial Planning & Analysis',
        ],
      },
    ],
  },
  {
    id: 'rajesh',
    initials: 'RR',
    name: 'Dr. Rajesh Rangaswamy',
    role: 'MD, DABR, CAQ(NR), CAST(EVN)',
    bio: 'MD, DABR, CAQ(NR), CAST(EVN)',
    image: '/Rajesh-Rangaswamy.webp',
    cardSummary: 'NeuroIntervention, Neuroradiology, and Interventional Radiology.',
    objectPosition: '50% 20%',
    accent: '#3A82C4',
    accentSoft: 'rgba(58, 130, 196, 0.12)',
    summary:
      'Clinical expertise spans NeuroIntervention, Neuroradiology, and Vascular & Interventional Radiology, with extensive experience across clinical practice, academic medicine, teaching, and specialized interventional care.',
    sections: [
      {
        heading: 'Medical Education & Training',
        list: [
          'Medical School: Coimbatore Medical College, Tamil Nadu, India',
          'Internship: Coimbatore Medical College Hospital, Tamil Nadu, India',
          'Residency: Gujarat Cancer & Research Institute, B.J. Medical College, India',
          'Fellowship in Neuroradiology: Rush University Medical Center, Chicago, USA',
          'Fellowship in Vascular & Interventional Radiology — Body and Neuro-Intervention: University of Florida & Shands, Jacksonville, USA',
        ],
      },
      {
        heading: 'Academic & Clinical Appointments',
        list: [
          'Director, Neuro-Interventional Service — Renown Regional Medical Center',
          'Associate Clinical Professor — University of Nevada School of Medicine, Reno',
          'Adjunct Assistant Professor — Texas A&M University, Texas',
          'Assistant Professor of Radiology — Texas A&M University, 2008–2010',
          'Clinical Assistant Professor of Radiology — University of Florida, Jacksonville, 2005–2008',
        ],
      },
      {
        heading: 'Honors & Recognition',
        list: [
          'Outstanding Teacher, 2008–2009 — Department of Radiology, Scott & White Clinic, Texas A&M University, Temple, Texas',
          'Teacher of the Year, 2007–2008 — Department of Radiology, University of Florida & Shands, Jacksonville',
        ],
      },
      {
        heading: 'Board Certifications & Professional Memberships',
        list: [
          'Gujarat University — Radiology',
          'American Board of Radiology — Diagnostic Radiology',
          'American Board of Radiology — Certificate of Added Qualification in Neuroradiology',
          'American Board of Vascular Medicine — Endovascular Diplomat',
          'Society of Neuro-Interventional Surgery — Senior Member',
          'American Society of Neuroradiology — Senior Member',
          'American Medical Association',
        ],
      },
    ],
  },
];

const TeamModal = ({ member, onClose }) => {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    // Focus the dialog rather than the close button: focusing a button shows a
    // focus ring the instant the modal opens. Tab still lands on Close first.
    dialogRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      className="team-modal-overlay"
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        ref={dialogRef}
        className="team-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${member.id}`}
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <button
          ref={closeBtnRef}
          className="team-modal-close"
          onClick={onClose}
          aria-label="Close profile"
        >
          <X size={20} strokeWidth={1.8} />
        </button>

        <figure className="team-modal-figure">
          <img
            src={member.image}
            alt={`Portrait of ${member.name}`}
            className="team-modal-photo"
            style={{ objectPosition: member.objectPosition }}
          />
        </figure>

        <div className="team-modal-scroll">
          <div className="team-modal-identity">
            <h3 id={`modal-title-${member.id}`} className="team-modal-name">
              {member.name}
            </h3>
            <span
              className="team-role team-modal-role"
              style={{ color: member.accent, background: member.accentSoft }}
            >
              {member.role}
            </span>
          </div>

          <p className="team-modal-summary">{member.summary}</p>

          <div className="team-modal-body">
            {member.sections.map((section) => (
              <div className="team-modal-section" key={section.heading}>
                <h4 className="team-modal-heading" style={{ color: member.accent }}>
                  {section.heading}
                </h4>
                {section.paragraphs?.map((p, i) => (
                  <p className="team-modal-paragraph" key={i}>{p}</p>
                ))}
                {section.list && (
                  <ul className="team-modal-list">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="team-modal-paragraph">{section.footer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  const [activeMember, setActiveMember] = useState(null);

  const openMember = useCallback((member) => setActiveMember(member), []);
  const closeMember = useCallback(() => setActiveMember(null), []);

  return (
    <>
      <style>{`

        .team-section {
          background: #ffffff;
          padding: clamp(4rem, 9vw, 7rem) clamp(1.25rem, 4vw, 2rem);
          position: relative;
          overflow: hidden;
        }

        .team-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .team-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(2.5rem, 6vw, 4rem);
        }

        .team-label {
          font-family: var(--font-sans);
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: #9a9aab;
          margin: 0 0 clamp(0.75rem, 1.5vw, 1rem);
        }

        .team-heading {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(1.9rem, 4.2vw, 2.75rem);
          letter-spacing: -0.02em;
          color: #1a1a1a;
          margin: 0 0 clamp(0.75rem, 1.8vw, 1.1rem);
          line-height: 1.15;
        }

        .team-subtext {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(0.95rem, 1.3vw, 1.05rem);
          color: #6b6b7a;
          line-height: 1.6;
          margin: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(1.5rem, 3vw, 2.25rem);
        }

        /* ── Card: light "gallery mat" frame around a full-bleed portrait,
              identity typeset over the photo as it fades into the mat ── */
        .team-card {
          display: block;
          width: 100%;
          padding: clamp(9px, 1vw, 12px);
          background: #ffffff;
          border: 1px solid rgba(20, 20, 30, 0.07);
          border-radius: clamp(26px, 2.8vw, 34px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 18px 40px rgba(20, 20, 30, 0.07);
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 30px 62px rgba(20, 20, 30, 0.12);
        }

        .team-card:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
        }

        .team-card-media {
          position: relative;
          aspect-ratio: 5 / 8;
          border-radius: clamp(18px, 2vw, 24px);
          overflow: hidden;
          background: #f1f1f4;
        }

        .team-card-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover .team-card-photo {
          transform: scale(1.035);
        }

        /* Frosted glass panel: the portrait stays visible but blurred behind a
           graphite tint, so one treatment reads identically over a light, a
           cream and a near-black backdrop. The mask fades the blur itself out
           toward the top, avoiding a hard edge where the effect stops. */
        .team-card-scrim {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 52%;
          pointer-events: none;
          backdrop-filter: blur(26px) saturate(135%);
          -webkit-backdrop-filter: blur(26px) saturate(135%);
          background: linear-gradient(
            to top,
            rgba(16, 16, 24, 0.74) 0%,
            rgba(16, 16, 24, 0.66) 34%,
            rgba(16, 16, 24, 0.48) 58%,
            rgba(16, 16, 24, 0.26) 78%,
            rgba(16, 16, 24, 0.08) 92%,
            rgba(16, 16, 24, 0) 100%
          );
          -webkit-mask-image: linear-gradient(to top, #000 0%, #000 46%, rgba(0, 0, 0, 0.72) 72%, rgba(0, 0, 0, 0.28) 90%, transparent 100%);
          mask-image: linear-gradient(to top, #000 0%, #000 46%, rgba(0, 0, 0, 0.72) 72%, rgba(0, 0, 0, 0.28) 90%, transparent 100%);
        }

        .team-card-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0 clamp(1.1rem, 1.9vw, 1.5rem) clamp(1.35rem, 2.2vw, 1.7rem);
        }

        .team-name {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          /* Fixed, not vw-based: the card's width is capped by the 1200px
             container, so viewport-scaled type would overflow its own box. */
          font-size: 1.33rem;
          color: #ffffff;
          letter-spacing: -0.017em;
          line-height: 1.2;
          margin: 0 0 0.4rem;
        }

        .team-badge {
          width: 19px;
          height: 19px;
          flex-shrink: 0;
        }

        .team-card-summary {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 0.94rem;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.5;
          letter-spacing: -0.005em;
          margin: 0;
          text-wrap: pretty;
          /* Reserve two lines so names share a baseline across a row. No clamp:
             at narrow widths the copy may run to a third line, and cards are
             single-column there, so growing is preferable to truncating. */
          min-height: 3em;
        }

        .team-role {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: clamp(0.82rem, 1vw, 0.9rem);
          letter-spacing: 0.02em;
          margin: 0 0 clamp(0.85rem, 1.5vw, 1.1rem);
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          display: inline-block;
        }

        /* Between ~641 and ~830px auto-fit yielded 2 columns and an orphaned
           third card; hold a single centred column until 3 genuinely fit. */
        @media (max-width: 860px) {
          .team-grid {
            grid-template-columns: min(340px, 100%);
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .team-card, .team-card-photo { transition: none; }
          .team-card:hover { transform: none; }
          .team-card:hover .team-card-photo { transform: none; }
        }

        /* ── Modal ── */
        .team-modal-overlay {
          position: fixed;
          inset: 0;
          overflow-y: auto;
          overscroll-behavior: contain;
          background: rgba(20, 20, 30, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 4vw, 2.5rem);
          z-index: 200;
        }

        /* Landscape dialog: portrait panel on the left, scrolling profile on
           the right. Only the text column scrolls, so the photo stays put. */
        /* The figure is absolutely positioned and the text column carries the
           height cap. A grid/flex row would size to the text's full content
           height, so max-height would merely clip it and the column would
           never scroll — leaving the end of long profiles unreachable. */
        .team-modal {
          --modal-figure-w: 37%;
          background: #ffffff;
          border-radius: 24px;
          margin: auto;
          flex-shrink: 0;
          width: 100%;
          max-width: 1080px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3);
        }

        .team-modal:focus {
          outline: none;
        }

        .team-modal-figure {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: var(--modal-figure-w);
          margin: 0;
          background: #eeeef1;
        }

        /* Fills its column at any dialog height without ever distorting —
           this is what was stretching the portrait in the old layout. */
        .team-modal-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-modal-scroll {
          margin-left: var(--modal-figure-w);
          max-height: min(86vh, 760px);
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: clamp(1.75rem, 3.2vw, 2.75rem);
        }

        .team-modal-close {
          position: absolute;
          top: clamp(0.85rem, 1.4vw, 1.15rem);
          right: clamp(0.85rem, 1.4vw, 1.15rem);
          z-index: 3;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(20, 20, 30, 0.08);
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #2d2d38;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .team-modal-close:hover {
          background: #ffffff;
          color: #12121a;
        }

        .team-modal-close:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 2px;
        }

        .team-modal-identity {
          margin-bottom: 1.15rem;
          padding-right: 2.75rem;
        }

        .team-modal-name {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: clamp(1.3rem, 2.4vw, 1.6rem);
          color: #1a1a1a;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .team-modal-role {
          margin: 0;
        }

        .team-modal-summary {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: clamp(0.98rem, 1.4vw, 1.08rem);
          color: #3d3d4a;
          line-height: 1.65;
          margin: 0 0 clamp(1.5rem, 3vw, 2rem);
          padding-bottom: clamp(1.25rem, 2.5vw, 1.75rem);
          border-bottom: 1px solid rgba(20,20,30,0.08);
        }

        .team-modal-body {
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 3vw, 2rem);
        }

        .team-modal-heading {
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: clamp(0.82rem, 1vw, 0.92rem);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 0.75rem;
        }

        .team-modal-paragraph {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(0.92rem, 1.1vw, 0.98rem);
          color: #4a4a58;
          line-height: 1.7;
          margin: 0 0 0.75rem;
        }

        .team-modal-paragraph:last-child {
          margin-bottom: 0;
        }

        /* Tailwind preflight resets ul to list-style:none, so markers must be
           asked for. Kept as a block list, not flex: a flex container
           blockifies its children, which suppresses list markers entirely. */
        .team-modal-list {
          margin: 0;
          list-style: disc;
          padding-left: 1.15rem;
        }

        .team-modal-list li::marker {
          color: rgba(20, 20, 30, 0.3);
        }

        .team-modal-list li {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(0.92rem, 1.1vw, 0.98rem);
          color: #4a4a58;
          line-height: 1.6;
        }

        .team-modal-list li + li {
          margin-top: 0.5rem;
        }

        /* Below the landscape threshold the dialog stacks: the portrait becomes
           a banner and the whole dialog scrolls as one column. */
        @media (max-width: 860px) {
          .team-modal-figure {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 10;
            max-height: 32vh;
          }

          .team-modal-scroll {
            margin-left: 0;
            max-height: min(52vh, 520px);
          }

          .team-modal-identity {
            padding-right: 0;
          }
        }

        @media (max-width: 420px) {
          .team-modal-figure {
            aspect-ratio: 3 / 2;
            max-height: 26vh;
          }
        }
      `}</style>

      <section className="team-section" id="team">
        <div className="team-inner">
          <div className="team-header">
            <p className="team-label">Our Team</p>
            <h2 className="team-heading">Leadership</h2>
            <p className="team-subtext">
              Guided by experienced leaders in healthcare, technology, and finance, committed to advancing equitable precision oncology worldwide.
            </p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <button
                type="button"
                className="team-card"
                key={member.id}
                onClick={() => openMember(member)}
                aria-haspopup="dialog"
                aria-label={`View full profile of ${member.name}`}
              >
                <div className="team-card-media">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="team-card-photo"
                    style={{ objectPosition: member.objectPosition }}
                    loading="lazy"
                  />
                  <div className="team-card-scrim" aria-hidden="true" />
                  <div className="team-card-content">
                    <h3 className="team-name">
                      <span>{member.name}</span>
                      <svg
                        className="team-badge"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          transform="translate(0.5, -0.5)"
                          fill="#ffffff"
                          d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.494 0-.964.084-1.4.238C14.545 2.472 13.17 1.5 11.5 1.5s-3.045.972-3.69 2.238C7.374 3.584 6.904 3.5 6.41 3.5c-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.375 9.55.5 10.92.5 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .494 0 .964-.084 1.4-.238.645 1.266 2.02 2.238 3.69 2.238s3.045-.972 3.69-2.238c.436.154.906.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
                        />
                        <path
                          d="M8.3 12.3l2.6 2.6 4.9-5.1"
                          fill="none"
                          stroke="#12121a"
                          strokeWidth="2.1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </h3>
                    <p className="team-card-summary">{member.cardSummary}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeMember && (
          <TeamModal member={activeMember} onClose={closeMember} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Team;
