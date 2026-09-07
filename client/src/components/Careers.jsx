import { scrollToSection } from '../lib/scrollToSection';
import { navigateToRole, roleHref } from '../lib/careersRoute';
import { ROLES } from '../data/roles';

/**
 * Open-role grid. Titles are the standard professional terms for a clinical AI
 * organisation working across stroke imaging and precision oncology, and every
 * one maps to a focus area the site already states.
 *
 * The roles themselves — and their full job descriptions — live in
 * src/data/roles.js, because JobDetail.jsx renders the same objects. A card is
 * a real link to /?role=<slug>, so it can be middle-clicked, copied or shared;
 * the click handler upgrades that to an in-page view swap.
 */

const Careers = () => {
  // Same path the navbar and footer Contact links use, so there is exactly one
  // implementation of "take me to the enquiry form".
  const openEnquiry = () => {
    scrollToSection('contact');
    window.dispatchEvent(new CustomEvent('open-contact-form'));
  };

  // A modified click (new tab, new window, download) must keep the browser's
  // own behaviour, which is the whole reason these are anchors and not buttons.
  const openRole = (event, slug) => {
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;
    event.preventDefault();
    navigateToRole(slug);
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

        /* Cards are anchors now, so the link defaults have to be neutralised
           here rather than inherited from Tailwind preflight. */
        .careers-card {
          display: flex;
          text-decoration: none;
          color: inherit;
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

        .careers-note-link {
          background: none;
          border: 0;
          padding: 0;
          font: inherit;
          color: var(--ink);
          cursor: pointer;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
          transition: color 0.22s ease;
        }
        .careers-note-link:hover { color: #3A82C4; }
        .careers-note-link:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
          border-radius: 4px;
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
              We are building AI for stroke care and precision oncology, across the clinic, the
              laboratory and engineering. Open a role for its full description.
            </p>
          </div>

          <div className="careers-grid">
            {ROLES.map((role) => (
              <a
                key={role.slug}
                className="careers-card"
                href={roleHref(role.slug)}
                onClick={(event) => openRole(event, role.slug)}
                aria-label={'Read the full job description for ' + role.title}
              >
                <span className="careers-rule" style={{ background: role.accent }} aria-hidden="true" />
                <span className="careers-card-label" style={{ color: role.accent }}>
                  {role.discipline}
                </span>
                <span className="careers-card-title">{role.title}</span>
                {role.focus && <span className="careers-card-focus">{role.focus}</span>}
                <p className="careers-card-desc">{role.summary}</p>
                <span className="careers-card-apply">
                  View role
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <p className="careers-note">
            Do not see your discipline listed? We are always glad to hear from clinicians,
            researchers and engineers working on accessible healthcare technology —{' '}
            <button type="button" className="careers-note-link" onClick={openEnquiry}>
              write to us
            </button>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Careers;
