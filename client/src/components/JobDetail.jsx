import { useEffect, useRef } from 'react';
import { ABOUT_SHRI_AI } from '../data/roles';
import { navigateHome } from '../lib/careersRoute';

/**
 * Standalone job page. Rendered by App instead of the site — not on top of it —
 * so it has its own scroll, its own header and no navbar scroll-spy to fight
 * with. Every listing uses the same section order, driven entirely by the role
 * object in src/data/roles.js.
 */

const SECTIONS = [
  { id: 'jd-about', label: 'About SHRI-AI' },
  { id: 'jd-role', label: 'The role' },
  { id: 'jd-responsibilities', label: 'Key responsibilities' },
  { id: 'jd-candidate', label: 'Ideal candidate' },
  { id: 'jd-fit', label: 'What we look for' },
  { id: 'jd-success', label: 'Success in this role' },
  { id: 'jd-opportunity', label: 'Opportunity' },
];

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/** Where applications go. One constant, used by every listing. */
const HR_EMAIL = 'hr@shri-ai.org';

const JobDetail = ({ job }) => {
  const titleRef = useRef(null);

  // Announce the new page to assistive technology, and label the browser tab.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = job
      ? job.title + ' — Careers | SHRI-AI'
      : 'Role not found — Careers | SHRI-AI';
    // preventScroll: focusing a heading would otherwise scroll the page and
    // undo the jump-to-top that the route change just performed.
    titleRef.current?.focus({ preventScroll: true });
    return () => { document.title = previousTitle; };
  }, [job]);

  const goHome = () => navigateHome();

  // Pre-filling the subject means an application arrives already labelled with
  // the role, which is the whole reason to send people to an address rather
  // than a form. encodeURIComponent, not raw text: titles contain & and —.
  const mailto = job
    ? 'mailto:' + HR_EMAIL + '?subject=' + encodeURIComponent('Application: ' + job.title)
    : 'mailto:' + HR_EMAIL;

  const styles = (
    <style>{`
      .jd-root {
        min-height: 100dvh;
        background: var(--surface);
        font-family: var(--font-sans);
        color: var(--ink);
        display: flex;
        flex-direction: column;
      }

      /* ── Fixed bar ── */
      .jd-bar {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.8rem var(--gutter);
        background: rgba(255, 255, 255, 0.84);
        -webkit-backdrop-filter: blur(18px) saturate(140%);
        backdrop-filter: blur(18px) saturate(140%);
        border-bottom: 1px solid rgba(20, 20, 30, 0.07);
      }
      .jd-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        background: none;
        border: 0;
        padding: 0;
        margin: 0;
        font: inherit;
        color: var(--ink);
        cursor: pointer;
        min-width: 0;
      }
      .jd-brand-mark {
        width: 30px; height: 30px;
        object-fit: contain;
        display: block;
        flex-shrink: 0;
      }
      .jd-brand-name {
        font-size: 0.95rem;
        font-weight: var(--fw-medium);
        letter-spacing: 0.01em;
        white-space: nowrap;
      }
      .jd-brand:focus-visible, .jd-back:focus-visible,
      .jd-apply:focus-visible, .jd-toc-link:focus-visible {
        outline: 2px solid #3A82C4;
        outline-offset: 3px;
        border-radius: 6px;
      }

      .jd-back {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.52rem 1rem;
        border-radius: 999px;
        border: 1px solid rgba(20, 20, 30, 0.14);
        background: var(--surface);
        color: var(--ink);
        font: inherit;
        font-size: var(--fs-xs);
        font-weight: var(--fw-medium);
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background 0.25s ease, border-color 0.25s ease;
      }
      .jd-back:hover {
        background: #f2f1ee;
        border-color: rgba(20, 20, 30, 0.24);
      }
      .jd-back svg { transition: transform 0.25s ease; }
      .jd-back:hover svg { transform: translateX(-2px); }

      /* ── Header band ──
       * Top padding clears the fixed bar (its own height plus its padding),
       * measured rather than guessed at: 30px mark + 0.8rem x 2 = ~56px.
       */
      .jd-hero {
        padding: calc(56px + clamp(2.25rem, 5vw, 4rem)) var(--gutter) clamp(2rem, 4vw, 3rem);
        background: var(--surface-alt);
        border-bottom: 1px solid rgba(20, 20, 30, 0.06);
      }
      .jd-hero-inner { max-width: 1100px; margin: 0 auto; }

      .jd-eyebrow {
        font-size: var(--fs-eyebrow);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        font-weight: var(--fw-medium);
        margin: 0 0 0.95rem;
      }
      .jd-title {
        font-size: clamp(1.6rem, 3.3vw, 2.85rem);
        font-weight: var(--fw-light);
        letter-spacing: -0.025em;
        line-height: 1.14;
        color: var(--ink);
        margin: 0 0 0.65rem;
        max-width: 32ch;
        text-wrap: balance;
      }
      .jd-title:focus { outline: none; }
      .jd-focus {
        font-size: var(--fs-lead);
        font-weight: var(--fw-light);
        color: var(--ink-soft);
        margin: 0 0 1.1rem;
      }
      .jd-summary {
        font-size: var(--fs-lead);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        margin: 0;
        max-width: var(--measure);
        text-wrap: pretty;
      }

      .jd-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 1.1rem clamp(1.5rem, 3vw, 2.75rem);
        margin-top: clamp(1.75rem, 3vw, 2.5rem);
        padding-top: clamp(1.25rem, 2.5vw, 1.75rem);
        border-top: 1px solid rgba(20, 20, 30, 0.09);
      }
      .jd-fact { min-width: 0; }
      .jd-fact-k {
        display: block;
        font-size: var(--fs-2xs);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        color: var(--ink-muted);
        margin-bottom: 0.3rem;
      }
      .jd-fact-v {
        display: block;
        font-size: var(--fs-sm);
        font-weight: var(--fw-regular);
        color: var(--ink);
      }

      /* ── Body ── */
      .jd-body {
        /* The gutter is added to the cap rather than eaten out of it, so the
           content box is the same 1100px as .jd-hero-inner and the index and
           the title share a left edge. */
        max-width: calc(1100px + var(--gutter) * 2);
        margin: 0 auto;
        width: 100%;
        padding: clamp(2.25rem, 5vw, 3.75rem) var(--gutter) clamp(3rem, 6vw, 5rem);
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: clamp(2rem, 4vw, 3.5rem);
      }
      /* The in-page index only appears where there is room for it beside the
         measure; below that it would push the text column too narrow. */
      .jd-toc { display: none; }
      @media (min-width: 1080px) {
        .jd-body { grid-template-columns: 190px minmax(0, 1fr); }
        .jd-toc {
          display: block;
          position: sticky;
          top: 96px;
          align-self: start;
        }
      }
      .jd-toc-title {
        font-size: var(--fs-2xs);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        color: var(--ink-muted);
        margin: 0 0 0.85rem;
      }
      .jd-toc-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }
      .jd-toc-link {
        font-size: var(--fs-xs);
        font-weight: var(--fw-light);
        color: var(--ink-muted);
        text-decoration: none;
        line-height: 1.35;
        transition: color 0.22s ease;
      }
      .jd-toc-link:hover { color: var(--ink); }

      .jd-main { min-width: 0; }
      .jd-section {
        /* Matches the fixed bar so an index link never lands under it. */
        scroll-margin-top: 88px;
        margin: 0 0 clamp(2.25rem, 4vw, 3.25rem);
      }
      .jd-section:last-child { margin-bottom: 0; }
      .jd-h2 {
        font-size: clamp(1.1rem, 1.9vw, 1.45rem);
        font-weight: var(--fw-medium);
        letter-spacing: -0.015em;
        color: var(--ink);
        margin: 0 0 clamp(0.85rem, 1.6vw, 1.2rem);
      }
      .jd-p {
        font-size: var(--fs-body);
        font-weight: var(--fw-light);
        line-height: var(--lh-relaxed);
        color: var(--ink-soft);
        margin: 0 0 0.85rem;
        max-width: var(--measure);
        text-wrap: pretty;
      }
      .jd-p:last-child { margin-bottom: 0; }

      .jd-pipeline {
        display: block;
        font-size: var(--fs-sm);
        font-weight: var(--fw-regular);
        line-height: 1.7;
        color: var(--ink);
        margin: 0 0 1.3rem;
        padding: 0.85rem 1.05rem;
        border-radius: 12px;
        background: var(--surface-alt);
        border: 1px solid rgba(20, 20, 30, 0.07);
        max-width: var(--measure);
      }

      .jd-group { margin-bottom: clamp(1.5rem, 2.6vw, 2.1rem); }
      .jd-group:last-child { margin-bottom: 0; }
      .jd-group-head {
        display: flex;
        align-items: baseline;
        gap: 0.7rem;
        margin-bottom: 0.6rem;
      }
      .jd-group-n {
        font-size: var(--fs-xs);
        font-weight: var(--fw-medium);
        font-variant-numeric: tabular-nums;
        flex-shrink: 0;
      }
      .jd-group-t {
        font-size: 1rem;
        font-weight: var(--fw-medium);
        letter-spacing: -0.01em;
        color: var(--ink);
        line-height: 1.35;
      }
      .jd-lead {
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-soft);
        margin: 0 0 0.6rem;
        max-width: var(--measure);
      }

      /* Tailwind preflight already removes list markers; the dot is drawn so it
         stays aligned to the first line of a wrapped item. */
      .jd-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.42rem;
        max-width: var(--measure);
      }
      .jd-list li {
        position: relative;
        padding-left: 1.05rem;
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-soft);
      }
      .jd-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.62em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: currentColor;
        opacity: 0.34;
      }

      .jd-note {
        margin: 0.85rem 0 0;
        padding-left: 0.9rem;
        border-left: 2px solid rgba(20, 20, 30, 0.14);
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        max-width: var(--measure);
      }

      .jd-sub {
        font-size: var(--fs-2xs);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        color: var(--ink-muted);
        margin: clamp(1.35rem, 2.4vw, 1.9rem) 0 0.6rem;
      }
      .jd-sub:first-of-type { margin-top: 0; }

      .jd-fit {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: clamp(0.9rem, 1.8vw, 1.35rem);
        max-width: 780px;
      }
      .jd-fit-card {
        padding: clamp(1rem, 1.8vw, 1.35rem);
        border-radius: 14px;
        background: var(--surface-alt);
        border: 1px solid rgba(20, 20, 30, 0.07);
      }
      .jd-fit-rule {
        /* display:block is required: this is a span, and .jd-fit-card is not a
           flex container, so width/height would be ignored on an inline box.
           The same span works in Careers.jsx only because the card there is
           display:flex, which blockifies its children. */
        display: block;
        width: 24px; height: 2px;
        border-radius: 1px;
        margin-bottom: 0.8rem;
      }
      .jd-fit-t {
        display: block;
        font-size: var(--fs-sm);
        font-weight: var(--fw-medium);
        color: var(--ink);
        margin-bottom: 0.35rem;
      }
      .jd-fit-x {
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        margin: 0;
      }

      /* ── Closing call to action ── */
      .jd-cta {
        margin-top: clamp(2.25rem, 4.5vw, 3.5rem);
        padding: clamp(1.4rem, 3vw, 2.25rem);
        border-radius: 18px;
        background: var(--surface-alt);
        border: 1px solid rgba(20, 20, 30, 0.07);
        max-width: 780px;
      }
      .jd-cta-h {
        font-size: 1.05rem;
        font-weight: var(--fw-medium);
        color: var(--ink);
        margin: 0 0 0.5rem;
      }
      .jd-cta-p {
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        margin: 0 0 1.2rem;
        max-width: 56ch;
      }
      .jd-cta-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.7rem;
      }
      /* The address itself is the button: it is a credential to copy or click,
         not a call to action, so it keeps the monospace-ish tracking of an
         address rather than sentence styling. */
      .jd-apply {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.68rem 1.35rem;
        border-radius: 999px;
        border: 1px solid #23232e;
        background: #23232e;
        color: #ffffff;
        font: inherit;
        font-size: var(--fs-xs);
        font-weight: var(--fw-medium);
        letter-spacing: 0.015em;
        text-decoration: none;
        cursor: pointer;
        /* An address must never be broken across lines by a container. */
        white-space: nowrap;
        max-width: 100%;
        transition: background 0.25s ease, border-color 0.25s ease;
      }
      .jd-apply:hover { background: #35354a; border-color: #35354a; }
      .jd-apply svg { flex-shrink: 0; }

      .jd-foot {
        border-top: 1px solid rgba(20, 20, 30, 0.07);
        padding: clamp(1.1rem, 2.2vw, 1.6rem) var(--gutter);
        text-align: center;
        font-size: var(--fs-2xs);
        font-weight: var(--fw-light);
        color: var(--ink-muted);
        letter-spacing: 0.02em;
        margin-top: auto;
      }

      @media (max-width: 480px) {
        .jd-brand-name { display: none; }
        .jd-facts { gap: 0.95rem 1.5rem; }
      }

      @media (prefers-reduced-motion: reduce) {
        .jd-back, .jd-apply, .jd-back svg, .jd-toc-link {
          transition: none;
        }
        .jd-back:hover svg { transform: none; }
      }
    `}</style>
  );

  const bar = (
    <div className="jd-bar">
      <button type="button" className="jd-brand" onClick={goHome} aria-label="SHRI-AI home">
        <img className="jd-brand-mark" src="/shri-ai-logo.webp" alt="" draggable={false} />
        <span className="jd-brand-name">SHRI-AI</span>
      </button>
      <button type="button" className="jd-back" onClick={goHome}>
        <ArrowLeft />
        Back to home
      </button>
    </div>
  );

  if (!job) {
    return (
      <>
        {styles}
        <div className="jd-root">
          {bar}
          <div className="jd-hero">
            <div className="jd-hero-inner">
              <p className="jd-eyebrow" style={{ color: '#9a9aab' }}>Careers</p>
              <h1 className="jd-title" ref={titleRef} tabIndex={-1}>This role is no longer listed</h1>
              <p className="jd-summary">
                The link may be out of date. Return to the home page to see every role that is
                currently open.
              </p>
              <div className="jd-cta-row" style={{ marginTop: '1.75rem' }}>
                <button type="button" className="jd-apply" onClick={goHome}>
                  Back to home
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          <p className="jd-foot">SHRI-AI — Senus Healthcare Research Institute</p>
        </div>
      </>
    );
  }

  const { position } = job;
  const facts = [
    ['Project', position.project],
    ['Location', position.location],
    ['Market', position.market],
    ['Employment', position.employment],
    ['Compensation', position.compensation],
  ];

  return (
    <>
      {styles}
      <div className="jd-root">
        {bar}

        <header className="jd-hero">
          <div className="jd-hero-inner">
            <p className="jd-eyebrow" style={{ color: job.accent }}>{job.discipline}</p>
            <h1 className="jd-title" ref={titleRef} tabIndex={-1}>{job.title}</h1>
            {job.focus && <p className="jd-focus">{job.focus}</p>}
            <p className="jd-summary">{job.summary}</p>

            <dl className="jd-facts">
              {facts.map(([key, value]) => (
                <div className="jd-fact" key={key}>
                  <dt className="jd-fact-k">{key}</dt>
                  <dd className="jd-fact-v" style={{ margin: 0 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="jd-body">
          <nav className="jd-toc" aria-label="On this page">
            <p className="jd-toc-title">On this page</p>
            <ul className="jd-toc-list">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a className="jd-toc-link" href={'#' + section.id}>{section.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <main className="jd-main">
            <section className="jd-section" id="jd-about">
              <h2 className="jd-h2">About SHRI-AI</h2>
              {ABOUT_SHRI_AI.map((text) => (
                <p className="jd-p" key={text.slice(0, 24)}>{text}</p>
              ))}
            </section>

            <section className="jd-section" id="jd-role">
              <h2 className="jd-h2">The role</h2>
              {job.pipeline && (
                <span className="jd-pipeline" style={{ borderLeft: '3px solid ' + job.accent }}>
                  {job.pipeline}
                </span>
              )}
              {job.intro.map((text) => (
                <p className="jd-p" key={text.slice(0, 24)}>{text}</p>
              ))}
            </section>

            <section className="jd-section" id="jd-responsibilities">
              <h2 className="jd-h2">Key responsibilities</h2>
              {job.responsibilities.map((group, index) => (
                <div className="jd-group" key={group.title}>
                  <div className="jd-group-head">
                    <span className="jd-group-n" style={{ color: job.accent }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="jd-group-t">{group.title}</span>
                  </div>
                  {group.lead && <p className="jd-lead">{group.lead}</p>}
                  <ul className="jd-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {group.note && <p className="jd-note">{group.note}</p>}
                </div>
              ))}
            </section>

            <section className="jd-section" id="jd-candidate">
              <h2 className="jd-h2">Ideal candidate</h2>

              <p className="jd-sub">Education</p>
              <ul className="jd-list">
                {job.education.map((item) => <li key={item}>{item}</li>)}
              </ul>

              <p className="jd-sub">Required skills</p>
              <ul className="jd-list">
                {job.requiredSkills.map((item) => <li key={item}>{item}</li>)}
              </ul>

              <p className="jd-sub">Preferred experience</p>
              <p className="jd-lead">Experience in one or more of the following is an advantage:</p>
              <ul className="jd-list">
                {job.preferredExp.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="jd-section" id="jd-fit">
              <h2 className="jd-h2">What we are looking for</h2>
              <div className="jd-fit">
                {job.lookingFor.map((block) => (
                  <div className="jd-fit-card" key={block.title}>
                    <span className="jd-fit-rule" style={{ background: job.accent }} aria-hidden="true" />
                    <span className="jd-fit-t">{block.title}</span>
                    <p className="jd-fit-x">{block.text}</p>
                  </div>
                ))}
              </div>
              {job.lookingForNote && <p className="jd-note">{job.lookingForNote}</p>}
            </section>

            <section className="jd-section" id="jd-success">
              <h2 className="jd-h2">Success in this role</h2>
              <p className="jd-lead">You will be successful in this role if you can:</p>
              <ul className="jd-list">
                {job.success.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="jd-section" id="jd-opportunity">
              <h2 className="jd-h2">Opportunity</h2>
              {job.opportunity.map((text) => (
                <p className="jd-p" key={text.slice(0, 24)}>{text}</p>
              ))}

              <div className="jd-cta">
                <p className="jd-cta-h">Interested in this role?</p>
                <p className="jd-cta-p">
                  Send your CV and a short note about your background to our recruitment
                  address. Please keep the role in the subject line.
                </p>
                <div className="jd-cta-row">
                  <a className="jd-apply" href={mailto}>
                    <MailIcon />
                    {HR_EMAIL}
                  </a>
                  <button type="button" className="jd-back" onClick={goHome}>
                    <ArrowLeft />
                    Back to home
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>

        <p className="jd-foot">SHRI-AI — Senus Healthcare Research Institute</p>
      </div>
    </>
  );
};

export default JobDetail;
