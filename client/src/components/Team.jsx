import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 'sena',
    initials: 'SP',
    name: 'Sena Palanisami',
    role: 'Founder & Technology Leader',
    bio: 'Open-source healthcare technology · Ex-Chairman of OpenEMR',
    image: '/Sena-Palanisami.webp',
    cardSummary: 'Open-source healthcare technology and AI.',
    objectPosition: '50% 22%',
    accent: '#7B6FCD',
    accentSoft: 'rgba(123, 111, 205, 0.12)',
    summary:
      'Technology entrepreneur and healthcare technology leader with more than four decades of experience across software, open-source technology, and healthcare IT.',
    quote:
      'Technology should make healthcare more accessible \u2014 not more complicated or more expensive.',
    sections: [
      {
        heading: 'Open Source in Healthcare',
        paragraphs: [
          "As former Chairman of OpenEMR, one of the world's leading open-source Electronic Medical Record platforms, Sena helped advance the goal of making healthcare technology more accessible, affordable, and interoperable.",
          'That work shaped a conviction that healthcare innovation should not be limited by proprietary technology or geography: open source can put high-quality clinical software in the hands of organisations and communities that would otherwise have no route to it.',
        ],
      },
      {
        heading: 'AI for Precision Medicine',
        paragraphs: [
          'Sena now applies the same philosophy through SHRI-AI, developing and supporting open-source AI for cancer detection, precision oncology, genomic medicine, stroke care, and preventive health.',
          'SHRI-AI combines AI, medical imaging, genomics, and clinical data to build solutions meant for real deployment in partnership with hospitals, laboratories, researchers, and clinicians.',
        ],
      },
      {
        heading: 'Current Focus',
        list: [
          'NGS and liquid biopsy data with AI, for earlier cancer detection, disease monitoring, and personalised treatment strategies',
          'Stroke-AI \u2014 applying AI to medical imaging for early detection, risk assessment, and clinical decision support',
          'Genomic medicine and preventive healthcare',
          'Open-source tooling that hospitals and labs can adopt directly',
        ],
      },
      {
        heading: 'Vision',
        paragraphs: [
          'His long-term aim is an open healthcare technology ecosystem in which advanced AI and precision medicine reach not only major medical centres, but hospitals, laboratories, and communities in underserved regions.',
        ],
      },
      {
        heading: 'Earlier Career & Education',
        paragraphs: [
          'Sena founded the ViSolve US operation in 1998 and became its Chairman and CEO in 2001, growing it into a 50+ member organisation. Before that he spent nearly 20 years at Hewlett-Packard, moving from software engineering into leadership across development, operations, product planning, and business development, and helping establish international software operations in Australia and India.',
          "He holds a Master's degree in Mathematics and a Master's degree in Computer Science from the University of Minnesota, Minneapolis.",
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
    cardSummary: 'Group Vice President, FP&A at Gartner.',
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
    cardSummary: 'Founder of Indostates Health · Neuroradiology.',
    objectPosition: '50% 20%',
    accent: '#3A82C4',
    accentSoft: 'rgba(58, 130, 196, 0.12)',
    tag: 'Founder of Indostates Health',
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
  {
    id: 'balasubramaniam',
    initials: 'BA',
    name: 'Dr. Balasubramaniam A V',
    role: 'MBBS, MD (PGI, Chandigarh), DNB, FRCR (UK)',
    bio: 'MBBS, MD (PGI, Chandigarh), DNB, FRCR (UK)',
    image: '/Balasubramaniam-AV.webp',
    cardSummary: 'Diagnostic Radiology and stroke imaging AI.',
    // Portrait is landscape (1200x1010) and the subject sits slightly left of
    // centre, so the 5:8 card crop is nudged left and up to keep the face
    // framed without cutting the forehead.
    objectPosition: '44% 6%',
    accent: '#2aaa72',
    accentSoft: 'rgba(42, 170, 114, 0.12)',
    summary:
      'Diagnostic Radiologist with more than 15 years of experience interpreting a broad range of medical imaging subspecialities, and a strong interest in integrating AI and machine learning into diagnostic radiology.',
    sections: [
      {
        heading: 'Clinical Focus',
        paragraphs: [
          'Dr. Balasubramaniam applies clinical and imaging expertise to support the development, validation, and refinement of AI-driven solutions for medical imaging.',
          'His work includes stroke imaging protocols and imaging-based decision support, contributing to the assessment of findings relevant to acute ischemic stroke, intracranial hemorrhage, large-vessel occlusion, and treatment planning — with a particular interest in optimising imaging workflows for timely diagnosis in emergency neurological care.',
        ],
      },
      {
        heading: 'Artificial Intelligence Projects',
        paragraphs: [
          'More than five years of experience across AI projects, collaborating with AI researchers, data scientists, software engineers, and healthcare technology teams to provide clinical and radiological expertise in the development, evaluation, and clinical application of AI-driven medical imaging solutions.',
        ],
        list: [
          'Defining clinically relevant use cases',
          'Reviewing imaging datasets, and supporting annotation and validation',
          'Evaluating algorithm performance',
          'Providing expert feedback to improve the clinical relevance and usability of AI products',
        ],
      },
      {
        heading: 'Medical Education & Training',
        list: [
          'MBBS — Madras Medical College, Chennai',
          'MD — PGIMER, Chandigarh',
          'DNB — PGIMER, Chandigarh',
          'FRCR — Royal College of Radiologists, UK',
        ],
      },
      {
        heading: 'Professional Experience',
        list: [
          'Senior Resident — PGIMER, Chandigarh',
          'Consultant Radiologist — Anderson Diagnostics and Labs, Chennai',
          'Consultant Radiologist — Avitis Superspeciality Hospital, Palakkad, Kerala',
          'Senior Consultant Radiologist — Gleneagles Hospital (Fortis Network), Chennai',
        ],
      },
      {
        heading: 'Professional Memberships',
        list: [
          'Indian Medical Association',
          'Indian Radiological and Imaging Association',
          'Radiological Society of North America',
          'Indian Academy of Cardiac Imaging',
        ],
      },
    ],
  },
  {
    id: 'muruganand',
    initials: 'SM',
    name: 'Dr. S. K. Muruganand',
    role: 'MBBS, DMRD',
    bio: 'MBBS, DMRD',
    image: '/SK-Muruganand.webp',
    // Source is a square 1:1 portrait, unlike the others' varied crops. The
    // card's 5:8 frame crops width only (face is horizontally centred, so
    // 50% suffices there); the mobile modal's 16:10 frame crops height, so a
    // low Y keeps the top-anchored hair/face and trims from the bottom.
    objectPosition: '50% 15%',
    accent: '#1F8A8A',
    accentSoft: 'rgba(31, 138, 138, 0.12)',
    tag: 'Founder of The Scan Point',
    cardSummary: 'Founder of The Scan Point \u00b7 Diagnostic Radiology.',
    summary:
      'Diagnostic radiologist with three decades in radiology, and founder of The Scan Point, a diagnostic imaging centre offering X-ray, ultrasound, and CT services. His career spans academic radiology as faculty and independent practice building and running a full-service imaging centre.',
    sections: [
      {
        heading: 'Medical Education & Training',
        paragraphs: [
          'Dr. Muruganand completed his MBBS (Bachelor of Medicine, Bachelor of Surgery) before going on to specialise in diagnostic imaging with a DMRD (Diploma in Medical Radio-Diagnosis).',
        ],
        list: [
          'MBBS \u2014 PSG Medical College',
          'DMRD \u2014 JJM Medical College, Davangere, Karnataka',
        ],
      },
      {
        heading: 'Professional Experience',
        paragraphs: [
          'Dr. Muruganand began his career in academic radiology, working as an Assistant Professor at SRMC, Chennai, from 1996 to 1998.',
          'In 1998, he moved from academic practice to independent practice, founding his own diagnostic imaging centre, The Scan Point \u2014 a step that shifted his focus from teaching radiology to building and running a diagnostic imaging service of his own.',
        ],
      },
      {
        heading: 'The Scan Point \u2014 Diagnostic Imaging Centre',
        paragraphs: [
          'The Scan Point provides diagnostic imaging services built around X-ray, ultrasound, and CT technology.',
          'Together, this equipment allows the centre to offer radiography, ultrasonography, and cross-sectional CT imaging under one roof, supporting a broad range of everyday diagnostic imaging needs.',
        ],
        list: [
          '500mA X-ray unit',
          'Three ultrasound machines',
          'Multi-slice CT scanner',
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
            {member.tag && (
              <p className="team-modal-tag" style={{ color: member.accent }}>
                {member.tag}
              </p>
            )}
          </div>

          <p className="team-modal-summary">{member.summary}</p>

          {member.quote && (
            <blockquote className="team-modal-quote" style={{ borderColor: member.accent }}>
              {member.quote}
            </blockquote>
          )}

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

        /* Cards are ~40% smaller than before (376px -> 232px wide). Width is a
           single token so the padding and type below scale from one number.
           Flex rather than grid auto-fit: auto-fit sizes a whole row of tracks
           to the container, so with only three cards the leftover tracks pushed
           the set off-centre. Flex wrap + centre stays centred at any count.
           Card width and gap re-tuned for five members: the previous ceiling
           (232px card, 1.6rem gap) fit only four across the 1200px container,
           orphaning the fifth onto its own row.
           The floor came down only to 180px, not further — the name's
           font-size is driven by this same --team-card-w (see .team-name
           below), but actually renders inside .team-card-media, which is
           inset from the flex item by the card's own frame padding. That
           fixed-pixel inset eats a bigger share of a narrower card, so past
           roughly 180px "Dr. Balasubramaniam A V" and "Dr. S. K. Muruganand"
           overflowed the scrim's fixed 42% height — measured directly in a
           real browser (not assumed) down to a 136px rendered card at 1016px
           wide, well past where clamp()'s own floor should have stopped it.
           Below the width where 180px still fits five across, the 2-up
           tier's breakpoint (below) is extended to cover the gap instead of
           letting five cramp into an unsafe width. */
        .team-grid {
          --team-card-w: clamp(180px, 15vw, 200px);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: clamp(0.75rem, 1.8vw, 1.25rem);
        }
        .team-grid > * {
          flex: 0 0 var(--team-card-w);
          max-width: 100%;
        }

        /* ── Card: light "gallery mat" frame around a full-bleed portrait,
              identity typeset over the photo as it fades into the mat ── */
        .team-card {
          display: block;
          width: 100%;
          padding: clamp(6px, 0.7vw, 8px);
          background: #ffffff;
          border: 1px solid rgba(20, 20, 30, 0.07);
          border-radius: clamp(18px, 1.8vw, 22px);
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
          border-radius: clamp(12px, 1.3vw, 16px);
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
        /* Shorter than it used to be (42% vs 56%): at 56% the panel reached far
           enough up the portrait to sit over chins and faces on the cards whose
           copy runs to three lines.
           The fade is built from many closely-spaced stops rather than a few.
           A 3-4 stop gradient over this distance produces a visible "edge"
           where the ramp starts — the thing that makes a scrim read as a bar
           pasted onto the photo. Easing the alpha gradually (and masking the
           blur out on the same curve, so the blur never stops abruptly either)
           is what keeps the transition invisible. */
        .team-card-scrim {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 42%;
          pointer-events: none;
          backdrop-filter: blur(14px) saturate(130%);
          -webkit-backdrop-filter: blur(14px) saturate(130%);
          background: linear-gradient(
            to top,
            rgba(14, 14, 22, 0.82) 0%,
            rgba(14, 14, 22, 0.80) 12%,
            rgba(14, 14, 22, 0.74) 24%,
            rgba(14, 14, 22, 0.64) 36%,
            rgba(14, 14, 22, 0.52) 48%,
            rgba(14, 14, 22, 0.39) 60%,
            rgba(14, 14, 22, 0.26) 72%,
            rgba(14, 14, 22, 0.15) 82%,
            rgba(14, 14, 22, 0.07) 90%,
            rgba(14, 14, 22, 0.02) 96%,
            rgba(14, 14, 22, 0) 100%
          );
          -webkit-mask-image: linear-gradient(
            to top,
            #000 0%, #000 30%,
            rgba(0,0,0,0.92) 46%, rgba(0,0,0,0.78) 58%,
            rgba(0,0,0,0.58) 70%, rgba(0,0,0,0.36) 80%,
            rgba(0,0,0,0.18) 88%, rgba(0,0,0,0.06) 95%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to top,
            #000 0%, #000 30%,
            rgba(0,0,0,0.92) 46%, rgba(0,0,0,0.78) 58%,
            rgba(0,0,0,0.58) 70%, rgba(0,0,0,0.36) 80%,
            rgba(0,0,0,0.18) 88%, rgba(0,0,0,0.06) 95%,
            transparent 100%
          );
        }

        .team-card-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0 clamp(0.7rem, 1.1vw, 0.9rem) clamp(0.8rem, 1.3vw, 1rem);
        }

        .team-name {
          display: flex;
          /* baseline-ish alignment via a small offset on the badge instead of
             align-items:center: with a two-line name, centring drops the badge
             to the middle of the block, away from the name's first line. */
          align-items: flex-start;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          /* Scales with the CARD, not the viewport. The card width swings from
             196px (4-up at 1024, 2-up at 600) to 300px (2-up at 900), so a
             single fixed size cannot work: at 14.7px the longest name
             ("Dr. Balasubramaniam A V") ran to three lines on the narrow
             cards, pushing that card's text up over the face. Deriving the
             size from --team-card-w keeps the name at two lines at every
             card width. cqi would be the modern tool here, but the card is
             not a container, and adding containment would change how the
             absolutely-positioned scrim and content resolve. */
          font-size: clamp(0.78rem, calc(var(--team-card-w, 232px) * 0.062), 0.95rem);
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.28;
          margin: 0 0 0.28rem;
        }

        .team-badge {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          /* Nudged down to sit optically on the first line's cap-height now
             that the row is top-aligned for two-line names. */
          margin-top: 0.12em;
        }

        .team-card-summary {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 0.76rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.45;
          letter-spacing: -0.003em;
          margin: 0;
          text-wrap: pretty;
          /* Reserve two lines so names share a baseline across a row. No clamp:
             at narrow widths the copy may run to a third line, and cards are
             single-column there, so growing is preferable to truncating.
             Kept at two lines rather than trimmed to one: the summaries now
             fit in two at every width, and a shared reserve is what keeps the
             names aligned across the row. */
          min-height: 2.9em;
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
        /* With four cards the natural flex wrap produces a 3/1 split between
           ~730 and ~1000px — three across with a single orphan beneath. Capping
           the card width here forces a balanced 2/2 instead, which is why this
           range is pinned rather than left to wrap on its own. */
        @media (min-width: 640px) and (max-width: 1249px) {
          .team-grid {
            /* 38vw (not 30vw) is what actually forces 2-up: at 900px wide a
               30vw card still resolved to 230px, so three fit and the fourth
               orphaned. Two cards plus the gap must exceed half the row for
               the third to be pushed down.
               Upper bound raised from 1000px to 1249px: the five-card base
               tier above is only safe (see the comment on .team-grid) from
               roughly 1250px up, where 15vw first clears the 180px floor with
               enough margin. Below that, this wider, already-proven-safe 2-up
               sizing takes over instead of a cramped five-across row. */
            --team-card-w: clamp(200px, 38vw, 300px);
          }
        }
        /* On phones give the card a little more room, since it is the only one
           on the row. Flex handles the wrapping itself. */
        @media (max-width: 520px) {
          .team-grid {
            --team-card-w: min(260px, 100%);
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

        /* Founder/affiliation credential, sat under the qualifications pill.
           Inherits the member's accent so it reads as part of the identity
           block rather than as body copy. */
        .team-modal-tag {
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: clamp(0.82rem, 1vw, 0.9rem);
          letter-spacing: 0.01em;
          margin: 0.6rem 0 0;
          line-height: 1.4;
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

        .team-modal-quote {
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: var(--fw-light);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          line-height: 1.6;
          color: #2f2f3c;
          margin: 0 0 clamp(1.5rem, 3vw, 2rem);
          padding: 0.1rem 0 0.1rem clamp(0.85rem, 1.4vw, 1.1rem);
          border-left: 2px solid currentColor;
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
              Guided by experienced leaders in medicine, radiology, technology, and finance, committed to advancing equitable precision healthcare worldwide.
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
