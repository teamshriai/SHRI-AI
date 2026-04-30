const About = () => {
  return (
    <>
      <style>{`
        .about-section {
          background: linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%);
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          padding-bottom: clamp(5rem, 12vh, 8rem);
        }

        .about-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 300;
          line-height: 1.55;
          color: #1a1a1a;
          letter-spacing: -0.015em;
        }

        .accent-purple { color: #7B6FCD; }
        .accent-gold   { color: #D4891E; }
        .accent-blue   { color: #3A82C4; }

        .icon-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          position: relative;
          top: -0.06em;
          margin-left: 0.22em;
          flex-shrink: 0;
        }

        .icon-chip svg {
          display: block;
        }

        .footer-tagline-wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          padding: clamp(2rem, 5vh, 3.5rem) clamp(1rem, 4vw, 2rem);
          background: linear-gradient(to top, rgba(232, 234, 246, 0.9) 0%, transparent 100%);
        }

        .footer-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 300;
          font-size: clamp(1.75rem, 4vw, 3.25rem);
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #7B6FCD 0%, #3A82C4 50%, #D4891E 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
          text-align: center;
          line-height: 1.4;
          margin: 0;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .footer-tagline .highlight {
          font-weight: 400;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .about-section {
            padding-bottom: clamp(4rem, 10vh, 6rem);
          }
          
          .footer-tagline {
            font-size: clamp(1.35rem, 6vw, 2rem);
          }
          
          .footer-tagline-wrapper {
            padding: clamp(1.5rem, 4vh, 2.5rem) 1rem;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .footer-tagline {
            font-size: clamp(2rem, 4.5vw, 2.75rem);
          }
        }

        /* Ensure smooth rendering */
        .about-section * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Prevent layout shift */
        .content-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: clamp(2rem, 5vh, 4rem);
        }
      `}</style>

      <section className="about-section relative w-full overflow-hidden">

        {/* ── Background glow blobs ── */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', width: '65%', height: '60%', bottom: '-15%', left: '-10%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,140,30,0.30) 0%, rgba(255,180,80,0.12) 40%, transparent 70%)', filter: 'blur(90px)' }} />
          <div style={{ position: 'absolute', width: '60%', height: '60%', bottom: '-10%', left: '20%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,100,255,0.25) 0%, rgba(200,160,255,0.10) 40%, transparent 70%)', filter: 'blur(100px)' }} />
          <div style={{ position: 'absolute', width: '65%', height: '60%', bottom: '-15%', right: '-10%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(50,130,255,0.30) 0%, rgba(100,170,255,0.12) 40%, transparent 70%)', filter: 'blur(90px)' }} />
          <div style={{ position: 'absolute', width: '40%', height: '50%', bottom: '0%',   right: '5%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(20,90,220,0.20) 0%, transparent 70%)',                            filter: 'blur(80px)' }} />
        </div>

        {/* Main Content */}
        <div className="content-wrapper relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24">
          <div
            className="about-text flex flex-col"
            style={{
              fontSize: 'clamp(1.2rem, 2.6vw, 2.2rem)',
              gap: 'clamp(0.15rem, 0.5vw, 0.35rem)',
            }}
          >

            <p className="text-center pb-4 max-w-[1400px]">
              <span
                style={{
                  color: '#888',
                  fontWeight: 300,
                  fontSize: '0.92em',
                  letterSpacing: '0.02em',
                  marginRight: '0.28em'
                }}
              >
                →
              </span>
              As a California-based 501(c)(3) nonprofit, SHRI AI partners with researchers, healthcare providers, and innovators to <span className="accent-purple" style={{ fontWeight: 400 }}>advance cancer detection and care</span>—leveraging AI and NGS-based liquid biopsy to <span className="accent-gold" style={{ fontWeight: 400 }}>translate discoveries</span> into clinical impact.
            </p>
            <p className="text-center max-w-[1400px]">
              We fund and support open-source technologies to <span className="accent-blue" style={{ fontWeight: 400 }}>accelerate innovation</span> and expand equitable access to precision oncology worldwide.
            </p>

          </div>
        </div>

        {/* Footer Tagline - Now Fully Visible */}
        <div className="footer-tagline-wrapper">
          <p className="footer-tagline">
            <span className="highlight">AI</span> for health, <span className="highlight">Care</span> for <span className="highlight">ALL</span>
          </p>
        </div>

      </section>
    </>
  );
};

export default About;