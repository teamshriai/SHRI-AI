import { useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  const [formVisible, setFormVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleGetInTouch = () => setFormVisible(true);
  const handleExit = () => { setFormVisible(false); setShowSuccess(false); };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => { setShowSuccess(false); setFormVisible(false); }, 2500);
  };

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('info@shri-ai.org');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700&family=Google+Sans+Display:wght@300;400;500;600;700&family=Google+Sans+Text:wght@300;400;500&display=swap');

        :root {
          --font-display: 'Google Sans Display', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          --font-body:    'Google Sans Text', 'Google Sans', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          --font-ui:      'Google Sans', 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        }

        @keyframes subtle-drift1 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-10px) translateZ(0);} }
        @keyframes subtle-drift2 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-7px) translateZ(0);} }
        @keyframes subtle-drift3 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-13px) translateZ(0);} }

        .sd1 { animation: subtle-drift1 12s ease-in-out infinite alternate; }
        .sd2 { animation: subtle-drift2 14s ease-in-out infinite alternate; }
        .sd3 { animation: subtle-drift3 16s ease-in-out infinite alternate; }

        .fgl-shape {
          position: absolute;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          will-change: transform;
          clip-path: polygon(0% 18%, 100% 0%, 100% 100%, 0% 100%);
          -webkit-clip-path: polygon(0% 18%, 100% 0%, 100% 100%, 0% 100%);
          transition: left 0.85s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease;
        }

        .fl1-shape {
          width: 11%;
          height: clamp(300px, 92vh, 980px);
          bottom: -28vh;
          top: auto;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        .fl2-shape {
          width: 11%;
          height: clamp(155px, 52vh, 560px);
          bottom: -12vh;
          top: auto;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
        }

        @media (max-width: 1280px) {
          .fl1-shape { width: 12%; }
          .fl2-shape { width: 12%; }
        }
        @media (max-width: 1024px) {
          .fl1-shape { width: 14%; }
          .fl2-shape { width: 14%; }
        }
        @media (max-width: 768px) {
          .fl1-shape { width: 17%; height: clamp(240px, 75vh, 700px); }
          .fl2-shape { width: 17%; height: clamp(120px, 40vh, 400px); }
        }
        @media (max-width: 640px) {
          .fl1-shape { width: 24%; height: clamp(200px, 62vh, 500px); bottom: -18vh; }
          .fl2-shape { width: 24%; height: clamp(100px, 32vh, 260px); bottom: -8vh; }
        }

        .cta-content {
          transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.65s ease;
        }
        .cta-content.slide-out {
          transform: translateX(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .form-container {
          position: absolute;
          top: 0;
          right: 0;
          width: 52%;
          height: 100%;
          transform: translateX(105%);
          transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 5vw, 64px) clamp(20px, 4vw, 56px);
          overflow-y: auto;
          overflow-x: hidden;
        }
        .form-container.visible { transform: translateX(0); }

        @media (max-width: 900px) { .form-container { width: 65%; } }
        @media (max-width: 680px) { .form-container { width: 100%; } }

        .back-arrow-btn {
          position: absolute;
          top: clamp(18px, 3vw, 34px);
          left: clamp(14px, 3vw, 34px);
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 4px;
          z-index: 40;
          opacity: 0;
          transform: translateX(18px);
          transition: opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s;
        }
        .form-container.visible .back-arrow-btn { opacity: 1; transform: translateX(0); }
        .back-arrow-icon {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid #1a1a24;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
        }
        .back-arrow-btn:hover .back-arrow-icon { background: #1a1a24; transform: translateX(-4px); }
        .back-arrow-label {
          font-family: var(--font-ui);
          font-size: 13px; font-weight: 500; color: #1a1a24; letter-spacing: 0.01em;
          opacity: 0; transform: translateX(-6px);
          transition: opacity 0.22s ease, transform 0.22s ease;
          pointer-events: none; white-space: nowrap;
        }
        .back-arrow-btn:hover .back-arrow-label { opacity: 1; transform: translateX(0); }
        .back-arrow-svg { transition: stroke 0.22s ease; stroke: #1a1a24; }
        .back-arrow-btn:hover .back-arrow-svg { stroke: #ffffff; }

        @keyframes slideInSuccess {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .success-notification { animation: slideInSuccess 0.4s ease-out forwards; }

        .git-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: #1a1a24; color: #fff; border: none; border-radius: 3px;
          padding: clamp(11px, 1.3vw, 15px) clamp(18px, 2vw, 30px);
          font-family: var(--font-ui);
          font-size: clamp(12px, 1.05vw, 14px); font-weight: 500; letter-spacing: 0.02em;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          white-space: nowrap;
        }
        .git-btn:hover { background: #2d2d40; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,26,36,0.25); }

        .cta-bottom {
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(100,100,120,0.16);
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
        }
        @media (max-width: 560px) { .cta-bottom { grid-template-columns: 1fr; } }
        .cta-bottom-divider { border-right: 1px solid rgba(100,100,120,0.16); }
        @media (max-width: 560px) { .cta-bottom-divider { border-right: none; border-bottom: 1px solid rgba(100,100,120,0.16); } }

        .contact-form { width: 100%; }
        .form-group { margin-bottom: clamp(14px, 1.8vw, 22px); }
        .form-label { display: block; font-family: var(--font-ui); font-size: 12.5px; font-weight: 500; color: #1a1a24; margin-bottom: 9px; letter-spacing: 0.01em; }
        .form-input, .form-textarea {
          width: 100%; padding: 14px 18px;
          font-family: var(--font-body); font-size: 14.5px; color: #1a1a24;
          background: rgba(255,255,255,0.45); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: none; border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box; -webkit-appearance: none; appearance: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 2px rgba(255,255,255,0.5);
        }
        .form-input:focus, .form-textarea:focus {
          outline: none; background: rgba(255,255,255,0.65);
          box-shadow: 0 0 0 3px rgba(255,220,100,0.15), 0 0 20px rgba(255,200,70,0.25), 0 4px 16px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit {
          width: 100%; padding: 15px 24px;
          font-family: var(--font-ui); font-size: 14.5px; font-weight: 500; color: #fff;
          background: #1a1a24; border: none; border-radius: 12px; cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .form-submit:hover { background: #2d2d40; transform: translateY(-2px); }

        .form-title { font-family: var(--font-display); font-size: clamp(1.4rem, 2.8vw, 1.9rem); font-weight: 300; color: #1a1a24; margin: 0 0 8px; letter-spacing: -0.01em; }
        .form-desc { font-family: var(--font-body); font-size: clamp(13px, 1.1vw, 14px); color: #3a3a4a; margin: 0 0 32px; line-height: 1.62; }
        .hero-label { font-family: var(--font-ui); font-size: clamp(10px, 1vw, 12px); font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #6b6b80; margin: 0 0 clamp(14px, 1.8vw, 22px); }
        .hero-heading { font-family: var(--font-display); font-weight: 300; font-size: clamp(2.1rem, 5.4vw, 4.8rem); line-height: 1.04; letter-spacing: -0.03em; text-transform: uppercase; color: #1a1a24; margin: 0; }
        .hero-badge { display: inline-flex; align-items: center; gap: clamp(5px, 0.7vw, 11px); background: rgba(255,255,255,0.52); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1.5px solid rgba(255,255,255,0.68); border-radius: 4px; padding: 2px clamp(8px, 1.1vw, 16px); font-size: clamp(1.5rem, 4vw, 3.6rem); font-family: var(--font-display); font-weight: 300; }

        .shri-footer {
          background: #0d0d12;
          font-family: var(--font-body);
          color: #fff;
          padding-top: clamp(40px, 6vw, 80px);
        }

        .shri-footer-inner {
          max-width: 100%;
          margin: 0;
          padding: 0 4vw;
        }

        .shri-footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1.5fr;
          gap: clamp(40px, 5vw, 80px);
          padding-bottom: clamp(60px, 8vw, 100px);
        }

        @media (max-width: 1024px) {
          .shri-footer-grid { grid-template-columns: 1fr 1fr; }
          .shri-footer-col-map { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .shri-footer-grid { grid-template-columns: 1fr; }
          .shri-footer-col-map { grid-column: span 1; }
        }

        .shri-col-label {
          font-family: var(--font-ui);
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 24px;
        }

        .shri-flink {
          color: #fff;
          text-decoration: none;
          font-size: 21px;
          transition: all 0.2s ease;
          display: block;
          margin-bottom: 16px;
          font-weight: 400;
        }
        .shri-flink:hover { color: #ff8c1e; transform: translateX(5px); }

        .shri-contact-info {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 24px;
          margin-top: 32px;
        }

        .shri-contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          color: #fff;
          text-decoration: none;
          font-size: 21px;
          transition: color 0.2s ease;
        }
        .shri-contact-item:last-child { margin-bottom: 0; }
        .shri-contact-item:hover { color: #ff8c1e; }

        .shri-map-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.15);
          height: 220px;
          margin-bottom: 24px;
          position: relative;
        }

        .shri-address-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 16px;
          display: flex;
          gap: 16px;
          transition: background 0.3s ease;
        }
        .shri-address-box:hover { background: rgba(255,255,255,0.08); }

        .shri-address-text {
          font-size: 21px;
          color: #fff;
          line-height: 1.6;
        }

        .shri-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 32px 4vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 100%;
          margin: 0;
          font-size: 18px;
          color: #fff;
        }

        @media (max-width: 768px) {
          .shri-footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
        }

        .shri-copy-badge {
          font-size: 14px;
          padding: 4px 10px;
          background: rgba(255,255,255,0.15);
          border-radius: 6px;
          margin-left: 12px;
          color: #fff;
        }
      `}</style>

      {/* ── CTA SECTION ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '70vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '-20%', left: '-8%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,140,30,0.55) 0%, rgba(255,180,80,0.25) 35%, transparent 70%)', filter: 'blur(52px)' }} />
          <div style={{ position: 'absolute', width: '50%', height: '60%', top: '-15%', left: '22%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,100,255,0.45) 0%, rgba(200,160,255,0.22) 40%, transparent 70%)', filter: 'blur(58px)' }} />
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '-20%', right: '-8%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(50,130,255,0.50) 0%, rgba(100,170,255,0.25) 35%, transparent 70%)', filter: 'blur(52px)' }} />
        </div>

        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
          <div className="fgl-shape fl1-shape sd1" style={{ left: formVisible ? '13%' : '35%', background: 'linear-gradient(155deg, rgba(215,180,255,0.48) 0%, rgba(185,145,248,0.34) 45%, rgba(152,112,232,0.20) 100%)', boxShadow: '0 32px 100px rgba(130,70,220,0.55), inset 0 2px 0 rgba(255,255,255,0.65)', opacity: 0.88 }} />
          <div className="fgl-shape fl2-shape sd2" style={{ left: formVisible ? '21%' : '44%', background: 'linear-gradient(158deg, rgba(225,200,255,0.54) 0%, rgba(195,165,252,0.44) 45%, rgba(162,122,238,0.26) 100%)', boxShadow: '0 36px 110px rgba(120,70,218,0.60), inset 0 2px 0 rgba(255,255,255,0.72)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(244,243,250,0.97) 0%, rgba(244,243,250,0.78) 38%, transparent 100%)', zIndex: 10 }} />
        </div>

        <div className={`cta-content ${formVisible ? 'slide-out' : ''}`} style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 'clamp(20px, 3vw, 40px) 4vw' }}>
            <button className="git-btn" onClick={handleGetInTouch}>
              Get in touch
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4vw' }}>
            <p className="hero-label">Partner With Us</p>
            <h2 className="hero-heading">
              Advance Precision<br />Health Research<br />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                In Just
                <span className="hero-badge">
                  One Email
                  <svg width="32" height="32" fill="none" stroke="#1a1a24" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </span>
            </h2>
          </div>

          <div className="cta-bottom">
            <div className="cta-bottom-divider" style={{ padding: '32px 4vw' }}>
              <p style={{ fontSize: '16px', fontFamily: 'var(--font-ui)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', margin: '0 0 12px' }}>Our Mission</p>
              <p style={{ fontSize: '21px', color: '#555', lineHeight: 1.6, margin: 0 }}>California-based 501(c)(3) nonprofit advancing equitable access to AI-driven diagnostics worldwide.</p>
            </div>
            <div style={{ padding: '32px 4vw' }}>
              <p style={{ fontSize: '16px', fontFamily: 'var(--font-ui)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', margin: '0 0 12px' }}>Vision</p>
              <p style={{ fontSize: '21px', color: '#555', lineHeight: 1.6, margin: 0 }}>Moving innovations from lab to clinic — translational research powered by AI and genomic precision.</p>
            </div>
          </div>
        </div>

        {/* Contact Form Overlay */}
        <div className={`form-container ${formVisible ? 'visible' : ''}`} id="contact-form-overlay">
          <button className="back-arrow-btn" onClick={handleExit} aria-label="Go back">
            <div className="back-arrow-icon">
              <svg className="back-arrow-svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
            </div>
            <span className="back-arrow-label">Back</span>
          </button>
          <div style={{ width: '100%', maxWidth: 600, paddingTop: 40 }}>
            {!showSuccess ? (
              <>
                <h3 className="form-title" style={{ fontSize: '2.5rem' }}>Get in Touch</h3>
                <p className="form-desc" style={{ fontSize: '21px' }}>Discuss how we can collaborate to advance precision health research.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                    <div>
                      <label className="form-label" htmlFor="fname" style={{ fontSize: '17px' }}>First Name</label>
                      <input className="form-input" style={{ fontSize: '21px', padding: '18px' }} type="text" id="fname" required />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="lname" style={{ fontSize: '17px' }}>Last Name</label>
                      <input className="form-input" style={{ fontSize: '21px', padding: '18px' }} type="text" id="lname" required />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label className="form-label" htmlFor="email" style={{ fontSize: '17px' }}>Email Address</label>
                    <input className="form-input" style={{ fontSize: '21px', padding: '18px' }} type="email" id="email" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '32px' }}>
                    <label className="form-label" htmlFor="message" style={{ fontSize: '17px' }}>Message</label>
                    <textarea className="form-textarea" style={{ fontSize: '21px', padding: '18px', minHeight: '180px' }} id="message" required />
                  </div>
                  <button type="submit" className="form-submit" style={{ fontSize: '21px', padding: '20px' }}>Send Message</button>
                </form>
              </>
            ) : (
              <div className="success-notification" style={{ background: '#fff', padding: '60px', borderRadius: 24, textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
                <div style={{ width: 80, height: 80, margin: '0 auto 32px', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 style={{ fontSize: '28px', margin: '0 0 16px' }}>Message Sent!</h3>
                <p style={{ fontSize: '21px', color: '#6b6b80' }}>We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SIMPLIFIED FOOTER ── */}
      <footer className="shri-footer">
        <div className="shri-footer-inner">
          <div className="shri-footer-grid">
            
            {/* Brand & Contact */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #ff8c1e 0%, #a064ff 50%, #3282ff 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: 24 }}>S</span>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 21, letterSpacing: '0.05em', margin: 0, color: '#fff' }}>SHRI</p>
                  <p style={{ fontSize: 17, color: '#fff', margin: 0 }}>Senus Healthcare Research Institute</p>
                </div>
              </div>
              
              <p style={{ fontSize: 21, color: '#fff', lineHeight: 1.6, margin: '0 0 40px' }}>
                Advancing equitable access to AI-driven cancer diagnostics and genomic medicine worldwide.
              </p>

              <div className="shri-contact-info">
                <a href="mailto:info@shri-ai.org" className="shri-contact-item" onClick={handleCopy}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@shri-ai.org
                  {copied && <span className="shri-copy-badge">Copied!</span>}
                </a>
                <a href="tel:+14086664320" className="shri-contact-item">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +1 408 666 4320
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="shri-col-label">Quick Links</p>
              <nav>
                <a href="#about" className="shri-flink">About Us</a>
                <a href="#focus" className="shri-flink">Focus Areas</a>
                <a href="#partnership" className="shri-flink">Partnership</a>
                <a href="#" className="shri-flink" onClick={(e) => { e.preventDefault(); handleGetInTouch(); }}>Contact</a>
              </nav>
            </div>

            {/* Global Reach */}
            <div className="shri-footer-col-map">
              <p className="shri-col-label">Global Reach</p>
              <div className="shri-map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4558.947129299513!2d-121.88439919999999!3d37.219291600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e313c74a19941%3A0xec4c74b0157b91b1!2s6559%20Springpath%20Ln%2C%20San%20Jose%2C%20CA%2095120%2C%20USA!5e1!3m2!1sen!2sin!4v1777609086171!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Global Reach"
                />
              </div>
              
              {/* Address Boxes */}
              <div className="shri-address-box">
                <svg width="28" height="28" fill="none" stroke="#ff8c1e" viewBox="0 0 24 24" strokeWidth={2} style={{ flexShrink: 0, marginTop: 4 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="shri-address-text">
                  <strong style={{ display: 'block', marginBottom: 4, color: '#ff8c1e' }}>USA Headquarters</strong>
                  6559 Springpath Lane, San Jose, CA 95120, USA
                </div>
              </div>

              <div className="shri-address-box">
                <svg width="28" height="28" fill="none" stroke="#a064ff" viewBox="0 0 24 24" strokeWidth={2} style={{ flexShrink: 0, marginTop: 4 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="shri-address-text">
                  <strong style={{ display: 'block', marginBottom: 4, color: '#a064ff' }}>Globally Available</strong>
                  Advancing precision health and genomic research through worldwide collaboration.
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="shri-footer-bottom">
          <p>© {year} Senus Healthcare Research Institute · 501(c)(3) Nonprofit</p>
          <div style={{ display: 'flex', gap: 32 }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;