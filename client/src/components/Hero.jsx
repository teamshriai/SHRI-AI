import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .gl-shape {
          position: absolute;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          will-change: transform;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 77%);
          -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 77%);
        }

        .l1-shape {
          width: 14%;
          height: clamp(180px, 52vh, 560px);
          top: -8vh;
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }
        .l2-shape {
          width: 14%;
          height: clamp(90px, 26vh, 280px);
          top: -2vh;
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
        }
        .l1-shape-mob {
          width: 29%;
          height: clamp(160px, 48vh, 400px);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .l2-shape-mob {
          width: 29%;
          height: clamp(80px, 24vh, 200px);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .shapes-desktop { display: block; }
        .shapes-mobile  { display: none;  }

        @media (max-width: 768px) {
          .shapes-desktop { display: none;  }
          .shapes-mobile  { display: block; }
        }

        .dna-clip-box {
          position: absolute;
          right: 0; top: 0;
          height: 100vh;
          width: clamp(320px, 44vw, 740px);
          overflow: hidden;
          pointer-events: none;
          z-index: 5;
        }
        .dna-img {
          position: absolute;
          display: block;
          width: 100%; height: 115%;
          top: -10%; left: 10%;
          object-fit: cover;
          object-position: 60% 20%;
          user-select: none;
        }

        @media (max-width: 1280px) {
          .l1-shape     { backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
          .l2-shape     { backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); }
          .dna-clip-box { width: clamp(280px, 42vw, 660px); }
        }
        @media (max-width: 1024px) {
          .l1-shape     { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
          .l2-shape     { backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
          .dna-clip-box { width: clamp(240px, 40vw, 560px); }
        }
        @media (max-width: 768px) {
          .dna-clip-box {
            top: 0; left: 0; right: 0;
            width: 100%; height: 100%;
            clip-path: none;
            -webkit-clip-path: none;
            z-index: 2;
          }
          .dna-img {
            top: -8%; left: -5%;
            width: 110%; height: 116%;
            object-position: 55% 50%;
            opacity: 0.15;
          }
        }
        @media (max-width: 480px) {
          .dna-img {
            top: -5%; left: -10%;
            width: 120%; height: 110%;
            object-position: 52% 50%;
            opacity: 0.12;
          }
        }

        /* ── Logo ── */
        .hero-logo-wrap {
          position: relative;
          display: inline-block;
          width:  clamp(52px, 8vw, 280px);
          height: clamp(52px, 8vw, 280px);
          margin-bottom: clamp(4px, 0.8vw, 12px);
          flex-shrink: 0;
        }

        .hero-logo-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }

        @media (max-width: 1024px) {
          .hero-logo-wrap {
            width:  clamp(80px, 16vw, 220px);
            height: clamp(80px, 16vw, 220px);
          }
        }
        @media (max-width: 768px) {
          .hero-logo-wrap {
            width:  clamp(70px, 22vw, 160px);
            height: clamp(70px, 22vw, 160px);
            margin-bottom: clamp(3px, 1.5vw, 10px);
          }
        }
        @media (max-width: 480px) {
          .hero-logo-wrap {
            width:  clamp(60px, 26vw, 130px);
            height: clamp(60px, 26vw, 130px);
          }
        }

        /* ── Hero heading ── */
        .hero-heading {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(1.2rem, 2.1vw, 2.9rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #44444e;
          margin: 0 0 clamp(10px, 1.4vw, 22px) 0;
        }
        .hero-heading .word-ai       { color: #c0392b; font-weight: 300; }
        .hero-heading .word-genomics { color: #2a6db5; font-weight: 300; }

        @media (max-width: 1280px) { .hero-heading { font-size: clamp(1.1rem, 2.0vw, 2.5rem); } }
        @media (max-width: 1024px) { .hero-heading { font-size: clamp(1.0rem, 2.3vw, 2.2rem); } }
        @media (max-width: 768px)  { .hero-heading { font-size: clamp(1.0rem, 3.6vw, 1.8rem); line-height: 1.14; } }
        @media (max-width: 640px)  { .hero-heading { font-size: clamp(0.95rem, 4.2vw, 1.6rem); } }
        @media (max-width: 480px)  { .hero-heading { font-size: clamp(0.88rem, 4.8vw, 1.4rem); } }
        @media (max-width: 360px)  { .hero-heading { font-size: clamp(0.8rem,  5.2vw, 1.2rem); } }

        /* ── Support tagline ── */
        .hero-support-text {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(13px, 1.35vw, 19px);
          color: #6a6a7e;
          line-height: 1.7;
          margin: 0;
          max-width: clamp(300px, 50vw, 720px);
        }
        .hero-support-text a {
          color: #2a6db5;
          text-decoration: none;
          font-weight: 400;
        }
        .hero-support-text a:hover {
          text-decoration: underline;
        }

        @media (max-width: 1280px) {
          .hero-support-text {
            font-size: clamp(13px, 1.28vw, 18px);
            max-width: clamp(280px, 52vw, 660px);
          }
        }
        @media (max-width: 1024px) {
          .hero-support-text {
            font-size: clamp(13px, 1.55vw, 17px);
            max-width: clamp(260px, 60vw, 580px);
          }
        }
        @media (max-width: 768px) {
          .hero-support-text {
            font-size: clamp(13px, 3.2vw, 16px);
            max-width: 100%;
          }
        }
        @media (max-width: 480px) {
          .hero-support-text {
            font-size: clamp(12.5px, 3.5vw, 15px);
          }
        }
        @media (max-width: 360px) {
          .hero-support-text {
            font-size: clamp(12px, 3.8vw, 14px);
          }
        }

        /* ── Bottom bar ── */
        .hero-bottom-bar {
          border-top: 1px solid rgba(100,100,120,0.13);
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .hero-bottom-grid {
          display: grid;
          grid-template-columns: 1fr;
          padding: 0 clamp(16px, 5vw, 56px);
        }

        .hero-bottom-col {
          padding: clamp(10px,1.6vw,16px) clamp(12px,1.6vw,20px);
        }

        .bar-text {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(9px, 0.62vw, 10.5px);
          color: #78788a;
          line-height: 1.72;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-bottom-grid {
            padding: 0;
          }
          .hero-bottom-col {
            padding: clamp(12px, 4vw, 18px) clamp(16px, 5vw, 24px) !important;
          }
          .bar-text { font-size: clamp(10px, 2.6vw, 13px); }
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          minHeight: '88vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%)',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* ── Background glow blobs ── */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '-20%', left: '-8%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,140,30,0.55) 0%, rgba(255,180,80,0.25) 35%, transparent 70%)',  filter: 'blur(50px)' }} />
          <div style={{ position: 'absolute', width: '50%', height: '60%', top: '-15%', left: '22%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,100,255,0.45) 0%, rgba(200,160,255,0.22) 40%, transparent 70%)', filter: 'blur(55px)' }} />
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '-20%', right: '-8%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(50,130,255,0.50) 0%, rgba(100,170,255,0.25) 35%, transparent 70%)',  filter: 'blur(50px)' }} />
          <div style={{ position: 'absolute', width: '30%', height: '40%', top: '5%',   right: '5%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(20,90,220,0.35) 0%, transparent 70%)',                            filter: 'blur(40px)' }} />
        </div>

        {/* ── Glass shapes ── */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>

          <div className="shapes-desktop" style={{ position: 'absolute', inset: 0 }}>
            <motion.div animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 8.0, repeat: Infinity, ease: "easeInOut", delay: 0.0 }} className="gl-shape l1-shape"  style={{ left: '1%',    background: 'linear-gradient(145deg, rgba(255,200,100,0.50) 0%, rgba(255,165,50,0.36) 45%, rgba(255,140,30,0.20) 100%)',  boxShadow: '0 24px 96px rgba(220,120,20,0.85), 0 12px 48px rgba(255,160,40,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0, -13, 0], rotate: [0, -1.5, 0] }} transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="gl-shape l1-shape"  style={{ left: '16.5%', background: 'linear-gradient(145deg, rgba(255,185,130,0.50) 0%, rgba(255,155,90,0.36) 45%, rgba(245,125,60,0.20) 100%)',  boxShadow: '0 24px 96px rgba(230,110,40,0.85), 0 12px 48px rgba(255,145,70,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="gl-shape l1-shape"  style={{ left: '32%',   background: 'linear-gradient(145deg, rgba(210,175,255,0.50) 0%, rgba(180,140,245,0.36) 45%, rgba(150,110,230,0.20) 100%)',  boxShadow: '0 24px 96px rgba(140,90,220,0.85), 0 12px 48px rgba(180,130,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0, -11, 0], rotate: [0, -1, 0] }} transition={{ duration: 10.0, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} className="gl-shape l1-shape"  style={{ left: '47.5%', background: 'linear-gradient(145deg, rgba(185,195,255,0.50) 0%, rgba(155,165,250,0.36) 45%, rgba(120,135,235,0.20) 100%)',  boxShadow: '0 24px 96px rgba(100,110,230,0.85), 0 12px 48px rgba(150,160,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="gl-shape l1-shape"  style={{ left: '63%',   background: 'linear-gradient(145deg, rgba(140,200,255,0.50) 0%, rgba(90,165,255,0.36) 45%, rgba(50,130,240,0.20) 100%)',   boxShadow: '0 24px 96px rgba(50,120,240,0.85), 0 12px 48px rgba(100,170,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0, -22, 0], rotate: [0, -2, 0] }} transition={{ duration: 9.0, repeat: Infinity, ease: "easeInOut", delay: 1.0 }} className="gl-shape l1-shape"  style={{ left: '78.5%', background: 'linear-gradient(145deg, rgba(110,175,255,0.48) 0%, rgba(70,140,245,0.34) 45%, rgba(30,100,220,0.18) 100%)',   boxShadow: '0 24px 96px rgba(30,90,210,0.85), 0 12px 48px rgba(70,140,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />

            <motion.div animate={{ y: [0, -14, 0], rotate: [0, 1, 0] }} transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="gl-shape l2-shape"  style={{ left: '9%',    background: 'linear-gradient(150deg, rgba(255,230,150,0.58) 0%, rgba(255,200,80,0.46) 45%, rgba(240,170,40,0.26) 100%)',   boxShadow: '0 30px 100px rgba(200,140,20,0.85), 0 14px 50px rgba(255,190,50,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0, -19, 0], rotate: [0, -1.5, 0] }} transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} className="gl-shape l2-shape"  style={{ left: '24.5%', background: 'linear-gradient(150deg, rgba(255,210,175,0.58) 0%, rgba(255,175,130,0.46) 45%, rgba(245,145,100,0.26) 100%)',  boxShadow: '0 30px 100px rgba(230,120,60,0.85), 0 14px 50px rgba(255,160,100,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }} transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }} className="gl-shape l2-shape"  style={{ left: '40%',   background: 'linear-gradient(150deg, rgba(220,195,255,0.58) 0%, rgba(190,160,250,0.46) 45%, rgba(160,120,235,0.26) 100%)',  boxShadow: '0 30px 100px rgba(130,80,220,0.85), 0 14px 50px rgba(180,140,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0, -17, 0], rotate: [0, -1, 0] }} transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="gl-shape l2-shape"  style={{ left: '55.5%', background: 'linear-gradient(150deg, rgba(165,195,255,0.58) 0%, rgba(125,165,250,0.46) 45%, rgba(85,135,235,0.26) 100%)',   boxShadow: '0 30px 100px rgba(70,110,225,0.85), 0 14px 50px rgba(130,170,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0, -21, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }} className="gl-shape l2-shape"  style={{ left: '71%',   background: 'linear-gradient(150deg, rgba(175,220,255,0.58) 0%, rgba(120,185,255,0.46) 45%, rgba(70,150,245,0.26) 100%)',   boxShadow: '0 30px 100px rgba(50,110,230,0.85), 0 14px 50px rgba(100,165,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
          </div>

          <div className="shapes-mobile" style={{ position: 'absolute', inset: 0 }}>
            <motion.div animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="gl-shape l2-shape-mob" style={{ left: '8%',  top: '-12vh', background: 'linear-gradient(150deg, rgba(255,230,150,0.58) 0%, rgba(255,200,80,0.46) 45%, rgba(240,170,40,0.26) 100%)',   boxShadow: '0 30px 100px rgba(200,140,20,0.85), 0 14px 50px rgba(255,190,50,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0, -19, 0], rotate: [0, -1, 0] }} transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} className="gl-shape l2-shape-mob" style={{ left: '34%', top: '-9vh',  background: 'linear-gradient(150deg, rgba(255,210,175,0.58) 0%, rgba(255,175,130,0.46) 45%, rgba(245,145,100,0.26) 100%)',  boxShadow: '0 30px 100px rgba(230,120,60,0.85), 0 14px 50px rgba(255,160,100,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }} transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }} className="gl-shape l2-shape-mob" style={{ left: '66%', top: '-13vh', background: 'linear-gradient(150deg, rgba(220,195,255,0.58) 0%, rgba(190,160,250,0.46) 45%, rgba(160,120,235,0.26) 100%)',  boxShadow: '0 30px 100px rgba(130,80,220,0.85), 0 14px 50px rgba(180,140,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0, -16, 0], rotate: [0, -1.5, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="gl-shape l1-shape-mob" style={{ left: '18%', top: '-6vh',  background: 'linear-gradient(145deg, rgba(140,200,255,0.50) 0%, rgba(90,165,255,0.36) 45%, rgba(50,130,240,0.20) 100%)',   boxShadow: '0 24px 96px rgba(50,120,240,0.85), 0 12px 48px rgba(100,170,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0, -22, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 9.0, repeat: Infinity, ease: "easeInOut", delay: 1.0 }} className="gl-shape l1-shape-mob" style={{ left: '58%', top: '-10vh', background: 'linear-gradient(145deg, rgba(110,175,255,0.48) 0%, rgba(70,140,245,0.34) 45%, rgba(30,100,220,0.18) 100%)',   boxShadow: '0 24px 96px rgba(30,90,210,0.85), 0 12px 48px rgba(70,140,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
          </div>

          {/* Bottom fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '38%', background: 'linear-gradient(to top, rgba(245,244,250,0.97) 0%, rgba(245,244,250,0.80) 35%, transparent 100%)', zIndex: 10 }} />
        </div>

        {/* ── DNA Image ── */}
        <div className="dna-clip-box">
          <img className="dna-img" src="/gene.png" alt="DNA double helix" draggable={false} />
        </div>

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', minHeight: '88vh' }}>

          {/* Headline + Logo — bottom-left */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ padding: '0 clamp(16px,5vw,56px) clamp(22px,3vw,40px)' }}>

              {/* ── Logo ── */}
              <div className="hero-logo-wrap">
                <img
                  className="hero-logo-img"
                  src="/trans-logo.png"
                  alt="SHRI AI"
                  draggable={false}
                />
              </div>

              {/* ── Heading ── */}
              <h1 className="hero-heading">
                Advancing<br />
                Precision Oncology<br />
                Through{' '}
                <span className="word-ai">AI</span>
                {' '}&amp;{' '}
                <span className="word-genomics">Genomics</span>
              </h1>

              {/* ── Support tagline ── */}
              <p className="hero-support-text">
                SHRI-AI proudly supports{' '}
                <a href="https://OncoTraceAI.org" target="_blank" rel="noopener noreferrer">
                  OncoTraceAI.org
                </a>
                {' '}— an open-source AI platform advancing liquid biopsy, ctDNA, and precision oncology through collaborative innovation and accessible healthcare technology.
              </p>

            </div>
          </div>

          {/* ── Bottom bar (empty, kept for layout integrity) ── */}
          <div className="hero-bottom-bar">
            <div className="hero-bottom-grid" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;