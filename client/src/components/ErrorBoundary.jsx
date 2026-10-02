import { Component } from 'react';

/**
 * Last line of defence: if any part of the page throws while rendering, show
 * a short message with a way back instead of an empty white screen. Styles
 * are inline and self-contained so the fallback renders even if the error
 * came from the page's own styling.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error('SHRI-AI: a page section failed to render.', error, info?.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main
        role="alert"
        style={{
          minHeight: '100dvh',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
          fontFamily: "var(--font-sans, 'DM Sans', system-ui, sans-serif)",
          textAlign: 'center',
          color: '#14141e',
          background: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '28rem' }}>
          <h1 style={{ margin: '0 0 0.75rem', fontSize: '1.5rem', fontWeight: 500 }}>
            Something went wrong
          </h1>
          <p style={{ margin: '0 0 1.5rem', color: '#44444e', lineHeight: 1.6 }}>
            This page couldn&rsquo;t load properly. Reloading usually fixes it.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              cursor: 'pointer',
              padding: '0.7rem 1.4rem',
              border: 0,
              borderRadius: 999,
              background: '#14141e',
              color: '#ffffff',
              font: 'inherit',
              fontWeight: 500,
            }}
          >
            Reload
          </button>{' '}
          <a href="/" style={{ marginLeft: '1rem', color: '#3A82C4' }}>
            Go to the home page
          </a>
        </div>
      </main>
    );
  }
}
