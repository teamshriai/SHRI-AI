import { scrollToSection } from '../lib/scrollToSection';

/**
 * Open disciplines. Titles are the standard professional terms for a precision
 * oncology + clinical AI organisation, and every one maps to a focus area the
 * site already states (NGS, liquid biopsy / ctDNA, precision oncology, genomics,
 * stroke AI, translational research with hospitals and labs).
 *
 * Deliberately no location or employment-type field: those are not established
 * anywhere, and inventing them would mislead applicants.
 */
const ROLES = [
  {
    discipline: 'Business & Strategy',
    title: 'Business Development & Partnerships Manager',
    description:
      'Build research and clinical partnerships with hospitals, diagnostic laboratories, and academic centres.',
    accent: '#7B6FCD',
  },
  {
    discipline: 'Laboratory Science',
    title: 'Molecular Biologist',
    focus: 'Genomics & Liquid Biopsy',
    description:
      'NGS library preparation, ctDNA and exosome assay development, and biomarker validation.',
    accent: '#3A82C4',
  },
  {
    discipline: 'Clinical',
    title: 'Oncopathologist',
    focus: 'Molecular Pathology',
    description:
      'Histopathology and molecular correlation to guide and validate diagnostic model development.',
    accent: '#D4891E',
  },
  {
    discipline: 'Computational Biology',
    title: 'Bioinformatics Scientist',
    description:
      'Variant calling, ctDNA analysis pipelines, and multi-omics interpretation at scale.',
    accent: '#2aaa72',
  },
  {
    discipline: 'AI & Engineering',
    title: 'Machine Learning Engineer',
    focus: 'Medical Imaging & Clinical AI',
    description:
      'Model development for oncology and stroke imaging, from training through clinical validation.',
    accent: '#7B6FCD',
  },
  {
    discipline: 'Clinical Research',
    title: 'Clinical Research Associate',
    description:
      'Coordinate validation studies with partner sites and maintain protocol and regulatory compliance.',
    accent: '#3A82C4',
  },
];

const Careers = () => {
  // Same path the navbar and footer Contact links use, so there is exactly one
  // implementation of "take me to the enquiry form".
  const openEnquiry = () => {
    scrollToSection('contact');
    window.dispatchEvent(new CustomEvent('open-contact-form'));
  };

  return (
    <>
      <style>{`
        .careers-section {
          background: var(--surface-alt);
          padding: var(--section-pad-y) var(--gutter);
          position: relative;
          overflow: hidden;
        }

        .careers-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .careers-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(2.5rem, 6vw, 4rem);
        }

        .careers-label {
          font-family: var(--font-sans);
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: #9a9aab;
          margin: 0 0 clamp(0.75rem, 1.5vw, 1rem);
        }

        .careers-heading {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: clamp(1.9rem, 4.2vw, 2.75rem);
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0 0 clamp(0.75rem, 1.8vw, 1.1rem);
          line-height: 1.15;
        }

        .careers-subtext {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-lead);
          color: var(--ink-muted);
          line-height: var(--lh-body);
          margin: 0;
        }

        /* Flex wrap + centre rather than grid auto-fit: auto-fit sizes a whole
           row of tracks to the container, so a set that does not divide evenly
           gets pushed off-centre by the leftover tracks. Card width is a single
           token, so each breakpoint is one reassignment. */
        .careers-grid {
          --careers-card-w: clamp(260px, 29vw, 344px);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: clamp(1rem, 2vw, 1.5rem);
        }
        .careers-grid > * {
          flex: 0 0 var(--careers-card-w);
          max-width: 100%;
        }

        .careers-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: clamp(1.3rem, 2vw, 1.65rem);
          background: var(--surface);
          border: 1px solid rgba(20, 20, 30, 0.07);
          border-radius: clamp(14px, 1.4vw, 18px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 12px 30px rgba(20, 20, 30, 0.05);
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition:
            transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .careers-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 22px 48px rgba(20, 20, 30, 0.1);
        }

        .careers-card:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
        }

        .careers-rule {
          width: 28px;
          height: 2px;
          border-radius: 1px;
          margin-bottom: clamp(1rem, 1.8vw, 1.35rem);
          flex-shrink: 0;
        }

        .careers-card-label {
          display: block;
          font-family: var(--font-sans);
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-regular);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .careers-card-title {
          display: block;
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: var(--fs-h4);
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--ink);
        }

        .careers-card-focus {
          display: block;
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-sm);
          color: var(--ink-soft);
          line-height: 1.4;
          margin-top: 0.2rem;
        }

        .careers-card-desc {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-sm);
          color: var(--ink-muted);
          line-height: var(--lh-body);
          margin: clamp(0.7rem, 1.3vw, 0.95rem) 0 0;
          text-wrap: pretty;
        }

        /* margin-top:auto pins this to the bottom, so the row of cards keeps a
           common baseline for the action regardless of description length. */
        .careers-card-apply {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: clamp(1rem, 1.8vw, 1.35rem);
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: var(--fs-xs);
          letter-spacing: 0.01em;
          color: var(--ink);
          transition: gap 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .careers-card:hover .careers-card-apply {
          gap: 0.7rem;
        }
        .careers-card-apply svg {
          flex-shrink: 0;
        }

        .careers-note {
          text-align: center;
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-sm);
          color: var(--ink-muted);
          line-height: var(--lh-body);
          max-width: var(--measure-narrow);
          margin: clamp(2.25rem, 4vw, 3rem) auto 0;
        }

        @media (max-width: 768px) {
          .careers-grid { --careers-card-w: clamp(260px, 44vw, 320px); }
        }
        @media (max-width: 620px) {
          .careers-grid { --careers-card-w: min(340px, 100%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .careers-card, .careers-card-apply { transition: none; }
          .careers-card:hover { transform: none; }
          .careers-card:hover .careers-card-apply { gap: 0.4rem; }
        }
      `}</style>

      <section className="careers-section" id="careers">
        <div className="careers-inner">
          <div className="careers-header">
            <p className="careers-label">Careers</p>
            <h2 className="careers-heading">Work with us</h2>
            <p className="careers-subtext">
              We are building open-source AI for earlier detection, stroke care, and precision medicine. These are
              the disciplines we hire across, spanning the laboratory, the clinic, and engineering.
            </p>
          </div>

          <div className="careers-grid">
            {ROLES.map((role) => (
              <button
                key={role.title}
                type="button"
                className="careers-card"
                onClick={openEnquiry}
                aria-label={`Enquire about the ${role.title} role`}
              >
                <span className="careers-rule" style={{ background: role.accent }} aria-hidden="true" />
                <span className="careers-card-label" style={{ color: role.accent }}>
                  {role.discipline}
                </span>
                <span className="careers-card-title">{role.title}</span>
                {role.focus && <span className="careers-card-focus">{role.focus}</span>}
                <p className="careers-card-desc">{role.description}</p>
                <span className="careers-card-apply">
                  Enquire
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            ))}
          </div>

          <p className="careers-note">
            Do not see your discipline listed? We are always glad to hear from researchers and
            engineers working on accessible healthcare technology.
          </p>
        </div>
      </section>
    </>
  );
};

export default Careers;
