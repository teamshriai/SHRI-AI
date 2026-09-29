import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, FlaskConical, PackageCheck, Pill, Stethoscope } from 'lucide-react';

/**
 * /dev — product page for SHRI-Health, a product of SHRI-AI. One
 * heading and the platform's four modules, each with a "View Demo" action.
 *
 * Demos are not live yet. Each module carries a demoUrl: set it and that
 * card's button becomes a real link — nothing else changes. While it is null
 * the button says so in place rather than leading to a dead page.
 */

const MODULES = [
  {
    id: 'doctor',
    label: 'Doctor',
    desc: 'Patient records, consultations and care notes.',
    Icon: Stethoscope,
    accent: '#3A82C4',
    accentRgb: '58, 130, 196',
    demoUrl: null,
  },
  {
    id: 'pharma',
    label: 'Pharma',
    desc: 'Prescriptions, dispensing and medicine stock.',
    Icon: Pill,
    accent: '#7B6FCD',
    accentRgb: '123, 111, 205',
    demoUrl: null,
  },
  {
    id: 'procurement',
    label: 'Procurement',
    desc: 'Purchase orders, vendors and supply tracking.',
    Icon: PackageCheck,
    accent: '#a8690f',
    accentRgb: '168, 105, 15',
    demoUrl: null,
  },
  {
    id: 'laboratory',
    label: 'Laboratory Management',
    desc: 'Samples, tests and result reporting.',
    Icon: FlaskConical,
    accent: '#1f9163',
    accentRgb: '31, 145, 99',
    demoUrl: null,
  },
];

const ShriHealth = () => {
  const [requested, setRequested] = useState(() => new Set());
  const titleRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'SHRI-Health | SHRI-AI';
    titleRef.current?.focus({ preventScroll: true });
    return () => { document.title = previousTitle; };
  }, []);

  const request = (id) => setRequested((prev) => new Set(prev).add(id));

  return (
    <>
      <style>{`
        .sh-root {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(31, 145, 99, 0.07), transparent 70%),
            var(--surface);
          font-family: var(--font-sans);
          color: var(--ink);
        }

        .sh-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem var(--gutter);
          border-bottom: 1px solid rgba(20, 20, 30, 0.07);
        }
        .sh-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--ink);
          text-decoration: none;
          min-width: 0;
        }
        .sh-brand img { width: 30px; height: 30px; object-fit: contain; display: block; flex-shrink: 0; }
        .sh-brand span {
          font-size: 0.95rem;
          font-weight: var(--fw-medium);
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .sh-back {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.52rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(20, 20, 30, 0.14);
          color: var(--ink);
          text-decoration: none;
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .sh-back:hover { background: #f2f1ee; border-color: rgba(20, 20, 30, 0.24); }

        .sh-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(3rem, 8vw, 6rem) var(--gutter);
        }
        .sh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1f9163;
          font-weight: var(--fw-medium);
          margin: 0 0 1rem;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          background: rgba(31, 145, 99, 0.08);
        }
        .sh-title {
          font-weight: 300;
          font-size: clamp(2.4rem, 6vw, 4rem);
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin: 0 0 1rem;
          outline: none;
        }
        .sh-lede {
          font-weight: 300;
          font-size: clamp(0.95rem, 1.4vw, 1.1rem);
          line-height: 1.65;
          color: var(--ink-muted);
          max-width: 44ch;
          margin: 0 0 clamp(2.5rem, 5vw, 3.5rem);
        }

        .sh-modules {
          width: min(100%, 1180px);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.85rem, 1.6vw, 1.25rem);
        }
        .sh-module {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          overflow: hidden;
          padding: calc(clamp(1.35rem, 2.2vw, 1.7rem) + 5px) clamp(1.25rem, 2vw, 1.6rem) clamp(1.35rem, 2.2vw, 1.7rem);
          text-align: left;
          background:
            linear-gradient(to bottom, rgba(var(--m-accent-rgb), 0.07), rgba(var(--m-accent-rgb), 0) 50%),
            #fff;
          border: 1px solid rgba(20, 20, 30, 0.08);
          border-radius: 18px;
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 10px 26px rgba(20, 20, 30, 0.05);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }
        .sh-module::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 5px;
          background: var(--m-accent);
        }
        .sh-module:hover {
          transform: translateY(-4px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 20px 44px rgba(var(--m-accent-rgb), 0.16);
        }
        .sh-module-icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--m-accent);
          background: rgba(var(--m-accent-rgb), 0.12);
          margin-bottom: 1.1rem;
        }
        .sh-module-label {
          font-size: clamp(1.05rem, 1.35vw, 1.2rem);
          font-weight: var(--fw-medium);
          letter-spacing: -0.015em;
          line-height: 1.25;
          margin: 0 0 0.4rem;
          overflow-wrap: anywhere;
        }
        .sh-module-desc {
          font-size: 0.84rem;
          font-weight: 300;
          color: var(--ink-muted);
          line-height: 1.55;
          margin: 0 0 1.4rem;
        }
        .sh-demo {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.6rem 1.05rem;
          border-radius: 999px;
          border: 0;
          font: inherit;
          font-size: 0.8rem;
          font-weight: var(--fw-medium);
          color: #fff;
          background: var(--m-accent);
          text-decoration: none;
          cursor: pointer;
          transition: filter 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        .sh-demo svg { transition: transform 0.25s ease; }
        .sh-demo:hover { filter: brightness(1.08); }
        .sh-demo:hover svg { transform: translateX(3px); }
        .sh-demo[data-soon='true'] {
          color: color-mix(in srgb, var(--m-accent) 72%, #000);
          background: rgba(var(--m-accent-rgb), 0.12);
          cursor: default;
        }
        .sh-demo[data-soon='true']:hover { filter: none; }
        .sh-demo[data-soon='true']:hover svg { transform: none; }
        /* The button's own label already changes, so the status line is
           for screen readers only. */
        .sh-note {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }

        .sh-demo:focus-visible, .sh-back:focus-visible, .sh-brand:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
        }

        .sh-foot {
          padding: 1.25rem var(--gutter);
          text-align: center;
          font-size: 0.75rem;
          color: #9a9aab;
          border-top: 1px solid rgba(20, 20, 30, 0.06);
        }

        @media (max-width: 1000px) {
          .sh-modules { grid-template-columns: repeat(2, minmax(0, 1fr)); width: min(100%, 720px); }
        }
        @media (max-width: 560px) {
          .sh-modules { grid-template-columns: minmax(0, 1fr); width: min(100%, 420px); }
        }
        @media (max-width: 380px) {
          .sh-brand span { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sh-module, .sh-back, .sh-demo, .sh-demo svg { transition: none; }
          .sh-module:hover, .sh-demo:hover svg { transform: none; }
        }
      `}</style>

      <div className="sh-root">
        <header className="sh-bar">
          <a className="sh-brand" href="/" aria-label="SHRI-AI home">
            <img src="/shri-ai-logo.webp" alt="" draggable={false} />
            <span>SHRI-AI</span>
          </a>
          <a className="sh-back" href="/">
            <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
            Back to SHRI-AI
          </a>
        </header>

        <main className="sh-main">
          <p className="sh-eyebrow">A product of SHRI-AI</p>
          <h1 className="sh-title" ref={titleRef} tabIndex={-1}>
            SHRI-Health
          </h1>
          <p className="sh-lede">
            One connected care platform for doctors, pharma, procurement and
            laboratory management.
          </p>

          <div className="sh-modules">
            {MODULES.map(({ id, label, desc, Icon, accent, accentRgb, demoUrl }) => {
              const soon = requested.has(id);
              return (
                <article
                  key={id}
                  className="sh-module"
                  style={{ '--m-accent': accent, '--m-accent-rgb': accentRgb }}
                >
                  <span className="sh-module-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h2 className="sh-module-label">{label}</h2>
                  <p className="sh-module-desc">{desc}</p>

                  {demoUrl ? (
                    <a className="sh-demo" href={demoUrl} aria-label={`View ${label} demo`}>
                      View Demo
                      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="sh-demo"
                        data-soon={soon}
                        aria-label={`View ${label} demo`}
                        onClick={() => request(id)}
                      >
                        {soon ? 'Demo coming soon' : 'View Demo'}
                        {!soon && <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />}
                      </button>
                      <p className="sh-note" role="status" aria-live="polite">
                        {soon && 'Demo launching soon.'}
                      </p>
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </main>

        <footer className="sh-foot">
          SHRI-Health is a product of SHRI-AI, Senus Healthcare Research Institute.
        </footer>
      </div>
    </>
  );
};

export default ShriHealth;
