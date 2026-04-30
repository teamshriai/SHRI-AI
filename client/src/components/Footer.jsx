import { useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  const [formVisible, setFormVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [arrowHovered, setArrowHovered] = useState(false);
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
      navigator.clipboard.writeText('info@senushealth.org');
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
          .fl1-shape { width: 12%; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
          .fl2-shape { width: 12%; -webkit-backdrop-filter: blur(24px); }
        }
        @media (max-width: 1024px) {
          .fl1-shape { width: 14%; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
          .fl2-shape { width: 14%; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        }
        @media (max-width: 768px) {
          .fl1-shape { width: 17%; height: clamp(240px, 75vh, 700px); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
          .fl2-shape { width: 17%; height: clamp(120px, 40vh, 400px); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
        }
        @media (max-width: 640px) {
          .fl1-shape { width: 24%; height: clamp(200px, 62vh, 500px); bottom: -18vh; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
          .fl2-shape { width: 24%; height: clamp(100px, 32vh, 260px); bottom: -8vh; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
        }
        @media (max-width: 400px) {
          .fl1-shape { width: 28%; }
          .fl2-shape { width: 28%; }
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

        .cta-content .flink { color: #9ca3af; text-decoration: none; transition: color 0.18s ease; font-size: 13px; font-family: var(--font-body); }
        .cta-content .flink:hover { color: #ffffff; }

        .cta-topbar {
          display: flex; align-items: flex-start; justify-content: flex-end;
          padding: clamp(18px, 2.5vw, 30px) clamp(16px, 5vw, 56px);
        }
        @media (max-width: 640px) { .cta-topbar { justify-content: flex-start; } }

        .cta-bottom {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          border-top: 1px solid rgba(100,100,120,0.16);
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
        }
        @media (max-width: 860px) { .cta-bottom { grid-template-columns: 1fr 1fr; } .cta-bottom-hide { display: none; } }
        @media (max-width: 560px) { .cta-bottom { grid-template-columns: 1fr; } .cta-bottom-hide { display: none; } }
        .cta-bottom-divider { border-right: 1px solid rgba(100,100,120,0.16); }
        @media (max-width: 560px) { .cta-bottom-divider { border-right: none; border-bottom: 1px solid rgba(100,100,120,0.16); } }

        .contact-form { width: 100%; }
        .form-group { margin-bottom: clamp(14px, 1.8vw, 22px); }
        .form-label { display: block; font-family: var(--font-ui); font-size: 12.5px; font-weight: 500; color: #1a1a24; margin-bottom: 9px; letter-spacing: 0.01em; transition: color 0.3s ease; }
        .form-input, .form-textarea {
          width: 100%; padding: 14px 18px;
          font-family: var(--font-body); font-size: 14.5px; color: #1a1a24;
          background: rgba(255,255,255,0.45); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: none; border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box; -webkit-appearance: none; appearance: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 2px rgba(255,255,255,0.5);
        }
        .form-input::placeholder, .form-textarea::placeholder { color: rgba(26,26,36,0.35); transition: color 0.3s ease; }
        .form-input:focus, .form-textarea:focus {
          outline: none; background: rgba(255,255,255,0.65); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
          box-shadow: 0 0 0 3px rgba(255,220,100,0.15), 0 0 20px rgba(255,200,70,0.25), 0 0 40px rgba(255,190,50,0.15), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 3px rgba(255,255,255,0.7);
          transform: translateY(-1px);
        }
        .form-input:focus::placeholder, .form-textarea:focus::placeholder { color: rgba(26,26,36,0.25); }
        @keyframes gentle-pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(255,220,100,0.15), 0 0 20px rgba(255,200,70,0.25), 0 0 40px rgba(255,190,50,0.15), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 3px rgba(255,255,255,0.7); }
          50%       { box-shadow: 0 0 0 3px rgba(255,220,100,0.2), 0 0 25px rgba(255,200,70,0.3), 0 0 50px rgba(255,190,50,0.2), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 3px rgba(255,255,255,0.8); }
        }
        .form-input.has-content, .form-textarea.has-content { animation: gentle-pulse 2s ease-in-out infinite; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit {
          width: 100%; padding: 15px 24px;
          font-family: var(--font-ui); font-size: 14.5px; font-weight: 500; color: #fff;
          background: #1a1a24; border: none; border-radius: 12px; cursor: pointer; letter-spacing: 0.02em;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 12px rgba(26,26,36,0.2);
        }
        .form-submit:hover { background: #2d2d40; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,26,36,0.3); }
        .form-submit:active { transform: translateY(0); box-shadow: 0 2px 8px rgba(26,26,36,0.2); }

        .form-title { font-family: var(--font-display); font-size: clamp(1.4rem, 2.8vw, 1.9rem); font-weight: 300; color: #1a1a24; margin: 0 0 8px; letter-spacing: -0.01em; line-height: 1.18; }
        .form-desc { font-family: var(--font-body); font-size: clamp(13px, 1.1vw, 14px); color: #3a3a4a; margin: 0 0 32px; line-height: 1.62; font-weight: 400; }
        .hero-label { font-family: var(--font-ui); font-size: clamp(10px, 1vw, 12px); font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #6b6b80; margin: 0 0 clamp(14px, 1.8vw, 22px); }
        .hero-heading { font-family: var(--font-display); font-weight: 300; font-size: clamp(2.1rem, 5.4vw, 4.8rem); line-height: 1.04; letter-spacing: -0.03em; text-transform: uppercase; color: #1a1a24; margin: 0; max-width: clamp(280px, 65vw, 960px); }
        @media (max-width: 640px) { .hero-heading { font-size: clamp(1.8rem, 9vw, 3rem); } }
        @media (max-width: 400px) { .hero-heading { font-size: clamp(1.5rem, 10vw, 2.2rem); } }
        .hero-badge { display: inline-flex; align-items: center; gap: clamp(5px, 0.7vw, 11px); background: rgba(255,255,255,0.52); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1.5px solid rgba(255,255,255,0.68); border-radius: 4px; padding: 2px clamp(8px, 1.1vw, 16px); font-size: clamp(1.5rem, 4vw, 3.6rem); font-family: var(--font-display); font-weight: 300; letter-spacing: -0.03em; }
        .form-container::-webkit-scrollbar { width: 4px; }
        .form-container::-webkit-scrollbar-track { background: transparent; }
        .form-container::-webkit-scrollbar-thumb { background: rgba(100,100,120,0.3); border-radius: 2px; }

        /* ── NEW FOOTER STYLES ── */
        .shri-footer {
          background: #13131a;
          font-family: var(--font-body);
          color: #fff;
        }

        .shri-footer-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: clamp(36px, 5vw, 60px) clamp(16px, 5vw, 56px) 0;
        }

        .shri-footer-top {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: clamp(28px, 3.5vw, 56px);
          padding-bottom: clamp(28px, 4vw, 48px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        @media (max-width: 1100px) {
          .shri-footer-top { grid-template-columns: 1.5fr 1fr 1fr; }
          .shri-footer-col-map { display: none; }
        }
        @media (max-width: 768px) {
          .shri-footer-top { grid-template-columns: 1fr 1fr; }
          .shri-footer-col-map { display: none; }
        }
        @media (max-width: 480px) {
          .shri-footer-top { grid-template-columns: 1fr; gap: 28px; }
          .shri-footer-col-map { display: none; }
        }

        .shri-footer-bottom {
          max-width: 1300px;
          margin: 0 auto;
          padding: clamp(14px, 1.8vw, 20px) clamp(16px, 5vw, 56px);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .shri-flink {
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          font-size: 13px;
          font-family: var(--font-body);
          transition: color 0.18s ease;
          line-height: 1.8;
          display: inline-block;
        }
        .shri-flink:hover { color: rgba(255,255,255,0.85); }

        .shri-col-label {
          font-family: var(--font-ui);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin: 0 0 16px;
        }

        .shri-email-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 9px 14px;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
          width: 100%;
          box-sizing: border-box;
          text-decoration: none;
        }
        .shri-email-chip:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.18);
        }

        .shri-map-wrap {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.35);
          height: 148px;
          margin-bottom: 12px;
        }

        .shri-address-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 12px 14px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
        }

        .shri-social-row {
          display: flex;
          gap: 8px;
          margin-top: 18px;
        }
        .shri-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 5px 12px 5px 9px;
          font-size: 12px;
          font-family: var(--font-ui);
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
        }
        .shri-social-pill:hover {
          background: rgba(255,255,255,0.11);
          border-color: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.9);
        }

        .shri-divider-v {
          width: 1px;
          background: rgba(255,255,255,0.07);
          align-self: stretch;
          display: none;
        }

        .shri-legal-link {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          font-family: var(--font-body);
          transition: color 0.18s ease;
        }
        .shri-legal-link:hover { color: rgba(255,255,255,0.7); }

        .shri-copy-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          padding: 3px 10px 3px 8px;
          font-family: var(--font-ui);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
          flex-shrink: 0;
        }
        .shri-copy-badge:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.75);
        }
      `}</style>

      {/* ═══════════════════════ CTA SECTION — UNTOUCHED ═══════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '76vh',
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
          <div style={{ position: 'absolute', width: '30%', height: '40%', top: '5%', right: '5%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(20,90,220,0.35) 0%, transparent 70%)', filter: 'blur(42px)' }} />
        </div>

        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
          <div className="fgl-shape fl1-shape sd1" style={{ left: formVisible ? '13%' : '35%', background: 'linear-gradient(155deg, rgba(215,180,255,0.48) 0%, rgba(185,145,248,0.34) 45%, rgba(152,112,232,0.20) 100%)', boxShadow: '0 32px 100px rgba(130,70,220,0.55), 0 16px 48px rgba(170,120,255,0.42), 0 4px 18px rgba(120,60,200,0.32), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)', opacity: 0.88 }} />
          <div className="fgl-shape fl2-shape sd2" style={{ left: formVisible ? '21%' : '44%', background: 'linear-gradient(158deg, rgba(225,200,255,0.54) 0%, rgba(195,165,252,0.44) 45%, rgba(162,122,238,0.26) 100%)', boxShadow: '0 36px 110px rgba(120,70,218,0.60), 0 18px 52px rgba(175,135,255,0.50), 0 6px 22px rgba(110,55,195,0.38), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.46)' }} />
          <div className="fgl-shape fl1-shape sd3" style={{ left: formVisible ? '6%' : '52%', background: 'linear-gradient(152deg, rgba(188,198,255,0.46) 0%, rgba(158,168,252,0.34) 45%, rgba(122,137,238,0.20) 100%)', boxShadow: '0 30px 95px rgba(95,108,232,0.50), 0 14px 44px rgba(145,158,255,0.40), 0 4px 16px rgba(85,98,215,0.30), inset 0 2px 0 rgba(255,255,255,0.62), inset 1px 0 0 rgba(255,255,255,0.36)', opacity: 0.78 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(244,243,250,0.97) 0%, rgba(244,243,250,0.78) 38%, transparent 100%)', zIndex: 10 }} />
        </div>

        <div className={`cta-content ${formVisible ? 'slide-out' : ''}`} style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', flex: 1, minHeight: '76vh' }}>
          <div className="cta-topbar">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 11 }}>
              <p style={{ fontSize: 'clamp(11px, 1.05vw, 13px)', color: '#4a4a5a', margin: 0, textAlign: 'right', lineHeight: 1.55, fontFamily: 'var(--font-body)' }}>
                Schedule a free consultation<br />with our experts
              </p>
              <button className="git-btn" onClick={handleGetInTouch}>
                Get in touch
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ padding: '0 clamp(16px,5vw,56px) clamp(28px,3.8vw,50px)' }}>
              <p className="hero-label">Partner With Us</p>
              <h2 className="hero-heading">
                Advance Precision<br />Health Research<br />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(7px,1.1vw,16px)' }}>
                  In Just
                  <span className="hero-badge">
                    One Email
                    <svg width="clamp(20px,2.8vw,38px)" height="clamp(20px,2.8vw,38px)" fill="none" stroke="#1a1a24" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </span>
              </h2>
            </div>
          </div>
          <div className="cta-bottom">
            <div className="cta-bottom-divider" style={{ padding: 'clamp(14px,2.6vw,26px) clamp(14px,2.3vw,26px) clamp(14px,2.6vw,26px) clamp(16px,5vw,56px)' }}>
              <p style={{ fontSize: 'clamp(9px,0.95vw,11px)', fontFamily: 'var(--font-ui)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', margin: '0 0 9px' }}>Proven Impact</p>
              <p style={{ fontSize: 'clamp(11px,1.05vw,13px)', color: '#555', lineHeight: 1.68, margin: 0, fontFamily: 'var(--font-body)' }}>A California-based 501(c)(3) nonprofit advancing equitable access to AI-driven cancer diagnostics and genomic medicine worldwide.</p>
            </div>
            <div className="cta-bottom-divider" style={{ display: 'flex', alignItems: 'flex-start', gap: 13, padding: 'clamp(14px,2.6vw,26px) clamp(14px,2.3vw,26px)' }}>
              <div style={{ flexShrink: 0, marginTop: 2, width: 30, height: 30, borderRadius: '50%', border: '1.5px solid #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" fill="none" stroke="#666" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
              <p style={{ fontSize: 'clamp(11px,1.1vw,13px)', color: '#555', lineHeight: 1.68, margin: 0, fontFamily: 'var(--font-body)' }}>Moving innovations from lab to clinic — translational research powered by AI and genomic precision.</p>
            </div>
          </div>
        </div>

        <div className={`form-container ${formVisible ? 'visible' : ''}`}>
          <button className="back-arrow-btn" onClick={handleExit} onMouseEnter={() => setArrowHovered(true)} onMouseLeave={() => setArrowHovered(false)} aria-label="Go back">
            <div className="back-arrow-icon">
              <svg className="back-arrow-svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
            </div>
            <span className="back-arrow-label">Back</span>
          </button>
          <div style={{ width: '100%', maxWidth: 480, paddingTop: 52 }}>
            {!showSuccess ? (
              <>
                <h3 className="form-title">Get in Touch</h3>
                <p className="form-desc">Let's discuss how we can collaborate to advance precision health research.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px,1.6vw,18px)', marginBottom: 'clamp(14px,1.8vw,22px)' }}>
                    <div>
                      <label className="form-label" htmlFor="fname">First Name</label>
                      <input className={`form-input ${focusedField === 'fname' ? 'has-content' : ''}`} type="text" id="fname" name="fname" required onFocus={() => setFocusedField('fname')} onBlur={(e) => !e.target.value && setFocusedField(null)} onChange={(e) => e.target.value && setFocusedField('fname')} />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="lname">Last Name</label>
                      <input className={`form-input ${focusedField === 'lname' ? 'has-content' : ''}`} type="text" id="lname" name="lname" required onFocus={() => setFocusedField('lname')} onBlur={(e) => !e.target.value && setFocusedField(null)} onChange={(e) => e.target.value && setFocusedField('lname')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input className={`form-input ${focusedField === 'email' ? 'has-content' : ''}`} type="email" id="email" name="email" required onFocus={() => setFocusedField('email')} onBlur={(e) => !e.target.value && setFocusedField(null)} onChange={(e) => e.target.value && setFocusedField('email')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="organization">Organization</label>
                    <input className={`form-input ${focusedField === 'organization' ? 'has-content' : ''}`} type="text" id="organization" name="organization" onFocus={() => setFocusedField('organization')} onBlur={(e) => !e.target.value && setFocusedField(null)} onChange={(e) => e.target.value && setFocusedField('organization')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className={`form-textarea ${focusedField === 'message' ? 'has-content' : ''}`} id="message" name="message" required onFocus={() => setFocusedField('message')} onBlur={(e) => !e.target.value && setFocusedField(null)} onChange={(e) => e.target.value && setFocusedField('message')} />
                  </div>
                  <button type="submit" className="form-submit">Send Message</button>
                </form>
              </>
            ) : (
              <div className="success-notification" style={{ background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', padding: 'clamp(36px,5vw,52px) clamp(24px,4vw,40px)', borderRadius: 14, textAlign: 'center', border: '1.5px solid rgba(100,200,100,0.28)', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
                <div style={{ width: 62, height: 62, margin: '0 auto 22px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(16,185,129,0.4)' }}>
                  <svg width="30" height="30" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth={2.8}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.4vw,1.65rem)', fontWeight: 400, color: '#1a1a24', marginTop: 0, marginBottom: 10, letterSpacing: '-0.01em' }}>Message Sent!</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: '#6b6b80', lineHeight: 1.65, margin: 0 }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ REDESIGNED FOOTER ═══════════════════════ */}
      <footer className="shri-footer">
        <div className="shri-footer-inner">
          <div className="shri-footer-top">

            {/* ── Col 1 · Brand ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Logo mark */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 34, height: 34,
                  background: 'linear-gradient(135deg, #ff8c1e 0%, #a064ff 50%, #3282ff 100%)',
                  borderRadius: 7,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(160,100,255,0.35)',
                }}>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-ui)', lineHeight: 1 }}>S</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.09em', margin: 0, color: '#fff', lineHeight: 1.2 }}>SHRI</p>
                  <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.35)', margin: 0, fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>Senus Healthcare Research Institute</p>
                </div>
              </div>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.75, maxWidth: 260, margin: '0 0 20px', fontFamily: 'var(--font-body)' }}>
                A California-based 501(c)(3) nonprofit advancing equitable access to AI-driven cancer diagnostics and genomic medicine worldwide.
              </p>

              {/* Email chip */}
              <div
                className="shri-email-chip"
                onClick={handleCopy}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCopy()}
                aria-label="Copy email"
              >
                <svg width="15" height="15" fill="none" stroke="rgba(255,255,255,0.45)" viewBox="0 0 24 24" strokeWidth={1.8} style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:info@senushealth.org"
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontFamily: 'var(--font-body)', flex: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  info@senushealth.org
                </a>
                <span className="shri-copy-badge">
                  {copied
                    ? <><svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Copied</>
                    : <><svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg> Copy</>
                  }
                </span>
              </div>

              {/* Social pills */}
              <div className="shri-social-row">
                {[
                  {
                    label: '𝕏',
                    name: 'Twitter',
                    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.257 5.626zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                  },
                  {
                    label: 'in',
                    name: 'LinkedIn',
                    icon: <svg width="13" height="13" fill="none" stroke="rgba(255,255,255,0.5)" viewBox="0 0 24 24" strokeWidth={2}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
                  },
                  {
                    label: 'gh',
                    name: 'GitHub',
                    icon: <svg width="13" height="13" fill="none" stroke="rgba(255,255,255,0.5)" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>,
                  },
                ].map(({ name, icon }) => (
                  <a key={name} href="#" className="shri-social-pill" aria-label={name}>
                    {icon}
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2 · Quick Links ── */}
            <div>
              <p className="shri-col-label">Quick Links</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { name: 'About Us', href: '#about' },
                  { name: 'Focus Areas', href: '#focus' },
                  { name: 'Programs', href: '#programs' },
                  { name: 'Partnership', href: '#partnership' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="shri-flink">{link.name}</a>
                  </li>
                ))}
              </ul>

              <p className="shri-col-label" style={{ marginTop: 28 }}>Research Areas</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { name: 'Precision Medicine', href: '#' },
                  { name: 'AI Diagnostics', href: '#' },
                  { name: 'Genomic Research', href: '#' },
                  { name: 'Clinical Trials', href: '#' },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="shri-flink">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3 · Programs & Legal ── */}
            <div>
              <p className="shri-col-label">Specialists On Demand</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Genomic Cost Audit',
                  'AI Rapid Prototyping',
                  'Next-gen Sequencing',
                  'Acceleration Sprints',
                  'App Modernization',
                  'Observability Strategy',
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="shri-flink">{item}</a>
                  </li>
                ))}
              </ul>

              <p className="shri-col-label" style={{ marginTop: 28 }}>Legal</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="shri-flink">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4 · Map + Addresses (hidden below 1100px) ── */}
            <div className="shri-footer-col-map">
              <p className="shri-col-label">Our Locations</p>

              {/* Map */}
              <div className="shri-map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12675.473773613428!2d-121.8853!3d37.3382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f05cb!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1712000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SHRI Location"
                />
              </div>

              {/* Address — USA */}
              <div className="shri-address-card">
                <svg width="15" height="15" fill="none" stroke="rgba(160,100,255,0.75)" viewBox="0 0 24 24" strokeWidth={1.8} style={{ flexShrink: 0, marginTop: 1 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p style={{ fontSize: 11, fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'rgba(255,255,255,0.55)', margin: '0 0 3px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>California, USA</p>
                  <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.38)', margin: 0, lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>
                    6559 Springpath Lane,<br />San Jose, CA 95119
                  </p>
                </div>
              </div>

              {/* Address — India */}
              <div className="shri-address-card" style={{ marginBottom: 0 }}>
                <svg width="15" height="15" fill="none" stroke="rgba(50,130,255,0.75)" viewBox="0 0 24 24" strokeWidth={1.8} style={{ flexShrink: 0, marginTop: 1 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p style={{ fontSize: 11, fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'rgba(255,255,255,0.55)', margin: '0 0 3px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Tamil Nadu, India</p>
                  <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.38)', margin: 0, lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>
                    Rukmani Nagar, Ramanathapuram,<br />Coimbatore, TN 641045
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="shri-footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 22, height: 22,
              background: 'linear-gradient(135deg, #ff8c1e 0%, #a064ff 50%, #3282ff 100%)',
              borderRadius: 4,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 9, fontFamily: 'var(--font-ui)', lineHeight: 1 }}>S</span>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)', margin: 0, fontFamily: 'var(--font-body)' }}>
              © {year} Senus Healthcare Research Institute · 501(c)(3) Nonprofit · All rights reserved.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px rgba(34,197,94,0.7)', flexShrink: 0 }} />
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--font-body)' }}>All systems operational</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;